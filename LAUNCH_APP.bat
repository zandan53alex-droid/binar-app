@echo off
title POCKET AI - ONE CLICK LAUNCHER
setlocal enabledelayedexpansion

echo ==========================================
echo   🚀 POCKET AI: LOCAL LAUNCHER 🚀
echo ==========================================
echo.

:: 1. Killing old processes
echo 1. Cleaning old processes...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080 ^| findstr LISTENING') do (
    echo Killing Web Server on PID %%a
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8765 ^| findstr LISTENING') do (
    echo Killing Quotes Server on PID %%a
    taskkill /f /pid %%a >nul 2>&1
)
echo.

:: 2. Check Python
echo 2. Checking Python...
python --version >nul 2>&1
if !errorlevel! neq 0 (
    echo ERROR: Python is not installed or not in PATH.
    echo Please install Python from https://www.python.org/
    pause
    exit /b
)
echo Python found.
echo.

:: 3. Installing requirements
echo 3. Installing requirements (please wait)...
python -m pip install websockets aiohttp aiogram fastapi uvicorn sqlalchemy aiosqlite python-dotenv >nul 2>&1
if !errorlevel! neq 0 (
    echo Warning: Pip failed to install some packages. Checking if servers can start anyway...
)
echo.

:: 4. Starting Servers
echo 4. Starting App Servers...
echo [INFO] Quotes Server will run on port 8765
start "Quotes Server (Pocket AI)" /min python quotes_server.py
echo [INFO] Web Server will run on port 8080
start "Web Server (Pocket AI)" /min python web_server.py
echo.

echo ==========================================
echo ✅ EVERYTHING SHOULD BE RUNNING!
echo.
echo 🔗 OPEN THIS LINK IN CHROME:
echo http://localhost:8080
echo ==========================================
echo.
echo If quotes say "SEARCHING", check the "Quotes Server" window (minimized).
echo.
pause
