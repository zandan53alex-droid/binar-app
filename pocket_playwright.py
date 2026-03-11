"""
pocket_playwright.py — Перехват котировок PocketOption через реальный браузер.
"""

import asyncio
import json
import logging
import os
import re
import socket
import websockets

from dotenv import load_dotenv
from playwright.async_api import async_playwright, Page, WebSocket as PWWebSocket

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
load_dotenv()

# ─── Глобальный broadcast сервер ────────────────────────────────────────────

clients: set = set()


async def ws_handler(websocket, path=None):
    """Обработчик подключений от мини-приложения."""
    clients.add(websocket)
    logging.info(f"📱 Мини-приложение подключилось: {websocket.remote_address}. Всего клиентов: {len(clients)}")
    try:
        async for _ in websocket:
            pass
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        clients.discard(websocket)
        logging.info(f"❌ Мини-приложение отключилось. Всего клиентов: {len(clients)}")


# ─── Таблица соответствия PocketOption API ID → app.js asset ID ─────────────
PO_ID_MAP = {
    # --- 6 КРИПТОВАЛЮТ + ETF (Универсальный маппинг) ---
    "btcusd": "bitcoin", "btcusd_otc": "bitcoin_otc", "bitcoin otc": "bitcoin_otc",
    "ethusd": "ethereum", "ethusd_otc": "eth_otc", "ethereum otc": "eth_otc",
    "solusd": "sol_otc", "solusd_otc": "sol_otc", "solana otc": "sol_otc",
    "adausd": "ada_otc", "adausd_otc": "ada_otc", "cardano otc": "ada_otc",
    "trxusd": "trx_otc", "trxusd_otc": "trx_otc", "tron otc": "trx_otc",
    "tonusd": "ton_otc", "tonusd_otc": "ton_otc", "toncoin otc": "ton_otc",
    "bnbusd": "bnb_otc", "bnbusd_otc": "bnb_otc", "bnb otc": "bnb_otc",
    "bitcoin_etf_otc": "bitcoin_etf_otc", "bitcoin etf otc": "bitcoin_etf_otc", "bitb_otc": "bitcoin_etf_otc",
    
    # --- Дополнительная крипта (Регрессия) ---
    "ltcusd": "ltc_otc", "ltcusd_otc": "ltc_otc", "litecoin otc": "ltc_otc", "ltc-usd_otc": "ltc_otc",
    "dogeusd_otc": "doge_otc", "dogecoin otc": "doge_otc",
    "avaxusd_otc": "avax_otc", "avalanche otc": "avax_otc",
    "linkusd_otc": "link_otc", "chainlink otc": "link_otc",
    "maticusd_otc": "matic_otc", "polygon otc": "matic_otc",
    "dotusd_otc": "dot_otc", "polkadot otc": "dot_otc",
    
    # --- INDICES ---
    "f40eur_otc": "f40eur_otc", "f40eur": "f40eur_index",
    "nasusd_otc": "us100_otc", "sp500_otc": "sp500_otc", "dji30_otc": "dji30_otc",
    "aus200_otc": "aus200_otc", "100gbp_otc": "100gbp_otc",
    "d30eur_otc": "d30eur_otc", "e35eur_otc": "e35eur_otc", "e50eur_otc": "e50eur_otc",
    "jpn225_otc": "jpn225_otc",
    
    # --- COMMODITIES ---
    "xngusd_otc": "natural_gas", "xngusd": "natural_gas_regular",
    "xpdusd_otc": "palladium_otc", "xptusd_otc": "platinum_otc",
    "xauusd_otc": "gold_otc", "xagusd_otc": "silver_otc",
    "ukbrent_otc": "brent_oil_otc", "uscrude_otc": "us_crude_otc",
    
    # --- STOCKS ---
    "fb_otc": "fb_otc", "meta_otc": "fb_otc", "facebook_otc": "fb_otc",
    "apple_otc": "aapl_otc", "amazon_otc": "amzn_otc", "tesla_otc": "tsla_otc",
}


