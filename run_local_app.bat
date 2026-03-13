@echo off
echo ==========================================
echo   🚀 POCKET AI: LOCAL LAUNCHER 🚀
echo ==========================================
echo.
echo 1. Installing requirements...
python -m pip install websockets aiohttp aiogram fastapi uvicorn sqlalchemy aiosqlite python-dotenv
echo.
echo 2. Starting Quotes Server (Port 8765)...
start powershell -NoExit -Command "python quotes_server.py"
echo.
echo 3. Starting Web Server (Port 8080)...
start powershell -NoExit -Command "python web_server.py"
echo.
echo ==========================================
echo ✅ EVERYTHING STARTED!
echo.
echo 🔗 OPEN THIS LINK IN CHROME:
echo http://localhost:8080/?ip=127.0.0.1
echo ==========================================
echo.
pause
