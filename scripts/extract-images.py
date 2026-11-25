"""Re-extract selected catalogue assets: python scripts/extract-images.py path/to/catalogue.pdf"""
import sys
from pathlib import Path
import pymupdf
from PIL import Image

root = Path(__file__).resolve().parent.parent
output = root / 'public/images/pdf'
output.mkdir(parents=True, exist_ok=True)
selected = {2: [4], 3: [2, 3, 4, 6, 7], 4: [3, 29], 5: [15], 6: [3, 11], 7: [1, 2, 4, 5, 6, 7, 8, 16], 8: [2, 6]}
document = pymupdf.open(sys.argv[1])
for number, indices in {1: [1], **selected}.items():
    page = document[number - 1]
    for index in indices:
        item = page.get_images(full=True)[index - 1]
        pix = pymupdf.Pixmap(document, item[0])
        if pix.n > 4:
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        image = Image.frombytes('RGBA' if pix.alpha else 'RGB', (pix.width, pix.height), pix.samples).convert('RGB')
        filename = f'page-{number}-{index}.webp'
        if number == 1:
            image = image.crop((0, 0, 1054, 1005))
            filename = 'hero-facade.webp'
        image.save(output / filename, 'WEBP', quality=88)
(root / 'reference').mkdir(exist_ok=True)
(root / 'reference/catalogue.txt').write_text('\n'.join(f'PAGE {i+1}\n{page.get_text()}' for i, page in enumerate(document)), encoding='utf-8')
print('Selected catalogue assets extracted.')
