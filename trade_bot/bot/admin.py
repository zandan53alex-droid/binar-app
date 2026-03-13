import asyncio
import re
from pathlib import Path
from html import escape as h

from aiogram import Router, F, Bot
from aiogram.filters import Command
from aiogram.types import Message, CallbackQuery, InlineKeyboardMarkup, InlineKeyboardButton, FSInputFile
from aiogram.fsm.state import StatesGroup, State
from aiogram.fsm.context import FSMContext
from aiogram.exceptions import TelegramBadRequest

from sqlalchemy import select, func, delete

from texts import t
from settings import settings
from db import get_session, User, ContentOverride, DepositRecord, ReminderOverride
from admin_keyboards import (
    kb_admin_menu, kb_back_menu, kb_users_list, kb_user_card, kb_links_menu,
    kb_params, kb_broadcast, kb_number_back, kb_welcome_chan,
    kb_deposits_list, kb_deposit_back, kb_del_confirm,
    kb_reminders_langs, kb_reminders_types, kb_reminders_timings
)
from config_service import (
    set_value, get_value, set_bool, get_bool,
    pb_secret, ref_reg_a, ref_dep_a, channel_id, channel_url, support_url,
    platinum_threshold, first_deposit_min, public_base,
    bcast_text, bcast_photo, set_bcast_text, set_bcast_photo,
    bcast_btn_text, bcast_btn_url, set_bcast_btn_text, set_bcast_btn_url,
    welcome_chan_text, welcome_chan_media, welcome_chan_btn_text, welcome_chan_btn_url,
    set_welcome_chan_text, set_welcome_chan_media, set_welcome_chan_btn_text, set_welcome_chan_btn_url,
    check_subscription_enabled, check_registration_enabled, check_deposit_enabled,
    reviews_url
)

router = Router(name="admin")

class EditState(StatesGroup):
    waiting_value = State()

class BroadcastState(StatesGroup):
    waiting_text = State()
    waiting_photo = State()
    waiting_btn_text = State()
    waiting_btn_url = State()

class WelcomeChanState(StatesGroup):
    waiting_text = State()
    waiting_media = State()
    waiting_btn_text = State()
    waiting_btn_url = State()

class AdminSearchState(StatesGroup):
    waiting_query = State()

class ReminderEditState(StatesGroup):
    waiting_text = State()

def is_admin(user_id: int) -> bool:
    ids = settings.ADMIN_IDS or [settings.ADMIN_ID]
    return user_id in ids

async def safe_edit_text(message: Message, text: str, **kwargs):
    try: 
        await message.edit_text(text, **kwargs)
    except Exception: 
        await message.answer(text, **kwargs)

async def show_users_list(message: Message, page: int):
    per_page = 20
    async with get_session() as s:
        total = await s.scalar(select(func.count(User.id))) or 0
        res = await s.execute(
            select(User).order_by(User.id.desc()).offset((page-1)*per_page).limit(per_page)
        )
        users = res.scalars().all()
    
    items = []
    for u in users:
        r_mark = "R" if u.is_registered else "-"
        d_mark = "D" if u.has_deposit else "-"
        p_mark = "💎" if u.is_platinum else ""
        items.append((u.telegram_id, f"{u.telegram_id} | {r_mark}{d_mark} {p_mark}"))
    
    has_next = total > page * per_page
    text = f"👤 <b>Пользователи (всего: {total})</b>\nНажмите на ID для управления:"
    
    await safe_edit_text(
        message, text, 
        reply_markup=kb_users_list(items, page, page > 1, has_next), 
        parse_mode="HTML"
    )

@router.message(Command("admin"))
async def cmd_admin(m: Message):
    if not is_admin(m.from_user.id): return
    await m.answer("<b>Панель администратора</b>", reply_markup=kb_admin_menu(), parse_mode='HTML')

@router.callback_query(F.data == "adm:menu")
async def cb_menu(c: CallbackQuery, state: FSMContext):
    if not is_admin(c.from_user.id): return
    await state.clear()
    await safe_edit_text(c.message, "<b>Панель администратора</b>", reply_markup=kb_admin_menu(), parse_mode='HTML')
    await c.answer()