async def broadcast_quotes(quotes_data):
    """Рассылает котировки всем подключённым клиентам."""
    global clients
    if not clients:
        return
    translated = []
    # Хранилище для отладки неизвестных ID
    if not hasattr(broadcast_quotes, 'unknown_ids'): broadcast_quotes.unknown_ids = set()
    
    for row in quotes_data:
        if isinstance(row, list) and len(row) >= 2:
            # Очищаем ID: строчные буквы, убираем # и - (Нормализация)
            po_id = str(row[0]).lower().replace("#", "").replace("-", "")
            app_id = PO_ID_MAP.get(po_id, po_id)
            
            translated.append([app_id, row[1]])
                
    if not translated:
        return
    
    message = json.dumps({"action": "update_quotes", "data": translated})
    dead = set()
    active_count = 0
    for client in list(clients):
        try:
            await client.send(message)
            active_count += 1
        except Exception:
            dead.add(client)
    clients.difference_update(dead)
    
    if active_count > 0:
        if not hasattr(broadcast_quotes, 'last_log_time'): broadcast_quotes.last_log_time = 0
        import time
        now = time.time()
        
        # Лог для крипты — всегда (без 5с задержки)
        crypto_data = [t for t in translated if any(x in str(t[0]).lower() for x in ["bitcoin", "eth", "sol", "ada", "trx", "ton", "bnb", "ltc", "avax", "link", "matic", "dot", "etf"])]
        if crypto_data:
            logging.info(f"💎 КРИПТА В ЭФИРЕ: {crypto_data}")

        if now - broadcast_quotes.last_log_time > 5:
            if not crypto_data: # Если крипты нет, логируем обычный статус раз в 5 сек
                if len(translated) == 1:
                    logging.info(f"📤 [1] Актив в сети: {translated[0][0]} (ID: {quotes_data[0][0]})")
                else:
                    logging.info(f"📤 Разослано {len(translated)} котировок {active_count} клиентам")
            broadcast_quotes.last_log_time = now
    else:
        if not hasattr(broadcast_quotes, 'fail_count'): broadcast_quotes.fail_count = 0
        broadcast_quotes.fail_count += 1
        if broadcast_quotes.fail_count % 30 == 0:
            logging.warning("⚠️ Котировки идут, но Mini App НЕ ПОДКЛЮЧЕН. Откройте: http://localhost:8080/?ip=127.0.0.1")


def parse_po_message(raw: str):
    if not raw.startswith("42"):
        return None, None
    bracket = raw.find("[")
    if bracket == -1:
        return None, None
    try:
        data = json.loads(raw[bracket:])
        if isinstance(data, list) and len(data) >= 2:
            return data[0], data[1]
    except json.JSONDecodeError:
        pass
    return None, None


async def handle_po_websocket(ws: PWWebSocket):
    url = ws.url
    if "socket.io" not in url:
        return
    logging.info(f"📡 Перехвачен WebSocket PocketOption: {url}")
    expect_binary_data = [False]

    def on_frame_received(payload):
        try:
            text = payload if isinstance(payload, str) else payload.decode("utf-8", errors="replace")
            
            # 1. Бинарные обновления (451-["updateStream", ...)
            if text.startswith('451-["updateStream"') and '_placeholder' in text:
                expect_binary_data[0] = True
                return
                
            if expect_binary_data[0]:
                expect_binary_data[0] = False
                try:
                    data = json.loads(text)
                    if isinstance(data, list) and data:
                        # В бинарных данных: [id, unknown, price]
                        quotes = []
                        for row in data:
                            if isinstance(row, list) and len(row) >= 3:
                                quotes.append([row[0], row[2]])
                        if quotes: schedule_broadcast(quotes)
                except Exception: pass
                return
            
            # 2. Текстовые обновления (42["updateStream", ...)
            if text.startswith('42['):
                event, data = parse_po_message(text)
                
                if event in ("updateStream", "price", "tick", "candles", "asset") and data:
                    normalized = []
                    
                    # Обработка разных форматов данных
                    if isinstance(data, list) and data and isinstance(data[0], (list, dict)):
                        for row in data:
                            # Формат: [id, time, price, ...]
                            if isinstance(row, list) and len(row) >= 3:
                                normalized.append([row[0], row[2]])
                            # Формат: [id, price]
                            elif isinstance(row, list) and len(row) == 2:
                                normalized.append([row[0], row[1]])
                            # Формат: {"asset": "...", "price": ...}
                            elif isinstance(row, dict):
                                asset = row.get("asset") or row.get("symbol") or row.get("id")
                                price = row.get("price") or row.get("last") or row.get("close")
                                if asset and price:
                                    normalized.append([asset, price])
                    
                    # Одиночное сообщение [id, price] или {"symbol": "...", "price": ...}
                    elif isinstance(data, list) and len(data) >= 2 and isinstance(data[0], str):
                        normalized.append([data[0], data[1]])
                    elif isinstance(data, dict):
                        asset = data.get("asset") or data.get("symbol") or data.get("id")
                        price = data.get("price") or data.get("last") or data.get("close")
                        if asset and price:
                            normalized.append([asset, price])
                    
                    if normalized:
                        # Лог для крипты
                        crypto_patterns = ["btc", "sol", "ada", "trx", "ton", "bnb", "eth", "ltc", "etf", "bitcoin", "solana", "tron", "cardano", "litecoin"]
                        crypto_found = [n for n in normalized if any(p in str(n[0]).lower() for p in crypto_patterns)]
                        if crypto_found:
                            logging.info(f"💎 КРИПТА В ПОТОКЕ: {crypto_found}")
                        schedule_broadcast(normalized)
        except Exception as e:
            logging.error(f"Error in on_frame_received: {e}")

    ws.on("framereceived", on_frame_received)

