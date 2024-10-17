README :

 # Video Conferencing App with Speech Translation

This project is a web-based video conferencing application integrated with ZegoUIKitPrebuilt for video conferences and a speech recognition system that translates spoken language into different languages. The app allows users to join a video conference room, detect their speech, and translate the spoken text into other languages in real-time.

## Features

1. Video Conferencing: 
   - Users can join a video conference using a room ID.
   - Video conferencing is powered by **ZegoUIKitPrebuilt**.
   - Options to toggle camera, microphone, screen sharing, and view participant lists.

2. Speech Recognition: 
   - Speech-to-text conversion using **webkitSpeechRecognition**.
   - Continuous speech recognition that captures speech in real time.
   
3. Real-Time Translation: 
   - Translates spoken words into various languages.
   - Languages supported: English (default), Spanish (es), French (fr), German (de).
   
4. Text-to-Speech: 
   - Converts the translated text into spoken language using **SpeechSynthesis**.

## Setup and Usage

### Prerequisites

- You need a **server** to host the HTML file.
- A browser that supports `webkitSpeechRecognition` and `SpeechSynthesis`.

### Steps to run the application

1. Clone or download the project** to your local machine.
   
2. Open the `index.html` file** in a modern browser (e.g., Chrome).

3. Joining a Room:
   - By default, a random room ID and user ID are generated.
   - Share the generated link to allow others to join as hosts.

4. Enable Speech Translation:
   - Once in the room, speech recognition starts when you initiate it.
   - You will be prompted to choose a target language (e.g., `es` for Spanish).
   
5. Translation and Speech:
   - Your speech will be transcribed in real-time.
   - The app will automatically translate your speech and speak the translated text.

# Important Variables

- appID: The application ID from Zego Cloud.
- serverSecret: The secret key for generating tokens.
- roomID, userID, userName: Generated dynamically or provided via the URL.
- kitToken: Used to authenticate and join the video conference.

