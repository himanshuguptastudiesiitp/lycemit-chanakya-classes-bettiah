# LYCEMIT & Chanakya Classes Bettiah — Official Web Portal & Categorized Pages

### लाइसमिट और चाणक्य क्लासेज बेतिया — आधिकारिक वेब पोर्टल और वर्गीकृत पेज

---

> **English** ・ A modern, responsive, modular web portal for **Chanakya Classes** (Bettiah, Bihar) and **LYCEMIT Online Education**, led by **Manmit Shrivastva (@msmanmit)**. Available both as a full unified single-page portal (`index.html`) and as standalone, dedicated categorized web pages in `sections/` with modular CSS (`shared/styles.css`) and JavaScript (`js/shared.js`).
>
> **हिन्दी** ・ **चाणक्य क्लासेज** (बेतिया, बिहार) और **लाइसमिट ऑनलाइन एजुकेशन** का आधुनिक, रेस्पॉन्सिव और मॉड्यूलर वेब पोर्टल, जिसका नेतृत्व **मनमीत श्रीवास्तव (@msmanmit)** करते हैं। यह पूर्ण एकीकृत पोर्टल (`index.html`) तथा `sections/` में अलग-अलग स्वतंत्र वर्गीकृत पेजों, मॉड्यूलर CSS (`shared/styles.css`) और जावास्क्रिप्ट (`js/shared.js`) के साथ उपलब्ध है।

---

## 📑 Table of Contents / विषय सूची

