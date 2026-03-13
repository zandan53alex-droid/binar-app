import paramiko
import os
import zipfile
import time

def deploy():
    print("Packing webapp...")
    with zipfile.ZipFile('webapp.zip', 'w') as zipf:
        files_to_pack = [
            'bot.py', 'settings.py', 'db.py', 'texts.py', 'keyboards.py', 
            'admin.py', 'admin_keyboards.py', 'config_service.py', 'reminders.py', 
            'postback_app.py', 'quotes_server.py', '.env', 'requirements.txt',
            'bot_service.service', 'postback_service.service', 'quotes_service.service'
        ]
        for f in files_to_pack:
            if os.path.exists(f):
                zipf.write(f)
        
        # Pack webapp folder
        for root, dirs, files in os.walk('webapp'):
            for file in files:
                zipf.write(os.path.join(root, file))
    
    print("Connecting to VPS...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect('185.174.138.19', username='root', password='7A2k23iRQLL2')
    
    print("Creating directories...")
    ssh.exec_command('mkdir -p /root/bot/assets')

    sftp = ssh.open_sftp()
    print("Uploading all files...")
    files_to_upload = [
        ('postback_app.py', '/root/bot/postback_app.py'),
        ('bot.py', '/root/bot/bot.py'),
        ('quotes_server.py', '/root/bot/quotes_server.py'),
        ('.env', '/root/bot/.env'),
        ('requirements.txt', '/root/bot/requirements.txt'),
        ('webapp.zip', '/root/bot/webapp.zip'),
        ('bot_service.service', '/root/bot/bot_service.service'),
        ('postback_service.service', '/root/bot/postback_service.service'),
        ('quotes_service.service', '/root/bot/quotes_service.service'),
        ('settings.py', '/root/bot/settings.py'),
        ('db.py', '/root/bot/db.py'),
        ('texts.py', '/root/bot/texts.py'),
        ('keyboards.py', '/root/bot/keyboards.py'),
        ('admin.py', '/root/bot/admin.py'),
        ('admin_keyboards.py', '/root/bot/admin_keyboards.py'),
        ('config_service.py', '/root/bot/config_service.py'),
        ('reminders.py', '/root/bot/reminders.py')
    ]
    
    for local, remote in files_to_upload:
        if os.path.exists(local):
            print(f"Uploading {local}...")
            sftp.put(local, remote)
        else:
            print(f"Warning: {local} not found locally.")
    
    print("Extracting webapp and setting up environment...")
    commands = [
        'cd /root/bot && unzip -o webapp.zip',
        'cd /root/bot && python3 -m venv venv',
        '/root/bot/venv/bin/pip install --upgrade pip',
        '/root/bot/venv/bin/pip install -r /root/bot/requirements.txt',
        'cp /root/bot/*.service /etc/systemd/system/',
        'systemctl daemon-reload',
        'systemctl enable bot_service postback_service quotes_service'
    ]
    
    for cmd in commands:
        print(f"Running: {cmd}")
        _, stdout, stderr = ssh.exec_command(cmd)
        exit_status = stdout.channel.recv_exit_status()
        if exit_status != 0:
            print(f"Error executing: {cmd}")
            print(stderr.read().decode())
    
    print("Configuring Nginx...")
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

    location / {
        proxy_pass http://127.0.0.1:8000;
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
    }
}
"""
    # Use sftp to upload nginx config to a temp file, then move it
    with sftp.file('/tmp/mini_app', 'w') as f:
        f.write(nginx_conf)
    
    ssh.exec_command('mv /tmp/mini_app /etc/nginx/sites-available/mini_app')
    ssh.exec_command('rm -f /etc/nginx/sites-enabled/*') # Clear other sites to avoid conflicts
    ssh.exec_command('ln -sf /etc/nginx/sites-available/mini_app /etc/nginx/sites-enabled/')
    ssh.exec_command('nginx -t && systemctl restart nginx')

    print("Restarting services...")
    ssh.exec_command('systemctl restart bot_service postback_service quotes_service')
    
    print("Done! Mini App should be live at https://185.174.138.19.sslip.io")
    print("Please wait 10-20 seconds for all services to fully start.")
    ssh.close()

if __name__ == "__main__":
    deploy()
