#!/bin/bash
# ----------------------------------------------------
# SERVER SETUP SCRIPT FOR TRADE BOT
# Описание: Автоматически настраивает VPS для Telegram Бот + WebApp.
# Использование: bash SERVER_SETUP_SCRIPT.sh <ваш_домен>
# Пример: bash SERVER_SETUP_SCRIPT.sh 1.2.3.4.sslip.io
# ----------------------------------------------------

# 1. Проверка аргумента
DOMAIN=$1
if [ -z "$DOMAIN" ]; then
    echo "Ошибка: Введите домен!"
    echo "Использование: bash SERVER_SETUP_SCRIPT.sh <ваш_домен.sslip.io>"
    exit 1
fi

PROJECT_DIR="/root/bot"

if [ ! -d "$PROJECT_DIR" ]; then
    echo "Ошибка: Распакуйте архив проекта в $PROJECT_DIR перед запуском скрипта!"
    exit 1
fi

echo "================================================="
echo "Начинаем установку Trade Bot для домена: $DOMAIN"
echo "================================================="

# 2. Обновление ОС и установка базовых системных пакетов
echo ">>> Обновление системы и установка зависимостей ОС..."
apt update && apt upgrade -y
apt install -y python3 python3-pip python3-venv zip unzip curl git nginx certbot python3-certbot-nginx

# 3. Установка Python зависимостей и Playwright
echo ">>> Настройка виртуального окружения (venv) и зависимостей Python..."
cd $PROJECT_DIR
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
if [ -f "requirements.txt" ]; then
    pip install -r requirements.txt
else
    echo "Предупреждение: requirements.txt не найден! Устанавливаем базовые модули..."
    pip install aiogram aiohttp fastapi uvicorn websockets playwright httpx motor pydantic loguru python-dotenv
fi

echo ">>> Установка браузеров Playwright для парсинга котировок..."
playwright install chromium
playwright install-deps

# 4. Получение SSL сертификата (с остановкой Nginx для освобождения порта)
echo ">>> Получение SSL сертификата от Let's Encrypt для $DOMAIN..."
systemctl stop nginx
certbot certonly --standalone -d $DOMAIN -m admin@$DOMAIN --agree-tos -n
if [ $? -ne 0 ]; then
    echo "ВНИМАНИЕ: Ошибка при получении сертификата. Возможно домен $DOMAIN не привязан к этому IP."
    echo "Для работы $DOMAIN нужен правильный A-DNS, или используйте $DOMAIN если это sslip."
    echo "Продолжаем со стандартным конфигом, но HTTPS может не работать!"
fi

# 5. Настройка Nginx
echo ">>> Конфигурация Nginx..."
NGINX_CONF="/etc/nginx/sites-available/mini_app"

cat > $NGINX_CONF <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name $DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;

    location / {
        root /var/www/mini_app;
        index index.html;
        try_files \$uri \$uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    location /ws {
        proxy_pass http://127.0.0.1:8765;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host \$host;
    }
}
EOF

ln -sf $NGINX_CONF /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
systemctl restart nginx

# 6. Копирование файлов Mini App в публичную директорию Nginx
echo ">>> Развертывание файлов WebApp..."
mkdir -p /var/www/mini_app
if [ -d "$PROJECT_DIR/webapp" ]; then
    cp -r $PROJECT_DIR/webapp/* /var/www/mini_app/
    chown -R www-data:www-data /var/www/mini_app
else
    echo "ВНИМАНИЕ: Папка $PROJECT_DIR/webapp не найдена. Распакуйте архив корректно."
fi

# 7. Настройка и запуск Systemd сервисов
echo ">>> Установка systemd-сервисов..."
if [ -d "$PROJECT_DIR/services" ]; then
    cp $PROJECT_DIR/services/*.service /etc/systemd/system/
    systemctl daemon-reload
    systemctl enable bot_service postback_service quotes_service
    systemctl restart bot_service postback_service quotes_service
else
    echo "ВНИМАНИЕ: Папка $PROJECT_DIR/services не найдена."
fi

echo "================================================="
echo "УСТАНОВКА ЗАВЕРШЕНА УСПЕШНО!"
echo "Mini App доступно по адресу: https://$DOMAIN"
echo "Обязательно проверьте файл /root/bot/.env и впишите туда токен бота."
echo "И проверьте статус сервисов: systemctl status bot_service"
echo "================================================="
exit 0
