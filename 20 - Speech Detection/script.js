`use strict`;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector(".words");
const start = document.getElementById("start");
const clear = document.getElementById("clear");

let rec = new SpeechRecognition();
rec.interimResults = true;

let p = document.createElement("p");
words.appendChild(p);

start.addEventListener("click", function() {
    rec.start();
    this.disabled = true;
    this.innerHTML = "Записываем...";
});

clear.addEventListener("click", function() {
    words.innerHTML = "";
    p = document.createElement("p");
    words.appendChild(p);
});

rec.addEventListener("result", (e) => {
    let text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    p.innerHTML = text;
});

rec.addEventListener("end", function(e) {
    if (p.innerHTML) {
        p = document.createElement("p");
        words.appendChild(p);
    }
    rec.start();
});