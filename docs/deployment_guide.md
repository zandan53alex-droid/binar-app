# Руководство по ручной установке бота на сервер

Следуйте этим шагам, чтобы перенести бота с вашего компьютера на сервер и запустить его.

## Шаг 1: Подготовка файлов
Убедитесь, что в файле [.env](file:///c:/binarny/.env) указаны правильные данные:
- `PUBLIC_BASE=http://185.174.138.19:8000`
- `PB_SECRET=zandan_secure_secret_2026`

Запакуйте все файлы проекта в ZIP-архив (назовите его `bot.zip`).
**Исключите** папки: `.venv`, `__pycache__`, `.git`.

## Шаг 2: Загрузка на сервер
Используйте любую программу (например, **FileZilla** или **WinSCP**), чтобы загрузить `bot.zip` в папку `/root/` на сервере.

Если используете командную строку (PowerShell):
```powershell
scp bot.zip root@185.174.138.19:/root/
```
*(Пароль: `7A2k23iRQLL2`)*

## Шаг 3: Настройка на сервере
Подключитесь к серверу через SSH (в PowerShell):
```powershell
ssh root@185.174.138.19
```

Выполните команды одну за другой:
```bash
# Обновляем систему и ставим инструменты
apt update
apt install -y unzip python3-pip

# Распаковываем бота
mkdir -p /root/bot
unzip /root/bot.zip -d /root/bot
cd /root/bot

# Устанавливаем библиотеки
pip3 install -r requirements.txt
```

## Шаг 4: Настройка автозапуска (Службы)
Скопируйте файлы служб в системную папку:
```bash
cp /root/bot/bot_service.service /etc/systemd/system/
cp /root/bot/postback_service.service /etc/systemd/system/

# Перезагружаем конфиги и запускаем
systemctl daemon-reload
systemctl enable bot_service
systemctl restart bot_service
systemctl enable postback_service
systemctl restart postback_service
```

## Шаг 5: Проверка
Проверьте статус служб:
```bash
systemctl status bot_service
systemctl status postback_service
```
Если написано `active (running)`, значит всё работает!

## Шаг 6: Настройка Постбэков в брокере
В личном кабинете брокера (Pocket Option и т.д.) вставьте следующую ссылку для постбэков:
`http://185.174.138.19:8000/pb?secret=zandan_secure_secret_2026&click_id={click_id}&event={event}&trader_id={trader_id}&sumdep={sumdep}`

*(Замените макросы в фигурных скобках на те, что предоставляет ваш брокер).*
