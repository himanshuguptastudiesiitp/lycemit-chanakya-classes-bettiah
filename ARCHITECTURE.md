# 🏛️ Architecture & System Design — Chanakya Classes & LYCEMIT AI Mitra

> **English** • Comprehensive architecture diagrams, component interactions, and data flow specifications for the **Chanakya Classes & Lycemit Web Portal** and **LYCEMIT AI Mitra** intelligent system.
>
> **हिन्दी** • **चाणक्य क्लासेज और लाइसमिट वेब पोर्टल** तथा **LYCEMIT AI मित्र** इंटेलिजेंट सिस्टम के व्यापक आर्किटेक्चर आरेख, घटक इंटरैक्शन और डेटा प्रवाह विनिर्देश।

---

## 1. High-Level System Architecture

```mermaid
flowchart TD
    subgraph ClientLayer["🌐 User & Presentation Layer"]
        User["Student / Parent / Visitor"]
        Browser["Desktop & Mobile Browsers<br/>(Chrome, Edge, Safari, Firefox)"]
        Index["index.html<br/>(Unified Portal & Hero 3D)"]
        Sections["sections/*.html<br/>(Courses, Material, Videos, Reviews, etc.)"]
        Styles["shared/styles.css & ai-mitra.css<br/>(GPU 3D Tilt, Particle Canvas, Glassmorphic UI)"]
    end

    subgraph CoreFrontend["⚡ Client-Side Logic & Motion Engines"]
        SharedJS["js/shared.js<br/>(Hero 3D Euler Mesh, Tilt Engine, Modals, Filters)"]
        AIMitraJS["js/ai-mitra.js<br/>(Bilingual NLP, Voice STT/TTS, Widget Manager)"]
    end

    subgraph AIMitraCore["🧠 LYCEMIT AI MITRA Engine"]
        NLP["Multilingual NLP Engine<br/>(English, हिन्दी Devanagari, Hinglish)"]
        IntentRouter{"Intent Router & Classifier"}
        Chatbot["Conversational Chatbot<br/>(Fees, Admissions, Toppers, Timetables)"]
        Agent["Autonomous Agent<br/>(Multi-Step Tool Planning & Execution)"]
        VoiceSTT["Web Speech Recognition<br/>(Microphone STT: en-IN / hi-IN)"]
        VoiceTTS["Web Speech Synthesis<br/>(Speech Output: Pitch/Rate Config)"]
    end

    subgraph ToolsRegistry["🛠️ Agent Tool Actions"]
        ToolNav["Section Smooth Navigator"]
        ToolWA["WhatsApp Counseling Link Generator"]
        ToolCall["Direct Helpline Telephony"]
        ToolApp["Google Play Store Deep Linker"]
        ToolMaps["Google Maps Campus Navigation"]
        ToolInq["Admission Inquiry Registry"]
        ToolFee["Installment & Scholarship Calculator"]
    end

    subgraph PythonBackend["🐍 Standalone Python Package (lycemit_ai_mitra)"]
        PyCLI["CLI Interface (main.py)"]
        PyBot["LycemitAIChatbot"]
        PyAgent["LycemitAgent"]
        PyTools["AgentToolsRegistry"]
        PyVoice["VoiceEngine (pyttsx3 / STT fallbacks)"]
        PyNLP["MultilingualEngine"]
    end

    subgraph ExternalServices["🌍 External Services & Crawlers"]
        WhatsApp["WhatsApp API<br/>(wa.me/917979724568)"]
        Telegram["Telegram Channels<br/>(@msmanmit)"]
        YouTube["YouTube Platform<br/>(@Lycemit Video Streams)"]
        PlayStore["Google Play Store<br/>(com.lycemit.app)"]
        GoogleMaps["Google Maps Location<br/>(Supriya Cinema Rd, Bettiah)"]
        SearchBots["Search Crawlers<br/>(Googlebot, Bingbot via sitemap.xml)"]
    end

    %% Connections
    User --> Browser
    Browser --> Index
    Browser --> Sections
    Index --> Styles
    Sections --> Styles
    Index --> SharedJS
    Index --> AIMitraJS
    Sections --> SharedJS
    Sections --> AIMitraJS

    AIMitraJS --> VoiceSTT
    VoiceSTT --> NLP
    AIMitraJS --> NLP
    NLP --> IntentRouter
    IntentRouter -->|"Conversational Q&A"| Chatbot
    IntentRouter -->|"Autonomous Task"| Agent
    Chatbot --> ToolsRegistry
    Agent --> ToolsRegistry
    Chatbot --> VoiceTTS

    ToolsRegistry --> ToolNav
    ToolsRegistry --> ToolWA
    ToolsRegistry --> ToolCall
    ToolsRegistry --> ToolApp
    ToolsRegistry --> ToolMaps
    ToolsRegistry --> ToolInq
    ToolsRegistry --> ToolFee

    ToolWA --> WhatsApp
    ToolCall --> ExternalServices
    ToolApp --> PlayStore
    ToolMaps --> GoogleMaps
    ToolNav --> Index

    SearchBots --> Index
    SearchBots --> Sections

    PyCLI --> PyBot
    PyCLI --> PyAgent
    PyBot --> PyTools
    PyAgent --> PyTools
    PyBot --> PyNLP
    PyAgent --> PyNLP
    PyCLI --> PyVoice
```

---

