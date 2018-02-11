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
var numberOflosses = 0;
var savedGuesses = "";
var savedGuessesTest = "";
var checkGuesses = [];
var guessCheckResult = false;

//Function to print dashes and with correct guesses on screen
function printGuess() {
    for (var j = 0; j < hiddenWord.length; j++) {
        initialDashs = initialDashs + hiddenWord[j] + " ";
    }
}

function celebrate() {
    document.getElementById("MainPicture").src = "./assets/images/excited-cowboy.gif";
    document.getElementById("Intro").innerHTML = "You Win!";
    setTimeout(function () {
        document.getElementById("MainPicture").src = "./assets/images/h0.png";
        document.getElementById("Intro").innerHTML = "Make Your First Guess";
    }, 3000);
}
function loser(){
    document.getElementById("MainPicture").src = "./assets/images/loser.gif";
    document.getElementById("Intro").innerHTML = "You Lost!";
    setTimeout(function () {
        document.getElementById("MainPicture").src = "./assets/images/h0.png";
        document.getElementById("Intro").innerHTML = "Make Your First Guess";
    }, 3000);
}
//This function resets the game sheet to starting point
function resetsheet() {

    //reinitialize variables
    guessesRemaining = guessesAllowed;
    savedGuesses = "";
    savedGuessesTest = "";
    hiddenWord = [];
    checkGuesses = [];

    chosenWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    console.log(chosenWord);

    //Breakup the chosen word into array of letters for testing user entries

    for (var x = 0; x < chosenWord.length; x++) {
        chosenWordBreak[x] = chosenWord.charAt(x);
    }

    for (var i = 0; i < chosenWord.length; i++) {
        hiddenWord[i] = "_ ";
    }
    initialDashs = "";

    printGuess(); //Prints initial dashes on screen
    document.getElementById("currentWord").innerHTML = initialDashs;
    document.getElementById("guessesleft").innerHTML = " " + guessesAllowed;
    document.getElementById("numberOfwins").innerHTML = numberOfWins + " Wins " + numberOflosses + " Losses";
    document.getElementById("LetterGuesses").innerHTML = savedGuesses;

}

resetsheet();

//This function checks the user guess for possible repeat
function checkRepeatGuesses(userentry) {

    for (var z = 0; z < (savedGuessesTest.length + 1); z++) {
        checkGuesses[z] = savedGuessesTest.charAt(z);
        if (userentry === checkGuesses[z]) {
            guessCheckResult = true; { break; }
        } else {
            guessCheckResult = false;
        }
        console.log("checkguess= " + guessCheckResult)

    }
    if (guessCheckResult === false) {
        guessesRemaining--;
        savedGuesses = savedGuesses + " " + userLetterGuess.toUpperCase() + ",";
    }
}

//This is the main section of the code, what happens when the user presses a key
document.onkeyup = function (event) {
    document.getElementById("MainPicture").src = "./assets/images/h0.png";
    userLetterGuess = event.key.toLowerCase();

    console.log(savedGuessesTest);

    checkRepeatGuesses(userLetterGuess);

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
        celebrate();
        resetsheet();

    } else {
        document.getElementById("Intro").innerHTML = "Choose Another Letter";
    }
    if (guessesRemaining === 0) {
        numberOflosses++;
        loser();
        resetsheet();
    }
}

