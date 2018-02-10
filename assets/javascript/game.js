var wordLibrary = ["horse", "cowboy", "shotgun", "ranch", "cattle", "longhorn", "aggie", "rodeo"];

var initialDashs = "";
var chosenWord = "";
var userwordtest = ""; //used to test user word
var userwordtestresult = "";
var guessesRemaining = 0;
var guessesAllowed = 15;
var hiddenWord = [];
var chosenWordBreak = [];
var userLetterGuess;
var numberOfWins = 0;
var savedGuesses = "";
var savedGuessesTest = "";
var checkGuesses = [];
var guessCheckResult = false;

//Function to print dashes and with correct guesses on screen
function printGuess() {
    for (var j = 0; j < hiddenWord.length; j++) {
        initialDashs = initialDashs + hiddenWord[j] + " ";
    }
    return initialDashs;
}

function resetsheet() {

    guessesRemaining = guessesAllowed;
    savedGuesses = "";

    chosenWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    console.log(chosenWord);

    //Breakup the chosen word into array of letters for testing user entries

    for (var x = 0; x < chosenWord.length; x++) {
        chosenWordBreak[x] = chosenWord.charAt(x);
    }

    hiddenWord = []; //used to reset the dashes
    checkGuesses = [];

    for (var i = 0; i < chosenWord.length; i++) {
        hiddenWord[i] = "_ ";
    }
    initialDashs = "";

    printGuess(); //Prints initial dashes on screen

}

resetsheet();

document.getElementById("currentWord").innerHTML = initialDashs;
document.getElementById("guessesleft").innerHTML = " " + guessesAllowed;
document.getElementById("numberOfwins").innerHTML = numberOfWins + " Wins";

document.onkeyup = function (event) {
    userLetterGuess = event.key.toLowerCase();
    // guessesRemaining--;
    console.log(savedGuessesTest);
    for (var z = 0; z < savedGuessesTest.length; z++) {
        checkGuesses[z] = savedGuessesTest.charAt(z);
        if (userLetterGuess === checkGuesses[z]) {
            guessCheckResult = true;
        } else {
            guessCheckResult = false;

        }
        console.log("checkguess= " + guessCheckResult)

    }
    if (guessCheckResult === false) {
        guessesRemaining--;
        savedGuesses = savedGuesses + " " + userLetterGuess.toUpperCase() + ",";
    }
    savedGuessesTest = savedGuessesTest + userLetterGuess;


    for (var k = 0; k < hiddenWord.length; k++) {
        if (userLetterGuess === chosenWordBreak[k]) {
            hiddenWord[k] = userLetterGuess;
        }
        initialDashs = ""; //re-initialize dashes to be printed on the screen
        printGuess(); //updates screen with user guess
    }
    for (var y = 0; y < hiddenWord.length; y++) {
        userwordtest = userwordtest + hiddenWord[y];
    }
    document.getElementById("currentWord").innerHTML = initialDashs;
    document.getElementById("guessesleft").innerHTML = " " + guessesRemaining;
    document.getElementById("LetterGuesses").innerHTML = savedGuesses;
    userwordtestresult = userwordtest;
    userwordtest = "";

    if (userwordtestresult === chosenWord) {
        numberOfWins++;
        resetsheet();
        document.getElementById("currentWord").innerHTML = initialDashs;
        document.getElementById("guessesleft").innerHTML = " " + guessesAllowed;
        document.getElementById("numberOfwins").innerHTML = numberOfWins + " Wins";
        document.getElementById("Intro").innerHTML = "Press Any Key to Get Started!";
        document.getElementById("LetterGuesses").innerHTML = savedGuesses;

    } else {
        document.getElementById("Intro").innerHTML = "Choose Another Letter";
    }
}
