const POSSIBLE_WORDS = ["obdurate", "verisimilitude",
    "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var word = ""; //the word that will be chosen
var guesses = ""; //this will be all the guesses
var guessCount; // current number of guesses
const MAX_GUESSES = 6; //max number of guesses 
var endGame = false; //stop game from playing when completed (win or lose)

let newGame = function(){
    //Pick a random word
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex]; // choose a random word from POSSIBLE_WORDS Array
    guesses = "";
    endGame = false;
    updatePage();
}
//update page elements
let updatePage = function(){
    let clueString = ""; //where the letters and underscores will be when guessing
    for(let i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " "; //add the corectly guessed latter
        }else{
            clueString += "_ "; //place underscores for unknown letters
        }
        
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    if (guessCount === 0){ // ran out of guesses
        guessArea.textContent = "Game Over!"
        endGame = true;
    }else{// reprint the guessed list
        guessArea.textContent = "Guesses: " + guesses;
    }
    if (clue.textContent.split(" ").join("") === word){ //win condition
        guessArea.textContent = "You Win!"
        endGame = true;
    }

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`; //update hangman pic based on guess count
}

let guessLetter = function(){
    if (word != "" && endGame != true){
        let input = document.getElementById("guess");
        let letter = input.value;
        letter = letter.toLowerCase(); //make all inputs lower case
        if (guesses.includes(letter)){
            return;
        } //prevent guessing the same letter again
        if(word.indexOf(letter) < 0){
            guessCount--; //lower guess count by one
        }
        guesses += letter; //add the recently guessed letter to the guesses pool
        input.value = ""; // Guess box is cleared after every guess
        updatePage();
    }
}

//2.put dashes = word length
//3 dfraw my starting hangman dude thing