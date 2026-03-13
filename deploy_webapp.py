"""
deploy_webapp.py — ФИНАЛЬНЫЙ СКРИПТ (Исправленные пути)
Этот скрипт отправит исправленную папку webapp именно туда, откуда ее берет Nginx (/root/bot/webapp).
"""

import os
import zipfile
import paramiko
from scp import SCPClient

IP = "185.174.138.19"
USER = "root"
PASS = "7A2k23iRQLL2"  # Взято из ваших рабочих скриптов
REMOTE_WEBAPP_DIR = "/var/www/html"

def create_zip(zip_name):
    print("--- Packing webapp ---")
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk('webapp'):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, '.') # Preserve folder structure
                zipf.write(file_path, arcname)
    print(f"Created {zip_name}")

def deploy():
    zip_name = "webapp_update.zip"
    if os.path.exists(zip_name): os.remove(zip_name)
    create_zip(zip_name)

    print(f"--- Connecting to {IP} ---")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        ssh.connect(IP, username=USER, password=PASS)
        print("Connected!")

        # 1. Загружаем архив
        with SCPClient(ssh.get_transport()) as scp:
            print(f"--- Uploading {zip_name} ---")
            scp.put(zip_name, f"/root/bot/{zip_name}")

        # 2. Распаковываем именно в /var/www/html
        print("--- Unzipping on server ---")
        commands = [
            f"cd /var/www/html && unzip -o /root/bot/{{zip_name}}",
            "nginx -t && systemctl restart nginx"  # На всякий случай перезапуск Nginx
        ]
        
        for cmd in commands:
            stdin, stdout, stderr = ssh.exec_command(cmd)
            status = stdout.channel.recv_exit_status()
            if status == 0:
                print(f"SUCCESS: {cmd}")
            else:
                print(f"FAILED: {cmd}\n{stderr.read().decode()}")

        print("\n✅ МИНИ-ПРИЛОЖЕНИЕ УСПЕШНО ОБНОВЛЕНО!")
        print("Теперь закройте и откройте приложение в Telegram, чтобы сбросить кэш.")
        
        ssh.close()
        os.remove(zip_name)

    except Exception as e:
        print(f"❌ Ошибка деплоя: {e}")

if __name__ == "__main__":
    deploy()
