"""
update_all_backups.py — ОБНОВЛЕНИЕ ВСЕХ РЕЗЕРВНЫХ КОПИЙ.
Синхронизирует последние изменения в коде (v99) и документации во все ZIP-архивы.
"""

import os
import shutil
import zipfile

# --- НАСТРОЙКИ ---
PROJECT_ROOT = r"C:\binarny"
DOCS_DIR = os.path.join(PROJECT_ROOT, "docs")
BRAIN_DIR = r"C:\Users\marson\.gemini\antigravity\brain\1e968321-f0e1-4a4e-bd09-c765d26ef6b5"

FILES_TO_PACK = [
    "bot.py", "settings.py", "db.py", "texts.py", "keyboards.py", "admin.py", 
    "config_service.py", "reminders.py", "postback_app.py", "quotes_server.py", 
    "pocket_playwright.py", "deploy_webapp.py", "vps_cleanup_and_restore.py", 
    ".env", "requirements.txt", "webapp", "docs"
]

BACKUP_NAMES = ["TRADE_BOT_FULL_BACKUP.zip", "SERVER_DEPLOY_PACKAGE.zip", "project.zip"]

DOC_FILES = [
    "ultimate_setup_guide.md",
    "quotes_instruction.md", 
    "news_instruction.md", 
    "walkthrough.md"
]

def zip_folder(folder_path, output_path, exclude_dirs=None):
    if exclude_dirs is None:
        exclude_dirs = [".venv", "__pycache__", ".git", ".idea"]
    
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(folder_path):
            # Skip excluded dirs
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                # We only pack files that are in our target list or in allowed subfolders
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, folder_path)
                
                # Check if it's in our webapp or docs folder, or is a root file we want
                is_allowed = any(rel_path.startswith(d) for d in ["webapp", "docs"]) or \
                             (os.path.dirname(rel_path) == "" and rel_path in FILES_TO_PACK)
                
                if is_allowed:
                    zipf.write(file_path, rel_path)

def main():
    print("🚀 Запуск процесса обновления резервных копий...")
    
    # 1. Создаем и заполняем папку docs
    if not os.path.exists(DOCS_DIR):
        os.makedirs(DOCS_DIR)
        print(f"Created directory: {DOCS_DIR}")
    
    for doc in DOC_FILES:
        src = os.path.join(BRAIN_DIR, doc)
        dst = os.path.join(DOCS_DIR, doc)
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"  Copied: {doc}")
        else:
            print(f"  Warning: {doc} not found in brain directory.")

    # 2. Создаем временный финальный архив
    temp_zip = os.path.join(PROJECT_ROOT, "FINAL_V99_UPDATE.zip")
    print(f"Building master archive: {temp_zip}")
    zip_folder(PROJECT_ROOT, temp_zip)

    # 3. Обновляем все целевые бэкапы
    for backup in BACKUP_NAMES:
        backup_path = os.path.join(PROJECT_ROOT, backup)
        shutil.copy2(temp_zip, backup_path)
        print(f"✅ Updated: {backup}")

    # Удаляем    # Remove temp zip
    import time
    for _ in range(5):
        try:
            if os.path.exists(temp_zip):
                os.remove(temp_zip)
            break
        except PermissionError:
            time.sleep(1)
            
    print("\n[SUCCESS] All backups updated and synchronized.")
    print("Теперь в них содержится версия v99 с исправленными новостями и новой документацией.")

if __name__ == "__main__":
    main()
