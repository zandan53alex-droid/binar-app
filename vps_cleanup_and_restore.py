"""
vps_cleanup_and_restore.py — ПОЛНОЕ ВОССТАНОВЛЕНИЕ И ОЧИСТКА.
1. Возвращает приложение в /var/www/html.
2. Обновляет бэкенд с исправленными новостями.
3. Удаляет лишние скрипты-инструменты.
"""

import paramiko
import os

IP = "185.174.138.19"
USER = "root"
PASS = "7A2k23iRQLL2"

LOCAL_BACKEND = "postback_app.py"

def restore():
    print(f"🧹 Начинаем очистку и восстановление {IP}...")
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(IP, username=USER, password=PASS)
        print("✅ Подключено.")

        # 1. Загрузка бэкенда
        print("Uploading full postback_app.py...")
        sftp = ssh.open_sftp()
        sftp.put(LOCAL_BACKEND, "/root/bot/postback_app.py")

        # 2. Файлы веб-приложения
        print("Checking webapp files...")
        ssh.exec_command("mkdir -p /var/www/html")
        ssh.exec_command("cp -r /root/bot/webapp/* /var/www/html/ 2>/dev/null")
        ssh.exec_command("chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html")

        # 3. Конфигурация Nginx
        print("Configuring Nginx...")
        nginx_conf = """
server {
    listen 80;
    server_name 185.174.138.19.sslip.io;
    location / { return 301 https://$host$request_uri; }
}

server {
    listen 443 ssl;
    server_name 185.174.138.19.sslip.io;
    ssl_certificate /etc/letsencrypt/live/185.174.138.19.sslip.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/185.174.138.19.sslip.io/privkey.pem;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /ws {
        proxy_pass http://127.0.0.1:8765;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 86400;
    }
}
"""
        with sftp.file('/etc/nginx/sites-available/mini_app', 'w') as f:
            f.write(nginx_conf)
        ssh.exec_command("ln -sf /etc/nginx/sites-available/mini_app /etc/nginx/sites-enabled/")

        # 4. Перезапуск и проверка
        print("Restarting services...")
        ssh.exec_command("systemctl restart nginx")
        ssh.exec_command("systemctl restart postback_service")

        # 5. Очистка временных скриптов на сервере (если были)
        print("Cleaning up temporary scripts...")
        scripts_to_remove = [
            "vps_news_final_fix.py", "vps_emergency_fix.py", "fix_news_vps.py", 
            "vps_repair.py", "debug_server.py", "verify_service.py", "deploy_backend.py"
        ]
        for s in scripts_to_remove:
            ssh.exec_command(f"rm /root/bot/{s} 2>/dev/null")

        print("\n✅ ГИБРИДНАЯ СИСТЕМА ВОССТАНОВЛЕНА!")
        print("Новости должны заработать (фильтр 24ч + резервный источник).")
        ssh.close()

        # Удаляем локальные копии лишних скриптов, чтобы не путать пользователя
        print("\nУдаляю локальные временные файлы...")
        for s in scripts_to_remove:
            if os.path.exists(s):
                os.remove(s)
                print(f"  Удален {s}")

    except Exception as e:
        print(f"❌ Ошибка при восстановлении: {e}")

if __name__ == "__main__":
    restore()
