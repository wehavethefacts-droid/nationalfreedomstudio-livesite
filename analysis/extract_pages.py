from pathlib import Path
from bs4 import BeautifulSoup
import re

base = Path('/home/ubuntu/nationalfreedom-studio-copy/analysis/pages')
out = Path('/home/ubuntu/nationalfreedom-studio-copy/analysis/page_summary.md')

parts = ['# Target page content summary', '']

for html_path in sorted(base.glob('*.html')):
    soup = BeautifulSoup(html_path.read_text(encoding='utf-8'), 'html.parser')
    title = soup.title.get_text(' ', strip=True) if soup.title else html_path.stem
    parts.append(f'## {html_path.stem}')
    parts.append('')
    parts.append(f'**Title:** {title}')
    parts.append('')

    headings = []
    for tag in soup.find_all(re.compile('^h[1-4]$')):
        txt = ' '.join(tag.get_text(' ', strip=True).split())
        if txt:
            headings.append(txt)
    if headings:
        parts.append('**Headings**')
        parts.append('')
        for h in headings:
            parts.append(f'- {h}')
        parts.append('')

    texts = []
    for tag in soup.find_all(['p', 'li']):
        txt = ' '.join(tag.get_text(' ', strip=True).split())
        if txt and len(txt) > 20 and txt not in texts:
            texts.append(txt)
    if texts:
        parts.append('**Key text**')
        parts.append('')
        for t in texts[:40]:
            parts.append(f'- {t}')
        parts.append('')

    media = []
    for tag in soup.find_all(['img', 'video', 'source']):
        src = tag.get('src') or tag.get('data-src')
        if src and src not in media:
            media.append(src)
    if media:
        parts.append('**Media**')
        parts.append('')
        for m in media:
            parts.append(f'- {m}')
        parts.append('')

out.write_text('\n'.join(parts) + '\n', encoding='utf-8')
print(out)
