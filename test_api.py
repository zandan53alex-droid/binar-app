import asyncio
import logging
from dotenv import load_dotenv
import os
import sys

# Добавляем путь к библиотеке
sys.path.append(r'C:\binarny\temp_po_api')

from pocketoptionapi_async.api import PocketOptionAPI

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

async def main():
    load_dotenv()
    ssid = os.getenv("POCKET_OPTION_SSID")
    
    if not ssid:
        logging.error("POCKET_OPTION_SSID не найден в файле .env!")
        return
        
    logging.info("Инициализация PocketOption API...")
    api = PocketOptionAPI(ssid)
    
    logging.info("Подключение...")
    connected = await api.connect()
    
    if not connected:
        logging.error("Не удалось подключиться!")
        return
        
    logging.info("Успешное подключение! Запрашиваем котировки EURUSD_otc...")
    candles = await api.get_candles("EURUSD_otc", 60, count=5)
    
    logging.info(f"Получено свечей: {len(candles)}")
    for c in candles:
        logging.info(f"{c.timestamp}: O={c.open} H={c.high} L={c.low} C={c.close} V={c.volume}")
        
    await asyncio.sleep(2)
    await api.disconnect()

if __name__ == "__main__":
    asyncio.run(main())
