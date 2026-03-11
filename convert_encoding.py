import codecs
with codecs.open('c:/binarny/webapp/app_old.js', 'r', 'utf-16le') as f:
    text = f.read()

with codecs.open('c:/binarny/webapp/app_old_utf8.js', 'w', 'utf-8') as f:
    f.write(text)
