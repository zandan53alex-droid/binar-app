"""
pocket_playwright.py — Перехват котировок PocketOption через реальный браузер.

Запуск:
    1. pip install playwright websockets
    2. playwright install chromium
    3. python pocket_playwright.py

Откроется Chrome с PocketOption. Войдите если нужно.
Котировки автоматически транслируются в ws://localhost:8765 для Mini App.
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
    logging.info(f"Мини-приложение подключилось: {websocket.remote_address}")
    clients.add(websocket)
    try:
        async for _ in websocket:
            pass
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        clients.discard(websocket)


# ─── Таблица соответствия PocketOption API ID → app.js asset ID ─────────────
# PocketOption присылает BTCUSD_otc, но в app.js элемент называется price-bitcoin_otc
PO_ID_MAP = {
    # Крипто OTC — оба формата названий
    "btcusd_otc": "bitcoin_otc",
    "bitcoin_otc": "bitcoin_otc",
    "ethusd_otc": "eth_otc",
    "eth_otc": "eth_otc",
    "ltcusd_otc": "ltc_otc",
    "ltc_otc": "ltc_otc",
    "dogeusd_otc": "doge_otc",
    "doge_otc": "doge_otc",
    "adausd_otc": "ada_otc",
    "ada_otc": "ada_otc",
    "solusd_otc": "sol_otc",
    "sol_otc": "sol_otc",
    "tonusd_otc": "ton_otc",
    "ton_otc": "ton_otc",
    "avaxusd_otc": "avax_otc",
    "avax_otc": "avax_otc",
    "maticusd_otc": "matic_otc",
    "matic_otc": "matic_otc",
    "trxusd_otc": "trx_otc",
    "trx_otc": "trx_otc",
    "lnkusd_otc": "link_otc",
    "link_otc": "link_otc",
    "dotusd_otc": "dot_otc",
    "dot_otc": "dot_otc",
    "bnbusd_otc": "bnb_otc",
    "bnb_otc": "bnb_otc",
    "bitcoin_etf_otc": "bitcoin_etf_otc",
    "btcetf_otc": "bitcoin_etf_otc",
    # Крипто Regular
    "btcusd": "bitcoin",
    "ethusd": "ethereum",
    "dash_usd": "dash",
    "dotusd": "dotusd",
    "lnkusd": "link",
    # Сырьевые OTC
    "xauusd_otc": "gold_otc",
    "xagusd_otc": "silver_otc",
    "ukbrent_otc": "brent_oil_otc",
    "uscrude_otc": "us_crude_otc",
    "xngusd_otc": "natural_gas",
    "xptusd_otc": "platinum_otc",
    "xpdusd_otc": "palladium_otc",
    # Сырьевые Regular
    "xauusd": "gold",
    "xagusd": "silver",
    "xptusd": "platinum_spot",
    # Акции OTC (# убирается при toLowerCase, поэтому ключ без #)
    "#aapl_otc": "aapl_otc",
    "#msft_otc": "msft_otc",
    "#tsla_otc": "tsla_otc",
    "#fb_otc": "fb_otc",
    "#amzn_otc": "amzn_otc",
    "#nflx_otc": "nflx_otc",
    "#intc_otc": "intc_otc",
    "#ba_otc": "ba_otc",
    "#jnj_otc": "jnj_otc",
    "#pfe_otc": "pfe_otc",
    "#xom_otc": "xom_otc",
    "#axp_otc": "axp_otc",
    "#mcd_otc": "mcd_otc",
    "#csco_otc": "csco_otc",
    "#visa_otc": "visa_otc",
    "#citi_otc": "citi_otc",
    "#fdx_otc": "fdx_otc",
    "#baba_otc": "baba_otc",
    "microsoft_otc": "msft_otc",
    "tesla_otc": "tsla_otc",
    "facebook_otc": "fb_otc",
    "boeing_otc": "ba_otc",
    "american_express_otc": "axp_otc",
    # Акции Regular
    "#aapl": "apple",
    "#msft": "microsoft",
    "#tsla": "tesla",
    "#fb": "meta",
    "#nflx": "netflix",
    "#intc": "intel",
    "#ba": "boeing",
    "#jnj": "jnj",
    "#pfe": "pfizer",
    "#xom": "exxon",
    "#axp": "amex",
    "#mcd": "mcdonalds",
    "#baba": "alibaba",
    "#csco": "cisco",
    "#citi": "citigroup",
    "#jpm": "jpm",
    # Индексы OTC
    "sp500_otc": "sp500_otc",
    "dji30_otc": "dji30_otc",
    "nasusd_otc": "us100_otc",
    "jpn225_otc": "jpn225_otc",
    "d30eur_otc": "d30eur_otc",
    "e50eur_otc": "e50eur_otc",
    "f40eur_otc": "f40eur_otc",
    "e35eur_otc": "e35eur_otc",
    "100gbp_otc": "100gbp_otc",
    "aus200_otc": "aus200_otc",
    # Индексы Regular
    "sp500": "sp500_index",
    "dji30": "dji30_index",
    "nasusd": "us100_index",
    "jpn225": "jpn225_index",
    "d30eur": "d30eur_index",
    "e50eur": "e50eur_index",
    "f40eur": "f40eur_index",
    "e35eur": "e35eur_index",
    "100gbp": "100gbp_index",
    "aus200": "aus200_index",
    "cac40": "cac40_index",
    "aex25": "aex25_index",
    "smi20": "smi20_index",
    "h33hkd": "hk33_index",
}


async def broadcast_quotes(quotes_data):
    """Рассылает котировки всем подключённым клиентам. Переводит PO ID → app.js ID."""
    global clients
    if not clients:
        return
    # Переводим ID из PocketOption API в ID элементов app.js
    translated = []
    for row in quotes_data:
        if isinstance(row, list) and len(row) >= 2:
            po_id = row[0].lower()
            app_id = PO_ID_MAP.get(po_id, po_id)  # если нет в маппинге — используем as-is
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
        logging.info(f"📤 Разослано {len(translated)} котировок {active_count} клиентам")




# ─── Перехват WebSocket PocketOption ────────────────────────────────────────

def parse_po_message(raw: str):
    """
    Парсит сообщение Socket.IO от PocketOption.
    Возвращает (event_name, payload) или (None, None).
    """
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
    """Вызывается для каждого WebSocket соединения на странице."""
    url = ws.url
    if "socket.io" not in url:
        return
    logging.info(f"📡 Перехвачен WebSocket PocketOption: {url}")

    # Флаг: следующий бинарный фрейм — это данные updateStream
    expect_binary_data = [False]

    def on_frame_received(payload):
        text = payload if isinstance(payload, str) else payload.decode("utf-8", errors="replace")

        if len(text) > 400:
            logging.debug(f"WS ← {text[:200]}...")
        else:
            logging.debug(f"WS ← {text}")

        # Шаблон: 451-["updateStream", {_placeholder...}] → следующий фрейм это данные
        if text.startswith('451-["updateStream"') and '_placeholder' in text:
            expect_binary_data[0] = True
            return

        # Следующий фрейм после 451-updateStream — сырой массив [[assetId, ts, price], ...]
        if expect_binary_data[0]:
            expect_binary_data[0] = False
            try:
                data = json.loads(text)
                if isinstance(data, list) and data:
                    # data = [["EURUSD_otc", timestamp, price], ...]
                    # Преобразуем в [[assetId, price], ...] для app.js
                    quotes = [[row[0], row[2]] for row in data if isinstance(row, list) and len(row) >= 3]
                    if quotes:
                        logging.info(f"✅ КОТИРОВКИ: {quotes[:3]}")
                        schedule_broadcast(quotes)
            except Exception as e:
                logging.error(f"Ошибка парсинга данных котировок: {e} | raw={text[:80]}")
            return

        # Также ловим обычные 42["price",...] на случай другого формата
        event, data = parse_po_message(text)
        if event in ("updateStream", "price", "tick") and data:
            logging.info(f"✅ КОТИРОВКИ [{event}]: {str(data)[:120]}")
            schedule_broadcast(data)

    ws.on("framereceived", on_frame_received)

_main_loop: asyncio.AbstractEventLoop | None = None


def schedule_broadcast(quotes):
    """Безопасно планирует broadcast из синхронного callback Playwright."""
    if _main_loop and not _main_loop.is_closed():
        _main_loop.call_soon_threadsafe(
            lambda q=quotes: asyncio.ensure_future(broadcast_quotes(q), loop=_main_loop)
        )


# ─── Playwright логика ───────────────────────────────────────────────────────

POCKET_URL = "https://pocketoption.com/ru/cabinet/demo-quick-high-low/"

# Все активы с правильными ID как в PocketOption API
ALL_ASSETS = [
    # ── Forex OTC ──────────────────────────────────────────────────────────
    "EURUSD_otc","GBPUSD_otc","USDJPY_otc","USDCHF_otc","USDCAD_otc",
    "AUDUSD_otc","AUDNZD_otc","AUDCAD_otc","AUDCHF_otc","AUDJPY_otc",
    "CADCHF_otc","CADJPY_otc","CHFJPY_otc","EURCHF_otc","EURGBP_otc",
    "EURJPY_otc","EURNZD_otc","GBPAUD_otc","GBPJPY_otc","NZDJPY_otc",
    "NZDUSD_otc","EURRUB_otc","USDRUB_otc","EURHUF_otc","CHFNOK_otc",
    "AEDCNY_otc","BHDCNY_otc","USDCOP_otc","USDEGP_otc","USDIDR_otc",
    "USDPKR_otc","USDCNH_otc","SARCNY_otc","EURTRY_otc","QARCNY_otc",
    "USDBDT_otc","OMRCNY_otc","USDBRL_otc","GBPAUD_otc","USDARS_otc",
    "USDSGD_otc","KESUSD_otc","USDCLP_otc","MADUSD_otc","USDMXN_otc",
    "USDINR_otc","USDTHB_otc","JODCNY_otc","TNDUSD_otc","LBPUSD_otc",
    "YERUSD_otc","NGNUSD_otc","USDMYR_otc","USDPHP_otc","USDVND_otc",
    "UAHUSD_otc","USDDZD_otc",
    # ── Forex Regular ──────────────────────────────────────────────────────
    "EURUSD","GBPUSD","USDJPY","USDCHF","USDCAD","AUDUSD","NZDUSD",
    "EURCAD","CADCHF","AUDCAD","AUDCHF","GBPCHF","EURGBP","CADJPY",
    "EURJPY","AUDJPY","GBPJPY","CHFJPY","EURCHF","EURAUD","GBPAUD","GBPCAD",
    # ── Крипто OTC ─────────────────────────────────────────────────────────
    # Пробуем ОБА формата — PocketOption может использовать разные варианты
    "BTCUSD_otc","bitcoin_otc",          # Bitcoin OTC
    "ETHUSD_otc","ETH_otc",              # Ethereum OTC
    "LTCUSD_otc","LTC_otc",             # Litecoin OTC
    "DOGEUSD_otc","DOGE_otc",           # Dogecoin OTC
    "ADAUSD_otc","ADA_otc",             # Cardano OTC
    "SOLUSD_otc","SOL_otc",             # Solana OTC
    "TONUSD_otc","TON_otc",             # Toncoin OTC
    "AVAXUSD_otc","AVAX_otc",           # Avalanche OTC
    "MATICUSD_otc","MATIC_otc",         # Polygon OTC
    "TRXUSD_otc","TRX_otc",             # TRON OTC
    "LNKUSD_otc","LINK_otc",            # Chainlink OTC
    "DOTUSD_otc","DOT_otc",             # Polkadot OTC
    "BNBUSD_otc","BNB_otc",             # BNB OTC
    "bitcoin_etf_otc","BTCETF_otc",     # Bitcoin ETF OTC
    # ── Крипто Regular ─────────────────────────────────────────────────────
    "BTCUSD","ETHUSD","BTCGBP","BTCJPY","BCHEUR","BCHGBP","BCHJPY",
    "DASH_USD","DOTUSD","LNKUSD",
    # ── Сырьевые OTC ───────────────────────────────────────────────────────
    "XAUUSD_otc","XAGUSD_otc","UKBrent_otc","USCrude_otc","XNGUSD_otc",
    "XPTUSD_otc","XPDUSD_otc",
    # ── Сырьевые Regular ───────────────────────────────────────────────────
    "XAUUSD","XAGUSD","UKBrent","USCrude","XNGUSD","XPTUSD","XPDUSD",
    # ── Акции OTC (с # префиксом) ──────────────────────────────────────────
    "#AAPL_otc","#MSFT_otc","#TSLA_otc","#FB_otc","#AMZN_otc","#NFLX_otc",
    "#INTC_otc","#BA_otc","#JNJ_otc","#PFE_otc","#XOM_otc","#AXP_otc",
    "#MCD_otc","#CSCO_otc","#VISA_otc","#CITI_otc","#FDX_otc","#BABA_otc",
    "Microsoft_otc","Tesla_otc","Facebook_OTC","Boeing_OTC","American_Express_otc",
    # ── Акции Regular ──────────────────────────────────────────────────────
    "#AAPL","#MSFT","#TSLA","#FB","#NFLX","#INTC","#BA","#JNJ","#PFE",
    "#XOM","#AXP","#MCD","#BABA","#CSCO","#CITI","#JPM",
    # ── Индексы OTC ────────────────────────────────────────────────────────
    "SP500_otc","DJI30_otc","NASUSD_otc","JPN225_otc","D30EUR_otc",
    "E50EUR_otc","F40EUR_otc","E35EUR_otc","100GBP_otc","AUS200_otc",
    # ── Индексы Regular ────────────────────────────────────────────────────
    "SP500","DJI30","NASUSD","JPN225","D30EUR","E50EUR","F40EUR",
    "E35EUR","100GBP","AUS200","CAC40","AEX25","SMI20","H33HKD",
]


# JavaScript-хук: подписывается и АВТОМАТИЧЕСКИ переподписывается каждые 25 сек
WS_HOOK_JS = """
(function() {
    const ASSETS = """ + str(ALL_ASSETS).replace("'", '"') + """;
    const OrigWS = window.WebSocket;

    // Глобальное хранилище активных WS соединений и интервалов
    window._poWSSenders = [];
    window._poResubTimer = null;

    function doSubscribe(send) {
        console.log('[HOOK] Subscribing in chunks...');
        // Разбиваем на чанки по 40 активов (чтобы не превысить лимит сообщения)
        const chunkSize = 40;
        for (let i = 0; i < ASSETS.length; i += chunkSize) {
            const chunk = ASSETS.slice(i, i + chunkSize);
            setTimeout(() => {
                try {
                    send('42["subscribe",' + JSON.stringify(chunk) + ']');
                    console.log(`[HOOK] Subscribed to chunk ${Math.floor(i/chunkSize) + 1}`);
                } catch(e) { console.error('[HOOK] Subscribe error:', e); }
            }, (i / chunkSize) * 300);
        }

        // Шаг 2: changeSymbol для спец-активов (через 3 секунды после начала)
        setTimeout(() => {
            const special = ASSETS.filter(a => {
                const low = a.toLowerCase();
                return a.includes('#') || 
                       ['btc','eth','xau','xag','ukb','uscr','sp5','dji','aus2','jpn','nas','bitc','ethe','ada','sol','ton','trx','bnb','avax','mat','dot','doge','ltc','lnk','link','dash','micr','tesl','boei','amer','face'].some(k => low.startsWith(k));
            });
            console.log(`[HOOK] Sending changeSymbol for ${special.length} special assets...`);
            special.forEach((asset, i) => {
                setTimeout(() => {
                    try { send('42["changeSymbol",{"asset":"' + asset + '","period":0}]'); } catch(e) {}
                }, i * 30);
            });
        }, 3000);
    }

    function startAutoResubscribe() {
        if (window._poResubTimer) clearInterval(window._poResubTimer);
        window._poResubTimer = setInterval(() => {
            const activeSenders = window._poWSSenders.filter(s => {
                try { s('2'); return true; } catch(e) { return false; }
            });
            window._poWSSenders = activeSenders;
            activeSenders.forEach(send => doSubscribe(send));
        }, 45000); // Раз в 45 сек достаточно
    }

    window.WebSocket = function(url, protocols) {
        const ws = protocols ? new OrigWS(url, protocols) : new OrigWS(url);
        if (!url.includes('socket.io')) return ws;

        const origSend = ws.send.bind(ws);
        let authed = false;

        ws.send = function(data) {
            origSend(data);
            // Более надежное обнаружение авторизации
            const isAuth = typeof data === 'string' && (data.includes('"auth"') || data.includes('ssid') || (data.includes('42["') && data.length > 50));
            if (!authed && isAuth) {
                authed = true;
                console.log('[HOOK] Possible Auth detected, starting subscription...');
                setTimeout(() => {
                    doSubscribe(origSend);
                    window._poWSSenders.push(origSend);
                    startAutoResubscribe();
                }, 3000);
            }
        };
        return ws;
    };

    window.WebSocket.prototype = OrigWS.prototype;
    console.log('[HOOK] Installed. Assets:', ASSETS.length);
})();
"""




async def run_browser(loop: asyncio.AbstractEventLoop):

    """Запускает Playwright браузер и переходит на PocketOption."""
    async with async_playwright() as pw:
        # Сохраняем сессию между запусками
        user_data_dir = os.path.join(os.path.dirname(__file__), ".chromium_session")
        browser = await pw.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            headless=False,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled"],
            ignore_https_errors=True,
        )

        page = browser.pages[0] if browser.pages else await browser.new_page()

        # Инжектируем JS-хук который подписывается на все активы
        await page.add_init_script(WS_HOOK_JS)

        # Перехватываем все WebSocket соединения
        page.on("websocket", handle_po_websocket)

        logging.info(f"🌐 Открываем {POCKET_URL}...")
        await page.goto(POCKET_URL, wait_until="domcontentloaded")

        logging.info("✅ Страница загружена. Войдите в аккаунт если нужно.")
        logging.info(f"   Подписываемся на {len(ALL_ASSETS)} активов автоматически...")

        # Держим браузер открытым вечно
        while True:
            await asyncio.sleep(10)
            if page.is_closed():
                logging.warning("Страница закрыта. Перезапускаем...")
                page = await browser.new_page()
                await page.add_init_script(WS_HOOK_JS)
                page.on("websocket", handle_po_websocket)
                await page.goto(POCKET_URL, wait_until="domcontentloaded")



# ─── Main ────────────────────────────────────────────────────────────────────

def get_local_ip():
    """Находит локальный IP адрес компьютера в сети."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

