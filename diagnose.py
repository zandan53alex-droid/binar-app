import paramiko
import sys

def diagnose():
    target_ip = '185.139.68.172'
    target_pass = 'bLcTB6pBYFLv'
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        ssh.connect(target_ip, username='root', password=target_pass)
        print("Connected to SSH.")
    except Exception as e:
        print(f"Failed to connect: {e}")
        return

    commands = [
        "ls -la /root/bot/webapp",
        "cat /root/bot/.env",
        "nginx -t",
        "systemctl status nginx",
        "systemctl status postback_service",
        "curl -I http://127.0.0.1:8000/",
        "cat /etc/nginx/sites-enabled/mini_app"
    ]

    for cmd in commands:
        print(f"\n--- Running: {cmd} ---")
        stdin, stdout, stderr = ssh.exec_command(cmd)
        print(stdout.read().decode())
        err = stderr.read().decode()
        if err:
            print(f"Error: {err}")

    ssh.close()

if __name__ == "__main__":
    diagnose()
