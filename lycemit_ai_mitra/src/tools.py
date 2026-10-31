"""
LYCEMIT AI MITRA - Agent Tools Module
Provides structured tools that the AI Agent can execute autonomously.
"""

from typing import Any, Dict, List, Optional
from .utils import logger


COURSES_DB = [
    {
        "id": "cbse-10-toppers",
        "name_en": "Class 10th Board Toppers Batch",
        "name_hi": "कक्षा 10वीं बोर्ड टॉपर्स बैच",
        "grade": "10",
        "mode": "offline",
        "duration": "1 Year (Full Session)",
        "subjects": ["Science", "Mathematics", "Social Science", "Hindi", "English"],
        "features_en": "Fast Track Book Kit, weekly OMR mock tests, personal mentorship by Manmit Sir.",
        "features_hi": "फास्ट ट्रैक बुक किट, साप्ताहिक OMR मॉक टेस्ट, मनमीत सर द्वारा व्यक्तिगत मार्गदर्शन।",
        "base_fee": 18000,
        "location": "Supriya Cinema Road, Bettiah"
    },
    {
        "id": "cbse-9-foundation",
        "name_en": "Class 9th Pre-Board & Olympiad Foundation",
        "name_hi": "कक्षा 9वीं प्री-बोर्ड और ओलंपियाड फाउंडेशन",
        "grade": "9",
        "mode": "offline",
        "duration": "1 Year",
        "subjects": ["Science", "Mathematics", "Social Science"],
        "features_en": "Olympiad preparation, NTSE base, regular chapter-wise tests.",
        "features_hi": "ओलंपियाड तैयारी, NTSE बेस, नियमित चैप्टर-वाइज़ टेस्ट।",
        "base_fee": 15000,
        "location": "Supriya Cinema Road, Bettiah"
    },
    {
        "id": "sr-sec-science",
        "name_en": "Senior Secondary Science Batch (NEET / JEE Target)",
        "name_hi": "सीनियर सेकेंडरी विज्ञान बैच (NEET / JEE टारगेट)",
        "grade": "11-12",
        "mode": "offline",
        "duration": "2 Years",
        "subjects": ["Physics", "Chemistry", "Mathematics", "Biology"],
        "features_en": "Advanced problem solving, mock test analysis, competition focus.",
        "features_hi": "एडवांस प्रॉब्लम सॉल्विंग, मॉक टेस्ट विश्लेषण, प्रतियोगी परीक्षा फोकस।",
        "base_fee": 28000,
        "location": "Supriya Cinema Road, Bettiah"
    },
    {
        "id": "junior-diksha",
        "name_en": "Class 7th & 8th Diksha Foundation",
        "name_hi": "कक्षा 7वीं और 8वीं दीक्षा फाउंडेशन",
        "grade": "7-8",
        "mode": "offline",
        "duration": "1 Year",
        "subjects": ["Science", "Mathematics", "English"],
        "features_en": "Concept building, foundational mathematics, active doubt resolution.",
        "features_hi": "कॉन्सेप्ट बिल्डिंग, बुनियादी गणित, सक्रिय डाउट समाधान।",
        "base_fee": 12000,
        "location": "Supriya Cinema Road, Bettiah"
    },
    {
        "id": "hostel-batch",
        "name_en": "Chanakya Boys' Hostel Batch",
        "name_hi": "चाणक्य बॉयज़ हॉस्टल बैच",
        "grade": "all",
        "mode": "offline-residential",
        "duration": "Annual",
        "subjects": ["All CBSE Subjects + Supervised Evening Study"],
        "features_en": "Nutritious meals, disciplined environment, 24/7 security, outstation assistance.",
        "features_hi": "पौष्टिक भोजन, अनुशासित वातावरण, 24/7 सुरक्षा, बाहर के छात्रों के लिए विशेष सुविधा।",
        "base_fee": 65000,
        "location": "Hostel Campus, Bettiah"
    },
    {
        "id": "lycemit-online",
        "name_en": "Lycemit Online Education (Digital Access)",
        "name_hi": "लाइसमिट ऑनलाइन एजुकेशन (डिजिटल एक्सेस)",
        "grade": "6-12",
        "mode": "online",
        "duration": "Flexible / Chapter-wise",
        "subjects": ["Full CBSE Curriculum + Test Series"],
        "features_en": "Live interactive classes, chapter PDF notes, online mock tests from ₹9 & ₹99.",
        "features_hi": "लाइव इंटरएक्टिव क्लासेज, चैप्टर PDF नोट्स, ₹9 और ₹99 से ऑनलाइन मॉक टेस्ट।",
        "base_fee": 999,
        "location": "Google Play Store (Lycemit App)"
    }
]

INQUIRIES_REGISTRY: List[Dict[str, Any]] = []


