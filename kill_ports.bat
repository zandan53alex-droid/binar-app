@echo off
echo Killing processes on ports 8080 and 8765...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080') do taskkill /f /pid %%a
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8765') do taskkill /f /pid %%a
echo Done. You can now run run_local_app.bat
pause
