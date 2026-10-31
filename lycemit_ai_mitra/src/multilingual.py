"""
LYCEMIT AI MITRA - Multilingual Language Processing Module
Supports English (en), Hindi (hi - Devanagari), and Hinglish (romanized Hindi).
"""

import re
from typing import Dict, List, Tuple


class MultilingualEngine:
    """Detects and processes English, Hindi (Devanagari), and Hinglish text."""

    HINGLISH_KEYWORDS = {
        "kya", "kaise", "kab", "kaha", "kahan", "kitna", "kitni", "kitne", "hai", "hain",
        "hoga", "hogi", "chahiye", "karna", "kare", "karein", "batao", "bataye", "batayein",
        "admission", "fees", "fees kitni", "sir", "madad", "padhai", "kitab", "kitabein",
        "batch", "join", "lena", "lene", "chahta", "chahti", "namaste", "pranam"
    }

    def __init__(self, default_lang: str = "en"):
        self.default_lang = default_lang

    def detect_language(self, text: str) -> str:
        """
        Detect whether the user is typing in Hindi, English, or Hinglish.
        Returns 'hi' or 'en'.
        """
        if not text:
            return self.default_lang

        # 1. Check for Devanagari script characters (\u0900 to \u097F)
        devanagari_chars = len(re.findall(r"[\u0900-\u097F]", text))
        if devanagari_chars >= 2:
            return "hi"

        # 2. Check for Hinglish romanized keywords
        tokens = set(re.findall(r"\b[a-zA-Z]+\b", text.lower()))
        hinglish_hits = tokens.intersection(self.HINGLISH_KEYWORDS)
        if len(hinglish_hits) >= 2 or (len(hinglish_hits) >= 1 and len(tokens) <= 3):
            return "hi"

        return "en"

    def tokenize(self, text: str) -> List[str]:
        """Tokenize text into lowercase words supporting English and Devanagari."""
        if not text:
            return []
        cleaned = re.sub(r"[^\w\s\u0900-\u097F]", " ", text.lower())
        return [t for t in cleaned.split() if t]

    def pick_text(self, en_text: str, hi_text: str, lang: str) -> str:
        """Helper to pick language variant based on detected language."""
        return hi_text if lang == "hi" else en_text

