import asyncio
from db import get_session, Config, ReminderOverride
from sqlalchemy import select, update

async def fix():
    async with get_session() as session:
        # Update Support URL in Config
        res = await session.execute(select(Config).where(Config.key == "SUPPORT_URL"))
        row = res.scalar_one_or_none()
        new_val = "https://t.me/YVNKxe"
        if row:
            row.value = new_val
        else:
            session.add(Config(key="SUPPORT_URL", value=new_val))
        print(f"✅ SUPPORT_URL set to {new_val} in DB")
        
        # Check and update ReminderOverrides
        res = await session.execute(select(ReminderOverride))
        overrides = res.scalars().all()
        for ov in overrides:
            if "Vadim" in ov.text or "вадим" in ov.text.lower():
                # This is a very rough way to "clean" but if we find it, we should probably warn or reset
                # For now, let's just log them.
                print(f"⚠️ Found old contact in {ov.lang} {ov.rem_type} {ov.timing}")
        
        await session.commit()

if __name__ == "__main__":
    asyncio.run(fix())
