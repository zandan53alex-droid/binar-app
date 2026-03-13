"""
pocket_playwright.py — Мост котировок (УЛЬТРА-АВТОМАТИКА: 130+ активов + СТАБИЛЬНОСТЬ)
"""

import asyncio
import json
import logging
import os
import websockets
import time

from dotenv import load_dotenv
from playwright.async_api import async_playwright, WebSocket as PWWebSocket

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
load_dotenv()

# Настройки
VPS_WS_URL = "wss://185.174.138.19.sslip.io/ws"
BRIDGE_TOKEN = os.getenv("PB_SECRET", "zandan53")
pulse_assets = set()

# ГИГАНТСКИЙ МАППИНГ (Все вариации ID)
PO_ID_MAP = {
    # Forex
    "eurusd": "eurusd", "gbpusd": "gbpusd", "usdjpy": "usdjpy", "audusd": "audusd",
    "usdcad": "usdcad", "usdchf": "usdchf", "eurjpy": "eurjpy", "gbpjpy": "gbpjpy",
    "audjpy": "audjpy", "nzdjpy": "nzdjpy", "eurgbp": "eurgbp", "audcad": "audcad",
    "nzdusd": "nzdusd", "eurnzd": "eurnzd", "usdrub": "usdrub", "eurrub": "eurrub",
    "eurcad": "eurcad", "cadchf": "cadchf", "gbpchf": "gbpchf", "chfjpy": "chfjpy",
    "euraud": "euraud", "gbpaud": "gbpaud", "gbpcad": "gbpcad", "cadjpy": "cadjpy",
    
    # Forex OTC
    "eurusdotc": "eurusd_otc", "gbpusdotc": "gbpusd_otc", "usdjpyotc": "usdjpy_otc",
    "audusdotc": "audusd_otc", "usdcadotc": "usdcad_otc", "usdchfotc": "usdchf_otc",
    "eurjpyotc": "eurjpy_otc", "gbpjpyotc": "gbpjpy_otc", "audjpyotc": "audjpy_otc",
    "nzdjpyotc": "nzdjpy_otc", "eurgbpotc": "eurgbp_otc", "audcadotc": "audcad_otc",
    "nzdusdotc": "nzdusd_otc", "eurnzdotc": "eurnzd_otc", "usdrubotc": "usdrub_otc",
    "eurrubotc": "eurrub_otc", "aedcnyotc": "aedcny_otc", "audnzdotc": "audnzd_otc",
    "bhdcnyotc": "bhdcny_otc", "cadchfotc": "cadchf_otc", "cadjpyotc": "cadjpy_otc",
    "eurchfotc": "eurchf_otc", "uahusdotc": "uahusd_otc", "usdcopotc": "usdcop_otc",
    "usdegpotc": "usdegp_otc", "usdidrotc": "usdidr_otc", "usdpkrotc": "usdpkr_otc",
    "sarcnyotc": "sarcny_otc", "eurtryotc": "eurtry_otc", "qarcnyotc": "qarcny_otc",
    "usdbdtotc": "usdbdt_otc", "omrcnyotc": "omrcny_otc", "usdbrlotc": "usdbrl_otc",
    "usdarsotc": "usdars_otc", "usdsgdotc": "usdsgd_otc", "kesusdotc": "kesusd_otc",
    "usdclpotc": "usdclp_otc", "audchfotc": "audchf_otc", "madusdotc": "madusd_otc",
    "usdmxnotc": "usdmxn_otc", "usdinrotc": "usdinr_otc", "usdthbotc": "usdthb_otc",
    "jodcnyotc": "jodcny_otc", "tndusdotc": "tndusd_otc", "lbpusdotc": "lbpusd_otc",
    "chfnokotc": "chfnok_otc", "eurhufotc": "eurhuf_otc", "yerusdotc": "yerusd_otc",
    "ngnusdotc": "ngnusd_otc", "usdmyrotc": "usdmyr_otc", "usdphpotc": "usdphp_otc",
    "usdvndotc": "usdvnd_otc", "usddzdotc": "usddzd_otc", "chfjpyotc": "chfjpy_otc", "usdcnhotc": "usdcnh_otc", "zarusdotc": "zarusd_otc",

    # Crypto (Исправлено: btcetfotc + вариации)
    "bitcoinetfotc": "bitcoin_etf_otc", "btcetfotc": "bitcoin_etf_otc", "bitcoin_etf_otc": "bitcoin_etf_otc",
    "btcusdotc": "bitcoin_otc", "bitcoinotc": "bitcoin_otc", "btc_otc": "bitcoin_otc",
    "ethusdotc": "eth_otc", "ethereumotc": "eth_otc", "eth_otc": "eth_otc",
    "solusdotc": "sol_otc", "solanaotc": "sol_otc", "sol_otc": "sol_otc",
    "tonusdotc": "ton_otc", "toncoinotc": "ton_otc", "ton_otc": "ton_otc",
    "adausdotc": "ada_otc", "adaotc": "ada_otc", "bnbusdotc": "bnb_otc", "bnbotc": "bnb_otc",
    "avaxusdotc": "avax_otc", "avaxotc": "avax_otc", "linkusdotc": "link_otc", "linkotc": "link_otc",
    "maticusdotc": "matic_otc", "maticotc": "matic_otc", "trxusdotc": "trx_otc", "trxotc": "trx_otc",
    "ltcusdotc": "ltc_otc", "ltcotc": "ltc_otc", "dogeusdotc": "doge_otc", "dogeotc": "doge_otc",
    "dotusdotc": "dot_otc", "dototc": "dot_otc",

    # Commodities
    "gold": "gold", "silver": "silver", "goldotc": "gold_otc", "silverotc": "silver_otc",
    "brentoilotc": "brent_oil_otc", "uscrudeotc": "us_crude_otc",
    "naturalgas": "natural_gas", "palladiumotc": "palladium_otc", "platinumotc": "platinum_otc",

    # Stocks
    "aaplotc": "aapl_otc", "tslaotc": "tsla_otc", "amznotc": "amzn_otc", "msftotc": "msft_otc",
    "nvdaotc": "nvda_otc", "googotc": "google_otc", "nflxotc": "netflix_otc", "babaotc": "alibaba_otc",
    "votc": "visa_otc", "mcdotc": "mcd_otc", "baotc": "ba_otc", "fbotc": "fb_otc", "intcotc": "intc_otc",
    "disotc": "dis_otc", "maraotc": "mara_otc", "cscootc": "csco_otc", "xomotc": "xom_otc",
    "gmeotc": "gme_otc", "pltrotc": "pltr_otc", "fdxotc": "fdx_otc", "amdotc": "amd_otc",
    "citiotc": "citi_otc", "axpotc": "axp_otc", "coinotc": "coin_otc", "pfeotc": "pfe_otc",

    # Indices
    "aus200index": "aus200_index", "100gbpindex": "100gbp_index", "cac40index": "cac40_index",
    "dji30index": "dji30_index", "us100index": "us100_index", "sp500index": "sp500_index",
    "aus200otc": "aus200_otc", "100gbpotc": "100gbp_otc", "d30eurotc": "d30eur_otc",
    "dji30otc": "dji30_otc", "e35eurotc": "e35eur_otc", "e50eurotc": "e50eur_otc",
    "us100otc": "us100_otc", "sp500otc": "sp500_otc",
}

