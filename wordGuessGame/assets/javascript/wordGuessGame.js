let guesses = '';
let loses = 0;
let wins = 0;
const numGuesses = 10;
let wordGuess = [];
let lines = [];
let lettersInWord = [];
const words = ["bat", "black cat", "pumpkin", "gore", "scary", 'candy', 'costumes', 'blood', "vampires", "werewolves"]
let numBlanks = 0;
let userGuess = [];
let chosenWord = ''
let blanksAndSuccesses = [];
let guessesLeft = 6;
let wrongGuesses = [];
let numBlanksWrong = 10;



//starts functions when page loads
function start() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInWord = chosenWord.split('');
  numBlanks = lettersInWord.length
  console.log(lettersInWord)
  for (let i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push('_');

  }

  document.getElementById("WrongGuesses").innerHTML = wrongGuesses.join(' ');
  document.getElementById('lines').innerHTML = blanksAndSuccesses.join(' ');
  document.getElementById('head').style.visibility = "hidden"
  document.getElementById('arm1').style.visibility = "hidden"
  document.getElementById('arm2').style.visibility = "hidden"
  document.getElementById('leg1').style.visibility = "hidden"
  document.getElementById('leg2').style.visibility = "hidden"
  document.getElementById('body').style.visibility = "hidden"

};

/*function gameOver() {
  alert("You lost, refresh the page to try again!")
    userGuess = [];
    guessesLeft = 6;
    wins = 0;
    loses = 0;
    document.getElementById('GuessesLeft').innerHTML = guessesLeft
    
    wins = 0;
    loses = 0;
  
  }*/


function checkLetters(letter) {

  // check the guessed letter against the word
  let isLetterFound = false;
  for (let i = 0; i < numBlanks; i++) {
    if (chosenWord[i] == letter) {
      console.log("1--- " + chosenWord)
      isLetterFound = true;
    }
  }
  // if letter is found, replace the letter's blank space
  if (isLetterFound) {
    for (let i = 0; i < numBlanks; i++) {
      if (chosenWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
        document.getElementById('lines').innerHTML = blanksAndSuccesses.join(' ');

      }
    }
  }

  else {
    wrongGuesses.push(letter)
    guessesLeft--;
    document.getElementById("GuessesLeft").innerHTML = guessesLeft;
    document.getElementById("WrongGuesses").innerHTML = wrongGuesses;

  }
}

start()

document.onkeyup = function (event) {
  guesses = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("guesses " + guesses);
  checkLetters(guesses)
};





