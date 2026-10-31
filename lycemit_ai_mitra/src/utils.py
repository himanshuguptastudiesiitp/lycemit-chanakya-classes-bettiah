"""
LYCEMIT AI MITRA - Utility Functions and Logging
"""

import os
import json
import logging
from typing import Any, Dict, Optional

# Setup logger
logger = logging.getLogger("LycemitAIMitra")
if not logger.handlers:
    handler = logging.StreamHandler()
    formatter = logging.Formatter(
        "[%(asctime)s] [%(name)s] [%(levelname)s] %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)


def load_settings(path: Optional[str] = None) -> Dict[str, Any]:
    """Load settings.json configuration."""
    if path is None:
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        path = os.path.join(base_dir, "settings.json")
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        logger.warning(f"Could not load settings from {path}: {e}. Using defaults.")
        return {
            "project_name": "LYCEMIT AI MITRA",
            "supported_languages": ["en", "hi"],
            "default_language": "en"
        }


def format_currency_inr(amount: float) -> str:
    """Format numerical value as Indian Rupee string."""
    return f"₹{amount:,.0f}"


def clean_text(text: str) -> str:
    """Strip unnecessary whitespace and normalize text."""
    if not text:
        return ""
    return " ".join(text.strip().split())

