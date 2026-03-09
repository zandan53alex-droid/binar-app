import codecs

def check_brackets(filepath):
    try:
        with codecs.open(filepath, 'r', 'utf-8') as f:
            content = f.read()
        
        stack = []
        brackets = {'{': '}', '[': ']', '(': ')'}
        for i, char in enumerate(content):
            if char in brackets.keys():
                stack.append((char, i))
            elif char in brackets.values():
                if not stack:
                    print(f"Error: Unexpected closing bracket '{char}' at index {i}")
                    # Show some context
                    print(content[max(0, i-50):i+50])
                    return False
                last_open, last_idx = stack.pop()
                if brackets[last_open] != char:
                    print(f"Error: Mismatched brackets '{last_open}' and '{char}' at index {i}")
                    print(content[max(0, i-50):i+50])
                    return False
        
        if stack:
            print(f"Error: Unclosed brackets: {stack}")
            return False
            
        print("Brackets are balanced!")
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

check_brackets(r"c:\binarny\webapp\content.js")
