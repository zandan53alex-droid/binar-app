const MARKET_CONTENT = {
    ru: {
        COURSES: [
            {
                id: 'c0', icon: '📊', title: 'Основа трейдинга', desc: 'Процесс покупки и продажи активов, ликвидность, имбаланс и базовые понятия.',
                text: `📊 Что такое трейдинг\n\nТрейдинг — это процесс покупки и продажи финансовых активов с целью заработать на изменении цены.\nТрейдер анализирует рынок, графики и новости, чтобы определить, куда может пойти цена.\n\n💧 Ликвидность\nЛиквидность — это количество денег и ордеров на рынке.\nЧем больше ликвидности, тем легче купить или продать актив.\n\n⚡ Имбаланс\nЗона на графике, где цена двигалась очень быстро и не успела оставить сделок.\nТакие зоны часто притягивают цену обратно.\n\n📉 Поддержка\nУровень цены, где покупатели начинают активно покупать актив.\n\n📈 Сопротивление\nУровень цены, где продавцы начинают активно продавать.\n\n🕯 Свечной график\nСвечи показывают движение цены: открытие, закрытие, максимум, минимум.\nЗелёная свеча — цена выросла. Красная — упала.\n\n🎯 Тренд\nОбщее направление цены: восходящий, нисходящий, боковой.\n\n📊 Волатильность\nСкорость и сила изменения цены. Чем выше — тем быстрее рынок.\n\n🧠 Манипуляция рынка\nИскусственное движение цены для сбора стоп-ордеров.\n\n🪤 Снятие ликвидности\nСпециальный пробой уровней перед разворотом.\n\n📦 Консолидация\nДвижение цены в узком диапазоне.\n\n🚀 Импульс\nСильное движение в одну сторону.\n\n🔄 Ретест\nВозврат к пробитому уровню для проверки.\n\n🏦 Ордер блок\nЗона, где крупные игроки открывали большие позиции.\n\n⏱ Таймфрейм\nПериод времени одной свечи (1м, 5м, 1ч).\n\n📊 Пробой\nВыход цены за уровень поддержки или сопротивления.`
            },
            {
                id: 'c1', icon: '⚠️', title: 'Риск-менеджмент', desc: 'Процесс контроля потерь, правила управления капиталом и защита депозита.',
                text: `⚠️ Риск-менеджмент\n\nЭто система правил, которая помогает трейдеру контролировать потери и защищать капитал.\nГлавная цель — не потерять депозит из-за пары неудачных сделок.\n\n📉 Основной принцип\nРиск только малой частью депозита (1%, 2%, макс. 5%).\n\n🛡 Основные правила:\n1️⃣ Ограничивать риск на сделку.\n2️⃣ Не открывать слишком много сделок одновременно.\n3️⃣ Не пытаться отыграться после убытка.`
            },
            {
                id: 'c2', icon: '📊', title: 'Базовые основы анализа', desc: 'Технический и фундаментальный анализ, уровни, тренды.',
                text: `📊 Базовые основы анализа\n\n🔹 Технический анализ\nИзучение графиков для предсказания будущего движения цены.\n\n🔹 Базовые понятия:\n• Тренд — направление движения цены.\n• Поддержка — уровень защиты покупателей.\n• Сопротивление — уровень защиты продавцов.\n\n🔹 Типы анализа:\n1. Технический — анализ графиков и индикаторов.\n2. Фундаментальный — анализ новостей и экономики.\n3. Сентиментальный — анализ настроений (страх/жадность).`
            },
            {
                id: 'c4', icon: '🕯️', title: 'Паттерны', desc: 'Свечные паттерны разворота и продолжения тренда.',
                text: `🕯️ Паттерны в трейдинге\n\nПаттерны — это фигуры на графике, сигнализирующие о дальнейшем движении.\n\n🔹 Паттерны разворота:\n• Молот — длинная нижняя тень, малое тело.\n• Поглощение — большая свеча перекрывает предыдущую.\n• Доджи — тело почти отсутствует (открытие = закрытие).\n• Пинбар — длинная тень, малюсенькое тело у уровня.\n\n🔹 Паттерны продолжения:\n• Флаг — коррекция в виде прямоугольного канала.\n• Клин — сужающийся канал.\n• Треугольник — накопление перед пробоем.\n\n🔹 Применение:\nНайдите уровень -> Ждите паттерн -> Подтверждение индикатором -> Вход.`
            },
            {
                id: 'c5', icon: '📚', title: 'Психология трейдинга — содержание', desc: 'Полная программа курса: 8 модулей о психологии и мышлении трейдера.',
                text: `📘 Курс «Психология трейдера»\n\n🔹 Введение: Почему психология важнее стратегии.\n🔹 Модуль 1: Психика трейдера, эмоции (страх, жадность).\n🔹 Модуль 2: Эмоции в торговле (FOMO, азарт).\n🔹 Модуль 3: Управление собой, дисциплина, дневник.\n🔹 Модуль 4: Ошибки мышления (иллюзия контроля).\n🔹 Модуль 5: Деньги и психология (демо vs реал).\n🔹 Модуль 6: Долгосрочная устойчивость, баланс.\n🔹 Модуль 7: Практическая психология, правила стоп-лосса.\n🔹 Модуль 8: Психология профессионала, институциональное мышление.`
            }
        ],
        LESSONS: [
            { id: 1, icon: '🧠', title: 'Модуль 1. Основа психологии', desc: 'Как работает психика трейдера, биохимия эмоций и психологические ловушки.', text: `📘 Модуль 1. Основа психологии\n\nТрейдинг — это постоянный стресс-тест для психики. Мозг ищет стабильность, а рынок полон неопределенности.\n\n🔹 Реакции мозга: «бей или беги» (закрыть в панике), «замри» (игнорировать убыток), «погоня» (отыграться).\n🔹 Гормоны: Адреналин (мешает думать), Кортизол (стресс), Дофамин (зависимость от побед).\n🔹 Ловушки: Эйфория, Страх, Азарт, Жадность.\n\nВывод: Дисциплина — основа успеха. Следуйте своей торговой системе.` },
            { id: 2, icon: '😤', title: 'Модуль 2. Эмоции в торговле', desc: 'Страх, жадность, азарт и депрессия — как они влияют на сделки.', text: `📘 Модуль 2. Эмоции в торговле\n\n🔹 Страх (FOMO): Боязнь упустить выгоду заставляет входить на пике.\n🔹 Жадность: Переоценка сил после серии плюсов, увеличение рисков.\n🔹 Азарт: Превращение торговли в казино (ставки наугад).\n🔹 Депрессия: Потеря уверенности после серии убытков.\n\nНужно не бороться с эмоциями, а ограничивать их рамками системы (четкий риск-менеджмент).` },
            { id: 3, icon: '🎯', title: 'Модуль 3. Управление собой', desc: 'Торговый распорядок, дневник трейдера и методы борьбы со стрессом.', text: `📘 Модуль 3. Управление собой\n\n🔹 Торговый распорядок: Определите часы работы (например, с 10 до 13).\n🔹 Правила входа: Только по сигналу, риск <= 2%.\n🔹 Дневник сделок: Записывайте причину входа, результат и ваши эмоции. Это ключ к работе над ошибками.\n🔹 Отдых: Перерывы каждый час, физическая активность.\n\nГлавное — сохранить ясность ума.` },
            { id: 4, icon: '🪤', title: 'Модуль 4. Ошибки мышления', desc: 'Когнитивные ловушки: иллюзия контроля, синдром «я всё знаю», revenge trading.', text: `📘 Модуль 4. Ошибки мышления\n\n🔹 Иллюзия контроля: Перенос стопов в надежде, что рынок развернется.\n🔹 Синдром «Я все знаю»: Игнорирование рисков после побед.\n🔹 Revenge Trading: Желание отыграться любой ценой сразу после убытка.\n🔹 Предвзятость: Поиск только той информации, которая подтверждает ваше желание войти в сделку.\n\nЧтобы избежать этого, всегда действуйте строго по заранее написанному плану.` },
            { id: 5, icon: '💰', title: 'Модуль 5. Деньги и психология', desc: 'Как размер депозита влияет на эмоции, и почему демо ≠ реал.', text: `📘 Модуль 5. Деньги и психология\n\n🔹 Зависимость от суммы: Малый счет — завышенный риск. Большой счет — страх потери.\n🔹 Демо vs Реал: На демо нет давления денег, поэтому стратегия работает отлично. На реале — вмешиваются эмоции.\n🔹 Защита психики: Риск на сделку должен быть комфортным (не более 2%).\n🔹 Оценка успеха: Оценивайте не результат отдельной сделки, а то, насколько правильно вы следовали своей системе.` },
            { id: 6, icon: '🏆', title: 'Модуль 6. Долгосрочная устойчивость', desc: 'Формирование характера, реалистичные цели и профилактика выгорания.', text: `📘 Модуль 6. Долгосрочная устойчивость\n\n🔹 Трейдерский характер: Терпение, дисциплина, способность ждать лучшего сигнала.\n🔹 Цели (SMART): Ставьте реалистичные цели (например, 2-5% в месяц стабильно, а не «удвоить депозит за день»).\n🔹 Баланс: Трейдинг не должен занимать всё время. Спорт, отдых, хобби защищают от профессионального выгорания.\n\nТрейдинг — это марафон, а не спринт.` },
            { id: 7, icon: '🛠️', title: 'Модуль 7. Практическая психология', desc: 'Упражнения для дисциплины, «эмоциональный стоп-лосс» и визуализация.', text: `📘 Модуль 7. Практическая психология\n\n🔹 Эмоциональный стоп-лосс: При первых признаках тильта, злости или азарта — немедленно закройте терминал.\n🔹 Тренировка паузы: Перед входом в сделку выждите 60 секунд. Оцените, это система или эмоция.\n🔹 Визуализация: Проработайте в уме оба исхода сделки (плюс и минус). Примите убыток еще до входа.\n🔹 Анализ: Была ли сделка по плану? Если да, то даже убыточная — это хорошая сделка.` },
            { id: 8, icon: '👑', title: 'Модуль 8. Психология профессионала', desc: 'Мышление институционального трейдера и путь от новичка до мастера.', text: `📘 Модуль 8. Психология профессионала\n\n🔹 Подход фондов: Институционалы торгуют теорию вероятностей, мыслят сериями сделок (10, 50, 100), а не переживают за одну единственную.\n🔹 Холодный рассудок: Полная отвязка эмоций от результатов сделки. Прибыль — это просто цифры, убыток — просто расходы бизнеса.\n🔹 Эволюция: Новичок ищет философский камень на рынке. Профессионал выстраивает скучную, но прочную и стабильную систему математического ожидания.` }
        ],
        BOOKS: [
            { title: 'Master the Markets', icon: '📘', size: '11.3 MB', file: 'Master the markets.pdf' },
            { title: 'Order Block', icon: '📗', size: '4.6 MB', file: 'Order Block.pdf' },
            { title: 'SMT Дивергенция', icon: '🧡', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
            { title: 'Цель: Как достигать', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
            { title: 'Торговый алгоритм', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
            { title: 'Технический анализ', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
            { title: 'Визуальный инвестор', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
            { title: 'Имбаланс (FVG)', icon: '🧡', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
            { title: 'Имбаланс — Виды', icon: '🧡', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
            { title: 'Зональный трейдинг', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
            { title: 'Теханализ Фьючерсов', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
            { title: 'Направление рынка', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
            { title: 'Рендж: Определение', icon: '📊', size: '1.3 MB', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
            { title: 'Разумный инвестор', icon: '💡', size: '8.2 MB', file: 'Разумный Инвестор.pdf' },
            { title: 'Торговля по Фибоначчи', icon: '📐', size: '5.7 MB', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
            { title: 'Статистика', icon: '📊', size: '1.4 MB', file: 'Статистика для трейдеров.pdf' },
            { title: 'Для Начинающих', icon: '📘', size: '7.5 MB', file: 'Технический_анализ_для_начинающих_14.pdf' },
            { title: 'Воспоминания спекулянта', icon: '📖', size: '1.2 MB', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
            { title: 'Энциклопедия трейдера', icon: '📚', size: '3.0 MB', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' }
        ],
        INDICATORS: [
            { icon: '📈', title: 'Bollinger Bands', desc: 'Волны Боллинджера: измерение волатильности и зон разворота.', text: `<b>Волны Боллинджера</b>\nОтображают волатильность рынка.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nТрейдеры используют сужение или расширение полос для поиска импульсов. Центральная линия выступает средней скользящей.` },
            { icon: '📊', title: 'MACD', desc: 'Трендовый осциллятор для силы тренда.', text: `<b>MACD</b>\nИндикатор демонстрирует схождение/расхождение скользящих средних.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nГистограмма выше нуля — бычий тренд, ниже нуля — медвежий.` },
            { icon: '🔄', title: 'Stochastic Oscillator', desc: 'Поиск зон перекупленности и перепроданности.', text: `<b>Стохастик</b>\nОпределяет импульс цены.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nЗначение выше 80 = перекупленность (возможен спад). Ниже 20 = перепроданность (возможен рост).` },
            { icon: '📉', title: 'ADX', desc: 'Индикатор силы тренда.', text: `<b>ADX</b>\nПоказывает, насколько силен текущий тренд.\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nБольше 25 — тренд сильный, менее 20 — флэт (слабый тренд).` },
            { icon: '💠', title: 'Fractals', desc: 'Локальные максимумы и минимумы.', text: `<b>Фракталы</b>\nПомогают найти точки разворота цены.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nФрактал вниз: поддержка. Фрактал вверх: сопротивление.` },
            { icon: '🕯️', title: 'RSI', desc: 'Индекс относительной силы.', text: `<b>RSI</b>\nОценивает перекупленность и перепроданность актива.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nУровни 70 и 30 служат сигнальными границами.` }
        ]
    },
    en: {
        COURSES: [
            { id: 'c0', icon: '📊', title: 'Trading Basics', desc: 'Buying and selling assets, liquidity, imbalance and concepts.', text: `📊 Trading Basics\n\nTrading is buying and selling financial assets to profit.\n\n💧 Liquidity\nThe amount of money and orders in the market.\n\n⚡ Imbalance\nA gap left by rapid price movement.\n\n📉 Support & 📈 Resistance\nLevels where buyers or sellers actively defend the price.\n\n🕯 Candlesticks\nShow price movement over time (Open, High, Low, Close).\n\n🎯 Trend & 📦 Consolidation\nDirection of market or sideways movement.\n\n⏱ Timeframes\nThe time duration of a single candle.` },
            { id: 'c1', icon: '⚠️', title: 'Risk Management', desc: 'Controlling losses and protecting your capital.', text: `⚠️ Risk Management\n\nRules to protect your capital from ruin.\n\n📉 Main Principle\nRisk only a small portion (1-2%) of your balance per trade.\n\n🛡 Rules:\n1️⃣ Strictly limit risk.\n2️⃣ Avoid overtrading.\n3️⃣ Never revenge trade after a loss.` },
            { id: 'c2', icon: '📊', title: 'Basic Analysis', desc: 'Technical and fundamental analysis.', text: `📊 Analysis\n\n🔹 Technical: Studying charts and patterns.\n🔹 Fundamental: Economic data and news.\n🔹 Sentimental: Market fear and greed.` },
            { id: 'c4', icon: '🕯️', title: 'Patterns', desc: 'Reversal and continuation candlestick patterns.', text: `🕯️ Patterns\n\nPatterns are chart formations predicting movement.\n\n🔹 Reversals: Hammer, Engulfing, Doji, Pinbar.\n🔹 Continuations: Flag, Wedge, Triangle.\n\nWait for pattern completion + level confirmation.` },
            { id: 'c5', icon: '📚', title: 'Trading Psychology', desc: '8 modules regarding trader mindset.', text: `📘 Psychology Course\n\n🔹 Modules covering emotional traps, discipline, risk management, cognitive biases, and adopting a professional institutional mindset.` }
        ],
        LESSONS: [
            { id: 1, icon: '🧠', title: 'Module 1. Foundation', desc: 'How trader psychology works, hormones and traps.', text: `📘 Psy Foundation\n\nYour brain seeks safety, but markets are uncertain. Hormones like adrenaline and dopamine cloud judgment. Discipline is the only cure.` },
            { id: 2, icon: '😤', title: 'Module 2. Emotions', desc: 'Fear, Greed, Excitement, Depression.', text: `📘 Emotions\n\nFOMO (Fear of Missing Out) makes you buy high. Greed makes you hold too long. Follow system rules to mitigate them.` },
            { id: 3, icon: '🎯', title: 'Module 3. Self-Management', desc: 'Trading routine, journal, stress relief.', text: `📘 Routine\n\nEstablish strict trading hours. Keep a detailed journal to track mistakes. Take physical breaks.` },
            { id: 4, icon: '🪤', title: 'Module 4. Cognitive Biases', desc: 'Illusion of control, revenge trading.', text: `📘 Biases\n\nDo not move your stop-loss hoping for a reversal. Accept losses. Never enter immediate "revenge" trades to win back money.` },
            { id: 5, icon: '💰', title: 'Module 5. Money', desc: 'Why demo is different from a live account.', text: `📘 Money\n\nDemo trading lacks emotional pressure. When real money is at stake, you hesitate. Risk sizes must be small enough to stay calm.` },
            { id: 6, icon: '🏆', title: 'Module 6. Endurance', desc: 'Setting SMART goals and avoiding burnout.', text: `📘 Endurance\n\nTrading is a marathon. Aim for steady 2-5% monthly gains, not 100% overnight. Keep a life balance.` },
            { id: 7, icon: '🛠️', title: 'Module 7. Practice', desc: 'Mental visualization and emotional stop-loss.', text: `📘 Practice\n\nIf you feel angry or tilted, close the terminal immediately (Emotional Stop-loss). Mentally accept the loss before entering.` },
            { id: 8, icon: '👑', title: 'Module 8. Pro Mindset', desc: 'Institutional thinking.', text: `📘 Professional\n\nPros trade probabilities over a series of 100 trades. A single loss is just a business expense. Keep it cold and systematic.` }
        ],
        BOOKS: [
            { title: 'Master the Markets', icon: '📘', size: '11.3 MB', file: 'Master the markets.pdf' },
            { title: 'Order Block', icon: '📗', size: '4.6 MB', file: 'Order Block.pdf' },
            { title: 'SMT Divergence', icon: '🧡', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
            { title: 'The Goal', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
            { title: 'Trading Algorithm', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
            { title: 'Technical Analysis', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
            { title: 'Visual Investor', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
            { title: 'Imbalance (FVG)', icon: '🧡', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
            { title: 'Imbalance Types', icon: '🧡', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
            { title: 'Trading in the Zone', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
            { title: 'Futures Tech Analysis', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
            { title: 'Market Direction', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
            { title: 'Range Trading', icon: '📊', size: '1.3 MB', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
            { title: 'Intelligent Investor', icon: '💡', size: '8.2 MB', file: 'Разумный Инвестор.pdf' },
            { title: 'Fibonacci Trading', icon: '📐', size: '5.7 MB', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
            { title: 'Trading Statistics', icon: '📊', size: '1.4 MB', file: 'Статистика для трейдеров.pdf' },
            { title: 'For Beginners', icon: '📘', size: '7.5 MB', file: 'Технический_анализ_для_начинающих_14.pdf' },
            { title: 'Reminiscences of a Speculator', icon: '📖', size: '1.2 MB', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
            { title: 'Trader Encyclopedia', icon: '📚', size: '3.0 MB', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' }
        ],
        INDICATORS: [
            { icon: '📈', title: 'Bollinger Bands', desc: 'Measure volatility and possible reversals.', text: `<b>Bollinger Bands</b>\nShows market volatility.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nWidening bands = High volatility. Narrow bands = Low volatility.` },
            { icon: '📊', title: 'MACD', desc: 'Trend strength oscillator.', text: `<b>MACD</b>\nMoving Average Convergence Divergence.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nHistogram above 0 = Bullish. Below 0 = Bearish.` },
            { icon: '🔄', title: 'Stochastic', desc: 'Overbought and oversold zones.', text: `<b>Stochastic</b>\nMomentum oscillator.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nAbove 80 = Overbought. Below 20 = Oversold.` },
            { icon: '📉', title: 'ADX', desc: 'Trend direction strength.', text: `<b>ADX</b>\nShows trend strength.\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nValue > 25 indicates a strong trend.` },
            { icon: '💠', title: 'Fractals', desc: 'Local highs and lows.', text: `<b>Fractals</b>\nHelp find turning points.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\nUp/Down arrows showing short-term support and resistance.` },
            { icon: '🕯️', title: 'RSI', desc: 'Relative Strength Index.', text: `<b>RSI</b>\nMeasures speed of price movements.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\n70 is overbought, 30 is oversold.` }
        ]
    },
    es: {
        COURSES: [
            { id: 'c0', icon: '📊', title: 'Conceptos Básicos', desc: 'Compra y venta, liquidez, desequilibrio.', text: `📊 Básicos de Trading\nEl trading es comprar y vender activos para obtener ganancias.\n\n💧 Liquidez: Cantidad de dinero y órdenes en el mercado.\n⚡ Desequilibrio: Brecha rápida en el precio.\n📉 Soporte y 📈 Resistencia: Niveles clave.\n⏱ Temporalidad: Duración de una vela.` },
            { id: 'c1', icon: '⚠️', title: 'Gestión de Riesgos', desc: 'Protege tu capital de pérdidas.', text: `⚠️ Gestión de Riesgos\nRegla de oro: Arriesga solo el 1-2% por operación.\nNunca operes por venganza tras una pérdida.` },
            { id: 'c2', icon: '📊', title: 'Análisis Básico', desc: 'Análisis técnico y fundamental.', text: `📊 Análisis\nTécnico: Gráficos. Fundamental: Noticias económicas.` },
            { id: 'c4', icon: '🕯️', title: 'Patrones', desc: 'Patrones de velas japonesas.', text: `🕯️ Patrones\nReversiones: Martillo, Doji.\nContinuación: Bandera, Triángulo.` },
            { id: 'c5', icon: '📚', title: 'Psicología del Trading', desc: 'Módulos sobre la mentalidad.', text: `📘 Curso de Psicología\nTrampas emocionales, disciplina, y cómo pensar como un profesional.` }
        ],
        LESSONS: [
            { id: 1, icon: '🧠', title: 'Módulo 1. Base', desc: 'Psicología y trampas.', text: `📘 Base\nEvite el miedo y la codicia. Mantenga la disciplina.` },
            { id: 2, icon: '😤', title: 'Módulo 2. Emociones', desc: 'FOMO y miedo.', text: `📘 Emociones\nNo opere por impulso.` },
            { id: 3, icon: '🎯', title: 'Módulo 3. Rutina', desc: 'Horario y diario.', text: `📘 Rutina\nLleve un diario de operaciones estricto.` },
            { id: 4, icon: '🪤', title: 'Módulo 4. Sesgos', desc: 'Venganza y falso control.', text: `📘 Sesgos\nAcepte sus pérdidas. No mueva el stop-loss.` },
            { id: 5, icon: '💰', title: 'Módulo 5. Dinero', desc: 'Cuenta demo vs real.', text: `📘 Dinero\nEl dinero real trae presión. Opere pequeño.` },
            { id: 6, icon: '🏆', title: 'Módulo 6. Resistencia', desc: 'Evitar el agotamiento.', text: `📘 Resistencia\nBusque ganancias estables (2-5% mensual).` },
            { id: 7, icon: '🛠️', title: 'Módulo 7. Práctica', desc: 'Stop-loss emocional.', text: `📘 Práctica\nSi se enoja, cierre la plataforma.` },
            { id: 8, icon: '👑', title: 'Módulo 8. Profesional', desc: 'Mentalidad institucional.', text: `📘 Pro\nPiense en probabilidades a largo plazo.` }
        ],
        BOOKS: [
            { title: 'Master the Markets', icon: '📘', size: '11.3 MB', file: 'Master the markets.pdf' },
            { title: 'Order Block', icon: '📗', size: '4.6 MB', file: 'Order Block.pdf' },
            { title: 'SMT Divergence', icon: '🧡', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
            { title: 'The Goal', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
            { title: 'Trading Algorithm', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
            { title: 'Technical Analysis', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
            { title: 'Visual Investor', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
            { title: 'Imbalance (FVG)', icon: '🧡', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
            { title: 'Imbalance Types', icon: '🧡', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
            { title: 'Trading in the Zone', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
            { title: 'Futures Tech Analysis', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
            { title: 'Market Direction', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
            { title: 'Range Trading', icon: '📊', size: '1.3 MB', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
            { title: 'Intelligent Investor', icon: '💡', size: '8.2 MB', file: 'Разумный Инвестор.pdf' },
            { title: 'Fibonacci Trading', icon: '📐', size: '5.7 MB', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
            { title: 'Trading Statistics', icon: '📊', size: '1.4 MB', file: 'Статистика для трейдеров.pdf' },
            { title: 'For Beginners', icon: '📘', size: '7.5 MB', file: 'Технический_анализ_для_начинающих_14.pdf' },
            { title: 'Speculator', icon: '📖', size: '1.2 MB', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
            { title: 'Trader Encyclopedia', icon: '📚', size: '3.0 MB', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' }
        ],
        INDICATORS: [
            { icon: '📈', title: 'Bandas de Bollinger', desc: 'Volatilidad.', text: `Mide la volatilidad.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '📊', title: 'MACD', desc: 'Fuerza de tendencia.', text: `Fuerza de la tendencia.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '🔄', title: 'Estocástico', desc: 'Sobrecompra y sobreventa.', text: `Oscilador.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '📉', title: 'ADX', desc: 'Fuerza direccional.', text: `Determina tendencias fuertes.\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '💠', title: 'Fractales', desc: 'Máximos y mínimos.', text: `Puntos de retroceso.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '🕯️', title: 'RSI', desc: 'Índice de fuerza.', text: `Mide movimientos.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
        ]
    },
    fr: {
        COURSES: [
            { id: 'c0', icon: '📊', title: 'Base du Trading', desc: 'Bases et concepts du marché.', text: `📊 Bases\nBases du trading, liquidité et prix.` },
            { id: 'c1', icon: '⚠️', title: 'Gestion des Risques', desc: 'Protéger le capital.', text: `⚠️ Risques\nNe risquez que 1 à 2 % par transaction.` },
            { id: 'c2', icon: '📊', title: 'Analyse', desc: 'Analyse technique et fondamentale.', text: `📊 Analyse\nGraphiques et nouvelles.` },
            { id: 'c4', icon: '🕯️', title: 'Modèles', desc: 'Bougies japonaises.', text: `🕯️ Modèles\nModèles d'inversion et de continuation.` },
            { id: 'c5', icon: '📚', title: 'Psychologie', desc: 'Mentale du trader.', text: `📘 Psychologie\nConstruire une discipline solide.` }
        ],
        LESSONS: [
            { id: 1, icon: '🧠', title: 'Module 1. Base', desc: 'Base psychologique.', text: `📘 Discipline avant tout.` },
            { id: 2, icon: '😤', title: 'Module 2. Émotions', desc: 'La peur et la cupidité.', text: `📘 Gérez la peur de manquer (FOMO).` },
            { id: 3, icon: '🎯', title: 'Module 3. Routine', desc: 'Définir une journée type.', text: `📘 Tenez un journal de trading.` },
            { id: 4, icon: '🪤', title: 'Module 4. Biais', desc: 'Pièges mentaux.', text: `📘 Ne vengez pas une perte.` },
            { id: 5, icon: '💰', title: 'Module 5. Argent', desc: 'Compte de démonstration.', text: `📘 Misez de petits montants.` },
            { id: 6, icon: '🏆', title: 'Module 6. Endurance', desc: 'La marathon.', text: `📘 Évitez l'épuisement.` },
            { id: 7, icon: '🛠️', title: 'Module 7. Pratique', desc: 'Visualisation.', text: `📘 Arrêtez si vous êtes en colère.` },
            { id: 8, icon: '👑', title: 'Module 8. Pro', desc: 'Pensée en probabilités.', text: `📘 Soyez comme une institution.` }
        ],
        BOOKS: [
            { title: 'Master the Markets', icon: '📘', size: '11.3 MB', file: 'Master the markets.pdf' },
            { title: 'Order Block', icon: '📗', size: '4.6 MB', file: 'Order Block.pdf' },
            { title: 'SMT Divergence', icon: '🧡', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
            { title: 'The Goal', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
            { title: 'Trading Algorithm', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
            { title: 'Technical Analysis', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
            { title: 'Visual Investor', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
            { title: 'Imbalance (FVG)', icon: '🧡', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
            { title: 'Imbalance Types', icon: '🧡', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
            { title: 'Trading in the Zone', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
            { title: 'Futures Tech Analysis', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
            { title: 'Market Direction', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
            { title: 'Range Trading', icon: '📊', size: '1.3 MB', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
            { title: 'Intelligent Investor', icon: '💡', size: '8.2 MB', file: 'Разумный Инвестор.pdf' },
            { title: 'Fibonacci Trading', icon: '📐', size: '5.7 MB', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
            { title: 'Trading Statistics', icon: '📊', size: '1.4 MB', file: 'Статистика для трейдеров.pdf' },
            { title: 'For Beginners', icon: '📘', size: '7.5 MB', file: 'Технический_анализ_для_начинающих_14.pdf' },
            { title: 'Speculator', icon: '📖', size: '1.2 MB', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
            { title: 'Trader Encyclopedia', icon: '📚', size: '3.0 MB', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' }
        ],
        INDICATORS: [
            { icon: '📈', title: 'Bandes de Bollinger', desc: 'Volatilité.', text: `Volatilité.\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '📊', title: 'MACD', desc: 'Force de la tendance.', text: `Tendance.\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '🔄', title: 'Stochastique', desc: 'Surachat.', text: `Surachat / Survente.\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '📉', title: 'ADX', desc: 'Force directionnelle.', text: `Force.\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '💠', title: 'Fractales', desc: 'Points hauts.', text: `Virages.\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '🕯️', title: 'RSI', desc: 'Index de force.', text: `Relatif.\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
        ]
    },
    hi: {
        COURSES: [
            { id: 'c0', icon: '📊', title: 'ट्रेडिंग मूल बातें', desc: 'संपत्ति खरीदना और बेचना।', text: `📊 बेसिक्स\nलिक्विडिटी, इंबैलेंस और ट्रेंड।` },
            { id: 'c1', icon: '⚠️', title: 'जोखिम प्रबंधन', desc: 'पूंजी बचाएं।', text: `⚠️ रिस्क\nसिर्फ 1-2% का रिस्क लें।` },
            { id: 'c2', icon: '📊', title: 'विश्लेषण', desc: 'तकनीकी जानकारी।', text: `📊 एनालिसिस\nमूल और तकनीकी अध्ययन।` },
            { id: 'c4', icon: '🕯️', title: 'कैंडलस्टिक', desc: 'पैटर्न की जानकारी।', text: `🕯️ पैटर्न\nचार्ट पैटर्न समझें।` },
            { id: 'c5', icon: '📚', title: 'मनोविज्ञान', desc: 'ट्रेडर का दिमाग।', text: `📘 साइकोलॉजी\nभावनाओं पर काबू।` }
        ],
        LESSONS: [
            { id: 1, icon: '🧠', title: 'यूनिट 1. बेसिक्स', desc: 'दिमाग का काम।', text: `📘 फाउंडेशन।` },
            { id: 2, icon: '😤', title: 'यूनिट 2. भावनाएं', desc: 'लालच और डर।', text: `📘 डर से बचें।` },
            { id: 3, icon: '🎯', title: 'यूनिट 3. डायरी', desc: 'रूटीन बनाएं।', text: `📘 अपनी गलतियां लिखें।` },
            { id: 4, icon: '🪤', title: 'यूनिट 4. धारणा', desc: 'बदला लेने की ट्रेडिंग।', text: `📘 नियंत्रण न खोएं।` },
            { id: 5, icon: '💰', title: 'यूनिट 5. पैसा', desc: 'डेमो।', text: `📘 पैसे का तनाव।` },
            { id: 6, icon: '🏆', title: 'यूनिट 6. धीरज', desc: 'मंजिल दूर है।', text: `📘 धैर्य रखें।` },
            { id: 7, icon: '🛠️', title: 'यूनिट 7. प्रैक्टिस', desc: 'रोकना सीखें।', text: `📘 क्रोधित होने पर ट्रेडिंग रोके।` },
            { id: 8, icon: '👑', title: 'यूनिट 8. प्रो', desc: 'प्रो स्तर।', text: `📘 प्रोफ़ेशनल सोच।` }
        ],
        BOOKS: [
            { title: 'Master the Markets', icon: '📘', size: '11.3 MB', file: 'Master the markets.pdf' },
            { title: 'Order Block', icon: '📗', size: '4.6 MB', file: 'Order Block.pdf' },
            { title: 'SMT Divergence', icon: '🧡', size: '5.5 MB', file: 'SMT дивергенция.pdf' },
            { title: 'The Goal', icon: '🎯', size: '2.6 MB', file: 'Smart_reading_Sbornikisammar_Cel_Kak_Opredelyat_I_Dost_mobi.pdf' },
            { title: 'Trading Algorithm', icon: '📕', size: '15.3 MB', file: 'Алексей_Фомин_торговый_алгоритм.pdf' },
            { title: 'Technical Analysis', icon: '📘', size: '6.5 MB', file: 'Джек_Швагер_Технический_анализ_полный_курс.pdf' },
            { title: 'Visual Investor', icon: '📗', size: '16.1 MB', file: 'Джон Мэрфи - Визуальный_инвестор.pdf' },
            { title: 'Imbalance (FVG)', icon: '🧡', size: '4.4 MB', file: 'Имбаланс (Fair Value Gap).pdf' },
            { title: 'Imbalance Types', icon: '🧡', size: '6.0 MB', file: 'Имбаланс — Все Виды.pdf' },
            { title: 'Trading in the Zone', icon: '🎯', size: '1.8 MB', file: 'Марк Дуглас - Зональный Трейдинг.pdf' },
            { title: 'Futures Tech Analysis', icon: '📕', size: '9.3 MB', file: 'Мерфи_Технический_анализ_фьючерсных_рынков.pdf' },
            { title: 'Market Direction', icon: '📈', size: '0.3 MB', file: 'Направление Рынка.pdf' },
            { title: 'Range Trading', icon: '📊', size: '1.3 MB', file: 'РЕНДЖ _ Определение и Торговля.pdf' },
            { title: 'Intelligent Investor', icon: '💡', size: '8.2 MB', file: 'Разумный Инвестор.pdf' },
            { title: 'Fibonacci Trading', icon: '📐', size: '5.7 MB', file: 'Роберт_Фишер_Новые_методы_торговли_по_Фибоначчи.pdf' },
            { title: 'Trading Statistics', icon: '📊', size: '1.4 MB', file: 'Статистика для трейдеров.pdf' },
            { title: 'For Beginners', icon: '📘', size: '7.5 MB', file: 'Технический_анализ_для_начинающих_14.pdf' },
            { title: 'Speculator', icon: '📖', size: '1.2 MB', file: 'Эдвин_Лефевр_Воспоминания_биржевого_спекулянта.pdf' },
            { title: 'Trader Encyclopedia', icon: '📚', size: '3.0 MB', file: 'Эрик_Найман_Малая_энциклопедия_трейдера.pdf' }
        ],
        INDICATORS: [
            { icon: '📈', title: 'Bollinger', desc: 'अस्थिरता।', text: `अस्थिरता नापें।\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '📊', title: 'MACD', desc: 'ट्रेंड की ताकत।', text: `ताकत\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '🔄', title: 'Stochastic', desc: 'ओवरबॉट।', text: `स्तर\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '📉', title: 'ADX', desc: 'दिशा।', text: `ट्रेंड\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '💠', title: 'Fractals', desc: 'फ्रैक्टल्स।', text: `स्तर\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` },
            { icon: '🕯️', title: 'RSI', desc: 'आरएसआई।', text: `ताकत\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">` }
        ]
    }
};
