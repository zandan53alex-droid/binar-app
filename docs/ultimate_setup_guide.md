# 🚀 Ультимативное руководство по установке TRADE BOT

Это пошаговое руководство поможет вам запустить систему с нуля, даже если вы никогда раньше не работали с серверами. 

---

## Подготовка: Что вам понадобится
1. **Сервер (VPS)**: Рекомендуется Ubuntu 22.04 или 20.04.
2. **Бот в Telegram**: Создайте его через [@BotFather](https://t.me/BotFather) и получите **API Token**.
3. **Архив с кодом**: Файл `TRADE_BOT_FULL_BACKUP.zip`.

---

## Шаг 1: Настройка конфигурации (На вашем ПК)

Перед отправкой файлов на сервер, нужно вписать ваши данные в файл `.env`.

1. Распакуйте архив на своем компьютере.
2. Найдите файл `.env` и откройте его через Блокнот (или VS Code).
3. Замените значения на свои:
   - `TOKEN` = `ВАШ_ТОКЕН_ОТ_BOTFATHER`
   - `ADMIN_IDS` = `ВАШ_ID` (можно узнать в боте @userinfobot)
   - `PUBLIC_BASE` = `https://ВАШ_ДОМЕН_ИЛИ_IP`
   - `PB_SECRET` = `ПРИДУМАЙТЕ_ЛЮБОЙ_ПАРОЛЬ` (например, `my_secret_123`)

---

## Шаг 2: Загрузка файлов на сервер

Самый простой способ — использовать программу **FileZilla** или **WinSCP**.

1. Подключитесь к вашему серверу (Host: ваш IP, Username: root, Password: ваш пароль сервера).
2. Создайте на сервере папку `/root/bot`.
3. Загрузите в эту папку содержимое архива.

---

## Шаг 3: Установка окружения (Команды для сервера)

Подключитесь к серверу через SSH (в Windows это можно сделать через стандартный терминал: `ssh root@ВАШ_IP`).

Скопируйте и вставьте эти команды по очереди:

### 3.1 Обновление системы
```bash
apt update && apt upgrade -y
apt install -y python3 python3-venv python3-pip nginx unzip
```

### 3.2 Создание виртуального окружения (Защищенная среда)
```bash
cd /root/bot
python3 -m venv venv
source venv/bin/activate
```

### 3.3 Установка библиотек
```bash
pip install -r requirements.txt
```

---

## Шаг 4: Настройка веб-сервера (Nginx)

Чтобы ваше приложение было доступно по ссылке, нужно настроить Nginx.

1. Создайте файл конфигурации:
```bash
nano /etc/nginx/sites-available/mini_app
```

2. Вставьте туда этот текст (замените `ВАШ_ДОМЕН` на ваш IP или домен):
```nginx
server {
    listen 80;
    server_name ВАШ_ДОМЕН;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /ws {
        proxy_pass http://127.0.0.1:8765;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```
*Нажмите `Ctrl+O`, `Enter`, `Ctrl+X` для сохранения.*

3. Активируйте и перезапустите:
```bash
ln -sf /etc/nginx/sites-available/mini_app /etc/nginx/sites-enabled/
mkdir -p /var/www/html
cp -r /root/bot/webapp/* /var/www/html/
systemctl restart nginx
```

---

## Шаг 5: Настройка Автозапуска (Чтобы всё работало 24/7)

Нужно, чтобы бот сам запускался после перезагрузки сервера.

```bash
# Копируем файлы сервисов
cp /root/bot/*.service /etc/systemd/system/

# Перезагружаем систему управления сервисами
systemctl daemon-reload

# Включаем и запускаем всё
systemctl enable bot_service postback_service quotes_service
systemctl restart bot_service postback_service quotes_service
```

---

## Как проверить, что всё получилось?
1. Напишите вашему боту в Telegram. Если ответил — основной бот работает.
2. Откройте приложение. Если графики грузятся — котировки работают.
3. Перейдите в "Новости". Если там есть список — календарь настроен верно.

---
**Поздравляем! Ваш торговый бот запущен.**
Подробности по настройке Котировок и Новостей читайте в файлах `quotes_instruction.md` и `news_instruction.md`.
