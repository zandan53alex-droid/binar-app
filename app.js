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
        call: 'ВВЕРХ ↗',
        put: 'ВНИЗ ↘',
        crypto: 'КРИПТОВАЛЮТЫ',
        forex: 'ВАЛЮТЫ',
        forex_otc: 'ВАЛЮТЫ OTC',
        stocks: 'АКЦИИ',
        commodities: 'СЫРЬЕВЫЕ ТОВАРЫ',
        indices: 'ИНДЕКСЫ',
        assetsBtn: 'АКТИВЫ',
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
        assetsBtn: 'ASSETS',
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
    },
    hi: {
        syncing: 'सिंकिंग...',
        standard: 'मानक',
        platinum: 'वीआईपी',
        analyze: 'सिग्नल प्राप्त करें',
        entry: 'प्रवेश:',
        call: 'ऊपर ↗',
        put: 'नीचे ↘',
        crypto: 'क्रिप्टो',
        forex: 'मुद्राएं',
        forex_otc: 'मुद्राएं OTC',
        stocks: 'स्टॉक OTC',
        commodities: 'कमोडिटीज OTC',
        indices: 'सूचकांक',
        assetsBtn: 'संपत्ति',
        expiration: 'समाप्ति समय:',
        search: 'संपत्ति खोजें...',
        selectExp: 'समाप्ति चुनें:',
        statuses: [
            'न्यूरल नेटवर्क प्रारंभ करना...',
            'वर्तमान अस्थिरता का विश्लेषण...',
            'क्लस्टर वॉल्यूम की जाँच...',
            'इष्टतम प्रविष्टि की खोज...',
            'पूर्वानुमान अंतिम रूप देना...'
        ]
    },
    es: {
        syncing: 'SINCRONIZANDO...',
        standard: 'ESTÁNDAR',
        platinum: 'ACCESO VIP',
        analyze: 'OBTENER SEÑAL',
        entry: 'ENTRADA:',
        call: 'SUBE ↗',
        put: 'BAJA ↘',
        crypto: 'CRIPTO',
        forex: 'DIVISAS',
        forex_otc: 'DIVISAS OTC',
        stocks: 'ACCIONES OTC',
        commodities: 'MATERIAS PRIMAS OTC',
        indices: 'ÍNDICES',
        assetsBtn: 'ACTIVOS',
        expiration: 'TIEMPO DE EXPIRACIÓN:',
        search: 'Buscar activo...',
        selectExp: 'SELECCIONAR EXPIRACIÓN:',
        statuses: [
            'Inicializando red neuronal...',
            'Analizando volatilidad actual...',
            'Comprobando volúmenes de clústeres...',
            'Buscando entrada óptima...',
            'Finalizando pronóstico...'
        ]
    },
    fr: {
        syncing: 'SYNCHRONISATION...',
        standard: 'STANDARD',
        platinum: 'ACCÈS VIP',
        analyze: 'OBTENIR LE SIGNAL',
        entry: 'ENTRÉE:',
        call: 'HAUSSE ↗',
        put: 'BAISSE ↘',
        crypto: 'CRYPTO',
        forex: 'DEVISES',
        forex_otc: 'DEVISES OTC',
        stocks: 'ACTIONS OTC',
        commodities: 'MATIÈRES PREMIÈRES OTC',
        indices: 'INDICES',
        assetsBtn: 'ACTIFS',
        expiration: 'TEMPS D\'EXPIRATION:',
        search: 'Rechercher actif...',
        selectExp: 'SÉLECTIONNER EXPIRATION:',
        statuses: [
            'Initialisation du réseau neuronal...',
            'Analyse de la volatilité actuelle...',
            'Vérification des volumes...',
            'Recherche de l\'entrée optimale...',
            'Finalisation des prévisions...'
        ]
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
    document.querySelector('.loader').innerText = t.syncing;
    document.getElementById('get-signal-btn').innerText = t.analyze;
    document.getElementById('asset-search').placeholder = t.search;
    document.getElementById('label-expiration').innerText = t.selectExp;

    // Set the main button text to the current category name, or default "ASSETS"
    const categoryNameEl = document.getElementById('current-category-name');
    if (currentCategory && t[currentCategory]) {
        categoryNameEl.innerText = t[currentCategory];
    } else {
        categoryNameEl.innerText = t.assetsBtn || 'Активы';
    }

    document.querySelectorAll('.dropdown-item').forEach(btn => {
        const cat = btn.dataset.category;
        if (t[cat]) {
            btn.innerText = t[cat];
        }
    });
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
                const urlParams = newSearchParams = new URLSearchParams(window.location.search);
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
    };

    document.getElementById('get-signal-btn').onclick = generateSignal;
}

