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
        const blankSpaceOutDiv = document.createElement('div');
        blankSpaceElement.className = 'blank-spaces';
        blankSpaceOutDiv.className = 'answerContainer';
        blankSpaceElement.id = activeArray[i];
        blankSpaceElement.textContent = activeArray[i];
        blankSpace.appendChild(blankSpaceOutDiv);
        blankSpaceOutDiv.appendChild(blankSpaceElement);
        console.log(blankSpaceElement);

        function hideLetters() {
            blankSpaceElement.style.visibility = "hidden";
        }
        hideLetters();
    }
}





// not using this function

// function showLetters() {
//     let showLetterDiv = document.getElementsByClassName('blank-spaces');
//     for (let i = 0; i < showLetterDiv.length; i++) {
//         showLetterDiv[i].style.visibility = "visible";
//     }
// }


// created handleClick function
function handleClick(event) {
    let letter = event.target.textContent;
    state.currentguesses++;
    let divs = document.querySelectorAll('.blank-spaces');

    for (let i = 0; i < divs.length; i++) {
       if (letter === divs[i].id.toUpperCase()) {
            function showLetters() {
                let showLetterDiv = divs[i];
                showLetterDiv.style.visibility = "visible";
            }
            showLetters();
        }
    }
    //so the button can change color on click
    event.target.classList.toggle('clicked');
    if (state.currentguesses === 10) {
      remove();
    }
    
}


function handleClickRender(event) {
    let render = event.target.textContent;
    console.log(render);
    if(state.currentguesses === 10){
        letterButtonsEventListener();
        renderbuttonFunc();
        renderBlanks();
        state.currentguesses = 0
    }
}

// Attach the handleClick function to each button
function letterButtonsEventListener() {
    const buttons = document.querySelectorAll('.buttons1 button');
    // change color of buttons when clicked
    // function handleClick() {
    //     this.classList.toggle('clicked');
    // }

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}

function renderbuttonFunc(){
    const renderButtons = document.getElementById('renderButton');
     renderButtons.addEventListener('click', handleClickRender);
}

// this is not working
function remove(){
    button.removeEventListener('click', handleClick);
  
}


function remove(){
    buttons.forEach(button => {
        button.removeEventListener('click', handleClick);
    });
}
function playClickSound(clickSound) {
    var clickSound = document.getElementById(clickSound);
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }

}

console.log(state.questionArray);
console.log(state.currentguesses);
letterButtonsEventListener();
renderbuttonFunc();
renderBlanks();
