# 🗺️ Project Path Manifest & Routing Directory — CHANKYA / LYCEMIT

> **English** • Complete master path directory for the **Chanakya Classes Bettiah & LYCEMIT** web portal, asset catalog, AI Mitra system, and configuration files. Contains local workspace paths, production web routes, and inter-component dependency mappings.
>
> **हिन्दी** • **चाणक्य क्लासेज बेतिया और लाइसमिट** वेब पोर्टल, एसेट कैटलॉग, AI मित्र सिस्टम और कॉन्फ़िगरेशन फाइलों की संपूर्ण मास्टर पाथ डायरेक्ट्री।

---

## 📍 1. Base Environment Paths

| Environment Property | Path / Value |
|---|---|
| **Local Project Root (Windows)** | `D:\Desktop\CHANKYA\` |
| **Production Canonical URL** | `https://lycemit.com/` |
| **Local Web Server Target** | `http://127.0.0.1:8080/` |
| **Python AI Package Root** | `D:\Desktop\CHANKYA\lycemit_ai_mitra\` |
| **Sitemap URL** | `https://lycemit.com/sitemap.xml` |
| **Robots Directives** | `https://lycemit.com/robots.txt` |

---

## 🌐 2. Web Pages & Routing Paths

| Page / Module | Local Relative Path | Production Web Route | Purpose & Description |
|---|---|---|---|
| 🏠 **Main Unified Portal** | `index.html` | `/` or `/index.html` | Single-page unified portal with Hero 3D Euler mesh canvas, all sections, and modals. |
| 🏡 **Home & About Section** | `sections/home.html` | `/sections/home.html` | Standalone landing page, educator spotlight, motto pill, and 4-column statistics strip. |
| 📚 **Courses & Offline Batches** | `sections/courses.html` | `/sections/courses.html` | Online ₹9/₹99 courses, class filters (6–12, NEET/JEE), and Bettiah offline classroom batches. |
| 📖 **Free Study Material** | `sections/study-material.html` | `/sections/study-material.html` | 4-in-1 Fast Track study kits, NCERT solutions, timetables, and mock test downloads. |
| 🎬 **Videos & Shorts Library** | `sections/videos.html` | `/sections/videos.html` | YouTube `@Lycemit` video library, live stream tabs, campus reels, and modal preview player. |
| ⭐ **Reviews & Testimonials** | `sections/reviews.html` | `/sections/reviews.html` | 4.5★ Google reviews, student testimonials, and Dainik Jagran 96.4% CBSE toppers hall of fame. |
| 📞 **Contact & Admissions Desk** | `sections/contact.html` | `/sections/contact.html` | Bettiah campus address, Google Maps directions, admission form, and WhatsApp counselor. |
| 📱 **Telegram & Community Hub** | `sections/telegram.html` | `/sections/telegram.html` | Official Telegram channels (`@msmanmit`), WhatsApp QR, and printable scanner posters. |

---

## ⚙️ 3. JavaScript & Engine Paths

| Component | Relative Path | Purpose & Execution Mode |
|---|---|---|
| **Central Shared Engine** | `js/shared.js` | Modular JavaScript (Euler 3D canvas mesh, 3D card tilt, video modal player, course filters, preloader). |
| **AI Mitra Web Assistant** | `js/ai-mitra.js` | Multilingual NLP, browser SpeechRecognition (STT), SpeechSynthesis (TTS), FAB, and agent tools. |
| **Clerk Auth Config** | `js/clerk-config.js` | Clerk client-side authentication publishable key configuration. |
| **HTML Defer Helper** | `update_html_defer.js` | Asynchronous script loading and font optimization utility. |

---

## 🎨 4. Stylesheets & UI System Paths

| Stylesheet | Relative Path | Purpose & Modules |
|---|---|---|
| **Core Portal Styles** | `shared/styles.css` | GPU 3D transform layers, particle constellation, glassmorphism, scanner laser, and dark mode scrollbars. |
| **AI Mitra Widget Styles** | `shared/ai-mitra.css` | Floating button (`#ai-mitra-fab`), slide-up window (`#ai-mitra-window`), typing indicator, and responsive mobile layout. |

---

## 🖼️ 5. Static & Media Asset Catalog

### A. Branding & Logos
* `assets/logo.png` — Standard institute logo (56.5 KB)
* `assets/logo-hd.png` — Ultra high-definition logo for headers and Open Graph (251.3 KB)
* `assets/logo-transparent.png` — Transparent PNG for overlays and modals (41.8 KB)
* `assets/favicon.png` — High-definition browser tab icon (4.9 KB)

### B. Manmit Shrivastva Educator Portraits
* `assets/manmit_shrivastva_portrait.png` — Studio portrait with transparent background (430.4 KB)
* `assets/manmit_shrivastva_circle.png` — Circular framed educator portrait (506.7 KB)
* `assets/manmit_shrivastva.jpg` — Campus photo (103.6 KB)
* `assets/manmit_shrivastva_headshot.jpg` — Verification headshot (52.2 KB)
* `assets/manmit_avatar.png` — Chat & story round avatar (38.4 KB)

