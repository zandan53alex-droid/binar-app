import os
import subprocess
import sys

# Server Info
IP = "185.174.138.19"
USER = "root"
REMOTE_PATH = "/root/bot"

def run_cmd(cmd):
    print(f"Executing: {cmd}")
    process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if process.returncode != 0:
        print(f"Error: {stderr.decode()}")
        return False
    print(stdout.decode())
    return True

def deploy():
    # 1. Zip the project (excluding venv, pycache, etc.)
    print("--- Zipping project ---")
    exclude_args = '--exclude ".venv" --exclude "__pycache__" --exclude ".git" --exclude "*.db" --exclude ".idea"'
    if not run_cmd(f'powershell -Command "Compress-Archive -Path . -DestinationPath bot_deploy.zip -Force"'):
        return

    # 2. Create remote directory
    # Note: This might require manual approval for SSH key if first time
    print("--- Creating remote directory ---")
    run_cmd(f'ssh {USER}@{IP} "mkdir -p {REMOTE_PATH}"')

    # 3. Upload zip
    print("--- Uploading zip ---")
    if not run_cmd(f'scp bot_deploy.zip {USER}@{IP}:{REMOTE_PATH}/'):
        return

    # 4. Setup on server
    print("--- Unzipping and Installing on server ---")
    remote_cmds = [
        f"cd {REMOTE_PATH}",
        "apt update && apt install -y unzip python3-pip",
        "unzip -o bot_deploy.zip",
        "pip3 install -r requirements.txt",
        "cp bot_service.service /etc/systemd/system/",
        "cp postback_service.service /etc/systemd/system/",
        "systemctl daemon-reload",
        "systemctl enable bot_service",
        "systemctl restart bot_service",
        "systemctl enable postback_service",
        "systemctl restart postback_service",
        "systemctl status bot_service --no-pager",
        "systemctl status postback_service --no-pager"
    ]
    
    full_remote_cmd = " && ".join(remote_cmds)
    run_cmd(f'ssh {USER}@{IP} "{full_remote_cmd}"')

if __name__ == "__main__":
    deploy()
