// Language detection function
function detectLanguage(text) {
      // Implement language detection logic here
      // For example, you can use a third-party API or library
      // to detect the language of the given text
      // Here, we use a simple heuristic to detect the language
      // based on the first few characters of the text
      const languageMap = {
          'en': /^[a-zA-Z\s]*$/,
          'es': /^[a-zA-ZÀ-ÿ\s]*$/,
          'fr': /^[a-zA-ZÀ-ÿ\s]*$/,
          'de': /^[a-zA-ZÄÖÜäöüß\s]*$/,
          // Add more language patterns here
      };
      for (const [language, pattern] of Object.entries(languageMap)) {
          if (pattern.test(text)) {
              return language;
          }
      }
      return 'en'; // return a default language if no match is found
  }
  
function startTranslation() {
      // Speech recognition
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
  
      recognition.onresult = function (event) {
          for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                  const transcript = event.results[i][0].transcript;
                  console.log(transcript);
  
                  // Check if there are at least two users in the room
                  if (zp.getUsers().length >= 2) {
                      // Ask for target language
                      const targetLanguage = prompt('Enter the target language (es for Spanish, fr for French, de for German):', 'es');
  
                      // Translation
                      translateAndSpeak(transcript, targetLanguage);
  
                      // Display transcribed speech
                      displayTranscribedSpeech(transcript);
                  } else {
                      console.log("Translation is disabled because there is only one user in the room.");
                  }
              }
          }
      };
  
      // Start speech recognition
      recognition.start();
  }
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onresult = function (event) {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              const transcript = event.results[i][0].transcript;
              console.log(transcript);
  
              // Ask for target language
              const targetLanguage = prompt('Enter the target language (es for Spanish, fr for French, de for German):', 'es');
  
              // Translation
              translateAndSpeak(transcript, targetLanguage);
  
              // Display transcribed speech
              document.getElementById('transcribed-speech').innerText = transcript;
          }
      }
  };
  
  // Start speech recognition
  recognition.start();
  
  // Translation and Text-to-speech function
  function translateAndSpeak(text, targetLanguage) {
      // Language detection
      const sourceLanguage = detectLanguage(text);
      
      // Translation
      translateText(text, sourceLanguage, targetLanguage)
          .then(translation => {
              // Text-to-speech
              speakText(translation, targetLanguage);
          })
          .catch(error => console.error(error));
  }
  
  // Translation function
  function translateText(text, sourceLanguage, targetLanguage) {
      const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}';
      return fetch(url)
          .then(response => response.json())
          .then(data => data[0][0][0])
          .catch(error => console.error(error));
  }
  
  // Text-to-speech function
  function speakText(text, language) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      window.speechSynthesis.speak(utterance);
  }
  
  // Display transcribed speech
  function displayTranscribedSpeech(transcript) {
      document.getElementById('transcribed-speech').innerText = transcript;
  }
  
  // Define a function to handle speech recognition and translation
  function startTranslation() {
      // Speech recognition
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
  
      recognition.onresult = function (event) {
          for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                  const transcript = event.results[i][0].transcript;
                  console.log(transcript);
  
                  // Ask for target language
                  const targetLanguage = prompt('Enter the target language (es for Spanish, fr for French, de for German):', 'es');
  
                  // Translation
                  translateAndSpeak(transcript, targetLanguage);
  
                  // Display transcribed speech
                  displayTranscribedSpeech(transcript);
              }
          }
      };
  
      // Start speech recognition
      recognition.start();
  }
  

  