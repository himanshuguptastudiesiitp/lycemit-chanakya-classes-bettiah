// ====================================================================
// LYCEMIT AI MITRA — Enterprise AI Chatbot & Educational Agent v2.0
// Official AI Assistant for Chanakya Classes Bettiah & Lycemit Online
// Voice + Text + Fluent Hindi/Hinglish & English NLU Engine
// (c) 2026 Chanakya Classes & Lycemit by Manmit Shrivastva
// ====================================================================

(function () {
  'use strict';

  // ==================================================================
  // 1. SYSTEM CONFIGURATION & CONSTANTS
  // ==================================================================
  var CFG = {
    name: 'LYCEMIT AI Mitra',
    nameHi: 'LYCEMIT AI मित्र',
    version: '2.0.0',
    defaultLang: 'hi', // Primary Indian language: Hindi
    phone: '+918210344415',
    phoneSecondary: '+917979724568',
    whatsapp: '917979724568',
    telegram: 'msmanmit',
    telegramDirect: 'msmanmit2003',
    telegramLinks: 'mslinks2021',
    youtube: '@Lycemit',
    playStore: 'https://play.google.com/store/search?q=lycemit&c=apps&hl=en-us',
    mapsUrl: 'https://www.google.co.in/maps/place/Chanakya+Classes+by+Manmit/@26.8077069,84.5053101,17z',
    address: 'Supriya Cinema Road, Bettiah, West Champaran, Bihar 845438',
    addressHi: 'सुप्रिया सिनेमा रोड, बेतिया, पश्चिमी चंपारण, बिहार - 845438',
    founder: 'Manmit Shrivastva (MS Manmit)',
    founderHi: 'मनमीत श्रीवास्तव (MS Manmit)',
    avatarRel: 'assets/ai_mitra_avatar.png',
    avatarRelSection: '../assets/ai_mitra_avatar.png',
    voiceEnabled: true,
    typingDelayMs: 400,
    maxHistory: 60
  };

  function getAvatarUrl() {
    var isSection = window.location.pathname.indexOf('/sections/') !== -1;
    return isSection ? CFG.avatarRelSection : CFG.avatarRel;
  }

  // ==================================================================
  // 2. COMPREHENSIVE BILINGUAL KNOWLEDGE BASE (KB)
  // ==================================================================
  var KB = {
    founder: {
      name: 'Manmit Shrivastva (MS Manmit)',
      nameHi: 'मनमीत श्रीवास्तव (MS Manmit)',
      role: 'Director & Founder, Chanakya Classes Bettiah & Lycemit Online',
      roleHi: 'संस्थापक एवं निदेशक, चाणक्य क्लासेज बेतिया और लाइसमिट',
      exp: '10+ Years of Excellence in Mathematics, Science & Board Preparation',
      expHi: '10+ वर्षों का शानदार अध्यापन अनुभव (गणित, विज्ञान एवं बोर्ड परीक्षा)',
      achievements: 'Mentored state and district CBSE & Bihar Board toppers (Highest score 96.4%). Honored in Dainik Jagran.',
      achievementsHi: 'CBSE एवं बिहार बोर्ड के जिला व राज्य टॉपर्स (सर्वोच्च 96.4%) के मार्गदर्शक। दैनिक जागरण द्वारा सम्मानित।'
    },

    institute: {
      offlineName: 'Chanakya Classes Bettiah',
      offlineNameHi: 'चाणक्य क्लासेज बेतिया',
      onlineName: 'Lycemit Education App',
      onlineNameHi: 'लाइसमिट ऑनलाइन एजुकेशन ऐप',
      address: 'Supriya Cinema Road, Bettiah, West Champaran, Bihar - 845438',
      addressHi: 'सुप्रिया सिनेमा रोड, बेतिया, पश्चिमी चंपारण, बिहार - 845438',
      landmark: 'Opposite Supriya Cinema, 5 mins from Bettiah Railway Station',
      landmarkHi: 'सुप्रिया सिनेमा के ठीक सामने, बेतिया रेलवे स्टेशन से मात्र 5 मिनट की दूरी पर'
    },

    timings: {
      morningBatches: '06:00 AM - 10:00 AM (Class 9th, 10th & Board Foundation)',
      morningBatchesHi: 'प्रातः 06:00 AM से 10:00 AM (कक्षा 9वीं, 10वीं और बोर्ड फाउंडेशन)',
      eveningBatches: '03:00 PM - 07:30 PM (Class 7th, 8th, 11th, 12th)',
      eveningBatchesHi: 'दोपहर 03:00 PM से 07:30 PM (कक्षा 7वीं, 8वीं, 11वीं, 12वीं)',
      sundayTests: '08:00 AM - 12:00 PM (Weekly Test Series & Special Doubts)',
      sundayTestsHi: 'सुबह 08:00 AM से 12:00 PM (वीकली टेस्ट सीरीज एवं स्पेशल डाउट क्लास)',
      officeHours: '07:00 AM - 08:00 PM (All 7 Days Open for Admission Inquiry)',
      officeHoursHi: 'सुबह 07:00 AM से रात 08:00 PM (एडमिशन व पूछताछ हेतु सातों दिन खुला)'
    },

    contacts: {
      admissionHelpline: '+91 82103 44415',
      supportWhatsApp: '+91 79797 24568',
      telegramChannel: '@msmanmit (2,413+ subscribers)',
      telegramDirect: '@msmanmit2003',
      telegramLinks: '@mslinks2021',
      youtube: '@Lycemit (9.61K+ subscribers)',
      email: 'contact@lycemit.com'
    },

    courses: [
      {
        id: 'class10',
        name: 'Class 10th Board Toppers Batch (CBSE & BSEB)',
        nameHi: 'कक्षा 10वीं बोर्ड टॉपर्स बैच (CBSE एवं बिहार बोर्ड)',
        mode: 'Hybrid (Offline Bettiah + Online Lycemit)',
        modeHi: 'हाइब्रिड (ऑफलाइन बेतिया कैंपस + ऑनलाइन लाइसमिट ऐप)',
        subjects: 'Mathematics, Science (Physics, Chemistry, Biology), SST, Hindi, English',
        subjectsHi: 'गणित, विज्ञान (भौतिकी, रसायन, जीव विज्ञान), सामाजिक विज्ञान, हिंदी, अंग्रेजी',
        highlights: 'Complete Syllabus + 10 Years Question Bank + Weekly OMR Tests + Fast Track Revision',
        highlightsHi: 'संपूर्ण सिलेबस कवरेज + पिछले 10 वर्षों के हल प्रश्न पत्र + साप्ताहिक OMR टेस्ट + फास्ट ट्रैक रिवीजन'
      },
      {
        id: 'class9',
        name: 'Class 9th Foundation Builder Batch',
        nameHi: 'कक्षा 9वीं फाउंडेशन बिल्डर बैच',
        mode: 'Offline & Online',
        modeHi: 'ऑफलाइन बेतिया एवं ऑनलाइन ऐप',
        subjects: 'Maths, Science, SST & English',
        subjectsHi: 'गणित, विज्ञान, सामाजिक विज्ञान एवं अंग्रेजी',
        highlights: 'Concept building for 10th Board, Olympiad & NTSE readiness',
        highlightsHi: '10वीं बोर्ड और प्रतियोगी परीक्षाओं हेतु बुनियादी अवधारणाओं की मजबूत तैयारी'
      },
      {
        id: 'class7_8',
        name: 'Classes 7th & 8th Junior Foundation',
        nameHi: 'कक्षा 7वीं एवं 8वीं जूनियर फाउंडेशन बैच',
        mode: 'Offline Bettiah Campus',
        modeHi: 'ऑफलाइन बेतिया कैंपस',
        subjects: 'Maths, Science & English Grammar',
        subjectsHi: 'गणित, सामान्य विज्ञान एवं अंग्रेजी व्याकरण',
        highlights: 'Strengthening basic fundamentals, mental maths, school topper preparation',
        highlightsHi: 'बेसिक गणित, विज्ञान एवं स्कूल परीक्षा में सर्वोच्च अंक प्राप्त करने की तैयारी'
      },
      {
        id: 'class11_12',
        name: 'Classes 11th & 12th Board + Competitive Guidance (Science)',
        nameHi: 'कक्षा 11वीं एवं 12वीं साइंस बोर्ड + गाइडेंस बैच',
        mode: 'Offline Bettiah & Lycemit App',
        modeHi: 'ऑफलाइन बेतिया कैंपस एवं लाइसमिट ऐप',
        subjects: 'Physics, Chemistry, Mathematics (PCM) / Biology (PCB)',
        subjectsHi: 'भौतिक विज्ञान, रसायन विज्ञान, गणित (PCM) / जीव विज्ञान (PCB)',
        highlights: 'Board Exam Mastery, NCERT line-by-line decoding, numerical mastery',
        highlightsHi: 'बोर्ड परीक्षा में 90%+ अंक, NCERT लाइन-दर-लाइन विश्लेषण, न्यूमेरिकल की विशेष तैयारी'
      },
      {
        id: 'fasttrack99',
        name: '₹99 Fast Track Online Crash Courses on Lycemit App',
        nameHi: 'मात्र ₹99 में फास्ट ट्रैक ऑनलाइन क्रैश कोर्स (लाइसमिट ऐप)',
        mode: 'Online on Lycemit Mobile App',
        modeHi: 'लाइसमिट मोबाइल ऐप पर ऑनलाइन लाइव एवं रिकॉर्डेड',
        subjects: 'Science Fast Track, Maths Fast Track, SST & Concept Maps',
        subjectsHi: 'साइंस फास्ट ट्रैक, मैथ्स फास्ट ट्रैक, सोशल साइंस एवं कॉन्सेप्ट मैप्स',
        highlights: 'Chapter-wise HD videos, downloadable PDF notes, formula sheets, mock tests',
        highlightsHi: 'चैप्टर-वाइज HD वीडियो लेक्चर्स, डाउनलोड करने योग्य PDF नोट्स, फॉर्मूला शीट्स, टेस्ट'
      }
    ],

    books: [
      {
        name: 'Science Fast Track Revision Book',
        nameHi: 'साइंस फास्ट ट्रैक रिवीजन बुक (Class 10th)',
        descHi: 'भौतिकी, रसायन और जीव विज्ञान के सभी मुख्य नियम, चित्र एवं महत्वपूर्ण प्रश्नोत्तर।'
      },
      {
        name: 'Maths Fast Track Formula & Solution Book',
        nameHi: 'मैथ्स फास्ट ट्रैक फॉर्मूला एवं सॉल्यूशन गाइड (Class 10th)',
        descHi: 'सभी थ्योरम, फॉर्मूले और बोर्ड परीक्षा के सबसे ज्यादा पूछे जाने वाले प्रश्नों का संकलन।'
      },
      {
        name: 'Social Science Quick Concept Guide',
        nameHi: 'सामाजिक विज्ञान क्विक कॉन्सेप्ट गाइड',
        descHi: 'इतिहास, भूगोल, नागरिक शास्त्र और अर्थशास्त्र का सरल व संक्षिप्त रिवीज़न।'
      },
      {
        name: 'Chanakya Concept Map Combo Pack',
        nameHi: 'चाणक्य कॉन्सेप्ट मैप कॉम्बो पैक',
        descHi: 'पूरे सिलेबस को विजुअल माइंड मैप्स और फ्लोचार्ट्स के जरिए 15 मिनट में रिवीज करने का कॉम्बो।'
      }
    ]
  };

  // ==================================================================
  // 3. ROBUST HINDI, HINGLISH & ENGLISH NLP ENGINE
  // ==================================================================
  var NLPEngine = (function () {
    // Specific Hindi grammatical & interrogative markers (Not standard English words)
    var PURE_HINDI_MARKERS = [
      'hai', 'hain', 'ho', 'kya', 'kaise', 'kaisa', 'kaisi', 'kahan', 'kaha', 'kidhar',
      'kab', 'kyun', 'kyu', 'kitna', 'kitni', 'kitne', 'paisa', 'paise', 'batao', 'bataye',
      'batayein', 'bataiye', 'boliye', 'chahiye', 'chahata', 'chahta', 'chahti', 'lena',
      'lene', 'kare', 'karein', 'karen', 'karo', 'karu', 'padhai', 'taiyari', 'tiyari',
      'daakhila', 'dakhila', 'shuru', 'namaste', 'pranam', 'pranaam', 'bhai', 'dost',
      'madad', 'kaun', 'kon', 'kiska', 'kiski', 'milega', 'milte', 'milta', 'padhate',
      'padhe', 'padhna', 'sikhaye', 'sikhe', 'kholna', 'khulta', 'aana', 'jaana',
      'baat', 'karna', 'karni', 'sun', 'bolo', 'ha', 'haan', 'nahi', 'theek', 'thik',
      'accha', 'acha', 'sahi', 'mujhe', 'humko', 'mera', 'meri', 'mere', 'apka', 'aapka',
      'sirji', 'pata', 'samay', 'vishy', 'vishay', 'par', 'mein', 'se', 'ko', 'ki', 'ka', 'ke'
    ];

    var hindiMarkerSet = {};
    for (var i = 0; i < PURE_HINDI_MARKERS.length; i++) {
      hindiMarkerSet[PURE_HINDI_MARKERS[i]] = true;
    }

    var ENGLISH_MARKERS = [
      'what', 'how', 'who', 'where', 'when', 'why', 'which', 'tell', 'show', 'please',
      'can', 'could', 'would', 'should', 'the', 'is', 'are', 'am', 'was', 'were', 'have',
      'has', 'had', 'do', 'does', 'did', 'for', 'about', 'from', 'with', 'your', 'my',
      'our', 'their', 'course', 'courses', 'admission', 'fee', 'fees', 'enroll', 'enrollment'
    ];
    var englishSet = {};
    for (var e = 0; e < ENGLISH_MARKERS.length; e++) {
      englishSet[ENGLISH_MARKERS[e]] = true;
    }

    function detectLanguage(text, currentSessionLang) {
      if (!text || !text.trim()) return currentSessionLang || CFG.defaultLang;

      // 1. If contains Devanagari script (\u0900 to \u097F), it is definitely Hindi
      var devanagariMatches = text.match(/[\u0900-\u097F]/g);
      if (devanagariMatches && devanagariMatches.length >= 1) {
        return 'hi';
      }

      var words = text.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(Boolean);
      var hindiMarkerHits = 0;
      var englishHits = 0;

      for (var w = 0; w < words.length; w++) {
        if (hindiMarkerSet[words[w]]) hindiMarkerHits++;
        if (englishSet[words[w]]) englishHits++;
      }

      // 2. Strong Hinglish presence -> Hindi
      if (hindiMarkerHits >= 1) {
        return 'hi';
      }

      // 3. Strong English presence without Hinglish -> English
      if (englishHits >= 2 && hindiMarkerHits === 0) {
        return 'en';
      }

      // 4. Default to current session preference
      return currentSessionLang || 'hi';
    }

    function tokenize(text) {
      if (!text) return [];
      var cleaned = text.toLowerCase().replace(/[^\w\s\u0900-\u097F]/g, ' ');
      return cleaned.split(/\s+/).filter(Boolean);
    }

    // 24 Deep Intent Definition Patterns
    var INTENT_DEFINITIONS = [
      {
        id: 'admission',
        patterns: [
          /admission/i, /दाखिला/i, /नामांकन/i, /प्रवेश/i, /enroll/i, /register/i, /registration/i,
          /naam\s*likhwana/i, /join\s*kare/i, /kaise\s*jude/i, /admission\s*lena/i, /admission\s*kaise/i,
          /how\s*to\s*join/i, /how\s*to\s*enroll/i, /take\s*admission/i, /seat\s*book/i, /offline\s*admission/i
        ],
        keywords: ['admission', 'enroll', 'join', 'register', 'दाखिला', 'नामांकन', 'प्रवेश', 'रजिस्ट्रेशन']
      },
      {
        id: 'fee',
        patterns: [
          /fee/i, /fees/i, /फीस/i, /शुल्क/i, /खर्च/i, /पैसा/i, /paise/i, /kitna\s*paisa/i, /cost/i,
          /price/i, /kitna\s*lagega/i, /charge/i, /rupees/i, /rupaye/i, /kya\s*fees/i, /fees\s*kitni/i,
          /kitna\s*fee/i, /99\s*rs/i, /₹99/i, /discount/i, /instalment/i, /installment/i
        ],
        keywords: ['fee', 'fees', 'cost', 'price', 'फीस', 'शुल्क', 'पैसा', 'रुपये', 'खर्च']
      },
      {
        id: 'timing',
        patterns: [
          /timing/i, /time/i, /समय/i, /टाइम/i, /schedule/i, /timetable/i, /time\s*table/i, /kab\s*khulta/i,
          /kab\s*se\s*kab/i, /subah/i, /sham/i, /shaam/i, /morning/i, /evening/i, /kitne\s*baje/i,
          /hours/i, /open/i, /close/i, /sunday\s*open/i
        ],
        keywords: ['timing', 'time', 'schedule', 'समय', 'टाइम', 'शेड्यूल', 'टाइमटेबल']
      },
      {
        id: 'location',
        patterns: [
          /location/i, /address/i, /पता/i, /कहाँ/i, /कहां/i, /लोकेशन/i, /where/i, /located/i,
          /supriya\s*cinema/i, /bettiah/i, /betiah/i, /direction/i, /map/i, /kaise\s*pahuche/i,
          /kaise\s*jaye/i, /station\s*se/i, /rasta/i, /landmark/i
        ],
        keywords: ['location', 'address', 'where', 'पता', 'कहाँ', 'लोकेशन', 'मैप', 'बेतिया', 'सुप्रिया']
      },
      {
        id: 'founder',
        patterns: [
          /manmit/i, /manmit\s*sir/i, /manmeet/i, /मनमीत/i, /founder/i, /director/i, /संस्थापक/i,
          /निदेशक/i, /who\s*is\s*manmit/i, /ms\s*manmit/i, /sir\s*kaun/i, /about\s*sir/i,
          /sir\s*ke\s*bare/i, /owner/i, /head/i
        ],
        keywords: ['manmit', 'director', 'founder', 'मनमीत', 'डायरेक्टर', 'संस्थापक']
      },
      {
        id: 'contact',
        patterns: [
          /contact/i, /phone/i, /call/i, /mobile/i, /number/i, /हेल्पलाइन/i, /संपर्क/i, /कॉल/i,
          /नंबर/i, /phone\s*number/i, /sir\s*ka\s*number/i, /baat\s*karni/i, /call\s*karna/i,
          /whatsapp/i, /व्हाट्सएप/i, /helpline/i, /inquiry/i
        ],
        keywords: ['contact', 'call', 'phone', 'number', 'whatsapp', 'संपर्क', 'कॉल', 'नंबर', 'फोन']
      },
      {
        id: 'notes',
        patterns: [
          /note/i, /notes/i, /नोट्स/i, /pdf/i, /study\s*material/i, /स्टडी\s*मैटेरियल/i, /formula/i,
          /ncert\s*solution/i, /free\s*notes/i, /download\s*notes/i, /notes\s*chahiye/i, /pdf\s*kahan/i
        ],
        keywords: ['notes', 'pdf', 'material', 'नोट्स', 'स्टडी', 'मैटेरियल', 'पीडीएफ']
      },
      {
        id: 'books',
        patterns: [
          /book/i, /books/i, /किताब/i, /पुस्तक/i, /fast\s*track\s*book/i, /concept\s*map/i,
          /book\s*kaise/i, /book\s*price/i, /combo/i, /kitab\s*kharidna/i
        ],
        keywords: ['book', 'books', 'किताब', 'पुस्तक', 'कॉन्सेप्ट', 'मैप']
      },
      {
        id: 'telegram',
        patterns: [
          /telegram/i, /टेलीग्राम/i, /msmanmit\s*telegram/i, /channel\s*link/i, /group\s*link/i,
          /qr\s*scanner/i, /telegram\s*group/i
        ],
        keywords: ['telegram', 'टेलीग्राम', 'चैनल']
      },
      {
        id: 'youtube',
        patterns: [
          /youtube/i, /यूट्यूब/i, /video/i, /lecture/i, /live\s*class/i, /video\s*dekhein/i,
          /free\s*video/i, /lycemit\s*youtube/i
        ],
        keywords: ['youtube', 'video', 'यूट्यूब', 'वीडियो', 'लेक्चर']
      },
      {
        id: 'app',
        patterns: [
          /app/i, /ऐप/i, /lycemit\s*app/i, /play\s*store/i, /download\s*app/i, /app\s*download/i,
          /mobile\s*app/i, /application/i, /android/i
        ],
        keywords: ['app', 'playstore', 'download', 'ऐप', 'एप्लिकेशन', 'डाउनलोड']
      },
      {
        id: 'tests',
        patterns: [
          /test/i, /टेस्ट/i, /exam/i, /परीक्षा/i, /weekly\s*test/i, /mock\s*test/i, /test\s*series/i,
          /omr/i, /test\s*kab/i
        ],
        keywords: ['test', 'exam', 'टेस्ट', 'परीक्षा', 'वीकली']
      },
      {
        id: 'results',
        patterns: [
          /result/i, /रिजल्ट/i, /topper/i, /टॉपर/i, /marks/i, /percentage/i, /dainik\s*jagran/i,
          /score/i, /highest/i, /96\.4/i, /success/i
        ],
        keywords: ['result', 'topper', 'रिजल्ट', 'टॉपर', 'अंक']
      },
      {
        id: 'class_10',
        patterns: [
          /class\s*10/i, /10th/i, /दसवीं/i, /10वीं/i, /tenth/i, /matric/i, /मैट्रिक/i,
          /10th\s*board/i, /class\s*ten/i
        ],
        keywords: ['10', '10th', 'दसवीं', 'tenth', 'मैट्रिक']
      },
      {
        id: 'class_9',
        patterns: [
          /class\s*9/i, /9th/i, /नौवीं/i, /9वीं/i, /ninth/i, /class\s*nine/i
        ],
        keywords: ['9', '9th', 'नौवीं', 'ninth']
      },
      {
        id: 'class_7_8',
        patterns: [
          /class\s*7/i, /class\s*8/i, /7th/i, /8th/i, /सातवीं/i, /आठवीं/i, /junior/i,
          /seventh/i, /eighth/i
        ],
        keywords: ['7', '8', '7th', '8th', 'सातवीं', 'आठवीं']
      },
      {
        id: 'class_11_12',
        patterns: [
          /class\s*11/i, /class\s*12/i, /11th/i, /12th/i, /ग्यारहवीं/i, /बारहवीं/i, /inter/i,
          /inter\s*science/i, /pcm/i, /pcb/i, /twelfth/i, /eleventh/i
        ],
        keywords: ['11', '12', '11th', '12th', 'ग्यारहवीं', 'बारहवीं', 'pcm', 'pcb']
      },
      {
        id: 'hostel',
        patterns: [
          /hostel/i, /हॉस्टल/i, /rehne\s*ki\s*jagah/i, /pg/i, /room\s*milega/i, /bahar\s*ke\s*student/i,
          /stay/i, /lodge/i
        ],
        keywords: ['hostel', 'हॉस्टल', 'रहने', 'पीजी']
      },
      {
        id: 'subjects',
        patterns: [
          /subject/i, /विषय/i, /kya\s*padhate/i, /kaun\s*sa\s*subject/i, /maths/i, /science/i,
          /physics/i, /chemistry/i, /biology/i, /sst/i, /english/i
        ],
        keywords: ['subject', 'subjects', 'विषय', 'गणित', 'विज्ञान', 'साइंस', 'मैथ्स']
      },
      {
        id: 'courses',
        patterns: [
          /course/i, /courses/i, /कोर्स/i, /batch/i, /batches/i, /बैच/i, /classes/i,
          /all\s*courses/i, /kya\s*kya\s*hai/i, /padhai/i
        ],
        keywords: ['course', 'courses', 'batch', 'batches', 'कोर्स', 'बैच']
      },
      {
        id: 'greeting',
        patterns: [
          /namaste/i, /नमस्ते/i, /pranam/i, /प्रणाम/i, /hello/i, /hi\b/i, /hey\b/i, /radhe/i,
          /ram\s*ram/i, /good\s*morning/i, /good\s*evening/i, /namaskar/i, /नमस्कार/i,
          /kaise\s*ho/i, /kya\s*haal/i, /kaise\s*hai/i
        ],
        keywords: ['hello', 'hi', 'hey', 'namaste', 'pranam', 'नमस्ते', 'प्रणाम', 'नमस्कार']
      },
      {
        id: 'thanks',
        patterns: [
          /thank/i, /thanks/i, /धन्यवाद/i, /शुक्रिया/i, /shukriya/i, /dhanyawad/i, /helpful/i,
          /bahut\s*accha/i, /badhiya/i, /great/i, /nice/i
        ],
        keywords: ['thank', 'thanks', 'धन्यवाद', 'शुक्रिया']
      },
      {
        id: 'farewell',
        patterns: [
          /bye/i, /goodbye/i, /अलविदा/i, /by\b/i, /see\s*you/i, /chalta\s*hu/i, /fir\s*milenge/i,
          /good\s*night/i, /shubh\s*ratri/i
        ],
        keywords: ['bye', 'goodbye', 'अलविदा', 'बाय']
      },
      {
        id: 'affirmation',
        patterns: [
          /^haan\b/i, /^ha\b/i, /^yes\b/i, /^theek\b/i, /^thik\b/i, /^ok\b/i, /^okay\b/i,
          /^sahi\b/i, /^accha\b/i, /^acha\b/i, /^sure\b/i, /हाँ/i, /ठीक/i
        ],
        keywords: ['haan', 'yes', 'ok', 'theek', 'हाँ', 'ठीक']
      }
    ];

    function matchIntent(text, lang) {
      var lower = text.toLowerCase().trim();
      var tokens = tokenize(text);
      var scores = {};

      for (var i = 0; i < INTENT_DEFINITIONS.length; i++) {
        var def = INTENT_DEFINITIONS[i];
        var score = 0;

        // Check regex patterns (Strongest match: +10 each)
        for (var p = 0; p < def.patterns.length; p++) {
          if (def.patterns[p].test(lower)) {
            score += 10;
          }
        }

        // Check keyword overlap (+3 each)
        for (var k = 0; k < def.keywords.length; k++) {
          var kw = def.keywords[k].toLowerCase();
          if (lower.indexOf(kw) !== -1) {
            score += 4;
          }
          for (var t = 0; t < tokens.length; t++) {
            if (tokens[t] === kw) {
              score += 3;
            }
          }
        }

        if (score > 0) {
          scores[def.id] = score;
        }
      }

      var bestIntent = null;
      var maxScore = 0;
      for (var id in scores) {
        if (scores[id] > maxScore) {
          maxScore = scores[id];
          bestIntent = id;
        }
      }

      return {
        intent: bestIntent,
        score: maxScore,
        lang: lang
      };
    }

    return {
      detectLanguage: detectLanguage,
      tokenize: tokenize,
      matchIntent: matchIntent
    };
  })();

  // ==================================================================
  // 4. ACTION BUILDER & LINK CREATOR
  // ==================================================================
  var ActionBuilder = {
    callHelpline: function () {
      return {
        type: 'call',
        label: '📞 कॉल करें: ' + CFG.phone,
        labelEn: '📞 Call: ' + CFG.phone,
        url: 'tel:' + CFG.phone,
        cls: 'ai-mitra-action-call'
      };
    },
    openWhatsApp: function () {
      return {
        type: 'whatsapp',
        label: '💬 व्हाट्सएप पर सीधे पूछें',
        labelEn: '💬 Ask on WhatsApp',
        url: 'https://wa.me/' + CFG.whatsapp + '?text=' + encodeURIComponent('नमस्ते मनमीत सर, मुझे चाणक्य क्लासेज / लाइसमिट में एडमिशन के बारे में जानकारी चाहिए।'),
        cls: 'ai-mitra-action-whatsapp'
      };
    },
    openTelegram: function () {
      return {
        type: 'telegram',
        label: '✈️ टेलीग्राम चैनल @msmanmit जॉइन करें',
        labelEn: '✈️ Join Telegram @msmanmit',
        url: 'https://t.me/' + CFG.telegram,
        cls: 'ai-mitra-action-telegram'
      };
    },
    openMaps: function () {
      return {
        type: 'maps',
        label: '📍 गूगल मैप्स पर कोचिंग देखें (सुप्रिया सिनेमा रोड)',
        labelEn: '📍 View Campus on Google Maps',
        url: CFG.mapsUrl,
        cls: 'ai-mitra-action-maps'
      };
    },
    downloadApp: function () {
      return {
        type: 'app',
        label: '📱 लाइसमिट ऐप डाउनलोड करें (Play Store)',
        labelEn: '📱 Download Lycemit App (Play Store)',
        url: CFG.playStore,
        cls: 'ai-mitra-action-primary'
      };
    },
    viewCourses: function () {
      return {
        type: 'link',
        label: '🎓 सभी कोर्सेज व फीस देखें',
        labelEn: '🎓 View All Courses & Fees',
        url: '#courses',
        cls: 'ai-mitra-action-primary'
      };
    }
  };

  // ==================================================================
  // 5. INTENT RESPONSE GENERATOR (RICH HINDI & ENGLISH)
  // ==================================================================
  function generateResponse(intent, rawText, lang) {
    var isHi = lang === 'hi';
    var text = '';
    var actions = [];
    var chips = [];

    switch (intent) {
      case 'greeting':
        text = isHi
          ? 'नमस्ते! 🙏 मैं **LYCEMIT AI मित्र** हूँ — चाणक्य क्लासेज बेतिया और लाइसमिट का आपका आधिकारिक AI अध्ययन मित्र!\n\nमैं बेतिया ऑफलाइन कोचिंग, ऑनलाइन कोर्सेज, क्लास 7वीं से 12वीं की पढ़ाई, फीस, नोट्स और मनमीत सर के मार्गदर्शन से जुड़े आपके हर सवाल का तुरंत जवाब दे सकता हूँ।\n\n💡 आप कुछ भी पूछ सकते हैं या नीचे दिए विकल्पों में से चुनें:'
          : "Namaste! 🙏 I am **LYCEMIT AI Mitra** — the official AI educational assistant of Chanakya Classes Bettiah & Lycemit Online.\n\nI can help you with Bettiah offline admissions, ₹99 online courses, Class 7th to 12th board preparation, fees, timings, notes, and direct helpline support.\n\n💡 Ask me anything in Hindi or English, or tap the suggestions below:";
        chips = isHi
          ? ['कोर्सेज व फीस', 'बेतिया एडमिशन', 'मनमीत सर कौन हैं', 'फ्री नोट्स डाउनलोड', 'टाइमिंग व पता', 'कॉल हेल्पलाइन']
          : ['Courses & Fees', 'Bettiah Admission', 'Who is Manmit Sir', 'Free Notes', 'Timing & Address', 'Call Helpline'];
        actions.push(ActionBuilder.viewCourses());
        actions.push(ActionBuilder.callHelpline());
        break;

      case 'admission':
        text = isHi
          ? '🏫 **चाणक्य क्लासेज बेतिया में एडमिशन प्रक्रिया:**\n\n' +
            '1. **ऑफलाइन एडमिशन (बेतिया कैंपस)**:\n' +
            '• सुप्रिया सिनेमा रोड, बेतिया स्थित हमारे संस्थान पर आएं।\n' +
            '• साथ लाएं: 2 पासपोर्ट साइज फोटो एवं पिछले वर्ष की मार्कशीट की कॉपी।\n' +
            '• **2 दिन का फ्री ट्रायल क्लास** उपलब्ध है!\n\n' +
            '2. **ऑनलाइन एडमिशन (लाइसमिट ऐप)**:\n' +
            '• Google Play Store से **Lycemit** ऐप डाउनलोड करें।\n' +
            '• मात्र ₹99 से शुरू होने वाले Fast Track बोर्ड कोर्सेज में तुरंत इनरोल करें।\n\n' +
            '📞 सीट सुरक्षित करने हेतु अभी हमारे एडमिशन हेल्पडेस्क पर कॉल करें:'
          : '🏫 **Admission Process for Chanakya Classes & Lycemit:**\n\n' +
            '1. **Offline Campus Admission (Bettiah)**:\n' +
            '• Visit our campus at Supriya Cinema Road, Bettiah.\n' +
            '• Requirements: 2 Passport Photos & copy of last mark sheet.\n' +
            '• Enjoy **2 Days Free Demo Classes** before confirming admission!\n\n' +
            '2. **Online Admission (Lycemit App)**:\n' +
            '• Download the **Lycemit** app from Google Play Store.\n' +
            '• Enroll in Fast Track courses starting at just ₹99.\n\n' +
            '📞 Call our admission helpline directly:';
        chips = isHi
          ? ['फीस कितनी है', 'क्लास टाइमिंग', 'कोचिंग का पता', 'व्हाट्सएप पर पूछें']
          : ['What are the fees', 'Batch Timings', 'Campus Address', 'Ask on WhatsApp'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openWhatsApp());
        actions.push(ActionBuilder.openMaps());
        break;

      case 'fee':
        text = isHi
          ? '💰 **चाणक्य क्लासेज एवं लाइसमिट की फीस संरचना:**\n\n' +
            '• 🏫 **ऑफलाइन कोचिंग (बेतिया कैंपस)**: पूरे पश्चिमी चंपारण में सबसे किफायती एवं पारदर्शी फीस। मासिक व आसान किश्तों (Installments) की सुविधा उपलब्ध है।\n' +
            '• 🌐 **लाइसमिट ऑनलाइन ऐप कोर्सेज**: मात्र **₹99** से शुरू (Fast Track Crash Course, Concept Maps & Mock Test Series)।\n' +
            '• 🎁 **मुफ्त सुविधाएं**: 2 दिन का फ्री ट्रायल, फ्री चैप्टर-वाइज नोट्स PDF, और संडे टेस्ट सीरीज।\n\n' +
            '📌 अपनी विशिष्ट कक्षा (7वीं, 8वीं, 9वीं, 10वीं या 11वीं-12वीं) की सटीक फीस जानने हेतु अभी हेल्पलाइन पर संपर्क करें:'
          : '💰 **Fee Structure for Chanakya Classes & Lycemit:**\n\n' +
            '• 🏫 **Offline Coaching (Bettiah Campus)**: Highly affordable and transparent fees in West Champaran, with easy monthly installment options.\n' +
            '• 🌐 **Lycemit Online Courses**: Starting at just **₹99** for complete Fast Track Board Crash Courses.\n' +
            '• 🎁 **Free Inclusions**: 2-day demo class, free chapter-wise PDF notes, weekly Sunday test series.\n\n' +
            '📌 For exact batch fees for your class, call our helpline directly:';
        chips = isHi
          ? ['एडमिशन कैसे लें', '₹99 कोर्सेज', 'क्लास 10वीं फीस', 'फोन नंबर']
          : ['How to Enroll', '₹99 Courses', 'Class 10th Fee', 'Phone Number'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.viewCourses());
        actions.push(ActionBuilder.openWhatsApp());
        break;

      case 'timing':
        text = isHi
          ? '⏰ **चाणक्य क्लासेज बेतिया — बैच एवं ऑफिस समय सारिणी:**\n\n' +
            '🌅 **सुबह का सत्र (Morning Session)**:\n' +
            '• प्रातः 06:00 AM से 10:00 AM (कक्षा 9वीं, 10वीं और बोर्ड स्पेशल बैच)\n\n' +
            '🌇 **शाम का सत्र (Evening Session)**:\n' +
            '• दोपहर 03:00 PM से 07:30 PM (कक्षा 7वीं, 8वीं, 11वीं और 12वीं साइंस)\n\n' +
            '🗓️ **रविवार विशेष (Sunday)**:\n' +
            '• सुबह 08:00 AM से 12:00 PM — वीकली टेस्ट सीरीज एवं 1-on-1 डाउट क्लास।\n\n' +
            '🏢 **ऑफिस पूछताछ समय**: सुबह 07:00 AM से रात 08:00 PM तक (सातों दिन)।'
          : '⏰ **Chanakya Classes Bettiah — Batch & Office Timetable:**\n\n' +
            '🌅 **Morning Session**:\n' +
            '• 06:00 AM - 10:00 AM (Class 9th, 10th & Board Foundation)\n\n' +
            '🌇 **Evening Session**:\n' +
            '• 03:00 PM - 07:30 PM (Class 7th, 8th, 11th & 12th Science)\n\n' +
            '🗓️ **Sunday Special**:\n' +
            '• 08:00 AM - 12:00 PM — Weekly OMR Test Series & Individual Doubt Clearing.\n\n' +
            '🏢 **Office Inquiry Hours**: 07:00 AM - 08:00 PM (All 7 Days).';
        chips = isHi
          ? ['कोचिंग का पता', 'एडमिशन कैसे लें', 'मनमीत सर से बात', 'कोर्सेज']
          : ['Campus Address', 'How to Enroll', 'Talk to Sir', 'Courses'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openMaps());
        break;

      case 'location':
        text = isHi
          ? '📍 **चाणक्य क्लासेज बेतिया का सटीक पता:**\n\n' +
            '**सुप्रिया सिनेमा रोड, बेतिया, पश्चिमी चंपारण, बिहार - 845438**\n' +
            '*(Supriya Cinema Road, Bettiah, Bihar)*\n\n' +
            '🧭 **लैंडमार्क व पहुँचने का रास्ता:**\n' +
            '• सुप्रिया सिनेमा हॉल के ठीक सामने मुख्य मार्ग पर स्थित है।\n' +
            '• बेतिया रेलवे स्टेशन व बस स्टैंड से केवल 5 मिनट की ई-रिक्शा दूरी।\n\n' +
            '🗺️ नीचे दिए बटन पर क्लिक करके सीधे गूगल मैप्स पर नेविगेशन खोलें:'
          : '📍 **Exact Address of Chanakya Classes Bettiah:**\n\n' +
            '**Supriya Cinema Road, Bettiah, West Champaran, Bihar - 845438**\n\n' +
            '🧭 **Landmarks & How to Reach:**\n' +
            '• Located directly opposite Supriya Cinema Hall on the main road.\n' +
            '• Just a 5-minute e-rickshaw ride from Bettiah Railway Station & Bus Stand.\n\n' +
            '🗺️ Tap below to open live turn-by-turn navigation on Google Maps:';
        chips = isHi
          ? ['बैच टाइमिंग', 'एडमिशन हेल्पलाइन', 'हॉस्टल सुविधा', 'कोर्सेज']
          : ['Batch Timings', 'Admission Helpline', 'Hostel Facility', 'Courses'];
        actions.push(ActionBuilder.openMaps());
        actions.push(ActionBuilder.callHelpline());
        break;

      case 'founder':
        text = isHi
          ? '👨‍🏫 **मनमीत श्रीवास्तव (MS Manmit) के बारे में:**\n\n' +
            '• **संस्थापक एवं निदेशक**: चाणक्य क्लासेज बेतिया और लाइसमिट ऑनलाइन के डायरेक्टर।\n' +
            '• **10+ वर्षों का अनुभव**: गणित (Mathematics) एवं विज्ञान (Science) को रोचक, सरल और अवधारणात्मक तरीके से पढ़ाने के लिए विख्यात।\n' +
            '• **टॉपर्स के मार्गदर्शक**: CBSE और बिहार बोर्ड में जिला एवं राज्य स्तर पर 96.4% और 95.8% जैसे ऐतिहासिक अंक दिलाने वाले गुरु।\n' +
            '• **दैनिक जागरण द्वारा सम्मानित**: चंपारण में शिक्षा के क्षेत्र में उत्कृष्ट योगदान हेतु सम्मानित।\n\n' +
            '📞 मनमीत सर से डायरेक्ट गाइडेंस व ऑफलाइन काउंसलिंग हेतु हेल्पलाइन पर संपर्क करें:'
          : '👨‍🏫 **About Manmit Shrivastva (MS Manmit):**\n\n' +
            '• **Director & Founder**: Founder of Chanakya Classes Bettiah and Lycemit Online Portal.\n' +
            '• **10+ Years of Dedication**: Renowned educator known for making Mathematics & Science intuitive, visual, and fun.\n' +
            '• **Proven Topper Producer**: Mentored state & district board toppers with records like 96.4% and 95.8%.\n' +
            '• **Honored by Dainik Jagran**: Recognized for transforming education in Champaran.\n\n' +
            '📞 Contact the helpline to schedule a direct mentorship session with Manmit Sir:';
        chips = isHi
          ? ['मनमीत सर का नंबर', 'यूट्यूब चैनल', 'टेलीग्राम @msmanmit', 'कोर्सेज']
          : ['Sir Phone Number', 'YouTube Channel', 'Telegram @msmanmit', 'Courses'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openTelegram());
        actions.push(ActionBuilder.openWhatsApp());
        break;

      case 'contact':
        text = isHi
          ? '📞 **चाणक्य क्लासेज व लाइसमिट आधिकारिक संपर्क सूत्र:**\n\n' +
            '• 📱 **एडमिशन हेल्पलाइन 1**: ' + CFG.phone + ' (कॉल व इंक्वायरी)\n' +
            '• 💬 **व्हाट्सएप सपोर्ट 2**: +91 ' + CFG.whatsapp + ' (कोर्स एक्सेस व नोट्स)\n' +
            '• ✈️ **टेलीग्राम चैनल**: @msmanmit (2,413+ छात्र जुड़े हैं)\n' +
            '• 📍 **कैंपस पता**: सुप्रिया सिनेमा रोड, बेतिया, बिहार 845438\n\n' +
            '👇 तुरंत बात करने के लिए नीचे दिए गए बटन पर टैप करें:'
          : '📞 **Chanakya Classes & Lycemit Official Helplines:**\n\n' +
            '• 📱 **Admission Helpline 1**: ' + CFG.phone + ' (Call & Inquiry)\n' +
            '• 💬 **WhatsApp Support 2**: +91 ' + CFG.whatsapp + ' (Chat & Course Access)\n' +
            '• ✈️ **Telegram Channel**: @msmanmit (2,413+ active members)\n' +
            '• 📍 **Campus Address**: Supriya Cinema Road, Bettiah, Bihar 845438\n\n' +
            '👇 Tap the buttons below to connect instantly:';
        chips = isHi
          ? ['व्हाट्सएप करें', 'टेलीग्राम जॉइन करें', 'एडमिशन कैसे लें', 'पता देखें']
          : ['WhatsApp Us', 'Join Telegram', 'How to Enroll', 'View Address'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openWhatsApp());
        actions.push(ActionBuilder.openTelegram());
        break;

      case 'notes':
        text = isHi
          ? '📚 **फ्री स्टडी मैटेरियल व नोट्स डाउनलोड:**\n\n' +
            '• **लाइसमिट ऐप पर**: कक्षा 7वीं से 12वीं तक के सभी विषयों के NCERT समाधान, चैप्टर-वाइज PDF नोट्स, और फॉर्मूला शीट्स पूर्णतः निःशुल्क उपलब्ध हैं।\n' +
            '• **टेलीग्राम चैनल (@msmanmit)** पर डेली क्विज़, महत्वपूर्ण प्रश्न एवं असाइनमेंट PDF शेयर किए जाते हैं।\n' +
            '• **ऑफलाइन छात्रों को**: प्रिंटेड चाणक्य कॉन्सेप्ट बुकलेट्स व क्वेश्चन बैंक दिए जाते हैं।\n\n' +
            '📲 अभी लाइसमिट ऐप डाउनलोड करें या टेलीग्राम चैनल से जुड़ें:'
          : '📚 **Free Study Material & Notes Download:**\n\n' +
            '• **On Lycemit App**: Chapter-wise PDF notes, NCERT solutions, and formula sheets for Classes 7th to 12th are available for free download.\n' +
            '• **On Telegram (@msmanmit)**: Daily quizzes, important exam questions, and sample papers are shared regularly.\n' +
            '• **For Bettiah Offline Students**: Comprehensive printed Chanakya concept booklets and question banks are provided.\n\n' +
            '📲 Download the app or join Telegram now:';
        chips = isHi
          ? ['ऐप डाउनलोड करें', 'टेलीग्राम नोट्स', 'चाणक्य किताबें', 'क्लास 10वीं नोट्स']
          : ['Download App', 'Telegram Notes', 'Chanakya Books', 'Class 10th Notes'];
        actions.push(ActionBuilder.downloadApp());
        actions.push(ActionBuilder.openTelegram());
        break;

      case 'books':
        text = isHi
          ? '📖 **चाणक्य फास्ट ट्रैक बुक्स एवं कॉन्सेप्ट मैप्स:**\n\n' +
            '1. **साइंस फास्ट ट्रैक बुक** — महत्वपूर्ण सूत्र, चित्र, और बोर्ड प्रश्नोत्तरी।\n' +
            '2. **मैथ्स फास्ट ट्रैक बुक** — सभी प्रमेय, फॉर्मूले और सॉल्व्ड एग्जांपल्स।\n' +
            '3. **सोशल साइंस क्विक गाइड** — संक्षिप्त माइंड मैप्स और तथ्य।\n' +
            '4. **कॉन्सेप्ट मैप कॉम्बो** — पूरे सिलेबस को 15 मिनट में रिवीज करने का मास्टर कॉम्बो।\n\n' +
            '📦 यह किताबें बेतिया कैंपस में उपलब्ध हैं एवं डाक द्वारा पूरे भारत में मंगवाई जा सकती हैं। ऑर्डर हेतु संपर्क करें:'
          : '📖 **Chanakya Fast Track Books & Concept Maps:**\n\n' +
            '1. **Science Fast Track Book** — Formulas, diagrams, and board exam Q&As.\n' +
            '2. **Maths Fast Track Guide** — Complete theorems, formulas & solved questions.\n' +
            '3. **Social Science Quick Guide** — Visual mind maps and key dates.\n' +
            '4. **Concept Map Combo** — The ultimate 15-minute quick revision pack.\n\n' +
            '📦 Available directly at Bettiah campus or by home delivery. Inquire below:';
        chips = isHi
          ? ['किताब ऑर्डर करें', 'कीमत जानें', 'नोट्स डाउनलोड', 'कॉल हेल्पलाइन']
          : ['Order Books', 'Know Book Price', 'Download Notes', 'Call Helpline'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openWhatsApp());
        break;

      case 'telegram':
        text = isHi
          ? '✈️ **चाणक्य क्लासेज व लाइसमिट का ऑफिशियल टेलीग्राम चैनल:**\n\n' +
            '• **ऑफिशियल चैनल**: **@msmanmit** (2,413+ छात्र जुड़े हैं)\n' +
            '• **डायरेक्ट मेंटर अकाउंट**: **@msmanmit2003** (मनमीत सर से सवाल पूछें)\n' +
            '• **ऑफिशियल लिंक डायरेक्टरी**: **@mslinks2021**\n\n' +
            '💡 टेलीग्राम पर आपको फ्री टेस्ट PDF, क्लास नोट्स, लाइव क्लास अपडेट और परीक्षा के महत्वपूर्ण टिप्स मिलते हैं।\n\n' +
            '👇 अभी एक क्लिक में टेलीग्राम से जुड़ें:'
          : '✈️ **Official Telegram Community of Lycemit & Chanakya Classes:**\n\n' +
            '• **Main Channel**: **@msmanmit** (2,413+ subscribers)\n' +
            '• **Direct Mentor Account**: **@msmanmit2003** (Ask Manmit Sir directly)\n' +
            '• **Links Directory**: **@mslinks2021**\n\n' +
            '💡 Get free test papers, PDF notes, class schedules, and direct mentor updates.\n\n' +
            '👇 Tap below to join instantly:';
        chips = isHi
          ? ['व्हाट्सएप ग्रुप', 'यूट्यूब चैनल', 'ऐप डाउनलोड', 'हेल्पलाइन']
          : ['WhatsApp Group', 'YouTube Channel', 'Download App', 'Helpline'];
        actions.push(ActionBuilder.openTelegram());
        break;

      case 'youtube':
        text = isHi
          ? '▶️ **लाइसमिट और मनमीत सर का ऑफिशियल यूट्यूब चैनल:**\n\n' +
            '• **चैनल नाम**: **@Lycemit** (9.61K+ सब्सक्राइबर्स)\n' +
            '• यहां आपको मिलते हैं: फ्री वीडियो लेक्चर्स, कॉन्सेप्ट एक्सप्लेनेशन, बोर्ड एग्जाम टिप्स, और बेतिया कैंपस के लाइव प्रोग्राम व सेलिब्रेशन (जैसे *मारी छोरियां फेस्ट*)।\n\n' +
            '📺 हमारे यूट्यूब चैनल पर जाएं और फ्री में पढ़ना शुरू करें:'
          : '▶️ **Official YouTube Channel of Lycemit & Manmit Sir:**\n\n' +
            '• **Channel**: **@Lycemit** (9.61K+ subscribers)\n' +
            '• Features: Free video lectures, animated concept explainers, board strategy sessions, and campus festival highlights (like the *Mari Chooriyan Fest*).\n\n' +
            '📺 Check out our official YouTube channel:';
        chips = isHi
          ? ['टेलीग्राम चैनल', 'लाइसमिट ऐप', 'कोर्सेज देखें', 'कॉल हेल्पलाइन']
          : ['Telegram Channel', 'Lycemit App', 'View Courses', 'Call Helpline'];
        actions.push({
          type: 'youtube',
          label: '▶️ @Lycemit यूट्यूब चैनल खोलें (9.61K)',
          labelEn: '▶️ Open @Lycemit on YouTube',
          url: 'https://www.youtube.com/@Lycemit',
          cls: 'ai-mitra-action-primary'
        });
        break;

      case 'app':
        text = isHi
          ? '📱 **लाइसमिट (Lycemit) ऑनलाइन एजुकेशन ऐप:**\n\n' +
            '• **गूगल प्ले स्टोर पर उपलब्ध**: क्लास 7वीं से 12वीं तक के सभी छात्रों के लिए।\n' +
            '• **मुख्य विशेषताएं**:\n' +
            '  1. लाइव एवं रिकॉर्डेड HD क्लासेस\n' +
            '  2. फ्री डाउनलोड करने योग्य PDF नोट्स\n' +
            '  3. साप्ताहिक ऑनलाइन टेस्ट सीरीज एवं तुरंत परिणाम\n' +
            '  4. ₹99 में फास्ट ट्रैक क्रैश कोर्सेज\n' +
            '  5. ऑफलाइन वीडियो डाउनलोड फीचर (कम इंटरनेट में भी पढ़ाई)\n\n' +
            '👇 अभी प्ले स्टोर से डाउनलोड करें:'
          : '📱 **Lycemit Online Learning Mobile App:**\n\n' +
            '• **Available on Google Play Store** for Classes 7th to 12th.\n' +
            '• **Key Features**:\n' +
            '  1. Live & Recorded HD video lectures\n' +
            '  2. Free downloadable chapter notes & formula sheets\n' +
            '  3. Weekly online test series with instant ranks\n' +
            '  4. Fast Track Crash Courses starting at ₹99\n' +
            '  5. Offline video saving for low-data studying\n\n' +
            '👇 Tap below to get it on Google Play:';
        chips = isHi
          ? ['₹99 कोर्सेज', 'फ्री नोट्स', 'एडमिशन हेल्पलाइन', 'व्हाट्सएप']
          : ['₹99 Courses', 'Free Notes', 'Admission Helpline', 'WhatsApp'];
        actions.push(ActionBuilder.downloadApp());
        actions.push(ActionBuilder.viewCourses());
        break;

      case 'tests':
        text = isHi
          ? '📝 **चाणक्य वीकली टेस्ट सीरीज एवं असेसमेंट:**\n\n' +
            '• **ऑफलाइन टेस्ट (बेतिया कैंपस)**: प्रत्येक रविवार को बोर्ड परीक्षा पैटर्न पर OMR एवं सब्जेक्टिव टेस्ट आयोजित होते हैं।\n' +
            '• **ऑनलाइन टेस्ट (लाइसमिट ऐप)**: चैप्टर-वाइज मॉक टेस्ट, टाइमर आधारित टेस्ट, और तुरंत उत्तर कुंजी व रैंक एनालिसिस।\n' +
            '• **माता-पिता को रिपोर्ट**: छात्र की प्रगति की विस्तृत रिपोर्ट अभिभावकों को साझा की जाती है।\n\n' +
            '📊 टेस्ट सीरीज में शामिल होने हेतु अभी संपर्क करें:'
          : '📝 **Chanakya Weekly Test Series & Assessments:**\n\n' +
            '• **Offline Tests (Bettiah)**: Conducted every Sunday following the exact board exam pattern (OMR + Subjective).\n' +
            '• **Online Tests (Lycemit App)**: Chapter-wise timed quizzes, detailed solutions, and instant rank analytics.\n' +
            '• **Parental Updates**: Regular performance report cards are shared directly with parents.\n\n' +
            '📊 Join our test series now:';
        chips = isHi
          ? ['रिजल्ट व टॉपर्स', 'टाइमिंग', 'फीस', 'कॉल हेल्पलाइन']
          : ['Results & Toppers', 'Timing', 'Fees', 'Call Helpline'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.downloadApp());
        break;

      case 'results':
        text = isHi
          ? '🏆 **चाणक्य क्लासेज बेतिया — टॉपर्स एवं परीक्षा परिणाम:**\n\n' +
            '• **सर्वोच्च अंक**: 96.4%, 95.8%, और 94.2% CBSE एवं बिहार बोर्ड परीक्षाओं में!\n' +
            '• **अखबारों में गौरव**: दैनिक जागरण द्वारा हमारे टॉपर्स एवं संस्थान को फ्रंट-पेज पर सम्मानित किया गया।\n' +
            '• **सैकड़ों 90%+ स्कोरर्स**: हर वर्ष बेतिया एवं आसपास के सैकड़ों विद्यार्थी गणित एवं विज्ञान में डिस्टिंक्शन प्राप्त करते हैं।\n\n' +
            '🌟 इस वर्ष टॉपर बनने की बारी आपकी है! आज ही जुड़ें:'
          : '🏆 **Chanakya Classes Bettiah — Hall of Fame & Results:**\n\n' +
            '• **Top Scores**: 96.4%, 95.8%, and 94.2% in CBSE and BSEB board examinations!\n' +
            '• **Media Recognition**: Featured prominently in Dainik Jagran for outstanding academic excellence in West Champaran.\n' +
            '• **Hundreds of 90%+ Scorers**: Year after year, students achieve distinctions in Science and Mathematics under Manmit Sir.\n\n' +
            '🌟 It is your turn to top the board exams this year! Join today:';
        chips = isHi
          ? ['एडमिशन कैसे लें', 'कोर्सेज व फीस', 'मनमीत सर से बात', 'टेस्ट सीरीज']
          : ['How to Enroll', 'Courses & Fees', 'Talk to Sir', 'Test Series'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.viewCourses());
        break;

      case 'class_10':
        text = isHi
          ? '🎯 **कक्षा 10वीं बोर्ड स्पेशल बैच (CBSE एवं BSEB):**\n\n' +
            '• **अध्यापक**: मनमीत सर (गणित एवं विज्ञान) और विशेषज्ञ फैकल्टी।\n' +
            '• **कवरेज**: गणित, विज्ञान (भौतिकी, रसायन, जीव), सामाजिक विज्ञान, हिंदी, अंग्रेजी।\n' +
            '• **विशेषताएं**:\n' +
            '  - 3 बार संपूर्ण रिवीजन\n' +
            '  - पिछले 10 वर्षों के बोर्ड प्रश्न पत्रों का समाधान\n' +
            '  - साप्ताहिक OMR और लिखित टेस्ट\n' +
            '  - ₹99 में डिजिटल फास्ट ट्रैक क्रैश कोर्स ऐप पर\n\n' +
            '📞 10वीं बैच में सीट बुक करने के लिए तुरंत कॉल करें:'
          : '🎯 **Class 10th Board Toppers Batch (CBSE & BSEB):**\n\n' +
            '• **Led by**: Manmit Sir (Maths & Science) with expert faculties.\n' +
            '• **Subjects**: Mathematics, Science (Physics, Chemistry, Biology), SST, Hindi, English.\n' +
            '• **Key Highlights**:\n' +
            '  - 3x Complete syllabus revision\n' +
            '  - Previous 10 years board paper solutions\n' +
            '  - Weekly OMR and written mock exams\n' +
            '  - ₹99 Fast Track online crash course on the Lycemit app\n\n' +
            '📞 Call now to reserve your seat in the 10th batch:';
        chips = isHi
          ? ['10वीं की फीस', 'बैच टाइमिंग', '10वीं के नोट्स', 'कॉल करें']
          : ['Class 10 Fee', 'Batch Timing', 'Class 10 Notes', 'Call Now'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.viewCourses());
        break;

      case 'class_9':
        text = isHi
          ? '📘 **कक्षा 9वीं फाउंडेशन बिल्डर बैच:**\n\n' +
            '• 9वीं कक्षा 10वीं बोर्ड परीक्षा की नींव होती है।\n' +
            '• **मुख्य विषय**: गणित, विज्ञान, सामाजिक विज्ञान एवं अंग्रेजी।\n' +
            '• एनसीईआरटी (NCERT) और रेफरेंस बुक्स का गहन अध्ययन, वीकली टेस्ट, और बेसिक फॉर्मूला क्लिनिक।\n\n' +
            '📍 बेतिया कैंपस में सुबह और शाम दोनों सत्रों में बैच उपलब्ध हैं।'
          : '📘 **Class 9th Foundation Builder Batch:**\n\n' +
            '• Class 9th builds the bedrock for 10th Board success.\n' +
            '• **Key Subjects**: Mathematics, Science, SST & English.\n' +
            '• Deep NCERT coverage, reference problems, weekly tests, and basic concept clinics.\n\n' +
            '📍 Morning & evening batches available at Bettiah campus.';
        chips = isHi
          ? ['9वीं की फीस', 'टाइमिंग', 'एडमिशन लें', 'कॉल हेल्पलाइन']
          : ['Class 9 Fee', 'Timing', 'Enroll Now', 'Call Helpline'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openMaps());
        break;

      case 'class_7_8':
        text = isHi
          ? '🌱 **कक्षा 7वीं एवं 8वीं जूनियर फाउंडेशन बैच:**\n\n' +
            '• छोटे बच्चों के गणित और विज्ञान के डर को दूर कर पढ़ाई में रुचि जगाना।\n' +
            '• बेसिक कैलकुलेशन, वैदिक मैथ्स ट्रिक्स, साइंस प्रयोग, और अंग्रेजी ग्रामर।\n' +
            '• व्यक्तिगत ध्यान (Small Batches) ताकि हर बच्चे की नींव मजबूत हो सके।'
          : '🌱 **Classes 7th & 8th Junior Foundation Batch:**\n\n' +
            '• Eradicates fear of Maths & Science, building genuine academic passion.\n' +
            '• Basic calculation, mental maths tricks, hands-on science concepts, and English grammar.\n' +
            '• Individual attention in small batch sizes for maximum foundation strength.';
        chips = isHi
          ? ['टाइमिंग', 'फीस', 'एडमिशन', 'हेल्पलाइन']
          : ['Timing', 'Fees', 'Admission', 'Helpline'];
        actions.push(ActionBuilder.callHelpline());
        break;

      case 'class_11_12':
        text = isHi
          ? '🔬 **कक्षा 11वीं एवं 12वीं साइंस (PCM / PCB) बैच:**\n\n' +
            '• **कवर किए जाने वाले विषय**: भौतिक विज्ञान (Physics), रसायन विज्ञान (Chemistry), गणित (Maths) / जीव विज्ञान (Biology)।\n' +
            '• बोर्ड परीक्षा में 90%+ अंक की गारंटीड रणनीति के साथ-साथ प्रतियोगी परीक्षाओं का मार्गदर्शन।\n' +
            '• मनमीत सर के निर्देशन में विस्तृत न्यूमेरिकल प्रैक्टिस और थ्योरी नोट्स।'
          : '🔬 **Classes 11th & 12th Science Stream (PCM / PCB):**\n\n' +
            '• **Subjects**: Physics, Chemistry, Mathematics (PCM) / Biology (PCB).\n' +
            '• Comprehensive board mastery targeting 90%+ with competitive entrance guidance.\n' +
            '• Extensive numerical practice and clear conceptual notes under Manmit Sir.';
        chips = isHi
          ? ['11वीं 12वीं फीस', 'बैच का समय', 'एडमिशन लें', 'कॉल करें']
          : ['11th/12th Fees', 'Batch Times', 'Enroll Now', 'Call Now'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.viewCourses());
        break;

      case 'hostel':
        text = isHi
          ? '🏠 **बाहर के विद्यार्थियों के लिए हॉस्टल एवं लॉज सुविधा:**\n\n' +
            '• जो विद्यार्थी बेतिया से बाहर (नरकटियागंज, बगहा, मोतिहारी आदि) से आते हैं, उनके लिए हमारे संस्थान (सुप्रिया सिनेमा रोड) के 200–500 मीटर के दायरे में सुरक्षित छात्र व छात्रा हॉस्टल (Hostel/PG) उपलब्ध हैं।\n' +
            '• स्वच्छ भोजन, वाई-फाई, और शांत अध्ययन वातावरण।\n\n' +
            '📞 हॉस्टल अनुशंसा व सहायता हेतु हमारे कार्यालय में संपर्क करें:'
          : '🏠 **Hostel & Accommodation for Outstation Students:**\n\n' +
            '• For students traveling from outside Bettiah (Narkatiaganj, Bagaha, Motihari, etc.), verified and safe boys & girls hostels/PGs are located within 200–500 meters of our campus.\n' +
            '• Clean meals, Wi-Fi, and a disciplined study environment.\n\n' +
            '📞 Contact our office for hostel assistance and recommendations:';
        chips = isHi
          ? ['कोचिंग का पता', 'एडमिशन हेल्पलाइन', 'फीस जानें', 'कॉल करें']
          : ['Campus Address', 'Admission Helpline', 'Know Fees', 'Call Now'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openMaps());
        break;

      case 'subjects':
        text = isHi
          ? '📚 **चाणक्य क्लासेज में पढ़ाए जाने वाले विषय:**\n\n' +
            '• 📐 **गणित (Mathematics)** — मनमीत सर द्वारा विशेष मार्गदर्शन\n' +
            '• 🔬 **विज्ञान (Science)** — भौतिकी, रसायन एवं जीव विज्ञान\n' +
            '• 🌍 **सामाजिक विज्ञान (Social Science)** — इतिहास, भूगोल, नागरिक शास्त्र, अर्थशास्त्र\n' +
            '• 📝 **भाषा** — हिंदी एवं अंग्रेजी व्याकरण\n\n' +
            'कक्षा 7वीं से 12वीं तक सभी विषयों के लिए अलग-अलग विशेषज्ञ शिक्षक उपलब्ध हैं।'
          : '📚 **Subjects Taught at Chanakya Classes & Lycemit:**\n\n' +
            '• 📐 **Mathematics** — Special mentorship by Manmit Sir\n' +
            '• 🔬 **Science** — Physics, Chemistry & Biology\n' +
            '• 🌍 **Social Science (SST)** — History, Geography, Civics, Economics\n' +
            '• 📝 **Languages** — Hindi & English Grammar\n\n' +
            'Expert faculty available for each individual subject for Classes 7th to 12th.';
        chips = isHi
          ? ['कोर्सेज देखें', 'फीस कितनी है', 'एडमिशन कैसे लें', 'हेल्पलाइन']
          : ['View Courses', 'What are Fees', 'How to Enroll', 'Helpline'];
        actions.push(ActionBuilder.viewCourses());
        actions.push(ActionBuilder.callHelpline());
        break;

      case 'courses':
        text = isHi
          ? '🎓 **चाणक्य क्लासेज एवं लाइसमिट के प्रमुख कोर्सेज:**\n\n' +
            '1. **कक्षा 10वीं बोर्ड टॉपर्स बैच** (ऑफलाइन बेतिया + ऑनलाइन ऐप)\n' +
            '2. **कक्षा 9वीं फाउंडेशन बैच** (ऑफलाइन बेतिया + ऑनलाइन ऐप)\n' +
            '3. **कक्षा 7वीं और 8वीं जूनियर फाउंडेशन बैच**\n' +
            '4. **कक्षा 11वीं और 12वीं साइंस (PCM/PCB) बैच**\n' +
            '5. **₹99 फास्ट ट्रैक ऑनलाइन क्रैश कोर्स** (लाइसमिट मोबाइल ऐप पर)\n\n' +
            '💡 सभी कोर्सेज में स्टडी मैटेरियल, वीकली टेस्ट और डाउट क्लास शामिल हैं।'
          : '🎓 **Featured Programs at Chanakya Classes & Lycemit:**\n\n' +
            '1. **Class 10th Board Toppers Batch** (Offline Bettiah + Online App)\n' +
            '2. **Class 9th Foundation Batch** (Offline Bettiah + Online App)\n' +
            '3. **Classes 7th & 8th Junior Foundation Batch**\n' +
            '4. **Classes 11th & 12th Science Stream (PCM/PCB)**\n' +
            '5. **₹99 Fast Track Crash Courses** on Lycemit Mobile App\n\n' +
            '💡 All courses include free study material, weekly tests, and mentorship.';
        chips = isHi
          ? ['10वीं बैच', 'फीस कितनी है', 'एडमिशन लें', 'हेल्पलाइन कॉल']
          : ['Class 10 Batch', 'Course Fees', 'Enroll Now', 'Call Helpline'];
        actions.push(ActionBuilder.viewCourses());
        actions.push(ActionBuilder.callHelpline());
        break;

      case 'thanks':
        text = isHi
          ? 'आपका बहुत-बहुत धन्यवाद! 🙏\n\nमुझे आपकी सहायता करके अत्यंत प्रसन्नता हुई। यदि आपके पास पढ़ाई, एडमिशन या किसी अन्य विषय से जुड़ा कोई भी प्रश्न हो, तो मैं 24x7 आपकी सेवा में तत्पर हूँ।\n\nशानदार तैयारी करें और बोर्ड परीक्षा में टॉप करें! 🌟'
          : "You're very welcome! 🙏\n\nIt was a pleasure helping you. Feel free to ask me anything anytime regarding your studies, admissions, or courses. I am active 24x7 for you.\n\nStudy hard and top the exams! 🌟";
        chips = isHi
          ? ['कोर्सेज देखें', 'एडमिशन लें', 'मनमीत सर से बात', 'अलविदा']
          : ['View Courses', 'Enroll Now', 'Talk to Sir', 'Goodbye'];
        actions.push(ActionBuilder.callHelpline());
        break;

      case 'farewell':
        text = isHi
          ? 'अलविदा! शुभ दिन और आपकी पढ़ाई के लिए ढेर सारी शुभकामनाएं! 🎓\n\nजब भी जरूरत हो, बस एक क्लिक में मुझे याद करें — आपका **LYCEMIT AI मित्र** हमेशा आपके साथ है। जय हिंद! 🇮🇳'
          : "Goodbye! Wishing you great success in your studies! 🎓\n\nWhenever you need assistance, your **LYCEMIT AI Mitra** is just one click away. Best of luck! 🇮🇳";
        chips = isHi
          ? ['नमस्ते', 'कोर्सेज देखें', 'हेल्पलाइन']
          : ['Namaste', 'View Courses', 'Helpline'];
        break;

      case 'affirmation':
        text = isHi
          ? 'जी बिल्कुल! 👍 बताइए, आप चाणक्य क्लासेज या लाइसमिट के बारे में और क्या जानना चाहते हैं?'
          : 'Great! 👍 What else would you like to know about Chanakya Classes or Lycemit?';
        chips = isHi
          ? ['कोर्सेज व फीस', 'एडमिशन प्रक्रिया', 'नोट्स डाउनलोड', 'हेल्पलाइन कॉल']
          : ['Courses & Fees', 'Admission Process', 'Download Notes', 'Call Helpline'];
        break;

      default:
        // Smart Contextual Fallback
        text = isHi
          ? 'जी! मैं आपका प्रश्न समझ रहा हूँ। क्या आप चाणक्य क्लासेज बेतिया या लाइसमिट के बारे में इनमें से कुछ जानना चाहते हैं?\n\n' +
            '• **कोर्सेज और फीस** (क्लास 7वीं से 12वीं)\n' +
            '• **बेतिया में ऑफलाइन एडमिशन** (सुप्रिया सिनेमा रोड)\n' +
            '• **मनमीत सर से बातचीत** (+91 82103 44415)\n' +
            '• **फ्री नोट्स व किताबें** (Fast Track PDF)\n' +
            '• **लाइसमिट मोबाइल ऐप** (Google Play Store)\n\n' +
            '📞 आप सीधे हमारी एडमिशन हेल्पलाइन पर भी कॉल कर सकते हैं:'
          : "I understand! Would you like to know more about any of the following topics?\n\n" +
            "• **Courses & Fees** (Classes 7th to 12th)\n" +
            "• **Offline Admissions in Bettiah** (Supriya Cinema Road)\n" +
            "• **Talk to Manmit Sir** (+91 82103 44415)\n" +
            "• **Free Notes & Books** (Fast Track PDFs)\n" +
            "• **Lycemit Mobile App** (Google Play Store)\n\n" +
            "📞 You can also call our official helpline directly:";
        chips = isHi
          ? ['कोर्सेज व फीस', 'एडमिशन कैसे लें', 'मनमीत सर कौन हैं', 'कॉल हेल्पलाइन']
          : ['Courses & Fees', 'How to Enroll', 'Who is Manmit Sir', 'Call Helpline'];
        actions.push(ActionBuilder.callHelpline());
        actions.push(ActionBuilder.openWhatsApp());
        actions.push(ActionBuilder.viewCourses());
        break;
    }

    return {
      text: text,
      actions: actions,
      chips: chips,
      lang: lang,
      intent: intent
    };
  }

  // ==================================================================
  // 6. VOICE ENGINE (SPEECH RECOGNITION + HINDI TTS)
  // ==================================================================
  function VoiceEngine() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis || null;
    this.isListening = false;
    this.isSupported = false;
    this.ttsSupported = !!this.synthesis;

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
        this.isSupported = true;
      } catch (e) {}
    }
  }

  VoiceEngine.prototype.startListening = function (lang, onResult, onError) {
    if (!this.isSupported || this.isListening) return false;
    // Set speech language to hi-IN or en-IN
    this.recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    this.isListening = true;

    var self = this;
    this.recognition.onresult = function (event) {
      self.isListening = false;
      if (event.results && event.results[0] && event.results[0][0]) {
        var transcript = event.results[0][0].transcript;
        if (onResult) onResult(transcript);
      }
    };

    this.recognition.onerror = function (event) {
      self.isListening = false;
      if (onError) onError(event.error);
    };

    this.recognition.onend = function () {
      self.isListening = false;
    };

    try {
      this.recognition.start();
      return true;
    } catch (e) {
      this.isListening = false;
      if (onError) onError(e.message);
      return false;
    }
  };

  VoiceEngine.prototype.stopListening = function () {
    if (this.recognition && this.isListening) {
      try { this.recognition.stop(); } catch (e) {}
      this.isListening = false;
    }
  };

  VoiceEngine.prototype.speak = function (text, lang) {
    if (!this.ttsSupported) return;
    try {
      this.synthesis.cancel();
      // Clean emojis and markdown symbols for smooth audio synthesis
      var cleaned = text
        .replace(/[*#_•📍📱📚📝🖥️🙏👋🎓💪💛😊🤔🇮🇳📢🌟🏆▶️⏰🌅🌇🗓️🏢👨‍🏫🌱🔬🏠📐🌍💬✈️💰🎁📌]/g, ' ')
        .replace(/\n+/g, '. ')
        .replace(/\s+/g, ' ')
        .trim();

      if (!cleaned) return;

      var utterance = new SpeechSynthesisUtterance(cleaned);
      utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
      utterance.rate = 0.98;
      utterance.pitch = 1.0;

      // Select natural Indian voice if available
      var voices = this.synthesis.getVoices();
      var targetLang = lang === 'hi' ? 'hi' : 'en';
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang.indexOf(targetLang) === 0) {
          utterance.voice = voices[i];
          break;
        }
      }
      this.synthesis.speak(utterance);
    } catch (e) {}
  };

  VoiceEngine.prototype.stopSpeaking = function () {
    if (this.ttsSupported) {
      try { this.synthesis.cancel(); } catch (e) {}
    }
  };

  // ==================================================================
  // 7. LYCEMIT AI MITRA CORE AGENT
  // ==================================================================
  function LycemitAIMitra() {
    this.lang = CFG.defaultLang; // Default 'hi'
    try {
      var savedLang = localStorage.getItem('lycemit_ai_lang');
      if (savedLang === 'hi' || savedLang === 'en') {
        this.lang = savedLang;
      }
    } catch (e) {}

    this.voice = new VoiceEngine();
    this.voiceOutputEnabled = true;
    this.history = [];
  }

  LycemitAIMitra.prototype.setLanguage = function (lang) {
    if (lang === 'hi' || lang === 'en') {
      this.lang = lang;
      try { localStorage.setItem('lycemit_ai_lang', lang); } catch (e) {}
    }
  };

  LycemitAIMitra.prototype.processMessage = function (text) {
    if (!text || !text.trim()) return null;
    text = text.trim();

    // 1. Automatically detect language from user's input (handles Devanagari & Hinglish)
    var detectedLang = NLPEngine.detectLanguage(text, this.lang);
    this.lang = detectedLang;
    try { localStorage.setItem('lycemit_ai_lang', detectedLang); } catch (e) {}

    // 2. Match Intent with Deep NLP Matcher
    var match = NLPEngine.matchIntent(text, detectedLang);

    // 3. Generate Rich Bilingual Response
    var response = generateResponse(match.intent, text, detectedLang);

    // 4. Save to history
    this.history.push({ role: 'user', text: text, lang: detectedLang, ts: Date.now() });
    this.history.push({ role: 'bot', text: response.text, lang: detectedLang, ts: Date.now(), actions: response.actions, chips: response.chips });

    if (this.history.length > CFG.maxHistory * 2) {
      this.history = this.history.slice(-CFG.maxHistory * 2);
    }

    return response;
  };

  // ==================================================================
  // 8. CHAT WIDGET UI CONTROLLER
  // ==================================================================
  function ChatWidget(bot) {
    this.bot = bot;
    this.isOpen = false;
    this.elements = {};
  }

  ChatWidget.prototype.init = function () {
    this._buildDOM();
    this._bindEvents();
  };

  ChatWidget.prototype._buildDOM = function () {
    var avatarUrl = getAvatarUrl();

    // 1. Floating Action Button with Official AI Mitra Logo & Pulse
    var fab = document.createElement('button');
    fab.id = 'ai-mitra-fab';
    fab.setAttribute('aria-label', 'Open LYCEMIT AI Mitra Chat');
    fab.setAttribute('title', 'LYCEMIT AI Mitra — 24x7 AI Assistant');
    fab.innerHTML =
      '<img src="' + avatarUrl + '" alt="LYCEMIT AI Mitra" class="ai-mitra-fab-img">' +
      '<span class="ai-mitra-fab-badge">AI</span>' +
      '<div class="ai-mitra-fab-tooltip"><span>LYCEMIT AI MITRA</span><small>आपका AI अध्ययन मित्र</small></div>';
    this.elements.fab = fab;

    // 2. Chat Window Container
    var win = document.createElement('div');
    win.id = 'ai-mitra-window';
    win.innerHTML =
      '<div class="ai-mitra-header">' +
        '<div class="ai-mitra-header-left">' +
          '<div class="ai-mitra-avatar">' +
            '<img src="' + avatarUrl + '" alt="LYCEMIT AI Mitra" class="ai-mitra-avatar-img">' +
          '</div>' +
          '<div class="ai-mitra-header-info">' +
            '<div class="ai-mitra-header-title-row">' +
              '<span class="ai-mitra-header-name">LYCEMIT AI MITRA</span>' +
              '<span class="ai-mitra-header-verified" title="Verified AI Assistant">✔</span>' +
            '</div>' +
            '<span class="ai-mitra-header-sub">चाणक्य क्लासेज व लाइसमिट • AI मित्र</span>' +
            '<span class="ai-mitra-header-status"><span class="ai-mitra-status-dot"></span> 24x7 ऑनलाइन (हिंदी + EN)</span>' +
          '</div>' +
        '</div>' +
        '<div class="ai-mitra-header-right">' +
          '<button class="ai-mitra-lang-toggle" id="aiMitraLangToggleBtn" title="भाषा बदलें / Switch Language">' +
            (this.bot.lang === 'hi' ? '🇮🇳 हिंदी' : '🇬🇧 English') +
          '</button>' +
          '<button class="ai-mitra-voice-toggle" id="aiMitraVoiceToggleBtn" title="आवाज चालू/बंद (Audio Toggle)">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>' +
          '</button>' +
          '<button class="ai-mitra-close-btn" id="aiMitraCloseBtn" title="बंद करें (Close Chat)">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="ai-mitra-messages" id="aiMitraMessagesContainer"></div>' +
      '<div class="ai-mitra-chips-wrapper"><div class="ai-mitra-chips" id="aiMitraChipsRow"></div></div>' +
      '<div class="ai-mitra-input-bar">' +
        '<input type="text" class="ai-mitra-text-input" id="aiMitraTextInput" placeholder="हिंदी या English में पूछें... (या 🎤 दबाएं)" autocomplete="off">' +
        '<button class="ai-mitra-mic-btn" id="aiMitraMicBtn" title="बोलकर पूछें (Voice Search)">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>' +
        '</button>' +
        '<button class="ai-mitra-send-btn" id="aiMitraSendBtn" title="भेजें (Send)">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
        '</button>' +
      '</div>';
    this.elements.window = win;

    document.body.appendChild(fab);
    document.body.appendChild(win);

    // Cache elements
    this.elements.messages = win.querySelector('#aiMitraMessagesContainer');
    this.elements.chips = win.querySelector('#aiMitraChipsRow');
    this.elements.input = win.querySelector('#aiMitraTextInput');
    this.elements.sendBtn = win.querySelector('#aiMitraSendBtn');
    this.elements.micBtn = win.querySelector('#aiMitraMicBtn');
    this.elements.langToggle = win.querySelector('#aiMitraLangToggleBtn');
    this.elements.voiceToggle = win.querySelector('#aiMitraVoiceToggleBtn');
    this.elements.closeBtn = win.querySelector('#aiMitraCloseBtn');
  };

  ChatWidget.prototype._bindEvents = function () {
    var self = this;

    // Toggle window on FAB click
    this.elements.fab.addEventListener('click', function () {
      self.toggle();
    });

    // Close button
    this.elements.closeBtn.addEventListener('click', function () {
      self.close();
    });

    // Send button click
    this.elements.sendBtn.addEventListener('click', function () {
      self._sendFromInput();
    });

    // Enter key press in input
    this.elements.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        self._sendFromInput();
      }
    });

    // Language Toggle Button
    this.elements.langToggle.addEventListener('click', function () {
      var nextLang = self.bot.lang === 'hi' ? 'en' : 'hi';
      self.bot.setLanguage(nextLang);
      self.elements.langToggle.innerHTML = nextLang === 'hi' ? '🇮🇳 हिंदी' : '🇬🇧 English';
      self.elements.input.placeholder = nextLang === 'hi'
        ? 'हिंदी या English में पूछें... (या 🎤 दबाएं)'
        : 'Ask in English or Hindi... (or press 🎤)';
      
      // Post system announcement
      var switchNotice = nextLang === 'hi'
        ? '🇮🇳 भाषा बदलकर **हिंदी** कर दी गई है। अब आप हिंदी में सवाल पूछ सकते हैं!'
        : '🇬🇧 Language switched to **English**. Ask me anything!';
      var chips = nextLang === 'hi'
        ? ['कोर्सेज व फीस', 'बेतिया एडमिशन', 'मनमीत सर से बात', 'फ्री नोट्स']
        : ['Courses & Fees', 'Bettiah Admission', 'Talk to Sir', 'Free Notes'];
      self._addBotMessage(switchNotice, [], chips);
    });

    // Voice Output Toggle
    this.elements.voiceToggle.addEventListener('click', function () {
      self.bot.voiceOutputEnabled = !self.bot.voiceOutputEnabled;
      if (self.bot.voiceOutputEnabled) {
        self.elements.voiceToggle.classList.remove('ai-mitra-voice-off');
        self.elements.voiceToggle.title = 'आवाज चालू है (Audio ON)';
      } else {
        self.elements.voiceToggle.classList.add('ai-mitra-voice-off');
        self.elements.voiceToggle.title = 'आवाज बंद है (Audio Muted)';
        self.bot.voice.stopSpeaking();
      }
    });

    // Microphone Voice Input
    this.elements.micBtn.addEventListener('click', function () {
      if (self.bot.voice.isListening) {
        self.bot.voice.stopListening();
        self.elements.micBtn.classList.remove('ai-mitra-listening');
      } else {
        self.elements.micBtn.classList.add('ai-mitra-listening');
        self.elements.input.placeholder = self.bot.lang === 'hi' ? '🎙️ सुन रहा हूँ... बोलिए...' : '🎙️ Listening... speak now...';
        self.bot.voice.startListening(
          self.bot.lang,
          function (transcript) {
            self.elements.micBtn.classList.remove('ai-mitra-listening');
            self.elements.input.placeholder = self.bot.lang === 'hi'
              ? 'हिंदी या English में पूछें... (या 🎤 दबाएं)'
              : 'Ask in English or Hindi... (or press 🎤)';
            if (transcript && transcript.trim()) {
              self.elements.input.value = transcript;
              self._sendFromInput();
            }
          },
          function (err) {
            self.elements.micBtn.classList.remove('ai-mitra-listening');
            self.elements.input.placeholder = self.bot.lang === 'hi'
              ? 'हिंदी या English में पूछें... (या 🎤 दबाएं)'
              : 'Ask in English or Hindi... (or press 🎤)';
          }
        );
      }
    });
  };

  ChatWidget.prototype.toggle = function () {
    if (this.isOpen) this.close();
    else this.open();
  };

  ChatWidget.prototype.open = function () {
    if (this.isOpen) return;
    this.isOpen = true;
    this.elements.window.classList.add('ai-mitra-open');
    this.elements.fab.classList.add('ai-mitra-fab-hidden');

    // On first open, show the official Hero Welcome Card
    if (this.bot.history.length === 0) {
      this._renderWelcomeCard();
    }

    this.elements.input.focus();
  };

  ChatWidget.prototype.close = function () {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.elements.window.classList.remove('ai-mitra-open');
    this.elements.fab.classList.remove('ai-mitra-fab-hidden');
    this.bot.voice.stopSpeaking();
  };

  ChatWidget.prototype._renderWelcomeCard = function () {
    var avatarUrl = getAvatarUrl();
    var isHi = this.bot.lang === 'hi';

    var card = document.createElement('div');
    card.className = 'ai-mitra-welcome-card';
    card.innerHTML =
      '<div class="ai-mitra-welcome-avatar">' +
        '<img src="' + avatarUrl + '" alt="LYCEMIT AI Mitra">' +
      '</div>' +
      '<div class="ai-mitra-welcome-title">' + (isHi ? 'नमस्ते! मैं LYCEMIT AI मित्र हूँ 🙏' : 'Namaste! I am LYCEMIT AI Mitra 🙏') + '</div>' +
      '<div class="ai-mitra-welcome-sub">' +
        (isHi
          ? 'चाणक्य क्लासेज बेतिया और लाइसमिट का आपका पर्सनल AI अध्ययन सहायक। मैं हिंदी और English दोनों समझता हूँ!'
          : 'Your official 24x7 AI educational companion for Chanakya Classes Bettiah & Lycemit. I understand both Hindi & English!') +
      '</div>' +
      '<div class="ai-mitra-welcome-features">' +
        '<div class="ai-mitra-welcome-feat-pill" data-query="कोर्सेज और फीस क्या है?"><span>🎓</span> <span>कोर्सेज व फीस</span></div>' +
        '<div class="ai-mitra-welcome-feat-pill" data-query="बेतिया में ऑफलाइन एडमिशन कैसे लें?"><span>🏫</span> <span>बेतिया एडमिशन</span></div>' +
        '<div class="ai-mitra-welcome-feat-pill" data-query="मनमीत सर का फोन नंबर दो"><span>📞</span> <span>कॉल हेल्पलाइन</span></div>' +
        '<div class="ai-mitra-welcome-feat-pill" data-query="फ्री नोट्स और पीडीएफ डाउनलोड करना है"><span>📚</span> <span>फ्री नोट्स PDF</span></div>' +
        '<div class="ai-mitra-welcome-feat-pill" data-query="लाइसमिट ऐप कैसे डाउनलोड करें?"><span>📱</span> <span>लाइसमिट ऐप</span></div>' +
        '<div class="ai-mitra-welcome-feat-pill" data-query="ऑफिशियल टेलीग्राम चैनल लिंक"><span>✈️</span> <span>टेलीग्राम @msmanmit</span></div>' +
      '</div>';

    this.elements.messages.appendChild(card);

    // Bind clicks on welcome feature pills
    var self = this;
    var pills = card.querySelectorAll('.ai-mitra-welcome-feat-pill');
    for (var p = 0; p < pills.length; p++) {
      pills[p].addEventListener('click', function () {
        var query = this.getAttribute('data-query');
        if (query) {
          self._handleUserMessage(query);
        }
      });
    }

    var defaultChips = isHi
      ? ['कोर्सेज व फीस', 'बेतिया एडमिशन', 'मनमीत सर से बात', 'फ्री नोट्स', 'टाइमिंग व पता']
      : ['Courses & Fees', 'Bettiah Admission', 'Talk to Sir', 'Free Notes', 'Timing & Address'];
    this._renderChips(defaultChips);
  };

  ChatWidget.prototype._sendFromInput = function () {
    var text = this.elements.input.value.trim();
    if (!text) return;
    this.elements.input.value = '';
    this._handleUserMessage(text);
  };

  ChatWidget.prototype._handleUserMessage = function (text) {
    this._addUserMessage(text);
    this._showTyping();

    var self = this;
    setTimeout(function () {
      self._hideTyping();
      var response = self.bot.processMessage(text);
      if (response) {
        self._addBotMessage(response.text, response.actions, response.chips);
        if (self.bot.voiceOutputEnabled && self.bot.voice.ttsSupported) {
          self.bot.voice.speak(response.text, response.lang);
        }
      }
    }, CFG.typingDelayMs + Math.random() * 200);
  };

  ChatWidget.prototype._addUserMessage = function (text) {
    var row = document.createElement('div');
    row.className = 'ai-mitra-msg-row ai-mitra-msg-user';
    row.innerHTML =
      '<div class="ai-mitra-msg-bubble">' + this._escapeHtml(text) + '</div>' +
      '<div class="ai-mitra-msg-time">' + this._timeStr() + '</div>';
    this.elements.messages.appendChild(row);
    this._scrollToBottom();
  };

  ChatWidget.prototype._addBotMessage = function (text, actions, chips) {
    var avatarUrl = getAvatarUrl();
    var formattedText = this._formatMarkdown(text);

    var row = document.createElement('div');
    row.className = 'ai-mitra-msg-row ai-mitra-msg-bot';

    var html =
      '<div class="ai-mitra-msg-avatar">' +
        '<img src="' + avatarUrl + '" alt="AI">' +
      '</div>' +
      '<div>' +
        '<div class="ai-mitra-msg-bubble">' + formattedText;

    // Render Action Buttons
    if (actions && actions.length > 0) {
      html += '<div class="ai-mitra-action-bar">';
      for (var a = 0; a < actions.length; a++) {
        var act = actions[a];
        var isExternal = act.url.indexOf('tel:') === 0 || act.url.indexOf('http') === 0 || act.url.indexOf('mailto:') === 0;
        var targetAttr = (act.url.indexOf('http') === 0) ? ' target="_blank" rel="noopener noreferrer"' : '';
        html += '<a href="' + act.url + '" class="ai-mitra-action-pill ' + (act.cls || 'ai-mitra-action-primary') + '"' + targetAttr + '>' + act.label + '</a>';
      }
      html += '</div>';
    }

    html += '</div>' +
        '<div class="ai-mitra-msg-time">' + this._timeStr() + '</div>' +
      '</div>';

    row.innerHTML = html;
    this.elements.messages.appendChild(row);
    this._scrollToBottom();

    if (chips && chips.length > 0) {
      this._renderChips(chips);
    }
  };

  ChatWidget.prototype._renderChips = function (chips) {
    this.elements.chips.innerHTML = '';
    var self = this;
    for (var i = 0; i < chips.length; i++) {
      var chip = document.createElement('button');
      chip.className = 'ai-mitra-chip';
      chip.textContent = chips[i];
      chip.addEventListener('click', (function (text) {
        return function () {
          self._handleUserMessage(text);
        };
      })(chips[i]));
      this.elements.chips.appendChild(chip);
    }
  };

  ChatWidget.prototype._showTyping = function () {
    if (this.elements.typingEl) return;
    var el = document.createElement('div');
    el.className = 'ai-mitra-msg-row ai-mitra-msg-bot';
    el.id = 'aiMitraTypingIndicator';
    el.innerHTML =
      '<div class="ai-mitra-msg-avatar"><img src="' + getAvatarUrl() + '" alt="AI"></div>' +
      '<div class="ai-mitra-typing">' +
        '<span class="ai-mitra-typing-dot"></span>' +
        '<span class="ai-mitra-typing-dot"></span>' +
        '<span class="ai-mitra-typing-dot"></span>' +
      '</div>';
    this.elements.messages.appendChild(el);
    this.elements.typingEl = el;
    this._scrollToBottom();
  };

  ChatWidget.prototype._hideTyping = function () {
    if (this.elements.typingEl) {
      try { this.elements.messages.removeChild(this.elements.typingEl); } catch (e) {}
      this.elements.typingEl = null;
    }
  };

  ChatWidget.prototype._formatMarkdown = function (text) {
    if (!text) return '';
    var escaped = this._escapeHtml(text);
    // Bold
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Bullet points
    escaped = escaped.replace(/^• (.*)$/gm, '<li style="margin-left: 18px; list-style-type: disc;">$1</li>');
    // Line breaks
    escaped = escaped.replace(/\n/g, '<br>');
    return escaped;
  };

  ChatWidget.prototype._escapeHtml = function (str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  ChatWidget.prototype._timeStr = function () {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + (m < 10 ? '0' + m : m) + ' ' + ampm;
  };

  ChatWidget.prototype._scrollToBottom = function () {
    var m = this.elements.messages;
    m.scrollTop = m.scrollHeight;
  };

  // ==================================================================
  // 9. AUTOMATIC INITIALIZATION
  // ==================================================================
  function initAIMitra() {
    if (document.getElementById('ai-mitra-fab')) return;
    var bot = new LycemitAIMitra();
    var widget = new ChatWidget(bot);
    widget.init();

    // Export globally for page action triggers
    window.LycemitAIMitra = bot;
    window.LycemitChatWidget = widget;
    window.openAIMitra = function (optionalQuery) {
      widget.open();
      if (optionalQuery) {
        widget._handleUserMessage(optionalQuery);
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIMitra);
  } else {
    initAIMitra();
  }
})();
