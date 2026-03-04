const ASSETS_DB = {
    forex: [
        { id: 'eurusd_otc', name: 'EUR/USD OTC', icon: 'https://flagcdn.com/w80/eu.png', category: 'Forex' },
        { id: 'gbpusd_otc', name: 'GBP/USD OTC', icon: 'https://flagcdn.com/w80/gb.png', category: 'Forex' },
        { id: 'usdjpy_otc', name: 'USD/JPY OTC', icon: 'https://flagcdn.com/w80/jp.png', category: 'Forex' },
        { id: 'audusd_otc', name: 'AUD/USD OTC', icon: 'https://flagcdn.com/w80/au.png', category: 'Forex' },
        { id: 'usdcad_otc', name: 'USD/CAD OTC', icon: 'https://flagcdn.com/w80/ca.png', category: 'Forex' },
        { id: 'usdchf_otc', name: 'USD/CHF OTC', icon: 'https://flagcdn.com/w80/ch.png', category: 'Forex' },
        { id: 'eurjpy_otc', name: 'EUR/JPY OTC', icon: 'https://flagcdn.com/w80/jp.png', category: 'Forex' },
        { id: 'gbpjpy_otc', name: 'GBP/JPY OTC', icon: 'https://flagcdn.com/w80/jp.png', category: 'Forex' },
        { id: 'nzduusd_otc', name: 'NZD/USD OTC', icon: 'https://flagcdn.com/w80/nz.png', category: 'Forex' },
        { id: 'audjpy_otc', name: 'AUD/JPY OTC', icon: 'https://flagcdn.com/w80/jp.png', category: 'Forex' },
        { id: 'eurgbp_otc', name: 'EUR/GBP OTC', icon: 'https://flagcdn.com/w80/eu.png', category: 'Forex' },
        { id: 'eurcad_otc', name: 'EUR/CAD OTC', icon: 'https://flagcdn.com/w80/eu.png', category: 'Forex' }
    ],
    stocks: [
        { id: 'aapl_otc', name: 'Apple OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/apple-logo.png', category: 'Stocks' },
        { id: 'goog_otc', name: 'Google OTC', icon: 'https://img.icons8.com/color/96/000000/google-logo.png', category: 'Stocks' },
        { id: 'tsla_otc', name: 'Tesla OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/tesla-motors.png', category: 'Stocks' },
        { id: 'msft_otc', name: 'Microsoft OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/microsoft.png', category: 'Stocks' },
        { id: 'amzn_otc', name: 'Amazon OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/amazon.png', category: 'Stocks' },
        { id: 'meta_otc', name: 'Meta OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/meta.png', category: 'Stocks' },
        { id: 'nvda_otc', name: 'Nvidia OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/nvidia.png', category: 'Stocks' },
        { id: 'nflx_otc', name: 'Netflix OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/netflix.png', category: 'Stocks' },
        { id: 'dis_otc', name: 'Disney OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/disney.png', category: 'Stocks' }
    ],
    crypto: [
        { id: 'btc_usdt', name: 'BTC/USDT', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg', category: 'Crypto' },
        { id: 'eth_usdt', name: 'ETH/USDT', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', category: 'Crypto' },
        { id: 'sol_usdt', name: 'SOL/USDT', icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg', category: 'Crypto' },
        { id: 'bnb_usdt', name: 'BNB/USDT', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg', category: 'Crypto' },
        { id: 'doge_usdt', name: 'DOGE/USDT', icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg', category: 'Crypto' }
    ],
    commodities: [
        { id: 'gold_otc', name: 'Gold OTC', icon: 'https://img.icons8.com/ios-filled/100/FFD700/gold-bars.png', category: 'Metals' },
        { id: 'silver_otc', name: 'Silver OTC', icon: 'https://img.icons8.com/ios-filled/100/C0C0C0/silver-bars.png', category: 'Metals' },
        { id: 'oil_otc', name: 'Brent Oil OTC', icon: 'https://img.icons8.com/ios-filled/100/ffffff/barrel.png', category: 'Metals' }
    ]
};

const TRANSLATIONS = {
    ru: {
        syncing: 'СИНХРОНИЗАЦИЯ...',
        standard: 'СТАНДАРТ',
        platinum: 'VIP ДОСТУП',
        analyze: 'ПОЛУЧИТЬ ПРОГНОЗ',
        entry: 'ВХОД:',
        call: 'ВВЕРХ ↗',
        put: 'ВНИЗ ↘',
        crypto: 'КРИПТО',
        forex: 'ВАЛЮТЫ OTC',
        stocks: 'АКЦИИ OTC',
        metals: 'ТОВАРЫ OTC',
        expiration: 'ВРЕМЯ ЭКСПИРАЦИИ:',
        search: 'Поиск актива...',
        selectExp: 'ВЫБЕРИТЕ ЭКСПИРАЦИЮ:',
        statuses: [
            'Инициализация нейросети...',
            'Анализ текущей волатильности...',
            'Проверка кластерных объемов...',
            'Поиск оптимальной точки входа...',
            'Финализация прогноза...'
        ]
    },
    en: {
        syncing: 'SYNCING...',
        standard: 'STANDARD',
        platinum: 'VIP ACCESS',
        analyze: 'GET SIGNAL',
        entry: 'ENTRY:',
        call: 'CALL ↗',
        put: 'PUT ↘',
        crypto: 'CRYPTO',
        forex: 'FOREX OTC',
        stocks: 'STOCKS OTC',
        metals: 'COMMODITIES OTC',
        expiration: 'EXPIRATION TIME:',
        search: 'Search asset...',
        selectExp: 'SELECT EXPIRATION:',
        statuses: [
            'Initializing Neural Network...',
            'Analyzing current volatility...',
            'Checking cluster volumes...',
            'Searching for optimal entry...',
            'Finalizing forecast...'
        ]
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

        setupLocalization();
        setupEventListeners();
        renderAssets();
        startPriceUpdates();
    } catch (e) { console.error(e); }
}

/* Removed TradingView Widget for Pocket Option Fidelity */

function setupLocalization() {
    const t = TRANSLATIONS[currentLang];
    document.querySelector('.loader').innerText = t.syncing;
    document.getElementById('get-signal-btn').innerText = t.analyze;
    document.getElementById('asset-search').placeholder = t.search;
    document.getElementById('label-expiration').innerText = t.selectExp;

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
        document.getElementById('signal-overlay').classList.remove('active');
        setTimeout(() => document.getElementById('signal-overlay').classList.add('hidden'), 300);
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
    document.getElementById('signal-asset-icon').src = asset.icon;

    document.getElementById('signal-overlay').classList.remove('hidden');
    setTimeout(() => document.getElementById('signal-overlay').classList.add('active'), 10);

    document.getElementById('signal-content').classList.add('hidden');
    document.getElementById('signal-loader').classList.add('hidden');
    document.getElementById('signal-init-view').classList.remove('hidden');
}

async function generateSignal() {
    const t = TRANSLATIONS[currentLang];
    document.getElementById('signal-init-view').classList.add('hidden');
    document.getElementById('signal-loader').classList.remove('hidden');

    // Multi-stage status cycle (5-15 seconds total)
    const statusEl = document.getElementById('status-text');
    for (const status of t.statuses) {
        statusEl.innerText = status;
        const delay = 1000 + (Math.random() * 2000); // 1-3 seconds per status
        await new Promise(r => setTimeout(r, delay));
    }

    document.getElementById('signal-loader').classList.add('hidden');
    document.getElementById('signal-content').classList.remove('hidden');

    const direction = Math.random() > 0.5 ? 'CALL' : 'PUT';
    const dirEl = document.getElementById('signal-direction');
    dirEl.innerText = direction === 'CALL' ? t.call : t.put;
    dirEl.className = 'direction ' + direction.toLowerCase();

    document.getElementById('expiration-label').innerText = `${t.expiration} ${currentTimeframe}`;

    const currentPriceText = document.getElementById(`price-${currentAsset.id}`).innerText;
    document.getElementById('entry-price').innerText = currentPriceText;

    if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
}

function startPriceUpdates() {
    setInterval(() => {
        const allAssets = Object.values(ASSETS_DB).flat();
        allAssets.forEach(asset => {
            const el = document.getElementById(`price-${asset.id}`);
            if (!el) return;

            let price = parseFloat(el.innerText) || (Math.random() * 100 + 10);

            // Smoother OTC-style movement
            const volatility = asset.id.includes('_otc') ? 0.0003 : 0.0001;
            const move = (Math.random() - 0.5) * (price * volatility);
            price += move;

            el.innerText = price.toFixed(asset.id.includes('btc') ? 2 : 5);

            const changeEl = document.getElementById(`change-${asset.id}`);
            if (changeEl) {
                const change = (move / price) * 100;
                // Accumulate change for better feel
                let currentChange = parseFloat(changeEl.innerText) || 0;
                currentChange += change;
                changeEl.innerText = (currentChange >= 0 ? '+' : '') + currentChange.toFixed(3) + '%';
                changeEl.className = 'asset-change ' + (currentChange >= 0 ? 'up' : 'down');
            }
        });
    }, 1000);
}

window.onload = initApp;
