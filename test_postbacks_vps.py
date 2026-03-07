#!/usr/bin/env python3
"""
Скрипт для тестирования постбеков на VPS
Использование:
    python test_postbacks_vps.py
    python test_postbacks_vps.py --click-id YOUR_CLICK_ID
    python test_postbacks_vps.py --telegram-id YOUR_TELEGRAM_ID
"""

import asyncio
import sys
import argparse
from sqlalchemy import select
from db import init_db, get_session, User, ensure_click_id, get_user_by_click_id
from config_service import pb_secret
from settings import settings

async def list_users():
    """Показать всех пользователей с их click_id"""
    async with get_session() as session:
        result = await session.execute(select(User).order_by(User.created_at.desc()).limit(10))
        users = result.scalars().all()
        
        if not users:
            print("❌ Пользователей не найдено")
            return None
        
        print("\n📋 Последние пользователи:")
        print("=" * 70)
        for u in users:
            click_id = u.click_id or "❌ не создан"
            print(f"  Telegram ID: {u.telegram_id}")
            print(f"  Click ID: {click_id}")
            print(f"  Зарегистрирован: {'✅' if u.is_registered else '❌'}")
            print(f"  Депозит: {'✅' if u.has_deposit else '❌'} (${u.total_deposits or 0})")
            print("-" * 70)
        
        return users[0] if users else None

async def get_or_create_test_user(telegram_id: int = None):
    """Получить или создать тестового пользователя"""
    if telegram_id is None:
        telegram_id = settings.ADMIN_ID
    
    async with get_session() as session:
        result = await session.execute(select(User).where(User.telegram_id == telegram_id))
        user = result.scalar_one_or_none()
        
        if not user:
            print(f"📝 Создание нового пользователя с Telegram ID: {telegram_id}")
            user = User(telegram_id=telegram_id, group_ab='A')
            session.add(user)
            await session.commit()
            await session.refresh(user)
        
        user = await ensure_click_id(session, user)
        await session.commit()
        
        print(f"\n✅ Пользователь готов:")
        print(f"   Telegram ID: {user.telegram_id}")
        print(f"   Click ID: {user.click_id}")
        
        return user

async def show_test_commands(user: User):
    """Показать команды curl для тестирования"""
    secret = await pb_secret()
    base = f"http://72.56.77.59:8000"  # Замените на ваш IP если нужно
    
    print("\n" + "=" * 70)
    print("🧪 КОМАНДЫ ДЛЯ ТЕСТИРОВАНИЯ ПОСТБЕКОВ")
    print("=" * 70)
    print(f"\n📝 1. Тест регистрации:")
    print(f"curl '{base}/pb?event=registration&secret={secret}&click_id={user.click_id}&trader_id=test_trader_123'")
    
    print(f"\n💰 2. Тест первого депозита ($15):")
    print(f"curl '{base}/pb?event=deposit_first&secret={secret}&click_id={user.click_id}&trader_id=test_trader_123&sumdep=15.0'")
    
    print(f"\n💵 3. Тест повторного депозита ($25):")
    print(f"curl '{base}/pb?event=deposit_repeat&secret={secret}&click_id={user.click_id}&trader_id=test_trader_123&sumdep=25.0'")
    
    print("\n" + "=" * 70)
    print("💡 Или используйте Python requests:")
    print("=" * 70)
    print(f"""
import requests

BASE = "{base}"
SECRET = "{secret}"
CLICK_ID = "{user.click_id}"

# Регистрация
requests.get(f"{{BASE}}/pb", params={{
    "event": "registration",
    "secret": SECRET,
    "click_id": CLICK_ID,
    "trader_id": "test_trader_123"
}})

# Депозит
requests.get(f"{{BASE}}/pb", params={{
    "event": "deposit_first",
    "secret": SECRET,
    "click_id": CLICK_ID,
    "trader_id": "test_trader_123",
    "sumdep": 15.0
}})
""")

async def main():
    parser = argparse.ArgumentParser(description='Тестирование постбеков')
    parser.add_argument('--click-id', type=str, help='Click ID пользователя для тестирования')
    parser.add_argument('--telegram-id', type=int, help='Telegram ID пользователя')
    parser.add_argument('--list', action='store_true', help='Показать список пользователей')
    args = parser.parse_args()
    
    await init_db()
    
    if args.list:
        await list_users()
        return
    
    if args.click_id:
        async with get_session() as session:
            user = await get_user_by_click_id(session, args.click_id)
            if not user:
                print(f"❌ Пользователь с click_id={args.click_id} не найден")
                return
    elif args.telegram_id:
        user = await get_or_create_test_user(args.telegram_id)
    else:
        # Показать список и использовать первого или создать нового
        print("🔍 Поиск пользователей...")
        first_user = await list_users()
        if first_user and first_user.click_id:
            user = first_user
            print(f"\n✅ Используем пользователя: {user.telegram_id} (click_id: {user.click_id})")
        else:
            print("\n📝 Создаём тестового пользователя...")
            user = await get_or_create_test_user()
    
    await show_test_commands(user)

if __name__ == "__main__":
    asyncio.run(main())

