
//Setting Game
const gameMessageDiv= document.querySelector('.game__message');
const guessBox = document.querySelector('.box')

const displayMinAndMax = () => {
    const minValueElem = document.querySelector("#smaller-number");
    const maxValueElem = document.querySelector("#bigger-number");
    minValueElem.innerHTML = minValue;
    maxValueElem.innerHTML = maxValue;
}
const displayGuess = () => {
    const guessElement = document.querySelector('#guess');
    guessElement.innerHTML = guessNumber
    console.log(guessElement.innerHTML)
}

// game



//First Executing
displayMinAndMax()

