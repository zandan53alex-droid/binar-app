import asyncio
import logging
from pathlib import Path
from typing import Optional
import hmac, hashlib
import re
from datetime import datetime

from aiogram import Bot, Dispatcher, F, Router
from aiogram.client.default import DefaultBotProperties
from aiogram.exceptions import TelegramForbiddenError, TelegramBadRequest
from aiogram.filters import Command, ChatMemberUpdatedFilter, JOIN_TRANSITION
from aiogram.types import Message, CallbackQuery, FSInputFile, ChatMemberUpdated, InlineKeyboardMarkup, InlineKeyboardButton

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from settings import settings
from db import (
    init_db, get_session, get_or_create_user, User,
    ensure_click_id, ContentOverride
)
from texts import t
from keyboards import (
    kb_main, kb_instruction, kb_lang, kb_subscribe,
    kb_register, kb_deposit, kb_access
)
from admin import router as admin_router
from config_service import *
from reminders import reminder_worker

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

ASSETS = Path(__file__).parent / "assets"

# --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---

def user_lang(u: User) -> str: 
    return u.language or "en"

async def make_sig(kind: str, click_id: str) -> str:
    secret = await pb_secret()
    return hmac.new(secret.encode(), f"{kind}:{click_id}".encode(), hashlib.sha256).hexdigest()

def photo_path(lang: str, key: str) -> Optional[Path]:
    for ext in [".jpg", ".png", ".jpeg"]:
        p = ASSETS / lang / f"{key}{ext}"
        if p.exists():
            return p
    return None

def replace_link_macros(url: str, click_id: str) -> str:
    if not url: return ""
    res = url.replace("{click_id}", click_id).replace("{}", click_id)
    return re.sub(r'([?&])click_id=click_id', r'\1click_id=' + click_id, res)

async def delete_previous(bot, chat_id, user):
    if user.last_bot_message_id:
        try: await bot.delete_message(chat_id, user.last_bot_message_id)
        except: pass
        user.last_bot_message_id = None

# --- ФУНКЦИЯ УВЕДОМЛЕНИЙ АДМИНА ---

async def notify_admins(bot: Bot, event_name: str, user: User, amount: Optional[float] = None):
    try:
        admin_ids = settings.ADMIN_IDS or ([settings.ADMIN_ID] if settings.ADMIN_ID else [])
        now_str = datetime.now().strftime("%d.%m.%Y %H:%M:%S")
        username_str = f"@{user.username}" if user.username else "отсутствует"
        
        icon = "✅"
        msg = f"{icon} <b>Событие: {event_name}</b>\n\n"
        if "старт" not in event_name.lower():
            msg += f"👤 <b>Trader ID:</b> <code>{user.trader_id or '{trader_id}'}</code>\n"
        msg += (
            f"👤 <b>Имя:</b> {user.full_name or 'скрыто'}\n"
            f"🔗 <b>Username:</b> {username_str}\n"
            f"🆔 <b>Telegram ID:</b> <code>{user.telegram_id}</code>\n"
            f"⏰ <b>Время:</b> {now_str}\n"
        )
        if amount is not None:
            msg += f"💰 <b>Сумма депозита:</b> ${amount}\n"
        
        # Попытка отправить с картинкой для красоты
        photo = photo_path("ru", "main") # Используем главную картинку как фон для алертов
        
        for aid in admin_ids:
            if aid > 0:
                try: 
                    if photo: await bot.send_photo(aid, FSInputFile(photo), caption=msg, parse_mode="HTML")
                    else: await bot.send_message(aid, msg, parse_mode="HTML")
                except: pass
    except Exception as e:
        logger.error(f"Error in notify_admins: {e}")

# --- ОТПРАВКА ЭКРАНОВ ---

async def send_screen(bot, user, key, title_key, text_key, markup, session):
    await delete_previous(bot, user.telegram_id, user)
    lang = user_lang(user)
    caption = f"<b>{t(lang, title_key)}</b>\n\n{t(lang, text_key)}"
    img = photo_path(lang, key)
    try:
        if img: msg = await bot.send_photo(user.telegram_id, FSInputFile(img), caption=caption, reply_markup=markup)
        else: msg = await bot.send_message(user.telegram_id, caption, reply_markup=markup)
        user.last_bot_message_id = msg.message_id
        await session.commit()
    except: pass

