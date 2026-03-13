const fs = require('fs');

const INDICATORS_RU = [
    { icon: '📈', title: 'Bollinger Bands (Линии Боллинджера)', desc: 'Показывает волатильность и возможные развороты.', text: `<b>Bollinger Bands</b>\nЛинии Боллинджера — это три линии, которые измеряют текущую волатильность рынка, созданные Джоном Боллинджером. Опубликованы в 1987 году в книге Перри Кауфмана. Полосы Боллинджера по-прежнему популярны спустя 30 лет.\n\nЦентральная линия (ML) = простая скользящая средняя (SMA).\nВерхняя полоса = ML + (2 * стандартное отклонение).\nНижняя полоса = ML - (2 * стандартное отклонение).\n\nСужение полос указывает на низкую волатильность (флэт), расширение — на высокую. По умолчанию период SMA 20, отклонение 2.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📊', title: 'MACD', desc: 'Осциллятор силы тренда.', text: `<b>MACD</b>\nMACD — это осциллятор, который часто называют «трендовым осциллятором», так как он построен на основе скользящих средних. Он отображается в отдельном окне под графиком в виде гистограммы с вспомогательной линией.\n\nГистограмма показывает степень расхождения двух скользящих средних. Если они удаляются друг от друга, бары растут; если сближаются — уменьшаются. Сильное движение = длинные бары, флэт = короткие.\n\nГистограмма выше нуля указывает на восходящий тренд (быстрая MA выше медленной), ниже нуля — на нисходящий.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🔄', title: 'Stochastic Oscillator', desc: 'Поиск зон перекупленности и перепроданности.', text: `<b>Stochastic</b>\nСтохастик определяет импульс цены. Это осциллятор с двумя линиями: %K (быстрая) и %D (медленная). %K рассчитывается на основе последней цены относительно её максимума и минимума за период. %D — это скользящая средняя от %K.\n\nЗначения выше 80 = перекупленность (возможен спад), ниже 20 = перепроданность (возможен рост). Две линии дают несколько вариантов сигналов для входа.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📉', title: 'ADX', desc: 'Индикатор силы тренда.', text: `<b>ADX</b>\nСредний направленный индекс (ADX) состоит из трех линий: +DI (синяя, положительное направление), -DI (красная, отрицательное направление) и сама линия ADX (сила тренда).\n\nADX показывает наличие и мощность тренда. +DI выше -DI означает восходящий тренд, -DI выше +DI — нисходящий. Значение линии ADX: выше 25 — сильный тренд, ниже 20 — слабый тренд (флэт).\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '💠', title: 'Fractals (Фракталы)', desc: 'Локальные максимумы и минимумы.', text: `<b>Фракталы</b>\nФракталы Вильямса состоят из пяти свечей, где средняя является либо самой высокой (фрактал вверх), либо самой низкой (фрактал вниз). Фракталы вверх выступают в роли сопротивления, вниз — поддержки.\n\nТрейдеры ждут завершения паттерна перед действием. Фракталы помогают четко видеть ценовые экстремумы на графике. Ждите закрытия последней свечи для подтверждения.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🕯️', title: 'RSI', desc: 'Индекс относительной силы.', text: `<b>RSI</b>\nИндекс относительной силы (RSI), разработанный Уэллсом Уайлдером в 1978 году, оценивает состояния перекупленности (выше 70) и перепроданности (ниже 30). Стандартная настройка — 14 периодов.\n\nФормула: RSI = 100 - (100 / (1 + (средняя прибыль / средний убыток))). Показывает, сколько из последних 14 свечей были бычьими по сравнению с медвежьими. Хотя RSI 70 указывает на перекупленность, это не гарантирует немедленного разворота.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
];

const INDICATORS_EN = [
    { icon: '📈', title: 'Bollinger Bands', desc: 'Measure volatility and possible reversals.', text: `<b>Bollinger Bands</b>\nBollinger Bands consist of three lines that measure current market volatility, created by John Bollinger. Published in 1987 in Perry Kaufman's book. Bollinger bands are still popular after 30 years.\n\nCentral Line (ML) = Simple Moving Average.\nUpper Band = ML + (2 * Standard Deviation).\nLower Band = ML - (2 * Standard Deviation).\n\nNarrowing of the bands indicates low volatility (flat), widening indicates high volatility. By default, SMA period is 20 and deviation is 2.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📊', title: 'MACD', desc: 'Trend strength oscillator.', text: `<b>MACD</b>\nMACD is an oscillator often called a "trend oscillator" as it's built based on moving averages. It's displayed in a separate window below the chart as a histogram with an auxiliary line.\n\nThe histogram shows the degree of divergence of two moving averages. If they move away from each other, the bars grow; if they approach each other, they decrease. Strong movement = long bars, flat = short bars.\n\nHistogram above zero indicates an uptrend (fast MA above slow), below zero indicates a downtrend.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🔄', title: 'Stochastic Oscillator', desc: 'Finding overbought and oversold zones.', text: `<b>Stochastic</b>\nStochastic determines price momentum. It's an oscillator with two lines: %K (fast) and %D (slow). %K is calculated based on the latest price relative to its high and low over a period. %D is a moving average of %K.\n\nValues above 80 = overbought (potential drop), below 20 = oversold (potential growth). Two lines provide multiple signal options for trading.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📉', title: 'ADX', desc: 'Trend strength indicator.', text: `<b>ADX</b>\nAverage Directional Index (ADX) consists of three lines: +DI (blue, positive direction), -DI (red, negative direction), and the ADX line itself (trend strength).\n\nADX shows trend existence and power. +DI over -DI means an uptrend, -DI over +DI means a downtrend. ADX line value: above 25 — strong trend, below 20 — weak trend (flat).\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '💠', title: 'Fractals', desc: 'Local highs and lows.', text: `<b>Fractals</b>\nWilliams Fractals consist of five candles, where the middle one is either the highest (up fractal) or the lowest (down fractal). Up fractals act as resistance, down fractals as support.\n\nTraders wait for the pattern to complete before acting. Fractals help to clearly see price extremes on the chart. Wait for the last candle to close to confirm the fractal.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🕯️', title: 'RSI', desc: 'Relative Strength Index.', text: `<b>RSI</b>\nRelative Strength Index (RSI), developed by Welles Wilder in 1978, evaluates overbought (above 70) and oversold (below 30) states. Standard setting is 14 periods.\n\nFormula: RSI = 100 - (100 / (1 + (Average Gain / Average Loss))). It shows how many of the last 14 candles were bullish vs bearish. While RSI 70 indicates overbought, it doesn't guarantee an immediate reversal.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
];

const INDICATORS_ES = [
    { icon: '📈', title: 'Bandas de Bollinger', desc: 'Mide la volatilidad y posibles reversiones.', text: `<b>Bandas de Bollinger</b>\nLas bandas consisten en tres líneas que miden la volatilidad actual del mercado, creadas por John Bollinger. Fueron publicadas en 1987. Las bandas de Bollinger siguen siendo populares después de 30 años.\n\nLínea Central (ML) = Media Móvil Simple.\nBanda Superior = ML + (2 * Desviación Estándar).\nBanda Inferior = ML - (2 * Desviación Estándar).\n\nEl estrechamiento de las bandas indica baja volatilidad, el ensanchamiento indica alta volatilidad. Por defecto, el periodo es 20 y la desviación es 2.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📊', title: 'MACD', desc: 'Oscilador de fuerza de tendencia.', text: `<b>MACD</b>\nMACD es un oscilador de fuerza de tendencia construido sobre medias móviles. Se muestra en una ventana separada debajo del gráfico como un histograma con una línea auxiliar.\n\nEl histograma muestra el grado de divergencia de dos medias móviles. Si se alejan, las barras crecen; si se acercan, disminuyen. Movimiento fuerte = barras largas, lateral = barras cortas.\n\nHistograma sobre cero indica tendencia alcista, bajo cero indica tendencia bajista.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🔄', title: 'Oscilador Estocástico', desc: 'Búsqueda de zonas de sobrecompra y sobreventa.', text: `<b>Stochastic</b>\nDetermina el impulso del precio. Es un oscilador con dos líneas: %K (rápida) y %D (lenta). %K se calcula según el precio más reciente relativo a su máximo y mínimo. %D es una media móvil de %K.\n\nValores sobre 80 = sobrecompra (posible caída), bajo 20 = sobreventa (posible crecimiento). Dos líneas proporcionan múltiples opciones de señales.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📉', title: 'ADX', desc: 'Indicador de fuerza de tendencia.', text: `<b>ADX</b>\nConsiste en tres líneas: +DI (azul, dirección positiva), -DI (roja, dirección negativa) y la línea ADX (fuerza de la tendencia).\n\nADX muestra la existencia y potencia de la tendencia. +DI sobre -DI significa tendencia alcista, -DI sobre +DI tendencia bajista. Valor ADX: sobre 25 — tendencia fuerte, bajo 20 — tendencia débil (lateral).\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '💠', title: 'Fractales', desc: 'Máximos и mínimos locales.', text: `<b>Fractales</b>\nLos fractales de Williams consisten en cinco velas, donde la central es el máximo (fractal arriba) o el mínimo (fractal abajo). Arriba actúa como resistencia, abajo como soporte.\n\nSe recomienda esperar a que la última vela cierre para confirmar el fractal. Los fractales ayudan a ver claramente los extremos del precio en el gráfico.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🕯️', title: 'RSI', desc: 'Índice de Fuerza Relativa.', text: `<b>RSI</b>\nDesarrollado por Welles Wilder in 1978, evalúa estados de sobrecompra (sobre 70) y sobreventa (bajo 30). El ajuste estándar es de 14 periodos.\n\nFórmula: RSI = 100 - (100 / (1 + (Promedio Ganancia / Promedio Pérdida))). Muestra cuántas de las últimas 14 velas fueron alcistas frente a bajistas. Un RSI de 70 no garantiza un giro inmediato.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
];

const INDICATORS_FR = [
    { icon: '📈', title: 'Bandes de Bollinger', desc: 'Mesurer la volatilité et les retournements possibles.', text: `<b>Bandes de Bollinger</b>\nLes bandes se composent de trois lignes qui mesurent la volatilité actuelle du marché, créées par John Bollinger. Publiées en 1987. Elles restent populaires après 30 ans.\n\nLigne Centrale (ML) = Moyenne Mobile Simple.\nBande Supérieure = ML + (2 * Écart-type).\nBande Inferieure = ML - (2 * Écart-type).\n\nLe rétrécissement des bandes indique une faible volatilité, l'élargissement indique une forte volatilité. Par défaut, la période est de 20 et l'écart est de 2.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📊', title: 'MACD', desc: 'Oscillateur de force de tendance.', text: `<b>MACD</b>\nLe MACD est un oscillateur de force de tendance basé sur des moyennes mobiles. Il s'affichage dans une fenêtre séparée sous le graphique sous forme d'histogramme avec une ligne auxiliaire.\n\nL'histogramme montre le degré de divergence de deux moyennes mobiles. Si elles s'éloignent, les barres augmentent; si elles se rapprochent, elles diminuent. Mouvement fort = barres longues, plat = barres courtes.\n\nHistogramme au-dessus de zéro = tendance haussière, en dessous = tendance baissière.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🔄', title: 'Oscillateur Stochastique', desc: 'Recherche de zones de surachat et de survente.', text: `<b>Stochastic</b>\nDétermine l'impulsion du prix. Oscillateur à deux lignes : %K (rapide) et %D (lente). %K est calculé selon le prix récent. %D est une moyenne mobile de %K.\n\nValeurs supérieures à 80 = surachat (baisse possible), inférieures à 20 = survente (hausse possible). Deux lignes offrent de multiples options de signaux.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📉', title: 'ADX', desc: 'Indicateur de force de tendance.', text: `<b>ADX</b>\nComprend trois lignes : +DI (bleu, direction positive), -DI (rouge, direction négative) et la ligne ADX (force de la tendance).\n\nADX montre l'existence et la puissance de la tendance. +DI sur -DI = tendance haussière, -DI sur +DI = tendance baissière. Valeur ADX : > 25 — tendance forte, < 20 — tendance faible (plat).\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '💠', title: 'Fractales', desc: 'Plus hauts et plus bas locaux.', text: `<b>Fractales</b>\nLes fractales de Williams se composent de cinq bougies, la centrale étant soit la plus haute (fractale haute) soit la plus basse (fractale basse). Haut = résistance, Bas = support.\n\nAttendez que la dernière bougie se ferme pour confirmer la fractale. Les fractales aident à voir clairement les extrêmes de prix sur le graphique.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🕯️', title: 'RSI', desc: 'Indice de Force Relative.', text: `<b>RSI</b>\nDéveloppé par Welles Wilder en 1978, évalue les états de surachat (> 70) et de survente (< 30). Le réglage standard est de 14 périodes.\n\nFormule : RSI = 100 - (100 / (1 + (Gain Moyen / Perte Moyenne))). Montre combien des 14 dernières bougies étaient haussières ou baissières. Un RSI de 70 ne garantit pas un retournement immédiat.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
];

const INDICATORS_HI = [
    { icon: '📈', title: 'बोलिंजर बैंड', desc: 'अस्थिरता और संभावित उलटफेर मापें।', text: `<b>बोलिंजर बैंड</b>\nबोलिंजर बैंड में तीन लाइनें होती हैं जो वर्तमान बाजार की अस्थिरता को मापती हैं, जिसे जॉन बोलिंजर ने बनाया है। 1987 में प्रकाशित। बोलिंजर बैंड 30 साल बाद भी लोकप्रिय हैं।\n\nकेंद्रीय रेखा (ML) = सरल औसत (SMA)।\nऊपरी बैंड = ML + (2 * मानक विचलन)।\nनिचला बैंड = ML - (2 * मानक विचलन).\n\nबैंड का संकुचन कम अस्थिरता को दर्शाता है, विस्तार उच्च अस्थिरता को दर्शाता है। डिफ़ॉल्ट रूप से अवधि 20 और विचलन 2 है।\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📊', title: 'MACD', desc: 'ट्रेंड स्ट्रेंथ ऑसिलेटर।', text: `<b>MACD</b>\nMACD एक ट्रेंड स्ट्रेंथ ऑसिलेटर है जो मूविंग एवरेज पर आधारित है। यह चार्ट के नीचे एक अलग विंडो में एक सहायक लाइन के साथ हिस्टोग्राम के रूप में प्रदर्शित होता है।\n\nहिस्टोग्राम दो मूविंग एवरेज के बीच के अंतर की डिग्री दिखाता है। यदि वे एक-दूसरे से दूर जाते हैं, तो बार बढ़ते हैं; यदि वे पास आते हैं, तो वे घटते हैं। मजबूत चाल = लंबे बार, फ्लैट = छोटे बार।\n\nशून्य से ऊपर हिस्टोग्राम अपट्रेंड को दर्शाता है, शून्य से नीचे डाउनट्रेंड को दर्शाता है।\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🔄', title: 'स्टोकेस्टिक ऑसिलेटर', desc: 'ओवरबॉट और ओवरसोल्ड ज़ोन ढूँढना।', text: `<b>स्टोकेस्टिक</b>\nकीमत की गति निर्धारित करता है। यह दो लाइनों वाला एक ऑसिलेटर है: %K (तेज) और %D (धीमा)। %K की गणना अवधि के दौरान इसके उच्च और निम्न के सापेक्ष नवीनतम मूल्य के आधार पर की जाती है। %D %K का मूविंग एवरेज है।\n\n80 से ऊपर मान = ओवरबॉट (संभावित गिरावट), 20 से नीचे = ओवरसोल्ड (संभावित वृद्धि)। दो लाइनें ट्रेडिंग के लिए कई सिग्नल विकल्प प्रदान करती हैं।\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '📉', title: 'ADX', desc: 'ट्रेंड स्ट्रेंथ इंडिकेटर।', text: `<b>ADX</b>\nऔसत दिशात्मक सूचकांक (ADX) में तीन लाइनें होती हैं: +DI (नीला, सकारात्मक दिशा), -DI (लाल, नकारात्मक दिशा), और खुद ADX लाइन (ट्रेंड स्ट्रेंथ)।\n\nADX ट्रेंड के अस्तित्व और शक्ति को दर्शाता है। -DI के ऊपर +DI का अर्थ है अपट्रेंड, +DI के ऊपर -DI का अर्थ है डाउनट्रेंड। ADX लाइन मान: 25 से ऊपर — मजबूत ट्रेंड, 20 से नीचे — कमजोर ट्रेंड (फ्लैट)।\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '💠', title: 'फ्रैक्टल्स', desc: 'स्थानीय उच्च और निम्न।', text: `<b>फ्रैक्टल्स</b>\nविलियम्स फ्रैक्टल्स में पांच मोमबत्तियां होती हैं, जहां बीच वाली या तो सबसे ऊंची (ऊपर फ्रैक्टल) या सबसे निचली (नीचे फ्रैक्टल) होती है। ऊपर फ्रैक्टल प्रतिरोध के रूप में कार्य करता है, नीचे समर्थन के रूप में।\n\nकाम करने से पहले पैटर्न के पूरा होने का इंतजार करें। फ्रैक्टल चार्ट पर कीमत के चरम को स्पष्ट रूप से देखने में मदद करते हैं। फ्रैक्टल की पुष्टि के लिए पिछली मोमबत्ती के बंद होने का इंतजार करें।\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
    { icon: '🕯️', title: 'RSI', desc: 'सापेक्ष शक्ति सूचकांक।', text: `<b>RSI</b>\nरिलेटिव स्ट्रेंथ इंडेक्स (RSI), जिसे 1978 में वेल्स वाइल्डर द्वारा विकसित किया गया था, ओवरबॉट (70 से ऊपर) और ओवरसोल्ड (30 से नीचे) स्थितियों का मूल्यांकन करता है। मानक सेटिंग 14 अवधि है।\n\nसूत्र: RSI = 100 - (100 / (1 + (औसत लाभ / औसत हानि)))। यह दिखाता है कि पिछली 14 मोमबत्तियों में से कितनी बुलिश बनाम बेयरिश थीं। जबकि RSI 70 ओवरबॉट को इंगित करता है, यह तत्काल उलटफेर की गारंटी नहीं देता है।\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
];

const extractNamedArray = (filepath, arrayName) => {
    if (!fs.existsSync(filepath)) {
        console.warn(`Warning: ${filepath} not found.`);
        return [];
    }
    const content = fs.readFileSync(filepath, 'utf-8');

    // Support both "NAME: [" and "NAME = ["
    let startIdx = content.indexOf(`${arrayName}: [`);
    let offset = `${arrayName}: [`.length - 1;

    if (startIdx === -1) {
        startIdx = content.indexOf(`${arrayName} = [`);
        offset = `${arrayName} = [`.length - 1;
    }

    if (startIdx === -1) {
        // Try without property name for files that are just arrays
        if (content.trim().startsWith('[')) {
            try { return eval(content); } catch (e) { return []; }
        }
        console.warn(`Warning: ${arrayName} not found in ${filepath}.`);
        return [];
    }

    let brackets = 0;
    let result = "";
    for (let i = startIdx + offset; i < content.length; i++) {
        if (content[i] === '[') brackets++;
        else if (content[i] === ']') {
            brackets--;
            if (brackets === 0) {
                result = content.substring(startIdx + offset, i + 1);
                break;
            }
        }
    }
    try {
        return eval(result);
    } catch (e) {
        console.error(`Error parsing ${arrayName} from ${filepath}:`, e);
        return [];
    }
};

const languages = ['en', 'es', 'fr', 'hi'];
const indicatorsMap = {
    'ru': INDICATORS_RU,
    'en': INDICATORS_EN,
    'es': INDICATORS_ES,
    'fr': INDICATORS_FR,
    'hi': INDICATORS_HI
};

const finalContentObj = {};

// Russian from cleaned sources
finalContentObj.ru = {
    COURSES: extractNamedArray('c:/binarny/webapp/courses_orig.js', 'COURSES'),
    LESSONS: extractNamedArray('c:/binarny/webapp/lessons_orig.js', 'LESSONS'),
    BOOKS: [
        { title: 'ХОЗЯЕВА РЫНКОВ', icon: '📘', size: '11.3 МБ', file: 'Master the markets.pdf' },
        { title: 'Ордер блок', icon: '📗', size: '4.6 МБ', file: 'Order Block.pdf' },
        { title: 'SMT дивергенция', icon: '🧡', size: '5.5 МБ', file: 'SMT дивергенция.pdf' },
        { title: 'Цель', icon: '🎯', size: '2.6 МБ', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
        { title: 'Торговый алгоритм', icon: '📕', size: '15.3 МБ', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
        { title: 'Технический анализ', icon: '📘', size: '6.5 МБ', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
        { title: 'Визуальный инвестор', icon: '📗', size: '16.1 МБ', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
        { title: 'Имбаланс (FVG)', icon: '🧡', size: '4.4 МБ', file: 'Имбаланс (Fair Value Gap).pdf' },
        { title: 'Виды Имбаланса', icon: '🧡', size: '6.0 МБ', file: 'Имбаланс — Все Виды.pdf' },
        { title: 'Зональный Трейдинг', icon: '🎯', size: '1.8 МБ', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
        { title: 'Анализ фьючерсных рынков', icon: '📕', size: '9.3 МБ', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
        { title: 'Направление Рынка', icon: '📈', size: '0.3 МБ', file: 'Направление Рынка.pdf' },
        { title: 'РЕНДЖ _ Определение', icon: '📊', size: '1.3 МБ', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
        { title: 'Разумный Инвестор', icon: '💡', size: '8.2 МБ', file: 'Разумный Инвестор.pdf' },
        { title: 'Торговдя по Фибоначчи', icon: '📐', size: '5.7 МБ', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
        { title: 'Статистика', icon: '📊', size: '1.4 МБ', file: 'Статистика для трейдеров.pdf' },
        { title: 'Для начинающих', icon: '📘', size: '7.5 МБ', file: 'Технический_анализ_для_начинающих_14.pdf' },
        { title: 'Записки спекулянта', icon: '📖', size: '1.2 МБ', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
        { title: 'Энциклопедия трейдера', icon: '📚', size: '3.0 МБ', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' }
    ],
    INDICATORS: INDICATORS_RU
};

languages.forEach(lang => {
    const filepath = `c:/binarny/webapp/content_${lang}.js`;
    finalContentObj[lang] = {
        COURSES: extractNamedArray(filepath, 'COURSES'),
        LESSONS: extractNamedArray(filepath, 'LESSONS'),
        BOOKS: extractNamedArray(filepath, 'BOOKS'),
        INDICATORS: indicatorsMap[lang]
    };
});

const output = `const MARKET_CONTENT = ${JSON.stringify(finalContentObj, null, 4)};`;
fs.writeFileSync('c:/binarny/webapp/content.js', output, 'utf-8');
console.log("content.js built successfully with expanded indicator info and all 5 languages!");