async def main():
    global _main_loop
    _main_loop = asyncio.get_event_loop()
    
    local_ip = get_local_ip()
    port = 8765
    
    # Запускаем WebSocket broadcast сервер
    server = await websockets.serve(ws_handler, "0.0.0.0", port)
    
    print("\n" + "="*50)
    print(f"🚀 СЕРВЕР КОТИРОВОК ЗАПУЩЕН")
    print(f"� Локальный адрес (для ПК): ws://127.0.0.1:{port}")
    print(f"📱 Сетевой адрес (для ТЕЛЕФОНА): ws://{local_ip}:{port}")
    print("="*50 + "\n")
    
    logging.info(f"Слушаем подключения на всех интерфейсах (0.0.0.0:{port})")

    # Запускаем браузер
    browser_task = asyncio.create_task(run_browser(_main_loop))

    try:
        await asyncio.gather(server.wait_closed(), browser_task)
    except Exception as e:
        logging.debug(f"Завершение: {e}")

if __name__ == "__main__":
    try:
        # Для Windows Playwright требует ProactorEventLoop для работы с подпроцессами
        if os.name == 'nt' and hasattr(asyncio, 'WindowsProactorEventLoopPolicy'):
            asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        logging.info("Остановлено пользователем.")
    except Exception as e:
        logging.error(f"Критическая ошибка: {e}")