# МЕНЕДЖЕР VPS (Авто-переподключение)
class VPSManager:
    def __init__(self): self.ws = None; self.lock = asyncio.Lock()
    async def send(self, data):
        async with self.lock:
            if not self.ws or self.ws.closed:
                try: self.ws = await websockets.connect(VPS_WS_URL, close_timeout=2)
                except: return
            try: await self.ws.send(json.dumps({"token": BRIDGE_TOKEN, "action": "bridge_update", "data": data}))
            except: self.ws = None
vps_manager = VPSManager()

async def broadcast(quotes):
    global pulse_assets
    translated = []
    seen = set()
    for row in quotes:
        if isinstance(row, list) and len(row) >= 2:
            raw_id = str(row[0]).lower().replace("_", "").replace("-", "").replace(" ", "").replace("#", "")
            app_id = PO_ID_MAP.get(raw_id) or raw_id
            if app_id not in seen:
                translated.append([app_id, row[1]])
                seen.add(app_id)
                pulse_assets.add(app_id)
    if not translated: return
    await vps_manager.send(translated)
    
    # Pulse log
    now = time.time()
    if now - getattr(broadcast, 'last_t', 0) > 5:
        logging.info(f"💓 ПУЛЬС: {len(pulse_assets)} актив. | VPS: OK")
        pulse_assets.clear()
        broadcast.last_t = now

_loop = None
def schedule(q):
    if _loop: _loop.call_soon_threadsafe(lambda: asyncio.create_task(broadcast(q)))

