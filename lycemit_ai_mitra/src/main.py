"""
LYCEMIT AI MITRA - Main Application Entrypoint
Run interactive CLI chat, voice dialogue, or autonomous agent tasks.
"""

import sys
import argparse
from typing import Optional

# Ensure UTF-8 stdout/stderr on Windows terminal
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

from .chatbot import LycemitAIChatbot
from .agent import LycemitAgent
from .voice import VoiceEngine
from .multilingual import MultilingualEngine
from .utils import logger


def run_interactive_chat(voice_output: bool = False):
    """Run interactive text chat in terminal."""
    bot = LycemitAIChatbot()
    voice = VoiceEngine() if voice_output else None

    print("\n" + "=" * 65)
    print("  🎓 LYCEMIT AI MITRA — AI Chatbot & Agent (Chanakya Classes)")
    print("  Type your questions in English or Hindi (or type 'exit' to quit)")
    print("=" * 65 + "\n")

    initial = bot.reply("hello")
    print(f"AI Mitra: {initial['text']}\n")
    if voice_output and voice:
        voice.speak(initial['text'], initial['language'])

    while True:
        try:
            user_input = input("You: ").strip()
            if not user_input:
                continue
            if user_input.lower() in ["exit", "quit", "q", "bye"]:
                bye = bot.reply("bye")
                print(f"\nAI Mitra: {bye['text']}\n")
                if voice_output and voice:
                    voice.speak(bye['text'], bye['language'])
                break

            response = bot.reply(user_input)
            print(f"\nAI Mitra: {response['text']}\n")
            if voice_output and voice:
                voice.speak(response['text'], response['language'])

        except (KeyboardInterrupt, EOFError):
            print("\nExiting LYCEMIT AI Mitra. Jai Hind!")
            break


def run_agent_task(task: str):
    """Run an autonomous agent task with tool execution."""
    agent = LycemitAgent()
    print(f"\n[Agent Planning Task]: {task}")
    result = agent.run_task(task)
    print("\n" + result["summary"])
    print(f"\n(Steps executed: {result['steps_executed']})")


def main():
    parser = argparse.ArgumentParser(description="LYCEMIT AI MITRA - Bilingual AI Chatbot & Agent")
    parser.add_argument("--mode", choices=["chat", "voice", "agent", "query"], default="chat",
                        help="Execution mode (chat, voice, agent, or single query)")
    parser.add_argument("--task", type=str, default="", help="Task description for agent mode")
    parser.add_argument("--query", type=str, default="", help="Single question to answer")
    parser.add_argument("--voice-out", action="store_true", help="Enable voice TTS narration")

    args = parser.parse_args()

    if args.query:
        bot = LycemitAIChatbot()
        ans = bot.reply(args.query)
        print(f"\nQuestion: {args.query}")
        print(f"Answer ({ans['language']}):\n{ans['text']}\n")
        return

    if args.mode == "agent":
        task = args.task or "Find available batches and calculate fees for Class 10"
        run_agent_task(task)
    elif args.mode == "voice":
        run_interactive_chat(voice_output=True)
    else:
        run_interactive_chat(voice_output=args.voice_out)


if __name__ == "__main__":
    main()