@router.callback_query(F.data == "adm:stats")
async def cb_stats_handler(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    async with get_session() as s:
        total_count = await s.scalar(select(func.count(User.id))) or 0
        reg_count = await s.scalar(select(func.count(User.id)).where(User.is_registered == True)) or 0
        dep_count = await s.scalar(select(func.count(User.id)).where(User.has_deposit == True)) or 0
        plat_count = await s.scalar(select(func.count(User.id)).where(User.is_platinum == True)) or 0
        total_sum = await s.scalar(select(func.sum(User.total_deposits))) or 0.0
        all_tx_count = await s.scalar(select(func.sum(User.deposit_count))) or 0

    stats_text = (
        "📊 <b>Статистика по боту</b>\n\n"
        f"Всего пользователей: <b>{total_count}</b>\n"
        f"С регистрацией: <b>{reg_count}</b>\n"
        f"С депозитом: <b>{dep_count}</b>\n"
        f"С платинумом: <b>{plat_count}</b>\n\n"
        f"Всего депозитов (сумма): <b>{total_sum:.1f}</b>\n"
        f"Количество депозитов (FTD+RD): <b>{all_tx_count}</b>"
    )
    await safe_edit_text(c.message, stats_text, reply_markup=kb_back_menu(), parse_mode="HTML")

@router.callback_query(F.data == "adm:search:start")
async def cb_users_search_start(c: CallbackQuery, state: FSMContext):
    if not is_admin(c.from_user.id): return
    await c.message.answer(
        "🔎 <b>Поиск пользователя</b>\n\n"
        "Введите одно из значений:\n"
        "• Telegram ID (цифры)\n"
        "• Username (с @ или без)\n"
        "• Trader ID (из Pocket Option)", 
        parse_mode="HTML",
        reply_markup=kb_number_back("adm:users:1")
    )
    await state.set_state(AdminSearchState.waiting_query)
    await c.answer()

@router.message(AdminSearchState.waiting_query)
async def process_admin_search(m: Message, state: FSMContext):
    if not is_admin(m.from_user.id): return
    query = m.text.strip()
    user_found = None
    async with get_session() as s:
        if query.isdigit():
            res = await s.execute(select(User).where(User.telegram_id == int(query)))
            user_found = res.scalar_one_or_none()
        if not user_found:
            clean_username = query.replace("@", "")
            res = await s.execute(select(User).where(func.lower(User.username) == clean_username.lower()))
            user_found = res.scalar_one_or_none()
        if not user_found:
            res = await s.execute(select(User).where(User.trader_id == query))
            user_found = res.scalar_one_or_none()

    if user_found:
        await state.clear()
        u = user_found
        card_text = (f"🪪 <b>Карточка пользователя</b>\n\n<b>ID:</b> <code>{u.telegram_id}</code>\n<b>Username:</b> @{u.username or 'нет'}\n"
                     f"<b>Имя:</b> {h(u.full_name or 'скрыто')}\n<b>Язык:</b> {u.language or 'не выбран'}\n\n"
                     f"<b>Trader ID:</b> <code>{u.trader_id or 'не привязан'}</code>\n<b>Депозитов:</b> ${u.total_deposits or 0:.2f}\n\n"
                     f"📝 Регистрация: {'✅' if u.is_registered else '❌'}\n💰 Депозит: {'✅' if u.has_deposit else '❌'}\n💎 Platinum: {'✅' if u.is_platinum else '❌'}")
        await m.answer(card_text, reply_markup=kb_user_card(u.telegram_id, u.is_registered, u.has_deposit, u.is_platinum), parse_mode="HTML")
    else:
        await m.answer(f"❌ Пользователь «{h(query)}» не найден. Попробуйте еще раз или нажмите отмена:", 
                       reply_markup=kb_number_back("adm:users:1"))

@router.callback_query(F.data.startswith("adm:users:"))
async def cb_users_list_handler(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    page_str = c.data.split(":")[-1]
    if not page_str.isdigit(): return
    await show_users_list(c.message, int(page_str))
    await c.answer()

@router.callback_query(F.data.startswith("adm:user:"))
async def cb_user_card_handler(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    parts = c.data.split(":")
    
    if len(parts) > 3 and parts[2] == "toggle":
        what, tg_id = parts[3], int(parts[4])
        async with get_session() as s:
            res = await s.execute(select(User).where(User.telegram_id == tg_id))
            u = res.scalar_one_or_none()
            if u:
                if what == "reg": u.is_registered = not u.is_registered
                elif what == "dep": u.has_deposit = not u.has_deposit
                elif what == "plat": u.is_platinum = not u.is_platinum
                await s.commit()
                await c.answer("✅ Статус изменен")

    if len(parts) > 2 and parts[2] == "del_confirm":
        tg_id = int(parts[3])
        await safe_edit_text(c.message, f"⚠️ <b>Вы уверены, что хотите удалить {tg_id}?</b>", reply_markup=kb_del_confirm(tg_id), parse_mode="HTML")
        return await c.answer()

    if len(parts) > 2 and parts[2] == "del_final":
        tg_id = int(parts[3])
        async with get_session() as s:
            await s.execute(delete(DepositRecord).where(DepositRecord.user_id == tg_id))
            await s.execute(delete(User).where(User.telegram_id == tg_id))
            await s.commit()
        await c.answer("✅ Пользователь удален", show_alert=True)
        return await show_users_list(c.message, 1)

    if len(parts) > 2 and parts[2] == "history":
        tg_id = int(parts[3])
        async with get_session() as s:
            res = await s.execute(select(DepositRecord).where(DepositRecord.user_id == tg_id).order_by(DepositRecord.created_at.desc()).limit(30))
            deposits = res.scalars().all()
        await safe_edit_text(c.message, f"📜 <b>История депозитов</b>\nЮзер: {tg_id}", reply_markup=kb_deposits_list(tg_id, deposits), parse_mode="HTML")
        return await c.answer()

    tg_id_str = parts[-1]
    if not tg_id_str.isdigit(): return
    tg_id = int(tg_id_str)
    
    async with get_session() as s:
        res = await s.execute(select(User).where(User.telegram_id == tg_id))
        u = res.scalar_one_or_none()
    
    if not u: return await c.answer("❌ Пользователь не найден", show_alert=True)
    
    card_text = (f"🪪 <b>Карточка пользователя</b>\n\n<b>ID:</b> <code>{u.telegram_id}</code>\n<b>Username:</b> @{u.username or 'нет'}\n"
                 f"<b>Имя:</b> {h(u.full_name or 'скрыто')}\n<b>Язык:</b> {u.language or 'не выбран'}\n\n"
                 f"<b>Trader ID:</b> <code>{u.trader_id or 'не привязан'}</code>\n<b>Депозитов:</b> ${u.total_deposits or 0:.2f}\n\n"
                 f"📝 Регистрация: {'✅' if u.is_registered else '❌'}\n💰 Депозит: {'✅' if u.has_deposit else '❌'}\n💎 Platinum: {'✅' if u.is_platinum else '❌'}")
    
    await safe_edit_text(c.message, card_text, reply_markup=kb_user_card(u.telegram_id, u.is_registered, u.has_deposit, u.is_platinum), parse_mode="HTML")

# --- ПАРАМЕТРЫ ---
async def show_params_screen(message: Message, edit: bool = True):
    fdep, plat, dep_on, reg_on = await first_deposit_min(), await platinum_threshold(), await check_deposit_enabled(), await check_registration_enabled()
    text = (f"⚙️ <b>Параметры доступа</b>\n\n📢 Проверка подписки: <b>ОБЯЗАТЕЛЬНО</b>\n"
            f"{'✅' if dep_on else '❌'} Проверка депозита\n"
            f"{'🔒' if reg_on else '🔓'} Регистрация (блокировка)\n\n"
            f"💵 Мин. депозит: <b>${fdep:.0f}</b>\n💎 Порог Platinum: <b>${plat:.0f}</b>")
    if edit: await safe_edit_text(message, text, reply_markup=kb_params(dep_on), parse_mode='HTML')
    else: await message.answer(text, reply_markup=kb_params(dep_on), parse_mode='HTML')

@router.callback_query(F.data == "adm:params")
async def cb_params_handler(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    await show_params_screen(c.message, edit=True)

@router.callback_query(F.data.startswith("adm:param:toggle:"))
async def cb_param_toggle_handler(c: CallbackQuery):
    key = c.data.split(":")[-1]
    if key == "dep": await set_bool("CHECK_DEPOSIT", not await check_deposit_enabled())
    await show_params_screen(c.message, edit=True)

@router.callback_query(F.data == "adm:param:locked:reg")
async def cb_param_locked_reg_handler(c: CallbackQuery):
    await set_bool("CHECK_REGISTRATION", not await check_registration_enabled())
    await show_params_screen(c.message, edit=True)

@router.callback_query(F.data.startswith("adm:param:set:"))
async def cb_param_set_handler(c: CallbackQuery, state: FSMContext):
    key = c.data.split(":")[-1]
    await state.update_data(edit_key=key)
    await c.message.answer(f"Введите новое числовое значение для {key}:")
    await state.set_state(EditState.waiting_value)

# --- ССЫЛКИ ---
async def show_links_screen(message: Message, edit: bool = True):
    r_reg, r_dep, r_rev, c_id, c_url, s_url, p_base, p_sec = await ref_reg_a(), await ref_dep_a(), await reviews_url(), await channel_id(), await channel_url(), await support_url(), await public_base(), await pb_secret()
    text = (f"🔗 <b>Настройки ссылок</b>\n\n📝 <b>Регистрация:</b>\n<code>{h(r_reg or 'нет')}</code>\n\n💰 <b>Депозит:</b>\n<code>{h(r_dep or 'нет')}</code>\n\n"
            f"⭐️ <b>Отзывы:</b>\n<code>{h(r_rev or 'нет')}</code>\n\n📢 <b>Channel ID:</b> <code>{c_id or 'нет'}</code>\n📢 <b>Channel URL:</b> <code>{h(c_url or 'нет')}</code>\n"
            f"🆘 <b>Support URL:</b> <code>{h(s_url or 'нет')}</code>\n\n🌐 <b>Public Base:</b> <code>{h(p_base or 'нет')}</code>\n🔑 <b>Secret:</b> <code>{h(p_sec or 'нет')}</code>")
    if edit: await safe_edit_text(message, text, reply_markup=kb_links_menu(), parse_mode="HTML")
    else: await message.answer(text, reply_markup=kb_links_menu(), parse_mode="HTML")

@router.callback_query(F.data == "adm:links")
async def cb_links_main_handler(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    await show_links_screen(c.message, edit=True)

@router.callback_query(F.data.startswith("adm:links:edit:"))
async def cb_links_edit_click(c: CallbackQuery, state: FSMContext):
    key = c.data.split(":")[-1]
    await state.update_data(edit_key=key)
    await c.message.answer(f"Введите новое значение для {key}:")
    await state.set_state(EditState.waiting_value)

# --- РАССЫЛКА ---
@router.callback_query(F.data == "adm:broadcast")
async def cb_broadcast_handler(c: CallbackQuery):
    txt, photo, btn_txt = await bcast_text(), await bcast_photo(), await bcast_btn_text()
    seg = await get_value("BCAST_SEGMENT", "all")
    seg_names = {"all": "Всем", "reg": "С регистрацией", "dep": "С депозитом", "start": "Только /start"}
    msg = (f"📣 <b>Рассылка</b>\n\n🎯 Выбран сегмент: <b>{seg_names.get(seg, seg)}</b>\n"
           f"Текст: {'✅' if txt else '❌'}\nФото: {'✅' if photo else '❌'}\nКнопка: {btn_txt if btn_txt else 'нет'}")
    await safe_edit_text(c.message, msg, reply_markup=await kb_broadcast(), parse_mode="HTML")

@router.callback_query(F.data.startswith("adm:bcast:seg:"))
async def cb_bcast_segment(c: CallbackQuery):
    seg = c.data.split(":")[-1]
    await set_value("BCAST_SEGMENT", seg)
    await c.answer(f"Выбран сегмент: {seg}")
    await cb_broadcast_handler(c)

@router.callback_query(F.data == "adm:bcast:text")
async def cb_bcast_text_edit(c: CallbackQuery, state: FSMContext):
    await c.message.answer("Введите текст рассылки (поддерживается HTML):")
    await state.set_state(BroadcastState.waiting_text)

@router.message(BroadcastState.waiting_text)
async def fsm_bcast_text(m: Message, state: FSMContext):
    await set_bcast_text(m.text)
    await m.answer("✅ Текст рассылки сохранен", reply_markup=await kb_broadcast())
    await state.clear()

@router.callback_query(F.data == "adm:bcast:photo")
async def cb_bcast_photo_edit(c: CallbackQuery, state: FSMContext):
    await c.message.answer("Пришлите ФОТО для рассылки:")
    await state.set_state(BroadcastState.waiting_photo)

@router.message(BroadcastState.waiting_photo)
async def fsm_bcast_photo(m: Message, state: FSMContext):
    if not m.photo: return await m.answer("Пожалуйста, пришлите фото.")
    await set_bcast_photo(m.photo[-1].file_id)
    await m.answer("✅ Фото сохранено", reply_markup=await kb_broadcast())
    await state.clear()

@router.callback_query(F.data == "adm:bcast:btn_add")
async def cb_bcast_btn_add(c: CallbackQuery, state: FSMContext):
    await c.message.answer("Введите текст для кнопки:")
    await state.set_state(BroadcastState.waiting_btn_text)

@router.message(BroadcastState.waiting_btn_text)
async def fsm_bcast_btn_text(m: Message, state: FSMContext):
    await state.update_data(btn_text=m.text)
    await m.answer("Теперь введите URL для кнопки (http...):")
    await state.set_state(BroadcastState.waiting_btn_url)

@router.message(BroadcastState.waiting_btn_url)
async def fsm_bcast_btn_url(m: Message, state: FSMContext):
    data = await state.get_data()
    await set_bcast_btn_text(data['btn_text'])
    await set_bcast_btn_url(m.text)
    await m.answer("✅ Кнопка сохранена", reply_markup=await kb_broadcast())
    await state.clear()

@router.callback_query(F.data == "adm:bcast:btn_del")
async def cb_bcast_btn_del(c: CallbackQuery):
    await set_bcast_btn_text(""); await set_bcast_btn_url("")
    await cb_broadcast_handler(c)

@router.callback_query(F.data == "adm:bcast:reset")
async def cb_bcast_reset(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    await set_bcast_text("")
    await set_bcast_photo("")
    await set_bcast_btn_text("")
    await set_bcast_btn_url("")
    await c.answer("🗑 Настройки рассылки очищены", show_alert=True)
    await cb_broadcast_handler(c)

@router.callback_query(F.data == "adm:bcast:go")
async def cb_bcast_start(c: CallbackQuery, bot: Bot):
    txt, photo, btn_t, btn_u = await bcast_text(), await bcast_photo(), await bcast_btn_text(), await bcast_btn_url()
    if not txt: return await c.answer("❌ Нет текста", show_alert=True)
    seg = await get_value("BCAST_SEGMENT", "all")
    async with get_session() as s:
        stmt = select(User.telegram_id)
        if seg == "reg": stmt = stmt.where(User.is_registered == True)
        elif seg == "dep": stmt = stmt.where(User.has_deposit == True)
        elif seg == "start": stmt = stmt.where(User.is_registered == False, User.has_deposit == False)
        uids = (await s.execute(stmt)).scalars().all()
    if not uids: return await c.answer("❌ В сегменте нет людей", show_alert=True)
    await c.answer(f"🚀 Запущено для {len(uids)} чел.")
    markup = InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text=btn_t, url=btn_u)]]) if btn_t else None
    ok, err = 0, 0
    for uid in uids:
        try:
            if photo: await bot.send_photo(uid, photo, caption=txt, reply_markup=markup, parse_mode="HTML")
            else: await bot.send_message(uid, txt, reply_markup=markup, parse_mode="HTML")
            ok += 1; await asyncio.sleep(0.05)
        except: err += 1
    await c.message.answer(f"🏁 <b>Рассылка завершена!</b>\nУспешно: {ok}, Ошибки: {err}", parse_mode="HTML")

# --- ДОЖИМЫ ---
@router.callback_query(F.data == "adm:reminders")
async def cb_rem_main(c: CallbackQuery):
    await safe_edit_text(c.message, "🔔 <b>Настройка дожимов</b>\nВыберите язык для редактирования:", reply_markup=kb_reminders_langs(), parse_mode="HTML")

@router.callback_query(F.data.startswith("adm:rem:lang:"))
async def cb_rem_lang(c: CallbackQuery):
    lang = c.data.split(":")[-1]
    await safe_edit_text(c.message, f"⚙️ Настройка [<b>{lang.upper()}</b>]\nЧто будем редактировать?", reply_markup=kb_reminders_types(lang), parse_mode="HTML")

@router.callback_query(F.data.startswith("adm:rem:type:"))
async def cb_rem_type(c: CallbackQuery):
    parts = c.data.split(":"); lang, r_type = parts[3], parts[4]
    await safe_edit_text(c.message, f"⚙️ Настройка [<b>{lang.upper()}</b>] -> [<b>{r_type.upper()}</b>]\nВыберите время:", reply_markup=kb_reminders_timings(lang, r_type), parse_mode="HTML")

@router.callback_query(F.data.startswith("adm:rem:edit:"))
async def cb_rem_edit_start(c: CallbackQuery, state: FSMContext):
    parts = c.data.split(":"); lang, r_type, timing = parts[3], parts[4], parts[5]
    await state.update_data(rem_lang=lang, rem_type=r_type, rem_timing=timing)
    async with get_session() as s:
        res = await s.execute(select(ReminderOverride.text).where(ReminderOverride.lang == lang, ReminderOverride.rem_type == r_type, ReminderOverride.timing == timing))
        current = res.scalar_one_or_none()
    text = (f"📝 <b>Редактирование текста</b>\n\nЯзык: <b>{lang}</b>\nТип: <b>{r_type}</b>\nВремя: <b>{timing}</b>\n\n"
            f"Текущий текст:\n<code>{current or 'Текст по умолчанию'}</code>\n\nВведите новый текст (поддерживается HTML):")
    await c.message.answer(text, parse_mode="HTML")
    await state.set_state(ReminderEditState.waiting_text)

@router.message(ReminderEditState.waiting_text)
async def process_rem_text(m: Message, state: FSMContext):
    data = await state.get_data(); lang, r_type, timing = data['rem_lang'], data['rem_type'], data['rem_timing']
    async with get_session() as s:
        res = await s.execute(select(ReminderOverride).where(ReminderOverride.lang == lang, ReminderOverride.rem_type == r_type, ReminderOverride.timing == timing))
        row = res.scalar_one_or_none()
        if row: row.text = m.text
        else: s.add(ReminderOverride(lang=lang, rem_type=r_type, timing=timing, text=m.text))
        await s.commit()
    await m.answer(f"✅ Текст для {lang.upper()} обновлен!"); await state.clear()
    await m.answer("Настройка дожимов:", reply_markup=kb_reminders_timings(lang, r_type))

# --- ПРИВЕТСТВИЕ КАНАЛА ---
@router.callback_query(F.data == "adm:welcome_chan")
async def cb_welcome_chan_handler(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    txt, media, btn_txt = await welcome_chan_text(), await welcome_chan_media(), await welcome_chan_btn_text()
    msg = (f"👋 <b>Настройка приветствия</b>\n\n"
           f"Текст: {'✅' if txt else '❌'}\nМедиа: {'✅' if media else '❌'}\nКнопка: {btn_txt if btn_txt else 'нет'}")
    await safe_edit_text(c.message, msg, reply_markup=await kb_welcome_chan(), parse_mode="HTML")

@router.callback_query(F.data == "adm:wc:text")
async def cb_wc_text_edit(c: CallbackQuery, state: FSMContext):
    await c.message.answer("Введите текст приветствия:")
    await state.set_state(WelcomeChanState.waiting_text)

@router.message(WelcomeChanState.waiting_text)
async def fsm_wc_text(m: Message, state: FSMContext):
    await set_welcome_chan_text(m.text)
    await m.answer("✅ Текст приветствия сохранен", reply_markup=await kb_welcome_chan())
    await state.clear()

@router.callback_query(F.data == "adm:wc:media")
async def cb_wc_media_edit(c: CallbackQuery, state: FSMContext):
    await c.message.answer("Пришлите фото или видео:")
    await state.set_state(WelcomeChanState.waiting_media)

@router.message(WelcomeChanState.waiting_media)
async def fsm_wc_media(m: Message, state: FSMContext):
    if m.photo: await set_welcome_chan_media(f"photo|{m.photo[-1].file_id}")
    elif m.video: await set_welcome_chan_media(f"video|{m.video.file_id}")
    else: return await m.answer("Это не фото и не видео.")
    await m.answer("✅ Медиа сохранено", reply_markup=await kb_welcome_chan())
    await state.clear()

@router.callback_query(F.data == "adm:wc:btn_add")
async def cb_wc_btn_add(c: CallbackQuery, state: FSMContext):
    await c.message.answer("Введите текст для кнопки:")
    await state.set_state(WelcomeChanState.waiting_btn_text)

@router.message(WelcomeChanState.waiting_btn_text)
async def fsm_wc_btn_text(m: Message, state: FSMContext):
    await state.update_data(btn_text=m.text)
    await m.answer("Теперь введите URL для кнопки (http...):")
    await state.set_state(WelcomeChanState.waiting_btn_url)

@router.message(WelcomeChanState.waiting_btn_url)
async def fsm_wc_btn_url(m: Message, state: FSMContext):
    data = await state.get_data()
    await set_welcome_chan_btn_text(data['btn_text'])
    await set_welcome_chan_btn_url(m.text)
    await m.answer("✅ Кнопка сохранена", reply_markup=await kb_welcome_chan())
    await state.clear()

@router.callback_query(F.data == "adm:wc:btn_del")
async def cb_wc_btn_del(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    await set_welcome_chan_btn_text(""); await set_welcome_chan_btn_url("")
    await c.answer("✅ Кнопка удалена")
    await cb_welcome_chan_handler(c)

@router.callback_query(F.data == "adm:wc:reset")
async def cb_wc_reset(c: CallbackQuery):
    if not is_admin(c.from_user.id): return
    await set_welcome_chan_text("")
    await set_welcome_chan_media("")
    await set_welcome_chan_btn_text("")
    await set_welcome_chan_btn_url("")
    await c.answer("🗑 Приветствие полностью очищено", show_alert=True)
    await cb_welcome_chan_handler(c)

@router.callback_query(F.data == "adm:wc:test")
async def cb_wc_test(c: CallbackQuery, bot: Bot):
    txt, media, btn_t, btn_u = await welcome_chan_text(), await welcome_chan_media(), await welcome_chan_btn_text(), await welcome_chan_btn_url()
    if not txt and not media: return await c.answer("❌ Сообщение пустое", show_alert=True)
    
    markup = InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text=btn_t, url=btn_u)]]) if (btn_t and btn_u) else None
    try:
        if media:
            m_type, f_id = media.split("|")
            if m_type == "photo": await bot.send_photo(c.from_user.id, f_id, caption=txt, reply_markup=markup, parse_mode="HTML")
            else: await bot.send_video(c.from_user.id, f_id, caption=txt, reply_markup=markup, parse_mode="HTML")
        else: await bot.send_message(c.from_user.id, txt, reply_markup=markup, parse_mode="HTML")
        await c.answer("✅ Тест отправлен в ЛС")
    except Exception as e: await c.answer(f"❌ Ошибка: {e}", show_alert=True)

# --- FSM ВАЛИДАЦИЯ ПАРАМЕТРОВ ---
@router.message(EditState.waiting_value)
async def fsm_waiting_val(m: Message, state: FSMContext):
    data = await state.get_data(); key, val = data['edit_key'], m.text.strip()
    param_keys = ["FIRST_DEPOSIT_MIN", "PLATINUM_THRESHOLD"]
    link_keys = ["REF_REG_A", "REF_DEP_A", "REVIEWS_URL", "CHANNEL_ID", "CHANNEL_URL", "SUPPORT_URL", "PUBLIC_BASE", "PB_SECRET"]
    if key in param_keys or key == "CHANNEL_ID":
        try: 
            if key == "CHANNEL_ID": val = str(int(val))
            else: val = str(float(val))
        except Exception: return await m.answer("Ошибка! Введите корректное число.")
    await set_value(key, val); await m.answer(f"✅ Сохранено!")
    if key in param_keys: await show_params_screen(m, edit=False)
    elif key in link_keys: await show_links_screen(m, edit=False)
    await state.clear()