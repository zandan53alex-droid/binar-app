import os, asyncio, json, logging, websockets, time
from dotenv import load_dotenv

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
load_dotenv()

BRIDGE_TOKEN = os.getenv("PB_SECRET", "zandan53")
clients = set()
last_quotes = {} # Кэш последних котировок

async def ws_handler(websocket, path=None):
    logging.info(f"Новое подключение: {websocket.remote_address}")
    clients.add(websocket)
    
    # Сразу отправляем последние известные цены при подключении
    if last_quotes:
        try:
            initial_data = json.dumps({
                "action": "update_quotes", 
                "data": [[asset_id, price] for asset_id, price in last_quotes.items()]
            })
            await websocket.send(initial_data)
        except: pass

    try:
        async for message in websocket:
            try:
                data = json.loads(message)
                if isinstance(data, dict) and data.get("token") == BRIDGE_TOKEN:
                    if data.get("action") == "bridge_update":
                        raw_quotes = data.get("data", [])
                        # Обновляем кэш
                        for q in raw_quotes:
                            if len(q) >= 2:
                                last_quotes[q[0]] = q[1]
                        await broadcast_quotes(raw_quotes)
            except Exception: pass
    except websockets.exceptions.ConnectionClosed: pass
    finally:
        clients.discard(websocket)
        logging.info(f"Клиент отключился: {websocket.remote_address}")

async def broadcast_quotes(data):
    if not data or not clients: return
    msg = json.dumps({"action": "update_quotes", "data": data})
    disconnected = set()
    for client in list(clients):
        try:
            await client.send(msg)
        except:
            disconnected.add(client)
    if disconnected:
        clients.difference_update(disconnected)

async def main():
    async with websockets.serve(ws_handler, "0.0.0.0", 8765):
        logging.info("🚀 HYBRID HUB ACTIVE (WITH CACHE) ON PORT 8765")
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
