import os, re, sys, json, subprocess

sys.stdout.reconfigure(encoding='utf-8')

root_dir = 'd:/Desktop/CHANKYA'
errors = []
warnings = []

html_files = [
    'index.html',
    'sections/home.html',
    'sections/courses.html',
    'sections/telegram.html',
    'sections/videos.html',
    'sections/study-material.html',
    'sections/reviews.html',
    'sections/contact.html',
    'dashboard.html',
    'sections/dashboard.html',
    '404.html'
]

print("=== 1. CHECKING ASSET FILES EXISTENCE ===")
required_assets = [
    'assets/favicon.png',
    'assets/logo.png',
    'assets/logo-hd.png',
    'assets/logo-transparent.png',
    'assets/featured_short_poster.jpg',
    'assets/featured_short_poster_portrait.jpg',
    'assets/stories/mari_chooriyan.mp4',
    'assets/stories/stories_we_celebrate.mp4',
        'assets/stories/story_mari_chooriyan_poster.jpg',
        'assets/stories/story_stories_we_celebrate_poster.jpg',
        'assets/ai_mitra_avatar.png',
        'assets/ai_mitra_logo.png',
    'assets/app-features/feature1_chanakya_online.jpg',
    'assets/app-features/feature2_premium_live_class.jpg',
    'assets/app-features/feature3_updated_notes.jpg',
    'assets/app-features/feature4_weekly_test.jpg',
    'assets/app-features/feature5_device_matters.jpg',
    'assets/books/chanakya_books_combo_showcase.jpg',
    'assets/books/book_science_fast_track.jpg',
    'assets/books/book_maths_fast_track.jpg',
    'assets/books/book_sst_fast_track.jpg',
    'assets/books/book_concept_map_combined.jpg',
    'assets/manmit_shrivastva.jpg',
    'assets/manmit_shrivastva_circle.png',
    'assets/manmit_shrivastva_headshot.jpg',
    'assets/manmit_shrivastva_portrait.png',
    'assets/manmit_avatar.png',
    'assets/manmit_office_chamber.jpg',
    'assets/manmit_sir_headshot_square.jpg',
    'assets/google_maps_video_poster.jpg',
    'assets/doubt_solving_preview_poster.jpg',
    'assets/jo_padhaya_wahi_se_aaya_poster.jpg',
    'image_305d01.png',
    'assets/news/dainik_jagran_kavi_sammelan_chanakya.jpg',
    'assets/news/chanakya_powered_by_clipping.jpg',
    'assets/news/dainik_jagran_cbse_toppers_2023.jpg',
    'assets/news/dainik_jagran_cbse_toppers_2023_hd.jpg',
    'js/ai-mitra.js',
    'js/dashboard.js',
    'shared/ai-mitra.css'
]

for asset in required_assets:
    p = os.path.join(root_dir, asset)
    if os.path.exists(p):
        print(f"  [OK] {asset} ({os.path.getsize(p):,} bytes)")
    else:
        errors.append(f"Missing asset file: {asset}")
        print(f"  [FAIL] {asset} does not exist!")

print("\n=== 2. CHECKING HTML FILES & SEO & AI MITRA METADATA ===")
titles_seen = set()
descriptions_seen = set()

