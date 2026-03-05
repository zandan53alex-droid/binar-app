const ASSETS_DB = {
    forex: [
        { id: 'eurcad', name: 'EUR/CAD', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex' },
        { id: 'gbpusd', name: 'GBP/USD', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex' },
        { id: 'cadchf', name: 'CAD/CHF', icons: ['https://flagcdn.com/w80/ca.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex' },
        { id: 'audcad', name: 'AUD/CAD', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex' },
        { id: 'audchf', name: 'AUD/CHF', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex' },
        { id: 'eurusd', name: 'EUR/USD', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex' },
        { id: 'gbpchf', name: 'GBP/CHF', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex' },
        { id: 'eurgbp', name: 'EUR/GBP', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/gb.png'], category: 'Forex' },
        { id: 'cadjpy', name: 'CAD/JPY', icons: ['https://flagcdn.com/w80/ca.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex' },
        { id: 'eurjpy', name: 'EUR/JPY', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex' },
        { id: 'usdcad', name: 'USD/CAD', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex' },
        { id: 'audjpy', name: 'AUD/JPY', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex' },
        { id: 'usdjpy', name: 'USD/JPY', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex' },
        { id: 'gbpjpy', name: 'GBP/JPY', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex' },
        { id: 'audusd', name: 'AUD/USD', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex' },
        { id: 'chfjpy', name: 'CHF/JPY', icons: ['https://flagcdn.com/w80/ch.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex' },
        { id: 'eurchf', name: 'EUR/CHF', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex' },
        { id: 'euraud', name: 'EUR/AUD', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/au.png'], category: 'Forex' },
        { id: 'gbpaud', name: 'GBP/AUD', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/au.png'], category: 'Forex' },
        { id: 'usdchf', name: 'USD/CHF', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex' },
        { id: 'gbpcad', name: 'GBP/CAD', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex' }
    ],
    forex_otc: [
        { id: 'audcad_otc', name: 'AUD/CAD OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex OTC' },
        { id: 'audusd_otc', name: 'AUD/USD OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'eurusd_otc', name: 'EUR/USD OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'gbpusd_otc', name: 'GBP/USD OTC', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'usdjpy_otc', name: 'USD/JPY OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'eurjpy_otc', name: 'EUR/JPY OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'gbpjpy_otc', name: 'GBP/JPY OTC', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'usdcad_otc', name: 'USD/CAD OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex OTC' },
        { id: 'usdchf_otc', name: 'USD/CHF OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex OTC' },
        { id: 'nzdusd_otc', name: 'NZD/USD OTC', icons: ['https://flagcdn.com/w80/nz.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' }
    ],
    crypto: [
        { id: 'btc', name: 'Bitcoin', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/btc.png', category: 'Crypto' },
        { id: 'eth', name: 'Ethereum', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/eth.png', category: 'Crypto' },
        { id: 'bnb', name: 'BNB', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/bnb.png', category: 'Crypto' },
        { id: 'sol', name: 'Solana', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/sol.png', category: 'Crypto' },
        { id: 'xrp', name: 'XRP', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/xrp.png', category: 'Crypto' },
        { id: 'ada', name: 'Cardano', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/ada.png', category: 'Crypto' },
        { id: 'doge', name: 'Dogecoin', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/doge.png', category: 'Crypto' },
        { id: 'trx', name: 'TRON', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/trx.png', category: 'Crypto' },
        { id: 'dot', name: 'Polkadot', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/dot.png', category: 'Crypto' }
    ],
    commodities: [
        { id: 'gold', name: 'Gold', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-gold-gold-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'silver', name: 'Silver', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-silver-gold-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'brent', name: 'Brent Oil', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-oil-oil-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'natgas', name: 'Natural Gas', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-gas-energy-flat-icons-inmotus-design-2.png', category: 'Commodities' }
    ],
    stocks: [
        { id: 'aapl_otc', name: 'Apple OTC', icon: 'https://img.icons8.com/color/100/null/apple-logo.png', category: 'Stocks' },
        { id: 'amzn_otc', name: 'Amazon OTC', icon: 'https://img.icons8.com/color/100/null/amazon.png', category: 'Stocks' },
        { id: 'msft_otc', name: 'Microsoft OTC', icon: 'https://img.icons8.com/color/100/null/microsoft.png', category: 'Stocks' },
        { id: 'goog_otc', name: 'Google OTC', icon: 'https://img.icons8.com/color/100/null/google-logo.png', category: 'Stocks' },
        { id: 'meta_otc', name: 'Meta OTC', icon: 'https://img.icons8.com/color/100/null/meta.png', category: 'Stocks' },
        { id: 'tsla_otc', name: 'Tesla OTC', icon: 'https://img.icons8.com/color/100/null/tesla-logo.png', category: 'Stocks' },
        { id: 'nflx_otc', name: 'Netflix OTC', icon: 'https://img.icons8.com/color/100/null/netflix.png', category: 'Stocks' }
    ],
    indices: [
        { id: 'us100_otc', name: 'US 100 OTC', icon: 'https://flagcdn.com/w80/us.png', category: 'Indices' },
        { id: 'sp500_otc', name: 'S&P 500 OTC', icon: 'https://flagcdn.com/w80/us.png', category: 'Indices' },
        { id: 'dji30_otc', name: 'Dow Jones OTC', icon: 'https://flagcdn.com/w80/us.png', category: 'Indices' },
        { id: 'ger40_otc', name: 'DAX 40 OTC', icon: 'https://flagcdn.com/w80/de.png', category: 'Indices' },
        { id: 'fra40_otc', name: 'CAC 40 OTC', icon: 'https://flagcdn.com/w80/fr.png', category: 'Indices' }
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
        forex: 'ВАЛЮТЫ',
        forex_otc: 'ВАЛЮТЫ OTC',
        stocks: 'АКЦИИ OTC',
        commodities: 'ТОВАРЫ OTC',
        indices: 'ИНДЕКСЫ',
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
        forex: 'CURRENCIES',
        forex_otc: 'CURRENCIES OTC',
        stocks: 'STOCKS OTC',
        commodities: 'COMMODITIES OTC',
        indices: 'INDICES',
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
let currentCategory = 'forex';
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

    document.querySelectorAll('.tab-btn').forEach(btn => {
        const cat = btn.dataset.category;
        if (t[cat]) btn.innerText = t[cat];
    });
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

        // Handle single or multi-icons
        const icons = asset.icons || [asset.icon];
        const isMulti = icons.length > 1;

        let iconsHtml = `<div class="asset-icon-wrapper ${isMulti ? 'multi' : 'single'}">`;
        icons.forEach((src, idx) => {
            iconsHtml += `<img src="${src}" class="asset-icon ${idx === 1 ? 'secondary' : ''}" onerror="this.src='https://img.icons8.com/ios/50/ffffff/financial-dynamic.png'">`;
        });
        iconsHtml += `</div>`;

        card.innerHTML = `
            ${iconsHtml}
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

    const iconContainer = document.getElementById('signal-asset-icons');
    iconContainer.innerHTML = '';
    const icons = asset.icons || [asset.icon];
    const isMulti = icons.length > 1;

    iconContainer.className = `signal-asset-icon-wrapper ${isMulti ? 'multi' : 'single'}`;
    icons.forEach((src, idx) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = `signal-asset-icon ${idx === 1 ? 'secondary' : ''}`;
        img.onerror = () => img.src = 'https://img.icons8.com/ios/50/ffffff/financial-dynamic.png';
        iconContainer.appendChild(img);
    });

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
