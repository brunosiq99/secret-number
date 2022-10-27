
//<p class="page-text">O número secreto é maior <i class="fa-solid fa-angles-up"></i></p>
//
//

const validatesGuess = (guess) => {
    const guessNumber = parseInt(guess);
    if(Number.isNaN(guessNumber)){
       gameMessageDiv.innerHTML = `<p class="page-text">O valor é inválido <i class="fa-solid fa-x"></i></p>`;
    }
    if(guessNumber > maxValue || guessNumber < minValue){
        guessBox.innerHTML = guessNumber;
        gameMessageDiv.innerHTML = `<p class="page-text">O valor deve estar entre ${minValue} e ${maxValue}</p>`;
    }else{
        guessBox.innerHTML = guessNumber;
        if(guessNumber === secretNumber){
            const pageBody = document.body;
            pageBody.innerHTML = `
                <section class="win">
                    <h2>Você acertou!</h2>
                    <h3>O número secreto era ${secretNumber}</h3>
                </section>
            `
        }else if(guessNumber < secretNumber){
            minValue = guessNumber + 1;
            displayMinAndMax();
            gameMessageDiv.innerHTML = `<p class="page-text">O número secreto é maior <i class="fa-solid fa-angles-up"></i></p>`;
        }else{
            maxValue = guessNumber - 1;
            displayMinAndMax();
            gameMessageDiv.innerHTML = `<p class="page-text">O número secreto é menor <i class="fa-solid fa-angles-down"></i></p>`;
        } 
    }
}
