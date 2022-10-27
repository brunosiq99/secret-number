let guess = '';
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

const onSpeak = (e) => {
    guess = e.results[0][0].transcript;
    console.log(guess)
    validatesGuess(guess);
}

recognition.start();
recognition.addEventListener('result',(e) => onSpeak(e));

recognition.addEventListener('end', () => {
    recognition.start();
})