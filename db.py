from datetime import datetime
from typing import Optional

from sqlalchemy import (
    BigInteger, Integer, String, Boolean, Float, Text, DateTime,
    select, func, UniqueConstraint
)
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from settings import settings

_db_url = getattr(settings, "DATABASE_URL", None)
if not _db_url or not _db_url.strip():
    _db_url = "sqlite+aiosqlite:///./pocketai.db"

engine = create_async_engine(_db_url, echo=False, pool_pre_ping=True)
AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    telegram_id: Mapped[int] = mapped_column(BigInteger, unique=True, index=True)

    username: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    full_name: Mapped[Optional[str]] = mapped_column(String(128), nullable=True)

    language: Mapped[Optional[str]] = mapped_column(String(2), default=None)
    group_ab: Mapped[str] = mapped_column(String(1), default='A')

    click_id: Mapped[Optional[str]] = mapped_column(String(64), unique=True, index=True, nullable=True)
    trader_id: Mapped[Optional[str]] = mapped_column(String(64), index=True, nullable=True)

    is_subscribed: Mapped[bool] = mapped_column(Boolean, default=False)
    is_registered: Mapped[bool] = mapped_column(Boolean, default=False)
    has_deposit: Mapped[bool] = mapped_column(Boolean, default=False)

    total_deposits: Mapped[float] = mapped_column(Float, default=0.0)
    deposit_count: Mapped[int] = mapped_column(Integer, default=0)

    is_platinum: Mapped[bool] = mapped_column(Boolean, default=False)

    access_notified: Mapped[bool] = mapped_column(Boolean, default=False)
    platinum_notified: Mapped[bool] = mapped_column(Boolean, default=False)

    last_bot_message_id: Mapped[Optional[int]] = mapped_column(BigInteger, nullable=True)

    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
    
    # --- ПОЛЯ ДЛЯ ДОЖИМОВ ---
    registered_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    rem_reg_2h: Mapped[bool] = mapped_column(Boolean, default=False)
    rem_reg_24h: Mapped[bool] = mapped_column(Boolean, default=False)
    rem_dep_2h: Mapped[bool] = mapped_column(Boolean, default=False)
    rem_dep_24h: Mapped[bool] = mapped_column(Boolean, default=False)

class ReminderOverride(Base):
    __tablename__ = "reminder_overrides"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    lang: Mapped[str] = mapped_column(String(2), index=True) 
    rem_type: Mapped[str] = mapped_column(String(10)) # reg / dep
    timing: Mapped[str] = mapped_column(String(10))  # 2h / 24h
    text: Mapped[str] = mapped_column(Text)
    __table_args__ = (UniqueConstraint("lang", "rem_type", "timing", name="uix_rem_lang_type_time"),)

class DepositRecord(Base):
    __tablename__ = "deposit_records"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(BigInteger, index=True)
    amount: Mapped[float] = mapped_column(Float)
    deposit_type: Mapped[str] = mapped_column(String(20), default="repeat")
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

class Config(Base):
    __tablename__ = "config"
    key: Mapped[str] = mapped_column(String(64), primary_key=True)
    value: Mapped[str] = mapped_column(String(4096), nullable=False)

class ContentOverride(Base):
    __tablename__ = "content_overrides"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    lang: Mapped[str] = mapped_column(String(2), index=True)
    screen: Mapped[str] = mapped_column(String(32), index=True)
    title: Mapped[Optional[str]] = mapped_column(String(512), nullable=True)
    text: Mapped[Optional[str]] = mapped_column(String(4096), nullable=True)

class BtnOverride(Base):
    __tablename__ = "btn_overrides"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    lang: Mapped[str] = mapped_column(String(5), index=True)
    key:  Mapped[str] = mapped_column(String(64), index=True)
    text: Mapped[str] = mapped_column(Text)
    __table_args__ = (UniqueConstraint("lang", "key", name="uix_btn_lang_key"),)

# --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---

async def init_db() -> None:
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

def get_session() -> AsyncSession:
    return AsyncSessionLocal()

async def get_or_create_user(session: AsyncSession, tg_id: int) -> "User":
    result = await session.execute(select(User).where(User.telegram_id == tg_id))
    user = result.scalar_one_or_none()
    if user:
        return user
    user = User(telegram_id=tg_id, group_ab='A')
    session.add(user)
    await session.commit()
    await session.refresh(user)
    return user

async def ensure_click_id(session: AsyncSession, user: "User") -> "User":
    desired_id = str(user.telegram_id)
    if user.click_id != desired_id:
        user.click_id = desired_id
        try:
            await session.commit()
            await session.refresh(user)
        except Exception:
            await session.rollback()
    return user

async def get_user_by_click_id(session: AsyncSession, click_id: str) -> Optional["User"]:
    result = await session.execute(select(User).where(User.click_id == click_id))
    return result.scalar_one_or_none()

async def get_user_by_trader_id(session: AsyncSession, trader_id: str) -> Optional["User"]:
    if not trader_id:
        return None
    result = await session.execute(select(User).where(User.trader_id == trader_id))
    return result.scalar_one_or_none()