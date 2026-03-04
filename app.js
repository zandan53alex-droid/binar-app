// Asset Database (Pocket Option Style)
const ASSETS_DB = {
    crypto: [
        { id: 'btc', name: 'BTC/USDT', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg', category: 'Crypto' },
        { id: 'eth', name: 'ETH/USDT', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', category: 'Crypto' },
        { id: 'sol', name: 'SOL/USDT', icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg', category: 'Crypto' },
        { id: 'xrp', name: 'XRP/USDT', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg', category: 'Crypto' },
        { id: 'bnb', name: 'BNB/USDT', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg', category: 'Crypto' },
        { id: 'ada', name: 'ADA/USDT', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.svg', category: 'Crypto' },
        { id: 'doge', name: 'DOGE/USDT', icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg', category: 'Crypto' },
        { id: 'trx', name: 'TRX/USDT', icon: 'https://cryptologos.cc/logos/tron-trx-logo.svg', category: 'Crypto' },
        { id: 'dot', name: 'DOT/USDT', icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg', category: 'Crypto' },
        { id: 'matic', name: 'MATIC/USDT', icon: 'https://cryptologos.cc/logos/polygon-matic-logo.svg', category: 'Crypto' },
        { id: 'ltc', name: 'LTC/USDT', icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg', category: 'Crypto' },
        { id: 'link', name: 'LINK/USDT', icon: 'https://cryptologos.cc/logos/chainlink-link-logo.svg', category: 'Crypto' },
        { id: 'shib', name: 'SHIB/USDT', icon: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.svg', category: 'Crypto' },
        { id: 'avax', name: 'AVAX/USDT', icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg', category: 'Crypto' },
        { id: 'uni', name: 'UNI/USDT', icon: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg', category: 'Crypto' },
        { id: 'atom', name: 'ATOM/USDT', icon: 'https://cryptologos.cc/logos/cosmos-atom-logo.svg', category: 'Crypto' },
        { id: 'xlm', name: 'XLM/USDT', icon: 'https://cryptologos.cc/logos/stellar-xlm-logo.svg', category: 'Crypto' },
        { id: 'bch', name: 'BCH/USDT', icon: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg', category: 'Crypto' },
        { id: 'etc', name: 'ETC/USDT', icon: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.svg', category: 'Crypto' },
        { id: 'eos', name: 'EOS/USDT', icon: 'https://cryptologos.cc/logos/eos-eos-logo.svg', category: 'Crypto' }
    ],
    forex: [
        { id: 'eurusd', name: 'EUR/USD (OTC)', icon: 'https://flagcdn.com/w40/eu.png', category: 'Forex' },
        { id: 'gbpusd', name: 'GBP/USD (OTC)', icon: 'https://flagcdn.com/w40/gb.png', category: 'Forex' },
        { id: 'usdjpy', name: 'USD/JPY (OTC)', icon: 'https://flagcdn.com/w40/jp.png', category: 'Forex' },
        { id: 'audusd', name: 'AUD/USD (OTC)', icon: 'https://flagcdn.com/w40/au.png', category: 'Forex' },
        { id: 'usdcad', name: 'USD/CAD (OTC)', icon: 'https://flagcdn.com/w40/ca.png', category: 'Forex' },
        { id: 'usdchf', name: 'USD/CHF (OTC)', icon: 'https://flagcdn.com/w40/ch.png', category: 'Forex' },
        { id: 'eurjpy', name: 'EUR/JPY (OTC)', icon: 'https://flagcdn.com/w40/jp.png', category: 'Forex' },
        { id: 'gbpjpy', name: 'GBP/JPY (OTC)', icon: 'https://flagcdn.com/w40/jp.png', category: 'Forex' },
        { id: 'audjpy', name: 'AUD/JPY (OTC)', icon: 'https://flagcdn.com/w40/jp.png', category: 'Forex' },
        { id: 'nzdusd', name: 'NZD/USD (OTC)', icon: 'https://flagcdn.com/w40/nz.png', category: 'Forex' },
        { id: 'eurgbp', name: 'EUR/GBP (OTC)', icon: 'https://flagcdn.com/w40/eu.png', category: 'Forex' },
        { id: 'euraud', name: 'EUR/AUD (OTC)', icon: 'https://flagcdn.com/w40/eu.png', category: 'Forex' },
        { id: 'gbpaud', name: 'GBP/AUD (OTC)', icon: 'https://flagcdn.com/w40/gb.png', category: 'Forex' },
        { id: 'chfjpy', name: 'CHF/JPY (OTC)', icon: 'https://flagcdn.com/w40/ch.png', category: 'Forex' },
        { id: 'audcad', name: 'AUD/CAD (OTC)', icon: 'https://flagcdn.com/w40/au.png', category: 'Forex' },
        { id: 'cadjpy', name: 'CAD/JPY (OTC)', icon: 'https://flagcdn.com/w40/ca.png', category: 'Forex' },
        { id: 'usdtry', name: 'USD/TRY (OTC)', icon: 'https://flagcdn.com/w40/tr.png', category: 'Forex' },
        { id: 'usdzar', name: 'USD/ZAR (OTC)', icon: 'https://flagcdn.com/w40/za.png', category: 'Forex' },
        { id: 'usdmxn', name: 'USD/MXN (OTC)', icon: 'https://flagcdn.com/w40/mx.png', category: 'Forex' },
        { id: 'eurcad', name: 'EUR/CAD (OTC)', icon: 'https://flagcdn.com/w40/eu.png', category: 'Forex' },
        { id: 'eurchf', name: 'EUR/CHF (OTC)', icon: 'https://flagcdn.com/w40/eu.png', category: 'Forex' },
        { id: 'gbpchf', name: 'GBP/CHF (OTC)', icon: 'https://flagcdn.com/w40/gb.png', category: 'Forex' },
        { id: 'cadchf', name: 'CAD/CHF (OTC)', icon: 'https://flagcdn.com/w40/ca.png', category: 'Forex' },
        { id: 'audnzd', name: 'AUD/NZD (OTC)', icon: 'https://flagcdn.com/w40/au.png', category: 'Forex' },
        { id: 'nzdjpy', name: 'NZD/JPY (OTC)', icon: 'https://flagcdn.com/w40/nz.png', category: 'Forex' }
    ],
    stocks: [
        { id: 'aapl', name: 'APPLE', icon: 'https://img.icons8.com/ios-filled/50/ffffff/apple-logo.png', category: 'Stocks' },
        { id: 'googl', name: 'GOOGLE', icon: 'https://img.icons8.com/color/48/000000/google-logo.png', category: 'Stocks' },
        { id: 'tsla', name: 'TESLA', icon: 'https://img.icons8.com/ios-filled/50/ffffff/tesla-motors.png', category: 'Stocks' },
        { id: 'amzn', name: 'AMAZON', icon: 'https://img.icons8.com/ios-filled/50/ffffff/amazon.png', category: 'Stocks' },
        { id: 'msft', name: 'MICROSOFT', icon: 'https://img.icons8.com/ios-filled/50/ffffff/microsoft.png', category: 'Stocks' },
        { id: 'meta', name: 'META', icon: 'https://img.icons8.com/ios-filled/50/ffffff/meta.png', category: 'Stocks' },
        { id: 'nflx', name: 'NETFLIX', icon: 'https://img.icons8.com/ios-filled/50/ffffff/netflix.png', category: 'Stocks' },
        { id: 'nvda', name: 'NVIDIA', icon: 'https://img.icons8.com/ios-filled/100/ffffff/nvidia.png', category: 'Stocks' },
        { id: 'baba', name: 'ALIBABA', icon: 'https://img.icons8.com/ios-filled/50/ffffff/alibaba.png', category: 'Stocks' },
        { id: 'dis', name: 'DISNEY', icon: 'https://img.icons8.com/ios-filled/50/ffffff/disney.png', category: 'Stocks' },
        { id: 'v', name: 'VISA', icon: 'https://img.icons8.com/ios-filled/50/ffffff/visa.png', category: 'Stocks' },
        { id: 'mc', name: 'MASTERCARD', icon: 'https://img.icons8.com/ios-filled/50/ffffff/mastercard.png', category: 'Stocks' },
        { id: 'pfe', name: 'PFIZER', icon: 'https://img.icons8.com/ios-filled/50/ffffff/pills.png', category: 'Stocks' },
        { id: 'mcd', name: 'MCDONALDS', icon: 'https://img.icons8.com/ios-filled/50/ffffff/mcdonalds.png', category: 'Stocks' },
        { id: 'sbux', name: 'STARBUCKS', icon: 'https://img.icons8.com/ios-filled/50/ffffff/starbucks.png', category: 'Stocks' },
        { id: 'nke', name: 'NIKE', icon: 'https://img.icons8.com/ios-filled/50/ffffff/nike.png', category: 'Stocks' },
        { id: 'ko', name: 'COCA-COLA', icon: 'https://img.icons8.com/ios-filled/50/ffffff/coca-cola.png', category: 'Stocks' },
        { id: 'pep', name: 'PEPSICO', icon: 'https://img.icons8.com/ios-filled/50/ffffff/pepsi.png', category: 'Stocks' },
        { id: 'wmt', name: 'WALMART', icon: 'https://img.icons8.com/ios-filled/50/ffffff/walmart.png', category: 'Stocks' },
        { id: 'ba', name: 'BOEING', icon: 'https://img.icons8.com/ios-filled/50/ffffff/boeing.png', category: 'Stocks' },
        { id: 'intc', name: 'INTEL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/intel.png', category: 'Stocks' },
        { id: 'csco', name: 'CISCO', icon: 'https://img.icons8.com/ios-filled/50/ffffff/cisco.png', category: 'Stocks' }
    ],
    commodities: [
        { id: 'gold', name: 'GOLD', icon: 'https://img.icons8.com/ios-filled/50/FFD700/gold-bars.png', category: 'Metals' },
        { id: 'silver', name: 'SILVER', icon: 'https://img.icons8.com/ios-filled/50/C0C0C0/silver-bars.png', category: 'Metals' },
        { id: 'oil', name: 'BRENT OIL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/oil-industry.png', category: 'Commodities' },
        { id: 'crude', name: 'CRUDE OIL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/barrel.png', category: 'Commodities' },
        { id: 'natgas', name: 'NATURAL GAS', icon: 'https://img.icons8.com/ios-filled/50/ffffff/gas.png', category: 'Commodities' },
        { id: 'platinum', name: 'PLATINUM', icon: 'https://img.icons8.com/ios-filled/50/ffffff/ring.png', category: 'Metals' },
        { id: 'copper', name: 'COPPER', icon: 'https://img.icons8.com/ios-filled/50/ffffff/copper.png', category: 'Metals' },
        { id: 'nas100', name: 'NAS100', icon: 'https://img.icons8.com/ios-filled/50/ffffff/line-chart.png', category: 'Indices' },
        { id: 'spx500', name: 'SPX500', icon: 'https://img.icons8.com/ios-filled/50/ffffff/area-chart.png', category: 'Indices' },
        { id: 'dji30', name: 'DOW JONES 30', icon: 'https://img.icons8.com/ios-filled/50/ffffff/bullish.png', category: 'Indices' },
        { id: 'ger40', name: 'GER40 (DAX)', icon: 'https://img.icons8.com/ios-filled/50/ffffff/generic-sorting-2.png', category: 'Indices' },
        { id: 'uk100', name: 'UK100 (FTSE)', icon: 'https://img.icons8.com/ios-filled/50/ffffff/london-bridge.png', category: 'Indices' },
        { id: 'fra40', name: 'FRA40 (CAC)', icon: 'https://img.icons8.com/ios-filled/50/ffffff/eiffel-tower.png', category: 'Indices' },
        { id: 'jp225', name: 'JP225 (NIKKEI)', icon: 'https://img.icons8.com/ios-filled/50/ffffff/torii.png', category: 'Indices' },
        { id: 'hsi50', name: 'HSI50 (HANG SENG)', icon: 'https://img.icons8.com/ios-filled/50/ffffff/china.png', category: 'Indices' }
    ]
};

const TRANSLATIONS = {
    ru: {
        syncing: 'ОБНОВЛЕНИЕ КОТИРОВОК...',
        standard: 'СТАНДАРТ',
        platinum: 'VIP ДОСТУП',
        scanning: 'АНАЛИЗ РЫНКА...',
        analyze: 'ПОЛУЧИТЬ СИГНАЛ',
        entry: 'ВХОД:',
        call: 'ВВЕРХ',
        put: 'ВНИЗ',
        crypto: 'КРИПТО',
        forex: 'ВАЛЮТЫ',
        stocks: 'АКЦИИ',
        metals: 'ИНДЕКСЫ/ТОВАРЫ',
        expiration: 'ЭКСПИРАЦИЯ:',
        search: 'Поиск актива...'
    },
    en: {
        syncing: 'SYNCING QUOTES...',
        standard: 'STANDARD',
        platinum: 'VIP ACCESS',
        scanning: 'MARKET ANALYSIS...',
        analyze: 'GET SIGNAL',
        entry: 'ENTRY:',
        call: 'CALL',
        put: 'PUT',
        crypto: 'CRYPTO',
        forex: 'CURRENCIES',
        stocks: 'STOCKS',
        metals: 'INDICES/COMMODITIES',
        expiration: 'EXPIRATION:',
        search: 'Search asset...'
    }
};

let currentLang = 'ru';
let currentCategory = 'crypto';
let currentAsset = null;
let currentTimeframe = '1m';
let searchQuery = '';
const tg = window.Telegram.WebApp;

function initApp() {
    try {
        tg.ready();
        tg.expand();

        const userLang = tg.initDataUnsafe?.user?.language_code;
        currentLang = (userLang === 'ru' || userLang === 'ru-RU') ? 'ru' : 'en';

        const urlParams = new URLSearchParams(window.location.search);
        const isVip = urlParams.get('vip') === 'true';
        const badge = document.getElementById('status-badge');
        if (badge) {
            badge.innerText = isVip ? TRANSLATIONS[currentLang].platinum : TRANSLATIONS[currentLang].standard;
            if (isVip) badge.classList.add('vip');
        }

        initTradingView();
        setupLocalization();
        setupEventListeners();
        renderAssets();
        startPriceUpdates();
    } catch (e) { console.error(e); }
}

function initTradingView() {
    new TradingView.widget({
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "3",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "save_image": false,
        "container_id": "tv-chart-bg"
    });
}

function setupLocalization() {
    const t = TRANSLATIONS[currentLang];
    document.querySelector('.loader').innerText = t.syncing;
    document.getElementById('get-signal-btn').innerText = t.analyze;
    document.querySelector('.neural-loader p').innerText = t.scanning;
    document.getElementById('asset-search').placeholder = t.search;

    const tabs = document.querySelectorAll('.tab-btn');
    tabs[0].innerText = t.crypto;
    tabs[1].innerText = t.forex;
    tabs[2].innerText = t.stocks;
    tabs[3].innerText = t.metals;
}

function setupEventListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderAssets();
        };
    });

    document.getElementById('asset-search').oninput = (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderAssets();
    };

    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTimeframe = btn.dataset.tf;
        };
    });

    document.getElementById('close-signal').onclick = () => {
        document.getElementById('signal-overlay').classList.add('hidden');
    };

    document.getElementById('get-signal-btn').onclick = generateSignal;
}

function renderAssets() {
    const container = document.getElementById('asset-list');
    container.innerHTML = '';

    const filtered = ASSETS_DB[currentCategory].filter(a =>
        a.name.toLowerCase().includes(searchQuery) || a.id.toLowerCase().includes(searchQuery)
    );

    filtered.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'asset-item';
        card.innerHTML = `
            <img src="${asset.icon}" class="asset-icon" onerror="this.src='https://img.icons8.com/ios/50/ffffff/financial-dynamic.png'">
            <div class="asset-info">
                <div class="asset-name">${asset.name}</div>
                <div class="asset-category">${asset.category}</div>
            </div>
            <div class="asset-price-box">
                <span class="asset-price" id="price-${asset.id}">--</span>
                <span class="asset-change" id="change-${asset.id}">+0.00%</span>
            </div>
        `;
        card.onclick = () => openSignalDialog(asset);
        container.appendChild(card);
    });
}

function openSignalDialog(asset) {
    currentAsset = asset;
    document.getElementById('signal-asset-name').innerText = asset.name;
    document.getElementById('signal-overlay').classList.remove('hidden');
    document.getElementById('signal-content').classList.add('hidden');
    document.getElementById('signal-loader').classList.add('hidden');
    document.getElementById('get-signal-btn').classList.remove('hidden');
}

async function generateSignal() {
    const t = TRANSLATIONS[currentLang];
    document.getElementById('get-signal-btn').classList.add('hidden');
    document.getElementById('signal-loader').classList.remove('hidden');

    await new Promise(r => setTimeout(r, 2000));

    document.getElementById('signal-loader').classList.add('hidden');
    document.getElementById('signal-content').classList.remove('hidden');

    const direction = Math.random() > 0.5 ? 'CALL' : 'PUT';
    const dirEl = document.getElementById('signal-direction');
    dirEl.innerText = direction === 'CALL' ? t.call : t.put;
    dirEl.className = 'direction ' + direction.toLowerCase();

    document.getElementById('expiration-label').innerText = `${t.expiration} ${currentTimeframe}`;

    const currentPrice = document.getElementById(`price-${currentAsset.id}`).innerText;
    document.getElementById('entry-price').innerText = currentPrice;

    if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
}

function startPriceUpdates() {
    setInterval(() => {
        const allAssets = Object.values(ASSETS_DB).flat();
        allAssets.forEach(asset => {
            const el = document.getElementById(`price-${asset.id}`);
            if (!el) return;

            let price = parseFloat(el.innerText) || (Math.random() * 1000 + 10);
            const move = (Math.random() - 0.5) * (price * 0.001);
            price += move;

            el.innerText = price.toFixed(asset.id === 'btc' ? 2 : 5);

            const changeEl = document.getElementById(`change-${asset.id}`);
            if (changeEl) {
                const change = (move / price) * 100;
                changeEl.innerText = (change >= 0 ? '+' : '') + change.toFixed(3) + '%';
                changeEl.className = 'asset-change ' + (change >= 0 ? 'up' : 'down');
            }
        });
    }, 1500);
}

window.onload = initApp;
