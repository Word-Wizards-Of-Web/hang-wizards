"use strict";

// tracks the amount of guesses user has made, their wins, and the array holds the question objects
let state = {
  currentguesses: 0,
  maximumGuesses: 10,
  winNumber: 0,
  questionArray: [],
  numAnswers: 0,
  totalAnswers: 0,
  lettersGuessed: [],
  currentWord: [],
};

// construtor
function Word(word, hint) {
  this.word = word;
  this.hint = hint;
  state.questionArray.push(this);
}
// will be moved into local storage eventually
new Word("variable", "a,e");
new Word("HTML", "h,t");
new Word("CSS", "c");
new Word("DOM", "o");
new Word("loop", "o");
// new Word("terminal", "i,a");
// new Word("condition", "i,o");
// new Word("selector", "o");
// new Word("margin", "i,a");
// new Word("padding", "i,a");
// new Word("border", "o,e");
// new Word("tags", "a,s");
// new Word("flexbox", "e,x");
// new Word("headings", "e,a");
// new Word("footer", "o");
// new Word("grid", "i");
// new Word("array", "a");
// new Word("function", "i,o");
// new Word("button", "t");
// new Word("meta", "e,a");
// new Word("head", "e,a");
// new Word("javascript", "a,s");
// new Word("database", "a,e");
// new Word("query", "u,e");
// new Word("event", "e,t");
// new Word("animation", "a,n");
// new Word("responsive", "e,s");
// new Word("attribute", "a,e");
// new Word("viewport", "i,e");
// new Word("element", "e,t");
// new Word("attribute", "a,e");
// new Word("prototype", "o,e");
// new Word("constructor", "o,u");
// new Word("inheritance", "i,a");

let activeArray = [];

function renderBlanks() {

  const blankSpace = document.getElementById('blankSpace');
  // empties array
  activeArray.length = 0
  // Get a random word from state.questionArray
  const randomIndex = Math.floor(Math.random() * state.questionArray.length);
  const randomWord = state.questionArray[randomIndex].word.toUpperCase();

  // Split the randomWord into an array of letters
  activeArray = randomWord.split('');
  state.currentWord = Array.from(new Set(activeArray));



  // Clear the previous blanks before rendering new ones
  blankSpace.innerHTML = '';



  for (let i = 0; i < activeArray.length; i++) {
    state.totalAnswers++;
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
    console.log(state.totalAnswers);

  }
}

// created handleLetterClick function
function handleLetterClick(event) {
  console.log(event.target);
  let letter = event.target.textContent;
  console.log(letter);
  state.lettersGuessed.push(letter);
  console.log(state.lettersGuessed);
  state.currentguesses++;
  console.log(state.currentWord);
  let divs = document.querySelectorAll('.blank-spaces');
  // remove1();

  // work on this tomorrow -----------------------------------------------------------------------------------------
  // state.currentguesses.push('#showguess');
  // const showGuessesContainer = document.getElementById('showGuess');
  // const showGuesses = document.createElement('div');
  showGuess.textContent = `Current Guesses: ${state.lettersGuessed.join(', ')}`;
  // showGuessesContainer.removeChild('');
  // showGuessesContainer.appendChild(showGuesses);


  for (let i = 0; i < divs.length; i++) {
    if (letter === divs[i].id.toUpperCase()) {
      function showLetters() {
        let showLetterDiv = divs[i];
        showLetterDiv.style.visibility = "visible";
      }
      showLetters();
      state.numAnswers++;
      if (!state.currentWord.includes(letter)) {
        state.currentGuesses++;
        document.getElementById('guessCount').textContent = state.currentGuesses;
      // console.log(state.numAnswers);
    }
    document.getElementById('winCount').textContent = state.winNumber;
    if (state.numAnswers == state.totalAnswers) {
      alert('You Won!')
      state.winNumber++;
    }
  }

  const lettersGuessedSet = new Set(state.lettersGuessed);
  state.questionArray

  console.log(state.currentWord.every(letter => lettersGuessedSet.has(letter)));
  // Need to create a scoreboard, increase the score counter by 1, click on the next round and reset the necessary states, handle animation for win
  // if (state.currentWord.every(letter => lettersGuessedSet.has(letter))) {
  //   alert('You Won!')
  //   state.winNumber++;
  //   document.getElementById('winCount').textContent = state.winNumber;
  // }
  if (state.currentguesses === 10 && state.currentWord.every(letter => !lettersGuessedSet.has(letter))) {
    alert('You Lost!');
    state.currentGuesses = 0;
    document.getElementById('guessCount').textContent = state.currentGuesses;
  }
};
// When you lose increase the loss counter by 1, handle animation for loss, reset the states after loss
if (state.currentguesses === 10) {
  remove();
  console.log(`test`);
}
//so the button can change color on click
event.target.classList.toggle('clicked');
event.target.removeEventListener('click', handleLetterClick);


if (state.currentguesses === 10) {
  remove();
  console.log(`test`);
}
}

// Have reset button 
function handleResetButton(event) {

  let render = event.target.textContent;
  console.log(render);
  let toggleElements = document.querySelectorAll('.clicked');
  toggleElements.forEach(function (element) {
    element.classList.remove('clicked')
  });
  if (state.currentguesses === 10) {
    state.currentguesses = 0;
    state.numAnswers = 0;
    state.totalAnswers = 0;
    renderBlanks();
    letterButtonsEventListener();
    state.lettersGuessed = [];
  }
}
function newRoundClickRenders(event) {
  let render = event.target.textContent;
  console.log(render);
  //toggles the buttons back to normal
  let toggleElements = document.querySelectorAll('.clicked');
  toggleElements.forEach(function (element) {
    element.classList.remove('clicked')
  });

  if (state.numAnswers == state.totalAnswers) {
    document.getElementById('winCount').textContent = state.winNumber;
    state.currentguesses = 0;
    state.numAnswers = 0;
    state.totalAnswers = 0;
    renderBlanks();
    letterButtonsEventListener();
    state.lettersGuessed = [];
  }

}
// ----------eventListeners-------------------------------------------------------------------------------------------

// Attach the handleLetterClick function to each button
function letterButtonsEventListener() {

  const buttons = document.querySelectorAll('.buttons1 button');

  buttons.forEach(button => {
    button.addEventListener('click', handleLetterClick);
  });

}

function addEventListenerToResetButton() {
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", handleResetButton);
}

function newRoundButtonFunc() {
  const newRoundButton = document.getElementById("nextButton");
  newRoundButton.addEventListener("click", newRoundClickRenders);
}

function remove() {
  const buttons = document.querySelectorAll(".buttons1 button");
  buttons.forEach((button) => {
    button.removeEventListener("click", handleLetterClick);
  });
}
function remove1(buttonId) {
  playClickSound('clickSound');
  let button = document.getElementById(buttonId);
}


function playClickSound(clickSound) {
  var clickSound = document.getElementById(clickSound);
  if (clickSound) {
    clickSound.volume = 0.2;
    clickSound.currentTime = 0;
    clickSound.play();
  }
}


// console.log(state.questionArray);
letterButtonsEventListener();
addEventListenerToResetButton();
renderBlanks();
newRoundButtonFunc();
