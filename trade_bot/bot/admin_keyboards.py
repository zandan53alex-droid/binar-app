from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from typing import Iterable, Tuple, List
from config_service import (
    bcast_btn_text, bcast_btn_url, 
    welcome_chan_btn_text, welcome_chan_btn_url,
    get_value 
)

# -------- Меню --------
def kb_admin_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='👤 Пользователи', callback_data='adm:users:1')],
        [InlineKeyboardButton(text='🔗 Ссылки', callback_data='adm:links')],
        [InlineKeyboardButton(text='⚙️ Параметры', callback_data='adm:params'),
         InlineKeyboardButton(text='📣 Рассылка', callback_data='adm:broadcast')],
        [InlineKeyboardButton(text='🔔 Настройка дожимов', callback_data='adm:reminders')],
        [InlineKeyboardButton(text='👋 Приветствие (Канал)', callback_data='adm:welcome_chan')],
        [InlineKeyboardButton(text='📊 Статистика', callback_data='adm:stats')],
    ])

def kb_back_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')]
    ])

# -------- Пользователи --------
def kb_users_list(items: Iterable[Tuple[int, str]], page: int, has_prev: bool, has_next: bool) -> InlineKeyboardMarkup:
    rows: List[List[InlineKeyboardButton]] = []
    rows.append([InlineKeyboardButton(text='🔍 Найти пользователя', callback_data='adm:search:start')])
    for tg_id, label in items:
        rows.append([InlineKeyboardButton(text=label, callback_data=f'adm:user:{tg_id}')])
    nav: List[InlineKeyboardButton] = []
    if has_prev: nav.append(InlineKeyboardButton(text='◀️', callback_data=f'adm:users:{page-1}'))
    if has_next: nav.append(InlineKeyboardButton(text='▶️', callback_data=f'adm:users:{page+1}'))
    if nav: rows.append(nav)
    rows.append([InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def kb_user_card(tg_id: int, is_reg: bool, has_dep: bool, is_platinum: bool) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='📜 История депозитов', callback_data=f'adm:user:history:{tg_id}')],
        [InlineKeyboardButton(text=('Снять регистрацию ❌' if is_reg else 'Выдать регистрацию ✅'), callback_data=f'adm:user:toggle:reg:{tg_id}')],
        [InlineKeyboardButton(text=('Снять депозит ❌' if has_dep else 'Выдать депозит ✅'), callback_data=f'adm:user:toggle:dep:{tg_id}')],
        [InlineKeyboardButton(text=('Снять Platinum •' if is_platinum else 'Выдать Platinum 💎'), callback_data=f'adm:user:toggle:plat:{tg_id}')],
        [InlineKeyboardButton(text='🗑 УДАЛИТЬ ПОЛЬЗОВАТЕЛЯ', callback_data=f'adm:user:del_confirm:{tg_id}')],
        [InlineKeyboardButton(text='⬅️ К списку', callback_data='adm:users:1'), InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')],
    ])

def kb_del_confirm(tg_id: int) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='✅ Да, удалить навсегда', callback_data=f'adm:user:del_final:{tg_id}')],
        [InlineKeyboardButton(text='❌ Отмена', callback_data=f'adm:user:{tg_id}')]
    ])

def kb_deposits_list(tg_id: int, deposits: list) -> InlineKeyboardMarkup:
    rows = []
    for d in deposits:
        date_str = d.created_at.strftime("%d.%m %H:%M")
        icon = "🟢" if d.deposit_type == "first" else "🔵"
        rows.append([InlineKeyboardButton(text=f"{icon} ${d.amount} | {date_str}", callback_data=f"adm:dep:info:{d.id}")])
    rows.append([InlineKeyboardButton(text='⬅️ Назад к юзеру', callback_data=f'adm:user:{tg_id}')])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def kb_deposit_back(tg_id: int) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text='⬅️ К списку депозитов', callback_data=f'adm:user:history:{tg_id}')]])

# -------- Ссылки --------
def kb_links_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='Изменить реф-ссылку', callback_data='adm:links:edit:REF_REG_A')],
        [InlineKeyboardButton(text='Изменить ссылку депозита', callback_data='adm:links:edit:REF_DEP_A')],
        [InlineKeyboardButton(text='Изменить ссылку ОТЗЫВЫ', callback_data='adm:links:edit:REVIEWS_URL')],
        [InlineKeyboardButton(text='Изменить канал (ID)', callback_data='adm:links:edit:CHANNEL_ID')],
        [InlineKeyboardButton(text='Изменить Channel URL', callback_data='adm:links:edit:CHANNEL_URL')],
        [InlineKeyboardButton(text='Изменить Support URL', callback_data='adm:links:edit:SUPPORT_URL')],
        [InlineKeyboardButton(text='Изменить Public Base', callback_data='adm:links:edit:PUBLIC_BASE')],
        [InlineKeyboardButton(text='Изменить PB Secret', callback_data='adm:links:edit:PB_SECRET')],
        [InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')],
    ])

