"""
LYCEMIT AI MITRA - Conversational Chatbot Engine
Provides bilingual conversational question answering and guidance.
"""

import re
from typing import Any, Dict, List, Optional
from .multilingual import MultilingualEngine
from .agent import LycemitAgent
from .tools import AgentToolsRegistry


class LycemitAIChatbot:
    """Conversational AI Chatbot for Chanakya Classes & Lycemit."""

    GREETINGS_EN = [
        "Namaste! 🙏 I'm LYCEMIT AI Mitra — your study assistant from Chanakya Classes Bettiah. How can I help you today?",
        "Hello! 🎓 Welcome to Chanakya Classes & Lycemit. Ask me about courses, fees, admissions, study material, or Manmit Sir!"
    ]
    GREETINGS_HI = [
        "नमस्ते! 🙏 मैं LYCEMIT AI मित्र हूँ — चाणक्य क्लासेज बेतिया का स्मार्ट स्टडी असिस्टेंट। आज मैं आपकी कैसे मदद कर सकता हूँ?",
        "नमस्कार! 🎓 चाणक्य क्लासेज और लाइसमिट में आपका स्वागत है। बैच, फीस, एडमिशन या स्टडी मैटेरियल के बारे में पूछें!"
    ]

    def __init__(self):
        self.nlp = MultilingualEngine()
        self.agent = LycemitAgent()
        self.history: List[Dict[str, str]] = []

    def reply(self, user_message: str, force_lang: Optional[str] = None) -> Dict[str, Any]:
        """Process incoming user message and generate a comprehensive response."""
        if not user_message or not user_message.strip():
            return {
                "text": "Please type a message or ask a question.",
                "language": "en",
                "intent": "empty"
            }

        text = user_message.strip()
        lang = force_lang or self.nlp.detect_language(text)
        lower = text.lower()
        tokens = set(self.nlp.tokenize(text))

        # Helper for word boundary or token match
        def has_any(words: List[str]) -> bool:
            for w in words:
                if " " in w:
                    if w in lower:
                        return True
                else:
                    if w in tokens or re.search(r'\b' + re.escape(w) + r'\b', lower):
                        return True
            return False

        # 1. Check Greetings (use word boundaries to avoid 'hi' in 'which')
        if has_any(["hello", "hi", "hey", "namaste", "pranam", "नमस्ते", "प्रणाम", "हेलो", "हैलो"]):
            resp_text = self.GREETINGS_HI[0] if lang == "hi" else self.GREETINGS_EN[0]
            intent = "greeting"

        # 2. Check Fees
        elif has_any(["fee", "fees", "cost", "price", "installment", "discount", "शुल्क", "फीस", "कितना खर्च"]):
            intent = "fee"
            if lang == "hi":
                resp_text = (
                    "💰 **चाणक्य क्लासेज फीस विवरण:**\n\n"
                    "• ऑनलाइन कोर्सेज: लाइसमिट ऐप पर सिर्फ ₹9 और ₹99 से शुरू!\n"
                    "• ऑफ़लाइन क्लास 10 बोर्ड टॉपर्स बैच: ₹18,000/वर्ष (किस्त सुविधा उपलब्ध)\n"
                    "• क्लास 9 फाउंडेशन: ₹15,000/वर्ष\n"
                    "• सीनियर सेकेंडरी NEET/JEE: ₹28,000/वर्ष\n"
                    "• हॉस्टल सुविधा: उपलब्ध\n\n"
                    "विस्तृत जानकारी के लिए हेल्पलाइन +91-7979724568 पर कॉल करें!"
                )
            else:
                resp_text = (
                    "💰 **Chanakya Classes Fee Structure:**\n\n"
                    "• Online Courses: Starting from just ₹9 & ₹99 on the Lycemit App!\n"
                    "• Offline Class 10 Board Toppers: ₹18,000/year (Easy installment options available)\n"
                    "• Class 9 Foundation: ₹15,000/year\n"
                    "• Senior Secondary NEET/JEE: ₹28,000/year\n"
                    "• Residential Boys' Hostel: Available on campus\n\n"
                    "For full installment options, call helpline at +91-7979724568!"
                )

        # 3. Check Admission
        elif has_any(["admission", "enroll", "join", "apply", "एडमिशन", "दाखिला", "नामांकन"]):
            intent = "admission"
            if lang == "hi":
                resp_text = (
                    "📝 **ऑफ़लाइन एडमिशन प्रक्रिया (बेतिया कैम्पस):**\n\n"
                    "1. चाणक्य क्लासेज, सुप्रिया सिनेमा रोड, बेतिया आएं।\n"
                    "2. पिछली मार्कशीट और 2 पासपोर्ट फोटो साथ लाएं।\n"
                    "3. मनमीत सर से व्यक्तिगत काउंसलिंग सत्र प्राप्त करें।\n"
                    "4. हेल्पलाइन: +91-7979724568 पर अभी सीट रिजर्व करें!"
                )
            else:
                resp_text = (
                    "📝 **Offline Admission Process (Bettiah Campus):**\n\n"
                    "1. Visit Chanakya Classes, Supriya Cinema Road, Bettiah.\n"
                    "2. Bring previous class marksheet and 2 passport photos.\n"
                    "3. Attend a personal counseling session with Manmit Sir.\n"
                    "4. Call +91-7979724568 to reserve your seat today!"
                )

        # 4. Check Courses / Batches
        elif has_any(["course", "courses", "batch", "batches", "class", "classes", "program", "कोर्स", "बैच", "कक्षा"]):
            intent = "courses"
            courses = AgentToolsRegistry.search_courses()
            if lang == "hi":
                resp_text = "📚 **चाणक्य क्लासेज एवं लाइसमिट के प्रमुख बैच:**\n\n"
                for c in courses[:4]:
                    resp_text += f"• **{c['name_hi']}** (मोड: {c['mode']})\n  {c['features_hi']}\n\n"
            else:
                resp_text = "📚 **Featured Batches at Chanakya Classes & Lycemit:**\n\n"
                for c in courses[:4]:
                    resp_text += f"• **{c['name_en']}** (Mode: {c['mode']})\n  {c['features_en']}\n\n"

        # 5. Check Results / Toppers
        elif has_any(["result", "results", "topper", "toppers", "marks", "dainik jagran", "रिजल्ट", "नतीजे", "टॉपर"]):
            intent = "results"
            results = AgentToolsRegistry.get_toppers_and_results()
            if lang == "hi":
                resp_text = (
                    f"🏆 **शानदार CBSE बोर्ड परिणाम (दैनिक जागरण में प्रकाशित):**\n\n"
                    f"• सर्वोच्च स्कोर: {', '.join(results['highest_scores'])}\n"
                    f"• 10+ वर्षों की लगातार उत्कृष्टता और सैकड़ों सफल छात्र।\n"
                    f"• मनमीत सर के व्यक्तिगत मार्गदर्शन में तैयार टॉपर!"
                )
            else:
                resp_text = (
                    f"🏆 **Outstanding CBSE Board Results (Featured in Dainik Jagran):**\n\n"
                    f"• Top Scores: {', '.join(results['highest_scores'])}\n"
                    f"• 10+ years of consecutive academic leadership in Bettiah.\n"
                    f"• Mentored directly by Manmit Shrivastva!"
                )

        # 6. Check Founder / Manmit Sir
        elif has_any(["manmit", "director", "founder", "मनमीत"]):
            intent = "founder"
            if lang == "hi":
                resp_text = (
                    "👨‍🏫 **मनमीत श्रीवास्तव (MS Manmit):**\n\n"
                    "चाणक्य क्लासेज बेतिया और लाइसमिट के संस्थापक एवं प्रमुख शिक्षक। "
                    "10+ वर्षों से CBSE के छात्रों को गणित और विज्ञान में टॉपर्स बनाने का अटूट रिकॉर्ड। "
                    "वे बेतिया कैम्पस में व्यक्तिगत क्लास लेते हैं और लाइसमिट ऐप पर लाइव पढ़ाते हैं।"
                )
            else:
                resp_text = (
                    "👨‍🏫 **Manmit Shrivastva (@msmanmit):**\n\n"
                    "Founder, Director & Lead Educator at Chanakya Classes Bettiah & Lycemit. "
                    "With 10+ years of dedicated teaching, he has mentored hundreds of CBSE board toppers. "
                    "He conducts daily classes at our Bettiah campus and live sessions on the Lycemit app."
                )

        # 7. Check Contact & Location
        elif has_any(["contact", "call", "address", "location", "phone", "helpline", "संपर्क", "फोन", "पता", "कहाँ"]):
            intent = "contact"
            info = AgentToolsRegistry.get_contact_info()
            if lang == "hi":
                resp_text = (
                    f"📍 **संपर्क एवं पता:**\n\n"
                    f"• पता: {info['address']}\n"
                    f"• हेल्पलाइन: {info['helpline']}\n"
                    f"• WhatsApp: {info['whatsapp']}\n"
                    f"• समय: {info['opening_hours']}"
                )
            else:
                resp_text = (
                    f"📍 **Contact & Location:**\n\n"
                    f"• Address: {info['address']}\n"
                    f"• Helpline: {info['helpline']}\n"
                    f"• WhatsApp: {info['whatsapp']}\n"
                    f"• Hours: {info['opening_hours']}"
                )

        # 8. Fallback
        else:
            intent = "general_fallback"
            if lang == "hi":
                resp_text = (
                    "मैं आपके प्रश्न को बेहतर ढंग से समझना चाहता हूँ। आप मुझसे पूछ सकते हैं:\n"
                    "• 'कोर्सेज कौन से हैं?'\n"
                    "• 'फीस कितनी है?'\n"
                    "• 'एडमिशन कैसे लें?'\n"
                    "• 'स्टडी मैटेरियल और किताबें'\n"
                    "• 'हेल्पलाइन नंबर क्या है?'"
                )
            else:
                resp_text = (
                    "I want to help you with that. You can ask me:\n"
                    "• 'What courses are available?'\n"
                    "• 'What is the fee structure?'\n"
                    "• 'How to take admission?'\n"
                    "• 'Tell me about CBSE study material'\n"
                    "• 'What is the campus address & phone number?'"
                )

        self.history.append({"user": text, "bot": resp_text, "lang": lang})
        return {
            "text": resp_text,
            "language": lang,
            "intent": intent,
            "history_length": len(self.history)
        }
