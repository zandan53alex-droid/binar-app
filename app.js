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
        { id: 'xageur', name: 'XAG/EUR', icons: ['silver_logo.png', 'https://flagcdn.com/w40/eu.png'], category: 'Commodities' },
        { id: 'xaueur', name: 'XAU/EUR', icons: ['gold.jpg', 'https://flagcdn.com/w40/eu.png'], category: 'Commodities' },
        { id: 'brent_oil_otc', name: 'Brent Oil OTC', icon: 'brent.png', category: 'Commodities' },
        { id: 'us_crude_otc', name: 'US Crude OTC', icon: 'crude.jpg', category: 'Commodities' },
        { id: 'silver_otc', name: 'Silver OTC', icon: 'silver.jpg', category: 'Commodities' },
        { id: 'gold_otc', name: 'Gold OTC', icon: 'gold.jpg', category: 'Commodities' },
        { id: 'natural_gas', name: 'Natural Gas', icon: 'natural_gas.jpg', category: 'Commodities' },
        { id: 'palladium_otc', name: 'Palladium OTC', icon: 'palladium.jpg', category: 'Commodities' },
        { id: 'platinum_otc', name: 'Platinum OTC', icon: 'platinum.jpg', category: 'Commodities' },
        { id: 'gold', name: 'Gold', icon: 'gold.jpg', category: 'Commodities' },
        { id: 'silver', name: 'Silver', icon: 'silver.jpg', category: 'Commodities' },
        { id: 'platinum_spot', name: 'Platinum spot', icon: 'platinum.jpg', category: 'Commodities' }
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
        { id: 'fb_otc', name: 'Meta (Facebook) OTC', icon: 'https://logo.clearbit.com/meta.com', category: 'Stocks' },
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
        { id: 'meta', name: 'Meta (Facebook)', icon: 'https://logo.clearbit.com/meta.com', category: 'Stocks' },
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
        { id: 'aus200_otc', name: 'AUS 200 OTC', icon: 'aus200.png', category: 'Indices' },
        { id: '100gbp_otc', name: '100GBP OTC', icon: '100gbp.png', category: 'Indices' },
        { id: 'cac40_index', name: 'CAC 40', icon: 'cac40.png', category: 'Indices' },
        { id: 'd30eur_otc', name: 'D30EUR OTC', icon: 'd30eur.jpg', category: 'Indices' },
        { id: 'dji30_otc', name: 'DJI30 OTC', icon: 'dji30.png', category: 'Indices' },
        { id: 'e35eur_index', name: 'E35EUR', icon: 'e35eur.jpg', category: 'Indices' },
        { id: 'e35eur_otc', name: 'E35EUR OTC', icon: 'e35eur.jpg', category: 'Indices' },
        { id: 'e50eur_otc', name: 'E50EUR OTC', icon: 'e50eur.png', category: 'Indices' },
        { id: 'jpn225_otc', name: 'JPN225 OTC', icon: 'jpn225.png', category: 'Indices' },
        { id: 'us100_index', name: 'US100', icon: 'us100.png', category: 'Indices' },
        { id: 'us100_otc', name: 'US100 OTC', icon: 'us100.png', category: 'Indices' },
        { id: 'smi20_index', name: 'SMI 20', icon: 'smi20.png', category: 'Indices' },
        { id: 'sp500_index', name: 'SP500', icon: 'sp500.png', category: 'Indices' },
        { id: 'sp500_otc', name: 'SP500 OTC', icon: 'sp500.png', category: 'Indices' },
        { id: '100gbp_index', name: '100GBP', icon: '100gbp.png', category: 'Indices' },
        { id: 'aex25_index', name: 'AEX 25', icon: 'aex25.png', category: 'Indices' },
        { id: 'd30eur_index', name: 'D30/EUR', icon: 'd30eur.jpg', category: 'Indices' },
        { id: 'dji30_index', name: 'DJI30', icon: 'dji30.png', category: 'Indices' },
        { id: 'e50eur_index', name: 'E50/EUR', icon: 'e50eur.png', category: 'Indices' },
        { id: 'f40eur_index', name: 'F40/EUR', icon: 'f40eur.png', category: 'Indices' },
        { id: 'f40eur_otc', name: 'F40EUR OTC', icon: 'f40eur.png', category: 'Indices' },
        { id: 'hk33_index', name: 'HONG KONG 33', icon: 'hk33.jpg', category: 'Indices' },
        { id: 'jpn225_index', name: 'JPN225', icon: 'jpn225.png', category: 'Indices' },
        { id: 'aus200_index', name: 'AUS 200', icon: 'aus200.png', category: 'Indices' }
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
        safeBet: 'Безопасная первая ставка при риске {r}%:',
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
        regular: 'Биржа'
    },
    en: {
        syncing: 'SYNCING...',
        standard: 'STANDARD',
        platinum: 'VIP ACCESS',
        analyze: 'GET SIGNAL',
        entry: 'ENTRY:',
        call: 'BUY ↗',
        put: 'SELL ↘',
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
        expiration: 'EXPIRATION TIME:',
        search: 'Search asset...',
        selectExp: 'SELECT EXPIRATION:',
        notFound: 'Nothing found',
        updatedAt: 'Updated:',
        loading: 'LOADING...',
        basics: 'Basics',
        books: 'Books',
        deposit: 'Deposit ($)',
        firstBet: 'First Bet (%)',
        multiplier: 'Multiplier',
        levels: 'Levels',
        payout: 'Payout (%)',
        statsFirstBet: 'First Bet',
        statsRisk: 'Total Risk',
        statsRiskPerc: 'Risk of Depo',
        survivalMsg: 'Deposit will last {n} steps in a row.',
        runSim: 'RUN',
        winrate: 'Winrate (%)',
        balance: 'Balance:',
        lossSeries: 'Loss Series:',
        drawdown: 'Drawdown:',
        recommendation: 'Recommendation',
        safeBet: 'Safe first bet at {r}% risk:',
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
        regular: 'Regular'
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
        lossSeries: 'नुकसान श्रृंखला:',
        drawdown: 'गिरावट:',
        recommendation: 'सिफारिश',
        safeBet: '{r}% जोखिम पर सुरक्षित पहली शर्त:',
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
        regular: 'नियमित'
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
        safeBet: 'Primera apuesta segura al {r}% de riesgo:',
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
        regular: 'Regular'
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
        safeBet: 'Premier pari sûr à {r}% de risque:',
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
        regular: 'Régulier'
    }
};
let currentLang = 'ru';
let currentCategory = null;
let currentAsset = null;
let currentTimeframe = '1m';
let searchQuery = '';
const tg = window.Telegram.WebApp;

