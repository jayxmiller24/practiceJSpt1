document.addEventListener('keyup', processGuess);

function processGuess(event) {


    let wordGuessGame = {
        userGuess: event.key,
        randomWords: ["bat", "cat", "witch", "treats", "trick", "costumes", "scary", "candy", "magic", "full moon", "fun","dark"],
        setWord: function() {
            return this.randomWords[Math.floor(Math.random() * this.randomWords.length)];
            
            
        },


    }


console.log(wordGuessGame.userGuess);

    console.log(wordGuessGame.setWord());


};

