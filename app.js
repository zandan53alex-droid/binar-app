// Asset Database (Pocket Option Style)
const ASSETS_DB = {
    crypto: [
        { id: 'btc', name: 'BTC/USDT', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg', category: 'Crypto' },
        { id: 'eth', name: 'ETH/USDT', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg', category: 'Crypto' },
        { id: 'sol', name: 'SOL/USDT', icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg', category: 'Crypto' },
        { id: 'xrp', name: 'XRP/USDT', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg', category: 'Crypto' },
        { id: 'bnb', name: 'BNB/USDT', icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg', category: 'Crypto' }
    ],
    forex: [
        { id: 'eurusd', name: 'EUR/USD (OTC)', icon: 'https://flagcdn.com/w40/eu.png', category: 'Forex' },
        { id: 'gbpusd', name: 'GBP/USD (OTC)', icon: 'https://flagcdn.com/w40/gb.png', category: 'Forex' },
        { id: 'usdjpy', name: 'USD/JPY (OTC)', icon: 'https://flagcdn.com/w40/jp.png', category: 'Forex' },
        { id: 'audusd', name: 'AUD/USD (OTC)', icon: 'https://flagcdn.com/w40/au.png', category: 'Forex' }
    ],
    stocks: [
        { id: 'aapl', name: 'APPLE', icon: 'https://img.icons8.com/ios-filled/50/ffffff/apple-logo.png', category: 'Stocks' },
        { id: 'googl', name: 'GOOGLE', icon: 'https://img.icons8.com/color/48/000000/google-logo.png', category: 'Stocks' },
        { id: 'tsla', name: 'TESLA', icon: 'https://img.icons8.com/ios-filled/50/ffffff/tesla-motors.png', category: 'Stocks' },
        { id: 'amzn', name: 'AMAZON', icon: 'https://img.icons8.com/ios-filled/50/ffffff/amazon.png', category: 'Stocks' }
    ],
    commodities: [
        { id: 'gold', name: 'GOLD', icon: 'https://img.icons8.com/ios-filled/50/FFD700/gold-bars.png', category: 'Metals' },
        { id: 'silver', name: 'SILVER', icon: 'https://img.icons8.com/ios-filled/50/C0C0C0/silver-bars.png', category: 'Metals' },
        { id: 'oil', name: 'BRENT OIL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/oil-industry.png', category: 'Commodities' }
    ]
};

const TRANSLATIONS = {
    ru: {
        syncing: 'СИНХРОНИЗАЦИЯ ДАННЫХ...',
        standard: 'СТАНДАРТ',
        platinum: 'ПЛАТИНУМ VIP',
        scanning: 'НЕЙРОННОЕ СКАНИРОВАНИЕ...',
        analyze: 'АНАЛИЗИРОВАТЬ',
        entry: 'ЦЕНА ВХОДА:',
        call: 'ВВЕРХ',
        put: 'ВНИЗ',
        crypto: 'КРИПТО',
        forex: 'ВАЛЮТЫ/OTC',
        stocks: 'АКЦИИ',
        metals: 'МЕТАЛЛЫ'
    },
    en: {
        syncing: 'SYNCING REAL-TIME DATA...',
        standard: 'STANDARD',
        platinum: 'PLATINUM VIP',
        scanning: 'SCANNING NEURAL NETWORK...',
        analyze: 'ANALYZE NOW',
        entry: 'ENTRY PRICE:',
        call: 'CALL',
        put: 'PUT',
        crypto: 'CRYPTO',
        forex: 'FOREX/OTC',
        stocks: 'STOCKS',
        metals: 'METALS'
    }
};

let currentLang = 'ru';
let currentCategory = 'crypto';
let currentAsset = null;
const tg = window.Telegram.WebApp;

function initApp() {
    try {
        console.log("Initializing NeuralEdge...");
        tg.ready();
        tg.expand();

        // Auto-detect language
        const userLang = tg.initDataUnsafe?.user?.language_code;
        currentLang = (userLang === 'ru' || userLang === 'ru-RU') ? 'ru' : 'en';

        // Set theme colors based on VIP status (from URL)
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
    } catch (e) {
        console.error("Initialization failed:", e);
        document.body.innerHTML = `<div style="padding: 20px; color: gold; text-align: center;">
            <h3>BOOT ERROR</h3>
            <p>${e.message}</p>
        </div>`;
    }
}

function setupLocalization() {
    const t = TRANSLATIONS[currentLang];
    const loader = document.querySelector('.loader');
    if (loader) loader.innerText = t.syncing;

    const analyzeBtn = document.getElementById('get-signal-btn');
    if (analyzeBtn) analyzeBtn.innerText = t.analyze;

    const scanText = document.querySelector('.neural-loader p');
    if (scanText) scanText.innerText = t.scanning;

    // Update tabs
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length >= 4) {
        tabs[0].innerText = t.crypto;
        tabs[1].innerText = t.forex;
        tabs[2].innerText = t.stocks;
        tabs[3].innerText = t.metals;
    }
}

function setupEventListeners() {
    // Category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderAssets();
        };
    });

    // Timeframe buttons
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
    });

    // Close signal overlay
    const closeBtn = document.getElementById('close-signal');
    if (closeBtn) {
        closeBtn.onclick = () => {
            document.getElementById('signal-overlay').classList.add('hidden');
        };
    }

    // Analyze button
    const analyzeBtn = document.getElementById('get-signal-btn');
    if (analyzeBtn) analyzeBtn.onclick = generateSignal;
}

function renderAssets() {
    const container = document.getElementById('asset-list');
    if (!container) return;
    container.innerHTML = '';

    ASSETS_DB[currentCategory].forEach(asset => {
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

    // Simulate neural analysis delay
    await new Promise(r => setTimeout(r, 2000));

    document.getElementById('signal-loader').classList.add('hidden');
    document.getElementById('signal-content').classList.remove('hidden');

    const direction = Math.random() > 0.5 ? 'CALL' : 'PUT';
    const dirEl = document.getElementById('signal-direction');
    dirEl.innerText = direction === 'CALL' ? t.call : t.put;
    dirEl.className = 'direction ' + direction.toLowerCase();

    // Update labels
    const priceInfo = document.querySelector('.price-info');
    if (priceInfo) {
        priceInfo.innerHTML = `${t.entry} <span id="entry-price">0.0000</span>`;
    }

    // Get current price for entry
    const priceEl = document.getElementById(`price-${currentAsset.id}`);
    const entryPriceEl = document.getElementById('entry-price');
    if (priceEl && entryPriceEl) {
        entryPriceEl.innerText = priceEl.innerText;
    }

    // Haptic feedback
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

            el.innerText = price.toFixed(asset.id === 'btc' ? 2 : 4);

            const changeEl = document.getElementById(`change-${asset.id}`);
            if (changeEl) {
                const change = (move / price) * 100;
                changeEl.innerText = (change >= 0 ? '+' : '') + change.toFixed(2) + '%';
                changeEl.className = 'asset-change ' + (change >= 0 ? 'up' : 'down');
            }
        });
    }, 2000);
}

window.onload = initApp;
