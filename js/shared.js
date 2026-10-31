// Official Google Maps Location for Chanakya Classes by Manmit Sir
const CHANAKYA_GOOGLE_MAPS_URL = 'https://www.google.co.in/maps/place/Chanakya+Classes+by+Manmit/@26.8077069,84.5053101,17z/data=!3m1!4b1!4m6!3m5!1s0x39936eb9a94eea1f:0x3baed790b1fb763a!8m2!3d26.8077069!4d84.507885!16s%2Fg%2F11b7jyxbnv?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D';

// Official Google Play Store Link for Lycemit Android App
const LYCEMIT_PLAYSTORE_URL = 'https://play.google.com/store/search?q=lycemit&c=apps&hl=en-us';

// =========================================================================
        // 1. OFFICIAL TELEGRAM & WHATSAPP QR SCANNER DATA
        // =========================================================================
        const telegramChannels = {
            msmanmit: {
                key: 'msmanmit',
                handle: '@msmanmit',
                title: 'Lycemit • Chanakya Classes, Bettiah',
                badge: '2,413+ Subscribers • Main Channel',
                desc: 'Official broadcast channel for daily free live classes, NCERT/Board PDF notes, test schedules, and announcements by Manmit Shrivastva.',
                webUrl: 'https://t.me/msmanmit',
                appUrl: 'tg://resolve?domain=msmanmit',
                previewUrl: 'https://t.me/s/msmanmit',
                accent: '#229ED9',
                icon: 'fa-brands fa-telegram'
            },
            msmanmit2003: {
                key: 'msmanmit2003',
                handle: '@msmanmit2003',
                title: 'MS-Manmit (Direct Student Support)',
                badge: 'Direct Message • 1-on-1 Doubt Help',
                desc: 'Have a question about an online course, batch timing, or academic doubt? Scan to send a direct message to MS-Manmit on Telegram.',
                webUrl: 'https://t.me/msmanmit2003',
                appUrl: 'tg://resolve?domain=msmanmit2003',
                previewUrl: 'https://t.me/msmanmit2003',
                accent: '#0088cc',
                icon: 'fa-solid fa-comment-dots'
            },
            mslinks2021: {
                key: 'mslinks2021',
                handle: '@mslinks2021',
                title: 'All Official Links Hub (@mslinks2021)',
                badge: 'Central Directory • All Channels',
                desc: 'One-stop Telegram directory containing all official Lycemit & Chanakya Classes Bettiah links, playlists, and batch forms.',
                webUrl: 'https://t.me/mslinks2021',
                appUrl: 'tg://resolve?domain=mslinks2021',
                previewUrl: 'https://t.me/s/mslinks2021',
                accent: '#6366f1',
                icon: 'fa-solid fa-sitemap'
            },
            whatsapp: {
                key: 'whatsapp',
                handle: 'WhatsApp Channel',
                title: 'Lycemit & Chanakya Classes WhatsApp',
                badge: 'Official WhatsApp Updates',
                desc: 'Scan with your camera or WhatsApp scanner to follow our official WhatsApp Channel for instant exam alerts and class links.',
                webUrl: 'https://whatsapp.com/channel/0029Va9UQRTFnSz2SzNlur0P',
                appUrl: 'https://whatsapp.com/channel/0029Va9UQRTFnSz2SzNlur0P',
                previewUrl: 'https://whatsapp.com/channel/0029Va9UQRTFnSz2SzNlur0P',
                accent: '#10b981',
                icon: 'fa-brands fa-whatsapp'
            }
        };

        function getQrApiUrl(url, size = 260) {
            return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=10&color=0f172a&bgcolor=ffffff&data=${encodeURIComponent(url)}`;
        }

        // Pure-JS Canvas Fallback if offline or QR API is blocked
        function generateFallbackQrDataUrl(text) {
            const canvas = document.createElement('canvas');
            canvas.width = 520;
            canvas.height = 520;
            const ctx = canvas.getContext('2d');

            // White background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 520, 520);

            // Deterministic pseudo-QR grid based on text
            const cells = 44;
            const cellSize = 11;
            const offset = 35;
            ctx.fillStyle = '#0f172a';

            function drawFinder(r, c) {
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(offset + c * cellSize, offset + r * cellSize, 7 * cellSize, 7 * cellSize);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(offset + (c + 1) * cellSize, offset + (r + 1) * cellSize, 5 * cellSize, 5 * cellSize);
                ctx.fillStyle = '#229ED9';
                ctx.fillRect(offset + (c + 2) * cellSize, offset + (r + 2) * cellSize, 3 * cellSize, 3 * cellSize);
            }

            drawFinder(0, 0);
            drawFinder(0, cells - 7);
            drawFinder(cells - 7, 0);

            let hash = 0;
            for (let i = 0; i < text.length; i++) {
                hash = ((hash << 5) - hash) + text.charCodeAt(i);
                hash |= 0;
            }

            ctx.fillStyle = '#0f172a';
            for (let r = 0; r < cells; r++) {
                for (let c = 0; c < cells; c++) {
                    const inTopLeft = r < 8 && c < 8;
                    const inTopRight = r < 8 && c >= cells - 8;
                    const inBottomLeft = r >= cells - 8 && c < 8;
                    if (inTopLeft || inTopRight || inBottomLeft) continue;
                    const bit = Math.abs((hash + r * 31 + c * 17) % 3);
                    if (bit === 0) {
                        ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize - 1, cellSize - 1);
                    }
                }
            }

            return canvas.toDataURL('image/png');
        }

        function handleQrImageError(imgEl, url) {
            imgEl.onerror = null;
            imgEl.src = generateFallbackQrDataUrl(url);
        }

        // Render Dedicated Scanner Hub Section
        function switchScannerHubTab(mode) {
            ['all3', 'msmanmit', 'msmanmit2003', 'mslinks2021', 'whatsapp'].forEach(key => {
                const btn = document.getElementById('hub-tab-' + key);
                if (!btn) return;
                if (key === mode) {
                    btn.className = 'scanner-hub-tab px-3.5 py-2 rounded-xl text-xs font-extrabold bg-[#229ED9] text-white shadow-sm transition';
                } else {
                    btn.className = 'scanner-hub-tab px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition';
                }
            });

            const container = document.getElementById('scannerHubContainer');
            const keysToRender = mode === 'all3'
                ? ['msmanmit', 'msmanmit2003', 'mslinks2021']
                : [mode];

            container.className = mode === 'all3'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch'
                : 'max-w-xl mx-auto';

            container.innerHTML = keysToRender.map(k => {
                const item = telegramChannels[k];
                const qrUrl = getQrApiUrl(item.webUrl, 260);
                return `
                    <div class="h-full rounded-3xl bg-white dark:bg-slate-900 border-2 border-sky-500/30 dark:border-sky-500/30 p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-[#229ED9] transition">
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-4">
                                <span class="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#229ED9]/15 text-[#0088cc] dark:text-sky-300 whitespace-nowrap">
                                    ${item.badge}
                                </span>
                                <span class="font-mono text-xs font-extrabold px-2.5 py-1 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 whitespace-nowrap">
                                    ${item.handle}
                                </span>
                            </div>

                            <!-- Scannable QR Frame with Embedded Center "lm" Badge -->
                            <div onclick="openTelegramScannerModal('${item.key}')" class="relative mx-auto my-2 w-56 h-56 bg-white p-3.5 rounded-3xl shadow-md border-2 border-[#229ED9]/40 flex items-center justify-center cursor-pointer group">
                                <div class="qr-corner top-2 left-2 border-t-4 border-l-4 rounded-tl-lg"></div>
                                <div class="qr-corner top-2 right-2 border-t-4 border-r-4 rounded-tr-lg"></div>
                                <div class="qr-corner bottom-2 left-2 border-b-4 border-l-4 rounded-bl-lg"></div>
                                <div class="qr-corner bottom-2 right-2 border-b-4 border-r-4 rounded-br-lg"></div>
                                <div class="scanner-laser"></div>

                                <img
                                    src="${qrUrl}"
                                    alt="Scan to join ${item.handle}"
                                    onerror="handleQrImageError(this, '${item.webUrl}')"
                                    class="w-44 h-44 object-contain rounded-xl group-hover:scale-105 transition"
                                >
                                <div class="absolute w-9 h-9 rounded-xl bg-white p-0.5 shadow-md border border-slate-200 flex items-center justify-center pointer-events-none">
                                    <svg viewBox="20 25 210 205" class="w-8 h-8">
                                        <use href="#lycemitLogoGraphic"></use>
                                    </svg>
                                </div>
                            </div>

                            <div class="text-center mt-4">
                                <h3 class="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                                    ${item.title}
                                </h3>
                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                                    ${item.desc}
                                </p>
                            </div>
                        </div>

                        <div class="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-2.5">
                            <div class="grid grid-cols-2 gap-2">
                                <a href="${item.webUrl}" target="_blank" rel="noopener noreferrer" class="h-10 px-3 rounded-xl font-bold text-xs bg-[#229ED9] hover:bg-[#0088cc] text-white text-center inline-flex items-center justify-center gap-1.5 shadow-sm transition whitespace-nowrap">
                                    <i class="${item.icon}"></i> <span>Join Channel</span>
                                </a>
                                <a href="${item.appUrl}" class="h-10 px-3 rounded-xl font-bold text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 text-center inline-flex items-center justify-center gap-1.5 transition whitespace-nowrap">
                                    <i class="fa-solid fa-bolt"></i> <span>Open App</span>
                                </a>
                            </div>
                            <div class="flex items-center justify-between gap-2 text-xs">
                                <button onclick="copyToClipboard('${item.webUrl}', '${item.handle} link copied!')" class="flex-1 h-9 px-3 rounded-xl font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
                                    <i class="fa-regular fa-copy"></i> <span>Copy Link</span>
                                </button>
                                <button onclick="downloadQrPoster('${item.key}')" class="flex-1 h-9 px-3 rounded-xl font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
                                    <i class="fa-solid fa-download"></i> <span>Save QR PNG</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Open & Update Fullscreen Telegram Scanner Modal
        function openTelegramScannerModal(channelKey = 'msmanmit') {
            updateModalScanner(channelKey);
            document.getElementById('telegramScannerModal').classList.remove('hidden');
        }

        function updateModalScanner(channelKey) {
            const item = telegramChannels[channelKey] || telegramChannels.msmanmit;

            ['msmanmit', 'msmanmit2003', 'mslinks2021', 'whatsapp'].forEach(k => {
                const btn = document.getElementById('modal-tab-' + k);
                if (!btn) return;
                if (k === item.key) {
                    btn.className = 'py-2 px-2 rounded-xl text-xs font-extrabold bg-[#229ED9] text-white shadow-sm transition';
                } else {
                    btn.className = 'py-2 px-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white/50 transition';
                }
            });

            document.getElementById('modalQrSubsBadge').textContent = item.badge;
            document.getElementById('modalQrHandleBadge').textContent = item.handle;
            document.getElementById('modalQrTitle').textContent = item.title;
            document.getElementById('modalQrDesc').textContent = item.desc;

            const qrImg = document.getElementById('modalQrImage');
            qrImg.src = getQrApiUrl(item.webUrl, 260);
            qrImg.onerror = function () {
                handleQrImageError(qrImg, item.webUrl);
            };

            document.getElementById('modalQrWebLink').href = item.webUrl;
            document.getElementById('modalQrAppLink').href = item.appUrl;
            document.getElementById('modalPreviewBtn').href = item.previewUrl;

            document.getElementById('modalCopyBtn').onclick = function () {
                copyToClipboard(item.webUrl, `${item.handle} link copied to clipboard!`);
            };
            document.getElementById('modalDownloadPosterBtn').onclick = function () {
                downloadQrPoster(item.key);
            };
        }

        // Download Printable High-Res QR Poster Card via HTML5 Canvas
        function downloadQrPoster(channelKey = 'msmanmit') {
            const item = telegramChannels[channelKey] || telegramChannels.msmanmit;
            showToast(`Generating printable QR card for ${item.handle}...`);

            const canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 760;
            const ctx = canvas.getContext('2d');

            // Background Gradient
            const grad = ctx.createLinearGradient(0, 0, 600, 760);
            grad.addColorStop(0, '#0f172a');
            grad.addColorStop(0.5, '#1e3a8a');
            grad.addColorStop(1, '#0f172a');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 600, 760);

            // Top Accent Header
            ctx.fillStyle = '#229ED9';
            ctx.fillRect(0, 0, 600, 14);

            // Title Text
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 28px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('LYCEMIT | CHANAKYA CLASSES', 300, 65);

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.fillText('By Manmit Shrivastva (@msmanmit) • Bettiah, Bihar', 300, 95);

            // White QR Card Box
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.roundRect(110, 130, 380, 380, 28);
            ctx.fill();

            const finalizeDownload = (drawSource) => {
                ctx.drawImage(drawSource, 140, 160, 320, 320);

                // Handle Pill
                ctx.fillStyle = '#229ED9';
                ctx.beginPath();
                ctx.roundRect(170, 535, 260, 46, 23);
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 20px monospace';
                ctx.fillText(`SCAN: ${item.handle}`, 300, 565);

                // Channel Subtitle & Footer Info
                ctx.fillStyle = '#f8fafc';
                ctx.font = 'bold 20px Inter, sans-serif';
                ctx.fillText(item.title, 300, 620);

                ctx.fillStyle = '#cbd5e1';
                ctx.font = '15px Inter, sans-serif';
                ctx.fillText(item.webUrl, 300, 650);

                ctx.fillStyle = '#fbbf24';
                ctx.font = 'bold 14px Inter, sans-serif';
                ctx.fillText('Supriya Cinema Rd, Bettiah • Helpline: +91 79797 24568', 300, 710);

                try {
                    const link = document.createElement('a');
                    link.download = `Lycemit-Chanakya-Telegram-QR-${item.key}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    showToast(`Downloaded ${item.handle} QR Poster!`);
                } catch (e) {
                    showToast('QR Ready! Right-click the QR image to save.');
                }
            };

            const qrImg = new Image();
            qrImg.crossOrigin = 'anonymous';
            qrImg.onload = function () {
                finalizeDownload(qrImg);
            };
            qrImg.onerror = function () {
                const fallbackImg = new Image();
                fallbackImg.onload = function () {
                    finalizeDownload(fallbackImg);
                };
                fallbackImg.src = generateFallbackQrDataUrl(item.webUrl);
            };
            qrImg.src = getQrApiUrl(item.webUrl, 320);
        }

        // =========================================================================
        // 2. COURSES DATA (Accurate 2026-27 Session Courses + All Class Filters)
        // =========================================================================
        const coursesData = [
            // ==========================================
            // CHANAKYA CLASSES OFFLINE BATCHES (BETTIAH)
            // ==========================================
            {
                id: 'off-c10',
                mode: 'offline',
                title: 'Class 10th CBSE Board Toppers Batch 🏆',
                subtitle: 'CHANAKYA CLASSES OFFLINE CLASSROOM • SESSION 2026–27',
                hindiTag: '📍 बेतिया ऑफलाइन कैंपस — 96.4% CBSE Toppers वाला प्रतिष्ठित क्लासरूम बैच',
                description: 'Face-to-face classroom coaching by Manmit Shrivastva at Supriya Cinema Road, Bettiah. Full conceptual coverage of Science, Mathematics, SST & Sanskrit with board-standard answer writing, Sunday OMR mock tests, printed book combos, and disciplined daily mentoring.',
                badge: 'OFFLINE BATCH',
                price: 'Admissions Open',
                originalPrice: 'Limited Seats',
                discount: 'Bettiah Campus',
                timing: 'Morning: 6:30 AM – 8:30 AM | Evening: 4:30 PM – 6:30 PM',
                campus: 'Supriya Cinema Road, Bettiah, Bihar',
                categories: ['all', 'offline', 'class10'],
                features: [
                    'Direct Classroom Teaching by Manmit Sir & Expert Faculty Team',
                    'Physical Printed Fast Track Books & Concept Map Mastery Sets',
                    'Weekly Sunday OMR Mock Tests with Detailed Error Analysis',
                    'Personal 1-on-1 Doubt Desk & Regular Parent Progress Meetings',
                    'Free Complete Access to Lycemit App Recorded Lectures & Revision'
                ]
            },
            {
                id: 'off-c9',
                mode: 'offline',
                title: 'Class 09th : Pre-Board & Olympiad Batch 📚',
                subtitle: 'CHANAKYA CLASSES OFFLINE CLASSROOM • SESSION 2026–27',
                hindiTag: '📍 मजबूत कॉन्सेप्ट, 10th Board और Olympiad की सर्वश्रेष्ठ आधारशिला!',
                description: 'Build an unbeatable foundation in Physics, Chemistry, Biology and Mathematics. Special emphasis on numerical problem-solving, science practical demonstrations, and analytical thinking for school exams, NTSE and Junior Olympiads.',
                badge: 'OFFLINE BATCH',
                price: 'Admissions Open',
                originalPrice: 'Limited Seats',
                discount: 'Session 2026–27',
                timing: 'Daily Evening: 5:00 PM – 7:00 PM',
                campus: 'Supriya Cinema Road, Bettiah, Bihar',
                categories: ['all', 'offline', 'class9'],
                features: [
                    'In-depth NCERT Line-by-Line Teaching + Advanced Problem Sets',
                    'Physics & Chemistry Formula Derivations & Lab Concept Demonstrations',
                    'Chapter-wise Daily Practice Problems (DPP) Handouts',
                    'Monthly Scholarship Test & Performance Recognition Awards'
                ]
            },
            {
                id: 'off-c11-12',
                mode: 'offline',
                title: 'Class 11th & 12th Science + NEET / JEE 🔬',
                subtitle: 'SENIOR SECONDARY MEDICAL & NON-MEDICAL OFFLINE BATCH',
                hindiTag: '📍 भौतिकी, रसायन, जीवविज्ञान एवं गणित — उच्चस्तरीय बोर्ड एवं प्रवेश परीक्षा तैयारी',
                description: 'Comprehensive 2-year classroom program covering CBSE and Bihar Board Class 11th & 12th with parallel preparation for NEET and JEE Main. Structured doubt clearing sessions, test series, and personalized mentor support.',
                badge: 'OFFLINE BATCH',
                price: 'Admissions Open',
                originalPrice: 'Limited Seats',
                discount: 'Bettiah Campus',
                timing: 'Morning: 6:30 AM – 9:00 AM | Afternoon: 3:00 PM – 5:30 PM',
                campus: 'Supriya Cinema Road, Bettiah, Bihar',
                categories: ['all', 'offline', 'class11_12'],
                features: [
                    'Dedicated 11th & 12th Biology (NEET Special) by Manmit Sir',
                    'Targeted NEET & JEE Main Question Bank & 15-Yr PYQ Discussions',
                    'Individual Doubt Resolution Counters after Class Hours',
                    'Separate Boys\' Hostel Accommodation with Supervised Evening Study'
                ]
            },
            {
                id: 'off-c7-8',
                mode: 'offline',
                title: 'Class 07th & 08th : Diksha Junior Foundation 🌱',
                subtitle: 'MIDDLE SCHOOL EXCELLENCE & SCHOLARSHIP BATCH',
                hindiTag: '📍 बचपन से ही कॉन्सेप्ट क्लियर — स्कूल टॉपर और ओलंपियाड विजेता बनने की राह',
                description: 'Nurture scientific curiosity and mathematical speed from an early age. Covering Science, Mathematics, English Grammar and mental ability with fun experiments and interactive classroom sessions.',
                badge: 'OFFLINE BATCH',
                price: 'Admissions Open',
                originalPrice: 'Limited Seats',
                discount: 'Foundation Special',
                timing: 'Daily Evening: 3:30 PM – 5:00 PM',
                campus: 'Supriya Cinema Road, Bettiah, Bihar',
                categories: ['all', 'offline', 'class8', 'class6'],
                features: [
                    'Crystal-clear basic mathematical concepts and mental arithmetic',
                    'Science phenomena explained with real-life demonstrations',
                    'Regular evaluation tests, homework checking and student counseling',
                    'Warm, disciplined and encouraging learning atmosphere'
                ]
            },
            {
                id: 'off-hostel',
                mode: 'offline',
                title: 'Chanakya Residential Hostel Program 🏠',
                subtitle: 'HOSTEL + COACHING INTEGRATED BATCH FOR OUTSTATION STUDENTS',
                hindiTag: '📍 बाहरी छात्रों के लिए सुरक्षित छात्रावास, पौष्टिक भोजन एवं 24x7 अध्ययन व्यवस्था',
                description: 'Special residential coaching facility for students travelling from Bagaha, Narkatiaganj, Motihari, Gopalganj, and rural West Champaran. Includes comfortable living, disciplined self-study hours under faculty supervision, healthy mess food, and direct access to classrooms.',
                badge: 'RESIDENTIAL',
                price: 'Admissions Open',
                originalPrice: 'Limited Rooms',
                discount: 'Hostel Facility',
                timing: '24x7 Structured Routine with Supervised Evening Study',
                campus: 'Near Chanakya Classes, Supriya Cinema Road, Bettiah',
                categories: ['all', 'offline', 'hostel'],
                features: [
                    'Secure and peaceful boys\' hostel near the coaching campus',
                    'Daily 3-hour compulsory silent self-study supervised by teachers',
                    'Hygienic home-style vegetarian mess providing fresh meals',
                    'Direct personal mentorship and moral guidance by Manmit Sir'
                ]
            },

            // ==========================================
            // LYCEMIT ONLINE APP COURSES (PAN-INDIA)
            // ==========================================
            {
                id: 'c1',
                mode: 'online',
                title: 'CLASS 10 : FAST TRACK 🚀',
                subtitle: 'CLASS 10 CBSE FAST TRACK COURSE • SESSION : 2026–27',
                hindiTag: '🎯 CBSE EXAM 2027 | LYCEMIT — कम समय में शानदार तैयारी, अब Board Exam की बारी!',
                description: 'Are you preparing for the CBSE Class 10 Board Examination 2027? Revise your complete syllabus, strengthen important concepts, practise board-level questions, and improve your overall score with Manmit Sir.',
                badge: 'ONLINE APP',
                price: '₹99',
                originalPrice: '₹999',
                discount: '91% off',
                categories: ['all', 'online', 'class10'],
                features: [
                    'Complete Class 10 Science & Maths Fast Track Syllabus Revision',
                    'High-Weightage CBSE 2027 Board Questions & Sample Papers',
                    'Live Doubt Solving + Recorded HD Lectures on Lycemit App',
                    'Chapter-Wise PDF Revision Notes & Formula Sheets'
                ]
            },
            {
                id: 'c2',
                mode: 'online',
                title: 'Class 06th : Diksha Complete Course',
                subtitle: 'CLASS 6 – COMPLETE LEARNING (Science | Mathematics | English)',
                hindiTag: 'Academic Session 2026–27 | NCERT-Based Curriculum • Build Strong Concepts.',
                description: 'Our Class 6 Complete Learning Course is specially designed to help students develop strong academic foundations in Science, Mathematics, and English through concept-based learning, engaging video lessons, structured study materials, and regular practice.',
                badge: 'ONLINE APP',
                price: '₹99',
                originalPrice: '₹1,999',
                discount: '96% off',
                categories: ['all', 'online', 'class6', 'class8'],
                features: [
                    'All-in-One Science, Mathematics & English NCERT Coverage',
                    'Concept-Based Animated & Practical Video Lessons',
                    'Structured Printable Workbooks & Chapter Quizzes',
                    'Ideal Foundation for Olympiads & School Toppers'
                ]
            },
            {
                id: 'c3',
                mode: 'online',
                title: '10th - Basics of Chemistry 🧪',
                subtitle: 'BASICS OF CHEMISTRY – COURSE INTRODUCTION',
                hindiTag: 'Master Formulas, Valency, Equations & Everyday Chemistry!',
                description: 'Chemistry is not just about formulas, equations, or memorizing reactions. It is the science that explains everything around us—the air we breathe, the food we eat, the medicines that heal us, and the fuels that power our world. Build your base before mastering advanced reactions!',
                badge: 'ONLINE APP',
                price: '₹9',
                originalPrice: '₹299',
                discount: '97% off',
                categories: ['all', 'online', 'class10', 'class9', 'chapterwise'],
                features: [
                    'Atoms, Elements, Radicals & Chemical Formula Making',
                    'Step-by-Step Balancing of Chemical Equations',
                    'Oxidation, Reduction & Redox Reaction Fundamentals',
                    'Unbeatable ₹9 Pocket Course for Every Student'
                ]
            },
            {
                id: 'c4',
                mode: 'online',
                title: 'Class 09th : Foundation Booster',
                subtitle: 'CBSE & BIHAR BOARD CLASS 9 SCIENCE & MATHS (2026–27)',
                hindiTag: 'Strong Base for Class 10 Boards, NTSE & Junior Science Olympiad',
                description: 'Master Motion, Force & Laws of Motion, Gravitation, Matter Around Us, Cell Biology, and Class 9 Mathematics with live interactive problem-solving sessions.',
                badge: 'POPULAR',
                price: '₹99',
                originalPrice: '₹1,499',
                discount: '93% off',
                categories: ['all', 'online', 'class9'],
                features: [
                    'Physics, Chemistry, Biology & Mathematics Complete Syllabus',
                    'Numerical Problem-Solving Tricks by Manmit Shrivastva',
                    'Regular Chapter-Wise Objective & Subjective Tests',
                    'Doubt Support via Telegram & Offline Bettiah Counter'
                ]
            },
            {
                id: 'c5',
                mode: 'online',
                title: 'Class 08th : Concept Master Batch',
                subtitle: 'SCIENCE, MATHS & ENGLISH GRAMMAR (PHRASES & EQUATIONS)',
                hindiTag: 'Includes Keeping Time with the Sky, Force & Pressure, Linear Equations',
                description: 'Comprehensive NCERT-aligned learning program for Class 8 students with detailed problem solving and doubt clearing.',
                badge: 'BESTSELLER',
                price: '₹99',
                originalPrice: '₹1,299',
                discount: '92% off',
                categories: ['all', 'online', 'class8'],
                features: [
                    'Complete NCERT Syllabus Video Lectures',
                    'Formula Sheets & Concept Mind Maps',
                    'Weekly Tests with Detailed Solutions',
                    'Foundation for NTSE & Olympiad Exams'
                ]
            },
            {
                id: 'c6',
                mode: 'online',
                title: 'Full CBSE Test Series + Material Combo',
                subtitle: 'CLASSES 7TH TO 10TH CHAPTER-WISE + FULL SYLLABUS MOCK TESTS',
                hindiTag: 'Real Exam Pattern • Instant Solution Explanations & Rankings',
                description: 'All-inclusive test preparation package featuring topic-wise tests, half-yearly mocks, and pre-board mock examinations crafted by top board mentors.',
                badge: 'COMBO',
                price: '₹199',
                originalPrice: '₹2,499',
                discount: '92% off',
                categories: ['all', 'online', 'class10', 'class9', 'class8', 'chapterwise'],
                features: [
                    '60+ Objective & Subjective Chapter Tests with Answers',
                    '5 Full-Syllabus Board Mock Papers with Marking Scheme',
                    'Detailed Performance Analysis & Topic Improvement Tips',
                    'Direct Telegram Group Access for Academic Doubts'
                ]
            }
        ];

        let activeCourseFilter = 'all';

        // Render Courses & Offline Batches
        function renderCourses(filterKey = 'all', searchQuery = '') {
            const grid = document.getElementById('coursesGrid');
            if (!grid) return;
            const normalizedSearch = searchQuery.trim().toLowerCase();

            const filtered = coursesData.filter(course => {
                const matchesCategory = filterKey === 'all' || (course.categories && course.categories.includes(filterKey));
                const matchesSearch = !normalizedSearch ||
                    course.title.toLowerCase().includes(normalizedSearch) ||
                    course.subtitle.toLowerCase().includes(normalizedSearch) ||
                    course.description.toLowerCase().includes(normalizedSearch) ||
                    (course.campus && course.campus.toLowerCase().includes(normalizedSearch)) ||
                    (course.timing && course.timing.toLowerCase().includes(normalizedSearch));
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/50 text-center space-y-3">
                        <p class="font-bold text-lg text-slate-800 dark:text-slate-200">No matching batches or courses found</p>
                        <button onclick="resetCourseFilters()" class="px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white">Show All Batches &amp; Courses</button>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(course => {
                const isOffline = course.mode === 'offline';

                if (isOffline) {
                    return `
                    <div class="h-full rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-500/30 hover:border-amber-500/60 p-6 sm:p-7 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition duration-300 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 bg-amber-500 text-slate-950 font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow-sm">
                            <i class="fa-solid fa-location-dot mr-1"></i> Bettiah Offline
                        </div>

                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 whitespace-nowrap">
                                    <i class="fa-solid fa-school mr-1"></i> ${course.badge}
                                </span>
                                <span class="px-2 py-0.5 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open
                                </span>
                            </div>

                            <h3 class="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-snug">
                                ${course.title}
                            </h3>
                            <p class="text-xs font-bold text-amber-700 dark:text-amber-400 mt-1 flex items-center gap-1.5">
                                <i class="fa-solid fa-clock text-[11px]"></i> ${course.timing}
                            </p>
                            <p class="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-3 py-2 rounded-xl mt-3 border border-slate-200/60 dark:border-slate-700/60">
                                ${course.hindiTag}
                            </p>
                            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                                ${course.description}
                            </p>
                            
                            <ul class="mt-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                                ${course.features.slice(0, 3).map(f => `
                                    <li class="flex items-center gap-2">
                                        <i class="fa-solid fa-circle-check text-amber-500 text-[11px]"></i>
                                        <span>${f}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <div class="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                            <div>
                                <span class="text-[11px] text-slate-400 block font-medium">Bettiah Campus Seat</span>
                                <span class="font-display font-extrabold text-lg text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    ${course.price}
                                </span>
                            </div>

                            <div class="flex items-center gap-2">
                                <button onclick="openCourseModal('${course.id}')" class="h-10 px-3.5 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 transition">
                                    Details
                                </button>
                                <button onclick="prefillInquiry('${course.title.replace(/'/g, "\\'")}')" class="h-10 px-4 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-md flex items-center gap-1.5">
                                    <i class="fa-solid fa-school"></i> Book Seat
                                </button>
                            </div>
                        </div>
                    </div>
                    `;
                }

                return `
                <div class="h-full rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-4">
                            <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-600 text-white shadow-sm whitespace-nowrap">
                                <i class="fa-solid fa-mobile-screen mr-1"></i> ${course.badge}
                            </span>
                            <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
                                ${course.discount}
                            </span>
                        </div>

                        <h3 class="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                            ${course.title}
                        </h3>
                        <p class="text-xs font-bold text-brand-600 dark:text-brand-400 mt-1">
                            ${course.subtitle}
                        </p>
                        <p class="text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-500/10 px-3 py-2 rounded-xl mt-3">
                            ${course.hindiTag}
                        </p>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                            ${course.description}
                        </p>
                    </div>

                    <div class="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-700/70 flex items-center justify-between gap-4">
                        <div>
                            <span class="text-[11px] text-slate-400 block">Online App Offer</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">${course.price}</span>
                                <span class="text-xs sm:text-sm text-slate-400 line-through">${course.originalPrice}</span>
                            </div>
                        </div>

                        <button onclick="openCourseModal('${course.id}')" class="h-11 px-5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-600 dark:hover:bg-brand-400 hover:text-white transition shadow-sm inline-flex items-center justify-center whitespace-nowrap">
                            View Details
                        </button>
                    </div>
                </div>
                `;
            }).join('');
        }

        function filterCourses(category) {
            activeCourseFilter = category;
            document.querySelectorAll('.course-filter-btn').forEach(btn => {
                if (btn.getAttribute('data-filter') === category) {
                    btn.className = 'course-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-brand-600 text-white shadow-sm whitespace-nowrap transition';
                } else {
                    btn.className = 'course-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 whitespace-nowrap transition';
                }
            });
            const queryEl = document.getElementById('courseSearchInput');
            const query = queryEl ? queryEl.value : '';
            renderCourses(activeCourseFilter, query);
        }

        function filterCoursesBySearch() {
            const queryEl = document.getElementById('courseSearchInput');
            const query = queryEl ? queryEl.value : '';
            renderCourses(activeCourseFilter, query);
        }

        function resetCourseFilters() {
            const queryEl = document.getElementById('courseSearchInput');
            if (queryEl) queryEl.value = '';
            filterCourses('all');
        }

        // Open Course / Offline Batch Modal
        function openCourseModal(courseId) {
            const course = coursesData.find(c => c.id === courseId);
            if (!course) return;
            const isOffline = course.mode === 'offline';

            const badgeEl = document.getElementById('modalCourseBadge');
            if (badgeEl) {
                badgeEl.textContent = isOffline
                    ? `🏫 CHANAKYA OFFLINE BATCH • BETTIAH CAMPUS`
                    : `${course.badge} • ${course.discount}`;
                badgeEl.className = isOffline
                    ? 'px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 shadow-sm'
                    : 'px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300';
            }

            document.getElementById('modalCourseTitle').textContent = course.title;
            document.getElementById('modalCourseTagline').textContent = isOffline
                ? `⏰ ${course.timing} | 📍 ${course.campus}`
                : course.hindiTag;
            document.getElementById('modalCourseDesc').textContent = course.description;
            document.getElementById('modalCoursePrice').textContent = course.price;
            document.getElementById('modalCourseOriginal').textContent = course.originalPrice;
            document.getElementById('modalCourseDiscount').textContent = course.discount;

            const featuresList = document.getElementById('modalCourseFeatures');
            featuresList.innerHTML = course.features.map(f => `
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check ${isOffline ? 'text-amber-500' : 'text-emerald-500'}"></i>
                    <span>${f}</span>
                </li>
            `).join('');

            const enrollBtn = document.getElementById('modalEnrollWhatsAppBtn');
            if (enrollBtn) {
                enrollBtn.innerHTML = isOffline
                    ? '<i class="fa-solid fa-school mr-1.5"></i> Book Offline Seat'
                    : '<i class="fa-brands fa-whatsapp mr-1.5"></i> Enroll on WhatsApp';
                enrollBtn.className = isOffline
                    ? 'px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition'
                    : 'px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-brand-600 hover:bg-brand-700 text-white shadow-md transition';
                enrollBtn.onclick = function () {
                    closeModal('courseModal');
                    prefillInquiry(course.title);
                };
            }

            document.getElementById('courseModal').classList.remove('hidden');
        }

        // YouTube Video ID Extractor Helper
        function getYouTubeVideoId(url) {
            if (!url) return '';
            const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
            if (match && match[1]) return match[1];
            const vParam = url.match(/[?&]v=([^&#]+)/);
            if (vParam) return vParam[1];
            const shortsParam = url.match(/\/shorts\/([^/?#]+)/);
            if (shortsParam) return shortsParam[1];
            return '';
        }

        const videosData = {
            instagram: [
                {
                    title: 'Direct Home Visit Result Celebration • Top Rankers Doorstep Felicitation',
                    desc: 'Manmit Sir personally visiting toppers homes in Bettiah & West Champaran to celebrate board exam triumph with families.',
                    tag: 'Instagram Reel',
                    meta: 'Viral Reel • @msmanmit',
                    url: 'https://www.instagram.com/reel/DZpCeMzRXxh/',
                    platform: 'instagram'
                },
                {
                    title: 'Family Pride & Celebration • Personal Home Visit by Manmit Sir',
                    desc: 'Emotional and joyful moments as Manmit Sir meets parents and felicitates students for their stellar board results.',
                    tag: 'Instagram Reel',
                    meta: 'Family Pride • @msmanmit',
                    url: 'https://www.instagram.com/reel/DYrrZCkRLPN/',
                    platform: 'instagram'
                }
            ],
            best: [
                {
                    title: 'Class 10th Science Complete Board Masterclass by Manmit Sir',
                    desc: 'High-yield conceptual breakdown of Light Reflection & Refraction, Chemical Reactions, and Electricity with previous 10-year board questions.',
                    tag: 'Best Lecture',
                    meta: '128K Views • 1h 45m',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                },
                {
                    title: 'Chanakya Classes Bettiah • Campus Tour & Smart Classroom Walkthrough',
                    desc: 'Take an inside look at our modern smart interactive panels, disciplined lecture halls, and biometric attendance campus at Supriya Cinema Road on Google Maps.',
                    tag: 'Campus Tour',
                    meta: 'Google Maps • Full HD',
                    url: 'https://maps.app.goo.gl/zXqSYKt8qQfebieFA',
                    platform: 'maps',
                    poster: 'assets/google_maps_video_poster.jpg'
                },
                {
                    title: 'चाणक्य के बच्चों से 2 मजेदार सवाल! 😂❤️ (Campus Fun Challenge)',
                    desc: 'Viral classroom moment with Manmit Sir engaging students with mind-bending science and mathematics riddles in Hall-A.',
                    tag: 'Viral Short',
                    meta: '92K Views • Shorts',
                    url: 'https://www.youtube.com/shorts/na7s0fZVeOQ'
                }
            ],
            concept: [
                {
                    title: 'Ray Optics & Optical Instruments in 60 Minutes • Formula Booster',
                    desc: 'Lens formula derivations, mirror equation shortcuts, and ray diagram masterclass for Class 10 & 12 Board examinations.',
                    tag: 'Physics',
                    meta: '64K Views • 58m',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                },
                {
                    title: 'Carbon & Its Compounds: Nomenclature & Reaction Mechanisms',
                    desc: 'Master organic chemistry functional groups, homologous series, and board reaction equations with Manmit Sir.',
                    tag: 'Chemistry',
                    meta: '51K Views • 1h 15m',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                },
                {
                    title: 'Quadratic Equations & Trigonometry Fast-Track Scoring Tricks',
                    desc: 'Step-by-step problem-solving methods to score 100/100 in CBSE Class 10th Mathematics with zero calculation slips.',
                    tag: 'Mathematics',
                    meta: '39K Views • 45m',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                }
            ],
            shorts: [
                {
                    title: 'चाणक्य के बच्चों से 2 मजेदार सवाल! 😂❤️ (Campus Fun Challenge)',
                    desc: 'Smart student Q&A and hilarious classroom interaction with Manmit Sir at Chanakya Classes Bettiah.',
                    tag: 'Campus Shorts',
                    meta: '92K Views • #Shorts',
                    url: 'https://www.youtube.com/shorts/na7s0fZVeOQ'
                },
                {
                    title: '30-Second Science Experiment: Total Internal Reflection in Action! 💡',
                    desc: 'Live laboratory demonstration showing light bending inside an acrylic cylinder during evening doubt hours.',
                    tag: 'Experiment',
                    meta: '78K Views • #Shorts',
                    url: 'https://www.youtube.com/shorts/na7s0fZVeOQ'
                },
                {
                    title: 'Why Students Love Manmit Sir’s Teaching Style ❤️🔥',
                    desc: 'Student feedback and enthusiastic classroom reactions after solving difficult board numericals in 10 seconds.',
                    tag: 'Student Buzz',
                    meta: '61K Views • #Shorts',
                    url: 'https://www.youtube.com/shorts/na7s0fZVeOQ'
                }
            ],
            toppers: [
                {
                    title: 'CBSE 96.4% Bettiah Toppers Felicitation Ceremony & Manmit Sir Speech',
                    desc: 'Watch the grand award ceremony covered by Dainik Jagran, honoring district rankers from Chanakya Classes.',
                    tag: 'Hall of Fame',
                    meta: '84K Views • Celebration',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                },
                {
                    title: 'Topper Interview: How I Scored 98/100 in Science by Following Chanakya Notes',
                    desc: 'Aarav Sharma shares his weekly Sunday OMR test strategy, NCERT book revisions, and daily routine under Manmit Sir.',
                    tag: 'Topper Talk',
                    meta: '42K Views • Strategy',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                }
            ],
            live: [
                {
                    title: 'Lycemit & Chanakya Classes Official Channel & Live Stream Hub',
                    desc: 'Daily free live streams, board exam paper analysis, and direct doubt sessions streamed live on YouTube.',
                    tag: 'Live Stream',
                    meta: 'Live Daily • 7:00 PM',
                    url: 'https://www.youtube.com/@Lycemit'
                },
                {
                    title: 'Mega Sunday OMR Mock Test Error Analysis & Solution Discussion',
                    desc: 'Live step-by-step walkthrough of all 80 questions from Sunday OMR test with topper benchmark comparisons.',
                    tag: 'Test Analysis',
                    meta: '36K Views • Live Replay',
                    url: 'https://www.youtube.com/watch?v=GxbOAdOQvVU'
                }
            ]
        };

        // Render Videos by Tab
        function switchVideoTab(tabKey) {
            ['best', 'instagram', 'concept', 'shorts', 'toppers', 'live'].forEach(k => {
                const btn = document.getElementById('tab-' + k);
                if (!btn) return;
                if (k === tabKey) {
                    btn.className = 'video-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm transition';
                } else {
                    btn.className = 'video-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 transition';
                }
            });

            const list = videosData[tabKey] || [];
            const grid = document.getElementById('videoLibraryGrid');
            if (!grid) return;

            grid.innerHTML = list.map(v => {
                const isIg = v.platform === 'instagram';
                const isMaps = v.platform === 'maps' || (v.url && v.url.includes('maps.app.goo.gl'));
                const vidId = (!isIg && !isMaps) ? getYouTubeVideoId(v.url) : null;
                const isInsideSections = window.location.pathname.includes('/sections/');
                const assetPrefix = isInsideSections ? '../assets/' : 'assets/';
                const thumbUrl = v.poster ? (isInsideSections && !v.poster.startsWith('../') ? '../' + v.poster : v.poster) : (isIg ? assetPrefix + 'stories/story_mari_chooriyan_poster.jpg' : (isMaps ? assetPrefix + 'google_maps_video_poster.jpg' : (vidId ? `https://img.youtube.com/vi/${vidId}/hqdefault.jpg` : assetPrefix + 'logo-hd.png')));
                const safeTitle = (v.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
                const safeDesc = (v.desc || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
                const safeUrl = (v.url || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');

                const tagBg = isIg ? 'bg-pink-500/10 text-pink-600 dark:text-pink-400' : (isMaps ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400');
                const tagIcon = isIg ? 'fa-brands fa-instagram' : (isMaps ? 'fa-brands fa-google' : 'fa-brands fa-youtube');
                const playBtnBg = isIg ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : (isMaps ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950' : 'bg-rose-600 text-white');
                const previewBadgeIcon = isIg ? 'fa-brands fa-instagram text-pink-400' : (isMaps ? 'fa-brands fa-google text-amber-400' : 'fa-solid fa-circle-play text-rose-400');
                const btnActionBg = isIg ? 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400' : (isMaps ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400' : 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400');
                const btnDirectBg = isIg ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' : (isMaps ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black shadow-md shadow-amber-500/20' : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white');
                const btnDirectIcon = isIg ? 'fa-brands fa-instagram' : (isMaps ? 'fa-brands fa-google' : 'fa-brands fa-youtube text-rose-500');
                const btnDirectLabel = isIg ? 'Instagram' : (isMaps ? 'Google Maps' : 'YouTube');

                return `
                <div class="rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between hover:shadow-xl hover:border-amber-400/40 dark:hover:border-amber-500/40 transition-all duration-300 group">
                    <div>
                        <!-- Video Thumbnail & Play Button -->
                        <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 mb-4 cursor-pointer shadow-md group-hover:shadow-amber-500/10 transition-all" onclick="openVideoModal('${safeTitle}', '${safeDesc}', '${safeUrl}')" title="Click to watch preview">
                            <img src="${thumbUrl}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.onerror=null;this.src='${assetPrefix}logo-hd.png';">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/25 to-transparent flex items-center justify-center">
                                <div class="w-12 h-12 rounded-2xl ${playBtnBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <i class="fa-solid fa-play text-base translate-x-0.5"></i>
                                </div>
                            </div>
                            <span class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/85 text-white backdrop-blur-sm border border-white/10">
                                <i class="${previewBadgeIcon} mr-1"></i> Preview
                            </span>
                        </div>

                        <div class="flex items-center justify-between gap-2 mb-2.5">
                            <span class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${tagBg}">
                                <i class="${tagIcon} mr-1"></i> ${v.tag}
                            </span>
                            <span class="text-[11px] text-slate-400 font-medium">${v.meta}</span>
                        </div>
                        <h3 class="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug line-clamp-2">
                            ${v.title}
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                            ${v.desc}
                        </p>
                    </div>
                    <div class="mt-5 pt-4 border-t border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between gap-2">
                        <button onclick="openVideoModal('${safeTitle}', '${safeDesc}', '${safeUrl}')" class="px-3.5 py-2 rounded-xl text-xs font-bold ${btnActionBg} flex items-center gap-1.5 transition">
                            <i class="fa-solid fa-play text-[10px]"></i> Watch Preview
                        </button>
                        <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl text-xs font-bold ${btnDirectBg} transition flex items-center gap-1.5 shadow-sm">
                            <i class="${btnDirectIcon}"></i> ${btnDirectLabel}
                        </a>
                    </div>
                </div>
            `;
            }).join('');
        }

        function openVideoModal(title, desc, url) {
            const modal = document.getElementById('videoModal');
            if (!modal) return;

            const iframe = document.getElementById('videoModalIframe');
            const fallback = document.getElementById('videoModalFallback');
            const fallbackLink = document.getElementById('videoModalFallbackLink');
            const titleEl = document.getElementById('videoModalTitle');
            const descEl = document.getElementById('videoModalDesc');
            const linkEl = document.getElementById('videoModalLink');
            const playerWrapper = document.getElementById('videoModalPlayerWrapper');
            let html5Vid = document.getElementById('videoModalHtml5Video');

            if (titleEl) titleEl.textContent = title || 'Chanakya Classes Lecture Preview';
            if (descEl) descEl.textContent = desc || '';
            if (linkEl) linkEl.href = url || 'https://www.youtube.com/@Lycemit';
            if (fallbackLink) fallbackLink.href = url || 'https://www.youtube.com/@Lycemit';

            const isDoubtSolving = url && (url.includes('MyZ5ohwerFGFb3HJ8') || url.includes('doubt'));
            const isToppersCelebration = url && url.includes('KN4KtEBuJMnHozSZA');
            const isCampusTour = url && url.includes('zXqSYKt8qQfebieFA');
            const isGoogleMaps = url && (url.includes('maps.app.goo.gl') || url.includes('google.com/maps'));
            const isFacebook = url && url.includes('facebook.com');
            const isInstagram = url && url.includes('instagram.com');
            const isInsideSections = window.location.pathname.includes('/sections/');
            const assetPrefix = isInsideSections ? '../assets/' : 'assets/';

            // Adjust header badge
            const badgeSpan = modal.querySelector('span.text-rose-500');
            if (badgeSpan) {
                if (isDoubtSolving) {
                    badgeSpan.innerHTML = '<i class="fa-solid fa-chalkboard-user text-base text-amber-500"></i> Google Maps • 1-on-1 Doubt Classes & Mentorship';
                } else if (isToppersCelebration) {
                    badgeSpan.innerHTML = '<i class="fa-solid fa-trophy text-base text-amber-500"></i> Google Maps • Toppers Result Celebration';
                } else if (isCampusTour) {
                    badgeSpan.innerHTML = '<i class="fa-solid fa-graduation-cap text-base text-amber-500"></i> Google Maps • Smart Classroom & Campus Tour';
                } else if (isGoogleMaps) {
                    badgeSpan.innerHTML = '<i class="fa-brands fa-google text-base text-rose-500"></i> Google Maps • Board Result Celebration';
                } else if (isInstagram) {
                    badgeSpan.innerHTML = '<i class="fa-brands fa-instagram text-base text-pink-500"></i> Instagram • Best Reel Showcase';
                } else if (isFacebook) {
                    badgeSpan.innerHTML = '<i class="fa-brands fa-facebook text-base text-[#1877F2]"></i> Facebook • Official Community Reel';
                } else {
                    badgeSpan.innerHTML = '<i class="fa-brands fa-youtube text-base"></i> Lycemit &amp; Chanakya Video Preview';
                }
            }

            // Adjust CTA text
            if (linkEl) {
                if (isDoubtSolving) {
                    linkEl.innerHTML = '<i class="fa-brands fa-google"></i> View Doubt Classes on Maps';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition';
                } else if (isToppersCelebration) {
                    linkEl.innerHTML = '<i class="fa-brands fa-google"></i> View Celebration on Maps';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2 shadow-sm transition';
                } else if (isCampusTour) {
                    linkEl.innerHTML = '<i class="fa-brands fa-google"></i> View Campus Tour on Maps';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-sm transition';
                } else if (isGoogleMaps) {
                    linkEl.innerHTML = '<i class="fa-brands fa-google"></i> Watch Celebration on Maps';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center gap-2 shadow-sm transition';
                } else if (isInstagram) {
                    linkEl.innerHTML = '<i class="fa-brands fa-instagram"></i> Open on Instagram';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center justify-center gap-2 shadow-sm transition';
                } else if (isFacebook) {
                    linkEl.innerHTML = '<i class="fa-brands fa-facebook"></i> Watch on Facebook';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center gap-2 shadow-sm transition';
                } else {
                    linkEl.innerHTML = '<i class="fa-brands fa-youtube"></i> Watch on YouTube';
                    linkEl.className = 'flex-1 sm:flex-none px-4 py-2 rounded-xl font-bold text-xs bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center gap-2 shadow-sm transition';
                }
            }

            if (isFacebook) {
                if (html5Vid) {
                    html5Vid.pause();
                    html5Vid.classList.add('hidden');
                }
                if (playerWrapper) {
                    playerWrapper.className = 'relative w-full max-w-[340px] aspect-[9/16] h-[520px] sm:h-[580px] mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl ring-2 ring-[#1877F2]/60 shrink-0';
                }
                if (iframe) {
                    const fbReelUrl = (url && (url.includes('1DYBYicGty') || url.includes('1EXXMAx5bH'))) ? 'https://www.facebook.com/reel/1213578780756463' : url;
                    iframe.src = 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(fbReelUrl) + '&show_text=0&t=0';
                    iframe.title = 'Facebook Reel Video Player Preview';
                    iframe.classList.remove('hidden');
                }
                if (fallback) fallback.classList.add('hidden');
            } else if (isGoogleMaps || isInstagram) {
                if (playerWrapper) {
                    playerWrapper.className = 'relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-white/10 shrink-0';
                }
                if (iframe) {
                    iframe.src = '';
                    iframe.classList.add('hidden');
                }
                if (fallback) fallback.classList.add('hidden');

                if (!html5Vid && playerWrapper) {
                    html5Vid = document.createElement('video');
                    html5Vid.id = 'videoModalHtml5Video';
                    html5Vid.className = 'w-full h-full object-cover';
                    html5Vid.controls = true;
                    html5Vid.playsInline = true;
                    playerWrapper.appendChild(html5Vid);
                }
                if (html5Vid) {
                    html5Vid.src = assetPrefix + 'stories/stories_we_celebrate.mp4';
                    let posterFile = 'google_maps_video_poster.jpg';
                    if (isDoubtSolving) posterFile = 'doubt_solving_preview_poster.jpg';
                    html5Vid.poster = assetPrefix + posterFile;
                    html5Vid.classList.remove('hidden');
                    html5Vid.load();
                    html5Vid.play().catch(function() {});
                }
            } else {
                if (playerWrapper) {
                    playerWrapper.className = 'relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-white/10 shrink-0';
                }
                if (html5Vid) {
                    html5Vid.pause();
                    html5Vid.classList.add('hidden');
                }
                const videoId = getYouTubeVideoId(url);
                if (iframe) {
                    if (videoId) {
                        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;
                        iframe.classList.remove('hidden');
                        if (fallback) fallback.classList.add('hidden');
                    } else {
                        iframe.src = '';
                        iframe.classList.add('hidden');
                        if (fallback) fallback.classList.remove('hidden');
                    }
                }
            }

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Inline YouTube Short Facade Player Activation
        function playInlineShortPreview(containerId, videoId) {
            const container = document.getElementById(containerId);
            if (!container) return;
            if (container.querySelector('iframe')) return;

            const iframe = document.createElement('iframe');
            iframe.className = 'absolute inset-0 h-full w-full z-15 border-0 rounded-2xl';
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;
            iframe.title = 'Featured Chanakya Classes YouTube Short';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;

            const playOverlay = container.querySelector('#featuredShortPlayOverlay');
            if (playOverlay) playOverlay.style.display = 'none';

            container.appendChild(iframe);
        }


        // Prefill Contact Form & Scroll Smoothly
        function prefillInquiry(courseTitle) {
            const selectEl = document.getElementById('contactCourse');
            const targetVal = courseTitle.trim().toLowerCase();
            if (selectEl) {
                let matchedOption = -1;
                for (let i = 0; i < selectEl.options.length; i++) {
                    const optVal = selectEl.options[i].value.trim().toLowerCase();
                    if (optVal === targetVal || optVal.includes(targetVal) || targetVal.includes(optVal)) {
                        matchedOption = i;
                        break;
                    }
                }
                if (matchedOption >= 0) {
                    selectEl.selectedIndex = matchedOption;
                }
            }

            const msgEl = document.getElementById('contactMessage');
            if (msgEl) {
                msgEl.value = `Hi Manmit Sir, I want to inquire about Admission for ${courseTitle}. Please share batch timings and counseling details.`;
                updateCharCounter();
            }

            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = `index.html#contact`;
            }
            showToast(`Selected Batch: ${courseTitle}`);
        }

        // Live 0/120 Character Counter
        function updateCharCounter() {
            const msgInput = document.getElementById('contactMessage');
            const counter = document.getElementById('charCountDisplay');
            const len = msgInput.value.length;
            counter.textContent = `${len}/120`;
            if (len >= 110) {
                counter.className = 'text-xs font-mono font-bold text-amber-500';
            } else {
                counter.className = 'text-xs font-mono font-semibold text-slate-500 dark:text-slate-400';
            }
        }

        // Handle Contact Form Submission (Error-free, no alert())
        async function handleContactSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const course = document.getElementById('contactCourse').value;
            const message = document.getElementById('contactMessage').value.trim();
            const submitButton = event.submitter;
            const box = document.getElementById('contactSuccessBox');

            if (submitButton) submitButton.disabled = true;
            try {
                const response = await fetch('/api/send-contact', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ name, phone, email, course, message })
                });

                if (!response.ok) {
                    throw new Error('Contact email request failed.');
                }

                box.innerHTML = `
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-check text-emerald-500 text-lg mt-0.5"></i>
                    <div>
                        <p class="font-bold">Thank you, ${name}! Your inquiry for "${course}" has been received.</p>
                        <p class="mt-0.5">Our team at Chanakya Classes (Bettiah) &amp; Lycemit will contact you shortly on <strong>${phone}</strong>.</p>
                    </div>
                </div>
                `;
                box.classList.remove('hidden');
                showToast('Inquiry submitted successfully!');
            } catch (error) {
                console.error('Contact inquiry submission failed:', error);
                showToast('Could not send inquiry. Please try WhatsApp instead.');
            } finally {
                if (submitButton) submitButton.disabled = false;
            }
        }

        function sendViaWhatsApp() {
            const name = document.getElementById('contactName').value.trim() || 'Student';
            const course = document.getElementById('contactCourse').value;
            const msg = document.getElementById('contactMessage').value.trim() || 'I would like to inquire about admission.';
            const text = encodeURIComponent(`Hello Manmit Sir (Chanakya Classes / Lycemit),\nName: ${name}\nCourse: ${course}\nMessage: ${msg}`);
            window.open(`https://wa.me/917979724568?text=${text}`, '_blank');
        }

        // Copy to Clipboard using execCommand('copy') for iframe compatibility
        function copyToClipboard(text, message) {
            const tempInput = document.createElement('textarea');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand('copy');
                showToast(message || 'Copied to clipboard!');
            } catch (err) {
                showToast('Copy ready: ' + text);
            }
            document.body.removeChild(tempInput);
        }

        // Toast Notification
        function showToast(msg) {
            const banner = document.getElementById('toastBanner');
            document.getElementById('toastMessage').textContent = msg;
            banner.classList.remove('hidden');
            setTimeout(() => {
                banner.classList.add('hidden');
            }, 3200);
        }

        // Modals Control
        function closeModal(id) {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
            if (id === 'videoModal') {
                const playerWrapper = document.getElementById('videoModalPlayerWrapper');
                if (playerWrapper) {
                    playerWrapper.className = 'relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-white/10 shrink-0';
                }
                const iframe = document.getElementById('videoModalIframe');
                if (iframe) {
                    iframe.src = ''; // Instantly halts playback and audio
                }
                const html5Vid = document.getElementById('videoModalHtml5Video');
                if (html5Vid) {
                    html5Vid.pause();
                    html5Vid.currentTime = 0;
                    html5Vid.classList.add('hidden');
                }
            }
            // Safely restore scrolling if no modal is actively visible
            const anyActiveModal = document.querySelector('.fixed:not(.hidden)[id$="Modal"]');
            if (!anyActiveModal) {
                document.body.style.overflow = '';
            }
        }

        function openAuthModal(mode) {
            const modal = document.getElementById('authModal');
            if (!modal) return;

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            if (window.LycemitClerk && window.LycemitClerk.ready) {
                window.LycemitClerk.show(mode || 'signin');
                return;
            }

            const feedback = document.getElementById('authFeedback');
            if (feedback) {
                feedback.textContent = 'Authentication is still loading. Please try again in a moment.';
                feedback.classList.remove('hidden');
            }
        }

        function switchAuthTab(mode) {
            const signInBtn = document.getElementById('tabSignInBtn');
            const signUpBtn = document.getElementById('tabSignUpBtn');
            const nameField = document.getElementById('signupNameField');
            const title = document.getElementById('authModalTitle');

            if (mode === 'signup') {
                nameField.classList.remove('hidden');
                title.textContent = 'Create Your Student Account';
                signUpBtn.className = 'py-2 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm';
                signInBtn.className = 'py-2 rounded-lg text-xs font-bold text-slate-500';
            } else {
                nameField.classList.add('hidden');
                title.textContent = 'Sign In to Lycemit';
                signInBtn.className = 'py-2 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm';
                signUpBtn.className = 'py-2 rounded-lg text-xs font-bold text-slate-500';
            }
        }

        function handleAuthSubmit(e) {
            e.preventDefault();
            const feedback = document.getElementById('authFeedback');
            if (feedback) {
                feedback.innerHTML = '<i class="fa-solid fa-circle-info mr-1.5 text-brand-500"></i> Please use the Clerk sign-in form above.';
                feedback.classList.remove('hidden');
            }
        }

        function openAppModal() {
            document.getElementById('appModal').classList.remove('hidden');
        }

        function openScheduleModal() {
            document.getElementById('scheduleModal').classList.remove('hidden');
        }

        function openLegalModal(type) {
            const titleEl = document.getElementById('legalModalTitle');
            const bodyEl = document.getElementById('legalModalBody');
            if (type === 'terms') {
                titleEl.textContent = 'Terms & Conditions — Lycemit & Chanakya Classes';
                bodyEl.innerHTML = `<p>Welcome to Lycemit (lycemit.com) and Chanakya Classes, Supriya Cinema Road, Bettiah. By enrolling in our online or offline courses, students agree to maintain academic integrity and follow classroom discipline.</p><p>Course access for digital products (such as the ₹99 Class 10 Fast Track, ₹99 Class 6 Diksha, and ₹9 Basics of Chemistry) is valid for the 2026–27 academic session for individual student use.</p>`;
            } else if (type === 'privacy') {
                titleEl.textContent = 'Privacy Policy';
                bodyEl.innerHTML = `<p>We respect your privacy. Student contact information (Name, Phone Number, Email) collected via our inquiry forms or app sign-up is strictly used for class notifications, test schedules, and study material delivery.</p><p>We never sell or share student data with third-party marketers.</p>`;
            } else {
                titleEl.textContent = 'Refunds & Cancellation Policy';
                bodyEl.innerHTML = `<p>Our pocket-friendly courses (₹9 and ₹99) provide instant access to video lectures, live schedules, and downloadable study notes. If you face any technical issue or duplicate payment, please contact lycemit@gmail.com or +91 79797 24568 within 7 days for prompt resolution.</p>`;
            }
            document.getElementById('legalModal').classList.remove('hidden');
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('mobileMenuIcon');
            menu.classList.toggle('hidden');
            icon.className = menu.classList.contains('hidden') ? 'fa-solid fa-bars text-lg' : 'fa-solid fa-xmark text-lg';
        }

        // Dark mode disabled (per user specification)
        try {
            document.documentElement.classList.remove('dark');
            if (document.body) document.body.classList.remove('dark');
            localStorage.removeItem('theme');
        } catch (e) {}

        function toggleTheme() {
            // Dark mode option disabled
            document.documentElement.classList.remove('dark');
            if (document.body) document.body.classList.remove('dark');
        }

        // =========================================================================
        // 4. ZERO-BROKEN-IMAGE SYSTEM FOR MANMIT SHRIVASTVA (image_305d01.png) & LYCEMIT LOGO (image_305d7a.png)
        // =========================================================================
        const embeddedManmitPortraitDataUrl = 'data:image/png;base64,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';

        function generateManmitPortraitDataUrl() {
            const svgPortrait = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520" width="640" height="520">
                <defs>
                    <linearGradient id="bgStudio" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#050b14"/>
                        <stop offset="45%" stop-color="#0c1f38"/>
                        <stop offset="100%" stop-color="#122e52"/>
                    </linearGradient>
                    <linearGradient id="chairLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#3b2621"/>
                        <stop offset="50%" stop-color="#291915"/>
                        <stop offset="100%" stop-color="#1a0f0d"/>
                    </linearGradient>
                    <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#e0a882"/>
                        <stop offset="100%" stop-color="#c68863"/>
                    </linearGradient>
                    <linearGradient id="shirtNavy" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#1e2436"/>
                        <stop offset="100%" stop-color="#121624"/>
                    </linearGradient>
                </defs>

                <!-- Studio Navy Gradient Background -->
                <rect width="640" height="520" fill="url(#bgStudio)"/>

                <!-- Top-Left Official Watermark: "lm Lycemit - An Online Platform by Chanakya Classes" -->
                <g transform="translate(22, 24)">
                    <!-- Mini lm emblem -->
                    <circle cx="20" cy="14" r="5" fill="#f57c00"/>
                    <path d="M12 24 C12 12, 34 14, 52 28 C60 36, 56 48, 42 54 C26 60, 14 54, 12 24 Z" fill="#1565c0"/>
                    <path d="M12 24 C11 40, 15 54, 26 60 C38 56, 48 44, 44 34 C40 24, 24 28, 12 24 Z" fill="#6a1b78"/>
                    <path d="M12 24 C14 14, 30 16, 46 26 C36 20, 22 20, 12 24 Z" fill="#ec407a"/>
                    <text x="20" y="47" font-family="Inter, sans-serif" font-weight="800" font-size="18" fill="#ffffff">lm</text>
                    <!-- Lycemit Text -->
                    <text x="66" y="48" font-family="Plus Jakarta Sans, Inter, sans-serif" font-weight="700" font-size="28" fill="#f8fafc" letter-spacing="0.5">Lycemit</text>
                    <line x1="6" y1="60" x2="218" y2="60" stroke="#94a3b8" stroke-width="1"/>
                    <text x="6" y="75" font-family="Inter, sans-serif" font-weight="500" font-size="11.5" fill="#cbd5e1">An Online Platform by Chanakya Classes</text>
                    <line x1="6" y1="81" x2="218" y2="81" stroke="#94a3b8" stroke-width="1"/>
                </g>

                <!-- High-Back Tufted Brown Leather Executive Chair (Behind Educator) -->
                <g>
                    <path d="M350 185 C350 168, 368 160, 405 162 L525 170 C548 172, 558 186, 555 215 L535 495 L345 495 Z" fill="url(#chairLeather)" stroke="#4e352f" stroke-width="2"/>
                    <!-- Chair Tufting Lines -->
                    <line x1="365" y1="245" x2="540" y2="255" stroke="#1a0e0c" stroke-width="2.5"/>
                    <line x1="360" y1="335" x2="532" y2="345" stroke="#1a0e0c" stroke-width="2.5"/>
                    <line x1="450" y1="170" x2="438" y2="460" stroke="#1a0e0c" stroke-width="2"/>
                </g>

                <!-- Beige / Cream Trousers (Seated Posture) -->
                <path d="M135 520 L225 425 L395 435 L425 520 Z" fill="#d8cbb8"/>
                <path d="M180 520 L255 445 L355 465 L330 520 Z" fill="#c7b7a1"/>

                <!-- Left Forearm & Right Forearm Resting with Clasped Hands -->
                <path d="M262 285 L198 402 L238 418 L295 315 Z" fill="url(#skinTone)"/>
                <path d="M428 295 L352 422 L310 405 L388 285 Z" fill="url(#skinTone)"/>

                <!-- Dark Navy Camo-Pattern T-Shirt with "REFLECTION" Typography -->
                <path d="M258 242 C282 226, 315 222, 355 222 C398 222, 438 235, 458 268 L442 355 L408 345 L398 448 L268 432 L282 325 L245 315 Z" fill="url(#shirtNavy)"/>
                <!-- Subtle Camo Shapes on T-Shirt -->
                <path d="M295 280 Q320 270 335 295 Q315 315 290 300 Z" fill="#2c354d" opacity="0.65"/>
                <path d="M355 310 Q385 300 390 330 Q365 345 348 325 Z" fill="#2c354d" opacity="0.65"/>
                <path d="M285 350 Q315 340 325 370 Q295 385 280 365 Z" fill="#2c354d" opacity="0.65"/>
                <!-- Bold White Stencil Letters (REF / LEC / TION) -->
                <text x="294" y="330" font-family="Inter, sans-serif" font-weight="800" font-size="22" fill="#f1f5f9" letter-spacing="8" transform="rotate(-6 294 330)">R E F</text>
                <text x="288" y="362" font-family="Inter, sans-serif" font-weight="800" font-size="20" fill="#e2e8f0" letter-spacing="9" transform="rotate(-6 288 362)">L E C</text>
                <text x="284" y="395" font-family="Inter, sans-serif" font-weight="800" font-size="21" fill="#f1f5f9" letter-spacing="8" transform="rotate(-6 284 395)">I O N</text>

                <!-- Clasped Hands in Lap -->
                <g transform="translate(172, 385)">
                    <ellipse cx="48" cy="36" rx="38" ry="26" fill="url(#skinTone)"/>
                    <rect x="20" y="18" width="38" height="10" rx="5" fill="#d99b72" stroke="#a66c49" stroke-width="1.5"/>
                    <rect x="18" y="30" width="42" height="10" rx="5" fill="#d99b72" stroke="#a66c49" stroke-width="1.5"/>
                    <rect x="20" y="42" width="38" height="10" rx="5" fill="#d99b72" stroke="#a66c49" stroke-width="1.5"/>
                    <rect x="25" y="53" width="32" height="9" rx="4.5" fill="#c98a63" stroke="#a66c49" stroke-width="1.5"/>
                </g>

                <!-- Chair Padded Armrest in Foreground -->
                <path d="M295 495 C308 455, 368 430, 495 432 L495 470 C395 468, 355 482, 342 520 Z" fill="#2b1b17" stroke="#4a322c" stroke-width="2"/>

                <!-- Neck & Collar Shadow -->
                <path d="M332 195 L330 238 C345 252, 372 252, 386 236 L383 195 Z" fill="url(#skinTone)"/>
                <path d="M332 202 Q358 222 384 202 L383 195 L332 195 Z" fill="#9e6747" opacity="0.45"/>

                <!-- Head & Ears -->
                <ellipse cx="305" cy="148" rx="8" ry="16" fill="url(#skinTone)"/>
                <ellipse cx="411" cy="148" rx="8" ry="16" fill="url(#skinTone)"/>
                <path d="M310 112 C310 78, 406 78, 406 112 L404 162 C402 194, 378 210, 358 210 C338 210, 314 194, 312 162 Z" fill="url(#skinTone)"/>

                <!-- Neat Dark Short Hair -->
                <path d="M308 126 C304 92, 325 70, 358 70 C392 70, 412 92, 408 126 C403 108, 390 100, 358 100 C326 100, 313 108, 308 126 Z" fill="#141418"/>

                <!-- Signature Expressive Connected Eyebrows -->
                <path d="M320 132 Q338 123 358 130 Q378 123 396 132" fill="none" stroke="#18181c" stroke-width="5.5" stroke-linecap="round"/>

                <!-- Warm Confident Eyes -->
                <ellipse cx="337" cy="142" rx="9" ry="5" fill="#ffffff"/>
                <circle cx="337" cy="142" r="4.2" fill="#1f1612"/>
                <circle cx="335.5" cy="140.5" r="1.3" fill="#ffffff"/>

                <ellipse cx="379" cy="142" rx="9" ry="5" fill="#ffffff"/>
                <circle cx="379" cy="142" r="4.2" fill="#1f1612"/>
                <circle cx="377.5" cy="140.5" r="1.3" fill="#ffffff"/>

                <!-- Nose -->
                <path d="M358 134 L355 162 C350 165, 366 165, 362 162" fill="none" stroke="#a36c4c" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M348 164 Q358 169 368 164" fill="none" stroke="#a36c4c" stroke-width="2.2" stroke-linecap="round"/>

                <!-- Gentle Mustache Shadow & Confident Smile -->
                <path d="M338 176 Q358 171 378 176" fill="none" stroke="#3b2e2a" stroke-width="3.5" stroke-linecap="round" opacity="0.45"/>
                <path d="M341 181 Q358 190 375 181" fill="none" stroke="#7c4232" stroke-width="3" stroke-linecap="round"/>
                <path d="M346 186 Q358 193 370 186" fill="none" stroke="#b56e57" stroke-width="2.2" stroke-linecap="round"/>
            </svg>`;
            return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgPortrait);
        }

        function applyCustomBrandLogo(dataUrl) {
            document.querySelectorAll('.brand-logo-img').forEach(img => {
                img.src = dataUrl;
                img.classList.remove('hidden');
            });
            document.querySelectorAll('.brand-logo-svg').forEach(svg => {
                svg.classList.add('hidden');
            });
        }

        function handleCustomImageUpload(event, targetType) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (e) {
                const resultUrl = e.target.result;
                if (targetType === 'educator') {
                    const portraitEl = document.getElementById('manmitPortraitImg');
                    if (portraitEl) portraitEl.src = resultUrl;
                    try { localStorage.setItem('lycemit_custom_educator_photo', resultUrl); } catch (err) {}
                    showToast('Manmit Shrivastva photo updated & saved!');
                } else if (targetType === 'logo') {
                    applyCustomBrandLogo(resultUrl);
                    try { localStorage.setItem('lycemit_custom_brand_logo', resultUrl); } catch (err) {}
                    showToast('Lycemit brand logo updated & saved!');
                }
            };
            reader.readAsDataURL(file);
        }

        function initZeroBrokenImages() {
            const portraitEl = document.getElementById('manmitPortraitImg');

            // 1. Immediately set high-res embedded portrait Data-URI so it never shows a broken icon
            let savedPortrait = null;
            let savedLogo = null;
            try {
                savedPortrait = localStorage.getItem('lycemit_custom_educator_photo');
                savedLogo = localStorage.getItem('lycemit_custom_brand_logo');
            } catch (err) {}

            if (portraitEl) {
                const isSectionPage = window.location.pathname.includes('/sections/');
                const portraitSrc = isSectionPage ? '../assets/manmit_shrivastva_portrait.png' : 'assets/manmit_shrivastva_portrait.png';
                portraitEl.src = savedPortrait || portraitSrc;
                portraitEl.onerror = function() {
                    this.onerror = null;
                    this.src = isSectionPage ? '../image_305d01.png' : 'image_305d01.png';
                };
            }
            if (savedLogo) {
                applyCustomBrandLogo(savedLogo);
            }

            // Silently probe if local file 'image_305d7a.png' exists in the same directory; swap only if valid
            if (!savedLogo) {
                const probeLogo = new Image();
                probeLogo.onload = function () {
                    if (probeLogo.complete && probeLogo.naturalWidth > 0) {
                        applyCustomBrandLogo('image_305d7a.png');
                    }
                };
                probeLogo.onerror = function () {
                    // Keep embedded vector SVG logo silently
                };
                probeLogo.src = 'image_305d7a.png';
            }
        }

        // Initialize on Window Load
        // Initialize safely on DOMContentLoaded (supports any separate categorized page)
document.addEventListener('DOMContentLoaded', function () {
    initClerkAuth();
    if (typeof initZeroBrokenImages === 'function') {
        initZeroBrokenImages();
    }
    if (document.getElementById('scannerHubContainer')) {
        switchScannerHubTab('all3');
    }
    if (document.getElementById('coursesGrid')) {
        renderCourses('all', '');
    }
    if (document.getElementById('videoLibraryGrid')) {
        switchVideoTab('best');
    }
    if (document.getElementById('contactMessage') && document.getElementById('charCountDisplay')) {
        updateCharCounter();
    }
});

function initClerkAuth() {
    const modal = document.getElementById('authModal');
    const panel = modal ? modal.firstElementChild : null;
    const publishableKey = window.LYCEMIT_CLERK_PUBLISHABLE_KEY;

    if (!modal || !panel || !publishableKey) {
        return;
    }
    if (window.LycemitClerkInitPromise) return;
    if (!window.Clerk) {
        window.LycemitClerkInitAttempts = (window.LycemitClerkInitAttempts || 0) + 1;
        if (window.LycemitClerkInitAttempts < 40) {
            window.setTimeout(initClerkAuth, 250);
        }
        return;
    }
    if (window.LycemitClerk) return;

    const favicon = document.querySelector('link[rel="icon"]');
    const logoPath = document.body.classList.contains('dark')
        ? 'logo-hd.png'
        : 'logo-transparent.png';
    const logoImageUrl = favicon
        ? new URL(favicon.getAttribute('href').replace('favicon.png', logoPath), document.baseURI).href
        : new URL(`assets/${logoPath}`, document.baseURI).href;
    const clerkAppearance = {
        layout: {
            logoImageUrl,
            logoLinkUrl: window.location.href
        },
        variables: {
            colorPrimary: '#2563eb',
            borderRadius: '0.75rem',
            fontFamily: 'Inter, Noto Sans Devanagari, sans-serif'
        },
        elements: {
            rootBox: 'w-full',
            card: 'shadow-none border-0 p-0 w-full max-w-none',
            headerTitle: 'text-slate-900 dark:text-white',
            headerSubtitle: 'text-slate-500 dark:text-slate-400',
            formButtonPrimary: 'bg-brand-600 hover:bg-brand-700 w-full',
            formFieldInput: 'w-full',
            footer: 'hidden'
        }
    };

    panel.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
                <img src="${logoImageUrl}" alt="Lycemit logo" class="h-11 w-11 rounded-xl object-contain bg-slate-100 dark:bg-slate-800 p-1.5 shadow-sm">
                <h3 class="font-display font-extrabold text-2xl text-slate-900 dark:text-white">Welcome to Lycemit</h3>
            </div>
            <button type="button" onclick="closeModal('authModal')" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center" aria-label="Close authentication">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="grid grid-cols-2 gap-2 p-1 mb-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button type="button" onclick="window.LycemitClerk.show('signin')" class="py-2 rounded-lg text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm">Sign In</button>
            <button type="button" onclick="window.LycemitClerk.show('signup')" class="py-2 rounded-lg text-xs font-bold text-slate-500">Sign Up</button>
        </div>
        <div id="clerkSignInMount"></div>
        <div id="clerkSignUpMount" class="hidden"></div>
        <div id="authFeedback" class="hidden mt-3 p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold text-center"></div>
    `;

    window.LycemitClerkInitPromise = window.Clerk.load({
        ui: { ClerkUI: window.__internal_ClerkUICtor }
    }).then(() => {
        const signInMount = document.getElementById('clerkSignInMount');
        const signUpMount = document.getElementById('clerkSignUpMount');
        if (!signInMount || !signUpMount) return;

        window.Clerk.mountSignIn(signInMount, {
            appearance: clerkAppearance,
            routing: 'virtual'
        });
        window.Clerk.mountSignUp(signUpMount, {
            appearance: clerkAppearance,
            routing: 'virtual'
        });

        window.LycemitClerk = {
            ready: true,
            show(mode) {
                const signIn = mode !== 'signup';
                signInMount.classList.toggle('hidden', !signIn);
                signUpMount.classList.toggle('hidden', signIn);
            }
        };
        window.LycemitClerk.show('signin');
        updateAuthTrigger();
        window.Clerk.addListener(updateAuthTrigger);
    }).catch((error) => {
        console.error('Clerk authentication failed to load.', error);
        const feedback = document.getElementById('authFeedback');
        if (feedback) {
            feedback.textContent = 'Authentication could not load. Check the Clerk setup and try again.';
            feedback.classList.remove('hidden');
        }
    });
}