_main_loop: asyncio.AbstractEventLoop | None = None

def schedule_broadcast(quotes):
    if _main_loop and not _main_loop.is_closed():
        _main_loop.call_soon_threadsafe(
            lambda q=quotes: asyncio.ensure_future(broadcast_quotes(q), loop=_main_loop)
        )

POCKET_URL = "https://pocketoption.com/ru/cabinet/demo-quick-high-low/"

# Список активов для подписки (РЕГИСТР ВАЖЕН!)
ALL_ASSETS = [
    # Crypto (Short & Long names)
    "BTCUSD", "SOLUSD", "ADAUSD", "TRXUSD", "TONUSD", "BNBUSD", "LTCUSD",
    "BTCUSD_otc", "SOLUSD_otc", "ADAUSD_otc", "TRXUSD_otc", "TONUSD_otc", "BNBUSD_otc", "LTCUSD_otc",
    "Bitcoin OTC", "Ethereum OTC", "Litecoin OTC", "Solana OTC", "Cardano OTC", "TRON OTC", "Toncoin OTC", "BNB OTC", "Bitcoin ETF OTC",
    # Forex OTC
    "EURUSD_otc","GBPUSD_otc","USDJPY_otc","USDCHF_otc","USDCAD_otc","AUDUSD_otc","AUDCAD_otc","AUDJPY_otc",
    "NZDJPY_otc","NZDUSD_otc","AUDNZD_otc","GBPCHF_otc","EURGBP_otc","EURJPY_otc","GBPJPY_otc",
    # Commodities OTC
    "XAUUSD_otc","XAGUSD_otc","UKBrent_otc","USCrude_otc","XNGUSD_otc","XNGUSD","XPTUSD_otc","XPDUSD_otc",
    # Indices OTC
    "SP500_otc","DJI30_otc","NASUSD_otc","AUS200_otc","100GBP_otc","D30EUR_otc","E35EUR_otc","E50EUR_otc","JPN225_otc","F40EUR_otc",
    # Stocks OTC
    "#AAPL_otc","#TSLA_otc","#AMZN_otc","#MSFT_otc","#FB_otc","#GOOG_otc","#NFLX_otc","#NVDA_otc","#AMD_otc","#INTC_otc","#BA_otc","#V_otc","#GME_otc","#MCD_otc",
    "#PYPL_otc","#BABA_otc","#PFE_otc","#JNJ_otc","#DIS_otc","#ADBE_otc","#MARA_otc","#COIN_otc","#PLTR_otc",
]