async def send_deposit_progress(bot, user, session):
    await delete_previous(bot, user.telegram_id, user)
    lang = user_lang(user)
    need, paid = await first_deposit_min(), float(user.total_deposits or 0.0)
    extra = f"\n\n<b>{t(lang,'deposit_need')}:</b> ${need}\n<b>{t(lang,'deposit_paid')}:</b> ${paid}\n<b>{t(lang,'deposit_left')}:</b> ${max(0.0, need-paid)}"
    
    # Формирование ссылки депозита
    base = (await public_base() or "").strip().rstrip("/")
    if base and "http" in base:
        url = f"{base}/d/{user.click_id}/{await make_sig('dep', user.click_id)}"
    else:
        url = replace_link_macros(await ref_dep_a(), user.click_id)

    caption = f"<b>{t(lang, 'deposit_title')}</b>\n\n{t(lang, 'deposit_text')}{extra}"
    img = photo_path(lang, "deposit")
    try:
        if img: msg = await bot.send_photo(user.telegram_id, FSInputFile(img), caption=caption, reply_markup=kb_deposit(lang, url))
        else: msg = await bot.send_message(user.telegram_id, caption, reply_markup=kb_deposit(lang, url))
        user.last_bot_message_id = msg.message_id
        await session.commit()
    except: pass

# --- ЛОГИКА МАРШРУТИЗАЦИИ ---

async def check_subscription(bot: Bot, tg_id: int) -> bool:
    try:
        cid = await channel_id()
        if not cid: return True
        m = await bot.get_chat_member(cid, tg_id)
        return m.status in {"member", "administrator", "creator"}
    except: return False

async def has_access_now(u: User) -> bool:
    reg_on = await check_registration_enabled()
    dep_on = await check_deposit_enabled()
    
    # Режим отладки для админа (опционально, но здесь лучше оставить строго)
    is_access = (not reg_on or u.is_registered) and (not dep_on or u.has_deposit)
    logger.info(f"Access check for {u.telegram_id}: reg_on={reg_on}, is_reg={u.is_registered}, dep_on={dep_on}, is_dep={u.has_deposit} -> Result: {is_access}")
    return is_access

async def route_to_start_or_sub(bot: Bot, user: User, session: AsyncSession):
    if not await check_subscription(bot, user.telegram_id):
        await send_screen(bot, user, 'subscribe', 'subscribe_title', 'subscribe_text', kb_subscribe(user_lang(user), await channel_url()), session)
    else:
        user.is_subscribed = True
        can = await has_access_now(user)
        await send_screen(bot, user, 'main', 'main_title', 'main_desc', kb_main(user_lang(user), user.is_platinum, can, await support_url(), await reviews_url()), session)

async def evaluate_and_route(bot: Bot, tg_id: int, manual: bool = False) -> None:
    async with get_session() as session:
        res = await session.execute(select(User).where(User.telegram_id == tg_id))
        u = res.scalar_one_or_none()
        if not u: return
        await session.refresh(u)
        
        lang = user_lang(u)
        th = await platinum_threshold()
        is_platinum_sum = float(u.total_deposits or 0.0) >= th

        if not manual and is_platinum_sum and u.platinum_notified: return

        # 1. ПОДПИСКА
        if not await check_subscription(bot, tg_id):
            if manual: await route_to_start_or_sub(bot, u, session)
            return

        # 2. РЕГИСТРАЦИЯ
        if (await check_registration_enabled()) and not u.is_registered:
            if manual:
                u = await ensure_click_id(session, u)
                base = (await public_base() or "").strip().rstrip("/")
                if base and "http" in base:
                    reg_url = f"{base}/r/{u.click_id}/{await make_sig('reg', u.click_id)}"
                else:
                    reg_url = replace_link_macros(await ref_reg_a(), u.click_id)
                
                await send_screen(bot, u, 'register', 'register_title', 'register_text', kb_register(lang, reg_url), session)
            return

        # 3. ДЕПОЗИТ
        if (await check_deposit_enabled()) and not u.has_deposit:
            await send_deposit_progress(bot, u, session)
            return

        # 4. ВЫДАЧА ДОСТУПА
        if is_platinum_sum:
            u.is_platinum = True
            if not u.platinum_notified:
                u.platinum_notified = True
                await session.commit()
                await send_screen(bot, u, 'platinum', 'platinum_title', 'platinum_text', kb_access(lang, True), session)
            elif manual:
                await route_to_start_or_sub(bot, u, session)
            return
        else:
            if not u.access_notified:
                u.access_notified = True
                await session.commit()
                await send_screen(bot, u, 'access', 'access_title', 'access_text', kb_access(lang, False), session)
            elif manual:
                await route_to_start_or_sub(bot, u, session)
            return

