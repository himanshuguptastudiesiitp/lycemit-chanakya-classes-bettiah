"""
Unit tests for MultilingualEngine
"""

import unittest
from lycemit_ai_mitra.src.multilingual import MultilingualEngine


class TestMultilingualEngine(unittest.TestCase):

    def setUp(self):
        self.nlp = MultilingualEngine()

    def test_english_detection(self):
        self.assertEqual(self.nlp.detect_language("Hello what is the fee?"), "en")
        self.assertEqual(self.nlp.detect_language("Can I enroll in the classroom batch?"), "en")

    def test_hindi_devanagari_detection(self):
        self.assertEqual(self.nlp.detect_language("नमस्ते, मुझे क्लास 10 में एडमिशन लेना है"), "hi")
        self.assertEqual(self.nlp.detect_language("फीस कितनी है?"), "hi")

    def test_hinglish_detection(self):
        self.assertEqual(self.nlp.detect_language("admission kaise le"), "hi")
        self.assertEqual(self.nlp.detect_language("fees kitni hai"), "hi")

    def test_tokenization(self):
        tokens = self.nlp.tokenize("Hello, Manmit Sir! नमस्ते")
        self.assertIn("hello", tokens)
        self.assertIn("manmit", tokens)
        self.assertIn("नमस्ते", tokens)


if __name__ == "__main__":
    unittest.main()

