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



let activeArray = []

function renderBlanks() {
    const blankSpace = document.getElementById('blankSpace');
    // empties array
    activeArray.length = 0
    // Get a random word from state.questionArray
    const randomIndex = Math.floor(Math.random() * state.questionArray.length);
    const randomWord = state.questionArray[randomIndex].word;

    // Split the randomWord into an array of letters
    activeArray = randomWord.split('');


    // Clear the previous blanks before rendering new ones
    blankSpace.innerHTML = '';

    for (let i = 0; i < activeArray.length; i++) {
        const blankSpaceElement = document.createElement('div');
        blankSpaceElement.className = 'blank-spaces';
        blankSpaceElement.textContent = activeArray[i];
        blankSpace.appendChild(blankSpaceElement);
        console.log(blankSpaceElement);

        function hideLetters() {
            blankSpaceElement.style.visibility = "hidden";
        }
        hideLetters();
    }
}



renderBlanks();
console.log(activeArray);

function showLetters() {
    let showLetterDiv = document.getElementsByClassName('blank-spaces');
    for (let i = 0; i < showLetterDiv.length; i++) {
        showLetterDiv[i].style.visibility = "visible";
    }
}
// created handleClick function
function handleClick(event) {
    let letter = event.target.textContent;
    console.log('Clicked letter:', letter);
    state.currentguesses++;
    console.log(state.currentguesses);
    if(state.currentguesses === 10){
        remove();
    }
    
    for (let i = 0; i < activeArray.length; i++) {
        if(letter === activeArray[i].toUpperCase()){
            console.log('hekki');
            
            showLetters[i];
        }
    }
}


function handleClickRender(event) {
    let render = event.target.textContent;
    console.log(render);
    if(state.currentguesses === 10){
        renderBlanks()
        state.currentguesses = 0
    }
}

// Attach the handleClick function to each button
const buttons = document.querySelectorAll('.buttons1 button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

const renderButtons = document.getElementById('renderButton');
     renderButtons.addEventListener('click', handleClickRender);


function playClickSound(clickSound) {
    var clickSound = document.getElementById(clickSound);
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
}
function remove(){
    buttons.forEach(button => {
        button.removeEventListener('click', handleClick);
    });

}

console.log(state.questionArray);
console.log(state.currentguesses);