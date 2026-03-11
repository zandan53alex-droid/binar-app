import paramiko
import os
import zipfile

def deploy():
    print("Packing webapp...")
    with zipfile.ZipFile('webapp.zip', 'w') as zipf:
        for root, dirs, files in os.walk('webapp'):
            for file in files:
                zipf.write(os.path.join(root, file))
    
    print("Connecting to VPS...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect('185.174.138.19', username='root', password='7A2k23iRQLL2')
    
    sftp = ssh.open_sftp()
    print("Uploading postback_app.py, .env and webapp.zip...")
    sftp.put('postback_app.py', '/root/bot/postback_app.py')
    sftp.put('.env', '/root/bot/.env')
    sftp.put('webapp.zip', '/root/bot/webapp.zip')
    sftp.close()
    
    print("Extracting on VPS and restarting services...")
    ssh.exec_command('unzip -o /root/bot/webapp.zip -d /root/bot/')
    ssh.exec_command('systemctl restart postback_service')
    ssh.exec_command('systemctl restart bot_service')
    print("Done!")
    ssh.close()

if __name__ == "__main__":
    deploy()
