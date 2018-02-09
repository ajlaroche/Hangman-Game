var wordLibrary = ["horse", "cowboy", "shotgun", "ranch", "cattle", "longhorn", "aggie", "rodeo"];

var guessesAllowed = 25;
var guessesRemaining = guessesAllowed;

var chosenWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
console.log(chosenWord);

//Breakup the chosen word into array of letters for testing user entries
var chosenWordBreak = [];
for (var x = 0; x < chosenWord.length; x++) {
    chosenWordBreak[x] = chosenWord.charAt(x);
}


var hiddenWord = []; //initialize dashes on the screen

for (var i = 0; i < chosenWord.length; i++) {
    hiddenWord[i] = "_ ";
}

var initialDashs = "";

//Function to print dashes and with correct guesses on screen
function printGuess() {
    for (var j = 0; j < hiddenWord.length; j++) {
        initialDashs = initialDashs + hiddenWord[j] + " ";
    }
    return initialDashs;
}

printGuess(); //Prints initial dashes on screen

document.getElementById("currentWord").innerHTML = initialDashs;

var userLetterGuess;
document.onkeyup = function (event) {
    userLetterGuess = event.key.toLowerCase();
    guessesRemaining--;
    for (var k = 0; k < hiddenWord.length; k++) {
        if (userLetterGuess === chosenWordBreak[k]) {
            hiddenWord[k] = userLetterGuess;
        }
        initialDashs = ""; //re-initialize dashes to be printed on the screen
        printGuess(); //updates screen with user guess
    }

    document.getElementById("currentWord").innerHTML = initialDashs;
    document.getElementById("guessesleft").innerHTML = " " + guessesRemaining;
}

