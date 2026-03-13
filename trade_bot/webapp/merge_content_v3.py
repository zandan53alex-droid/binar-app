import codecs
import os

def extract_array(filepath, array_name):
    if not os.path.exists(filepath):
        print(f"Warning: {filepath} not found.")
        return "[]"
    with codecs.open(filepath, 'r', 'utf-8') as f:
        content = f.read()
    
    # Try different ways to find the array
    for pattern in [f"{array_name}: [", f"{array_name} = [", f"{array_name}:[", f"{array_name}= ["]:
        idx = content.find(pattern)
        if idx != -1:
            start_idx = idx + len(pattern) - 1 # Position of '['
            count = 0
            for i in range(start_idx, len(content)):
                if content[i] == '[': count += 1
                elif content[i] == ']': count -= 1
                if count == 0:
                    return content[start_idx:i+1]
    return "[]"

def read_indicator_text(folder, file):
    path = os.path.join(r"c:\индикаторы", folder, file)
    if os.path.exists(path):
        with codecs.open(path, 'r', 'utf-8') as f:
            t = f.read()
            # Escape backticks and backslashes for JS template literal
            # IMPORTANT: We use actual newlines in the JS file for readability
            return t.replace('\\', '\\\\').replace('`', '\\`').replace('\r\n', '\n')
    return ""

ru_ind_map = {
    "Bollinger Bands": "Bollinger Bands.txt",
    "MACD": "MACD.txt",
    "Stochastic Oscillator": "Stochastic Oscillator.txt",
    "adx": "adx.txt",
    "fractals": "ftactals.txt",
    "rsi": "rsi.txt"
}

ru_ind_texts = { k: read_indicator_text(k, v) for k, v in ru_ind_map.items() }

# Build Russian Indicators Array using string concatenation (Avoid f-strings for body)
ru_indicators = "[\n"
ru_indicators += "    { icon: '📈', title: 'Bollinger Bands (Линии Боллинджера)', desc: 'Показывает волатильность и возможные развороты.', text: `<b>Bollinger Bands</b>\\n" + ru_ind_texts['Bollinger Bands'] + "\\n<img src=\\\"./bollinger.jpg?v=61\\\" style=\\\"width:100%; border-radius:10px; margin:10px 0;\\\">` },\n"
ru_indicators += "    { icon: '📊', title: 'MACD', desc: 'Осциллятор силы тренда.', text: `<b>MACD</b>\\n" + ru_ind_texts['MACD'] + "\\n<img src=\\\"./macd.jpg?v=61\\\" style=\\\"width:100%; border-radius:10px; margin:10px 0;\\\">` },\n"
ru_indicators += "    { icon: '🔄', title: 'Stochastic Oscillator', desc: 'Поиск зон перекупленности и перепроданности.', text: `<b>Stochastic</b>\\n" + ru_ind_texts['Stochastic Oscillator'] + "\\n<img src=\\\"./stochastic.jpg?v=61\\\" style=\\\"width:100%; border-radius:10px; margin:10px 0;\\\">` },\n"
ru_indicators += "    { icon: '📉', title: 'ADX', desc: 'Индикатор силы тренда.', text: `<b>ADX</b>\\n" + ru_ind_texts['adx'] + "\\n<img src=\\\"./adx.jpg?v=61\\\" style=\\\"width:100%; border-radius:10px; margin:10px 0;\\\">` },\n"
ru_indicators += "    { icon: '💠', title: 'Fractals (Фракталы)', desc: 'Локальные максимумы и минимумы.', text: `<b>Фракталы</b>\\n" + ru_ind_texts['fractals'] + "\\n<img src=\\\"./fractals.jpg?v=61\\\" style=\\\"width:100%; border-radius:10px; margin:10px 0;\\\">` },\n"
ru_indicators += "    { icon: '🕯️', title: 'RSI', desc: 'Индекс относительной силы.', text: `<b>RSI</b>\\n" + ru_ind_texts['rsi'] + "\\n<img src=\\\"./rsi.png?v=61\\\" style=\\\"width:100%; border-radius:10px; margin:10px 0;\\\">` }\n"
ru_indicators += "]"

langs = ['hi', 'en', 'es', 'fr']
lang_data = {}

for lang in langs:
    filepath = f"c:/binarny/webapp/content_{lang}.js"
    courses = extract_array(filepath, "COURSES")
    lessons = extract_array(filepath, "LESSONS")
    books = extract_array(filepath, "BOOKS")
    indicators = extract_array(filepath, "INDICATORS")
    lang_data[lang] = "{ COURSES: " + courses + ", LESSONS: " + lessons + ", BOOKS: " + books + ", INDICATORS: " + indicators + " }"

ru_courses = extract_array("c:/binarny/webapp/courses_orig.js", "COURSES")
ru_lessons = extract_array("c:/binarny/webapp/lessons_orig.js", "LESSONS")
ru_books = """[
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

ru_data = "{ COURSES: " + ru_courses + ", LESSONS: " + ru_lessons + ", BOOKS: " + ru_books + ", INDICATORS: " + ru_indicators + " }"

final_js = "const MARKET_CONTENT = {\n"
final_js += "    ru: " + ru_data + ",\n"
for l in langs:
    final_js += "    " + l + ": " + lang_data[l] + ",\n"
final_js = final_js.rstrip(",\n") + "\n};\n"

with codecs.open("c:/binarny/webapp/content.js", "w", "utf-8") as f:
    f.write(final_js)

print("SUCCESS: content.js rebuilt V3.")
