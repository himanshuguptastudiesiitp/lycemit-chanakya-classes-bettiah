"""
LYCEMIT AI MITRA Package
Intelligent AI Chatbot & Agent with Voice, Text & Multilingual Support
For Chanakya Classes & Lycemit Education
"""

from .chatbot import LycemitAIChatbot
from .agent import LycemitAgent
from .voice import VoiceEngine
from .multilingual import MultilingualEngine
from .tools import AgentToolsRegistry

__version__ = "1.0.0"
__author__ = "Manmit Shrivastva / Lycemit & Chanakya Classes"

__all__ = [
    "LycemitAIChatbot",
    "LycemitAgent",
    "VoiceEngine",
    "MultilingualEngine",
    "AgentToolsRegistry"
]

