"""
LYCEMIT AI MITRA - Voice Engine Module
Provides Text-to-Speech (TTS) and Speech-to-Text (STT) capabilities with resilient fallbacks.
"""

from typing import Optional, Callable
from .utils import logger


class VoiceEngine:
    """Handles speech synthesis and speech recognition."""

    def __init__(self, speech_rate: int = 150, volume: float = 0.9):
        self.speech_rate = speech_rate
        self.volume = volume
        self.tts_engine = None
        self.recognizer = None
        self.has_tts = False
        self.has_stt = False

        # Attempt to initialize pyttsx3
        try:
            import pyttsx3
            self.tts_engine = pyttsx3.init()
            self.tts_engine.setProperty('rate', self.speech_rate)
            self.tts_engine.setProperty('volume', self.volume)
            self.has_tts = True
            logger.info("pyttsx3 TTS engine initialized successfully.")
        except Exception as e:
            logger.info(f"pyttsx3 not available or no audio output device ({e}). Text output fallback active.")

        # Attempt to initialize SpeechRecognition
        try:
            import speech_recognition as sr
            self.recognizer = sr.Recognizer()
            self.has_stt = True
            logger.info("SpeechRecognition STT engine initialized successfully.")
        except Exception as e:
            logger.info(f"SpeechRecognition not available ({e}). Keyboard text input fallback active.")

    def speak(self, text: str, lang: str = "en") -> bool:
        """
        Synthesize speech from text.
        Falls back to formatted terminal output if TTS hardware is unavailable.
        """
        if not text:
            return False

        if self.has_tts and self.tts_engine:
            try:
                # Filter special emojis/symbols for clearer pronunciation
                clean_speech = text.replace("•", " ").replace("₹", "Rupees ").replace("🙏", "").replace("📚", "")
                self.tts_engine.say(clean_speech)
                self.tts_engine.runAndWait()
                return True
            except Exception as e:
                logger.warning(f"TTS synthesis error: {e}")

        # Fallback narration
        print(f"\n[AI Mitra Voice ({lang})]: {text}")
        return True

    def listen_from_microphone(self, timeout: int = 5, lang: str = "en-IN") -> Optional[str]:
        """
        Listen to microphone audio and convert to text.
        Returns recognized string or None.
        """
        if not self.has_stt or not self.recognizer:
            logger.warning("STT hardware or library not available. Please input via text.")
            return None

        import speech_recognition as sr
        try:
            with sr.Microphone() as source:
                logger.info("Listening from microphone... Speak now.")
                self.recognizer.adjust_for_ambient_noise(source, duration=0.5)
                audio = self.recognizer.listen(source, timeout=timeout)
                logger.info("Processing speech audio...")
                transcript = self.recognizer.recognize_google(audio, language=lang)
                return transcript
        except sr.WaitTimeoutError:
            logger.info("Voice listening timed out (no speech detected).")
            return None
        except sr.UnknownValueError:
            logger.info("Could not understand audio.")
            return None
        except Exception as e:
            logger.warning(f"Microphone recording error: {e}")
            return None

    def transcribe_audio_file(self, audio_file_path: str, lang: str = "en-IN") -> Optional[str]:
        """Transcribe a recorded WAV audio file."""
        if not self.has_stt or not self.recognizer:
            return None
        import speech_recognition as sr
        try:
            with sr.AudioFile(audio_file_path) as source:
                audio = self.recognizer.record(source)
                return self.recognizer.recognize_google(audio, language=lang)
        except Exception as e:
            logger.warning(f"Audio file transcription error: {e}")
            return None

