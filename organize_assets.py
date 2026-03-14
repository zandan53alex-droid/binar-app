import os
import shutil

assets_ru = r"C:\binarny\assets\ru"
assets_en = r"C:\binarny\assets\en"

# New images from user (based on unnamed files found in assets/en)
ru_new = os.path.join(assets_en, "unnamed.jpg")
en_new = os.path.join(assets_en, "unnamed (1).jpg")

# Targets
ru_target = os.path.join(assets_ru, "langs.jpg")
en_target = os.path.join(assets_en, "langs.jpg")

# 1. Move/Copy to correct locations
if os.path.exists(ru_new):
    shutil.move(ru_new, ru_target)
    print(f"Moved {ru_new} -> {ru_target}")

if os.path.exists(en_new):
    shutil.move(en_new, en_target)
    print(f"Moved {en_new} -> {en_target}")

# 2. Cleanup langs.png to ensure .jpg is used
pngs = [
    os.path.join(assets_ru, "langs.png"),
    os.path.join(assets_en, "langs.png")
]

for p in pngs:
    if os.path.exists(p):
        os.remove(p)
        print(f"Deleted {p}")
