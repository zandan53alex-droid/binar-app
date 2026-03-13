import os
import subprocess
import sys

def run(cmd):
    print(f"--- Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(f"Success!")
    return result

# 1. Проверяем пути
WEBAPP_DIR = "/root/bot/webapp"
if not os.path.exists(WEBAPP_DIR):
    print(f"ОШИБКА: Папка с приложением не найдена по пути: {WEBAPP_DIR}")
    sys.exit(1)

# 2. Формируем чистый конфиг Nginx без лишних редиректов
# Мы убираем все "кривые" правила, которые могли остаться от прошлых попыток
nginx_conf = """
server {
    listen 80;
    server_name 185.174.138.19.sslip.io;
    
    # Правильный редирект на HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name 185.174.138.19.sslip.io;

    ssl_certificate /etc/letsencrypt/live/185.174.138.19.sslip.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/185.174.138.19.sslip.io/privkey.pem;

    # Оптимизация SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    root /root/bot/webapp;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Если есть API или WebSocket
    location /ws {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
"""

print("Исправляем конфигурацию Nginx...")
CONF_PATH = "/etc/nginx/sites-available/mini_app"
with open(CONF_PATH, "w") as f:
    f.write(nginx_conf)

# 3. Применяем настройки
print("Проверка синтаксиса Nginx...")
test = run("nginx -t")
if "successful" in test.stdout or "successful" in test.stderr:
    print("Перезапуск Nginx...")
    run("systemctl restart nginx")
    print("\n✅ ГОТОВО! Nginx настроен правильно.")
    print("ПроверьтеMini App в Telegram: https://185.174.138.19.sslip.io")
else:
    print("❌ ОШИБКА в конфигурации Nginx! Скрипт не стал перезапускать сервер.")

print("\n--- ЗАВЕРШЕНО ---")
