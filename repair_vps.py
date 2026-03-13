import os
import subprocess
import shutil

def run(cmd):
    print(f"--- Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(f"Success!")
    return result

# 1. Подготавливаем новую папку для приложения
NEW_PATH = "/var/www/mini_app"
OLD_PATH = "/root/bot/webapp"

print(f"Переносим приложение из {OLD_PATH} в {NEW_PATH}...")
if os.path.exists(NEW_PATH):
    shutil.rmtree(NEW_PATH)

if os.path.exists(OLD_PATH):
    shutil.copytree(OLD_PATH, NEW_PATH)
    # Даем права Nginx (www-data) на чтение этой папки
    run(f"chown -R www-data:www-data {NEW_PATH}")
    run(f"chmod -R 755 {NEW_PATH}")
    print("Папка успешно перемещена и права настроены.")
else:
    print(f"КРИТИЧЕСКАЯ ОШИБКА: Исходная папка {OLD_PATH} не найдена!")
    exit(1)

# 2. Обновляем конфиг Nginx с НОВЫМ ПУТЕМ
nginx_conf = """
server {
    listen 80;
    server_name 185.174.138.19.sslip.io;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name 185.174.138.19.sslip.io;

    ssl_certificate /etc/letsencrypt/live/185.174.138.19.sslip.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/185.174.138.19.sslip.io/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Новый путь к приложению
    root /var/www/mini_app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /ws {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
"""

print("Обновляем конфигурацию Nginx...")
with open("/etc/nginx/sites-available/mini_app", "w") as f:
    f.write(nginx_conf)

# 3. Перезапускаем Nginx
print("Проверка и перезапуск Nginx...")
run("nginx -t")
run("systemctl restart nginx")

print("\n✅ ВСЁ ИСПРАВЛЕНО!")
print("Приложение теперь доступно здесь: https://185.174.138.19.sslip.io")
