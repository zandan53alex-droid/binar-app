import asyncio
from datetime import datetime, timedelta
from sqlalchemy import update
from db import get_session, User

async def fake_time(tg_id: int, mode: str):
    async with get_session() as session:
        now = datetime.utcnow()
        
        if mode == "reg":
            # Имитируем, что зашли в бот 3 часа назад и не зарегались
            stmt = update(User).where(User.telegram_id == tg_id).values(
                created_at=now - timedelta(hours=3),
                is_registered=False,
                rem_reg_2h=False # Сбрасываем флаг, чтобы дожим сработал снова
            )
            print(f"Аккаунт {tg_id} 'состарен' на 3 часа (ожидание регистрации)")
            
        elif mode == "dep":
            # Имитируем, что зарегались 3 часа назад, но не внесли деп
            stmt = update(User).where(User.telegram_id == tg_id).values(
                registered_at=now - timedelta(hours=3),
                is_registered=True,
                has_deposit=False,
                rem_dep_2h=False
            )
            print(f"Аккаунт {tg_id} 'состарен' (ожидание депозита 2ч)")

        await session.execute(stmt)
        await session.commit()

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Использование: python3 debug_reminders.py <ваш_id_телеграм> <reg или dep>")
    else:
        asyncio.run(fake_time(int(sys.argv[1]), sys.argv[2]))