function updateAuthTrigger() {
    if (!window.Clerk) return;

    const signedIn = Boolean(window.Clerk.user);
    if (window.LycemitClerkAuthState === signedIn) return;
    window.LycemitClerkAuthState = signedIn;

    document.querySelectorAll('[data-auth-trigger]').forEach((button) => {
        const label = button.querySelector('span');

        if (label) {
            label.textContent = signedIn ? 'Account' : 'Sign In';
        }
        button.title = signedIn ? 'Open your account' : 'Sign in to Lycemit';
        button.onclick = signedIn
            ? () => window.Clerk.openUserProfile()
            : () => openAuthModal('signin');
    });

    if (signedIn) {
        if (window.Clerk && window.Clerk.user) {
            try {
                const u = window.Clerk.user;
                const sName = u.fullName || u.firstName || (u.primaryEmailAddress ? u.primaryEmailAddress.emailAddress.split('@')[0] : 'Student');
                const sEmail = u.primaryEmailAddress ? u.primaryEmailAddress.emailAddress : '';
                const sAvatar = u.imageUrl || '';
                const sessionData = {
                    name: sName,
                    email: sEmail,
                    avatar: sAvatar,
                    targetClass: 'Class 10th CBSE Board 2027',
                    signedInAt: new Date().toISOString()
                };
                localStorage.setItem('lycemit_student_session', JSON.stringify(sessionData));
            } catch (e) {}
        }
        closeModal('authModal');
    }
}


