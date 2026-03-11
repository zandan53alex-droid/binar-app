from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    
    errors = []
    page.on("pageerror", lambda err: errors.append(f"PAGE ERROR: {err}"))
    page.on("console", lambda msg: errors.append(f"CONSOLE {msg.type}: {msg.text}") if msg.type == 'error' else None)
    
    page.goto("http://localhost/webapp/index.html") # We'll try file:// if this doesn't work
    
    # give it a sec
    page.wait_for_timeout(2000)
    
    print("--- CONSOLE ERRORS ---")
    for e in errors:
        print(e)
    print("----------------------")
    
    browser.close()
