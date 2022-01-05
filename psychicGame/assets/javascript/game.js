const computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let totalWins = 0;
let totalLoses = 0;
let guessLeft = 9;
let computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
let guessFar = [];

document.addEventListener('keyup', processGuess);

function processGuess(event) {
    const userGuess = event.key;

    if (userGuess === computerGuess) {

        winGame();
    } 
    else if(guessLeft <= 0 ) {
        reset();

    }

    else {
        loseGame();
    };
    
    console.log("computer Guess  " + computerGuess + "  and userGuess   " + userGuess)


    function reset() {
        document.getElementById("GL").innerHTML = guessLeft = 9;
        computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        guessFar = [];
        document.getElementById("GSF").innerHTML = guessFar;

    };


    function winGame() {
        totalWins++;
        document.getElementById("win").innerHTML = totalWins;
        reset();
    };

    function loseGame() {
        totalLoses++;
        guessLeft--;
        guessFar.push(userGuess);
        document.getElementById("GL").innerHTML = guessLeft;
        document.getElementById("GSF").innerHTML = guessFar;
        document.getElementById("Loss").innerHTML = totalLoses;

    
    };

};