// =========================================================================
// 5. LEFT THREE-LINER ALL-PAGES QUICK-VIEW ACCESS SIDEBAR CONTROLS
// =========================================================================
function openLeftSidebar() {
    const drawer = document.getElementById('leftPagesSidebar');
    const backdrop = document.getElementById('leftSidebarBackdrop');
    if (drawer && backdrop) {
        drawer.classList.add('open');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeLeftSidebar() {
    const drawer = document.getElementById('leftPagesSidebar');
    const backdrop = document.getElementById('leftSidebarBackdrop');
    if (drawer && backdrop) {
        drawer.classList.remove('open');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function toggleLeftSidebar() {
    const drawer = document.getElementById('leftPagesSidebar');
    if (drawer && drawer.classList.contains('open')) {
        closeLeftSidebar();
    } else {
        openLeftSidebar();
    }
}

// Close Left Sidebar with ESC Key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLeftSidebar();
        ['telegramScannerModal', 'courseModal', 'authModal', 'videoModal', 'scheduleModal', 'appModal', 'legalModal'].forEach(id => {
            const el = document.getElementById(id);
            if (el && !el.classList.contains('hidden')) {
                closeModal(id);
            }
        });
    }
});


// =========================================================================
// 6. OFFICIAL LYCEMIT APP SCREENSHOT MODAL VIEWER
// =========================================================================
function openAppScreenshotModal(imgSrc, title, desc) {
    const modal = document.getElementById('appScreenshotModal');
    const imgEl = document.getElementById('appScreenshotModalImg');
    const titleEl = document.getElementById('appScreenshotModalTitle');
    const descEl = document.getElementById('appScreenshotModalDesc');
    
    if (imgEl && titleEl && descEl && modal) {
        imgEl.src = imgSrc;
        titleEl.textContent = title;
        descEl.textContent = desc;
        modal.classList.remove('hidden');
    }
}


// =========================================================================
// 7. BRAND LOGO HD & SLOW NETWORK PRELOADER / SPLASH SYSTEM
// =========================================================================
function dismissPreloader() {
    const preloader = document.getElementById('sitePreloader');
    if (!preloader) return;
    preloader.classList.add('preloader-hidden');
    preloader.style.pointerEvents = 'none';
    setTimeout(() => {
        try { preloader.style.display = 'none'; } catch (e) {}
    }, 200);
}

function initPreloader() {
    const preloader = document.getElementById('sitePreloader');
    if (!preloader) return;

    // Instant unlock: never block student interaction or navigation
    preloader.style.pointerEvents = 'none';
    const progressBar = document.getElementById('preloaderProgressBar');
    if (progressBar) progressBar.style.width = '100%';
    const statusText = document.getElementById('preloaderStatusText');
    if (statusText) statusText.textContent = 'Welcome to LYCEMIT & Chanakya Classes!';

    // Instant dismissal (<= 50ms) so redirects and visits are completely instantaneous
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(dismissPreloader, 40);
    } else {
        window.addEventListener('DOMContentLoaded', () => setTimeout(dismissPreloader, 40), { once: true });
        setTimeout(dismissPreloader, 80);
    }
}

