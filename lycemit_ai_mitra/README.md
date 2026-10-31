# 🎓 LYCEMIT AI MITRA — AI Chatbot & Agent

> **English** • Official bilingual AI Chatbot and Autonomous Agent for **Chanakya Classes Bettiah** and **Lycemit Online Education**, led by **Manmit Shrivastva (@msmanmit)**. Supports voice speech recognition (STT), voice synthesis (TTS), text dialogue, and multi-step agent tool calling across English, Hindi (हिन्दी), and Hinglish.
>
> **हिन्दी** • **चाणक्य क्लासेज बेतिया** और **लाइसमिट ऑनलाइन एजुकेशन** का आधिकारिक द्विभाषी AI चैटबॉट और एजेंट, जिसका नेतृत्व **मनमीत श्रीवास्तव (@msmanmit)** करते हैं। यह अंग्रेजी, हिंदी और हिंग्लिश में वॉइस स्पीच रिकग्निशन (STT), वॉइस सिंथेसिस (TTS), टेक्स्ट संवाद और मल्टी-स्टेप एजेंट टूल कॉलिंग को सपोर्ट करता है।

---

## 🌟 Key Capabilities / मुख्य क्षमताएँ

1. **Dual System (Chatbot + Agent)**:
   - **Chatbot (`LycemitAIChatbot`)**: Instant conversational answering for admissions, fees, courses, timetables, CBSE board toppers (Dainik Jagran 96.4%), study material (4-in-1 Fast Track Books Kit), hostel facilities, and direct counseling with Manmit Sir.
   - **Agent (`LycemitAgent`)**: Autonomous multi-step tool execution (course search, scholarship discount & installment calculations, admission inquiry registration, and contact dispatching).

2. **Voice + Text Integration**:
   - **Voice Input (STT)**: Web Speech API in the browser + offline Python `SpeechRecognition` support.
   - **Voice Output (TTS)**: Web Speech Synthesis in the browser + offline `pyttsx3` speech narration with automatic fallback.

3. **Multilingual Intelligence**:
   - Understands native English, pure Hindi (Devanagari script), and colloquial Hinglish (e.g., *"fees kitni hai"*, *"admission kaise le"*).

4. **Web Portal Widget (`js/ai-mitra.js` & `shared/ai-mitra.css`)**:
   - Production-quality floating chat button (`#ai-mitra-fab`) with pulsing status glow.
   - Slide-up modal chat window (`#ai-mitra-window`) with one-click quick action chips, action buttons (WhatsApp, Helpline, Google Maps, App download), and microphone voice toggle.
   - Active across `index.html` and all section pages in `sections/`.

---

## 📂 Package Architecture / पैकेज संरचना

```text
lycemit_ai_mitra/
├── README.md               # Documentation (English & Hindi)
├── requirements.txt        # Python dependencies
├── settings.json           # Institute configuration, contacts & defaults
├── src/
│   ├── __init__.py         # Package exports
│   ├── main.py             # CLI entry point (Chat, Voice, Agent, Query)
│   ├── chatbot.py          # Conversational Chatbot engine (LycemitAIChatbot)
│   ├── agent.py            # Autonomous Tool-Calling Agent (LycemitAgent)
│   ├── tools.py            # Agent tools registry (Courses, Fees, Inquiries, Toppers)
│   ├── voice.py            # Voice STT & TTS engine with resilient fallbacks
│   ├── multilingual.py     # Language detection (EN/HI/Hinglish) & tokenization
│   └── utils.py            # Logging, settings loader & formatting helpers
└── tests/
    ├── test_chatbot.py     # Chatbot intent & response unit tests
    ├── test_agent.py       # Autonomous agent & tool calling tests
    └── test_multilingual.py # Language detection & tokenization tests
```

---

## 🚀 Quick Start / उपयोग कैसे करें

### 1. Run Unit Tests (100% Passing)
```bash
python -m unittest discover -s lycemit_ai_mitra/tests
```

### 2. Interactive Terminal Chat
```bash
python -m lycemit_ai_mitra.src.main --mode chat
```

### 3. Single Query Answering
```bash
# English
python -m lycemit_ai_mitra.src.main --query "What is the fee for Class 10 Board Toppers?"

# Hindi
python -m lycemit_ai_mitra.src.main --query "चाणक्य क्लासेज में एडमिशन कैसे लें?"
```

### 4. Autonomous Agent Task Execution
```bash
python -m lycemit_ai_mitra.src.main --mode agent --task "Find offline batches and calculate fees for class 10"
```

### 5. Python API Usage
```python
from lycemit_ai_mitra.src import LycemitAIChatbot, LycemitAgent

# Chatbot
bot = LycemitAIChatbot()
response = bot.reply("How to join Chanakya Classes Bettiah?")
print(response["text"])

# Agent
agent = LycemitAgent()
result = agent.run_task("Search available courses for grade 10")
print(result["summary"])
```

---

## 🌐 Web Widget Integration

The AI Mitra widget is active across the web portal. To manually trigger or interact via JavaScript console:

```javascript
// Open chat and ask a question programmatically
window.LycemitAIMitra.ask("Tell me about offline admission");

// Toggle widget visibility
window.LycemitAIMitra.widget.toggle();
```

---

## 📞 Support & Contacts / संपर्क

- **Director**: Manmit Shrivastva (@msmanmit)
- **Helpline**: +91-7979724568
- **Address**: Supriya Cinema Road, Bettiah, West Champaran, Bihar — 845438
- **App**: Google Play Store (Lycemit)

