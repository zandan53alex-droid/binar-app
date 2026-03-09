import codecs

def extract_array_string(filepath):
    with codecs.open(filepath, 'r', 'utf-8') as f:
        content = f.read()
    start = content.find('[')
    end = content.rfind(']')
    return content[start:end+1]

ru_courses_str = extract_array_string('c:/binarny/webapp/courses_orig.js')
ru_lessons_str = extract_array_string('c:/binarny/webapp/lessons_orig.js')

# The existing content.js has the structure, let's read the EN, ES, FR, HI files
def extract_object_string(filepath):
    with codecs.open(filepath, 'r', 'utf-8') as f:
        content = f.read()
    start = content.find('{')
    end = content.rfind('};')
    if end == -1:
        end = content.rfind('}')
    return content[start:end+1]

en_str = extract_object_string('c:/binarny/webapp/content_en.js')
es_str = extract_object_string('c:/binarny/webapp/content_es.js')
fr_str = extract_object_string('c:/binarny/webapp/content_fr.js')
hi_str = extract_object_string('c:/binarny/webapp/content_hi.js')

ru_books_str = """[
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
    ]"""

ru_indicators_str = """[
        { icon: '📈', title: 'Bollinger Bands (Линии Боллинджера)', desc: 'Показывает волатильность и возможные развороты.', text: `<b>Bollinger Bands</b>\\nПоказывает волатильность рынка.\\n<img src="./bollinger.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\\nТрейдеры используют сужение или расширение полос для поиска импульсов. Средняя линия выступает в роли скользящей средней.` },
        { icon: '📊', title: 'MACD', desc: 'Осциллятор силы тренда.', text: `<b>MACD</b>\\nИндикатор показывает схождение/расхождение скользящих средних.\\n<img src="./macd.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\\nГистограмма выше нуля — бычий тренд, ниже нуля — медвежий.` },
        { icon: '🔄', title: 'Stochastic Oscillator', desc: 'Поиск зон перекупленности и перепроданности.', text: `<b>Stochastic</b>\\nОпределяет импульс цены.\\n<img src="./stochastic.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\\nЗначение выше 80 = перекупленность (возможен спад). Ниже 20 = перепроданность (возможен рост).` },
        { icon: '📉', title: 'ADX', desc: 'Индикатор силы тренда.', text: `<b>ADX</b>\\nПоказывает, насколько силен текущий тренд.\\n<img src="./adx.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\\nВыше 25 — сильный тренд, ниже 20 — флэт (слабый тренд).` },
        { icon: '💠', title: 'Fractals (Фракталы)', desc: 'Локальные максимумы и минимумы.', text: `<b>Фракталы</b>\\nПомогают находить точки разворота цены.\\n<img src="./fractals.jpg?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\\nФрактал вниз: поддержка. Фрактал вверх: сопротивление.` },
        { icon: '🕯️', title: 'RSI', desc: 'Индекс относительной силы.', text: `<b>RSI</b>\\nОценивает состояния перекупленности и перепроданности актива.\\n<img src="./rsi.png?v=61" style="width:100%; border-radius:10px; margin:10px 0;">\\nУровни 70 и 30 служат границами сигналов.` }
    ]"""

ru_str = f"""{{
    COURSES: {ru_courses_str},
    LESSONS: {ru_lessons_str},
    BOOKS: {ru_books_str},
    INDICATORS: {ru_indicators_str}
}}"""

final_content = f"""const MARKET_CONTENT = {{
    ru: {ru_str},
    en: {en_str},
    es: {es_str},
    fr: {fr_str},
    hi: {hi_str}
}};
"""

with codecs.open('c:/binarny/webapp/content.js', 'w', 'utf-8') as f:
    f.write(final_content)

print("content.js built successfully with all 5 languages and full text!")
