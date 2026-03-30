const POSSIBLE_WORDS = ["obdurate", "verisimilitude",
    "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];



let newGame = function(){
    //Pick a random word
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomIndex];
    console.log("Word chosen: ", word);

    //show the dashes
    let clueString = "";
    for(let i = 0; i < word.length; i++){
        clueString += "_ ";
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
//2.put dashes = word length
//3 dfraw my starting hangman dude thing