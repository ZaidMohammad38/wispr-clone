# Wispr Clone (Voice to Text Demo)

This is a basic prototype inspired by Wispr AI.

The application records audio using the browser's MediaRecorder API and
simulates a speech-to-text transcription to demonstrate the end-to-end
recording and transcription flow.

## Features
- Start / Stop audio recording
- Microphone access using browser APIs
- Simulated transcription output
- Simple and clean UI

## Technologies Used
- HTML
- CSS
- JavaScript
- MediaRecorder API

## How to Run
1. Open `index.html` in a modern browser (Chrome recommended)
2. Allow microphone permission
3. Click **Start Recording**
4. Speak and click **Stop Recording**
5. View the transcribed output

## Speech-to-Text Status
This project currently uses a mock transcription to simulate
speech-to-text functionality.

Real-time Speech-to-Text APIs (such as Deepgram) were not integrated to
keep the project self-contained and avoid exposing API keys in a public
repository, while still demonstrating the complete recording flow.

## Future Improvements
- Integrate real Speech-to-Text API (Deepgram, Whisper, Web Speech API)
- Backend support using Tauri / Node.js
- Audio file upload support

---
Assignment completed as a functional frontend prototype.
