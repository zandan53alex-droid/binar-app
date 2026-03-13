import asyncio
import logging
from datetime import datetime, timedelta
from sqlalchemy import select
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

from db import get_session, User, ReminderOverride
from config_service import support_url
from texts import t

async def get_reminder_text(session, lang, r_type, timing, default):
    try:
        res = await session.execute(select(ReminderOverride.text).where(
            ReminderOverride.lang == lang, 
            ReminderOverride.rem_type == r_type, 
            ReminderOverride.timing == timing
        ))
        row = res.scalar_one_or_none()
        return row if row else default
    except Exception:
        return default

async def reminder_worker(bot):
    logging.info("🚀 Воркер дожимов 24/7 запущен.")
    while True:
        try:
            # 1. Сначала получаем ссылку на поддержку из базы (одним запросом для всех)
            s_url = await support_url() or "https://t.me/your_admin"
            
            async with get_session() as session:
                now = datetime.utcnow()
                
                # Конфигурация всех 4 фаз
                phases = [
                    ("reg", "2h", "rem_reg_2h", User.created_at, User.is_registered == False, timedelta(hours=2)),
                    ("reg", "24h", "rem_reg_24h", User.created_at, User.is_registered == False, timedelta(hours=24)),
                    ("dep", "2h", "rem_dep_2h", User.registered_at, User.has_deposit == False, timedelta(hours=2)),
                    ("dep", "24h", "rem_dep_24h", User.registered_at, User.has_deposit == False, timedelta(hours=24)),
                ]

                for r_type, timing, flag_col, time_col, status_cond, delta in phases:
                    stmt = select(User).where(
                        status_cond,
                        getattr(User, flag_col) == False,
                        time_col != None,
                        time_col <= now - delta
                    )
                    
                    res = await session.execute(stmt)
                    users = res.scalars().all()

                    for u in users:
                        try:
                            lang = u.language or "en"
                            # Берем текст из БД (тот, что вы вставили через админку)
                            raw_text = await get_reminder_text(session, lang, r_type, timing, "Error detected. Contact support.")
                            
                            # Подставляем имя юзера
                            first_name = u.full_name.split()[0] if u.full_name else "Trader"
                            final_text = raw_text.replace("{name}", first_name)

                            # --- КНОПКА (Генерируется для каждого сообщения) ---
                            support_btn_label = t(lang, "btn_support") # Локализация "Поддержка"
                            markup = InlineKeyboardMarkup(inline_keyboard=[
                                [InlineKeyboardButton(text=support_btn_label, url=s_url)]
                            ])

                            # Отправка
                            await bot.send_message(
                                u.telegram_id, 
                                final_text, 
                                parse_mode="HTML", 
                                reply_markup=markup
                            )
                            logging.info(f"✅ Дожим {r_type} {timing} отправлен {u.telegram_id}")
                            
                        except Exception as e:
                            logging.error(f"❌ Ошибка отправки юзеру {u.telegram_id}: {e}")
                        finally:
                            # Помечаем в БД, что этот дожим отправлен, чтобы не спамить
                            setattr(u, flag_col, True)
                            await session.commit()

        except Exception as e:
            logging.critical(f"🛑 КРИТИЧЕСКАЯ ОШИБКА ВОРКЕРА: {e}")
        
        # Проверка раз в 10 минут (достаточно для 24/7)
        await asyncio.sleep(15) 
