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
    # 1. Zip the project (excluding venv, pycache, zips, etc.)
    print("--- Zipping project (excluding large files) ---")
    import zipfile
    
    zip_name = "bot_deploy.zip"
    exclude_dirs = {'.venv', '__pycache__', '.git', '.idea', '.session', 'lessons_extracted', 'temp_po_api'}
    exclude_files = {zip_name, 'FINAL_V99_UPDATE.zip', 'SERVER_DEPLOY_PACKAGE.zip', 'TRADE_BOT_FULL_BACKUP.zip', 'project.zip', 'webapp.zip', 'project_v99_final.zip'}
    
    try:
        with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk('.'):
                # Filter directories
                dirs[:] = [d for d in dirs if d not in exclude_dirs]
                
                for file in files:
                    if file in exclude_files or file.endswith(('.db', '.zip', '.log', '.bat')):
                        continue
                    
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, '.')
                    zipf.write(file_path, arcname)
        print(f"✅ Created {zip_name}")
    except Exception as e:
        print(f"❌ Error creating zip: {e}")
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
    print("--- Unzipping and Restarting services ---")
    remote_cmds = [
        f"cd {REMOTE_PATH}",
        "unzip -o bot_deploy.zip",
        "cp bot_service.service /etc/systemd/system/",
        "cp postback_service.service /etc/systemd/system/",
        "systemctl daemon-reload",
        "systemctl restart bot_service",
        "systemctl restart postback_service",
        "systemctl status bot_service --no-pager"
    ]
    
    full_remote_cmd = " && ".join(remote_cmds)
    run_cmd(f'ssh {USER}@{IP} "{full_remote_cmd}"')

if __name__ == "__main__":
    deploy()
