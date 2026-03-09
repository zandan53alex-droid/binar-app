import codecs
import re

def extract_between(text, start_pattern, end_pattern):
    start_match = re.search(start_pattern, text)
    if not start_match:
        return None
    start_idx = start_match.start()
    
    # Simple bracket counting
    bracket_count = 0
    in_string = False
    string_char = ''
    
    for i in range(start_idx, len(text)):
        char = text[i]
        
        if not in_string:
            if char in ["'", '"', '`']:
                in_string = True
                string_char = char
            elif char == '[':
                bracket_count += 1
            elif char == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    return text[start_idx:i+1]
        else:
            if char == string_char and text[i-1] != '\\':
                in_string = False
                
    return None

with codecs.open('c:/binarny/webapp/app_git_orig.js', 'r', 'utf-8') as f:
    content = f.read()

lessons_str = extract_between(content, r'const LESSONS = \[', r'\]')
courses_str = extract_between(content, r'const COURSES = \[', r'\]')

if lessons_str:
    with codecs.open('c:/binarny/webapp/lessons_orig.js', 'w', 'utf-8') as f:
        f.write(lessons_str + ';')
    print("Extracted LESSONS")

if courses_str:
    with codecs.open('c:/binarny/webapp/courses_orig.js', 'w', 'utf-8') as f:
        f.write(courses_str + ';')
    print("Extracted COURSES")