# -------- Параметры --------
def kb_params(dep_on: bool) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='🔒 Регистрация', callback_data='adm:param:locked:reg')],
        [InlineKeyboardButton(text='💵 Мин. деп', callback_data='adm:param:set:FIRST_DEPOSIT_MIN'),
         InlineKeyboardButton(text='💎 Порог Platinum', callback_data='adm:param:set:PLATINUM_THRESHOLD')],
        [InlineKeyboardButton(text=('✅ Проверка депозита' if dep_on else '❌ Проверка депозита'), callback_data='adm:param:toggle:dep')],
        [InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')],
    ])

# -------- Дожимы --------
def kb_reminders_langs() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="🇷🇺 Русский", callback_data="adm:rem:lang:ru"), InlineKeyboardButton(text="🇬🇧 English", callback_data="adm:rem:lang:en")],
        [InlineKeyboardButton(text="🇮🇳 Hindi", callback_data="adm:rem:lang:hi"), InlineKeyboardButton(text="🇪🇸 Spanish", callback_data="adm:rem:lang:es")],
        [InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')]
    ])

def kb_reminders_types(lang: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="📝 Регистрация (Registration)", callback_data=f"adm:rem:type:{lang}:reg")],
        [InlineKeyboardButton(text="💰 Депозит (Deposit)", callback_data=f"adm:rem:type:{lang}:dep")],
        [InlineKeyboardButton(text='⬅️ Назад', callback_data='adm:reminders')]
    ])

def kb_reminders_timings(lang: str, r_type: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="⏳ Через 2 часа (First)", callback_data=f"adm:rem:edit:{lang}:{r_type}:2h")],
        [InlineKeyboardButton(text="⌛️ Через 24 часа (Final)", callback_data=f"adm:rem:edit:{lang}:{r_type}:24h")],
        [InlineKeyboardButton(text='⬅️ Назад', callback_data=f'adm:rem:lang:{lang}')]
    ])

# -------- Рассылка (ОБНОВЛЕНО) --------
async def kb_broadcast() -> InlineKeyboardMarkup:
    btn_txt = await bcast_btn_text()
    btn_link = await bcast_btn_url()
    has_btn = bool(btn_txt and btn_link)
    seg = await get_value("BCAST_SEGMENT", "all")

    rows = [
        [InlineKeyboardButton(text=f"{'✅ ' if seg == 'all' else ''}Всем", callback_data='adm:bcast:seg:all'),
         InlineKeyboardButton(text=f"{'✅ ' if seg == 'reg' else ''}С регистрацией", callback_data='adm:bcast:seg:reg')],
        [InlineKeyboardButton(text=f"{'✅ ' if seg == 'dep' else ''}С депозитом", callback_data='adm:bcast:seg:dep'),
         InlineKeyboardButton(text=f"{'✅ ' if seg == 'start' else ''}Только /start", callback_data='adm:bcast:seg:start')],
        [InlineKeyboardButton(text='📝 Текст', callback_data='adm:bcast:text'), InlineKeyboardButton(text='🖼️ Фото', callback_data='adm:bcast:photo')],
    ]

    if has_btn:
        rows.append([
            InlineKeyboardButton(text=f'✏️ Кн: {btn_txt}', callback_data='adm:bcast:btn_add'),
            InlineKeyboardButton(text='🗑 Удл. кн.', callback_data='adm:bcast:btn_del')
        ])
    else:
        rows.append([InlineKeyboardButton(text='➕ Добавить кнопку', callback_data='adm:bcast:btn_add')])

    rows.append([InlineKeyboardButton(text='🚀 ЗАПУСТИТЬ РАССЫЛКУ', callback_data='adm:bcast:go')])
    # Новая кнопка очистки
    rows.append([InlineKeyboardButton(text='⚠️ Очистить всё сообщение', callback_data='adm:bcast:reset')])
    rows.append([InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')])
    return InlineKeyboardMarkup(inline_keyboard=rows)

# -------- ПРИВЕТСТВИЕ КАНАЛА (ИСПРАВЛЕНО) --------
async def kb_welcome_chan() -> InlineKeyboardMarkup:
    btn_txt = await welcome_chan_btn_text()
    btn_link = await welcome_chan_btn_url()
    has_btn = bool(btn_txt and btn_link)

    rows = [
        [InlineKeyboardButton(text='📝 Изменить Текст', callback_data='adm:wc:text')],
        [InlineKeyboardButton(text='🖼️ Изменить Медиа (Фото/Видео)', callback_data='adm:wc:media')],
    ]
    if has_btn:
        rows.append([
            InlineKeyboardButton(text=f'✏️ Кн: {btn_txt}', callback_data='adm:wc:btn_add'),
            InlineKeyboardButton(text='🗑 Удалить кн.', callback_data='adm:wc:btn_del')
        ])
    else:
        rows.append([InlineKeyboardButton(text='➕ Добавить кнопку', callback_data='adm:wc:btn_add')])
        
    rows.append([InlineKeyboardButton(text='🧪 Тест сообщения', callback_data='adm:wc:test')])
    rows.append([InlineKeyboardButton(text='⚠️ Очистить всё приветствие', callback_data='adm:wc:reset')])
    rows.append([InlineKeyboardButton(text='🏠 В меню', callback_data='adm:menu')])
    return InlineKeyboardMarkup(inline_keyboard=rows)

def kb_number_back(back_cb: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text='↩️ Отмена', callback_data=back_cb)]])