function initApp() {
    try {
        tg.ready();
        tg.expand();

        const userLang = tg.initDataUnsafe?.user?.language_code;
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
    if (get('asset-search')) get('asset-search').placeholder = t.search;
    if (get('label-expiration')) get('label-expiration').innerText = t.selectExp;

    // Toggle Buttons
    if (get('assets-btn-text')) get('assets-btn-text').innerText = t.assetsBtn;
    if (get('education-btn-text')) get('education-btn-text').innerText = t.educationBtn;
    if (get('calc-btn-text')) get('calc-btn-text').innerText = t.calcBtn;
    if (get('news-btn-text')) get('news-btn-text').innerText = t.newsBtn;

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

    setLabel('stat-label-first-bet', t.statsFirstBet);
    setLabel('stat-label-risk', t.statsRisk);
    setLabel('stat-label-risk-perc', t.statsRiskPerc);

    setLabel('run-sim-btn', t.runSim);
    setLabel('sim-label-balance', t.balance);
    setLabel('sim-label-loss', t.lossSeries);
    setLabel('sim-label-drawdown', t.drawdown);
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
            categoryNameEl.innerText = t.assetsBtn || 'Активы';
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
}

function setupEventListeners() {
    const dropdownContainer = document.querySelector('.category-dropdown-container');
    const toggleBtn = document.getElementById('category-toggle');
    const currentCatName = document.getElementById('current-category-name');

    // Toggle category dropdown
    toggleBtn.onclick = (e) => {
        e.stopPropagation();
        dropdownContainer.classList.toggle('open');
        document.querySelector('.lang-selector-container')?.classList.remove('open');
    };

    // Toggle language dropdown
    const langContainer = document.querySelector('.lang-selector-container');
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.onclick = (e) => {
            e.stopPropagation();
            langContainer.classList.toggle('open');
            dropdownContainer.classList.remove('open');
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
        if (signalTimerInterval) clearInterval(signalTimerInterval);
    };

    const repeatBtn = document.getElementById('repeat-signal-btn');
    if (repeatBtn) repeatBtn.onclick = generateSignal;

    const backBtn = document.getElementById('back-to-assets-btn');
    if (backBtn) {
        backBtn.onclick = () => {
            document.getElementById('signal-overlay').classList.remove('active');
            setTimeout(() => document.getElementById('signal-overlay').classList.add('hidden'), 300);
            if (signalTimerInterval) clearInterval(signalTimerInterval);
        };
    }

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
            const matches = ASSETS_DB[cat].filter(a =>
                a.name.toLowerCase().includes(searchQuery) || a.id.toLowerCase().includes(searchQuery)
            );

            matches.forEach(m => {
                // Clone the object to avoid mutating the database with category info
                const item = { ...m, dictCategory: cat };
                // Avoid duplicates if an asset exists in multiple categories (unlikely but safe)
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

        let iconsHtml = `<div class="asset-icon-wrapper ${isMulti ? 'multi' : 'single'}"`;
        if (!isMulti) {
            const catColors = { 'Crypto': '#f7931a22', 'Stocks': '#00b4d822', 'Commodities': '#ffd70022', 'Indices': '#6c63ff22' };
            const bg = catColors[asset.category] || '#ffffff11';
            iconsHtml += ` style="background:${bg};border-radius:50%;"`;
        }
        iconsHtml += `>`;

        icons.forEach((src, idx) => {
            const fallbacks = buildFallbacks(asset, src, idx);
            if (src) {
                iconsHtml += `<img src="${src}" class="asset-icon ${idx === 1 ? 'secondary' : ''}" 
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

    if (!isMulti) {
        const catColors = { 'Crypto': '#f7931a22', 'Stocks': '#00b4d822', 'Commodities': '#ffd70022', 'Indices': '#6c63ff22' };
        iconContainer.style.background = catColors[asset.category] || '#ffffff11';
        iconContainer.style.borderRadius = '50%';
    } else {
        iconContainer.style.background = 'transparent';
    }

    icons.forEach((src, idx) => {
        if (!src) return;
        const img = document.createElement('img');
        img.src = src;
        img.className = `signal-asset-icon ${idx === 1 ? 'secondary' : ''}`;
        const fallbacks = buildFallbacks(asset, src, idx);
        img.dataset.fallbacks = JSON.stringify(fallbacks);
        img.onerror = () => tryNextFallback(img);
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
    const localIp = "192.168.1.8";
    const port = "8765";
    let ws = null;

    function connectWs(isFallback = false) {
        const host = window.location.hostname;
        const isLocalHost = host === 'localhost' || host === '127.0.0.1' || window.location.protocol === 'file:';

        let targetIp = localIp;
        if (isLocalHost) {
            targetIp = isFallback ? localIp : '127.0.0.1';
        } else {
            targetIp = isFallback ? '127.0.0.1' : localIp;
        }

        const currentUrl = `ws://${targetIp}:${port}`;
        console.log(`📡 Соединение с сервером котировок: ${currentUrl}... (${isFallback ? 'запасной' : 'основной'})`);

        ws = new WebSocket(currentUrl);

        const connectionTimeout = setTimeout(() => {
            if (ws.readyState !== WebSocket.OPEN) {
                console.warn(`⏳ Тайм-аут ${currentUrl}, пробуем другой...`);
                ws.onclose = null;
                ws.close();
                connectWs(!isFallback);
            }
        }, 2200);

        ws.onopen = () => {
            clearTimeout(connectionTimeout);
            console.log(`✅ ПОДКЛЮЧЕНО К: ${currentUrl}`);
            const badge = document.getElementById('status-badge');
            if (badge) {
                badge.innerText = 'ЦЕНЫ: ВЫХОД В СЕТЬ';
                badge.className = 'status-badge connected';
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
                badge.innerText = 'ПОИСК СЕРВЕРА...';
                badge.className = 'status-badge disconnected';
            }
            setTimeout(() => connectWs(!isFallback), 3000);
        };

        ws.onerror = () => ws.close();
    }

    connectWs(false);
}

document.addEventListener('DOMContentLoaded', initApp);

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

const LESSONS = [
    {
        id: 1,
        icon: '🧠',
        title: 'Модуль 1. Основа психологии трейдинга',
        desc: 'Как работает психика трейдера, биохимия эмоций и психологические ловушки.',
        text: `📘 Модуль 1. Основа психологии трейдинга

🔹 1. Как работает психика трейдера
Трейдинг — это не просто анализ графиков, а постоянный стресс-тест для психики.
Человек сталкивается с неопределённостью, а мозг по природе ищет стабильность → отсюда ошибки.

Основные реакции:
• «бей или беги» — закрыть сделку в панике;
• «замри» — игнорировать убыток и надеяться на чудо;
• «погоня» — открыть ещё сделку, чтобы вернуть деньги.

Пример: Трейдер открыл сделку на EUR/USD, она ушла в минус. Вместо того, чтобы признать ошибку, он «застывает» и ставит перекрытие на недопустимую сумму. Результат — огромный убыток.

🔹 2. Биохимия эмоций: адреналин, кортизол и дофамин
• Адреналин: всплеск при неожиданном движении рынка → мешает думать рационально.
• Кортизол: гормон стресса → при долгом минусе трейдер начинает ошибаться.
• Дофамин: гормон удовольствия → формирует зависимость от «быстрых сделок».

Пример: 3 прибыльных сделки подряд = высокий дофамин. Трейдер думает «Я непобедим», увеличивает лот ×5, получает сильный убыток.

🔹 3. Психологические ловушки
• Эйфория — торговля «на ощущениях» без анализа.
• Страх — блокирует принятие решений, упускаешь хорошие сделки.
• Азарт — трейдинг превращается в игру.
• Жадность — не фиксирует прибыль вовремя.

🔹 4. Осознанность и дисциплина как базис
Дисциплина — умение следовать системе, даже когда хочется «схитрить».
Правила: вход только по сигналу; риск ≤2% депозита; после 3 минусов подряд — остановка.

✅ Главный враг трейдера — не рынок, а собственная психика.`,
        img: null
    },
    {
        id: 2,
        icon: '😤',
        title: 'Модуль 2. Эмоции в торговле',
        desc: 'Страх, жадность, азарт и депрессия — как они влияют на сделки.',
        text: `📘 Модуль 2. Эмоции в торговле

🔹 1. Страх
1.1. Страх упустить сделку (FOMO)
FOMO возникает, когда трейдер видит движение и думает: «Если не зайду сейчас — упущу шанс».
Пример: EUR/USD вырос +100 пунктов. Трейдер «прыгает» в рынок → цена разворачивается → убыток.

1.2. Страх потерь
Трейдер боится потерять деньги и закрывает позиции слишком рано.
Пример: открыл сделку +50$, испугался коррекции, закрыл → +10$. Через 30 мин цена достигла цели +150$.

🔹 2. Жадность и переоценка своих сил
Появляется после серии профитов. Толкает увеличивать риски и удерживать сделки слишком долго.
Пример: сделка на золото дала +500$. Решил подождать ещё → рынок развернулся → убыток −200$.

🔹 3. Азарт и превращение трейдинга в «казино»
После сильных эмоций трейдинг перестаёт быть анализом. Пример: три минуса → открывает 5 сделок «наугад» → слив депозита.

🔹 4. Депрессия после серии убытков
Несколько минусов ломают уверенность. Трейдер либо бросает рынок, либо торгует хаотично.

🔹 5. Здоровый риск vs эмоциональный
✅ Здоровый: сделка по системе, стоп-лосс, риск ≤2%, решение принято спокойно.
❌ Эмоциональный: вход «на авось», нет стопа, увеличенный лот после убытка.

✅ Трейдер не должен бороться с эмоциями напрямую — нужна система, которая ограничивает их влияние.`,
        img: null
    },
    {
        id: 3,
        icon: '🎯',
        title: 'Модуль 3. Управление собой',
        desc: 'Торговый распорядок, дневник трейдера и методы борьбы со стрессом.',
        text: `📘 Модуль 3. Управление собой

🔹 1. Создание торгового распорядка
Хаотичная торговля = хаотичный результат. Стабильность вырабатывается через привычку.
Пример: «Я торгую с 10:00 до 13:00. Максимум 3 сделки в день.» Это убирает эмоциональные входы «в любое время».

🔹 2. Правила входа/выхода и как их не нарушать
Вход — только по сигналу системы + подтверждение 2 факторов + риск ≤2%.
Выход — фиксированный стоп-лосс, тейк-профит, запрет переноса убыточной сделки «на завтра».

Чек-лист перед входом: ✅ тренд, ✅ сигнал, ✅ риск ≤2%.

🔹 3. Ведение дневника трейдера
Записывать: дата/время, причина входа, план (стоп/тейк), результат, эмоции.
Пример записи: EUR/USD buy, пробой уровня + RSI → −20 пунктов. Эмоции: спешка.
Через месяц: 60% убытков связаны со входом «в спешке».

🔹 4. Методы борьбы со стрессом
• Дыхание 4-7-8: вдох 4с → задержка 7с → выдох 8с.
• Физическая активность: прогулка до/после торговли.
• Микро-перерывы: каждые 40–60 минут отходить от монитора на 5 минут.

🔹 5. Как переключаться после торговли
Ритуал: закрыть терминал → запись в дневник → спортзал/хобби. Это «обрывает» связь с торговлей.

✅ Модуль 3 учит управлять собой, чтобы сохранить ясность ума и дисциплину.`,
        img: null
    },
    {
        id: 4,
        icon: '🪤',
        title: 'Модуль 4. Ошибки мышления трейдера',
        desc: 'Когнитивные ловушки: иллюзия контроля, синдром «я всё знаю», revenge trading.',
        text: `📘 Модуль 4. Ошибки мышления трейдера

🔹 1. Иллюзия контроля
Мозг ищет закономерности и думает, что может «управлять рынком».
Проявляется: перенос стоп-лосса, уверенность «рынок обязан пойти в мою сторону».
Пример: стоп на −50п → переносит до −80, −120… Итог: вместо 1% депо теряет 7%.

🔹 2. Синдром «я всё знаю»
После серии удачных сделок: торговля без анализа, игнорирование риск-менеджмента.
Пример: 10 прибыльных сделок → открывает позицию в 10 раз больше → выходит новость → депозит сгорает.

🔹 3. Revenge trading (желание «отыграться»)
Мозг воспринимает убыток как «несправедливость». Возникает желение немедленно вернуть деньги.
Пример: потерял −200$ → сразу открывает сделку ×3 → убыток уже −700$.

🔹 4. Ловушка случайных выигрышей
Случайный плюс закрепляет ошибочное поведение. Трейдер начинает «торговать наугад».
Пример: случайно перепутал кнопки и заработал +100$. Начинает торговать «на интуиции» → −50% за месяц.

🔹 5. Когнитивные искажения
• Confirmation bias — ищет только ту информацию, что подтверждает его мнение.
• Ошибка игрока — «после 5 минусов точно будет плюс».
• Эффект последней сделки — последний результат определяет следующее решение.
• Эффект толпы — следование чатам и аналитикам без анализа.

✅ Большинство ошибок — не в технике анализа, а в мышлении. Выход: система + дневник + самоанализ.`,
        img: null
    },
    {
        id: 5,
        icon: '💰',
        title: 'Модуль 5. Деньги и психология',
        desc: 'Как размер депозита влияет на эмоции, и почему демо ≠ реал.',
        text: `📘 Модуль 5. Деньги и психология

🔹 1. Как сумма депозита влияет на эмоции
Малый счёт = меньше страха, больше риска. Большой счёт = страх потерь.
Пример: депозит $100 → легко рискует 20%. Депозит $10 000 → даже 1% ($100) вызывает напряжение.
Вывод: подбирайте риск так, чтобы сумма потерь была психологически комфортной.

🔹 2. Почему «реальные деньги» отличаются от демо
На демо нет эмоций → решения принимаются спокойно. На реале — страх, жадность, азарт.
Пример: на демо +30% за месяц. На реале с теми же входами — всего +3% из-за страха.
Вывод: демо полезно для системы, но психологию тренирует только реал.

🔹 3. Риск-менеджмент как психологическая защита
Правило: риск в одной сделке ≤ 1–2% депозита.
Пример: депозит $1000. Риск 100$ (10%) → каждый минус = стресс. Риск 20$ (2%) → серия убытков не «убивает» психологию.

🔹 4. Психология лота: 0.01 против 1.00
Маленький лот → спокойствие. Большой лот → напряжение и ошибки.
Пример: EUR/USD лот 0.01 — держит сделку спокойно. Лот 1.00 — закрывает при малейшем откате.

🔹 5. Как правильно относиться к прибыли и убыткам
Оценивайте не результат сделки, а правильность выполнения плана.
Пример: 3 минуса, 2 плюса → итого +2% депо. Фокус на 3 убытка = стресс. Фокус на статистику = уверенность.

✅ Деньги напрямую влияют на эмоции. Единственный способ сохранить баланс — дисциплина и контроль риска.`,
        img: null
    },
    {
        id: 6,
        icon: '🏆',
        title: 'Модуль 6. Долгосрочная устойчивость',
        desc: 'Формирование характера, реалистичные цели и профилактика выгорания.',
        text: `📘 Модуль 6. Долгосрочная устойчивость

🔹 1. Формирование трейдерского характера
Успешный трейдер отличается не «секретной стратегией», а психологической выносливостью.
Черты: терпение, дисциплина, умение ждать, устойчивость к стрессу. Формируются тренировкой.
Пример: оба получили убыток −100$. Первый — паника и бросил торговать. Второй — записал в дневник и продолжил по системе. Итог: через месяц второй в плюсе.

🔹 2. Постановка реалистичных целей
Цели должны быть SMART: конкретные, измеримые, достижимые, реалистичные.
Нереалистичная цель: «из $100 в $10 000 за месяц».
Реалистичная: «стабильно 3–5% в месяц в течение полугода».

🔹 3. Привычки успешного трейдера
• Торговля только по системе.
• Ведение дневника сделок.
• Ограничение количества сделок в день.
• Постоянное обучение.
• Контроль эмоций (дыхание, спорт).

🔹 4. Баланс между торговлей и жизнью
Баланс: работа ↔ отдых ↔ семья ↔ хобби.
Пример: трейдер 12 часов в день → стресс, ошибки, усталость. Другой — 3 часа в день + спортзал → меньше сделок, но качество выше.

🔹 5. Точка «выгорания» — как не дойти
Симптомы: апатия, раздражительность, потеря интереса.
Профилактика: регулярные перерывы, хобби, чёткие границы рабочего времени, «психологическая подушка» (отдельный счёт).

✅ Трейдинг — это марафон, а не спринт. Только баланс и долгосрочные привычки ведут к стабильному успеху.`,
        img: null
    },
    {
        id: 7,
        icon: '🛠️',
        title: 'Модуль 7. Практическая психология',
        desc: 'Упражнения для дисциплины, «эмоциональный стоп-лосс» и визуализация.',
        text: `📘 Модуль 7. Практическая психология

🔹 1. Симуляции и упражнения для тренировки дисциплины
• Составить торговый план утром → вечером проверить (без открытия сделок).
• Торговля фиксированным лотом: 20 сделок подряд одинаковым объёмом.
• Тренировка паузы: перед каждой сделкой — пауза 60 секунд для проверки эмоций.

Пример: 2 недели демо строго по системе с дневником → осознаёт, что нарушал правила из-за эмоций, а не из-за стратегии.

🔹 2. «Эмоциональный стоп-лосс»
Если есть злость, азарт или желание «отыграться» — торговля останавливается.
• Лимит: максимум 3–5 сделок в день.
• Правило: 2 минуса подряд → закрыть терминал.
Пример: после 2 минусов подряд ушёл в спортзал. На следующий день вошёл спокойно и вернул убыток.

🔹 3. Визуализация и ментальные техники
Мозг не всегда отличает реальный опыт от представляемого.
Техники:
• Перед сделкой представить оба исхода (+/-) и принять их спокойно.
• Мысленно пройти шаги: вход → стоп → тейк → запись.
• «Якорь спокойствия»: фраза, которая возвращает в рациональное состояние.

Пример: «Я принимаю любой исход, главное — следовать системе». Это снижает страх и азарт.

🔹 4. Самооценка после каждой сделки
Вопросы: была ли сделка по системе? Соблюдал ли риск-менеджмент? Какие эмоции испытал?
Вывод: даже убыточная сделка может быть «правильной», если она выполнена по плану.

🔹 5. Кейсы реальных трейдеров
• Трейдер А: после прибыли ×5 лот → слив. Ошибка: жадность. Решение: фиксированный риск.
• Трейдер Б: боялся входить после убытков → упустил сделки. Ошибка: страх. Решение: дневник эмоций.
• Трейдер В: 12 часов в день → выгорел. Ошибка: нет баланса. Решение: лимит времени.

✅ Модуль 7 даёт практические инструменты, которые можно внедрять прямо сегодня.`,
        img: null
    },
    {
        id: 8,
        icon: '👑',
        title: 'Модуль 8. Психология профессионала',
        desc: 'Мышление институционального трейдера и путь от новичка до мастера.',
        text: `📘 Модуль 8. Психология профессионала

🔹 1. Мышление институционального трейдера
Институционалы (банки, фонды) торгуют ради статистического преимущества, а не «быстрых сделок».
Главное отличие: они мыслят сериями, а не одной сделкой.
Розничный трейдер: «Эта сделка должна быть в плюс».
Институционал: «Из 100 сделок у меня 60 прибыльных. Эта конкретная может быть в минус — и это нормально».

🔹 2. Как работают команды в банках и фондах
Роли: аналитики → трейдеры → риск-менеджеры → исполнители.
Каждый шаг контролируется, чтобы эмоции одного человека не обрушили миллионы.
У частного трейдера такой «контролёр» должен быть внутри него — его правила.

🔹 3. Развитие «холодного мышления»
Профессионал сохраняет спокойствие и в прибыли, и в убытке.
«Холодное мышление» = отделение эмоций от решений.
Новичок: убыток −50$ → паника. Профи: убыток −5000$ → спокойно фиксирует, потому что риск рассчитан заранее.

🔹 4. Подготовка к крупным сделкам
Профи готовится заранее: анализирует сценарии, принимает оба исхода, снижает эмоциональный фон.
Пример: перед NFP фонд готовит 3 сценария (рост/падение/флэт) с готовым планом для каждого.

🔹 5. Путь от новичка до мастера
• Новичок — хаотичная торговля, вера в «грааль».
• Ученик — первые системы, дневник сделок.
• Опытный — строгий риск-менеджмент, стабильный профит.
• Профессионал — торговля как бизнес: план + системность + холодное мышление.
• Мастер — обучает других, масштабирует капитал.

Новичок: «Сделать из $100 → $1000». Мастер: «Стабильные 2–5% в месяц на $100 000».

✅ Путь к успеху — смена мышления с любителя на профессионала. Не «угадать рынок», а выстроить системную работу.`,
        img: null
    }
];

let educationOpen = false;
let currentEduTab = 'basics';

// ─── BOOKS (PDF Library) ───────────────────────────────────────
const BOOKS = [
    { title: 'Master the Markets', icon: '📘', size: '11.3 MB', file: 'Master the markets.pdf' },
    { title: 'Order Block', icon: '📗', size: '4.6 MB', file: 'Order Block.pdf' },
    { title: 'SMT Дивергенция', icon: '🧡', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
    { title: 'Цель: Как определять и достигать', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
    { title: 'Торговый алгоритм — А. Фомин', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
    { title: 'Технический анализ — Дж. Швагер', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
    { title: 'Визуальный инвестор — Дж. Мэрфи', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
    { title: 'Имбаланс (Fair Value Gap)', icon: '🧡', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
    { title: 'Имбаланс — Все виды', icon: '🧡', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
    { title: 'Зональный трейдинг — М. Дуглас', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
    { title: 'Технический анализ фьючерсов — Мэрфи', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
    { title: 'Направление рынка', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
    { title: 'Рендж: определение и торговля', icon: '📊', size: '1.3 MB', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
    { title: 'Разумный инвестор', icon: '💡', size: '8.2 MB', file: 'Разумный Инвестор.pdf' },
    { title: 'Фибоначчи — Р. Фишер', icon: '📐', size: '5.7 MB', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
    { title: 'Статистика для трейдеров', icon: '📊', size: '1.4 MB', file: 'Статистика для трейдеров.pdf' },
    { title: 'Технический анализ для начинающих', icon: '📘', size: '7.5 MB', file: 'Технический_анализ_для_начинающих_14.pdf' },
    { title: 'Воспоминания биржевого спекулянта', icon: '📖', size: '1.2 MB', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
    { title: 'Малая энциклопедия трейдера — Найман', icon: '📚', size: '3.0 MB', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' },
];

// ─── COURSES (added to Основа трейдинга, no TaycoonTRD) ────────
const COURSES = [
    {
        id: 'c1',
        icon: '🚀',
        title: 'Введение в трейдинг',
        desc: 'Что такое рынок Forex, бинарные опционы и как устроен трейдинг.',
        text: `🔹 Введение в трейдинг
Трейдинг — это процесс покупки и продажи финансовых инструментов (валют, акций, криптовалют) с целью получения прибыли на разнице цен.

🔹 Что такое рынок Forex?
Forex (Foreign Exchange) — международный валютный рынок. Здесь торгуют валютными парами (EUR/USD, GBP/JPY и т.д.).
Прибыль появляется, если угадал направление движения курса.
Особенности: работает 24 часа в сутки, 5 дней в неделю. Самый ликвидный рынок в мире.

🔹 Что такое бинарные опционы?
Бинарные опционы — упрощённый трейдинг. Нужно только предсказать: цена поднимется или упадёт через определённое время.
Если прогноз верный — трейдер получает фиксированную прибыль (обычно 80–92%).
Если неверный — ставка теряется.

Пример: ставишь 10$ на то, что EUR/USD вырастет за 5 минут. Угадал → получаешь 18$. Нет → теряешь 10$.

⚖️ Разница Forex vs Бинарные опционы:
Forex — серьёзный рынок, можно управлять сделкой (стопы, тейки). Прибыль зависит от размера движения.
Бинарные опционы — «да или нет». Прибыль фиксирована, независимо от размера движения.`,
        img: null
    },
    {
        id: 'c2',
        icon: '📊',
        title: 'Базовые основы анализа',
        desc: 'Технический и фундаментальный анализ, уровни, тренды.',
        text: `📊 Базовые основы анализа\n\n(Полный текст курса охватывает технический анализ, уровни поддержки и сопротивления, тренды, индикаторы и основы фундаментального анализа.)\n\n🔹 Технический анализ\nИзучение графиков для предсказания будущего движения цены на основе исторических данных.\n\n🔹 Базовые понятия:\n• Тренд — направление движения цены (восходящий / нисходящий / боковой).\n• Поддержка — уровень, где покупатели сильнее продавцов → цена отскакивает вверх.\n• Сопротивление — уровень, где продавцы сильнее → цена отбивается вниз.\n\n🔹 Типы анализа:\n1. Технический — анализ графиков, свечей, индикаторов.\n2. Фундаментальный — анализ новостей, экономических данных (NFP, CPI, ВВП).\n3. Сентиментальный — анализ настроений рынка (страх / жадность).`,
        img: null
    },
    {
        id: 'c3',
        icon: '🎯',
        title: 'Точки входа (5s OTC)',
        desc: 'Стратегия торговли на 5-секундном таймфрейме OTC с индикаторами.',
        text: `🎯 Точки входа на 5s OTC

🧩 Почему именно 5 секунд на OTC
На OTC графике алгоритм симулирует рынок, создавая импульсы и ловушки.
5 секунд показывает «дыхание» этого алгоритма. На этом тайме ты:
• видишь микроразвороты до того, как их показывает М1;
• можешь поймать 3–5 секундные импульсы;
• фильтруешь фейковые пробои (по теням и скорости свечей).

⚙️ Настройка стратегии
Индикаторы: Bollinger Bands (14/2.0), EMA 20 + EMA 50, RSI (6, уровни 80/20), Parabolic SAR (0.02/0.2).

📊 Bollinger Bands: касание верхней границы → PUT. Касание нижней → CALL.
📈 EMA: EMA 20 пересекает EMA 50 вверх → CALL. Вниз → PUT.
⚡ RSI: выше 80 → PUT. Ниже 20 → CALL.
🎯 SAR: точки под свечой → движение вверх. Над свечой → вниз.

🚀 Торговые сценарии
1. Разворот от уровня: цена за BB + RSI > 80 + SAR сменил сторону → вход против движения.
2. Пробой уровня: BB расширяется + EMA пересеклись → вход в сторону пробоя на ретесте.
3. Импульс + откат: тренд + цена касается EMA 20 + RSI ≈ 55 → вход по тренду.

⚖️ Управление рисками
• Не входи в первые 3–5 минут каждого часа.
• Максимум 3 сделки подряд в одну сторону.
• 2 минуса → пауза 10 минут.`,
        img: null
    },
    {
        id: 'c4',
        icon: '🕯️',
        title: 'Паттерны',
        desc: 'Свечные паттерны разворота и продолжения тренда.',
        text: `🕯️ Паттерны в трейдинге

Паттерны — это повторяющиеся комбинации свечей или ценовые фигуры, которые сигнализируют о дальнейшем движении рынка.

🔹 Свечные паттерны разворота:
• Молот / Перевёрнутый молот — длинная тень, малое тело. Сигнал разворота от поддержки.
• Поглощение (Engulfing) — большая свеча поглощает предыдущую. Сильный сигнал разворота.
• Доджи — открытие = закрытие, нерешительность рынка.
• Пинбар — длинная тень со стороны уровня, малое тело. Отличная точка входа.
• Утренняя / Вечерняя звезда — 3 свечи, сигнал смены тренда.

🔹 Паттерны продолжения тренда:
• Флаг — коррекция против тренда в виде параллельного канала. Вход на пробое.
• Клин — сужающийся канал. Пробой даёт импульс.
• Треугольник (симметричный, восходящий, нисходящий) — накопление перед пробоем.

🔹 Как применять:
1. Найди уровень поддержки / сопротивления.
2. Жди формирования паттерна у уровня.
3. Используй подтверждение: RSI в зоне перекупленности / перепроданности.
4. Вход после закрытия свечи паттерна. Стоп за хвостом паттерна.`,
        img: null
    },
    {
        id: 'c5',
        icon: '📚',
        title: 'Психология трейдинга — содержание',
        desc: 'Полная программа курса: 8 модулей о психологии и мышлении трейдера.',
        text: `📘 Курс «Психология трейдера на Forex»

🔹 Введение
• Зачем психология важнее стратегии.
• Ошибка 90% трейдеров — слив связан с эмоциями, а не со знанием рынка.
• Цель курса — выработать психологическую устойчивость.

🔹 Модуль 1. Основа психологии трейдинга
Психика трейдера, биохимия эмоций (адреналин, кортизол, дофамин), ловушки (эйфория, страх, азарт, жадность), осознанность и дисциплина.

🔹 Модуль 2. Эмоции в торговле
FOMO, страх потерь, жадность, азарт, депрессия. Как отличить здоровый риск от эмоционального.

🔹 Модуль 3. Управление собой
Торговый распорядок, правила входа/выхода, дневник трейдера, стресс-менеджмент, rituals.

🔹 Модуль 4. Ошибки мышления
Иллюзия контроля, синдром «я всё знаю», revenge trading, ловушка случайных выигрышей, когнитивные искажения.

🔹 Модуль 5. Деньги и психология
Депозит и эмоции, демо vs реал, риск-менеджмент, психология лота, отношение к прибыли и убыткам.

🔹 Модуль 6. Долгосрочная устойчивость
Формирование характера, SMART-цели, привычки, баланс, профилактика выгорания.

🔹 Модуль 7. Практическая психология
Симуляции, «эмоциональный стоп-лосс», визуализация, самооценка, кейсы.

🔹 Модуль 8. Психология профессионала
Институциональное мышление, командная работа в фондах, «холодное мышление», путь от новичка до мастера.

🔹 Заключение
Резюме курса, чек-лист «здорового трейдера», советы по дальнейшему развитию.`,
        img: null
    }
];

// Combined "Основа трейдинга" = courses first, then psychology modules
const ALL_BASICS = [...COURSES, ...LESSONS];

function renderBasics() {
    const panel = document.getElementById('edu-basics-panel');
    if (!panel) return;
    panel.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    ALL_BASICS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        // Localization logic for education could be added here if content is translated
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
    BOOKS.forEach(book => {
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
    document.getElementById('lesson-detail-body').innerText = lesson.text;

    const img = document.getElementById('lesson-detail-img');
    if (lesson.img) {
        img.src = lesson.img;
        img.style.display = '';
    } else {
        img.style.display = 'none';
    }

    const overlay = document.getElementById('lesson-overlay');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('active'), 10);
}

// Wire up education toggle button
document.addEventListener('DOMContentLoaded', () => {
    // ─── Toggles (Education, Assets, Calculator, News) ────────────
    let assetsOpen = true;
    let educationOpen = false;
    let calculatorOpen = false;
    let newsOpen = false;

    const assetsBtn = document.getElementById('assets-btn');
    const assetsPanel = document.getElementById('assets-panel');
    const educationBtn = document.getElementById('education-btn');
    const educationPanel = document.getElementById('education-panel');
    const calcBtn = document.getElementById('calc-btn');
    const calcPanel = document.getElementById('calc-panel');
    const newsBtn = document.getElementById('news-btn');
    const newsPanel = document.getElementById('news-panel');

    function closeAllPanels() {
        assetsOpen = false;
        educationOpen = false;
        calculatorOpen = false;
        newsOpen = false;
        assetsPanel.classList.add('hidden');
        educationPanel.classList.add('hidden');
        calcPanel.classList.add('hidden');
        newsPanel.classList.add('hidden');
        assetsBtn.classList.remove('active');
        educationBtn.classList.remove('active');
        calcBtn.classList.remove('active');
        newsBtn.classList.remove('active');
        document.getElementById('assets-arrow').style.transform = '';
        document.getElementById('edu-arrow').style.transform = '';
        document.getElementById('calc-arrow').style.transform = '';
        document.getElementById('news-arrow').style.transform = '';
    }

    function toggleAssets() {
        if (!assetsOpen) {
            closeAllPanels();
            assetsOpen = true;
            assetsPanel.classList.remove('hidden');
            assetsBtn.classList.add('active');
        } else {
            assetsOpen = false;
            assetsPanel.classList.add('hidden');
            assetsBtn.classList.remove('active');
        }
    }

    function toggleEducation() {
        if (!educationOpen) {
            closeAllPanels();
            educationOpen = true;
            educationPanel.classList.remove('hidden');
            educationBtn.classList.add('active');
            document.getElementById('edu-arrow').style.transform = 'rotate(180deg)';
            if (currentEduTab === 'basics' && !document.getElementById('edu-basics-panel').querySelector('.lesson-card')) {
                renderBasics();
            }
        } else {
            educationOpen = false;
            educationPanel.classList.add('hidden');
            educationBtn.classList.remove('active');
            document.getElementById('edu-arrow').style.transform = '';
        }
    }

    function toggleCalculator() {
        if (!calculatorOpen) {
            closeAllPanels();
            calculatorOpen = true;
            calcPanel.classList.remove('hidden');
            calcBtn.classList.add('active');
            document.getElementById('calc-arrow').style.transform = 'rotate(180deg)';
            initCalculator();
        } else {
            calculatorOpen = false;
            calcPanel.classList.add('hidden');
            calcBtn.classList.remove('active');
            document.getElementById('calc-arrow').style.transform = '';
        }
    }

    function toggleNews() {
        if (!newsOpen) {
            closeAllPanels();
            newsOpen = true;
            newsPanel.classList.remove('hidden');
            newsBtn.classList.add('active');
            document.getElementById('news-arrow').style.transform = 'rotate(180deg)';
            fetchEconomicNews();
        } else {
            newsOpen = false;
            newsPanel.classList.add('hidden');
            newsBtn.classList.remove('active');
            document.getElementById('news-arrow').style.transform = '';
        }
    }

    assetsBtn.addEventListener('click', toggleAssets);
    educationBtn.addEventListener('click', toggleEducation);
    calcBtn.addEventListener('click', toggleCalculator);
    newsBtn.addEventListener('click', toggleNews);

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
        const t = TRANSLATIONS[currentLang];

        const COUNTRY_MAP = {
            'United States': 'USD', 'Euro Area': 'EUR', 'United Kingdom': 'GBP', 'Japan': 'JPY',
            'Canada': 'CAD', 'Australia': 'AUD', 'Switzerland': 'CHF', 'New Zealand': 'NZD',
            'China': 'CNY', 'Russia': 'RUB', 'Germany': 'EUR', 'France': 'EUR', 'Italy': 'EUR'
        };

        try {
            updateStatus.innerText = t.loading;
            const backUrl = `http://72.56.77.59:8000/news`;
            const publicUrl = `https://corsproxy.io/?url=${encodeURIComponent(`https://api.tradingeconomics.com/calendar?c=guest:guest&f=json`)}`;
            const fallbackUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://api.tradingeconomics.com/calendar?c=guest:guest&f=json`)}`;

            let data = null;
            let errorMsg = '';

            try {
                console.log("📡 Пробуем основной proxy (Trading Economics)...");
                const res = await fetch(backUrl);
                if (res.ok) data = await res.json();
            } catch (e) { console.warn("Backend Proxy failed", e); }

            if (!data) {
                try {
                    console.log("📡 Пробуем corsproxy.io...");
                    const res = await fetch(publicUrl);
                    if (res.ok) data = await res.json();
                } catch (e) { console.warn("Corsproxy.io failed", e); }
            }

            if (!data) {
                try {
                    console.log("📡 Пробуем AllOrigins fallback...");
                    const res = await fetch(fallbackUrl);
                    if (res.ok) {
                        const json = await res.json();
                        data = JSON.parse(json.contents);
                    }
                } catch (e) {
                    console.warn("AllOrigins failed", e);
                    errorMsg = e.message;
                }
            }

            if (!data || !Array.isArray(data)) {
                throw new Error(errorMsg || 'All proxies failed');
            }

            // Map Trading Economics data to our structure
            cachedNews = data.slice(0, 30).map(item => {
                const dateObj = new Date(item.Date);
                const timeStr = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const currency = COUNTRY_MAP[item.Country] || item.Country.substring(0, 3).toUpperCase();

                return {
                    time: timeStr,
                    rawDate: dateObj,
                    currency: currency,
                    event: item.Event,
                    importance: item.Importance || 1
                };
            });

            renderNews();
            updateStatus.innerText = `${t.updatedAt} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

        } catch (error) {
            console.error('News Fetch Error:', error);
            listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: #ff4444; font-size: 0.8rem; font-weight:700;">${t.notFound}<br><span style="font-size:0.6rem; opacity:0.7;">${error.message}</span></div>`;
        }
    }

    function renderNews() {
        const listContainer = document.getElementById('news-list');
        listContainer.innerHTML = '';
        const t = TRANSLATIONS[currentLang];

        if (cachedNews.length === 0) {
            listContainer.innerHTML = `<div style="text-align:center; padding: 20px; color: #555;">${t.notFound}</div>`;
            return;
        }

        cachedNews.forEach(item => {
            const stars = '⭐'.repeat(item.importance);
            const impactClass = item.importance === 3 ? 'impact-high' : (item.importance === 2 ? 'impact-med' : 'impact-low');

            const card = `
                <div class="news-card ${impactClass}">
                    <div class="news-card-header">
                        <span class="news-time">${item.time}</span>
                        <span class="news-currency">${item.currency}</span>
                    </div>
                    <div class="news-event-name" style="margin-bottom: 5px;">${item.event}</div>
                    <div class="news-importance">${t.analyze}: ${stars}</div>
                </div>
            `;
            listContainer.innerHTML += card;
        });
    }

    // Auto update every 5 mins
    setInterval(fetchEconomicNews, 300000);

    // ─── Calculator Logic ─────────────────────────────────────────
    let growthChart = null;

    function initCalculator() {
        const inputs = ['calc-deposit', 'calc-first-bet-perc', 'calc-multiplier', 'calc-levels', 'calc-payout', 'calc-max-risk'];
        inputs.forEach(id => {
            document.getElementById(id).addEventListener('input', runCalculations);
        });
        document.getElementById('run-sim-btn').addEventListener('click', runSimulation);
        runCalculations();
    }

    function runCalculations() {
        const t = TRANSLATIONS[currentLang];
        const deposit = parseFloat(document.getElementById('calc-deposit').value) || 0;
        const firstBetPerc = parseFloat(document.getElementById('calc-first-bet-perc').value) || 0;
        const multiplier = parseFloat(document.getElementById('calc-multiplier').value) || 0;
        const levels = parseInt(document.getElementById('calc-levels').value) || 0;
        const payout = parseFloat(document.getElementById('calc-payout').value) / 100 || 0;

        const firstBet = (deposit * (firstBetPerc / 100));
        document.getElementById('res-first-bet').innerText = '$' + firstBet.toFixed(2);

        let totalRisk = 0;
        let currentBet = firstBet;
        const tableBody = document.getElementById('calc-table-body');
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

        const riskPerc = (totalRisk / deposit) * 100;
        document.getElementById('res-total-risk').innerText = '$' + totalRisk.toFixed(2);
        document.getElementById('res-risk-perc').innerText = riskPerc.toFixed(1) + '%';

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
        document.getElementById('calc-survival-msg').innerText = survivalMsg;
        document.getElementById('calc-survival-msg').style.color = survivalCount < levels ? '#f44336' : '#00dc96';

        // Safe bet calc
        const maxRiskLimit = parseFloat(document.getElementById('calc-max-risk').value) || 10;
        const maxAllowedMoney = deposit * (maxRiskLimit / 100);
        // Formula: TotalRisk = FirstBet * (1 - multiplier^levels) / (1 - multiplier)
        let sumFactor = 0;
        for (let l = 0; l < levels; l++) sumFactor += Math.pow(multiplier, l);
        const safeStartingBet = maxAllowedMoney / sumFactor;

        const safeBetLabel = t.safeBet.replace('{r}', maxRiskLimit);
        document.getElementById('label-max-risk').innerText = safeBetLabel;
        document.getElementById('res-safe-bet').innerText = '$' + safeStartingBet.toFixed(2);
    }

    function runSimulation() {
        const deposit = parseFloat(document.getElementById('calc-deposit').value) || 0;
        const firstBetPerc = parseFloat(document.getElementById('calc-first-bet-perc').value) || 0;
        const multiplier = parseFloat(document.getElementById('calc-multiplier').value) || 0;
        const levels = parseInt(document.getElementById('calc-levels').value) || 0;
        const winrate = parseFloat(document.getElementById('calc-winrate').value) / 100 || 0;
        const payout = parseFloat(document.getElementById('calc-payout').value) / 100 || 0;

        let balance = deposit;
        let firstBet = balance * (firstBetPerc / 100);
        let history = [balance];
        let maxDrawdown = 0;
        let peak = balance;
        let maxLossSeries = 0;
        let currentLossSeries = 0;

        for (let i = 0; i < 100; i++) {
            let win = false;
            let seriesCost = 0;
            let bet = firstBet;

            // Attempt levels
            for (let l = 0; l < levels; l++) {
                seriesCost += bet;
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

        document.getElementById('sim-results').classList.remove('hidden');
        document.getElementById('sim-final-balance').innerText = '$' + balance.toFixed(2);
        document.getElementById('sim-max-loss').innerText = maxLossSeries;
        document.getElementById('sim-drawdown').innerText = maxDrawdown.toFixed(1) + '%';

        updateChart(history);
    }

    function updateChart(data) {
        const ctx = document.getElementById('growthChart').getContext('2d');
        if (growthChart) growthChart.destroy();

        growthChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map((_, i) => i),
                datasets: [{
                    label: 'Баланс ($)',
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
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: '#666', maxTicksLimit: 10 } },
                    y: { ticks: { color: '#666' } }
                }
            }
        });
    }

    const closeLesson = document.getElementById('close-lesson');
    const lessonOverlay = document.getElementById('lesson-overlay');

    if (closeLesson) {
        closeLesson.onclick = () => {
            lessonOverlay.classList.remove('active');
            setTimeout(() => lessonOverlay.classList.add('hidden'), 300);
        };
    }
});