for hf in html_files:
    fpath = os.path.join(root_dir, hf)
    if not os.path.exists(fpath):
        errors.append(f"Missing HTML file: {hf}")
        continue

    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    has_preloader = 'id="sitePreloader"' in content
    has_favicon = 'favicon.png' in content
    has_playstore = 'https://play.google.com/store/search?q=lycemit' in content
    has_maps = 'https://www.google.co.in/maps/place/Chanakya+Classes+by+Manmit' in content
    has_ai_mitra_js = 'ai-mitra.js' in content
    has_ai_mitra_css = 'ai-mitra.css' in content

    # SEO checks
    has_canonical = 'rel="canonical"' in content
    has_og = 'property="og:title"' in content and 'property="og:image"' in content
    has_twitter = 'name="twitter:card"' in content
    has_theme = 'name="theme-color"' in content
    has_robots = 'name="robots"' in content

    # H1 check
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    h1_count = len(h1s)

    # Title & description uniqueness
    title_m = re.search(r'<title>(.*?)</title>', content)
    title_txt = title_m.group(1).strip() if title_m else ""
    desc_m = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content)
    desc_txt = desc_m.group(1).strip() if desc_m else ""

    # Schema JSON-LD validation
    jsonld_m = re.search(r'<script\s+type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    has_jsonld = False
    if jsonld_m:
        try:
            json.loads(jsonld_m.group(1).strip())
            has_jsonld = True
        except Exception:
            has_jsonld = False

    print(f"\nFile: {hf} ({len(content):,} bytes)")
    print(f"  Preloader:     {'[OK]' if has_preloader else '[MISSING]'}")
    print(f"  Favicon:       {'[OK]' if has_favicon else '[MISSING]'}")
    print(f"  Play Store:    {'[OK]' if has_playstore else '[MISSING]'}")
    print(f"  Google Maps:   {'[OK]' if has_maps else '[MISSING]'}")
    print(f"  AI Mitra JS:   {'[OK]' if has_ai_mitra_js else '[MISSING]'}")
    print(f"  AI Mitra CSS:  {'[OK]' if has_ai_mitra_css else '[MISSING]'}")
    print(f"  Canonical URL: {'[OK]' if has_canonical else '[FAIL]'}")
    print(f"  Open Graph:    {'[OK]' if has_og else '[FAIL]'}")
    print(f"  Twitter Cards: {'[OK]' if has_twitter else '[FAIL]'}")
    print(f"  JSON-LD Schema:{'[OK]' if has_jsonld else '[FAIL]'}")
    print(f"  Singular H1:   {'[OK] (Count: 1)' if h1_count == 1 else f'[FAIL] (Count: {h1_count})'}")

    if not has_preloader: errors.append(f"{hf}: missing preloader")
    if not has_favicon: errors.append(f"{hf}: missing favicon")
    if not has_ai_mitra_js: errors.append(f"{hf}: missing ai-mitra.js")
    if not has_ai_mitra_css: errors.append(f"{hf}: missing ai-mitra.css")
    if not has_canonical: errors.append(f"{hf}: missing canonical URL")
    if not has_og: errors.append(f"{hf}: missing Open Graph meta")
    if not has_twitter: errors.append(f"{hf}: missing Twitter meta")
    if not has_jsonld: errors.append(f"{hf}: missing or invalid JSON-LD schema")
    if h1_count != 1: errors.append(f"{hf}: expected exactly 1 H1, found {h1_count}")

    if title_txt:
        if title_txt in titles_seen:
            errors.append(f"{hf}: duplicate title '{title_txt}'")
        titles_seen.add(title_txt)
    else:
        errors.append(f"{hf}: missing <title>")

    if desc_txt:
        if desc_txt in descriptions_seen:
            errors.append(f"{hf}: duplicate meta description")
        descriptions_seen.add(desc_txt)
    else:
        errors.append(f"{hf}: missing meta description")

    # Check relative links inside the file
    base_dir = os.path.dirname(fpath)
    for m in re.finditer(r'src=["\']([^"\']+)["\']', content):
        src = m.group(1)
        if src.startswith(('http://', 'https://', '//', 'data:', '#')):
            continue
        src_clean = src.split('?')[0]
        abs_src = os.path.normpath(os.path.join(base_dir, src_clean))
        if not os.path.exists(abs_src):
            errors.append(f"{hf}: broken src link '{src}' -> '{abs_src}'")
            print(f"  [BROKEN SRC] {src}")

print("\n=== 3. CHECKING SITEMAP.XML & ROBOTS.TXT ===")
sitemap_path = os.path.join(root_dir, 'sitemap.xml')
robots_path = os.path.join(root_dir, 'robots.txt')

if os.path.exists(sitemap_path):
    print(f"  [OK] sitemap.xml exists ({os.path.getsize(sitemap_path):,} bytes)")
else:
    errors.append("sitemap.xml is missing")
    print("  [FAIL] sitemap.xml missing!")

if os.path.exists(robots_path):
    print(f"  [OK] robots.txt exists ({os.path.getsize(robots_path):,} bytes)")
else:
    errors.append("robots.txt is missing")
    print("  [FAIL] robots.txt missing!")

print("\n=== 4. CHECKING STORIES SECTION IN INDEX & VIDEOS ===")
for target_f in ['index.html', 'sections/videos.html', 'sections/home.html']:
    p = os.path.join(root_dir, target_f)
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
    has_stories = 'id="running-stories"' in c
    has_modal = 'id="storyViewerModal"' in c
    has_video1 = 'mari_chooriyan.mp4' in c
    has_video2 = 'stories_we_celebrate.mp4' in c
    print(f"{target_f}:")
    print(f"  #running-stories: {'[OK]' if has_stories else '[MISSING]'}")
    print(f"  #storyViewerModal: {'[OK]' if has_modal else '[MISSING]'}")
    print(f"  mari_chooriyan.mp4: {'[OK]' if has_video1 else '[MISSING]'}")
    print(f"  stories_we_celebrate.mp4: {'[OK]' if has_video2 else '[MISSING]'}")

print("\n=== 5. CHECKING LYCEMIT_AI_MITRA PYTHON PACKAGE & TESTS ===")
pkg_dir = os.path.join(root_dir, 'lycemit_ai_mitra')
if os.path.exists(pkg_dir):
    print(f"  [OK] lycemit_ai_mitra package exists")
    # Run tests
    test_proc = subprocess.run([sys.executable, '-m', 'unittest', 'discover', '-s', 'lycemit_ai_mitra/tests'],
                               cwd=root_dir, capture_output=True, text=True)
    if test_proc.returncode == 0:
        print(f"  [OK] Unit test suite passed completely (0 errors)")
    else:
        errors.append(f"lycemit_ai_mitra tests failed: {test_proc.stderr}")
        print(f"  [FAIL] Unit test failure:\n{test_proc.stderr}")
else:
    errors.append("lycemit_ai_mitra package missing")
    print(f"  [FAIL] lycemit_ai_mitra package does not exist!")

print("\n=== 6. SUMMARY ===")
if errors:
    print(f"FAILURES DETECTED ({len(errors)}):")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
else:
    print("ALL VALIDATION, SEO & AI MITRA CHECKS PASSED PERFECTLY! 0 ERRORS.")
