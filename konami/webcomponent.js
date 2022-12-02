class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
        @font-face {
            font-family: "konami";
            src: url("http://51.83.99.164/KonSystem-YB8j.ttf") format("truetype");
        }
        
        #konami {
            position: fixed;
            background-color: #AD0012;
            color: white;
            height: 30%;
            width: 30%;
            left: 35%;
            top: 30%;
            box-shadow: 0px 0px 10px 5px #000000;
            padding: 30px;
            font-family: konami;
            font-size: 30px;
            transition: opacity 0.5s ease-in;
        }
        
        #konami-top {
            box-shadow: 0px 0px 10px 5px #920413;
            background-color: #920413;
            overflow-y: auto;
            height: 60%;
            margin: 2%;
        }
        
        #konami-bottom {
            position: absolute;
            bottom: 10%;
        }
        
        #status {
            transition: opacity 0.3s ease-in;
        }
        
        #interim {
            color: #BBB;
        }
        
        </style>
        <title>Speech To Text</title>
      </head>
      <body>
        <div id="konami" style="opacity: 0">
          <div id="konami-top">
            <span id="final" class="text-light"></span>
            <span id="interim" class="text-secondary"></span>
          </div>
          <div id="konami-bottom">
            <span id="status" style="opacity: 0;">Veuillez réciter le code...</span><br>
            <button id="start">Démarrer l'écoute</button>
            <button id="stop">Arrêter l'écoute</button>
            <button id="delete">Supprimer le dernier mot</button>
            <button id="reset">Réinitialiser</button>
          </div>
        </div>
        
      </body>
      <script>
      const code = ["nord", "nord", "sud", "sud", "gauche", "droite", "gauche", "droite", "b", "a"];

// String for the Final Transcript
let final_transcript = "";

if ("webkitSpeechRecognition" in window) {
    // Initialize webkitSpeechRecognition
    let speechRecognition = new webkitSpeechRecognition();
  
  
    // Set the properties for the Speech Recognition object
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'fr-FR';
  
    // Callback Function for the onStart Event
    speechRecognition.onstart = () => {
      // Show the Status Element
      document.querySelector("#status").style.opacity = "1";
    };
    speechRecognition.onerror = () => {
      // Hide the Status Element
      document.querySelector("#status").style.opacity = "0";
    };
    speechRecognition.onend = () => {
      // Hide the Status Element
      document.querySelector("#status").style.opacity = "0";
    };
  
    speechRecognition.onresult = (event) => {
      // Create the interim transcript string locally because we don't want it to persist like final transcript
      let interim_transcript = "";

      console.log(event);
  
      // Loop through the results from the speech recognition object.
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
  
      // Set the Final transcript and Interim transcript.
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;

      checkCode(final_transcript);
    };
  
    // Set the onClick property of the start button
    document.querySelector("#start").onclick = () => {
      // Start the Speech Recognition
      speechRecognition.start();
    };
    // Set the onClick property of the stop button
    document.querySelector("#stop").onclick = () => {
      // Stop the Speech Recognition
      speechRecognition.stop();
    };

    document.querySelector("#delete").onclick = () => {
      final_transcript = final_transcript.substring(0, final_transcript.lastIndexOf(" "));
      document.querySelector("#final").innerHTML = final_transcript;
    };
    
    document.querySelector("#reset").onclick = () => {
      final_transcript = "";
      document.querySelector("#final").innerHTML = final_transcript;
    };
} else {
  console.log("Speech Recognition Not Available");
}

document.onkeydown = (e) => {
  if (e.keyCode == '75') {
    if (document.querySelector("#konami").style.opacity == 1) {
      document.querySelector("#konami").style.opacity = 0;
    } else {
      document.querySelector("#konami").style.opacity = 1;
    }
  }

  if (document.querySelector("#konami").style.opacity == "1") {
    if (e.keyCode == '37') {
      final_transcript += " gauche";
    }
  
    if (e.keyCode == '38') {
      final_transcript += " nord";
    }
  
    if (e.keyCode == '39') {
      final_transcript += " droite";    
    }
  
    if (e.keyCode == '40') {
      final_transcript += " sud";    
    }
  
    if (e.keyCode == '65') {
      final_transcript += " a";    
    }
  
    if (e.keyCode == '66') {
      final_transcript += " b";    
    }
  
    document.querySelector("#final").innerHTML = final_transcript;
    checkCode(final_transcript);
  }
}

function checkCode(text) {
  text = text.normalize("NFD").replace(/[\u0300-\u036f]|[\.\?\!\)]+$/g, "").trim().toLowerCase();
  let words = text.split(" ");
  
  if (words.length == code.length) {
    let isCodeCorrect = true;

    for (let i = 0; i < words.length; i++) {
      if (words[i].indexOf(code[i]) < 0) {
        isCodeCorrect = false;
      }
    }

    if (isCodeCorrect) {
      console.log("gg");
      document.querySelector("#konami").style.opacity = "0";
      final_transcript = "";
    }
  }
}
      </script>
    </html>`;
  }
}

customElements.define("speech-to-text", WebComponent);
