let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

let greeted = false; // Flag variable

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1; // Changed to a positive pitch
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    if (!greeted) { // Check if already greeted
        let day = new Date();
        let hours = day.getHours();
        if (hours >= 0 && hours < 12) {
            speak("Good Morning Sir");
        } else if (hours >= 12 && hours < 16) {
            speak("Good Afternoon Sir");
        } else {
            speak("Good Evening Sir");
        }
        greeted = true; // Set flag to true after greeting
    }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

wishMe();

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";
    
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, what can I help you?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Mr. Apoorv");
    } else if (message.includes("open youtube")) {
        speak("opening youtube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("what is your name?")) {
        speak("I am Maahi, a virtual assistant, created by Mr. Apoorv");
    } else if (message.includes("open google")) {
        speak("opening google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("opening facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("opening instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open calculator")) {
        speak("opening calculator..");
        window.open("calculator://");
    } else if (message.includes("open whatsapp")) {
        speak("opening whatsapp..");
        window.open("whatsapp://");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else {
        let finalText = "this is what I found on the internet regarding " + message.replace("maahi", "").replace("mahi", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("maahi", "").replace("mahi", "")}`, "_blank");
    }
}