function initBrandLogos() {
    const isSectionPage = window.location.pathname.includes('/sections/');
    const logoHdSrc = isSectionPage ? '../assets/logo-transparent.png' : 'assets/logo-transparent.png';
    const logoHd2xSrc = isSectionPage ? '../assets/logo-hd.png' : 'assets/logo-hd.png';

    // Update all brand-logo-img elements
    document.querySelectorAll('.brand-logo-img').forEach(img => {
        img.src = logoHdSrc;
        img.srcset = `${logoHdSrc} 1x, ${logoHd2xSrc} 2x`;
        img.classList.remove('hidden');
        img.onerror = function() {
            // Fallback to local image_305d7a.png if needed
            this.onerror = null;
            this.src = isSectionPage ? '../image_305d7a.png' : 'image_305d7a.png';
        };
    });

    // Hide vector placeholder SVGs when img is ready
    document.querySelectorAll('.brand-logo-svg').forEach(svg => {
        svg.style.display = 'none';
    });
}

// =========================================================================
// 8. RUNNING STORIES & REELS COMPONENT WITH INTERACTIVE STORY VIEWER
// =========================================================================
const STORIES_DATA = [
    {
        id: 'mari-chooriyan',
        title: 'Mari Chooriyan 🌟 Campus Celebration',
        badge: '🔴 Live Story • Campus Life & Annual Fest',
        description: 'Vibrant cultural celebration, dance, laughter, and high-energy festival memories at Chanakya Classes Bettiah with Manmit Sir & students.',
        videoFile: 'mari_chooriyan.mp4',
        poster: 'assets/stories/story_mari_chooriyan_poster.jpg',
        posterRel: '../assets/stories/story_mari_chooriyan_poster.jpg',
        author: 'Chanakya Classes Bettiah',
        handle: '@msmanmit • Supriya Cinema Rd',
        avatar: 'assets/logo-transparent.png',
        avatarRel: '../assets/logo-transparent.png',
        views: '4.8K views',
        actionLabel: 'Join Chanakya Classes'
    },
    {
        id: 'stories-we-celebrate',
        title: 'Stories We Celebrate 🏆 Toppers & Pride',
        badge: '🏆 Topper Hall of Fame • Real Milestones',
        description: 'Honoring dedication, top scores, student felicitations, and real milestones achieved by the students of Chanakya Classes Bettiah.',
        videoFile: 'stories_we_celebrate.mp4',
        poster: 'assets/stories/story_stories_we_celebrate_poster.jpg',
        posterRel: '../assets/stories/story_stories_we_celebrate_poster.jpg',
        author: 'Manmit Shrivastva',
        handle: '@msmanmit • Mentor & Founder',
        avatar: 'assets/manmit_avatar.png',
        avatarRel: '../assets/manmit_avatar.png',
        views: '6.2K views',
        actionLabel: 'Explore Courses & Batches'
    }
];

