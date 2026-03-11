import os
import zipfile
import paramiko
from scp import SCPClient

# Server Info
IP = "185.174.138.19"
USER = "root"
PASS = "7A2k23iRQLL2"
REMOTE_PATH = "/root/bot"

def create_zip(zip_name):
    print("--- Creating zip ---")
    count = 0
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk('.'):
            # Normalize path for comparison
            rel_root = os.path.relpath(root, '.')
            if rel_root == ".":
                rel_root = ""
            
            # Skip excluded dirs
            skip = False
            for exclude in [".venv", "__pycache__", ".git", ".idea", "brain", ".gemini", "node_modules", "webapp/node_modules"]:
                if rel_root.startswith(exclude) or f"/{exclude}" in rel_root or f"\\{exclude}" in rel_root:
                    skip = True
                    break
            if skip: continue

            for file in files:
                if file.endswith(('.db', '.zip', '.pyc', '.exe', '.log')):
                    continue
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, '.')
                zipf.write(file_path, arcname)
                count += 1
    print(f"Created {zip_name} with {count} files.")

def deploy():
    zip_name = "bot_deploy.zip"
    if os.path.exists(zip_name): os.remove(zip_name)
    create_zip(zip_name)

    print(f"--- Connecting to {IP} ---")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        ssh.connect(IP, username=USER, password=PASS)
        print("Connected!")

        print(f"--- Creating remote dir {REMOTE_PATH} ---")
        _, stdout, _ = ssh.exec_command(f"mkdir -p {REMOTE_PATH}")
        status = stdout.channel.recv_exit_status()
        print(f"Remote dir created (status {status})")
        with SCPClient(ssh.get_transport()) as scp:
            print(f"--- Uploading {zip_name} ---")
            scp.put(zip_name, f"{REMOTE_PATH}/{zip_name}")

        print("--- Running setup commands on server ---")
        # Use a single bash script string to ensure environment and sequentiality
        setup_script = f"""
        set -e
        cd {REMOTE_PATH}
        echo "Updating apt..."
        apt update -qq
        apt install -y unzip python3-pip python3-venv -qq
        echo "Unzipping..."
        unzip -o {zip_name}
        echo "Setting up venv..."
        python3 -m venv venv
        echo "Installing requirements..."
        ./venv/bin/pip install --upgrade pip -q
        ./venv/bin/pip install -r requirements.txt -q
        echo "Configuring services..."
        cp {REMOTE_PATH}/bot_service.service /etc/systemd/system/
        cp {REMOTE_PATH}/postback_service.service /etc/systemd/system/
        systemctl daemon-reload
        systemctl enable bot_service
        systemctl restart bot_service
        systemctl enable postback_service
        systemctl restart postback_service
        echo "Waiting for services..."
        sleep 5
        systemctl is-active bot_service
        systemctl is-active postback_service
        """
        
        stdin, stdout, stderr = ssh.exec_command(setup_script)
        
        for line in iter(stdout.readline, ""):
            print(f"[REMOT] {line.strip()}")
        for line in iter(stderr.readline, ""):
            print(f"[ERR  ] {line.strip()}")
            
        exit_status = stdout.channel.recv_exit_status()
        if exit_status == 0:
            print("--- Deployment SUCCESSFUL ---")
        else:
            print(f"--- Deployment FAILED with status {exit_status} ---")

        ssh.close()

    except Exception as e:
        print(f"Deployment failed: {e}")

if __name__ == "__main__":
    deploy()