- [Architecture & System Design / आर्किटेक्चर एवं सिस्टम डिज़ाइन](ARCHITECTURE.md)
- [Project Path Directory / प्रोजेक्ट पाथ डायरेक्ट्री](PROJECT_PATHS.md)
- [File & Directory Architecture / फ़ाइल एवं डायरेक्ट्री संरचना](#-file--directory-architecture--फ़ाइल-एवं-डायरेक्ट्री-संरचना)
- [Categorized Web Pages / अलग-अलग वर्गीकृत वेब पेज](#-categorized-web-pages--अलग-अलग-वर्गीकृत-वेब-पेज)
- [Modular Assets / मॉड्यूलर एसेट्स](#-modular-assets--मॉड्यूलर-एसेट्स)
- [Features / विशेषताएँ](#-features--विशेषताएँ)
- [Tech Stack / तकनीकी स्टैक](#-tech-stack--तकनीकी-स्टैक)
- [Getting Started / शुरू कैसे करें](#-getting-started--शुरू-कैसे-करें)
- [Development & Preview / डेवलपमेंट और प्रीव्यू](#-development--preview--डेवलपमेंट-और-प्रीव्यू)
- [Contact / संपर्क](#-contact--संपर्क)
- [License / लाइसेंस](#-license--लाइसेंस)

---

## 📂 File & Directory Architecture / फ़ाइल एवं डायरेक्ट्री संरचना

```text
CHANKYA/
├── index.html                  # Main Unified Portal (links to all sections + direct category pills)
├── ARCHITECTURE.md             # Complete System Architecture & Mermaid Diagrams
├── PROJECT_PATHS.md            # Complete Master Paths Manifest (Relative, Absolute & Routes)
├── paths.json                  # Machine-readable JSON path configuration
├── sitemap.xml                 # Search Engine XML Sitemap with all 8 pages & priority weights
├── robots.txt                  # Standard crawler directives (Allow all, Sitemap pointer)
├── README.md                   # Complete Documentation (English & Hindi)
├── LICENSE                     # MIT License
├── js/
│   └── shared.js               # Central modular JavaScript (all 65+ functions, QR logic, modals, data)
├── shared/
│   └── styles.css              # Central modular stylesheet (custom animations, glassmorphism, scanner laser)
└── sections/
    ├── home.html               # 1. Landing & Hero, Founder Spotlight, 4-Column Stats
    ├── telegram.html           # 2. Dedicated Telegram QR Hub (3 Telegram channels + WhatsApp QR + Poster Download)
    ├── courses.html            # 3. Online Courses (₹9 & ₹99) + Offline Coaching Campus Batches
    ├── videos.html             # 4. YouTube Video Library (@Lycemit live streams, popular classes & shorts)
    ├── study-material.html     # 5. Free Study Material, PDFs, Weekly Timetables & Mock Tests
    ├── reviews.html            # 6. Student Reviews (Google Maps 4.5★ breakdown, verified quotes)
    └── contact.html            # 7. Contact Info, Bettiah Address & Map, Admission Inquiry Form & WhatsApp
```

---

## 🗂️ Categorized Web Pages / अलग-अलग वर्गीकृत वेब पेज

Every section has been cleanly separated into an independent, standalone, error-free HTML page in `sections/` with active navigation, theme switching (dark/light), mobile drawer, and interactive modals:

| Page / पेज | File / फ़ाइल | Description / विवरण |
|------------|-------------|---------------------|
| 🏠 **Home & About** | `sections/home.html` | Hero banner, educator studio portrait, motto pill, quick social dock, and verified 4-column statistics strip. / मुख्य लैंडिंग, शिक्षक प्रोफ़ाइल, आदर्श वाक्य और 4-कॉलम सांख्यिकी। |
| 📱 **Telegram QR Hub** | `sections/telegram.html` | 3 Telegram scanners (`@msmanmit`, `@msmanmit2003`, `@mslinks2021`) + WhatsApp QR, tab switcher, fullscreen laser scanner modal, and printable high-res canvas PNG poster downloader. / समर्पित टेलीग्राम QR हब, चैनल स्विचर और डाउनलोड करने योग्य QR कार्ड। |
| 📚 **Courses & Offline Batches** | `sections/courses.html` | Session 2026–27 featured digital courses (₹9 & ₹99), live search input, class filter pills (6–12, NEET/JEE, Chapter-wise), plus Chanakya Classes Bettiah offline campus batches (Foundation, Target NEET/JEE, Competitions), hostel info, and map directions. / ऑनलाइन कोर्सेज, सर्च व क्लास फ़िल्टर और बेतिया ऑफ़लाइन कोचिंग कैंपस। |
| 🎬 **Videos & Shorts** | `sections/videos.html` | YouTube @Lycemit video library with category tabs: Recent Live Streams, Popular Classes, Shorts & Campus life, plus YouTube video preview modal. / निःशुल्क वीडियो लाइब्रेरी, लाइव क्लास, लोकप्रिय लेक्चर्स व शॉर्ट्स। |
| 📲 **App Features & Screenshots** | `#app-features` | Official Google Play Store app showcase displaying the 5 core features: Chanakya Online, Premium Daily Live Classes, Free Chapter Notes & DPPs, Instant-Result Weekly Tests, and Multi-Device Big Screen Access. / 5 मुख्य ऐप फीचर्स: ऑनलाइन क्लास, दैनिक लाइव क्लास, फ्री नोट्स, साप्ताहिक टेस्ट और मल्टी-डिवाइस सपोर्ट। |
| 📝 **Study Material** | `sections/study-material.html` | 4-card resource grid: Free NCERT PDFs & Formula Sheets, Live Class Schedules & Weekly Timetable, Online Test Series, and Telegram QR scanner. / निःशुल्क पीडीएफ़, लाइव टाइमटेबल, टेस्ट सीरीज़ और टेलीग्राम QR। |
| ⭐ **Reviews & Testimonials** | `sections/reviews.html` | Google Maps verified 4.5★ rating breakdown (89 reviews), verified student testimonials, and educator teaching philosophy. / गूगल मैप्स 4.5★ रेटिंग, छात्रों की सत्यापित समीक्षाएं और शिक्षण दर्शन। |
| 📞 **Contact & Admissions** | `sections/contact.html` | Helpline phone numbers (079797 24568 / 7279900093 / 9430514561), official emails, Supriya Cinema Road campus address, interactive inquiry form with live 0/120 character counter, and instant WhatsApp integration. / संपर्क फ़ोन, ईमेल, कैंपस पता, 120-वर्ण काउंटर वाला पूछताछ फ़ॉर्म और व्हाट्सएप। |
| 🌐 **Unified Portal** | `index.html` | The full all-in-one experience linking all categories and featuring the direct Category Quick Links Bar. / सभी सेक्शन्स को जोड़ने वाला मुख्य एकीकृत पोर्टल। |

---

## ⚙️ Modular Assets / मॉड्यूलर एसेट्स

### 1. `js/shared.js`
A single, clean, robust script containing all interactive logic:
- **QR & Scanner Hub**: `getQrApiUrl`, `generateFallbackQrDataUrl` (HTML5 Canvas fallback for offline reliability), `switchScannerHubTab`, `openTelegramScannerModal`, `updateModalScanner`, `downloadQrPoster`.
- **Course System**: `coursesData` (2026–27 catalog), `renderCourses`, `filterCourses`, `filterCoursesBySearch`, `openCourseModal`, `resetCourseFilters`, `prefillInquiry`.
- **Video Library**: `videosData` (Live, Popular, Shorts), `switchVideoTab`, `openVideoModal`.
- **Modals & UI**: `closeModal`, `openAuthModal`, `switchAuthTab`, `handleAuthSubmit`, `openAppModal`, `openScheduleModal`, `openLegalModal`, `toggleMobileMenu`, `toggleTheme` (Light/Dark mode).
- **Forms & Utilities**: `handleContactSubmit`, `sendViaWhatsApp`, `updateCharCounter` (0/120 counter), `copyToClipboard`, `showToast`, `initZeroBrokenImages`, `handleCustomImageUpload`.
- Safe DOM initialization: initializes components conditionally without throwing errors on pages where certain elements do not exist.

### 2. `shared/styles.css`
Contains pure, optimized CSS rules:
- Custom dark-mode and light-mode scrollbars (`::-webkit-scrollbar`)
- Animated floating effect (`@keyframes floatSlow`)
- Laser scanner animation (`@keyframes scanLaser`)
- Strict single-line desktop navbar layout (`.navbar-inner`, `.nav-links-row`, `.nav-link-item`)
- Social media square icon containers (`.social-icon-btn`, `.channel-pill-btn`, `.stat-icon-square`)
- Responsive grid utilities and glassmorphism styling (`.glass-card`).

---

## ✨ Features / विशेषताएँ

| Feature | Description |
|---------|-------------|
| 🌗 Dark Mode / डार्क मोड | 1-click toggle persistent across light and dark backgrounds / डार्क व लाइट मोड टॉगल |
| 📱 Fully Responsive / पूर्ण रेस्पॉन्सिव | Tested for mobile, tablet, laptop, and ultra-wide desktop monitors / सभी स्क्रीनों के लिए अनुकूलित |
| 📷 Dynamic & Offline QR / डायनामिक QR | Online QR API + HTML5 Canvas offline fallback (zero broken QR codes) / ऑनलाइन API और ऑफ़लाइन कैनवस बैकअप |
| 🔍 Course Search & Filter / सर्च व फ़िल्टर | Real-time title/topic search + class category pill filters / त्वरित खोज और क्लास फ़िल्टर |
| 🎥 Video Tabs / वीडियो टैब | Live Streams, Popular Classes, Shorts with instant video preview / वीडियो श्रेणी और प्रीव्यू पॉपअप |
| 📋 Inquiry & WhatsApp / पूछताछ व व्हाट्सएप | Form with live 120-character counter + 1-click WhatsApp message / 120-वर्ण काउंटर व व्हाट्सएप प्रेषण |
| 🖼️ Zero Broken Images / सुरक्षित इमेज सिस्टम | High-res embedded vector SVG logo + studio canvas fallback portrait / कभी न टूटने वाला इमेज सिस्टम |

---

## 🛠️ Tech Stack / तकनीकी स्टैक

| Component / घटक | Technology / तकनीक |
|------------------|---------------------|
| Markup / मार्कअप | HTML5 (Semantic, Clean, Categorized) |
| Styling / स्टाइलिंग | Tailwind CSS (CDN) + `shared/styles.css` |
| JavaScript / जावास्क्रिप्ट | Vanilla ES6+ (`js/shared.js`, zero build dependencies) |
| Icons / आइकन | Font Awesome 6.5.1 |
| Fonts / फ़ॉन्ट | Google Fonts — Inter, Noto Sans Devanagari, Plus Jakarta Sans |
| QR Engine / QR इंजन | Dynamic QR Server API + HTML5 Canvas Fallback |
| Authentication / प्रमाणीकरण | Clerk JavaScript SDK (`js/clerk-config.js`) |

---

## 🚀 Getting Started / शुरू कैसे करें

### English
1. **Clone or navigate** to the project directory:
   ```bash
   cd d:\Desktop\CHANKYA
   ```
2. **Open any page** in your web browser:
   - To open the **Unified Portal**: open `index.html`
   - To open a **Specific Category**: open any file in `sections/` (e.g., `sections/courses.html`, `sections/telegram.html`, `sections/home.html`)
3. No build tools or package managers required — runs completely out of the box!

### हिन्दी
1. प्रोजेक्ट डायरेक्ट्री में जाएँ:
   ```bash
   cd d:\Desktop\CHANKYA
   ```
2. किसी भी फ़ाइल को अपने ब्राउज़र में खोलें:
   - **एकीकृत पोर्टल** के लिए: `index.html` खोलें
   - **विशिष्ट श्रेणी** के लिए: `sections/` में से कोई भी पेज खोलें (जैसे `sections/courses.html` या `sections/telegram.html`)
3. किसी बिल्ड टूल या पैकेज मैनेजर की आवश्यकता नहीं है — यह तुरंत काम करता है!

---

## 💻 Development & Preview / डेवलपमेंट और प्रीव्यू

You can preview the site using any local HTTP server:

```powershell
python -m http.server 8000 --directory d:\Desktop\CHANKYA
```

Then visit:
- **Unified Portal**: `http://localhost:8000/index.html`
- **Home**: `http://localhost:8000/sections/home.html`
- **Telegram QR**: `http://localhost:8000/sections/telegram.html`
- **Courses**: `http://localhost:8000/sections/courses.html`
- **Videos**: `http://localhost:8000/sections/videos.html`
- **Study Material**: `http://localhost:8000/sections/study-material.html`
- **Reviews**: `http://localhost:8000/sections/reviews.html`
- **Contact**: `http://localhost:8000/sections/contact.html`

### Clerk authentication / Clerk प्रमाणीकरण

The portal uses Clerk's browser SDK with the public publishable key in
`js/clerk-config.js`. The key is safe for frontend use; never place a Clerk
Secret Key in this repository. For local testing, use an HTTP server rather
than opening pages with a `file://` URL:

```powershell
python -m http.server 8000 --directory d:\Desktop\CHANKYA
```

Open `http://localhost:8000/index.html`, click **Sign In**, and use the
Clerk-hosted form. Configure email, phone, password, and social providers from
the Clerk Dashboard. Before production, add the deployed domain under Clerk
Dashboard → Configure → Domains.

For Indian phone sign-up, enable **Phone numbers** under Clerk Dashboard →
**User & Authentication** → **Contact information**, allow the **India (+91)**
country code, and make sure phone verification is enabled. The setting is
controlled by Clerk and cannot be changed by browser-side JavaScript. Users
should enter numbers in international format, for example `+91 98765 43210`.

### Resend email backend / Resend ईमेल बैकएंड

Email sending uses Vercel Functions in `api/` and never exposes the Resend API
key to the browser. Add these Vercel Environment Variables before deploying:

```text
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Lycemit Website <onboarding@resend.dev>
RESEND_TO_EMAIL=lycemit@gmail.com
CLERK_WEBHOOK_SIGNING_SECRET=whsec_...
LYCEMIT_SIGN_IN_URL=https://lycemit.com/
```

The contact form calls `/api/send-contact`. To send welcome emails after new
Clerk users sign up, create a Clerk Dashboard webhook for
`https://YOUR-VERCEL-DOMAIN/api/clerk-webhook`, subscribe to `user.created`,
and copy its signing secret into `CLERK_WEBHOOK_SIGNING_SECRET`. The webhook
sends the new user a welcome email containing `LYCEMIT_SIGN_IN_URL`; it does
not send or expose a password. Clerk remains responsible for the actual
sign-in and email/phone verification.

Without a verified Resend domain, `onboarding@resend.dev` is limited to the
Resend account's verified recipient for testing. Verify your own domain in
Resend before sending welcome emails to all students.

Never paste a Resend API key into chat, HTML, JavaScript, Git, or screenshots.
If a key is exposed, revoke it immediately in Resend under **API Keys**, create
a replacement, and add the replacement only as the Vercel
`RESEND_API_KEY` environment variable. Local `.env` files are ignored by Git.

---

## 📞 Contact / संपर्क

| Channel / चैनल | Details / विवरण |
|-----------------|-----------------|
| 📍 Campus / कैम्पस | [Chanakya Classes by Manmit Sir on Google Maps](https://www.google.co.in/maps/place/Chanakya+Classes+by+Manmit/@26.8077069,84.5053101,17z/data=!3m1!4b1!4m6!3m5!1s0x39936eb9a94eea1f:0x3baed790b1fb763a!8m2!3d26.8077069!4d84.507885!16s%2Fg%2F11b7jyxbnv?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D) (Supriya Cinema Rd, Bettiah) |
| ☎️ Phone Helpline | +91 79797 24568 · +91 72799 00093 · +91 94305 14561 |
| 📧 Email / ईमेल | lycemit@gmail.com · manmitbth@gmail.com |
| 📺 YouTube | [@Lycemit](https://www.youtube.com/@Lycemit) (9.61K Subs) |
| ✈️ Telegram | [@msmanmit](https://t.me/msmanmit) (2,413+ Subs) |
| 💬 WhatsApp | [WhatsApp Channel](https://whatsapp.com/channel/0029Va9UQRTFnSz2SzNlur0P) |
| 📸 Instagram | [@msmanmit](https://www.instagram.com/msmanmit) |
| 📱 Google Play | [Lycemit Android App on Play Store](https://play.google.com/store/search?q=lycemit&c=apps&hl=en-us) |
| 🌐 Website | [lycemit.com](https://lycemit.com/) |

---

## 📄 License / लाइसेंस

This project is licensed under the **MIT License** — see the [LICENSE](file:///d:/Desktop/CHANKYA/LICENSE) file for details.

---

<p align="center">
  <strong>© 2026–2027 Lycemit Online Education & Chanakya Classes (Bettiah)</strong><br>
  Led by Manmit Shrivastva (@msmanmit). All rights reserved.<br>
  मनमीत श्रीवास्तव (@msmanmit) द्वारा संचालित। सर्वाधिकार सुरक्षित।
</p>

---

## 🎬 8. Embedded Running Stories & Reels (लाइव रनिंग स्टोरीज़ और रील्स)

The website now embeds high-definition, interactive running video stories (Instagram / Shorts style) showcasing real campus celebrations and student triumphs:

| Story Title | Media File | Description | Features |
|:---|:---|:---|:---|
| **Mari Chooriyan 🌟** | `assets/stories/mari_chooriyan.mp4` (6.25 MB) | Vibrant cultural fest, celebrations, dance, laughter, and high-energy festival memories with Manmit Sir & students at Bettiah campus. | 720×1280 9:16 portrait video, autoplay in loop (muted for instant browser playback), 1-tap sound toggle, full-screen interactive story viewer. |
| **Stories We Celebrate 🏆** | `assets/stories/stories_we_celebrate.mp4` (10.44 MB) | Hall of Fame, student felicitations, board & competitive exam toppers, and the journey of perseverance. | 720×1280 9:16 portrait video, autoplay in loop, 1-tap sound toggle, view counter, next/previous story transitions. |

### Key Interactive Features of Stories:
- **Instagram-Style Stories Avatar Strip**: Top story avatars with animated rainbow-gradient rings (`.story-avatar-ring`) for 1-click preview.
- **Embedded Dual Running Reels**: Side-by-side portrait video cards running directly on `index.html`, `sections/videos.html`, and `sections/home.html`.
- **One-Tap Sound Controller**: Tap `[ 🔊 Sound ON ]` to listen; automatically mutes conflicting audio streams.
- **Interactive Story Viewer Modal (`#storyViewerModal`)**:
  - Segmented progress bars with real-time video playback sync.
  - Left / Right click or arrow keys to navigate between stories.
  - Spacebar to pause/resume playback.
  - Escape or (X) button to close.
  - Deep-linked "Get App" and "Join Next Batch" CTA buttons.

---

## 💎 9. HD Brand Logo & Slow Network Preloader (एचडी लोगो और स्लो नेटवर्क स्प्लैश स्क्रीन)

- **High-Definition Logos**:
  - `assets/logo-hd.png` (251 KB high-resolution crisp logo)
  - `assets/logo-transparent.png` (transparent background optimized for light & dark navbar)
  - `assets/favicon.png` (browser tab icon & bookmark icon)
- **Slow Network Preloader (`#sitePreloader`)**:
  - Displayed immediately upon page launch with a glowing HD logo pulse.
  - Automatically checks `navigator.connection` for slow 2G/3G connections or load times > 1.2s.
  - Informs the student: *"Slow network detected • Optimizing portal resources..."*
  - Provides a 1-tap *"Enter Portal Now →"* button so slow-network users never experience blocking or delay.
  - Smooth 250ms fade-out transition into the home portal once loaded.

---

## 📚 10. Official Fast Track Books & Concept Map Combo Kit (चाणक्य प्रिंटेड बुक्स व कॉम्बो किट)

The study material section now proudly showcases the official printed books combo authored and curated by **Manmit Shrivastva** and the faculty team of Chanakya Classes Bettiah:

| Module Name | Image Asset | Focus Areas | Highlights |
|:---|:---|:---|:---|
| **Full 4-in-1 Books Combo** | `assets/books/chanakya_books_combo_showcase.jpg` | Complete CBSE Class 10 Board Preparation | Full combo kit presented by faculty & students; interactive HD zoom modal; campus collection & online order links. |
| **Fast Track Science** | `assets/books/book_science_fast_track.jpg` | Physics, Chemistry, Biology | Chapter-wise high-yield theory, formula sheets, chemical reactions & 500+ board question sets. |
| **Fast Track Mathematics** | `assets/books/book_maths_fast_track.jpg` | Math Formula Bank & NCERT Exemplar | Stepwise proofs, theorems, solved board papers & speed calculation shortcuts. |
| **Fast Track Social Science** | `assets/books/book_sst_fast_track.jpg` | History, Civics, Geography, Economics | Key timelines, map pointing, pointwise structured answers for top board marks. |
| **Concept Map Combined** | `assets/books/book_concept_map_combined.jpg` | Concept Mastery! • All Subjects | Comprehensive visual mind maps, rapid 5-minute revision flowcharts & topper blueprints. |

### Availability & Access:
- **Offline Campus Collection**: Available directly at Chanakya Classes, Supriya Cinema Rd, Bettiah, Bihar 845438.
- **Home Delivery / Online Orders**: Orderable directly through the official [Lycemit Learning App](https://play.google.com/store/search?q=lycemit&c=apps&hl=en-us).
- **Interactive Lightbox Zoom**: Students can click on any book module to inspect high-definition cover and print quality in the modal viewer.

---

## 👨‍🏫 11. Manmit Sir Educator Portrait & Avatar Assets (मनमीत सर की आधिकारिक प्रोफाइल फोटो)

The authentic photograph of **Manmit Shrivastva** (@msmanmit) has been integrated across key touchpoints:

| Asset Name | File Path | Usage & Purpose |
|:---|:---|:---|
| **Full Portrait** | `assets/manmit_shrivastva.jpg` | High-res full original photograph; viewable in interactive modal zoom viewer. |
| **Studio Portrait** | `assets/manmit_shrivastva_portrait.png` / `image_305d01.png` | Studio card version with dark contrast backdrop for the main Educator Spotlight Banner. |
| **Circular Transparent PNG** | `assets/manmit_shrivastva_circle.png` | Smooth anti-aliased circular cutout with transparent background. |
| **Focused Headshot** | `assets/manmit_shrivastva_headshot.jpg` | Square crop focused on face and upper chest for profile previews. |
| **Avatar Icon** | `assets/manmit_avatar.png` | 160×160 compact circular avatar for Stories strip, Story Viewer modal, and Reel cards. |

### Integrated Locations:
1. **Educator Spotlight Hero Banner**: Featured prominently on `index.html` and `sections/home.html` with click-to-zoom support.
2. **Stories Strip (Story 2: "Manmit Sir 🏆")**: Circular animated gradient story avatar.
3. **Running Story Reel 2 ("Stories We Celebrate")**: Verified educator author badge.
4. **Story Viewer Modal Header**: Displays Manmit Sir's avatar when playing his featured story.

---

## 📰 12. Press & Media Recognition — Dainik Jagran Feature (दैनिक जागरण मीडिया प्रमाण)

The website now features the official print media publication recognizing **Chanakya Classes Bettiah** as the primary educational sponsor:

| Media Coverage | Asset File | Event Details | Key Recognition |
|:---|:---|:---|:---|
| **Dainik Jagran All India Kavi Sammelan 2023** | `assets/news/dainik_jagran_kavi_sammelan_chanakya.jpg` (247 KB) | Maharani Janki Kuer (MJK) College, Bettiah (29 May 2023) | **"Powered by: CHANAKYA CLASSES, BETTIAH (A CBSE Institute by Manmit Shrivastva)"** published in Dainik Jagran alongside Padma Shri Surendra Dubey, Shambhu Shikhar, Aman Akshar, and community dignitaries. |
| **Powered-by Clipping Badge** | `assets/news/chanakya_powered_by_clipping.jpg` (12 KB) | Institutional imprint | Verified address at Supriya Cinema Road, Bettiah, and official helplines (7279900093, 7979724568). |

### Integrated Touchpoints:
- **Offline Batches Bettiah Section** (`index.html` & `sections/home.html`): Displays full-width trust showcase with click-to-zoom HD lightbox.
- **Reviews & Public Trust Section** (`sections/reviews.html`): Authoritative media endorsement reinforcing parental confidence and institution authenticity.

---

## 🎬 13. Direct Home Visit Result Celebrations — Instagram Reels (रिजल्ट सेलिब्रेशन: टॉपर्स के घर जाकर जश्न)

The portal features live, active interactive previews of Manmit Sir personally visiting board toppers' homes in Bettiah and West Champaran:

| Reel Focus | Reel Link | Key Moments & Highlights |
|:---|:---|:---|
| **Home Visit Reel 1** | [`instagram.com/reel/DZpCeMzRXxh`](https://www.instagram.com/reel/DZpCeMzRXxh/) | Direct home visit celebrating board results with student and parents; emotional moments, congratulations & sweets distribution. |
| **Home Visit Reel 2** | [`instagram.com/reel/DYrrZCkRLPN`](https://www.instagram.com/reel/DYrrZCkRLPN/) | Personal doorstep topper felicitation by Manmit Shrivastva; family pride and heartfelt gratitude. |

### Technical Implementation:
- **Responsive 9:16 Reels Frame**: Embedded via clean Instagram embed player container with official `https://www.instagram.com/embed.js`.
- **Direct 1-Click Launch**: Direct deep-links to launch the reel directly in the Instagram app or browser.
- **Cross-Section Availability**: Integrated seamlessly on `index.html` (`#home-visit-celebrations`), `sections/videos.html`, `sections/home.html`, and `sections/reviews.html`.

---

## 🏆 14. Dainik Jagran Front Page: CBSE Board Toppers (96.4% Top Rankers)

The website features the official front-page declaration from **Dainik Jagran** (8 September 2023) congratulating Chanakya Classes' CBSE board toppers under Manmit Shrivastva:

| Topper Student | Board Score / Percentage | Subject Mastery & Highlights |
|:---|:---|:---|
| **Srishti Kumari** | **482 / 500 (96.4%)** | 🥇 State & District Top Ranker |
| **Samridhi Kumari** | **481 / 500 (96.2%)** | 🥈 Academic Excellence Awardee |
| **Pulkit Kaushal** | **473 / 500 (94.6%)** | 🥉 High-Scoring Science & Math |
| **Dipyans Kumar** | **472 / 500 (94.4%)** | ⭐ Fast Track CBSE Achiever |
| **Asfa Mariam** | **471 / 500 (94.2%)** | ⭐ Board Distinction |
| **Khushi Kumari** | **471 / 500 (94.2%)** | ⭐ Board Distinction |
| **200+ Students** | **90%+ Marks** | Overall 90%+ Selection Record in CBSE Board Exams |

### Strategic Placement ("Used Wisely"):
- Paired side-by-side with the All India Kavi Sammelan clipping as a unified **Dainik Jagran Press Proof Showcase**.
- Connected narrative: Newspaper Toppers List ➔ Direct Home Visit Reels (Manmit Sir visiting toppers' families) ➔ Running Campus Celebrations.
- Interactive HD Lightbox modal allows full-detail reading of all 17+ photographed toppers and their exact marks.
