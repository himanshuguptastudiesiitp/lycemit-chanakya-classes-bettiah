"""
Unit tests for LycemitAgent and Tools
"""

import unittest
from lycemit_ai_mitra.src.agent import LycemitAgent
from lycemit_ai_mitra.src.tools import AgentToolsRegistry


class TestLycemitAgent(unittest.TestCase):

    def setUp(self):
        self.agent = LycemitAgent()

    def test_search_courses(self):
        courses = AgentToolsRegistry.search_courses(grade="10")
        self.assertTrue(len(courses) > 0)
        self.assertEqual(courses[0]["grade"], "10")

    def test_calculate_fee_installments(self):
        plan = AgentToolsRegistry.calculate_discount_and_installments(
            base_amount=18000,
            discount_percent=10,
            months=3
        )
        self.assertEqual(plan["discount_amount_inr"], 1800)
        self.assertEqual(plan["final_payable_inr"], 16200)
        self.assertEqual(plan["per_month_inr"], 5400)

    def test_book_admission_inquiry(self):
        inquiry = AgentToolsRegistry.book_admission_inquiry(
            student_name="Rahul Verma",
            phone="9876543210",
            grade="10",
            mode="offline"
        )
        self.assertTrue(inquiry["inquiry_id"].startswith("INQ-"))
        self.assertEqual(inquiry["student_name"], "Rahul Verma")
        self.assertEqual(inquiry["status"], "received")

    def test_agent_run_task(self):
        result = self.agent.run_task("Search available courses and calculate fees for class 10")
        self.assertEqual(result["status"], "success")
        self.assertTrue(result["steps_executed"] >= 2)
        self.assertIn("courses", result["data"])
        self.assertIn("fee_plan", result["data"])
        self.assertIn("Execution Report", result["summary"])


if __name__ == "__main__":
    unittest.main()

