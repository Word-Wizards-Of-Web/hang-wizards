'use strict'

// tracks the amount of guesses user has made, their wins, and the array holds the question objects
let state = {
    currentguesses: 0,
    maximumGuesses: 10,
    winNumber:0,
    questionArray: [],
}

// construtor
function Questions (word, hint){
    this.word = word;
    this.hint = hint;
    state.questionArray.push(this);
}
// will be moved into local storage eventually
new Questions ('variable', 'a,e')
new Questions ('HTML', 'h,t')
new Questions ('CSS', 'c')
new Questions ('DOM','o')
new Questions ('loop', 'o')
new Questions ('terminal', 'i,a')
new Questions ('condition', 'i,o')
new Questions ('selector', 'o')
new Questions ('margin', 'i,a')
new Questions ('padding', 'i,a')
new Questions ('border', 'o,e')
new Questions ('tags', 'a,s')
new Questions ('flexbox', 'e,x')
new Questions ('headings', 'e,a')
new Questions ('footer', 'o')
new Questions ('grid', 'i')
new Questions ('array', 'a')
new Questions ('function', 'i,o')
new Questions ('button', 't')
new Questions ('meta', 'e,a')
new Questions ('head', 'e,a') 
// variable ties into uniqueWord to prevent repeats
// let previousQuestions = [];

// prevents repeats between iterations of the game
// function uniqueWord() {
//     function randomGuess() {
//         return Math.floor(Math.random() * state.questionArray.length);
//     }

//     let repeats = [];
//     let randomQ;

//     while (repeats.length < 1) {
//         randomQ = randomGuess();
//             console.log("RandomQ:", randomQ);
//         if (!repeats.includes(randomQ) && !previousQuestions.includes(randomQ)) {
//             repeats.push(randomQ);
//         }
//     }

//     previousQuestions = repeats;
//     console.log(repeats); // Log the value of repeats
//     return repeats;
// }

// uniqueWord();

function renderBlanks() {
    const blankSpace = document.getElementById('blankSpace');
    
    // Get a random word from state.questionArray
    const randomIndex = Math.floor(Math.random() * state.questionArray.length);
    const randomWord = state.questionArray[randomIndex].word;

    // Split the randomWord into an array of letters
    const wordArray = randomWord.split('');
        console.log(wordArray);
    // Clear the previous blanks before rendering new ones
    blankSpace.innerHTML = '';

    for (let i = 0; i < wordArray.length; i++) {
        const blankSpaceElement = document.createElement('span');
        blankSpaceElement.className = 'blank-spaces';
        blankSpaceElement.textContent = ' _ ';
        blankSpace.appendChild(blankSpaceElement);
    }
}

renderBlanks();

// created handleClick function
function handleClick(event) {
    let letter = event.target.textContent;
    console.log('Clicked letter:', letter);
}

// Attach the handleClick function to each button
const buttons = document.querySelectorAll('.buttons1 button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});



console.log(state.questionArray);
