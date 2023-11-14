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

// variable ties into uniqueWord to prevent repeats
let previousQuestions = [];

// prevents repeats between iterations of the game
function uniqueWord () {
    function randomGuess() {
    return Math.floor(Math.random() * state.questionArray.length); 
}
    let repeats = [];
    while (repeats.length < 1){
        let randomQ = randomGuess();
}
    if (!repeats.includes(randomQ) && !previousQuestions.includes(randomQ)) {repeats.push(randomQ);
} 
previousQuestions=repeats;
return repeats;
}

function renderBlanks(word) {
    const gameContainer = document.getElementsByClassName('game-container');
    gameContainer.innerHTML = '';
    
    for (let i = 0; i < word.length; i++) {
        const blankSpace = document.createElement('div');
        blankSpace.className = 'blank-space';
        wordContainer.appendChild(blankSpace);
      }
}
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

cdd

console.log(state.questionArray);
console.log(previousQuestions);