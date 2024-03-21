const textToSpeak=document.getElementById('textToSpeak');

function textToSpeech(){
    let speechObj = new SpeechSynthesisUtterance(textToSpeak.value);
    window.speechSynthesis.speak(speechObj);
}