async def on_ws(ws: PWWebSocket):
    if "po.market" not in ws.url and "api" not in ws.url: return
    logging.info(f"📡 WebSocket PocketOption активен: {ws.url}")
    
    expect_bin = [False]
    def handle_frame(payload):
        try:
            text = payload if isinstance(payload, str) else payload.decode("utf-8", errors="replace")
            if 'updateStream' in text and '_placeholder' in text:
                expect_bin[0] = True; return
            if expect_bin[0]:
                expect_bin[0] = False
                try:
                    data = json.loads(text)
                    if isinstance(data, list):
                        q = [[r[0], r[2]] for r in data if isinstance(r, list) and len(r) >= 3]
                        if q: schedule(q)
                except: pass
                return
            if text.startswith('42['):
                try:
                    data = json.loads(text[2:])
                    if data[0] in ("updateStream", "price", "p"):
                        content = data[1]
                        norm = []
                        if isinstance(content, list):
                            for r in content:
                                if isinstance(r, list) and len(r) >= 2: norm.append([r[0], r[-1]])
                        elif isinstance(content, dict):
                            a, p = content.get("s"), content.get("p")
                            if a and p: norm.append([a, p])
                        if norm: schedule(norm)
                except: pass
        except: pass
    ws.on("framereceived", handle_frame)

# ГЕНЕРАЦИЯ ПОЛНОГО СПИСКА (130+ активов)
FULL_ASSET_LIST = list(PO_ID_MAP.keys())

HOOK = """
(function() {
    const ASSETS = """ + json.dumps(FULL_ASSET_LIST) + """;
    const Orig = window.WebSocket;
    
    function autoRun(ws) {
        console.log('[SPY] STARTING FULL AUTO-SUB (' + ASSETS.length + ' assets)');
        
        const subscribe = () => {
            ws.send('42["subscribe",' + JSON.stringify(ASSETS) + ']');
            ws.send('42["subscribe",' + JSON.stringify(ASSETS.map(a => [a, 60])) + ']');
        };

        let i = 0;
        function cycle() {
            if (i >= ASSETS.length) { 
                console.log('[SPY] Cycle done. Waiting 30s...');
                i = 0; setTimeout(cycle, 30000); return; 
            }
            const a = ASSETS[i];
            console.log('[SPY] Activating (' + (i+1) + '/' + ASSETS.length + '): ' + a);
            ws.send('42["changeSymbol",{"asset":"' + a + '","period":60}]');
            ws.send('42["subscribe",["' + a + '",60]]');
            i++;
            setTimeout(cycle, 400); // 400ms - высокая скорость активации
        }
        
        subscribe();
        cycle();
        setInterval(() => ws.send('2'), 10000);
    }

    window.WebSocket = function(u, p) {
        const ws = p ? new Orig(u, p) : new Orig(u);
        if (!u.includes('api') && !u.includes('po.market')) return ws;
        const oS = ws.send.bind(ws);
        ws.addEventListener('message', e => {
            if (e.data.startsWith('42["auth"')) {
                if (window._poActive) return;
                window._poActive = true;
                setTimeout(() => autoRun({send: oS}), 4000);
            }
        });
        ws.send = d => {
            oS(d);
            if (d.startsWith('42["auth"')) {
                if (window._poActive) return;
                window._poActive = true;
                setTimeout(() => autoRun({send: oS}), 4000);
            }
        };
        return ws;
    };
})();
"""

async def run():
    async with async_playwright() as pw:
        # Папка .session для сохранения логина
        browser = await pw.chromium.launch_persistent_context(
            user_data_dir=os.path.join(os.path.dirname(__file__), ".session"),
            headless=False,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled"],
            viewport={"width": 1280, "height": 720}
        )
        page = browser.pages[0]
        page.on("console", lambda m: print(f"🌐 [BR] {m.text}") if "[SPY]" in m.text else None)
        page.on("websocket", on_ws)
        await page.add_init_script(HOOK)
        logging.info("🚀 Открываем Pocket Option...")
        await page.goto("https://pocketoption.com/ru/cabinet/demo-quick-high-low/")
        
        while not page.is_closed():
            if "login" in page.url.lower():
                logging.warning("⚠️ ВНИМАНИЕ: Нужно войти в аккаунт!")
            await asyncio.sleep(15)

async def main():
    global _loop
    _loop = asyncio.get_event_loop()
    print("\n🚀 ULTRA-AUTO BRIDGE RUNNING (ALL ASSETS)\n")
    await run()

if __name__ == "__main__":
    if os.name == 'nt': asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
    asyncio.run(main())
