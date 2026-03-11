import asyncio
from db import get_session, Config, ReminderOverride
from sqlalchemy import select

async def check():
    async with get_session() as session:
        # Check Config
        res = await session.execute(select(Config))
        print("--- Config ---")
        for row in res.scalars():
            print(f"{row.key}: {row.value}")
        
        # Check ReminderOverride
        res = await session.execute(select(ReminderOverride))
        print("\n--- ReminderOverride ---")
        for row in res.scalars():
            print(f"{row.lang} {row.rem_type} {row.timing}: {row.text}")

if __name__ == "__main__":
    asyncio.run(check())
