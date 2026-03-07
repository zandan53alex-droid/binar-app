import os
from pathlib import Path
from dataclasses import dataclass, field
from dotenv import load_dotenv

# Определяем возможные пути к .env файлу
WORKING_DIR_ENV = Path.cwd() / ".env"
SCRIPT_DIR_ENV = Path(__file__).parent / ".env"
ABSOLUTE_ENV = Path("/root/bot/.env")

# Функция для ручного парсинга .env файла
def _parse_env_file(env_path: Path) -> dict:
    result = {}
    try:
        with open(env_path, 'r', encoding='utf-8-sig') as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith('#'):
                    continue
                if '=' in line:
                    key, value = line.split('=', 1)
                    key = key.strip()
                    value = value.strip()
                    if value.startswith('"') and value.endswith('"'):
                        value = value[1:-1]
                    elif value.startswith("'") and value.endswith("'"):
                        value = value[1:-1]
                    result[key] = value
    except Exception as e:
        print(f"⚠️  Ошибка при чтении .env файла {env_path}: {e}")
    return result

# Загрузка .env
env_loaded = False
env_file_path = None
for env_path in [WORKING_DIR_ENV, SCRIPT_DIR_ENV, ABSOLUTE_ENV]:
    if env_path.exists():
        env_file_path = env_path
        load_dotenv(env_path, override=True)
        env_loaded = True
        break

if not env_loaded:
    load_dotenv()

# Ручной парсинг, если load_dotenv не справился
if not os.getenv("TOKEN_BOT") and env_file_path and env_file_path.exists():
    parsed_env = _parse_env_file(env_file_path)
    for key, value in parsed_env.items():
        if not os.getenv(key):
            os.environ[key] = value

DEFAULT_LANG = os.getenv('DEFAULT_LANG', 'en')

@dataclass
class Settings:
    # Токен и админ (из .env)
    TOKEN: str = (os.getenv("TOKEN_BOT") or "").strip()
    ADMIN_ID: int = int(os.getenv("ADMIN_ID", "0") or 0)
    ADMIN_IDS: list[int] = field(default_factory=list)

    # --- ВАШИ ССЫЛКИ НА MINI APP ---
    # Если в .env пусто, используется ваша ссылка по умолчанию:
    MINI_APP: str = (os.getenv("MINI_APP") or "https://your-domain.com/webapp/index.html").strip()
    MINI_APP_PLATINUM: str = (os.getenv("MINI_APP_PLATINUM") or "https://your-domain.com/webapp/index.html?vip=true").strip()

    # Дефолтные значения параметров
    CHANNEL_ID: int = 0
    CHANNEL_URL: str = ""
    PUBLIC_BASE: str = ""
    REF_REG_A: str = ""
    REF_DEP_A: str = ""
    SUPPORT_URL: str = ""
    PLATINUM_THRESHOLD: float = 100.0
    FIRST_DEPOSIT_MIN: float = 10.0
    PB_SECRET: str = "supersecret123"

    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./pocketai.db")

    @property
    def PRIMARY_ADMIN(self) -> int:
        ids = self.ADMIN_IDS or ([self.ADMIN_ID] if self.ADMIN_ID else [])
        return ids[0] if ids else 0


settings = Settings()

# Парсинг списка админов
_raw = os.getenv("ADMIN_IDS", "").replace(";", ",")
ids: list[int] = []
for part in _raw.split(","):
    part = part.strip()
    if part.isdigit():
        ids.append(int(part))
if not ids and settings.ADMIN_ID:
    ids = [settings.ADMIN_ID]
settings.ADMIN_IDS = ids