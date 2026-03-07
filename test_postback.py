"""
Скрипт для тестирования постбеков на удаленном сервере
"""
import hmac
import hashlib
import requests
import sys

def generate_signature(secret: str, kind: str, click_id: str) -> str:
    """Генерация подписи для постбека"""
    return hmac.new(secret.encode(), f"{kind}:{click_id}".encode(), hashlib.sha256).hexdigest()

def test_postback(base_url: str, secret: str, click_id: str, event: str = "reg", trader_id: str = "test123", sumdep: float = 0.0):
    """Тестирование постбека"""
    url = f"{base_url}/pb"
    
    params = {
        "event": event,
        "click_id": click_id,
        "trader_id": trader_id,
        "secret": secret,
    }
    
    if sumdep > 0:
        params["sumdep"] = sumdep
    
    print(f"Testing POSTBACK:")
    print(f"  URL: {url}")
    print(f"  Event: {event}")
    print(f"  Click ID: {click_id}")
    print(f"  Trader ID: {trader_id}")
    if sumdep > 0:
        print(f"  Sum: ${sumdep}")
    print()
    
    try:
        response = requests.get(url, params=params, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            try:
                data = response.json()
                print(f"\n✅ Success!")
                print(f"  User ID: {data.get('telegram_id')}")
                print(f"  Registered: {data.get('is_registered')}")
                print(f"  Has Deposit: {data.get('has_deposit')}")
                print(f"  Total Deposits: ${data.get('total_deposits', 0)}")
                print(f"  Is Platinum: {data.get('is_platinum')}")
            except:
                print("Response is not JSON")
        else:
            print(f"\n❌ Error: {response.status_code}")
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Connection error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python test_postback.py <BASE_URL> <SECRET> <CLICK_ID> [EVENT] [TRADER_ID] [SUMDEP]")
        print("\nExample:")
        print("  python test_postback.py https://your-domain.com your_secret test_click_id")
        print("  python test_postback.py https://your-domain.com your_secret test_click_id dep_first test_trader 50")
        sys.exit(1)
    
    base_url = sys.argv[1].rstrip("/")
    secret = sys.argv[2]
    click_id = sys.argv[3]
    event = sys.argv[4] if len(sys.argv) > 4 else "reg"
    trader_id = sys.argv[5] if len(sys.argv) > 5 else "test123"
    sumdep = float(sys.argv[6]) if len(sys.argv) > 6 else 0.0
    
    test_postback(base_url, secret, click_id, event, trader_id, sumdep)