WS_HOOK_JS = """
(function() {
    const ASSETS = """ + str(ALL_ASSETS).replace("'", '"') + """;
    const OrigWS = window.WebSocket;
    function doSubscribe(send) {
        console.log('[HOOK] Initialization Step 1-3...');
        // 22 варианта крипто (Short, OTC, Long names)
        const cryptoAssets = [
            "BTCUSD","SOLUSD","ADAUSD","TRXUSD","TONUSD","BNBUSD","LTCUSD",
            "BTCUSD_otc","SOLUSD_otc","ADAUSD_otc","TRXUSD_otc","TONUSD_otc","BNBUSD_otc","LTCUSD_otc",
            "Bitcoin OTC", "Ethereum OTC", "Litecoin OTC", "Solana OTC", "Cardano OTC", "TRON OTC", "Toncoin OTC", "BNB OTC", "Bitcoin ETF OTC"
        ];
        
        // Подписка
        send('42["subscribe",' + JSON.stringify(cryptoAssets) + ']');
        
        // Прогрев через changeSymbol (ОБЯЗАТЕЛЬНО для крипты)
        cryptoAssets.forEach((asset, i) => {
            setTimeout(() => {
                console.log('[HOOK] Warming up (ChatGPT recommended): ' + asset);
                send('42["changeSymbol",{"asset":"' + asset + '","period":60}]');
            }, i * 2000);
        });

        // Подписка на остальные активы
        const otherAssets = ASSETS.filter(a => !cryptoAssets.includes(a));
        const chunkSize = 15;
        for (let i = 0; i < otherAssets.length; i += chunkSize) {
            const chunk = otherAssets.slice(i, i + chunkSize);
            setTimeout(() => {
                send('42["subscribe",' + JSON.stringify(chunk) + ']');
            }, 30000 + (i * 1000));
        }

        // Heartbeat (каждые 12 секунд)
        setInterval(() => {
            send('2'); 
        }, 12000);

        // Авто-реподписка каждые 30 минут (для подстраховки при открытии рынков)
        setInterval(() => {
            console.log('[HOOK] Periodic re-subscription to ensure all markets are active...');
            doSubscribe(send);
        }, 30 * 60 * 1000);
    }

    window.WebSocket = function(url, protocols) {
        const ws = protocols ? new OrigWS(url, protocols) : new OrigWS(url);
        if (!url.includes('socket.io')) return ws;
        const origSend = ws.send.bind(ws);
        let subStarted = false;
        
        const startSub = () => {
            if (subStarted) return;
            subStarted = true;
            console.log('[HOOK] PO WebSocket detected, waiting for session (40)...');
        };

        ws.addEventListener('message', function(event) {
            const msg = event.data;
            // Ждем 40 message для инициализации (Step 1)
            if (msg === '40') {
                console.log('[HOOK] Session initialized (40), starting workflow...');
                setTimeout(() => doSubscribe(origSend), 2000);
            }
        });

        ws.send = function(data) {
            origSend(data);
            if (!subStarted) {
                const sData = String(data);
                if (sData.includes('auth') || sData.includes('ssid') || sData.includes('42["')) {
                    startSub();
                }
            }
        };

        // На случай если отправку не поймали
        setTimeout(startSub, 20000);

        return ws;
    };
    window.WebSocket.prototype = OrigWS.prototype;
    console.log('[HOOK] Assets list prepared (' + ASSETS.length + ')');
})();
"""

async def run_browser(loop: asyncio.AbstractEventLoop):
    async with async_playwright() as pw:
        user_data_dir = os.path.join(os.path.dirname(__file__), ".chromium_session")
        browser = await pw.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled"],
            ignore_https_errors=True,
        )
        page = browser.pages[0] if browser.pages else await browser.new_page()
        
        # Пересылаем консоль браузера в лог (уровень debug)
        page.on("console", lambda msg: logging.info(f"🌐 [BROWSER] {msg.text}") if "[HOOK]" in msg.text else logging.debug(f"🌐 [BROWSER] {msg.text}"))
        
        await page.add_init_script(WS_HOOK_JS)
        page.on("websocket", handle_po_websocket)
        logging.info(f"🌐 Открываем {POCKET_URL}...")
        await page.goto(POCKET_URL, wait_until="domcontentloaded")
        while True:
            await asyncio.sleep(10)
            if page.is_closed(): break

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception: return "127.0.0.1"

async def main():
    global _main_loop
    _main_loop = asyncio.get_event_loop()
    local_ip = get_local_ip()
    server = await websockets.serve(ws_handler, "0.0.0.0", 8765)
    
    print("\n" + "╔" + "═"*60 + "╗")
    print(f"║ 🚀 СЕРВЕР КОТИРОВОК ЗАПУЩЕН                                ║")
    print(f"║                                                            ║")
    print(f"║ 1. ЗАПУСТИТЕ ВЕБ-СЕРВЕР: python web_server.py              ║")
    print(f"║ 2. ДЛЯ ПК: http://localhost:8080/?ip=127.0.0.1             ║")
    print(f"║                                                            ║")
    print(f"║ 📱 ДЛЯ ТЕЛЕГРАМ (Android/iOS):                             ║")
    print(f"║    Чтобы работало в Mini App, нужен защищенный туннель:    ║")
    print(f"║    1. Скачайте ngrok (ngrok.com)                           ║")
    print(f"║    2. Запустите: ngrok http 8765                           ║")
    print(f"║    3. Скопируйте Forwarding URL (начинается на https://)   ║")
    print(f"║    4. В Mini App замените https:// на wss://               ║")
    print(f"║    Пример: ?ip=wss://your-id.ngrok-free.app                ║")
    print("╚" + "═"*60 + "╝\n")
    
    await run_browser(_main_loop)

if __name__ == "__main__":
    if os.name == 'nt':
        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
    try:
        asyncio.run(main())
    except KeyboardInterrupt: pass