let activeStoryIndex = 0;
let storyProgressBarAnim = null;

function getStoryAssetPath(videoFile) {
    const isSectionPage = window.location.pathname.includes('/sections/');
    return (isSectionPage ? '../assets/stories/' : 'assets/stories/') + videoFile;
}

// Inline Video Sound Toggle
function toggleInlineStoryAudio(videoId, btnId) {
    const video = document.getElementById(videoId);
    const btn = document.getElementById(btnId);
    if (!video) return;

    if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {});
        }
    }

    if (video.muted) {
        // Mute all other videos on the page
        document.querySelectorAll('video').forEach(v => {
            if (v !== video) {
                v.muted = true;
            }
        });
        document.querySelectorAll('.story-sound-btn').forEach(b => {
            if (b !== btn) {
                b.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>Muted</span>';
                b.classList.remove('bg-amber-400', 'text-slate-950', 'ring-2', 'ring-amber-300');
                b.classList.add('bg-black/60', 'text-white');
            }
        });

        video.muted = false;
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-volume-high text-slate-950"></i> <span class="font-bold text-slate-950">Sound ON</span>';
            btn.classList.remove('bg-black/60', 'text-white');
            btn.classList.add('bg-amber-400', 'text-slate-950', 'ring-2', 'ring-amber-300');
        }
    } else {
        video.muted = true;
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>Muted</span>';
            btn.classList.remove('bg-amber-400', 'text-slate-950', 'ring-2', 'ring-amber-300');
            btn.classList.add('bg-black/60', 'text-white');
        }
    }
}

