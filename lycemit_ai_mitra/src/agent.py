"""
LYCEMIT AI MITRA - Autonomous Agent Module
Coordinates multi-step tool calls, reasoning steps, and task fulfillment.
"""

from typing import Any, Dict, List, Optional
from .tools import AgentToolsRegistry
from .multilingual import MultilingualEngine
from .utils import logger


class LycemitAgent:
    """Autonomous agent capable of reasoning, selecting tools, and executing educational tasks."""

    def __init__(self, max_steps: int = 5):
        self.max_steps = max_steps
        self.tools = AgentToolsRegistry()
        self.nlp = MultilingualEngine()

    def run_task(self, task_description: str, lang: Optional[str] = None) -> Dict[str, Any]:
        """
        Execute an agentic workflow based on task description.
        Returns execution trace and final output.
        """
        if not task_description:
            return {"status": "error", "error": "Empty task provided."}

        detected_lang = lang or self.nlp.detect_language(task_description)
        tokens = self.nlp.tokenize(task_description)
        task_lower = task_description.lower()

        trace: List[Dict[str, Any]] = []
        result_data: Dict[str, Any] = {}

        # 1. Plan and execute appropriate tools
        # Check if inquiry booking requested
        if any(w in task_lower for w in ["inquiry", "book", "admit", "register", "नामांकन", "दाखिला"]):
            step_name = "Book Admission Inquiry"
            # Extract basic params
            student = "Aspiring Student"
            phone = "Pending Verification"
            grade = "10"
            for t in tokens:
                if t.isdigit() and len(t) == 10:
                    phone = t
                elif t in ["6", "7", "8", "9", "10", "11", "12"]:
                    grade = t
            inquiry_res = self.tools.book_admission_inquiry(student, phone, grade, "offline")
            trace.append({"step": step_name, "tool": "book_admission_inquiry", "output": inquiry_res})
            result_data["inquiry"] = inquiry_res

        # Check if course search requested
        if any(w in task_lower for w in ["course", "batch", "class", "program", "कोर्स", "बैच", "कक्षा"]):
            grade = ""
            for g in ["10", "9", "11", "12", "7", "8"]:
                if g in task_lower:
                    grade = g
                    break
            courses = self.tools.search_courses(query="", grade=grade, mode="")
            trace.append({"step": "Search Courses", "tool": "search_courses", "output": f"Found {len(courses)} courses"})
            result_data["courses"] = courses

        # Check if fee calculation requested
        if any(w in task_lower for w in ["fee", "fees", "cost", "installment", "discount", "फीस", "खर्च"]):
            calc = self.tools.calculate_discount_and_installments(18000, discount_percent=10, months=3)
            trace.append({"step": "Calculate Fee Plan", "tool": "calculate_discount_and_installments", "output": calc})
            result_data["fee_plan"] = calc

        # Check if results/toppers requested
        if any(w in task_lower for w in ["result", "topper", "toppers", "marks", "dainik jagran", "रिजल्ट", "टॉपर"]):
            toppers = self.tools.get_toppers_and_results()
            trace.append({"step": "Fetch CBSE Toppers", "tool": "get_toppers_and_results", "output": toppers})
            result_data["toppers"] = toppers

        # Default fallback to contact info if no specific tool matched
        if not trace:
            contact = self.tools.get_contact_info()
            trace.append({"step": "Retrieve Contact Details", "tool": "get_contact_info", "output": contact})
            result_data["contact"] = contact

        # Synthesize agent response
        summary = self._synthesize_summary(result_data, detected_lang)

        return {
            "status": "success",
            "task": task_description,
            "language": detected_lang,
            "steps_executed": len(trace),
            "trace": trace,
            "data": result_data,
            "summary": summary
        }

    def _synthesize_summary(self, data: Dict[str, Any], lang: str) -> str:
        """Synthesize human-friendly bilingual text from execution results."""
        lines = []
        if lang == "hi":
            lines.append("🎓 **LYCEMIT AI एजेंट कार्य निष्पादन रिपोर्ट:**\n")
            if "courses" in data:
                lines.append(f"• **उपलब्ध बैच ({len(data['courses'])} पाए गए):**")
                for c in data["courses"][:3]:
                    lines.append(f"   - {c['name_hi']} (मोड: {c['mode']})")
            if "fee_plan" in data:
                fp = data["fee_plan"]
                lines.append(f"• **फीस विवरण:** कुल: ₹{fp['final_payable_inr']:,.0f} (मासिक किस्त: ₹{fp['per_month_inr']:,.0f})")
            if "toppers" in data:
                lines.append(f"• **टॉपर्स रिकॉर्ड:** उच्चतम स्कोर: {', '.join(data['toppers']['highest_scores'][:3])}")
            if "inquiry" in data:
                lines.append(f"• **एडमिशन इंक्वायरी रजिस्टर्ड:** ID: {data['inquiry']['inquiry_id']}")
        else:
            lines.append("🎓 **LYCEMIT AI Agent Execution Report:**\n")
            if "courses" in data:
                lines.append(f"• **Available Batches ({len(data['courses'])} found):**")
                for c in data["courses"][:3]:
                    lines.append(f"   - {c['name_en']} (Mode: {c['mode']})")
            if "fee_plan" in data:
                fp = data["fee_plan"]
                lines.append(f"• **Fee Structure:** Total: ₹{fp['final_payable_inr']:,.0f} (Monthly installment: ₹{fp['per_month_inr']:,.0f})")
            if "toppers" in data:
                lines.append(f"• **CBSE Toppers:** Top scores: {', '.join(data['toppers']['highest_scores'][:3])}")
            if "inquiry" in data:
                lines.append(f"• **Admission Inquiry Registered:** ID: {data['inquiry']['inquiry_id']}")

        return "\n".join(lines)

