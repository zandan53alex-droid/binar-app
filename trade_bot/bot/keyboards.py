from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from texts import t
from settings import settings

# Безопасная инициализация (защита от ошибок при импорте)
def _get_admin_ids():
    """Получить список ID администраторов безопасным способом"""
    try:
        ids = getattr(settings, "ADMIN_IDS", [])
        if not ids:
            admin_id = getattr(settings, "ADMIN_ID", None)
            if admin_id and admin_id > 0:
                ids = [admin_id]
        return [aid for aid in ids if aid and aid > 0]  # Фильтруем None и 0
    except Exception:
        return []

def _get_support_deeplink():
    """Получить deeplink для поддержки безопасным способом"""
    try:
        admin_ids = _get_admin_ids()
        if admin_ids and admin_ids[0]:
            return f"tg://user?id={admin_ids[0]}"
    except Exception:
        pass
    return None

_SUPPORT_DEEPLINK = _get_support_deeplink()

def kb_main(lang: str, is_platinum: bool, can_open: bool, support_url: str | None, reviews_url: str | None = None) -> InlineKeyboardMarkup:
    """Главное меню"""
    sup = support_url or _SUPPORT_DEEPLINK or "https://t.me/"
    
    btn_instr = InlineKeyboardButton(text=t(lang, "btn_instruction"), callback_data="instructions")
    
    top_row = [btn_instr]
    if reviews_url and reviews_url.startswith(("http", "tg://")):
        top_row.append(InlineKeyboardButton(text=t(lang, "btn_reviews"), url=reviews_url))

    rows = [
        top_row,
        [
            InlineKeyboardButton(text=t(lang, "btn_support"), url=sup),
            InlineKeyboardButton(text=t(lang, "btn_change_lang"), callback_data="lang"),
        ],
    ]
    
    if can_open:
        url = settings.MINI_APP_PLATINUM if is_platinum else settings.MINI_APP
        label = t(lang, "btn_open_vip_miniapp") if is_platinum else t(lang, "btn_open_miniapp")
        safe_url = url if url and url.startswith("https") else "https://google.com"
        rows.append([InlineKeyboardButton(text=label, web_app=WebAppInfo(url=safe_url))])
    else:
        rows.append([InlineKeyboardButton(text=t(lang, "btn_get_signal"), callback_data="get_signal")])
        
    return InlineKeyboardMarkup(inline_keyboard=rows)


def kb_instruction(lang: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text=t(lang, "btn_register"), callback_data="btn_register")],
        [InlineKeyboardButton(text=t(lang, "btn_menu"), callback_data="menu")],
    ])


def kb_lang(current_lang: str, show_menu_btn: bool = True) -> InlineKeyboardMarkup:
    rows = [
        [
            InlineKeyboardButton(text="🇷🇺 Русский",  callback_data="setlang:ru"),
            InlineKeyboardButton(text="🇬🇧 English",  callback_data="setlang:en"),
        ],
        [
            InlineKeyboardButton(text="🇮🇳 हिन्दी",   callback_data="setlang:hi"),
            InlineKeyboardButton(text="🇪🇸 Español", callback_data="setlang:es"),
        ]
    ]
    if show_menu_btn:
        rows.append([InlineKeyboardButton(text=t(current_lang, "btn_menu"), callback_data="menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)


def kb_subscribe(lang: str, channel_url: str) -> InlineKeyboardMarkup:
    """Клавиатура подписки — теперь без кнопки Меню"""
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text='📣 Telegram', url=channel_url)],
        [InlineKeyboardButton(text=t(lang, 'btn_ive_subscribed'), callback_data='check_sub')],
    ])


def kb_register(lang: str, url: str | None = None, direct_ref: str | None = None) -> InlineKeyboardMarkup:
    rows = []
    if url and url.startswith(("http://", "https://")) and "YOUR_PUBLIC_HOST" not in url:
        rows.append([InlineKeyboardButton(text=t(lang, "btn_register"), url=url)])
    elif direct_ref and direct_ref.startswith(("http://", "https://")):
        rows.append([InlineKeyboardButton(text=t(lang, "btn_register"), url=direct_ref)])
    rows.append([InlineKeyboardButton(text=t(lang, "btn_menu"), callback_data="menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)


def kb_deposit(lang: str, url: str | None = None) -> InlineKeyboardMarkup:
    rows = []
    if url and url.startswith(("http://", "https://")) and "YOUR_PUBLIC_HOST" not in url:
        rows.append([InlineKeyboardButton(text=t(lang, "btn_deposit"), url=url)])
    rows.append([InlineKeyboardButton(text=t(lang, "btn_menu"), callback_data="menu")])
    return InlineKeyboardMarkup(inline_keyboard=rows)


def kb_access(lang: str, vip: bool) -> InlineKeyboardMarkup:
    url = settings.MINI_APP_PLATINUM if vip else settings.MINI_APP
    safe_url = url if url and url.startswith("https") else "https://google.com"
    label = t(lang, "btn_open_vip_miniapp") if vip else t(lang, "btn_open_miniapp")
    return InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text=label, web_app=WebAppInfo(url=safe_url))],
        [InlineKeyboardButton(text=t(lang, "btn_menu"), callback_data="menu")],
    ])