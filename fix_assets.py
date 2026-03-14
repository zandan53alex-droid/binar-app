import shutil
import os

src = r"C:\binarny\assets\ru\langs.png"
dst = r"C:\binarny\assets\en\langs.png"

if os.path.exists(src):
    shutil.copy2(src, dst)
    print(f"Restored {dst}")
else:
    print(f"Original langs.png not found in ru folder!")
