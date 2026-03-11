import paramiko
import os

def check_vps():
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        ssh.connect('185.174.138.19', username='root', password='7A2k23iRQLL2')
        stdin, stdout, stderr = ssh.exec_command('ls -R /root/bot')
        output = stdout.read().decode()
        print("--- LS -R /root/bot ---")
        print(output)
        
        stdin, stdout, stderr = ssh.exec_command('cat /root/bot/.env')
        env_content = stdout.read().decode()
        print("\n--- .env Content ---")
        print(env_content)
        
        ssh.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_vps()
