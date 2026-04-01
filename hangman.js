const POSSIBLE_WORDS = ["obdurate", "verisimilitude",
    "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";//this will be all the guesses

let newGame = function(){
    //Pick a random word
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
}

let updatePage = function(){
    let clueString = "";
    for(let i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }else{
            clueString += "_ ";
        }
        
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: " + guesses;
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();
    guesses +=letter
    updatePage();
}

//2.put dashes = word length
//3 dfraw my starting hangman dude thing