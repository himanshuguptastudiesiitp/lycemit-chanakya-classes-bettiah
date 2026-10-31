const fs = require('fs');
const path = require('path');

const files = [
    'index.html', 'sections/home.html', 'sections/courses.html',
    'sections/videos.html', 'sections/reviews.html', 'sections/telegram.html',
    'sections/contact.html', 'sections/study-material.html'
];

const scriptOld = '<script src="https://cdn.tailwindcss.com"></script>';
const fontLinkOld = '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">';

const newScript = '<script defer src="https://cdn.tailwindcss.com"></script>';
const newFontLink = '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link media="print" onload="this.media=\'all\'" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" defer>';

let updated = 0;
for (const f of files) {
    const full = path.join(__dirname, f);
    if (!fs.existsSync(full)) { console.error('MISSING:', full); continue; }
    let raw = fs.readFileSync(full, 'utf8');
    if (raw.includes(scriptOld)) {
        raw = raw.split(scriptOld).join(newScript);
        updated++;
    }
    if (raw.includes(fontLinkOld)) {
        raw = raw.split(fontLinkOld).join(newFontLink);
        updated++;
    }
    fs.writeFileSync(full, raw, 'utf8');
    console.log(`Updated: ${f}`);
}
console.log(`Total updates: ${updated}`);
