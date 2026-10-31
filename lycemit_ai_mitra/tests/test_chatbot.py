"""
Unit tests for LycemitAIChatbot
"""

import unittest
from lycemit_ai_mitra.src.chatbot import LycemitAIChatbot


class TestLycemitAIChatbot(unittest.TestCase):

    def setUp(self):
        self.bot = LycemitAIChatbot()

    def test_greeting_en(self):
        res = self.bot.reply("Hello there")
        self.assertEqual(res["intent"], "greeting")
        self.assertIn("Namaste", res["text"])

    def test_greeting_hi(self):
        res = self.bot.reply("नमस्ते सर")
        self.assertEqual(res["intent"], "greeting")
        self.assertEqual(res["language"], "hi")

    def test_fee_query(self):
        res = self.bot.reply("What is the fee for class 10?")
        self.assertEqual(res["intent"], "fee")
        self.assertIn("18,000", res["text"])

    def test_fee_query_hindi(self):
        res = self.bot.reply("फीस कितनी है?")
        self.assertEqual(res["intent"], "fee")
        self.assertEqual(res["language"], "hi")
        self.assertIn("फीस", res["text"])

    def test_admission_query(self):
        res = self.bot.reply("How to take offline admission in Bettiah?")
        self.assertEqual(res["intent"], "admission")
        self.assertIn("Bettiah", res["text"])

    def test_courses_query(self):
        res = self.bot.reply("Which batches are available?")
        self.assertEqual(res["intent"], "courses")
        self.assertIn("Batch", res["text"])

    def test_toppers_query(self):
        res = self.bot.reply("Who are the CBSE toppers?")
        self.assertEqual(res["intent"], "results")
        self.assertIn("96.4%", res["text"])

    def test_founder_query(self):
        res = self.bot.reply("Tell me about Manmit Sir")
        self.assertEqual(res["intent"], "founder")
        self.assertIn("Manmit", res["text"])

    def test_empty_input(self):
        res = self.bot.reply("")
        self.assertEqual(res["intent"], "empty")


if __name__ == "__main__":
    unittest.main()

