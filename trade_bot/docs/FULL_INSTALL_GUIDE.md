# ИНСТРУКЦИЯ ПО УСТАНОВКЕ TRADE BOT

Это полное руководство по развертыванию торгового Telegram-бота, Mini App, бэкенда и системы котировок с нуля.

## 1. Требования к серверу

Минимальные параметры для стабильной работы:
* **Тип**: VPS / VDS
* **ОС**: Ubuntu 22.04 LTS (или 24.04 LTS)
* **Процессор**: минимум 2 ядра (желательно 4 для парсинга котировок)
* **Память (RAM)**: минимум 2 ГБ (рекомендуется 4 ГБ)
* **Диск**: минимум 20 ГБ SSD
* **Открытые порты**: 80 (HTTP), 443 (HTTPS), 22 (SSH)

## 2. Подготовка сервера

Подключитесь к северу по SSH и выполните команды от имени `root`:

```bash
apt update && apt upgrade -y
apt install -y python3 python3-pip python3-venv zip unzip curl git nginx certbot python3-certbot-nginx
```

Установите Node.js (для сборки фронтенда, если необходимо):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
```

## 3. Настройка домена

Бот-приложение и сервер котировок работают через HTTPS. Без SSL сертификата Telegram Mini App не откроется.

**Вариант А: Использование sslip.io (без покупки домена)**
Если ваш IP сервера `1.2.3.4`, ваш бесплатный домен будет `1.2.3.4.sslip.io`. Ничего настраивать не нужно, сертификат будет выдан на этот домен.

**Вариант Б: Собственный домен или DuckDNS**
Направьте A-запись домена на IP адрес вашего сервера.

**Получение сертификата SSL (Certbot):**
*(Внимание: перед этим Nginx должен быть остановлен)*
```bash
certbot certonly --standalone -d ВАШ_ДОМЕН.sslip.io -m email@example.com --agree-tos -n
```

## 4. Установка проекта

1. Перенесите `SERVER_DEPLOY_PACKAGE.zip` на сервер (например, в `/root/bot`):
```bash
mkdir -p /root/bot
cd /root/bot
# (Загрузите архив сюда через SFTP или scp)
```

2. Распакуйте проект:
```bash
unzip -o SERVER_DEPLOY_PACKAGE.zip
```

3. Установка Python-зависимостей:
```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
playwright install
playwright install-deps
```

*Playwright нужен для парсинга котировок.*

## 5. Настройка Nginx

Telegram Mini App и backend API маршрутизируются через Nginx. Файлы Mini App будут раздаваться Nginx напрямую (так быстрее), а API запросы — проксироваться на FastAPI сервер.

1. Создайте файл `/etc/nginx/sites-available/mini_app`:
```nginx
server {
    listen 80;
    server_name ВАШ_ДОМЕН.sslip.io;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name ВАШ_ДОМЕН.sslip.io;

    ssl_certificate /etc/letsencrypt/live/ВАШ_ДОМЕН.sslip.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ВАШ_ДОМЕН.sslip.io/privkey.pem;

    # Backend API и генератор новостей
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Сервер котировок (WebSockets)
    location /ws {
        proxy_pass http://127.0.0.1:8765;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }

    # Mini App статика
    location / {
        root /var/www/mini_app;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

2. Активируйте конфиг и перезапустите:
```bash
ln -sf /etc/nginx/sites-available/mini_app /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

## 6. Настройка systemd сервисов

Для того чтобы сервисы работали круглосуточно, копируем файлы конфигурации из папки `services`:

```bash
cp /root/bot/services/*.service /etc/systemd/system/
systemctl daemon-reload
```

* `bot_service`: работает `bot.py` (Telegram Бот)
* `postback_service`: работает `postback_app.py` (Backend API + Модуль новостей + Postback)
* `quotes_service`: работает `quotes_server.py` (Парсинг Pocket Option и WebSocket для графиков)

Включение сервисов в автозагрузку и их запуск:
```bash
systemctl enable bot_service postback_service quotes_service
systemctl start bot_service postback_service quotes_service
```

## 7. Настройка Telegram бота

1. Перейдите в Telegram к `@BotFather`.
2. Создайте нового бота `/newbot` и получите `TOKEN`.
3. Откройте файл `/root/bot/.env` и впишите туда токен:
```ini
TOKEN=1234567890:AAH...
PUBLIC_BASE=https://ВАШ_ДОМЕН.sslip.io
PB_SECRET=любая_секретная_строка
ADMIN_IDS=1234567,9876543
```
*(ADMIN_IDS — это ваш ID в Telegram).*

## 8. Настройка Mini App

В настройках бота в `@BotFather` (через `/mybots` -> Bot Settings -> Menu Button и Web App) установите ссылку на:
`https://ВАШ_ДОМЕН.sslip.io`

Скопируйте файлы из папки `webapp` в публичную директорию Nginx:
```bash
mkdir -p /var/www/mini_app
cp -r /root/bot/webapp/* /var/www/mini_app/
chown -R www-data:www-data /var/www/mini_app
systemctl restart nginx
```

## 9. Подключение экономических новостей

Система новостей полностью встроена в `postback_app.py` (`/api/calendar`).
Она использует источник: `https://nfs.faireconomy.media/ff_calendar_thisweek.json` (Forex Factory).

**Как работает обновление:**
1. При каждом открытии вкладки сервера `app.js` делает GET-запрос к `https://ВАШ_ДОМЕН.sslip.io/api/calendar`.
2. Сервер кэширует новости от Forex Factory, приводит их к UTC формату и фильтрует (только события от "сейчас" до "+24 часа").
3. Если Forex Factory сервер недоступен (таймаут или блок IP сервера), внутри `postback_app.py` встроен **вспомогательный реалистичный генератор новостей**.
4. Дополнительно `app.js` умеет напрямую запрашивать данные из браузера клиента(клиентский fallback).
5. Благодаря 3 уровням резервирования новости загружаются **всегда**.

## 10. Подключение котировок Pocket Option

За котировки отвечает файл `backend/quotes_server.py`.

**Как это работает:**
1. Скрипт использует `playwright` (headless браузер), чтобы зайти на сайт брокера.
2. Подключается напрямую к провайдеру котировок через WebSocket.
3. Парсит сырые данные графика `{"asset": "EURUSD_otc", "price": 1.0503, ...}` в реальном времени.
4. Открывает локальный WebSocket Сервер (`ws://0.0.0.0:8765`), к которому подключается Mini App через Nginx: `wss://ВАШ_ДОМЕН.sslip.io/ws`.
5. MiniApp использует `Chart.js` для плавной отрисовки графика из этих данных.

Для парсинга **не нужен API ключ Pocket Option**. Данные публичны, но требуют Playwright для обхода Cloudflare. Если котировки не идут — перезапустите сервис: `systemctl restart quotes_service`.

## 11. Настройка Postback

Модуль для получения сигналов по CPA сетям.
Встроен в `postback_app.py`.
URL для интеграций: `https://ВАШ_ДОМЕН.sslip.io/pb?click_id={click_id}&event={event}&sumdep={sumdep}&secret=СЕКРЕТ`

Он фиксирует пополнение (event=dep, reg), записывает в базу SQLite (`db.py`) и выдает пользователю "VIP" статус для доступа к сигналам-индикаторам.

## 12. Проверка системы

После запуска проверьте:
1. **Бот**: Напишите `/start` боту. Он должен ответить приветственным сообщением.
2. **Mini App**: Нажмите кнопку "Web App". Приложение должно открыться без белого экрана (означает, что Nginx и SSL в норме).
3. **API Сервер**: Откройте в браузере `https://ВАШ_ДОМЕН.sslip.io/debug` — должно выдать `{"status":"ok", ...}`.
4. **Новости**: Откройте вкладку "НОВОСТИ" — там должны быть актуальные новости (список флагов, валют без ошибки `Failed to fetch`).
5. **Котировки**: На главном экране выберите валютную пару — график должен начать ползти вверх/вниз в реальном времени.

## 13. Обновление системы / Массовая установка

Для новых клиентов/серверов достаточно запустить:
```bash
bash /root/bot/install/SERVER_SETUP_SCRIPT.sh ВАШ_ДОМЕН.sslip.io
```

После изменений в JavaScript/HTML вам нужно:
1. Изменить строку кода `<link rel="stylesheet" href="style.css?v=98">` в `index.html` (увеличить версию для сброса кэша).
2. Выполнить перезапись файлов: `cp -r webapp/* /var/www/mini_app/`.
