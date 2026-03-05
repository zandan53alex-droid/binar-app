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
        { id: 'xageur', name: 'XAG/EUR', icons: ['https://img.icons8.com/color/100/silver-coins.png', 'https://flagcdn.com/w40/eu.png'], category: 'Commodities' },
        { id: 'xaueur', name: 'XAU/EUR', icons: ['https://img.icons8.com/fluency/100/gold-bars.png', 'https://flagcdn.com/w40/eu.png'], category: 'Commodities' },
        { id: 'brent_oil_otc', name: 'Brent Oil OTC', icon: 'https://img.icons8.com/fluency/100/oil-pumpjack.png', category: 'Commodities' },
        { id: 'us_crude_otc', name: 'US Crude OTC', icon: 'https://img.icons8.com/fluency/100/oil-pumpjack.png', category: 'Commodities' },
        { id: 'silver_otc', name: 'Silver OTC', icon: 'https://img.icons8.com/color/100/silver-coins.png', category: 'Commodities' },
        { id: 'gold_otc', name: 'Gold OTC', icon: 'https://img.icons8.com/fluency/100/gold-bars.png', category: 'Commodities' },
        { id: 'natural_gas', name: 'Natural Gas', icon: 'https://img.icons8.com/fluency/100/gas-industry.png', category: 'Commodities' },
        { id: 'palladium_otc', name: 'Palladium OTC', icon: 'https://img.icons8.com/fluency/100/diamond.png', category: 'Commodities' },
        { id: 'platinum_otc', name: 'Platinum OTC', icon: 'https://img.icons8.com/fluency/100/diamond.png', category: 'Commodities' },
        { id: 'gold', name: 'Gold', icon: 'https://img.icons8.com/fluency/100/gold-bars.png', category: 'Commodities' },
        { id: 'silver', name: 'Silver', icon: 'https://img.icons8.com/color/100/silver-coins.png', category: 'Commodities' },
        { id: 'platinum_spot', name: 'Platinum spot', icon: 'https://img.icons8.com/fluency/100/diamond.png', category: 'Commodities' }
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

// Smart fallback icon loader — tries multiple sources if primary fails
function buildFallbacks(asset, primaryUrl, idx) {
    const fallbacks = [];

    // If crypto — add jsdelivr npm as backup
    if (asset.category === 'Crypto') {
        const sym = asset.id.replace(/_otc$/, '').replace('bitcoin', 'btc').replace('ethereum', 'eth').replace('dash', 'dash');
        fallbacks.push(`https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/32/color/${sym}.png`);
        fallbacks.push(`https://s2.coinmarketcap.com/static/cloud/img/portfolio_logo.svg`);
    }
    // If stock — add icons8 as backup 
    if (asset.category === 'Stocks') {
        const domain = primaryUrl.replace('https://logo.clearbit.com/', '');
        fallbacks.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=64`);
    }
    // Universal fallback
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
            // Draw a colored circle with first letter as final fallback
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
            const dataUrl = canvas.toDataURL();
            img.style.display = '';
            img.src = dataUrl;
        }
    } catch (e) { img.onerror = null; }
}

window.onload = initApp;
