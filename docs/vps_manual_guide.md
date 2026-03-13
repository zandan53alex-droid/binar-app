# Инструкция по ручному восстановлению VPS

Эта инструкция поможет вам перенести исправленный код с вашего компьютера на сервер и запустить его так, чтобы всё работало в Telegram.

## Шаг 1: Подготовка (На вашем компьютере)

Сначала создадим архив со всеми нужными файлами. Откройте терминал в VS Code и выполните:

```powershell
Compress-Archive -Path bot.py, settings.py, db.py, texts.py, keyboards.py, admin.py, config_service.py, reminders.py, postback_app.py, quotes_server.py, .env, requirements.txt, webapp, bot_service.service, postback_service.service, quotes_service.service -DestinationPath project.zip -Force
```

## Шаг 2: Загрузка на сервер (На вашем компьютере)

Теперь отправим этот архив на ваш сервер. Введите эту команду (она спросит пароль: `7A2k23iRQLL2`):

```powershell
scp project.zip root@185.174.138.19:/root/
```

---

## Шаг 3: Настройка сервера (В терминале сервера/SSH)

Теперь переключитесь в окно терминала, где вы подключены к серверу по SSH.

### 3.1. Обновление и установка программ
Скопируйте и вставьте всё это:
```bash
apt update && apt upgrade -y
apt install -y python3 python3-venv python3-pip nginx unzip certbot python3-certbot-nginx
```

### 3.2. Распаковка проекта
```bash
cd /root
mkdir -p bot
unzip -o project.zip -d bot
cd bot
```

### 3.3. Создание виртуального окружения и установка зависимостей
```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
deactivate
```

---

## Шаг 4: Настройка Nginx и SSL (В терминале сервера)

### 4.1. Создание конфигурации
Создайте файл командой:
```bash
nano /etc/nginx/sites-available/mini_app
```
Вставьте туда этот текст (скопируйте его целиком):
```nginx
server {
    listen 80;
    server_name 185.174.138.19.sslip.io;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name 185.174.138.19.sslip.io;

    # Сначала используем временные самоподписанные сертификаты или заглушки, 
    # если certbot еще не запущен. Но лучше сразу запустить certbot (см. ниже).
    ssl_certificate /etc/letsencrypt/live/vm3997023.firstbyte.club/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vm3997023.firstbyte.club/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
*Нажмите `Ctrl+O`, `Enter`, `Ctrl+X` для сохранения.*

### 4.2. Активация сайта
```bash
ln -sf /etc/nginx/sites-available/mini_app /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx
```

---

## Шаг 5: Настройка автозапуска (В терминале сервера)

### 5.1. Копирование сервисов
```bash
cp /root/bot/*.service /etc/systemd/system/
systemctl daemon-reload
```

### 5.2. Запуск и включение
```bash
systemctl enable bot_service postback_service
systemctl restart bot_service postback_service
```

---

## Шаг 6: Проверка

Проверьте статус сервисов:
```bash
systemctl status bot_service
systemctl status postback_service
```

Если всё зелёное — открывайте Telegram и запускайте приложение!
