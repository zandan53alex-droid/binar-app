import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = "webapp"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"\n🚀 ЛОКАЛЬНЫЙ ВЕБ-СЕРВЕР ЗАПУЩЕН")
        print(f"🔗 Откройте в браузере: http://localhost:{PORT}")
        print(f"💡 Для работы котировок используйте: http://localhost:{PORT}/?ip=127.0.0.1")
        print("\nНажмите Ctrl+C для остановки.")
        httpd.serve_forever()
