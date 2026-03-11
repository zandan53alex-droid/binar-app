import logging
import asyncio
import httpx
from typing import Optional
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from aiogram import Bot
from aiogram.client.default import DefaultBotProperties

from settings import settings
from db import get_session, get_user_by_click_id, get_user_by_trader_id, User, DepositRecord
from bot import evaluate_and_route, notify_admins
from config_service import pb_secret, first_deposit_min, platinum_threshold, ref_reg_a, ref_dep_a

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

from fastapi.staticfiles import StaticFiles
import os

app = FastAPI(title="PocketAI Postbacks")

# Serve Mini App static files (will mount after routes)
webapp_path = os.path.join(os.path.dirname(__file__), "webapp")

# Добавляем CORS, чтобы фронтенд с GitHub Pages мог делать запросы
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене лучше указать конкретные домены
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

_bot_push: Optional[Bot] = None

@app.get("/news")
async def get_news():
    """Прокси для новостей Trading Economics (Guest API)"""
    url = "https://api.tradingeconomics.com/calendar?c=guest:guest&f=json"
    
    async with httpx.AsyncClient() as client:
        try:
            # Увеличим проверку SSL для guest режима если будут ошибки
            response = await client.get(url, timeout=10.0)
            return response.json()
        except Exception as e:
            return {"error": str(e)}

def get_bot() -> Bot:
    global _bot_push
    if _bot_push is None:
        _bot_push = Bot(token=settings.TOKEN, default=DefaultBotProperties(parse_mode="HTML"))
    return _bot_push

@app.api_route("/pb", methods=["GET", "POST"])
async def pb(request: Request, secret: Optional[str] = None, click_id: Optional[str] = None, event: Optional[str] = None, sumdep: float = 0.0, trader_id: Optional[str] = None):
    # Сбор параметров
    qp = request.query_params
    ev = (event or qp.get("event") or "").lower().strip()
    cid = click_id or qp.get("click_id")
    tid = trader_id or qp.get("trader_id")
    sec = secret or qp.get("secret")
    sd = sumdep or float(qp.get("sumdep") or 0.0)

    if sec != await pb_secret():
        raise HTTPException(status_code=403, detail="Invalid secret")

    tg_id = None

    # ШАГ 1: Сохраняем данные в БД и ЗАВЕРШАЕМ сессию
    async with get_session() as session:
        user = await get_user_by_click_id(session, cid)
        if not user and cid and cid.isdigit():
            res = await session.execute(select(User).where(User.telegram_id == int(cid)))
            user = res.scalar_one_or_none()
        if not user and tid:
            user = await get_user_by_trader_id(session, tid)
        
        if not user: return {"ok": False, "error": "user not found"}
        tg_id = user.telegram_id

        # Регистрация
        if "reg" in ev and not user.is_registered:
            user.is_registered = True
            if tid: user.trader_id = tid
            await session.commit()
            await notify_admins(get_bot(), "регистрация", user)
            logger.info(f"User {tg_id} registered.")

        # Депозит
        if sd > 0 or any(x in ev for x in ["dep", "ftd", "deposit"]):
            if tid: user.trader_id = tid
            user.total_deposits = (user.total_deposits or 0.0) + sd
            user.deposit_count = (user.deposit_count or 0) + 1
            
            f_min = await first_deposit_min()
            p_th = await platinum_threshold()
            
            # Обновляем статусы
            is_new_dep = not user.has_deposit and user.total_deposits >= f_min
            is_new_plat = not user.is_platinum and user.total_deposits >= p_th
            
            if user.total_deposits >= f_min: user.has_deposit = True
            if user.total_deposits >= p_th: user.is_platinum = True
            
            session.add(DepositRecord(user_id=tg_id, amount=sd, deposit_type="first" if is_new_dep else "repeat"))
            await session.commit()

            if is_new_dep: await notify_admins(get_bot(), "подтвержденный депозит!", user, amount=sd)
            elif is_new_plat: await notify_admins(get_bot(), "подтвержденный Platinum!", user, amount=sd)
            else: await notify_admins(get_bot(), "повторный депозит", user, amount=sd)

    # ШАГ 2: Вызываем бота ВНЕ сессии постбэка
    if tg_id:
        await asyncio.sleep(0.5) # Пауза для SQLite
        await evaluate_and_route(get_bot(), tg_id, manual=False)

    return {"ok": True}

# Mount static files last so they don't override /news or /pb
if os.path.exists(webapp_path):
    logger.info(f"Mounting static files from: {webapp_path}")
    app.mount("/", StaticFiles(directory=webapp_path, html=True), name="webapp")
else:
    logger.error(f"Static files directory NOT FOUND: {webapp_path}")