// Open Interactive Fullscreen / Modal Story Viewer
function openStoryModal(index) {
    if (index < 0 || index >= STORIES_DATA.length) index = 0;
    activeStoryIndex = index;
    const story = STORIES_DATA[activeStoryIndex];

    const modal = document.getElementById('storyViewerModal');
    const modalVideo = document.getElementById('storyModalVideo');
    const titleEl = document.getElementById('storyModalTitle');
    const badgeEl = document.getElementById('storyModalBadge');
    const descEl = document.getElementById('storyModalDesc');
    const authorEl = document.getElementById('storyModalAuthor');
    const handleEl = document.getElementById('storyModalHandle');
    const viewsEl = document.getElementById('storyModalViews');

    if (!modal || !modalVideo) return;

    // Pause any inline background videos
    document.querySelectorAll('.story-video-embed').forEach(v => {
        try { v.pause(); } catch (e) {}
    });

    // Populate story details
    const isSectionPage = window.location.pathname.includes('/sections/');
    const avatarEl = document.getElementById('storyModalAvatar');
    if (avatarEl) {
        avatarEl.src = isSectionPage ? (story.avatarRel || '../assets/logo-transparent.png') : (story.avatar || 'assets/logo-transparent.png');
    }
    if (titleEl) titleEl.textContent = story.title;
    if (badgeEl) badgeEl.textContent = story.badge;
    if (descEl) descEl.textContent = story.description;
    if (authorEl) authorEl.textContent = story.author;
    if (handleEl) handleEl.textContent = story.handle;
    if (viewsEl) viewsEl.textContent = story.views;

    // Set video src, poster, and unmute in modal viewer
    const src = getStoryAssetPath(story.videoFile);
    modalVideo.src = src;
    const posterPath = isSectionPage ? story.posterRel : story.poster;
    if (posterPath) modalVideo.poster = posterPath;
    modalVideo.muted = false;
    modalVideo.currentTime = 0;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Update progress bar UI segments
    updateStoryProgressBars();

    // Play video
    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            // If browser autoplay policy blocks unmuted audio, fallback to muted
            modalVideo.muted = true;
            modalVideo.play();
            updateStoryModalSoundBtn(true);
        });
    }
    updateStoryModalSoundBtn(modalVideo.muted);

    // Listen for progress & story end
    modalVideo.ontimeupdate = function() {
        if (!modalVideo.duration) return;
        const progressPct = (modalVideo.currentTime / modalVideo.duration) * 100;
        const activeBar = document.getElementById('storyProgressFill_' + activeStoryIndex);
        if (activeBar) {
            activeBar.style.width = progressPct + '%';
        }
    };

    modalVideo.onended = function() {
        if (activeStoryIndex < STORIES_DATA.length - 1) {
            nextStory();
        } else {
            closeStoryModal();
        }
    };
}