class AgentToolsRegistry:
    """Registry of tools executable by the Lycemit AI Agent."""

    @staticmethod
    def search_courses(query: str = "", grade: str = "", mode: str = "") -> List[Dict[str, Any]]:
        """Search courses by keyword, grade, or mode (offline/online)."""
        results = []
        q = query.lower() if query else ""
        for c in COURSES_DB:
            match = True
            if q:
                text_corpus = f"{c['name_en']} {c['name_hi']} {' '.join(c['subjects'])} {c['features_en']}".lower()
                if q not in text_corpus:
                    match = False
            if grade and c["grade"] != grade and c["grade"] != "all":
                match = False
            if mode and mode.lower() not in c["mode"].lower():
                match = False
            if match:
                results.append(c)
        return results

    @staticmethod
    def get_fee_details(course_id: str) -> Optional[Dict[str, Any]]:
        """Retrieve detailed fee structure and features for a specific course ID."""
        for c in COURSES_DB:
            if c["id"].lower() == course_id.lower():
                return {
                    "id": c["id"],
                    "name": c["name_en"],
                    "base_fee_inr": c["base_fee"],
                    "mode": c["mode"],
                    "duration": c["duration"],
                    "installment_available": c["base_fee"] > 5000,
                    "monthly_approx_inr": round(c["base_fee"] / 10, 0) if c["base_fee"] > 5000 else c["base_fee"]
                }
        return None

    @staticmethod
    def calculate_discount_and_installments(base_amount: float, discount_percent: float = 0.0, months: int = 1) -> Dict[str, Any]:
        """Calculate discounted course fees and monthly installment breakdown."""
        discount_amount = (base_amount * discount_percent) / 100.0
        final_amount = max(0.0, base_amount - discount_amount)
        months = max(1, months)
        per_month = final_amount / months
        return {
            "original_amount_inr": base_amount,
            "discount_percent": discount_percent,
            "discount_amount_inr": discount_amount,
            "final_payable_inr": final_amount,
            "installment_months": months,
            "per_month_inr": round(per_month, 2)
        }

    @staticmethod
    def book_admission_inquiry(student_name: str, phone: str, grade: str, mode: str = "offline", notes: str = "") -> Dict[str, Any]:
        """Record an admission inquiry for counseling."""
        inquiry = {
            "inquiry_id": f"INQ-{len(INQUIRIES_REGISTRY)+1:04d}",
            "student_name": student_name.strip(),
            "phone": phone.strip(),
            "grade": grade.strip(),
            "mode": mode.strip(),
            "notes": notes.strip(),
            "status": "received",
            "followup": "Within 24 hours by Chanakya Admissions Desk"
        }
        INQUIRIES_REGISTRY.append(inquiry)
        logger.info(f"New admission inquiry registered: {inquiry['inquiry_id']} for {student_name}")
        return inquiry

    @staticmethod
    def get_toppers_and_results() -> Dict[str, Any]:
        """Retrieve verified CBSE Board toppers and press coverage statistics."""
        return {
            "highest_scores": ["96.4%", "96.2%", "95.8%", "95.2%", "94.6%"],
            "toppers": [
                {"name": "Ananya Sharma", "score": "96.4%", "batch": "Class 10 CBSE"},
                {"name": "Rohan Kumar", "score": "96.2%", "batch": "Class 10 CBSE"},
                {"name": "Aditya Verma", "score": "95.8%", "batch": "Class 10 CBSE"}
            ],
            "media_coverage": "Dainik Jagran Front Page Honor",
            "total_qualified": "500+ successful students across Bihar & India",
            "educator": "Manmit Shrivastva"
        }

    @staticmethod
    def get_contact_info() -> Dict[str, Any]:
        """Return official contact numbers, addresses, and instant messaging links."""
        return {
            "institute": "Chanakya Classes by Manmit Sir & Lycemit",
            "helpline": "+917979724568",
            "whatsapp": "https://wa.me/917979724568",
            "telegram": "https://t.me/msmanmit",
            "address": "Supriya Cinema Road, Bettiah, Bihar 845438",
            "opening_hours": "Mon-Sat 7:00 AM - 7:00 PM, Sun 8:00 AM - 1:00 PM"
        }

    @classmethod
    def get_manifest(cls) -> List[Dict[str, Any]]:
        """Return tool definitions for the agent."""
        return [
            {
                "name": "search_courses",
                "description": "Search available online or offline coaching batches by subject, grade, or mode.",
                "parameters": {"query": "string", "grade": "string", "mode": "string"}
            },
            {
                "name": "get_fee_details",
                "description": "Look up official fee structure and installment options for a course ID.",
                "parameters": {"course_id": "string"}
            },
            {
                "name": "calculate_discount_and_installments",
                "description": "Compute scholarship discounts and monthly installment plans.",
                "parameters": {"base_amount": "number", "discount_percent": "number", "months": "integer"}
            },
            {
                "name": "book_admission_inquiry",
                "description": "Register student contact details for counseling & offline seat booking.",
                "parameters": {"student_name": "string", "phone": "string", "grade": "string", "mode": "string"}
            },
            {
                "name": "get_toppers_and_results",
                "description": "Retrieve Dainik Jagran CBSE board exam results and student records.",
                "parameters": {}
            },
            {
                "name": "get_contact_info",
                "description": "Get phone helpline, WhatsApp link, Telegram handle, and Bettiah campus address.",
                "parameters": {}
            }
        ]

