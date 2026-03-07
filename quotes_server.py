import os
import asyncio
import json
import logging
import websockets
from dotenv import load_dotenv

# Настройка логирования
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Загружаем настройки
load_dotenv()
SSID = os.getenv("POCKET_OPTION_SSID")

if not SSID:
    logging.error("POCKET_OPTION_SSID не найден в файле .env!")
    exit(1)

# Глобальный набор подключенных клиентов мини-приложения
clients = set()

# Обработчик подключений от мини-приложения
async def ws_handler(websocket, path=None):
    logging.info(f"Новый клиент подключился: {websocket.remote_address}")
    clients.add(websocket)
    try:
        async for message in websocket:
            pass
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        clients.discard(websocket)
        logging.info(f"Клиент отключился: {websocket.remote_address}")

async def broadcast_quotes(quotes_data):
    if not clients:
        return
    message = json.dumps({"action": "update_quotes", "data": quotes_data})
    disconnected = set()
    for client in list(clients):
        try:
            await client.send(message)
        except websockets.exceptions.ConnectionClosed:
            disconnected.add(client)
    clients -= disconnected

async def pocket_option_client():
    # Серверы API PocketOption (попробуем разные)
    urls = [
        "wss://api-eu.po.market/socket.io/?EIO=4&transport=websocket",
        "wss://api-spb.po.market/socket.io/?EIO=4&transport=websocket",
        "wss://chat-po.site/cabinet-client/socket.io/?EIO=4&transport=websocket",
        "wss://api-l.pocketoption.com/socket.io/?EIO=4&transport=websocket",
        "wss://api-ru.pocketoption.com/socket.io/?EIO=4&transport=websocket",
        "wss://api-1.pocketoption.com/socket.io/?EIO=4&transport=websocket",
    ]

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Origin": "https://pocketoption.com"
    }

    url_index = 0

    while True:
        url = urls[url_index]
        try:
            logging.info(f"Подключение к {url}...")

            async with websockets.connect(url, extra_headers=headers, ping_interval=None) as ws:
                logging.info("Подключено! Ожидаем сообщений от сервера...")
                subscribed = False

                async for msg in ws:
                    if isinstance(msg, bytes):
                        msg = msg.decode("utf-8")

                    # Печатаем сырое сообщение для диагностики
                    if len(msg) > 200:
                        logging.info(f"RAW: {msg[:200]}...")
                    else:
                        logging.info(f"RAW: {msg}")

                    # Engine.IO ping — отвечаем pong
                    if msg == "2":
                        await ws.send("3")
                        continue

                    # Engine.IO handshake: сервер прислал "0 {sid...}"
                    if msg.startswith("0") and "sid" in msg:
                        logging.info("Handshake: отправляем '40'")
                        await ws.send("40")

                    # Socket.IO namespace opened: сервер прислал "40{...}"
                    elif msg.startswith("40"):
                        logging.info("Namespace открыт: отправляем авторизацию SSID...")
                        await ws.send(SSID)
                        await asyncio.sleep(1.5)

                        # Подписываемся на котировки
                        if not subscribed:
                            assets = [
                                "EURUSD_otc", "GBPUSD_otc", "USDJPY_otc",
                                "AUDJPY_otc", "EURJPY_otc", "GBPJPY_otc",
                                "USDCAD_otc", "AUDCHF_otc", "NZDJPY_otc"
                            ]
                            subscribe_msg = json.dumps(["subscribe", assets])
                            logging.info(f"Отправляем подписку: 42{subscribe_msg}")
                            await ws.send(f"42{subscribe_msg}")
                            subscribed = True

                    # Socket.IO event
                    elif msg.startswith("42"):
                        try:
                            bracket_idx = msg.find("[")
                            if bracket_idx != -1:
                                data = json.loads(msg[bracket_idx:])
                                event_name = data[0] if data else ""
                                payload = data[1] if len(data) > 1 else None

                                if event_name in ("updateStream", "price", "candles", "tick"):
                                    logging.info(f"КОТИРОВКИ [{event_name}]: {str(payload)[:120]}")
                                    await broadcast_quotes(payload)
                                elif event_name == "NotAuthorized":
                                    logging.error("SSID отклонён сервером! Обновите SSID в .env")
                                elif event_name == "info":
                                    logging.info(f"Инфо: {payload}")
                                else:
                                    logging.info(f"Событие [{event_name}]: {str(payload)[:120]}")
                        except Exception as e:
                            logging.error(f"Ошибка парсинга: {e} | RAW: {msg[:100]}")

                logging.info("Соединение закрыто сервером.")

        except Exception as e:
            logging.error(f"Ошибка соединения: {e}")
            url_index = (url_index + 1) % len(urls)
            await asyncio.sleep(3)

async def main():
    server = await websockets.serve(ws_handler, "0.0.0.0", 8765)
    logging.info("WebSocket сервер запущен на ws://localhost:8765")
    po_task = asyncio.create_task(pocket_option_client())
    await asyncio.gather(server.wait_closed(), po_task)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logging.info("Сервер остановлен.")