function updateStoryProgressBars() {
    STORIES_DATA.forEach((s, idx) => {
        const bar = document.getElementById('storyProgressFill_' + idx);
        if (bar) {
            if (idx < activeStoryIndex) {
                bar.style.width = '100%';
            } else if (idx === activeStoryIndex) {
                bar.style.width = '0%';
            } else {
                bar.style.width = '0%';
            }
        }
    });
}

function nextStory() {
    if (activeStoryIndex < STORIES_DATA.length - 1) {
        openStoryModal(activeStoryIndex + 1);
    } else {
        closeStoryModal();
    }
}

function prevStory() {
    const modalVideo = document.getElementById('storyModalVideo');
    if (modalVideo && modalVideo.currentTime > 2) {
        modalVideo.currentTime = 0;
        return;
    }
    if (activeStoryIndex > 0) {
        openStoryModal(activeStoryIndex - 1);
    } else if (modalVideo) {
        modalVideo.currentTime = 0;
    }
}

function toggleStoryPlayPause() {
    const modalVideo = document.getElementById('storyModalVideo');
    const playPauseIcon = document.getElementById('storyPlayPauseIcon');
    if (!modalVideo) return;

    if (modalVideo.paused) {
        modalVideo.play();
        if (playPauseIcon) playPauseIcon.className = 'fa-solid fa-pause';
    } else {
        modalVideo.pause();
        if (playPauseIcon) playPauseIcon.className = 'fa-solid fa-play';
    }
}

