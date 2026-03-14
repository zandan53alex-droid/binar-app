import os
import shutil
import zipfile

# Paths
source_dir = r"C:\binarny"
dest_zip = r"C:\binarny\BAU_TRADE_BOT_PACKAGE.zip"
manual_path = r"C:\Users\marson\.gemini\antigravity\brain\00f1b57f-ccb8-4f6b-a095-601a22c91c60\manual_instructions.md"

# Files to include (clean source)
files_to_copy = [
    "admin.py", "admin_keyboards.py", "bot.py", "config_service.py", "db.py", 
    "keyboards.py", "postback_app.py", "reminders.py", "settings.py", "texts.py", 
    "requirements.txt", ".env", "bot_service.service", "postback_service.service", "robust_deploy.py"
]
dirs_to_copy = ["assets", "webapp"]

# Temp directory for staging
temp_dir = r"C:\BAU_TRADE_BOT_FINAL"
if os.path.exists(temp_dir):
    shutil.rmtree(temp_dir)
os.makedirs(temp_dir)

print("Copying files...")
for f in files_to_copy:
    src = os.path.join(source_dir, f)
    if os.path.exists(src):
        shutil.copy2(src, os.path.join(temp_dir, f))

for d in dirs_to_copy:
    src = os.path.join(source_dir, d)
    if os.path.exists(src):
        shutil.copytree(src, os.path.join(temp_dir, d), dirs_exist_ok=True)

# Add manual
manual_path = os.path.join(source_dir, "ИНСТРУКЦИЯ.md")
if os.path.exists(manual_path):
    shutil.copy2(manual_path, os.path.join(temp_dir, "ИНСТРУКЦИЯ.md"))

print("Creating ZIP archive...")
with zipfile.ZipFile(dest_zip, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(temp_dir):
        for file in files:
            abspath = os.path.join(root, file)
            relpath = os.path.relpath(abspath, temp_dir)
            zf.write(abspath, relpath)

# Cleanup
shutil.rmtree(temp_dir)
print(f"Success! Archive created at: {dest_zip}")