## 2. Voice & Text Interaction Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor User as Student / Parent
    participant UI as AI Mitra Widget (DOM)
    participant Voice as Web Speech Engine
    participant NLP as Multilingual NLP
    participant Agent as Agent & Tool Engine
    participant Ext as External / WhatsApp / Maps

    User->>UI: Types query OR clicks Mic button 🎤
    alt Voice Input
        UI->>Voice: Request SpeechRecognition (lang: en-IN / hi-IN)
        User->>Voice: Speaks question
        Voice-->>UI: Returns transcribed text
    else Text Input
        User->>UI: Enters message text in input field
    end

    UI->>UI: Display User Message & show Typing indicator 💬
    UI->>NLP: processMessage(text)
    NLP->>NLP: Detect language (English, Hindi, Hinglish)
    NLP->>NLP: Tokenize & match intent (courses, fee, admission, etc.)
    
    alt Needs Autonomous Tool Execution
        NLP->>Agent: Dispatch action (e.g. WhatsApp, Maps, Course scroll)
        Agent->>Agent: Prepare payload / telephone / deeplink
        Agent-->>UI: Return Action Buttons (WhatsApp, Call, Navigate)
    end

    NLP-->>UI: Formatted answer with Markdown & Quick Chips
    UI->>UI: Render Bot message bubble & action chips

    opt Voice Output Enabled
        UI->>Voice: SpeechSynthesisUtterance(answerText)
        Voice-->>User: Spoken audio response
    end

    opt User Clicks Action Button
        User->>UI: Clicks "WhatsApp पर संपर्क करें" / "Call Helpline"
        UI->>Ext: Open wa.me / tel:+917979724568
    end
```

---

## 3. AI Mitra State Machine Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle: Page Load
    Idle --> Attention: 45s Inactivity (Wiggle & Glow)
    Attention --> Idle: Glow Timeout (6s)
    
    Idle --> Open: Click FAB / Shortcut Ctrl+Shift+M
    Attention --> Open: Click FAB
    
    state Open {
        [*] --> AwaitingInput
        AwaitingInput --> Recording: Click Mic Button 🎤
        Recording --> Processing: Speech Detected / Silence Timeout
        Recording --> AwaitingInput: Cancel / Error
        
        AwaitingInput --> Processing: Enter Key / Click Send
        
        state Processing {
            [*] --> IntentMatching
            IntentMatching --> ToolExecution: Action Identified
            IntentMatching --> ResponseFormatting: Standard FAQ
            ToolExecution --> ResponseFormatting
        }
        
        Processing --> Speaking: Voice TTS Enabled
        Processing --> AwaitingInput: Voice TTS Disabled
        Speaking --> AwaitingInput: Speech Finished
    }
    
    Open --> Idle: Click Close / Escape
```

---

## 4. Component Directory & File Mapping

```mermaid
graph LR
    subgraph Root["d:/Desktop/CHANKYA/"]
        IndexFile["index.html<br/>(Unified Portal)"]
        Sitemap["sitemap.xml<br/>(Search Engine Sitemap)"]
        Robots["robots.txt<br/>(Crawler Directives)"]
        Validator["validate_project.py<br/>(Integrity & Test Suite)"]
        ArchDoc["ARCHITECTURE.md<br/>(This Document)"]
    end

    subgraph SharedDir["shared/"]
        StylesCSS["styles.css<br/>(Design System, 3D Tilt, Particle Mesh)"]
        AIMitraCSS["ai-mitra.css<br/>(Widget Styles, Animations, Responsiveness)"]
    end

    subgraph JSDir["js/"]
        SharedJS["shared.js<br/>(Hero 3D Canvas, Card Tilt, Video Modals)"]
        AIMitraJS["ai-mitra.js<br/>(Chatbot UI, NLP, Voice, Agent Actions)"]
    end

    subgraph SectionsDir["sections/"]
        HomeSec["home.html"]
        CoursesSec["courses.html"]
        MatSec["study-material.html"]
        VidSec["videos.html"]
        RevSec["reviews.html"]
        ContSec["contact.html"]
        TelSec["telegram.html"]
    end

    subgraph PyDir["lycemit_ai_mitra/"]
        PyInit["src/__init__.py"]
        PyMain["src/main.py (CLI)"]
        PyBotM["src/chatbot.py"]
        PyAgentM["src/agent.py"]
        PyToolsM["src/tools.py"]
        PyVoiceM["src/voice.py"]
        PyNLPM["src/multilingual.py"]
        PyTests["tests/ (17 Unit Tests)"]
    end

    IndexFile --> SharedDir
    IndexFile --> JSDir
    SectionsDir --> SharedDir
    SectionsDir --> JSDir
```

---

## 5. Security & Performance Layer

| Architectural Feature | Implementation | Defensive Protection |
|---|---|---|
| **XSS Prevention** | Full entity escaping (`&`, `<`, `>`, `"`, `'`) and DOM `textContent` bindings | Prevents malicious script or attribute breakout in chat dialogue |
| **Reverse Tabnabbing** | `rel="noopener noreferrer"` enforced on all `target="_blank"` anchors | Prevents opener window manipulation by untrusted external links |
| **Search Engine Directives** | `robots.txt` + `sitemap.xml` + Canonical links on every page | Eliminates duplicate content penalties and prevents crawler indexing loops |
| **Microphone & Speech Privacy** | Ephemeral voice recognition with explicit user click triggers only | No persistent audio recording or background listening |
| **Performance (60 FPS)** | GPU-accelerated CSS `transform-style: preserve-3d` & `IntersectionObserver` pause | Zero CPU usage when hero section or widget is off-screen |
| **Automated Verification** | `validate_project.py` checks 28 assets, 8 HTML files, SEO tags & Python unit tests | Continuous integrity enforcement |

