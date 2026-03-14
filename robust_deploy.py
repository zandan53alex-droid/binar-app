import paramiko
import os
import zipfile
import time

def deploy():
    # Change CWD to the script's folder to find files correctly
    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)
    print(f"Working directory set to: {base_dir}")
    
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
        
        # Pack assets folder
        for root, dirs, files in os.walk('assets'):
            for file in files:
                zipf.write(os.path.join(root, file))
    
    print("Connecting to VPS...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    # PASSWORD PROVIDED BY USER
    target_ip = '185.139.68.172'
    target_pass = 'bLcTB6pBYFLv' 
    ssh.connect(target_ip, username='root', password=target_pass)
    
    print("Creating directories...")
    ssh.exec_command('mkdir -p /root/bot/assets')

    sftp = ssh.open_sftp()
    print("Uploading all files...")
    files_to_upload = [
        ('postback_app.py', '/root/bot/postback_app.py'),
        ('bot.py', '/root/bot/bot.py'),
        # ('quotes_server.py', '/root/bot/quotes_server.py'), # REMOVED
        ('.env', '/root/bot/.env'),
        ('requirements.txt', '/root/bot/requirements.txt'),
        ('webapp.zip', '/root/bot/webapp.zip'),
        ('bot_service.service', '/root/bot/bot_service.service'),
        ('postback_service.service', '/root/bot/postback_service.service'),
        # ('quotes_service.service', '/root/bot/quotes_service.service'), # REMOVED
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
        'apt update && apt install -y python3-venv python3-pip nginx unzip certbot python3-certbot-nginx sqlite3', # Install dependencies
        'rm -rf /root/bot/assets/*', # CLEANUP PREVIOUS ASSETS
        'cd /root/bot && unzip -o webapp.zip', # Unzips both webapp/ and assets/
        'cd /root/bot && python3 -m venv venv',
        '/root/bot/venv/bin/pip install --upgrade pip',
        '/root/bot/venv/bin/pip install -r /root/bot/requirements.txt',
        '/root/bot/venv/bin/python -c "import sqlite3; conn = sqlite3.connect(\'/root/bot/pocketai.db\'); conn.execute(\'DELETE FROM configs WHERE key=\"PB_SECRET\"\'); conn.commit(); conn.close()" || echo "DB fix skipped"',
        'cp /root/bot/*.service /etc/systemd/system/',
        'systemctl daemon-reload',
        'systemctl enable bot_service postback_service', # REMOVED quotes_service
        # SSL Setup
        f'certbot --nginx -d {target_ip}.sslip.io --non-interactive --agree-tos --email webmaster@{target_ip}.sslip.io || echo "Certbot failed, but proceeding..."',
    ]
    
    for cmd in commands:
        print(f"Running: {cmd}")
        _, stdout, stderr = ssh.exec_command(cmd)
        exit_status = stdout.channel.recv_exit_status()
        if exit_status != 0:
            print(f"Error executing: {cmd}")
            print(stderr.read().decode())
    
    print("Configuring Nginx (Step 1: Port 80)...")
    nginx_conf_80 = f"""
server {{
    listen 80;
    server_name {target_ip}.sslip.io;

    location / {{
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }}

    location /ws {{
        proxy_pass http://127.0.0.1:8765;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }}
}}
"""
    with sftp.file('/tmp/mini_app', 'w') as f:
        f.write(nginx_conf_80)
    
    ssh.exec_command('mv /tmp/mini_app /etc/nginx/sites-available/mini_app')
    ssh.exec_command('rm -f /etc/nginx/sites-enabled/default') # Remove default welcome page
    ssh.exec_command('ln -sf /etc/nginx/sites-available/mini_app /etc/nginx/sites-enabled/')
    ssh.exec_command('systemctl restart nginx')

    print("Requesting SSL via Certbot...")
    # This will automatically upgrade the config to 443
    _, stdout, stderr = ssh.exec_command(f'certbot --nginx -d {target_ip}.sslip.io --non-interactive --agree-tos --email webmaster@{target_ip}.sslip.io')
    print(stdout.read().decode())
    
    print("Restarting services...")
    ssh.exec_command('systemctl restart bot_service postback_service')
    
    print(f"Done! Mini App should be live at https://{target_ip}.sslip.io")
    print("Please wait 10-20 seconds for all services to fully start.")
    ssh.close()

if __name__ == "__main__":
    deploy()
