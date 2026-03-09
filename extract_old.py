import os
import codecs

with codecs.open("c:/binarny/webapp/app_old.js", "r", "utf-16le") as f:
    text = f.read()

import re

# extract LESSONS block
m_lessons = re.search(r'const LESSONS = \[.*?\];', text, re.DOTALL)
if m_lessons:
    print("FOUND LESSONS")
    with open("c:/binarny/webapp/lessons_orig.js", "w", encoding="utf-8") as out:
        out.write(m_lessons.group(0))

m_courses = re.search(r'const COURSES = \[.*?\];', text, re.DOTALL)
if m_courses:
    print("FOUND COURSES")
    with open("c:/binarny/webapp/courses_orig.js", "w", encoding="utf-8") as out:
        out.write(m_courses.group(0))

m_indicators = re.search(r'const INDICATORS = \[.*?\];', text, re.DOTALL)
if m_indicators:
    print("FOUND INDICATORS")
    with open("c:/binarny/webapp/indicators_orig.js", "w", encoding="utf-8") as out:
        out.write(m_indicators.group(0))

print("DONE")