function renderAssets() {
    const container = document.getElementById('asset-list');
    container.innerHTML = '';

    let filtered = [];

    if (searchQuery) {
        // Global search across all categories
        for (const cat in ASSETS_DB) {
            const matches = ASSETS_DB[cat].filter(a =>
                a.name.toLowerCase().includes(searchQuery) || a.id.toLowerCase().includes(searchQuery)
            );

            // Inject the dictionary category key into the asset object so we can translate it properly later
            matches.forEach(m => {
                if (!m.dictCategory) m.dictCategory = cat;
            });
            filtered = filtered.concat(matches);
        }
    } else {
        // Normal category view
        if (!currentCategory) {
            container.innerHTML = ``;
            return;
        }
        filtered = ASSETS_DB[currentCategory].map(a => {
            a.dictCategory = currentCategory;
            return a;
        });
    }

    if (filtered.length === 0 && searchQuery) {
        container.innerHTML = `<div class="empty-state"><p style="color:#666;">Ничего не найдено</p></div>`;
        return;
    }

    filtered.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'asset-item';

        // Handle icons array or single icon string
        const iconsRaw = asset.icons || [asset.icon];
        const icons = Array.isArray(iconsRaw) ? iconsRaw : [iconsRaw];

        // Ensure single string if length is 1 so it triggers single mode properly
        const isMulti = icons.length > 1;

        let iconsHtml = `<div class="asset-icon-wrapper ${isMulti ? 'multi' : 'single'}"`;
        if (!isMulti) {
            // For single icons, add a colored background based on category
            const catColors = { 'Crypto': '#f7931a22', 'Stocks': '#00b4d822', 'Commodities': '#ffd70022', 'Indices': '#6c63ff22' };
            const bg = catColors[asset.category] || '#ffffff11';
            iconsHtml += ` style="background:${bg};border-radius:50%;"`;
        }
        iconsHtml += `>`;

        icons.forEach((src, idx) => {
            // Build fallback chain for each image
            const fallbacks = buildFallbacks(asset, src, idx);
            if (src) {
                iconsHtml += `<img src="${src}" class="asset-icon ${idx === 1 ? 'secondary' : ''}" 
                    data-fallbacks='${JSON.stringify(fallbacks)}'
                    onerror="tryNextFallback(this)">`;
            }
        });
        iconsHtml += `</div>`;

        const transCat = asset.dictCategory || currentCategory;
        const translatedCategory = TRANSLATIONS[currentLang][transCat] || asset.category;

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
    { title: 'SMT Дивергенция', icon: '📙', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
    { title: 'Цель: Как определять и достигать', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
    { title: 'Торговый алгоритм — А. Фомин', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
    { title: 'Технический анализ — Дж. Швагер', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
    { title: 'Визуальный инвестор — Дж. Мэрфи', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
    { title: 'Дисциплинированный трейдер', icon: '🧠', size: '1.5 MB', file: 'Дисциплинированный трейдер.pdf' },
    { title: 'Имбаланс (Fair Value Gap)', icon: '📙', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
    { title: 'Имбаланс — Все виды', icon: '📙', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
    { title: 'Зональный трейдинг — М. Дуглас', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
    { title: 'Технический анализ фьючерсов — Мэрфи', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
    { title: 'Направление рынка', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
    { title: 'Основы криптотрейдинга', icon: '₿', size: '9.3 MB', file: 'Основы_криптотрейдинга_собрание.pdf' },
    { title: 'Психология трейдинга', icon: '🧠', size: '0.5 MB', file: 'Психология Трейдинга .pdf' },
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
    ALL_BASICS.forEach(item => {
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
    BOOKS.forEach(book => {
        const card = document.createElement('a');
        card.className = 'book-card';
        card.href = `books/${encodeURIComponent(book.file)}`;
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
        if (!basicsPanel.hasChildNodes()) renderBasics();
    } else {
        booksPanel.classList.remove('hidden');
        basicsPanel.classList.add('hidden');
        tabBooks.classList.add('active');
        tabBasics.classList.remove('active');
        if (!booksPanel.hasChildNodes()) renderBooks();
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
    const eduBtn = document.getElementById('education-btn');
    const eduPanel = document.getElementById('education-panel');
    const assetList = document.getElementById('asset-list');
    const closeLesson = document.getElementById('close-lesson');
    const lessonOverlay = document.getElementById('lesson-overlay');
    const arrow = document.getElementById('edu-arrow');

    if (eduBtn) {
        eduBtn.onclick = () => {
            educationOpen = !educationOpen;
            eduBtn.classList.toggle('active', educationOpen);
            if (arrow) arrow.style.transform = educationOpen ? 'rotate(180deg)' : '';
            if (educationOpen) {
                eduPanel.classList.remove('hidden');
                assetList.style.display = 'none';
                // Render default tab
                renderBasics();
            } else {
                eduPanel.classList.add('hidden');
                assetList.style.display = '';
            }
        };
    }

    if (closeLesson) {
        closeLesson.onclick = () => {
            lessonOverlay.classList.remove('active');
            setTimeout(() => lessonOverlay.classList.add('hidden'), 300);
        };
    }
});
