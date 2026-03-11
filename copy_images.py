import shutil
import os

src_dir = r"c:\binarny\webapp\images"
dst_dir = r"c:\binarny\webapp"

files = [
    "bollinger.jpg", "bollinger_2.jpg", "macd.jpg", 
    "stochastic.jpg", "adx.jpg", "fractals.jpg", 
    "rsi.png", "rsi_2.png"
]

for f in files:
    src = os.path.join(src_dir, f)
    dst = os.path.join(dst_dir, f)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {f}")
    else:
        print(f"Not found: {f}")
