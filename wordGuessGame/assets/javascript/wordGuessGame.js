let guesses = [];
let words = ["bat", "black cat", "pumpkin", "gore", "scary", 'candy', 'costumes', 'blood', "vampires", "werewolves"];
let loses = 0;
let wins = 0;
const numGuesses = 10;
let wordGuess = [];
let chosenWord = [];
let lines = [];
let plainLetter;


window.addEventListener('load', start);
document.addEventListener('keydown', logKey);

//starts functions when page loads
function start() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  wordLines();


};


//Puts lines in how many letters are in the word
function wordLines() {
  let wordLength = chosenWord.length;
  console.log("wordlength " + wordLength)
  let count = wordLength;

  while (count > 0) {
    lines.push(" _ ");
    count -= 1;
    let line = lines.join('');
    document.getElementById('lines').innerHTML = line;

  }
}





document.addEventListener('keydown', logKey);

function logKey(e) {
  guesses.push(e.key);
  
  checkMatch(guesses,chosenWord)
  
  document.getElementById('Guesses').innerHTML = guesses;
  
  if (guesses.length === numGuesses) {
    loseGame();

  }

};


function winGame() {
  wins++;

}

function loseGame() {
  loses++;
  guesses = [];
  document.getElementById('Loses').innerHTML = loses;
  if (loses === 9) {
    gameOver()

  };


};


function gameOver() {

  wins = 0;
  loses = 0;

}



