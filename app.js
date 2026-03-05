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
    crypto: [
        { id: 'btc_otc', name: 'Bitcoin OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/btc.png', category: 'Crypto' },
        { id: 'eth_otc', name: 'Ethereum OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/eth.png', category: 'Crypto' },
        { id: 'bnb_otc', name: 'BNB OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/bnb.png', category: 'Crypto' },
        { id: 'sol_otc', name: 'Solana OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/sol.png', category: 'Crypto' },
        { id: 'ada_otc', name: 'Cardano OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/ada.png', category: 'Crypto' },
        { id: 'doge_otc', name: 'Dogecoin OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/doge.png', category: 'Crypto' },
        { id: 'ton_otc', name: 'Toncoin OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/ton.png', category: 'Crypto' },
        { id: 'avax_otc', name: 'Avalanche OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/avax.png', category: 'Crypto' },
        { id: 'trx_otc', name: 'TRON OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/trx.png', category: 'Crypto' },
        { id: 'matic_otc', name: 'Polygon OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/matic.png', category: 'Crypto' },
        { id: 'link_otc', name: 'Chainlink OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/link.png', category: 'Crypto' },
        { id: 'ltc_otc', name: 'Litecoin OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/ltc.png', category: 'Crypto' },
        { id: 'dash_otc', name: 'Dash OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/dash.png', category: 'Crypto' },
        { id: 'bch_otc', name: 'BCH OTC', icon: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a6353054d0074744154fa1f97371077e2336336/32/color/bch.png', category: 'Crypto' }
    ],
    commodities: [
        { id: 'ukbrent', name: 'Brent Oil OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-oil-oil-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'uscrude', name: 'WTI Crude Oil OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-oil-oil-flat-icons-inmotus-design-2.png', category: 'Commodities' },
        { id: 'xag', name: 'Silver OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-silver-gold-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'xau', name: 'Gold OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-gold-gold-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'xng', name: 'Natural Gas OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-gas-energy-flat-icons-inmotus-design-2.png', category: 'Commodities' },
        { id: 'xpd', name: 'Palladium spot OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-platinum-gold-flat-icons-inmotus-design.png', category: 'Commodities' },
        { id: 'xpt', name: 'Platinum spot OTC', icon: 'https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-diamond-stone-flat-icons-inmotus-design.png', category: 'Commodities' }
    ],
    stocks: [
        { id: 'amzn', name: 'Amazon OTC', icon: 'https://img.icons8.com/color/100/null/amazon.png', category: 'Stocks' },
        { id: 'mara', name: 'Marathon Digital OTC', icon: 'https://img.icons8.com/color/100/null/mining.png', category: 'Stocks' },
        { id: 'csco', name: 'Cisco OTC', icon: 'https://img.icons8.com/color/100/null/cisco.png', category: 'Stocks' },
        { id: 'xom', name: 'ExxonMobil OTC', icon: 'https://img.icons8.com/color/100/null/fuel-station.png', category: 'Stocks' },
        { id: 'visa', name: 'Visa OTC', icon: 'https://img.icons8.com/color/100/null/visa.png', category: 'Stocks' },
        { id: 'gme', name: 'GameStop OTC', icon: 'https://img.icons8.com/color/100/null/game-controller.png', category: 'Stocks' },
        { id: 'mcd', name: 'McDonald\'s OTC', icon: 'https://img.icons8.com/color/100/null/mcdonalds.png', category: 'Stocks' },
        { id: 'pltr', name: 'Palantir OTC', icon: 'https://img.icons8.com/color/100/null/data-configuration.png', category: 'Stocks' },
        { id: 'fdx', name: 'FedEx OTC', icon: 'https://img.icons8.com/color/100/null/fedex.png', category: 'Stocks' },
        { id: 'amd', name: 'AMD OTC', icon: 'https://img.icons8.com/color/100/null/amd.png', category: 'Stocks' },
        { id: 'fb', name: 'Meta OTC', icon: 'https://img.icons8.com/color/100/null/meta.png', category: 'Stocks' },
        { id: 'citi', name: 'Citigroup OTC', icon: 'https://img.icons8.com/color/100/null/bank.png', category: 'Stocks' },
        { id: 'axp', name: 'Amex OTC', icon: 'https://img.icons8.com/color/100/null/amex.png', category: 'Stocks' },
        { id: 'aapl', name: 'Apple OTC', icon: 'https://img.icons8.com/color/100/null/apple-logo.png', category: 'Stocks' },
        { id: 'intc', name: 'Intel OTC', icon: 'https://img.icons8.com/color/100/null/intel.png', category: 'Stocks' },
        { id: 'coin', name: 'Coinbase OTC', icon: 'https://img.icons8.com/color/100/null/coinbase.png', category: 'Stocks' },
        { id: 'vix', name: 'VIX OTC', icon: 'https://img.icons8.com/color/100/null/line-chart.png', category: 'Stocks' },
        { id: 'jnj', name: 'Johnson & Johnson OTC', icon: 'https://img.icons8.com/color/100/null/pills.png', category: 'Stocks' },
        { id: 'ba', name: 'Boeing OTC', icon: 'https://img.icons8.com/color/100/null/boeing.png', category: 'Stocks' },
        { id: 'nflx', name: 'Netflix OTC', icon: 'https://img.icons8.com/color/100/null/netflix.png', category: 'Stocks' },
        { id: 'pfe', name: 'Pfizer OTC', icon: 'https://img.icons8.com/color/100/null/pills.png', category: 'Stocks' },
        { id: 'baba', name: 'Alibaba OTC', icon: 'https://img.icons8.com/color/100/null/alibaba.png', category: 'Stocks' },
        { id: 'msft', name: 'Microsoft OTC', icon: 'https://img.icons8.com/color/100/null/microsoft.png', category: 'Stocks' },
        { id: 'tsla', name: 'Tesla OTC', icon: 'https://img.icons8.com/color/100/null/tesla-logo.png', category: 'Stocks' }
    ],
    indices: [
        { id: 'aus200', name: 'AUS 200 OTC', icon: 'https://flagcdn.com/w80/au.png', category: 'Indices' },
        { id: '100', name: '100GBP OTC', icon: 'https://flagcdn.com/w80/gb.png', category: 'Indices' },
        { id: 'cac40', name: 'CAC 40 OTC', icon: 'https://flagcdn.com/w80/fr.png', category: 'Indices' },
        { id: 'd30', name: 'DAX 30 OTC', icon: 'https://flagcdn.com/w80/de.png', category: 'Indices' },
        { id: 'dji30', name: 'Dow Jones OTC', icon: 'https://flagcdn.com/w80/us.png', category: 'Indices' },
        { id: 'e35', name: 'E35EUR OTC', icon: 'https://flagcdn.com/w80/eu.png', category: 'Indices' },
        { id: 'e50', name: 'E50EUR OTC', icon: 'https://flagcdn.com/w80/eu.png', category: 'Indices' },
        { id: 'f40', name: 'F40EUR OTC', icon: 'https://flagcdn.com/w80/eu.png', category: 'Indices' },
        { id: 'jpn225', name: 'Nikkei 225 OTC', icon: 'https://flagcdn.com/w80/jp.png', category: 'Indices' },
        { id: 'nas', name: 'NASDAQ 100 OTC', icon: 'https://flagcdn.com/w80/us.png', category: 'Indices' },
        { id: 'smi20', name: 'SMI 20 OTC', icon: 'https://flagcdn.com/w80/ch.png', category: 'Indices' },
        { id: 'sp500', name: 'S&P 500 OTC', icon: 'https://flagcdn.com/w80/us.png', category: 'Indices' },
        { id: 'aex25', name: 'AEX 25 OTC', icon: 'https://flagcdn.com/w80/nl.png', category: 'Indices' },
        { id: 'h33hkd', name: 'Hang Seng OTC', icon: 'https://flagcdn.com/w80/hk.png', category: 'Indices' }
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
