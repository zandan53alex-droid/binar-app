import shutil
import os

src = r"C:\Users\marson\.gemini\antigravity\brain\00f1b57f-ccb8-4f6b-a095-601a22c91c60\media__1773480260157.jpg"
dest_dirs = [
    r"C:\binarny\assets\ru",
    r"C:\binarny\assets\en"
]
filenames = ["main.jpg", "langs.jpg"]

if os.path.exists(src):
    for d in dest_dirs:
        os.makedirs(d, exist_ok=True)
        for f in filenames:
            dest_path = os.path.join(d, f)
            shutil.copy2(src, dest_path)
            print(f"Copied to {dest_path}")
else:
    print(f"Source not found: {src}")