# --- HANDLERS ---
router = Router()

@router.message(Command("start"))
async def cmd_start(m: Message, bot: Bot):
    async with get_session() as session:
        u = await get_or_create_user(session, m.from_user.id)
        u.username, u.full_name = m.from_user.username, m.from_user.full_name
        await session.commit()
        if not u.language:
            await notify_admins(bot, "нажатие /start", u)
            await send_screen(bot, u, 'langs', 'lang_title', 'lang_title', kb_lang("en", False), session)
        else: 
            await route_to_start_or_sub(bot, u, session)

@router.callback_query(F.data == 'menu')
async def cb_menu_user(c: CallbackQuery, bot: Bot):
    async with get_session() as session:
        u = await get_or_create_user(session, c.from_user.id)
        await route_to_start_or_sub(bot, u, session)
    await c.answer()

@router.callback_query(F.data == 'get_signal')
async def cb_get_signal(c: CallbackQuery, bot: Bot):
    await evaluate_and_route(bot, c.from_user.id, manual=True)
    await c.answer()

@router.callback_query(F.data == "check_sub")
async def cb_check_sub(c: CallbackQuery, bot: Bot):
    async with get_session() as session:
        u = await get_or_create_user(session, c.from_user.id)
        if await check_subscription(bot, u.telegram_id):
            u.is_subscribed = True
            await session.commit()
            await route_to_start_or_sub(bot, u, session)
        else: await c.answer(t(user_lang(u), 'sub_not_yet'), show_alert=True)
    await c.answer()

@router.callback_query(F.data.startswith("setlang:"))
async def cb_setlang(c: CallbackQuery, bot: Bot):
    async with get_session() as session:
        u = await get_or_create_user(session, c.from_user.id)
        u.language = c.data.split(":")[1]
        await session.commit()
        await route_to_start_or_sub(bot, u, session)
    await c.answer()

@router.callback_query(F.data == "lang")
async def cb_show_lang_menu(c: CallbackQuery, bot: Bot):
    async with get_session() as session:
        u = await get_or_create_user(session, c.from_user.id)
        await send_screen(bot, u, 'langs', 'lang_title', 'lang_title', kb_lang(user_lang(u), True), session)
    await c.answer()

@router.callback_query(F.data == "instructions")
async def cb_instructions(c: CallbackQuery, bot: Bot):
    async with get_session() as session:
        u = await get_or_create_user(session, c.from_user.id)
        await send_screen(bot, u, 'instruction', 'instruction_title', 'instruction_text', kb_instruction(user_lang(u)), session)
    await c.answer()

@router.callback_query(F.data == "btn_register")
async def cb_reg_from_instruction(c: CallbackQuery, bot: Bot):
    await evaluate_and_route(bot, c.from_user.id, manual=True)
    await c.answer()

@router.chat_member(ChatMemberUpdatedFilter(member_status_changed=JOIN_TRANSITION))
async def on_user_join_channel(event: ChatMemberUpdated, bot: Bot):
    try:
        user_id = event.new_chat_member.user.id
        if event.chat.id != await channel_id(): return
        markup = InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text=await welcome_chan_btn_text(), url=await welcome_chan_btn_url())]]) if await welcome_chan_btn_text() else None
        media = await welcome_chan_media()
        if media:
            m_type, f_id = media.split("|")
            if m_type == "photo": await bot.send_photo(user_id, f_id, caption=await welcome_chan_text(), reply_markup=markup)
            else: await bot.send_video(user_id, f_id, caption=await welcome_chan_text(), reply_markup=markup)
        else: await bot.send_message(user_id, await welcome_chan_text(), reply_markup=markup)
    except: pass

async def main() -> None:
    await init_db(); await load_button_overrides()
    dp = Dispatcher(); dp.include_router(router); dp.include_router(admin_router)
    bot = Bot(token=settings.TOKEN, default=DefaultBotProperties(parse_mode="HTML"))
    asyncio.create_task(reminder_worker(bot))
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())