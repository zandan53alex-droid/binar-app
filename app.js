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
        { id: 'aedcny_otc', name: 'AED/CNY OTC', icons: ['https://flagcdn.com/w80/ae.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'audcad_otc', name: 'AUD/CAD OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex OTC' },
        { id: 'audnzd_otc', name: 'AUD/NZD OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/nz.png'], category: 'Forex OTC' },
        { id: 'audusd_otc', name: 'AUD/USD OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'bhdcny_otc', name: 'BHD/CNY OTC', icons: ['https://flagcdn.com/w80/bh.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'cadchf_otc', name: 'CAD/CHF OTC', icons: ['https://flagcdn.com/w80/ca.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex OTC' },
        { id: 'cadjpy_otc', name: 'CAD/JPY OTC', icons: ['https://flagcdn.com/w80/ca.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'eurchf_otc', name: 'EUR/CHF OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex OTC' },
        { id: 'eurusd_otc', name: 'EUR/USD OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'nzdusd_otc', name: 'NZD/USD OTC', icons: ['https://flagcdn.com/w80/nz.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'uahusd_otc', name: 'UAH/USD OTC', icons: ['https://flagcdn.com/w80/ua.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'usdcop_otc', name: 'USD/COP OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/co.png'], category: 'Forex OTC' },
        { id: 'usdegp_otc', name: 'USD/EGP OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/eg.png'], category: 'Forex OTC' },
        { id: 'usdidr_otc', name: 'USD/IDR OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/id.png'], category: 'Forex OTC' },
        { id: 'usdpkr_otc', name: 'USD/PKR OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/pk.png'], category: 'Forex OTC' },
        { id: 'usdrub_otc', name: 'USD/RUB OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ru.png'], category: 'Forex OTC' },
        { id: 'usdcnh_otc', name: 'USD/CNH OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'eurnzd_otc', name: 'EUR/NZD OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/nz.png'], category: 'Forex OTC' },
        { id: 'usdchf_otc', name: 'USD/CHF OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex OTC' },
        { id: 'eurgbp_otc', name: 'EUR/GBP OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/gb.png'], category: 'Forex OTC' },
        { id: 'sarcny_otc', name: 'SAR/CNY OTC', icons: ['https://flagcdn.com/w80/sa.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'eurtry_otc', name: 'EUR/TRY OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/tr.png'], category: 'Forex OTC' },
        { id: 'eurrub_otc', name: 'EUR/RUB OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/ru.png'], category: 'Forex OTC' },
        { id: 'qarcny_otc', name: 'QAR/CNY OTC', icons: ['https://flagcdn.com/w80/qa.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'audjpy_otc', name: 'AUD/JPY OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'gbpusd_otc', name: 'GBP/USD OTC', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'usdbdt_otc', name: 'USD/BDT OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/bd.png'], category: 'Forex OTC' },
        { id: 'omrcny_otc', name: 'OMR/CNY OTC', icons: ['https://flagcdn.com/w80/om.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'usdbrl_otc', name: 'USD/BRL OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/br.png'], category: 'Forex OTC' },
        { id: 'eurjpy_otc', name: 'EUR/JPY OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'gbpaud_otc', name: 'GBP/AUD OTC', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/au.png'], category: 'Forex OTC' },
        { id: 'usdars_otc', name: 'USD/ARS OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ar.png'], category: 'Forex OTC' },
        { id: 'usdcad_otc', name: 'USD/CAD OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ca.png'], category: 'Forex OTC' },
        { id: 'usdsgd_otc', name: 'USD/SGD OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/sg.png'], category: 'Forex OTC' },
        { id: 'kesusd_otc', name: 'KES/USD OTC', icons: ['https://flagcdn.com/w80/ke.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'nzdjpy_otc', name: 'NZD/JPY OTC', icons: ['https://flagcdn.com/w80/nz.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'usdclp_otc', name: 'USD/CLP OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/cl.png'], category: 'Forex OTC' },
        { id: 'audchf_otc', name: 'AUD/CHF OTC', icons: ['https://flagcdn.com/w80/au.png', 'https://flagcdn.com/w80/ch.png'], category: 'Forex OTC' },
        { id: 'gbpjpy_otc', name: 'GBP/JPY OTC', icons: ['https://flagcdn.com/w80/gb.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'usdjpy_otc', name: 'USD/JPY OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'madusd_otc', name: 'MAD/USD OTC', icons: ['https://flagcdn.com/w80/ma.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'usdmxn_otc', name: 'USD/MXN OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/mx.png'], category: 'Forex OTC' },
        { id: 'usdinr_otc', name: 'USD/INR OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/in.png'], category: 'Forex OTC' },
        { id: 'usdthb_otc', name: 'USD/THB OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/th.png'], category: 'Forex OTC' },
        { id: 'jodcny_otc', name: 'JOD/CNY OTC', icons: ['https://flagcdn.com/w80/jo.png', 'https://flagcdn.com/w80/cn.png'], category: 'Forex OTC' },
        { id: 'tndusd_otc', name: 'TND/USD OTC', icons: ['https://flagcdn.com/w80/tn.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'lbpusd_otc', name: 'LBP/USD OTC', icons: ['https://flagcdn.com/w80/lb.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'chfnok_otc', name: 'CHF/NOK OTC', icons: ['https://flagcdn.com/w80/ch.png', 'https://flagcdn.com/w80/no.png'], category: 'Forex OTC' },
        { id: 'eurhuf_otc', name: 'EUR/HUF OTC', icons: ['https://flagcdn.com/w80/eu.png', 'https://flagcdn.com/w80/hu.png'], category: 'Forex OTC' },
        { id: 'yerusd_otc', name: 'YER/USD OTC', icons: ['https://flagcdn.com/w80/ye.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'ngnusd_otc', name: 'NGN/USD OTC', icons: ['https://flagcdn.com/w80/ng.png', 'https://flagcdn.com/w80/us.png'], category: 'Forex OTC' },
        { id: 'usdmyr_otc', name: 'USD/MYR OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/my.png'], category: 'Forex OTC' },
        { id: 'usdphp_otc', name: 'USD/PHP OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/ph.png'], category: 'Forex OTC' },
        { id: 'chfjpy_otc', name: 'CHF/JPY OTC', icons: ['https://flagcdn.com/w80/ch.png', 'https://flagcdn.com/w80/jp.png'], category: 'Forex OTC' },
        { id: 'usdvnd_otc', name: 'USD/VND OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/vn.png'], category: 'Forex OTC' },
        { id: 'usddzd_otc', name: 'USD/DZD OTC', icons: ['https://flagcdn.com/w80/us.png', 'https://flagcdn.com/w80/dz.png'], category: 'Forex OTC' }
    ],
    crypto: [
        { id: 'ada_otc', name: 'Cardano OTC', icon: 'https://assets.coingecko.com/coins/images/975/small/cardano.png', category: 'Crypto' },
        { id: 'bnb_otc', name: 'BNB OTC', icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png', category: 'Crypto' },
        { id: 'bitcoin_etf_otc', name: 'Bitcoin ETF OTC', icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png', category: 'Crypto' },
        { id: 'sol_otc', name: 'Solana OTC', icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png', category: 'Crypto' },
        { id: 'bitcoin_otc', name: 'Bitcoin OTC', icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png', category: 'Crypto' },
        { id: 'ton_otc', name: 'Toncoin OTC', icon: 'https://assets.coingecko.com/coins/images/17980/small/ton_symbol.png', category: 'Crypto' },
        { id: 'avax_otc', name: 'Avalanche OTC', icon: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png', category: 'Crypto' },
        { id: 'link_otc', name: 'Chainlink OTC', icon: 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png', category: 'Crypto' },
        { id: 'matic_otc', name: 'Polygon OTC', icon: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png', category: 'Crypto' },
        { id: 'trx_otc', name: 'TRON OTC', icon: 'https://assets.coingecko.com/coins/images/1094/small/tron-logo.png', category: 'Crypto' },
        { id: 'eth_otc', name: 'Ethereum OTC', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', category: 'Crypto' },
        { id: 'ltc_otc', name: 'Litecoin OTC', icon: 'https://assets.coingecko.com/coins/images/2/small/litecoin.png', category: 'Crypto' },
        { id: 'bitcoin', name: 'Bitcoin', icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png', category: 'Crypto' },
        { id: 'doge_otc', name: 'Dogecoin OTC', icon: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png', category: 'Crypto' },
        { id: 'dash', name: 'Dash', icon: 'https://assets.coingecko.com/coins/images/19/small/dash-logo.png', category: 'Crypto' },
        { id: 'bcheur', name: 'BCH/EUR', icons: ['https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png', 'https://flagcdn.com/w40/eu.png'], category: 'Crypto' },
        { id: 'bchgbp', name: 'BCH/GBP', icons: ['https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png', 'https://flagcdn.com/w40/gb.png'], category: 'Crypto' },
        { id: 'bchjpy', name: 'BCH/JPY', icons: ['https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png', 'https://flagcdn.com/w40/jp.png'], category: 'Crypto' },
        { id: 'btcgbp', name: 'BTC/GBP', icons: ['https://assets.coingecko.com/coins/images/1/small/bitcoin.png', 'https://flagcdn.com/w40/gb.png'], category: 'Crypto' },
        { id: 'btcjpy', name: 'BTC/JPY', icons: ['https://assets.coingecko.com/coins/images/1/small/bitcoin.png', 'https://flagcdn.com/w40/jp.png'], category: 'Crypto' },
        { id: 'ethereum', name: 'Ethereum', icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', category: 'Crypto' },
        { id: 'dot_otc', name: 'Polkadot OTC', icon: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png', category: 'Crypto' },
        { id: 'link', name: 'Chainlink', icon: 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png', category: 'Crypto' }
    ],
    commodities: [
        { id: 'xageur', name: 'XAG/EUR', icons: ['images/silver_logo.png', 'https://flagcdn.com/w40/eu.png'], category: 'Commodities' },
        { id: 'xaueur', name: 'XAU/EUR', icons: ['images/gold.jpg', 'https://flagcdn.com/w40/eu.png'], category: 'Commodities' },
        { id: 'brent_oil_otc', name: 'Brent Oil OTC', icon: 'images/brent.png', category: 'Commodities' },
        { id: 'us_crude_otc', name: 'US Crude OTC', icon: 'images/crude.jpg', category: 'Commodities' },
        { id: 'silver_otc', name: 'Silver OTC', icon: 'images/silver.jpg', category: 'Commodities' },
        { id: 'gold_otc', name: 'Gold OTC', icon: 'images/gold.jpg', category: 'Commodities' },
        { id: 'natural_gas', name: 'Natural Gas', icon: 'images/natural_gas.jpg', category: 'Commodities' },
        { id: 'palladium_otc', name: 'Palladium OTC', icon: 'images/palladium.jpg', category: 'Commodities' },
        { id: 'platinum_otc', name: 'Platinum OTC', icon: 'images/platinum.jpg', category: 'Commodities' },
        { id: 'gold', name: 'Gold', icon: 'images/gold.jpg', category: 'Commodities' },
        { id: 'silver', name: 'Silver', icon: 'images/silver.jpg', category: 'Commodities' },
        { id: 'platinum_spot', name: 'Platinum spot', icon: 'images/platinum.jpg', category: 'Commodities' }
    ],
    stocks: [
        { id: 'amzn_otc', name: 'Amazon OTC', icon: 'https://logo.clearbit.com/amazon.com', category: 'Stocks' },
        { id: 'mara_otc', name: 'Marathon Digital Holdings OTC', icon: 'https://logo.clearbit.com/mara.com', category: 'Stocks' },
        { id: 'csco_otc', name: 'Cisco OTC', icon: 'https://logo.clearbit.com/cisco.com', category: 'Stocks' },
        { id: 'xom_otc', name: 'ExxonMobil OTC', icon: 'https://logo.clearbit.com/exxonmobil.com', category: 'Stocks' },
        { id: 'visa_otc', name: 'VISA OTC', icon: 'https://img.icons8.com/color/100/visa.png', category: 'Stocks' },
        { id: 'gme_otc', name: 'GameStop Corp OTC', icon: 'https://logo.clearbit.com/gamestop.com', category: 'Stocks' },
        { id: 'mcd_otc', name: "McDonald's OTC", icon: 'https://logo.clearbit.com/mcdonalds.com', category: 'Stocks' },
        { id: 'pltr_otc', name: 'Palantir Technologies OTC', icon: 'https://logo.clearbit.com/palantir.com', category: 'Stocks' },
        { id: 'fdx_otc', name: 'FedEx OTC', icon: 'https://logo.clearbit.com/fedex.com', category: 'Stocks' },
        { id: 'amd_otc', name: 'Advanced Micro Devices OTC', icon: 'https://logo.clearbit.com/amd.com', category: 'Stocks' },
        { id: 'fb_otc', name: 'Facebook OTC', icon: 'https://logo.clearbit.com/facebook.com', category: 'Stocks' },
        { id: 'citi_otc', name: 'Citigroup Inc OTC', icon: 'https://logo.clearbit.com/citi.com', category: 'Stocks' },
        { id: 'axp_otc', name: 'American Express OTC', icon: 'https://logo.clearbit.com/americanexpress.com', category: 'Stocks' },
        { id: 'aapl_otc', name: 'Apple OTC', icon: 'https://logo.clearbit.com/apple.com', category: 'Stocks' },
        { id: 'intc_otc', name: 'Intel OTC', icon: 'https://logo.clearbit.com/intel.com', category: 'Stocks' },
        { id: 'coin_otc', name: 'Coinbase Global OTC', icon: 'https://logo.clearbit.com/coinbase.com', category: 'Stocks' },
        { id: 'vix_otc', name: 'VIX OTC', icon: 'https://logo.clearbit.com/cboe.com', category: 'Stocks' },
        { id: 'jnj_otc', name: 'Johnson & Johnson OTC', icon: 'https://logo.clearbit.com/jnj.com', category: 'Stocks' },
        { id: 'ba_otc', name: 'Boeing Company OTC', icon: 'https://logo.clearbit.com/boeing.com', category: 'Stocks' },
        { id: 'nflx_otc', name: 'Netflix OTC', icon: 'https://logo.clearbit.com/netflix.com', category: 'Stocks' },
        { id: 'pfe_otc', name: 'Pfizer Inc OTC', icon: 'https://logo.clearbit.com/pfizer.com', category: 'Stocks' },
        { id: 'baba_otc', name: 'Alibaba OTC', icon: 'https://logo.clearbit.com/alibaba.com', category: 'Stocks' },
        { id: 'msft_otc', name: 'Microsoft OTC', icon: 'https://logo.clearbit.com/microsoft.com', category: 'Stocks' },
        { id: 'tsla_otc', name: 'Tesla OTC', icon: 'https://logo.clearbit.com/tesla.com', category: 'Stocks' },
        { id: 'apple', name: 'Apple', icon: 'https://logo.clearbit.com/apple.com', category: 'Stocks' },
        { id: 'amex', name: 'American Express', icon: 'https://logo.clearbit.com/americanexpress.com', category: 'Stocks' },
        { id: 'boeing', name: 'Boeing Company', icon: 'https://logo.clearbit.com/boeing.com', category: 'Stocks' },
        { id: 'meta', name: 'Facebook', icon: 'https://logo.clearbit.com/facebook.com', category: 'Stocks' },
        { id: 'jnj', name: 'Johnson & Johnson', icon: 'https://logo.clearbit.com/jnj.com', category: 'Stocks' },
        { id: 'jpm', name: 'JPMorgan Chase & Co', icon: 'https://logo.clearbit.com/jpmorgan.com', category: 'Stocks' },
        { id: 'mcdonalds', name: "McDonald's", icon: 'https://logo.clearbit.com/mcdonalds.com', category: 'Stocks' },
        { id: 'microsoft', name: 'Microsoft', icon: 'https://logo.clearbit.com/microsoft.com', category: 'Stocks' },
        { id: 'pfizer', name: 'Pfizer Inc', icon: 'https://logo.clearbit.com/pfizer.com', category: 'Stocks' },
        { id: 'tesla', name: 'Tesla', icon: 'https://logo.clearbit.com/tesla.com', category: 'Stocks' },
        { id: 'alibaba', name: 'Alibaba', icon: 'https://logo.clearbit.com/alibaba.com', category: 'Stocks' },
        { id: 'citigroup', name: 'Citigroup Inc', icon: 'https://logo.clearbit.com/citi.com', category: 'Stocks' },
        { id: 'netflix', name: 'Netflix', icon: 'https://logo.clearbit.com/netflix.com', category: 'Stocks' },
        { id: 'cisco', name: 'Cisco', icon: 'https://logo.clearbit.com/cisco.com', category: 'Stocks' },
        { id: 'exxon', name: 'ExxonMobil', icon: 'https://logo.clearbit.com/exxonmobil.com', category: 'Stocks' },
        { id: 'intel', name: 'Intel', icon: 'https://logo.clearbit.com/intel.com', category: 'Stocks' }
    ],
    indices: [
        { id: 'aus200_otc', name: 'AUS 200 OTC', icon: 'images/aus200.png', category: 'Indices' },
        { id: '100gbp_otc', name: '100GBP OTC', icon: 'images/100gbp.png', category: 'Indices' },
        { id: 'cac40_index', name: 'CAC 40', icon: 'images/cac40.png', category: 'Indices' },
        { id: 'd30eur_otc', name: 'D30EUR OTC', icon: 'images/d30eur.jpg', category: 'Indices' },
        { id: 'dji30_otc', name: 'DJI30 OTC', icon: 'images/dji30.png', category: 'Indices' },
        { id: 'e35eur_index', name: 'E35EUR', icon: 'images/e35eur.jpg', category: 'Indices' },
        { id: 'e35eur_otc', name: 'E35EUR OTC', icon: 'images/e35eur.jpg', category: 'Indices' },
        { id: 'e50eur_otc', name: 'E50EUR OTC', icon: 'images/e50eur.png', category: 'Indices' },
        { id: 'jpn225_otc', name: 'JPN225 OTC', icon: 'images/jpn225.png', category: 'Indices' },
        { id: 'us100_index', name: 'US100', icon: 'images/us100.png', category: 'Indices' },
        { id: 'us100_otc', name: 'US100 OTC', icon: 'images/us100.png', category: 'Indices' },
        { id: 'smi20_index', name: 'SMI 20', icon: 'images/smi20.png', category: 'Indices' },
        { id: 'sp500_index', name: 'SP500', icon: 'images/sp500.png', category: 'Indices' },
        { id: 'sp500_otc', name: 'SP500 OTC', icon: 'images/sp500.png', category: 'Indices' },
        { id: '100gbp_index', name: '100GBP', icon: 'images/100gbp.png', category: 'Indices' },
        { id: 'aex25_index', name: 'AEX 25', icon: 'images/aex25.png', category: 'Indices' },
        { id: 'd30eur_index', name: 'D30/EUR', icon: 'images/d30eur.jpg', category: 'Indices' },
        { id: 'dji30_index', name: 'DJI30', icon: 'images/dji30.png', category: 'Indices' },
        { id: 'e50eur_index', name: 'E50/EUR', icon: 'images/e50eur.png', category: 'Indices' },
        { id: 'f40eur_index', name: 'F40/EUR', icon: 'images/f40eur.png', category: 'Indices' },
        { id: 'f40eur_otc', name: 'F40EUR OTC', icon: 'images/f40eur.png', category: 'Indices' },
        { id: 'hk33_index', name: 'HONG KONG 33', icon: 'images/hk33.jpg', category: 'Indices' },
        { id: 'jpn225_index', name: 'JPN225', icon: 'images/jpn225.png', category: 'Indices' },
        { id: 'aus200_index', name: 'AUS 200', icon: 'images/aus200.png', category: 'Indices' }
    ]
};

const TRANSLATIONS = {
    ru: {
        syncing: 'СИНХРОНИЗАЦИЯ...',
        standard: 'СТАНДАРТ',
        platinum: 'VIP ДОСТУП',
        analyze: 'ПОЛУЧИТЬ ПРОГНОЗ',
        entry: 'ВХОД:',
        call: 'ПОКУПКА ↗',
        put: 'ПРОДАЖА ↘',
        crypto: 'КРИПТОВАЛЮТЫ',
        forex: 'ВАЛЮТЫ',
        forex_otc: 'ВАЛЮТЫ OTC',
        stocks: 'АКЦИИ',
        commodities: 'СЫРЬЕВЫЕ ТОВАРЫ',
        indices: 'ИНДЕКСЫ',
        assetsBtn: '📈 АКТИВЫ',
        educationBtn: '🎓 ОБУЧЕНИЕ',
        calcBtn: '🧮 КАЛЬКУЛЯТОР',
        newsBtn: '📰 НОВОСТИ',
        indicatorsBtn: '📉 ИНДИКАТОРЫ',
        indicatorsPanelTitle: 'ИНДИКАТОРЫ',
        expiration: 'ВРЕМЯ ЭКСПИРАЦИИ:',
        search: 'Поиск актива...',
        selectExp: 'ВЫБЕРИТЕ ЭКСПИРАЦИЮ:',
        notFound: 'Ничего не найдено',
        updatedAt: 'Обновлено:',
        loading: 'ЗАГРУЗКА...',
        basics: 'Основа трейдинга',
        books: 'Книги',
        deposit: 'Депозит ($)',
        firstBet: 'Первая сделка (%)',
        multiplier: 'Коэффициент',
        levels: 'Перекрытий',
        payout: 'Выплата (%)',
        statsFirstBet: 'Первая ставка',
        statsRisk: 'Общий риск',
        statsRiskPerc: 'Риск от депо',
        survivalMsg: 'Депозит выдержит {n} колен подряд.',
        runSim: 'ЗАПУСТИТЬ',
        winrate: 'Винрейт (%)',
        balance: 'Баланс:',
        lossSeries: 'Лосс-серия:',
        drawdown: 'Просадка:',
        recommendation: 'Рекомендация',
        safeBetPrefix: 'Безопасная первая ставка при риске ',
        safeBetSuffix: '%:',
        statuses: [
            'Инициализация нейросети...',
            'Анализ текущей волатильности...',
            'Проверка кластерных объемов...',
            'Поиск оптимальной точки входа...',
            'Финализация прогноза...'
        ],
        confidence: 'УВЕРЕННОСТЬ',
        accuracy: 'ТОЧНОСТЬ',
        market: 'РЫНОК',
        strength: 'СИЛА',
        volume: 'ОБЪЁМ',
        time: 'ВРЕМЯ',
        validUntil: 'ДЕЙСТВИТЕЛЕН ДО',
        repeat: 'Повторить',
        back: 'Назад',
        strong: 'Сильный',
        moderate: 'Средний',
        high: 'Высокий',
        medium: 'Умеренный',
        otc: 'ОТС',
        regular: 'Биржа',
        mainSignalBtn: 'ПОЛУЧИТЬ СИГНАЛ',
        newsTime: 'Время',
        newsPriority: 'Приоритет',
        newsTimeLeft: 'Осталось времени',
        newsEvent: 'Событие',
        newsPrev: 'Пред.',
        newsForecast: 'Прогноз',
        allAssets: 'АКТИВЫ',
        impactLow: 'Низкий',
        impactMedium: 'Средний',
        impactHigh: 'Высокий',
        calcTableTitle: 'Таблица перекрытий',
        calcStep: 'Шаг',
        calcBet: 'Ставка',
        calcProfit: 'Прибыль',
        calcSimTitle: 'Симуляция (100 сделок)'
    },
    en: {
        syncing: 'SYNCING...',
        standard: 'STANDARD',
        platinum: 'VIP ACCESS',
        analyze: 'GET SIGNAL',
        mainSignalBtn: 'GET SIGNAL',
        entry: 'ENTRY:',
        call: 'CALL ↗',
        put: 'PUT ↘',
        crypto: 'CRYPTO',
        forex: 'CURRENCIES',
        forex_otc: 'CURRENCIES OTC',
        stocks: 'STOCKS OTC',
        commodities: 'COMMODITIES OTC',
        indices: 'INDICES',
        assetsBtn: '📈 ASSETS',
        educationBtn: '🎓 EDUCATION',
        calcBtn: '🧮 CALCULATOR',
        newsBtn: '📰 NEWS',
        indicatorsBtn: '📉 INDICATORS',
        indicatorsPanelTitle: 'INDICATORS',
        expiration: 'EXPIRATION TIME:',
        search: 'Search asset...',
        selectExp: 'SELECT EXPIRATION:',
        notFound: 'Nothing found',
        updatedAt: 'Updated:',
        loading: 'LOADING...',
        basics: 'Trading Basics',
        books: 'Books',
        deposit: 'Deposit ($)',
        firstBet: 'First Bet (%)',
        multiplier: 'Multiplier',
        levels: 'Levels',
        payout: 'Payout (%)',
        statsFirstBet: 'First Bet',
        statsRisk: 'Total Risk',
        statsRiskPerc: 'Risk/Depo',
        survivalMsg: 'Deposit holds {n} steps.',
        runSim: 'RUN SIM',
        winrate: 'Winrate (%)',
        balance: 'Balance:',
        lossSeries: 'Loss Series:',
        drawdown: 'Drawdown:',
        recommendation: 'Recommendation',
        safeBetPrefix: 'Safe first bet at ',
        safeBetSuffix: '% risk:',
        statuses: [
            'Initializing Neural Network...',
            'Analyzing current volatility...',
            'Checking cluster volumes...',
            'Searching for optimal entry...',
            'Finalizing forecast...'
        ],
        confidence: 'CONFIDENCE',
        accuracy: 'ACCURACY',
        market: 'MARKET',
        strength: 'STRENGTH',
        volume: 'VOLUME',
        time: 'TIME',
        validUntil: 'VALID UNTIL',
        repeat: 'Repeat',
        back: 'Back',
        strong: 'Strong',
        moderate: 'Moderate',
        high: 'High',
        medium: 'Medium',
        otc: 'OTC',
        regular: 'Regular',
        mainSignalBtn: 'GET SIGNAL',
        newsTime: 'Time',
        newsPriority: 'Priority',
        newsTimeLeft: 'Time Left',
        newsEvent: 'Event',
        newsPrev: 'Prev.',
        newsForecast: 'Forecast',
        impactLow: 'Low',
        impactMedium: 'Medium',
        impactHigh: 'High',
        calcTableTitle: 'Overlap Table',
        calcStep: 'Step',
        calcBet: 'Bet',
        calcProfit: 'Profit',
        calcSimTitle: 'Simulation (100 trades)',
        allAssets: 'ASSETS'
    },
    hi: {
        syncing: 'सिंकिंग...',
        standard: 'मानक',
        platinum: 'वीआईपी',
        analyze: 'सिग्नल प्राप्त करें',
        entry: 'प्रवेश:',
        call: 'खरीदें ↗',
        put: 'बेचें ↘',
        crypto: 'क्रिप्टो',
        forex: 'मुद्राएं',
        forex_otc: 'मुद्राएं OTC',
        stocks: 'स्टॉक OTC',
        commodities: 'कमोडिटीज OTC',
        indices: 'सूचकांक',
        assetsBtn: '📈 संपत्ति',
        educationBtn: '🎓 शिक्षा',
        calcBtn: '🧮 कैलकुलेटर',
        newsBtn: '📰 समाचार',
        indicatorsBtn: '📉 संकेतक',
        indicatorsPanelTitle: 'संकेतक',
        expiration: 'समाप्ति समय:',
        search: 'संपत्ति खोजें...',
        selectExp: 'समाप्ति चुनें:',
        notFound: 'कुछ नहीं मिला',
        updatedAt: 'अपडेट किया गया:',
        loading: 'लोड हो रहा है...',
        basics: 'बुनियादी बातें',
        books: 'किताबें',
        deposit: 'जमा ($)',
        firstBet: 'पहली शर्त (%)',
        multiplier: 'गुणक',
        levels: 'स्तर',
        payout: 'पेआउट (%)',
        statsFirstBet: 'पहली शर्त',
        statsRisk: 'कुल जोखिम',
        statsRiskPerc: 'जमा का जोखिम',
        survivalMsg: 'जमा लगातार {n} चरणों तक चलेगा।',
        runSim: 'चलाएं',
        winrate: 'जीत की दर (%)',
        balance: 'शेष:',
        lossSeries: 'घाटे की शृंखला:',
        drawdown: 'ड्रॉडाउन:',
        recommendation: 'सिफारिश',
        safeBetPrefix: '',
        safeBetSuffix: '% जोखिम पर सुरक्षित पहली बाज़ी:',
        statuses: [
            'न्यूरल नेटवर्क प्रारंभ करना...',
            'वर्तमान अस्थिरता का विश्लेषण...',
            'क्लस्टर वॉल्यूम की जाँच...',
            'इष्टतम प्रविष्टि की खोज...',
            'पूर्वानुमान अंतिम रूप देना...'
        ],
        confidence: 'आत्मविश्वास',
        accuracy: 'सटीकता',
        market: 'बाजार',
        strength: 'शक्ति',
        volume: 'आयतन',
        time: 'समय',
        validUntil: 'तक मान्य',
        repeat: 'दोहराएँ',
        back: 'पीछे',
        strong: 'मजबूत',
        moderate: 'मध्यम',
        high: 'उच्च',
        medium: 'औसत',
        otc: 'ओटीसी',
        regular: 'नियमित',
        mainSignalBtn: 'सिग्नल प्राप्त करें',
        newsTime: 'समय',
        newsPriority: 'प्राथमिकता',
        newsTimeLeft: 'बचा हुआ समय',
        newsEvent: 'घटना',
        newsPrev: 'पिछला',
        newsForecast: 'अनुमान',
        impactLow: 'कम',
        impactMedium: 'मध्यम',
        impactHigh: 'उच्च',
        calcTableTitle: 'ओवरलैप तालिका',
        calcStep: 'कदम',
        calcBet: 'शर्त',
        calcProfit: 'लाभ',
        calcSimTitle: 'सिमुलेशन (100 ट्रेड)',
        allAssets: 'संपत्ति'
    },
    es: {
        syncing: 'SINCRONIZANDO...',
        standard: 'ESTÁNDAR',
        platinum: 'ACCESO VIP',
        analyze: 'OBTENER SEÑAL',
        entry: 'ENTRADA:',
        call: 'COMPRA ↗',
        put: 'VENTA ↘',
        crypto: 'CRIPTO',
        forex: 'DIVISAS',
        forex_otc: 'DIVISAS OTC',
        stocks: 'ACCIONES OTC',
        commodities: 'MATERIAS PRIMAS OTC',
        indices: 'ÍNDICES',
        assetsBtn: '📈 ACTIVOS',
        educationBtn: '🎓 EDUCACIÓN',
        calcBtn: '🧮 CALCULADORA',
        newsBtn: '📰 NOTICIAS',
        indicatorsBtn: '📉 INDICADORES',
        indicatorsPanelTitle: 'INDICADORES',
        expiration: 'TIEMPO DE EXPIRACIÓN:',
        search: 'Buscar activo...',
        selectExp: 'SELECCIONAR EXPIRACIÓN:',
        notFound: 'No se encontró nada',
        updatedAt: 'Actualizado:',
        loading: 'CARGANDO...',
        basics: 'Básicos',
        books: 'Libros',
        deposit: 'Depósito ($)',
        firstBet: 'Primera apuesta (%)',
        multiplier: 'Multiplicador',
        levels: 'Niveles',
        payout: 'Pago (%)',
        statsFirstBet: 'Primera apuesta',
        statsRisk: 'Riesgo total',
        statsRiskPerc: 'Riesgo de depósito',
        survivalMsg: 'El depósito durará {n} pasos seguidos.',
        runSim: 'EJECUTAR',
        winrate: 'Tasa de ganancias (%)',
        balance: 'Saldo:',
        lossSeries: 'Serie de pérdidas:',
        drawdown: 'Reducción:',
        recommendation: 'Recomendación',
        safeBetPrefix: 'Primera apuesta segura con un riesgo del ',
        safeBetSuffix: '%:',
        statuses: [
            'Inicializando red neuronal...',
            'Analizando volatilidad actual...',
            'Comprobando volúmenes de clústeres...',
            'Buscando entrada óptima...',
            'Finalizando pronóstico...'
        ],
        confidence: 'CONFIANZA',
        accuracy: 'PRECISIÓN',
        market: 'MERCADO',
        strength: 'ESTABILIDAD',
        volume: 'VOLUMEN',
        time: 'TIEMPO',
        validUntil: 'VÁLIDO HASTA',
        repeat: 'Repetir',
        back: 'Atrás',
        strong: 'Fuerte',
        moderate: 'Moderado',
        high: 'Alto',
        medium: 'Medio',
        otc: 'OTC',
        regular: 'Regular',
        mainSignalBtn: 'OBTENER SEÑAL',
        newsTime: 'Tiempo',
        newsPriority: 'Prioridad',
        newsTimeLeft: 'Tiempo Restante',
        newsEvent: 'Evento',
        newsPrev: 'Ant.',
        newsForecast: 'Pronóstico',
        impactLow: 'Bajo',
        impactMedium: 'Medio',
        impactHigh: 'Alto',
        calcTableTitle: 'Tabla de superposición',
        calcStep: 'Paso',
        calcBet: 'Apuesta',
        calcProfit: 'Beneficio',
        calcSimTitle: 'Simulación (100 operaciones)',
        allAssets: 'ACTIVOS'
    },
    fr: {
        syncing: 'SYNCHRONISATION...',
        standard: 'STANDARD',
        platinum: 'ACCÈS VIP',
        analyze: 'OBTENIR LE SIGNAL',
        entry: 'ENTRÉE:',
        call: 'ACHAT ↗',
        put: 'VENTE ↘',
        crypto: 'CRYPTO',
        forex: 'DEVISES',
        forex_otc: 'DEVISES OTC',
        stocks: 'ACTIONS OTC',
        commodities: 'MATIÈRES PREMIÈRES OTC',
        indices: 'INDICES',
        assetsBtn: '📈 ACTIFS',
        educationBtn: '🎓 ÉDUCATION',
        calcBtn: '🧮 CALCULATRICE',
        newsBtn: '📰 NOUVELLES',
        indicatorsBtn: '📉 INDICATEURS',
        indicatorsPanelTitle: 'INDICATEURS',
        expiration: 'TEMPS D\'EXPIRATION:',
        search: 'Rechercher actif...',
        selectExp: 'SÉLECTIONNER EXPIRATION:',
        notFound: 'Rien trouvé',
        updatedAt: 'Mis à jour:',
        loading: 'CHARGEMENT...',
        basics: 'Bases',
        books: 'Livres',
        deposit: 'Dépôt ($)',
        firstBet: 'Premier pari (%)',
        multiplier: 'Multiplicateur',
        levels: 'Niveaux',
        payout: 'Paiement (%)',
        statsFirstBet: 'Premier pari',
        statsRisk: 'Risque total',
        statsRiskPerc: 'Risque de dépôt',
        survivalMsg: 'Le dépôt durera {n} étapes de suite.',
        runSim: 'LANCER',
        winrate: 'Taux de réussite (%)',
        balance: 'Solde:',
        lossSeries: 'Série de pertes:',
        drawdown: 'Baisse:',
        recommendation: 'Recommandation',
        safeBetPrefix: 'Première mise sûre à ',
        safeBetSuffix: '% de risque:',
        statuses: [
            'Initialisation du réseau neuronal...',
            'Analyse de la volatilité actuelle...',
            'Vérification des volumes...',
            'Recherche de l\'entrée optimale...',
            'Finalisation des prévisions...'
        ],
        confidence: 'CONFIANCE',
        accuracy: 'PRÉCISION',
        market: 'MARCHÉ',
        strength: 'STABILITÉ',
        volume: 'VOLUME',
        time: 'TEMPS',
        validUntil: 'VALIDE JUSQU\'À',
        repeat: 'Répéter',
        back: 'Retour',
        strong: 'Fort',
        moderate: 'Modéré',
        high: 'Haut',
        medium: 'Moyen',
        otc: 'OTC',
        regular: 'Régulier',
        mainSignalBtn: 'OBTENIR LE SIGNAL',
        newsTime: 'Temps',
        newsPriority: 'Priorité',
        newsTimeLeft: 'Temps Restant',
        newsEvent: 'Événement',
        newsPrev: 'Préc.',
        newsForecast: 'Prévision',
        impactLow: 'Faible',
        impactMedium: 'Moyen',
        impactHigh: 'Élevé',
        calcTableTitle: 'Tableau de chevauchement',
        calcStep: 'Étape',
        calcBet: 'Mise',
        calcProfit: 'Profit',
        calcSimTitle: 'Simulation (100 trades)',
        allAssets: 'ACTIFS'
    }
};
let currentLang = 'ru';
let currentCategory = null;
let currentAsset = null;
let currentTimeframe = '1m';
let searchQuery = '';
const tg = window.Telegram.WebApp;
tg.expand();
if (tg.disableVerticalSwipes) {
    tg.disableVerticalSwipes();
}

// Toggles State
let assetsOpen = false;
let educationOpen = false;
let calculatorOpen = false;
let newsOpen = false;
let indicatorsOpen = false;

// DOM Elements
let assetsBtn, assetsPanel, educationBtn, educationPanel, calcBtn, calcPanel, newsBtn, newsPanel, indicatorsBtn, indicatorsPanel, mainGetSignalBtn;

function closeAllPanels() {
    assetsOpen = false;
    educationOpen = false;
    calculatorOpen = false;
    newsOpen = false;
    indicatorsOpen = false;

    if (assetsPanel) assetsPanel.classList.add('hidden');
    if (educationPanel) educationPanel.classList.add('hidden');
    if (calcPanel) calcPanel.classList.add('hidden');
    if (newsPanel) newsPanel.classList.add('hidden');
    if (indicatorsPanel) indicatorsPanel.classList.add('hidden');

    if (assetsBtn) assetsBtn.classList.remove('active');
    if (educationBtn) educationBtn.classList.remove('active');
    if (calcBtn) calcBtn.classList.remove('active');
    if (newsBtn) newsBtn.classList.remove('active');
    if (indicatorsBtn) indicatorsBtn.classList.remove('active');

    const arrows = ['assets-arrow', 'edu-arrow', 'calc-arrow', 'news-arrow', 'indicators-arrow'];
    arrows.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.transform = '';
    });
}

function toggleAssets() {
    if (!assetsOpen) {
        closeAllPanels();
        assetsOpen = true;
        if (assetsPanel) assetsPanel.classList.remove('hidden');
        if (assetsBtn) assetsBtn.classList.add('active');
    } else {
        assetsOpen = false;
        if (assetsPanel) assetsPanel.classList.add('hidden');
        if (assetsBtn) assetsBtn.classList.remove('active');
    }
}

function toggleEducation() {
    if (!educationOpen) {
        closeAllPanels();
        educationOpen = true;
        if (educationPanel) educationPanel.classList.remove('hidden');
        if (educationBtn) educationBtn.classList.add('active');
        const arrow = document.getElementById('edu-arrow');
        if (arrow) arrow.style.transform = 'rotate(180deg)';

        if (typeof currentEduTab !== 'undefined' && currentEduTab === 'basics') {
            const basicList = document.getElementById('edu-basics-panel');
            if (basicList && !basicList.querySelector('.lesson-card') && typeof renderBasics === 'function') renderBasics();
        }
    } else {
        educationOpen = false;
        if (educationPanel) educationPanel.classList.add('hidden');
        if (educationBtn) educationBtn.classList.remove('active');
        const arrow = document.getElementById('edu-arrow');
        if (arrow) arrow.style.transform = '';
    }
}

function toggleCalculator() {
    if (!calculatorOpen) {
        closeAllPanels();
        calculatorOpen = true;
        if (calcPanel) calcPanel.classList.remove('hidden');
        if (calcBtn) calcBtn.classList.add('active');
        const arrow = document.getElementById('calc-arrow');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        if (typeof initCalculator === 'function') initCalculator();
    } else {
        calculatorOpen = false;
        if (calcPanel) calcPanel.classList.add('hidden');
        if (calcBtn) calcBtn.classList.remove('active');
        const arrow = document.getElementById('calc-arrow');
        if (arrow) arrow.style.transform = '';
    }
}

function toggleNews() {
    if (!newsOpen) {
        closeAllPanels();
        newsOpen = true;
        if (newsPanel) newsPanel.classList.remove('hidden');
        if (newsBtn) newsBtn.classList.add('active');
        const arrow = document.getElementById('news-arrow');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        if (typeof fetchEconomicNews === 'function') fetchEconomicNews();
    } else {
        newsOpen = false;
        if (newsPanel) newsPanel.classList.add('hidden');
        if (newsBtn) newsBtn.classList.remove('active');
        const arrow = document.getElementById('news-arrow');
        if (arrow) arrow.style.transform = '';
    }
}

function toggleIndicators() {
    if (!indicatorsOpen) {
        closeAllPanels();
        indicatorsOpen = true;
        if (indicatorsPanel) indicatorsPanel.classList.remove('hidden');
        if (indicatorsBtn) indicatorsBtn.classList.add('active');
        const arrow = document.getElementById('indicators-arrow');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        if (typeof renderIndicators === 'function') renderIndicators();
    } else {
        indicatorsOpen = false;
        if (indicatorsPanel) indicatorsPanel.classList.add('hidden');
        if (indicatorsBtn) indicatorsBtn.classList.remove('active');
        const arrow = document.getElementById('indicators-arrow');
        if (arrow) arrow.style.transform = '';
    }
}


function initApp() {
    const tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
    }

    try {
        const userLang = tg?.initDataUnsafe?.user?.language_code;
        const savedLang = localStorage.getItem('user_lang');

        if (savedLang && TRANSLATIONS[savedLang]) {
            currentLang = savedLang;
        } else if (userLang && TRANSLATIONS[userLang]) {
            currentLang = userLang;
        } else {
            currentLang = 'en';
        }

        updateLangIcon();

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
        startPriceUpdates(); // Try connecting to the quote server
    } catch (e) { console.error(e); }
}

const langIcons = { ru: '🇷🇺', en: '🇬🇧', hi: '🇮🇳', es: '🇪🇸', fr: '🇫🇷' };

function updateLangIcon() {
    const iconSpan = document.getElementById('current-lang-icon');
    if (iconSpan) iconSpan.innerText = langIcons[currentLang] || '🌐';
}

function setupLocalization() {
    const t = TRANSLATIONS[currentLang];
    if (!t) return;

    // Main UI Elements
    const q = (sel) => document.querySelector(sel);
    const get = (id) => document.getElementById(id);

    if (q('.loader')) q('.loader').innerText = t.syncing;
    if (get('get-signal-btn')) get('get-signal-btn').innerText = t.analyze;
    if (get('main-get-signal-btn')) get('main-get-signal-btn').innerText = t.mainSignalBtn;
    if (get('asset-search')) get('asset-search').placeholder = t.search;
    if (get('label-expiration')) get('label-expiration').innerText = t.selectExp;

    // Toggle Buttons
    if (get('assets-btn-text')) get('assets-btn-text').innerText = t.assetsBtn;
    if (get('education-btn-text')) get('education-btn-text').innerText = t.educationBtn;
    if (get('calc-btn-text')) get('calc-btn-text').innerText = t.calcBtn;
    if (get('news-btn-text')) get('news-btn-text').innerText = t.newsBtn;
    if (get('indicators-btn-text')) get('indicators-btn-text').innerText = t.indicatorsBtn;

    // Panel Headers & Tabs
    const tabBasics = get('tab-basics');
    const tabBooks = get('tab-books');
    if (tabBasics) tabBasics.innerText = t.basics;
    if (tabBooks) tabBooks.innerText = t.books;

    // Calculator Labels
    const setLabel = (id, text) => { const el = get(id); if (el) el.innerText = text; };
    setLabel('label-deposit', t.deposit);
    setLabel('label-first-bet', t.firstBet);
    setLabel('label-multiplier', t.multiplier);
    setLabel('label-levels', t.levels);
    setLabel('label-payout', t.payout);
    setLabel('label-winrate', t.winrate);
    setLabel('label-max-risk', t.recommendation);
    setLabel('label-safe-bet-prefix', t.safeBetPrefix);
    setLabel('label-safe-bet-suffix', t.safeBetSuffix);

    setLabel('stat-label-first-bet', t.statsFirstBet);
    setLabel('stat-label-risk', t.statsRisk);
    setLabel('stat-label-risk-perc', t.statsRiskPerc);

    setLabel('run-sim-btn', t.runSim);
    setLabel('sim-label-balance', t.balance);
    setLabel('sim-label-loss', t.lossSeries);
    setLabel('sim-label-drawdown', t.drawdown);
    setLabel('calc-table-title', t.calcTableTitle);
    setLabel('calc-th-step', t.calcStep);
    setLabel('calc-th-bet', t.calcBet);
    setLabel('calc-th-profit', t.calcProfit);
    setLabel('calc-sim-title', t.calcSimTitle);
    setLabel('label-valid-until', t.validUntil);
    setLabel('label-confidence', t.confidence);
    setLabel('label-accuracy', t.accuracy);
    setLabel('label-market-info', t.market);
    setLabel('label-strength-info', t.strength);
    setLabel('label-volume-info', t.volume);
    setLabel('label-time-info', t.time);
    setLabel('repeat-signal-btn', t.repeat);
    setLabel('back-to-assets-btn', t.back);

    // Set the main button text to the current category name, or default "ASSETS"
    const categoryNameEl = get('current-category-name');
    if (categoryNameEl) {
        if (currentCategory && t[currentCategory]) {
            categoryNameEl.innerText = t[currentCategory];
        } else {
            categoryNameEl.innerText = t.allAssets || (currentLang === 'ru' ? 'АКТИВЫ' : 'ASSETS');
        }
    }

    document.querySelectorAll('.dropdown-item').forEach(btn => {
        const cat = btn.dataset.category;
        if (t[cat]) {
            btn.innerText = t[cat];
        }
    });

    // Re-render panels if they are open
    const eduBasics = get('edu-basics-panel');
    const eduBooks = get('edu-books-panel');
    const newsPanel = get('news-panel');
    if (eduBasics && !eduBasics.classList.contains('hidden')) renderBasics();
    if (eduBooks && !eduBooks.classList.contains('hidden')) renderBooks();
    if (newsPanel && !newsPanel.classList.contains('hidden')) renderNews();

    // v41: Clear defunct labels
    const confLabel = get('label-confidence');
    const accLabel = get('label-accuracy');
    const volLabel = get('label-volume-info');
    if (confLabel) confLabel.innerText = '';
    if (accLabel) accLabel.innerText = '';
    if (volLabel) volLabel.parentElement.style.display = 'none';

    // Re-run calculations to update dynamic translated strings such as survivalMsg
    if (typeof runCalculations === 'function') {
        runCalculations();
    }
}

function setupEventListeners() {
    // Initialize global DOM elements if not already assigned
    assetsBtn = document.getElementById('assets-btn');
    assetsPanel = document.getElementById('assets-panel');
    educationBtn = document.getElementById('education-btn');
    educationPanel = document.getElementById('education-panel');
    calcBtn = document.getElementById('calc-btn');
    calcPanel = document.getElementById('calc-panel');
    newsBtn = document.getElementById('news-btn');
    newsPanel = document.getElementById('news-panel');
    indicatorsBtn = document.getElementById('indicators-toggle-btn');
    indicatorsPanel = document.getElementById('indicators-panel');
    mainGetSignalBtn = document.getElementById('main-get-signal-btn');

    const dropdownContainer = document.querySelector('.category-dropdown-container');
    const toggleBtn = document.getElementById('category-toggle');
    const currentCatName = document.getElementById('current-category-name');

    // Panel Toggles
    if (assetsBtn) assetsBtn.onclick = (e) => { e.stopPropagation(); toggleAssets(); };
    if (educationBtn) educationBtn.onclick = (e) => { e.stopPropagation(); toggleEducation(); };
    if (calcBtn) calcBtn.onclick = (e) => { e.stopPropagation(); toggleCalculator(); };
    if (newsBtn) newsBtn.onclick = (e) => { e.stopPropagation(); toggleNews(); };
    if (indicatorsBtn) indicatorsBtn.onclick = (e) => { e.stopPropagation(); toggleIndicators(); };

    if (mainGetSignalBtn) {
        mainGetSignalBtn.addEventListener('click', () => {
            if (!assetsOpen) toggleAssets();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Toggle category dropdown
    if (toggleBtn) {
        toggleBtn.onclick = (e) => {
            e.stopPropagation();
            dropdownContainer.classList.toggle('open');
            document.querySelector('.lang-selector-container')?.classList.remove('open');
        };
    }

    // Toggle language dropdown
    const langContainer = document.querySelector('.lang-selector-container');
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.onclick = (e) => {
            e.stopPropagation();
            langContainer.classList.toggle('open');
            if (dropdownContainer) dropdownContainer.classList.remove('open');
        };
    }

    // Close lesson detail
    const closeLessonBtn = document.getElementById('close-lesson');
    if (closeLessonBtn) {
        closeLessonBtn.onclick = () => {
            document.body.classList.remove('signal-active');
            const overlay = document.getElementById('lesson-overlay');
            if (overlay) {
                overlay.classList.remove('active');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        };
    }

    // Language item click
    document.querySelectorAll('.lang-item').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const newLang = btn.dataset.lang;
            if (TRANSLATIONS[newLang]) {
                currentLang = newLang;
                localStorage.setItem('user_lang', currentLang);
                updateLangIcon();
                setupLocalization();
                renderAssets();
                langContainer.classList.remove('open');

                // Update VIP badge text
                const urlParams = new URLSearchParams(window.location.search);
                const isVip = urlParams.get('vip') === 'true';
                const badge = document.getElementById('status-badge');
                if (badge) {
                    badge.innerText = isVip ? TRANSLATIONS[currentLang].platinum : TRANSLATIONS[currentLang].standard;
                }
            }
        };
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownContainer.classList.remove('open');
        }
        if (langContainer && !langContainer.contains(e.target)) {
            langContainer.classList.remove('open');
        }
    });

    document.querySelectorAll('.dropdown-item').forEach(btn => {
        if (btn.dataset.category === currentCategory) btn.classList.add('active');
        btn.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dropdown-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;

            dropdownContainer.classList.remove('open');
            renderAssets();
        };
    });

    const searchInput = document.getElementById('asset-search');
    if (searchInput) {
        searchInput.oninput = (e) => {
            searchQuery = e.target.value.toLowerCase().trim();

            if (searchQuery && !assetsOpen) {
                // Auto-open assets panel when searching if it was closed
                toggleAssets();
            }

            renderAssets();
        };
    }

    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTimeframe = btn.dataset.tf;
        };
    });

    document.getElementById('close-signal').onclick = () => {
        document.body.classList.remove('signal-active');
        document.getElementById('signal-overlay').classList.remove('active');
        setTimeout(() => document.getElementById('signal-overlay').classList.add('hidden'), 300);
        if (signalTimerInterval) clearInterval(signalTimerInterval);
    };
    document.querySelectorAll('.dropdown-item').forEach(btn => {
        if (btn.dataset.category === currentCategory) btn.classList.add('active');
        btn.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dropdown-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;

            // Update button text to selected category
            const categoryNameEl = document.getElementById('current-category-name');
            const t = TRANSLATIONS[currentLang];
            if (currentCategory && t[currentCategory]) {
                categoryNameEl.innerText = t[currentCategory];
            } else {
                categoryNameEl.innerText = t.allAssets || 'ВСЕ АКТИВЫ';
            }

            document.querySelector('.category-dropdown-container').classList.remove('open');
            renderAssets();
        };
    });

    document.getElementById('get-signal-btn').onclick = generateSignal;
}

function renderAssets() {
    const container = document.getElementById('asset-list');
    container.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    let filtered = [];

    if (searchQuery) {
        // Global search across all categories
        for (const cat in ASSETS_DB) {
            const matches = ASSETS_DB[cat].filter(a => {
                const nameMatch = a.name.toLowerCase().includes(searchQuery);
                const idMatch = a.id.toLowerCase().includes(searchQuery);

                // Also check translated name from the dictionary for current language
                // We'll check the 'ru' translation specifically or whatever is currently selected
                const t = TRANSLATIONS[currentLang];
                const transNameMatch = (t && t[a.id]) ? t[a.id].toLowerCase().includes(searchQuery) : false;

                return nameMatch || idMatch || transNameMatch;
            });

            matches.forEach(m => {
                const item = { ...m, dictCategory: cat };
                if (!filtered.find(f => f.id === item.id)) {
                    filtered.push(item);
                }
            });
        }
    } else {
        // Normal category view
        if (!currentCategory) {
            container.innerHTML = ``;
            return;
        }
        filtered = ASSETS_DB[currentCategory].map(a => ({ ...a, dictCategory: currentCategory }));
    }

    if (filtered.length === 0 && searchQuery) {
        container.innerHTML = `<div class="empty-state"><p style="color:#666; font-weight:700;">${t.notFound}</p></div>`;
        return;
    }

    filtered.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'asset-item';

        const iconsRaw = asset.icons || [asset.icon];
        const icons = Array.isArray(iconsRaw) ? iconsRaw : [iconsRaw];
        const isMulti = icons.length > 1;

        let iconsHtml = `<div class="asset-icon-wrapper ${isMulti ? 'multi' : 'single'}">`;

        icons.forEach((src, idx) => {
            const fallbacks = buildFallbacks(asset, src, idx);
            if (src) {
                iconsHtml += `<img src="${src}" class="asset-icon" 
                    data-fallbacks='${JSON.stringify(fallbacks)}'
                    onerror="tryNextFallback(this)">`;
            }
        });
        iconsHtml += `</div>`;

        const transCat = asset.dictCategory || currentCategory;
        const translatedCategory = t[transCat] || asset.category;

        card.innerHTML = `
            ${iconsHtml}
            <div class="asset-info">
                <div class="asset-name">${asset.name}</div>
                <div class="asset-category">${translatedCategory}</div>
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
    const iconsRaw = asset.icons || [asset.icon];
    const icons = Array.isArray(iconsRaw) ? iconsRaw : [iconsRaw];
    const isMulti = icons.length > 1;

    iconContainer.className = `signal-asset-icon-wrapper ${isMulti ? 'multi' : 'single'}`;
    iconContainer.style.background = 'none';

    icons.forEach((src, idx) => {
        const fallbacks = buildFallbacks(asset, src, idx);
        if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'asset-icon';
            img.dataset.fallbacks = JSON.stringify(fallbacks);
            img.onerror = function () { tryNextFallback(this); };
            iconContainer.appendChild(img);
        }
    });

    document.getElementById('signal-overlay').classList.remove('hidden');
    document.body.classList.add('signal-active');
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

    // 1. Removed Confidence/Accuracy/Volume (v41)
    const isCall = Math.random() > 0.5;
    const strength = Math.random() > 0.3 ? t.strong : t.moderate;

    // 2. Market Detection
    const isOtc = currentAsset.id.toLowerCase().includes('otc') || currentAsset.category.toLowerCase().includes('otc');
    const marketType = isOtc ? t.otc : t.regular;

    // 3. Update UI
    if (document.getElementById('signal-confidence')) document.getElementById('signal-confidence').innerText = '';
    if (document.getElementById('signal-accuracy')) document.getElementById('signal-accuracy').innerText = '';

    document.getElementById('signal-asset-name-large').innerText = currentAsset.name;
    document.getElementById('signal-market').innerText = marketType;
    document.getElementById('signal-strength').innerText = strength;
    document.getElementById('signal-timeframe-val').innerText = currentTimeframe.toUpperCase();

    const dirMarker = document.getElementById('signal-direction-marker');
    const dirIcon = document.getElementById('signal-direction-icon');
    const dirText = document.getElementById('signal-direction-text');

    if (isCall) {
        dirMarker.className = 'direction-marker call';
        dirIcon.innerText = '↑';
        dirText.innerText = t.call.split(' ')[0]; // Take only text part
    } else {
        dirMarker.className = 'direction-marker put';
        dirIcon.innerText = '↓';
        dirText.innerText = t.put.split(' ')[0];
    }

    // 4. Timer Logic (Dynamic duration based on expiration v41)
    const duration = timeframeToSeconds(currentTimeframe);
    startSignalTimer(duration);

    if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
}

function timeframeToSeconds(tf) {
    const val = parseInt(tf);
    if (tf.includes('s')) return val;
    if (tf.includes('m')) return val * 60;
    if (tf.includes('h')) return val * 3600;
    return 60; // Default
}

let signalTimerInterval = null;
function startSignalTimer(durationSeconds) {
    if (signalTimerInterval) clearInterval(signalTimerInterval);

    let timeLeft = durationSeconds;
    const timeEl = document.getElementById('signal-valid-time');
    const progressFill = document.getElementById('timer-progress-bar');

    const updateUI = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timeEl.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        const progress = (timeLeft / durationSeconds) * 100;
        progressFill.style.width = progress + '%';
    };

    updateUI();

    signalTimerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(signalTimerInterval);
            timeLeft = 0;
            // Optionally disable signal or show "Expired"
        }
        updateUI();
    }, 1000);
}

function startPriceUpdates() {
    // Dynamic IP detection for flexibility
    let ws = null;

    function connectWs(isFallback = false) {
        const urlParams = new URLSearchParams(window.location.search);
        const paramIp = urlParams.get('ip'); // ?ip=192.168.x.x
        const savedIp = localStorage.getItem('quote_server_ip');
        const defaultLocalIp = "127.0.0.1"; // Default to localhost
        const port = "8765";

        const host = window.location.hostname;
        const isLocalHost = host === 'localhost' || host === '127.0.0.1' || window.location.protocol === 'file:';

        let targetIp = paramIp || savedIp || (isLocalHost ? "127.0.0.1" : defaultLocalIp);

        let currentUrl = "";
        if (paramIp && (paramIp.startsWith('ws://') || paramIp.startsWith('wss://'))) {
            currentUrl = paramIp;
        } else if (host === "185.174.138.19.sslip.io" || host === "vm3997023.firstbyte.club") {
            // Production: use wss through nginx proxy
            currentUrl = `wss://${host}/ws`;
        } else if (paramIp && (paramIp.includes('ngrok') || paramIp.includes('cloudflare') || paramIp.includes('.app'))) {
            const cleanIp = paramIp.replace('https://', '').replace('http://', '');
            currentUrl = `wss://${cleanIp}`;
        } else {
            currentUrl = `ws://${targetIp}:${port}`;
        }

        console.log(`📡 Соединение с сервером котировок: ${currentUrl}... (${isFallback ? 'запасной' : 'основной'})`);

        if (paramIp) {
            localStorage.setItem('quote_server_ip', paramIp);
        }

        ws = new WebSocket(currentUrl);

        const connectionTimeout = setTimeout(() => {
            if (ws.readyState !== WebSocket.OPEN) {
                console.warn(`⏳ Тайм-аут ${currentUrl}, пробуем другой...`);
                ws.onclose = null;
                ws.close();
                connectWs(!isFallback);
            }
        }, 2500);

        ws.onopen = () => {
            clearTimeout(connectionTimeout);
            console.log(`✅ ПОДКЛЮЧЕНО К: ${currentUrl}`);
            const badge = document.getElementById('status-badge');
            if (badge) {
                badge.classList.remove('disconnected');
                badge.classList.add('connected');
            }
        };

        ws.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.action === 'update_quotes' && Array.isArray(msg.data)) {
                    msg.data.forEach(q => {
                        const assetId = q[0];
                        const price = parseFloat(q[1]);
                        const el = document.getElementById(`price-${assetId}`);
                        if (el && !isNaN(price)) {
                            const oldPrice = parseFloat(el.innerText) || price;
                            const decimals = (assetId.includes('btc') || assetId.includes('eth') || assetId.includes('index')) ? 2 : 5;
                            el.innerText = price.toFixed(decimals);

                            const changeEl = document.getElementById(`change-${assetId}`);
                            if (changeEl) {
                                const pct = ((price - oldPrice) / oldPrice) * 100;
                                let currentChange = parseFloat(changeEl.innerText) || 0;
                                currentChange += (isNaN(pct) ? 0 : pct);
                                if (Math.abs(currentChange) > 5) currentChange = currentChange > 0 ? 5 : -5;
                                changeEl.innerText = (currentChange >= 0 ? '+' : '') + currentChange.toFixed(3) + '%';
                                changeEl.className = 'asset-change ' + (currentChange >= 0 ? 'up' : 'down');
                            }
                        }
                    });
                }
            } catch (e) { }
        };

        ws.onclose = () => {
            clearTimeout(connectionTimeout);
            console.warn(`❌ Соединение ${currentUrl} прервано. Рестарт через 3сек...`);
            const badge = document.getElementById('status-badge');
            if (badge) {
                badge.classList.remove('connected');
                badge.classList.add('disconnected');
            }
            setTimeout(() => connectWs(!isFallback), 3000);
        };

        ws.onerror = () => ws.close();
    }

    connectWs(false);
}
function buildFallbacks(asset, primaryUrl, idx) {
    const fallbacks = [];
    if (asset.category === 'Crypto') {
        const sym = asset.id.replace(/_otc$/, '').replace('bitcoin', 'btc').replace('ethereum', 'eth').replace('dash', 'dash');
        fallbacks.push(`https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/32/color/${sym}.png`);
        fallbacks.push(`https://s2.coinmarketcap.com/static/cloud/img/portfolio_logo.svg`);
    }
    if (asset.category === 'Stocks') {
        const domain = (typeof primaryUrl === 'string') ? primaryUrl.replace('https://logo.clearbit.com/', '') : '';
        fallbacks.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=64`);
    }
    fallbacks.push(`https://flagcdn.com/w40/un.png`);
    return fallbacks;
}

function tryNextFallback(img) {
    try {
        const fallbacks = JSON.parse(img.dataset.fallbacks || '[]');
        if (fallbacks.length > 0) {
            img.dataset.fallbacks = JSON.stringify(fallbacks.slice(1));
            img.src = fallbacks[0];
        } else {
            img.onerror = null;
            img.style.display = 'none';
            const canvas = document.createElement('canvas');
            canvas.width = 40; canvas.height = 40;
            const ctx = canvas.getContext('2d');
            const colors = ['#f7931a', '#627eea', '#00b4d8', '#2ecc71', '#9b59b6'];
            const color = colors[img.closest('.asset-item') ? Array.from(img.closest('.asset-item').parentNode.children).indexOf(img.closest('.asset-item')) % colors.length : 0];
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(20, 20, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 18px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const label = (img.closest('.asset-info') ? '' : img.alt || '?').charAt(0).toUpperCase() || '?';
            ctx.fillText(label, 20, 20);
            img.style.display = '';
            img.src = canvas.toDataURL();
        }
    } catch (e) { img.onerror = null; }
}

// ─────────────────────────────────────────────────
//  EDUCATION SECTION
// ─────────────────────────────────────────────────

let currentEduTab = 'basics';

function getBasics(lang) {
    const content = MARKET_CONTENT[lang] || MARKET_CONTENT['en'];
    return [...(content.COURSES || []), ...(content.LESSONS || [])];
}

function renderBasics() {
    const panel = document.getElementById('edu-basics-panel');
    if (!panel) return;
    panel.innerHTML = '';

    const basics = getBasics(currentLang);
    basics.forEach(item => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `
            <div class="lesson-card-icon">${item.icon}</div>
            <div class="lesson-card-info">
                <div class="lesson-card-title">${item.title}</div>
                <div class="lesson-card-desc">${item.desc}</div>
            </div>
            <div class="lesson-card-arrow">›</div>
        `;
        card.onclick = () => openLesson(item);
        panel.appendChild(card);
    });
}

function renderBooks() {
    const panel = document.getElementById('edu-books-panel');
    if (!panel) return;
    panel.innerHTML = '';
    const repoBase = 'https://media.githubusercontent.com/media/zandan53alex-droid/binar-app/master/webapp/books/';
    const content = MARKET_CONTENT[currentLang] || MARKET_CONTENT['en'];
    const books = content.BOOKS || [];
    books.forEach(book => {
        const card = document.createElement('a');
        card.className = 'book-card';
        card.href = repoBase + encodeURIComponent(book.file);
        card.target = '_blank';
        card.rel = 'noopener';
        card.innerHTML = `
            <div class="book-card-icon">${book.icon}</div>
            <div class="book-card-info">
                <div class="book-card-title">${book.title}</div>
                <div class="book-card-size">PDF · ${book.size}</div>
            </div>
            <div class="book-card-arrow">↗</div>
        `;
        panel.appendChild(card);
    });
}

function renderIndicators() {
    const list = document.getElementById('indicators-list');
    if (!list) return;
    list.innerHTML = '';
    const content = MARKET_CONTENT[currentLang] || MARKET_CONTENT['en'];
    const indicators = content.INDICATORS || [];
    indicators.forEach(ind => {
        const card = document.createElement('div');
        card.className = 'indicator-card';
        card.innerHTML = `
            <div class="indicator-card-icon">${ind.icon}</div>
            <div class="indicator-card-info">
                <div class="indicator-card-title">${ind.title}</div>
                <div class="indicator-card-desc">${ind.desc}</div>
            </div>
            <div class="indicator-card-arrow">›</div>
        `;
        card.onclick = () => openLesson(ind);
        list.appendChild(card);
    });
}

function switchEduTab(tab) {
    currentEduTab = tab;
    const basicsPanel = document.getElementById('edu-basics-panel');
    const booksPanel = document.getElementById('edu-books-panel');
    const tabBasics = document.getElementById('tab-basics');
    const tabBooks = document.getElementById('tab-books');

    if (tab === 'basics') {
        basicsPanel.classList.remove('hidden');
        booksPanel.classList.add('hidden');
        tabBasics.classList.add('active');
        tabBooks.classList.remove('active');
        if (!basicsPanel.querySelector('.lesson-card')) renderBasics();
    } else {
        booksPanel.classList.remove('hidden');
        basicsPanel.classList.add('hidden');
        tabBooks.classList.add('active');
        tabBasics.classList.remove('active');
        if (!booksPanel.querySelector('.book-card')) renderBooks();
    }
}

function openLesson(lesson) {
    document.getElementById('lesson-detail-title').innerText = lesson.title;
    document.getElementById('lesson-detail-body').innerHTML = lesson.text;

    const img = document.getElementById('lesson-detail-img');
    if (lesson.img) {
        img.src = lesson.img;
        img.style.display = '';
    } else {
        img.style.display = 'none';
    }

    const overlay = document.getElementById('lesson-overlay');
    overlay.classList.remove('hidden');
    document.body.classList.add('signal-active');
    setTimeout(() => overlay.classList.add('active'), 10);
}

// ─── News & Economic Calendar Logic ──────────────────────────
let cachedNews = [];
const NINJA_API_KEY = 'E91Gz9V2wAOM83Luy2m6XYIrWkRYN4pz';

// Mapping 2-letter country codes to Flags and common Currencies
const COUNTRY_DATA = {
    'US': { flag: '🇺🇸', cur: 'USD' }, 'EU': { flag: '🇪🇺', cur: 'EUR' },
    'GB': { flag: '🇬🇧', cur: 'GBP' }, 'JP': { flag: '🇯🇵', cur: 'JPY' },
    'CA': { flag: '🇨🇦', cur: 'CAD' }, 'AU': { flag: '🇦🇺', cur: 'AUD' },
    'CH': { flag: '🇨🇭', cur: 'CHF' }, 'CN': { flag: '🇨🇳', cur: 'CNY' },
    'NZ': { flag: '🇳🇿', cur: 'NZD' }, 'BR': { flag: '🇧🇷', cur: 'BRL' },
    'IN': { flag: '🇮🇳', cur: 'INR' }, 'DE': { flag: '🇩🇪', cur: 'EUR' },
    'FR': { flag: '🇫🇷', cur: 'EUR' }, 'IT': { flag: '🇮🇹', cur: 'EUR' }
};

async function fetchEconomicNews() {
    const listContainer = document.getElementById('news-list');
    const updateStatus = document.getElementById('news-update-time');
    const FMP_API_KEY = 'IiNiPuFE8Yfxp1Ka1tXfNdIq2CA1DF1EFnCPIAig';

    try {
        const now = new Date();
        const future = new Date(now.getTime() + (48 * 60 * 60 * 1000));
        const formatDate = (d) => d.toISOString().split('T')[0];
        const from = formatDate(now);
        const to = formatDate(future);

        // Fetching economic calendar for 48h
        const newsSource = `https://financialmodelingprep.com/api/v3/economic_calendar?from=${from}&to=${to}&apikey=${FMP_API_KEY}`; 
        
        const response = await fetch(newsSource);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Invalid calendar format');

        // Map FMP data to our structure
        cachedNews = data.slice(0, 30).map(item => {
            const eventTime = new Date(item.date);
            const importance = (item.impact === 'High') ? 3 : ((item.impact === 'Medium') ? 2 : 1);
            const dotColor = importance === 3 ? '#ff4d4d' : (importance === 2 ? '#ffb900' : '#4ade80');
            const impactName = importance === 3 ? 'Высокий' : (importance === 2 ? 'Средний' : 'Низкий');

            // Calculate "Time Left"
            const diffMs = eventTime - new Date();
            let timeLeft = '--';
            if (diffMs > 0) {
                const totalMins = Math.floor(diffMs / 60000);
                const hrs = Math.floor(totalMins / 60);
                const mins = totalMins % 60;
                timeLeft = `${hrs}h. ${mins}m.`;
            } else {
                timeLeft = 'Завершено';
            }

            return {
                time: eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                eventTime: eventTime,
                currency: item.currency || 'USD',
                event: item.event || 'Economic Event',
                importance: importance,
                dotColor: dotColor,
                impactName: impactName,
                timeLeft: timeLeft,
                previous: item.previous || '-',
                forecast: item.estimate || '-'
            };
        });

        renderNews();
        if (updateStatus) updateStatus.innerText = `Обновлено: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    } catch (error) {
        console.error('Calendar Fetch Error:', error);
        if (listContainer) listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: #ff4444; font-size: 0.8rem; font-weight:700;">События временно недоступны<br><span style="font-size:0.6rem; opacity:0.7;">${error.message}</span></div>`;
    }
}

function renderNews() {
    const listContainer = document.getElementById('news-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    if (cachedNews.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: #555;">${t.notFound}</div>`;
        return;
    }

    const FLAG_MAP = {
        'USD': '🇺🇸', 'EUR': '🇪🇺', 'GBP': '🇬🇧', 'JPY': '🇯🇵',
        'CAD': '🇨🇦', 'AUD': '🇦🇺', 'CHF': '🇨🇭', 'NZD': '🇳🇿',
        'CNY': '🇨🇳', 'RUB': '🇷🇺', 'GOLD': '🟡', 'SILVER': '⚪'
    };

    let tableHTML = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem; color: #d1d5db; min-width: 400px; table-layout: fixed;">
                <thead>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); color: #888; text-align: left;">
                        <th style="padding: 10px 5px; width: 50px;">${t.newsTime}</th>
                        <th style="padding: 10px 5px; width: 80px;">${t.newsPriority}</th>
                        <th style="padding: 10px 5px; width: 100px;">${t.newsTimeLeft}</th>
                        <th style="padding: 10px 5px;">${t.newsEvent}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    cachedNews.forEach(item => {
        const flag = FLAG_MAP[item.currency] || '🌐';
        const dots = `<span style="color: ${item.dotColor}; font-size: 0.8rem; letter-spacing: -2px;">${'●'.repeat(item.importance)}</span>`;

        tableHTML += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.03);">
                <td style="padding: 12px 5px; font-weight: 700; color: #fff; vertical-align: top;">${item.time}</td>
                <td style="padding: 12px 5px; vertical-align: top;">
                    <div style="line-height: 1;">${dots}</div>
                    <div style="font-size: 0.6rem; color: #888; margin-top: 2px;">${item.impactName}</div>
                </td>
                <td style="padding: 12px 5px; color: #aaa; vertical-align: top; font-weight: 500;">${item.timeLeft}</td>
                <td style="padding: 12px 5px; vertical-align: top; line-height: 1.2;">
                    <span style="display: inline-flex; align-items: center;">
                        <span style="font-size: 0.9rem; margin-right: 6px;">${flag}</span>
                        <span style="font-weight: 500; color: #eee;">${item.event}</span>
                    </span>
                </td>
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;

    listContainer.innerHTML = tableHTML;
}

// Update countdowns every minute
setInterval(() => {
    if (cachedNews.length > 0) {
        cachedNews.forEach(item => {
            const diffMs = item.eventTime - new Date();
            if (diffMs > 0) {
                const totalMins = Math.floor(diffMs / 60000);
                const hrs = Math.floor(totalMins / 60);
                const mins = totalMins % 60;
                item.timeLeft = `${hrs}h. ${mins}m.`;
            } else {
                item.timeLeft = 'Завершено';
            }
        });
        if (newsPanel && !newsPanel.classList.contains('hidden')) renderNews();
    }
}, 60000);

// Auto update data every 10 mins
setInterval(fetchEconomicNews, 600000);

// ─── Calculator Logic ─────────────────────────────────────────
let growthChart = null;

function initCalculator() {
    const inputs = ['calc-deposit', 'calc-first-bet-perc', 'calc-multiplier', 'calc-levels', 'calc-payout', 'calc-max-risk'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', runCalculations);
    });
    const runBtn = document.getElementById('run-sim-btn');
    if (runBtn) runBtn.addEventListener('click', runSimulation);
    runCalculations();
}

function runCalculations() {
    const t = TRANSLATIONS[currentLang];
    const depositEl = document.getElementById('calc-deposit');
    const firstBetPercEl = document.getElementById('calc-first-bet-perc-perc'); // Fixed logic for ID
    const multiplierEl = document.getElementById('calc-multiplier');
    const levelsEl = document.getElementById('calc-levels');
    const payoutEl = document.getElementById('calc-payout');

    if (!depositEl) return;

    const deposit = parseFloat(depositEl.value) || 0;
    const firstBetPerc = parseFloat(document.getElementById('calc-first-bet-perc')?.value || 1);
    const multiplier = parseFloat(multiplierEl?.value || 2.2);
    const levels = parseInt(levelsEl?.value || 5);
    const payout = parseFloat(payoutEl?.value || 82) / 100;

    const firstBet = (deposit * (firstBetPerc / 100));
    const resFirstBet = document.getElementById('res-first-bet');
    if (resFirstBet) resFirstBet.innerText = '$' + firstBet.toFixed(2);

    let totalRisk = 0;
    let currentBet = firstBet;
    const tableBody = document.getElementById('calc-table-body');
    if (tableBody) {
        tableBody.innerHTML = '';
        for (let i = 1; i <= levels; i++) {
            totalRisk += currentBet;
            const potentialProfit = (currentBet * payout);

            const row = `<tr>
                <td>${i}</td>
                <td>$${currentBet.toFixed(2)}</td>
                <td style="color: #00dc96">+$${potentialProfit.toFixed(2)}</td>
            </tr>`;
            tableBody.innerHTML += row;
            currentBet *= multiplier;
        }
    }

    const riskPerc = (totalRisk / deposit) * 100;
    const resTotalRisk = document.getElementById('res-total-risk');
    const resRiskPerc = document.getElementById('res-risk-perc');
    if (resTotalRisk) resTotalRisk.innerText = '$' + totalRisk.toFixed(2);
    if (resRiskPerc) resRiskPerc.innerText = riskPerc.toFixed(1) + '%';

    // Survival msg
    let survivalCount = 0;
    let tempRisk = 0;
    let tempBet = firstBet;
    while (tempRisk + tempBet <= deposit && survivalCount < 15) {
        tempRisk += tempBet;
        tempBet *= multiplier;
        survivalCount++;
    }
    const survivalMsg = t.survivalMsg.replace('{n}', survivalCount);
    const survivalEl = document.getElementById('calc-survival-msg');
    if (survivalEl) {
        survivalEl.innerText = survivalMsg;
        survivalEl.style.color = survivalCount < levels ? '#f44336' : '#00dc96';
    }

    // Safe bet calc
    const maxRiskLimit = parseFloat(document.getElementById('calc-max-risk')?.value || 10);
    const maxAllowedMoney = deposit * (maxRiskLimit / 100);
    let sumFactor = 0;
    for (let l = 0; l < levels; l++) sumFactor += Math.pow(multiplier, l);
    const safeStartingBet = maxAllowedMoney / sumFactor;

    const resSafeBet = document.getElementById('res-safe-bet');
    if (resSafeBet) resSafeBet.innerText = '$' + safeStartingBet.toFixed(2);
}

function runSimulation() {
    const deposit = parseFloat(document.getElementById('calc-deposit')?.value || 100);
    const firstBetPerc = parseFloat(document.getElementById('calc-first-bet-perc')?.value || 1);
    const multiplier = parseFloat(document.getElementById('calc-multiplier')?.value || 2.2);
    const levels = parseInt(document.getElementById('calc-levels')?.value || 5);
    const winrate = parseFloat(document.getElementById('calc-winrate')?.value || 58) / 100;
    const payout = parseFloat(document.getElementById('calc-payout')?.value || 82) / 100;

    let balance = deposit;
    let firstBet = balance * (firstBetPerc / 100);
    let history = [balance];
    let maxDrawdown = 0;
    let peak = balance;
    let maxLossSeries = 0;
    let currentLossSeries = 0;

    for (let i = 0; i < 100; i++) {
        let win = false;
        let bet = firstBet;

        for (let l = 0; l < levels; l++) {
            if (Math.random() < winrate) {
                balance += (bet * payout);
                win = true;
                currentLossSeries = 0;
                break;
            } else {
                balance -= bet;
                bet *= multiplier;
            }
            if (balance <= 0) break;
        }

        if (!win) {
            currentLossSeries++;
            if (currentLossSeries > maxLossSeries) maxLossSeries = currentLossSeries;
        }

        if (balance > peak) peak = balance;
        let dd = ((peak - balance) / peak) * 100;
        if (dd > maxDrawdown) maxDrawdown = dd;

        history.push(balance > 0 ? balance : 0);
        if (balance <= 0) break;
    }

    const simResPanel = document.getElementById('sim-results');
    if (simResPanel) {
        simResPanel.classList.remove('hidden');
        document.getElementById('sim-final-balance').innerText = '$' + balance.toFixed(2);
        document.getElementById('sim-max-loss').innerText = maxLossSeries;
        document.getElementById('sim-drawdown').innerText = maxDrawdown.toFixed(1) + '%';
        updateChart(history);
    }
}

function updateChart(data) {
    const canvas = document.getElementById('growthChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (growthChart) growthChart.destroy();

    growthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, i) => i),
            datasets: [{
                label: 'Balance ($)',
                data: data,
                borderColor: '#ffa000',
                backgroundColor: 'rgba(255, 160, 0, 0.1)',
                fill: true,
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#666', maxTicksLimit: 10 } },
                y: { ticks: { color: '#666' } }
            }
        }
    });
}
// Initialization of main get signal button is now inside setupEventListeners

// Initialize the app
document.addEventListener('DOMContentLoaded', initApp);