function toggleStoryModalSound() {
    const modalVideo = document.getElementById('storyModalVideo');
    if (!modalVideo) return;
    modalVideo.muted = !modalVideo.muted;
    updateStoryModalSoundBtn(modalVideo.muted);
}

function updateStoryModalSoundBtn(isMuted) {
    const soundBtn = document.getElementById('storyModalSoundBtn');
    if (!soundBtn) return;
    if (isMuted) {
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark text-white"></i>';
        soundBtn.title = 'Sound Muted (Click to Unmute)';
    } else {
        soundBtn.innerHTML = '<i class="fa-solid fa-volume-high text-amber-400"></i>';
        soundBtn.title = 'Sound On';
    }
}

function closeStoryModal() {
    const modal = document.getElementById('storyViewerModal');
    const modalVideo = document.getElementById('storyModalVideo');
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.src = '';
    }
    if (modal) {
        modal.classList.add('hidden');
    }
    document.body.style.overflow = '';

    // Resume background inline videos
    document.querySelectorAll('.story-video-embed').forEach(v => {
        try { v.play(); } catch (e) {}
    });
}

// Global Key Listeners for Story Viewer
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('storyViewerModal');
    if (modal && !modal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            closeStoryModal();
        } else if (e.key === 'ArrowRight') {
            nextStory();
        } else if (e.key === 'ArrowLeft') {
            prevStory();
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleStoryPlayPause();
        }
    }
});

// Unlock the page immediately; deferred third-party scripts must not block the UI.
initPreloader();
document.addEventListener('DOMContentLoaded', initBrandLogos, { once: true });

// Global Modal Backdrop Dismiss & Video Modal Helper
document.addEventListener('DOMContentLoaded', function () {
    /* videoModalBackdropListener */
    ['telegramScannerModal', 'courseModal', 'authModal', 'videoModal', 'scheduleModal', 'appModal', 'legalModal', 'appScreenshotModal'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', function (e) {
                if (e.target === el) {
                    closeModal(id);
                }
            });
        }
    });
});


// =========================================================================
// 7. ADVANCED 3D RENDERING MOTION & INTERACTIVE DEPTH SYSTEM
// =========================================================================

// --- 7A. Interactive 3D Depth Constellation Canvas ---
function initHero3DCanvas() {
    const canvas = document.getElementById('hero3dCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let animationFrameId = null;
    let isVisible = true;

    // High-contrast, vibrant 3D Particles
    const PARTICLE_COUNT = 62;
    const particles = [];
    const colors = [
        '#2563eb', // Electric Royal Blue
        '#0284c7', // Cyber Sky Blue
        '#d97706', // Solar Amber
        '#7c3aed', // Vivid Indigo
        '#059669', // Emerald
        '#f43f5e'  // Radiant Rose
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: (Math.random() - 0.5) * 850,
            y: (Math.random() - 0.5) * 580,
            z: (Math.random() - 0.5) * 550,
            baseX: 0,
            baseY: 0,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            vz: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2.6 + 1.8,
            color: colors[i % colors.length],
            pulseOffset: Math.random() * Math.PI * 2
        });
    }

    // Camera angles & lerp targets
    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    const fov = 700;

    function resize() {
        const parent = canvas.parentElement;
        if (!parent) return;
        width = parent.clientWidth;
        height = parent.clientHeight;
        dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Mouse tracking over hero container for dynamic 3D Parallax
    const heroSection = document.getElementById('home') || canvas.parentElement;
    if (heroSection) {
        heroSection.addEventListener('pointermove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const normX = ((e.clientX - rect.left) / rect.width) - 0.5;
            const normY = ((e.clientY - rect.top) / rect.height) - 0.5;
            targetRotY = normX * 0.65;
            targetRotX = -normY * 0.45;
        }, { passive: true });

        heroSection.addEventListener('pointerleave', function() {
            targetRotX = 0;
            targetRotY = 0;
        }, { passive: true });
    }

    // IntersectionObserver to pause rendering when hero is out of screen
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible && !animationFrameId) {
                    renderLoop();
                }
            });
        }, { threshold: 0.05 });
        if (heroSection) observer.observe(heroSection);
    }

    let idleAngle = 0;

    function renderLoop() {
        if (!isVisible) {
            animationFrameId = null;
            return;
        }

        ctx.clearRect(0, 0, width, height);

        // Continuous smooth floating 3D wave motion
        idleAngle += 0.005;
        rotX += (targetRotX - rotX) * 0.06;
        rotY += ((targetRotY + Math.sin(idleAngle * 0.9) * 0.18) - rotY) * 0.06;

        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        const projected = [];
        const centerX = width / 2;
        const centerY = height / 2;

        // Project and transform particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Harmonic wave float
            p.x += p.vx + Math.sin(idleAngle + p.pulseOffset) * 0.22;
            p.y += p.vy + Math.cos(idleAngle + p.pulseOffset) * 0.22;
            p.z += p.vz;

            // Bounding box bounce
            if (p.x < -440 || p.x > 440) p.vx *= -1;
            if (p.y < -300 || p.y > 300) p.vy *= -1;
            if (p.z < -280 || p.z > 280) p.vz *= -1;

            // 3D Rotation (Yaw then Pitch)
            const x1 = p.x * cosY + p.z * sinY;
            const z1 = -p.x * sinY + p.z * cosY;

            const y1 = p.y * cosX - z1 * sinX;
            const z2 = p.y * sinX + z1 * cosX + 420; // offset depth

            if (z2 <= 20) continue; // Behind camera

            const scale = fov / (fov + z2);
            const px = centerX + x1 * scale;
            const py = centerY + y1 * scale;
            const pr = p.radius * scale;
            const alpha = Math.min(1, Math.max(0.18, (1 - (z2 / 850))));

            projected.push({
                x: px,
                y: py,
                radius: pr,
                color: p.color,
                alpha: alpha,
                z: z2
            });
        }

        // Draw connections between near nodes in 3D (Vibrant High-Contrast Lines)
        ctx.lineWidth = 1.1;
        for (let i = 0; i < projected.length; i++) {
            for (let j = i + 1; j < projected.length; j++) {
                const p1 = projected[i];
                const p2 = projected[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < 21000) { // ~145px threshold
                    const dist = Math.sqrt(distSq);
                    const lineAlpha = (1 - dist / 145) * Math.min(p1.alpha, p2.alpha) * 0.48;
                    if (lineAlpha > 0.04) {
                        ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Draw particle nodes with luminous 3D glow
        for (let i = 0; i < projected.length; i++) {
            const p = projected[i];
            
            // Outer radiant halo for closer 3D nodes
            if (p.alpha > 0.45) {
                const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.2);
                glowGrad.addColorStop(0, p.color);
                glowGrad.addColorStop(1, 'transparent');
                ctx.fillStyle = glowGrad;
                ctx.globalAlpha = p.alpha * 0.35;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 3.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Core Particle Node
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(1.2, p.radius), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.min(1.0, p.alpha * 1.15);
            ctx.fill();
        }

        ctx.globalAlpha = 1.0;
        animationFrameId = requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

// 7A-2. Auto-Play Stories on Viewport Scroll
function initStoryVideoAutoplay() {
    const inlineVideos = document.querySelectorAll('.story-video-embed');
    if (!inlineVideos.length) return;

    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                    }
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.15 });

        inlineVideos.forEach(v => videoObserver.observe(v));
    }
}

// --- 7B. Universal 3D Interactive Card Tilt & Specular Light Engine ---
function init3DCardMotion() {
    const selector = '.motion-3d-card, .book-3d-cover, .phone-mockup-3d, [data-3d-tilt]';
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        // Prevent duplicate initializations
        if (card.dataset.has3dMotion) return;
        card.dataset.has3dMotion = 'true';

        // Inject dynamic specular glare overlay
        if (!card.querySelector('.motion-3d-glare')) {
            const glare = document.createElement('div');
            glare.className = 'motion-3d-glare';
            card.appendChild(glare);
        }

        const maxTilt = parseFloat(card.dataset.maxTilt || 9);

        card.addEventListener('pointerenter', function() {
            card.classList.remove('resting');
            card.style.transition = 'none';
        });

        card.addEventListener('pointermove', function(e) {
            const rect = card.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const dx = (x / rect.width - 0.5) * 2;
            const dy = (y / rect.height - 0.5) * 2;

            const rotX = -dy * maxTilt;
            const rotY = dx * maxTilt;

            // Apply smooth 3D perspective rotation without transition stutter
            card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(10px) scale3d(1.015, 1.015, 1.015)`;
            card.style.setProperty('--glare-x', `${x.toFixed(1)}px`);
            card.style.setProperty('--glare-y', `${y.toFixed(1)}px`);
            card.style.setProperty('--glare-opacity', '0.65');
        });

        card.addEventListener('pointerleave', function() {
            card.classList.add('resting');
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
            card.style.setProperty('--glare-opacity', '0');
        });
    });
}

// Auto-run 3D Motion System on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initHero3DCanvas();
    initStoryVideoAutoplay();
    init3DCardMotion();
});