### C. Running Stories MP4 Videos
* `assets/stories/mari_chooriyan.mp4` — Campus celebration & student felicitation video (6.25 MB)
* `assets/stories/stories_we_celebrate.mp4` — Direct home visit & topper celebration story (10.4 MB)

### D. 4-in-1 Fast Track Study Books Combo Kit
* `assets/books/chanakya_books_combo_showcase.jpg` — High-res combo kit presentation (207.3 KB)
* `assets/books/book_science_fast_track.jpg` — Fast Track Science book module (57.7 KB)
* `assets/books/book_maths_fast_track.jpg` — Fast Track Mathematics book module (62.5 KB)
* `assets/books/book_sst_fast_track.jpg` — Fast Track Social Science book module (42.7 KB)
* `assets/books/book_concept_map_combined.jpg` — Concept Map Combined revision book module (50.6 KB)

### E. Dainik Jagran Media Coverage & Toppers
* `assets/news/dainik_jagran_cbse_toppers_2023_hd.jpg` — Front-page newspaper clipping (309.8 KB)
* `assets/news/dainik_jagran_cbse_toppers_2023.jpg` — Standard resolution clipping (95.9 KB)
* `assets/news/dainik_jagran_kavi_sammelan_chanakya.jpg` — Akhil Bharatiya Kavi Sammelan clipping (247.1 KB)
* `assets/news/chanakya_powered_by_clipping.jpg` — Powered by Chanakya Classes sponsor clipping (12.3 KB)

### F. Lycemit Android App Feature Screenshots
* `assets/app-features/feature1_chanakya_online.jpg` — Online Live & Recorded Class screen (50.5 KB)
* `assets/app-features/feature2_premium_live_class.jpg` — Daily Interactive Live Classes (56.0 KB)
* `assets/app-features/feature3_updated_notes.jpg` — Free Chapter-wise Notes & DPPs (46.0 KB)
* `assets/app-features/feature4_weekly_test.jpg` — Instant Result Online Test Series (39.2 KB)
* `assets/app-features/feature5_device_matters.jpg` — Multi-Device Big Screen Access (49.3 KB)

---

## 🐍 6. Python Standalone Package (`lycemit_ai_mitra/`)

```text
lycemit_ai_mitra/
├── README.md                          # Package documentation & usage examples
├── requirements.txt                   # Optional speech & test dependencies
├── settings.json                      # Institute settings, helpline numbers & defaults
├── src/
│   ├── __init__.py                    # Package exports (LycemitAIChatbot, LycemitAgent, etc.)
│   ├── main.py                        # CLI entry point (Chat, Voice, Agent, Query)
│   ├── chatbot.py                     # Conversational Chatbot engine
│   ├── agent.py                       # Autonomous Tool-Calling Agent
│   ├── tools.py                       # Agent tools registry (Courses, Fees, Inquiries)
│   ├── voice.py                       # Voice STT & TTS engine with resilient fallbacks
│   ├── multilingual.py                # Language detection (EN/HI/Hinglish) & tokenization
│   └── utils.py                       # Settings loader & logging helpers
└── tests/
    ├── test_chatbot.py                # Chatbot intent & response unit tests
    ├── test_agent.py                  # Autonomous agent & tool calling tests
    └── test_multilingual.py           # Language detection & tokenization tests
```

---

## 🔍 7. Verification, SEO & Documentation Paths

| File | Purpose |
|---|---|
| `validate_project.py` | Master integrity validator (checks all 28 assets, 8 HTML files, SEO tags, sitemaps, and runs 17 Python unit tests). |
| `sitemap.xml` | Standard search engine sitemap with URL locations, priorities, and change frequencies. |
| `robots.txt` | Standard web crawler directives pointing to `https://lycemit.com/sitemap.xml`. |
| `ARCHITECTURE.md` | System architecture documentation with 4 Mermaid diagrams. |
| `PROJECT_PATHS.md` | Master project paths manifest (this file). |
| `README.md` | Dual-language (English & Hindi) project documentation. |
| `LICENSE` | MIT Open Source License. |
| `package.json` | Node.js project manifest (`type: module`, dependencies). |
| `.env.example` | Template for environment variables (Resend, Clerk). |

---

## 🔗 8. Inter-File Relative Path Quick Reference

| From File | To Shared CSS | To AI Mitra CSS | To Shared JS | To AI Mitra JS | To Assets |
|---|---|---|---|---|---|
| `index.html` | `shared/styles.css` | `shared/ai-mitra.css` | `js/shared.js` | `js/ai-mitra.js` | `assets/...` |
| `sections/*.html` | `../shared/styles.css` | `../shared/ai-mitra.css` | `../js/shared.js` | `../js/ai-mitra.js` | `../assets/...` |
| `js/*.js` | `../shared/...` | `../shared/...` | sibling | sibling | `../assets/...` |

