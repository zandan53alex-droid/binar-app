import subprocess

try:
    out = subprocess.check_output(["git", "show", "HEAD:webapp/app.js"], cwd="c:/binarny")
    with open("c:/binarny/webapp/app_git_orig.js", "wb") as f:
        f.write(out)
    print("SUCCESS: written to app_git_orig.js")
except Exception as e:
    print("ERROR:", e)
