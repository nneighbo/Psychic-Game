
var currentScore = document.getElementById("current-score");
var currentGuesses = document.getElementById("current-guesses");
var currentLosses = document.getElementById("current-losses");
const userInput = document.getElementById("user-input");
var usedLetters = document.getElementById("used-letters");
var wins = 0;
var losses = 0;
var guesses = 15;
const computerRps = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
var userGuess = [];
var computerGuess = computerRps[Math.floor(Math.random() * computerRps.length)];

var showData = function show(){
  currentGuesses.innerHTML = "Guesses Remaining: " + guesses;
  currentScore.innerHTML = "Wins: " + wins;
  currentLosses.innerHTML = "Losses: " + losses;
  usedLetters.innerHTML = "Used Letters: " + userGuess;
} 

var gameReset = function reset(){
  userGuess = [];
  guesses = 15;
  losses++
  showData();
}


document.onkeyup = function (e) {
  if (guesses > 1 ) {
    userKey = e.key.toLowerCase();
    if (userGuess.includes(userKey)) {
      alert("Letter has already been guessed!")
      guesses++
    } else {
      userGuess.push(userKey);
    }
    if (computerGuess === userKey) {
      wins++;
    } else {
      guesses--;
    }
    showData();
  }
  else {
    console.log(guesses);
    gameReset();
    console.log(guesses);
  }

}



         
