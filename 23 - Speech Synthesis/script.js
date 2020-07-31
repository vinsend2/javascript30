window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const text = document.getElementById("text");
const speakButton = document.getElementById("speak");
const body = document.querySelector("body");
let voice = "белый";

const colors = {
    "белый": "#F7F7F7",
    "красный": "#BC382E",
    "оранжевый": "#FF8000",
    "жёлтый": "#F5BD00",
    "зелёный": "#388D80",
    "голубой": "#4583AA",
    "синий": "#163260",
    "фиолетовый": "#560DA6"
};

function speak() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text.value;
    speechSynthesis.speak(msg);    
}

let recognition = new SpeechRecognition();
recognition.interimResults = true; 


function recognitionVoice(e) {
    voice = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
    console.log(voice); 
    
    for (key in colors) {
        if(voice === key) {
            body.style.backgroundColor = colors[key];
        }
    }
}

recognition.addEventListener("result", recognitionVoice);

recognition.addEventListener("end", function(e) {
    recognition.start();
});

speakButton.addEventListener("click", speak);
recognition.start();