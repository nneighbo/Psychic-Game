// const computerRps = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
// const userInput = document.getElementById("user-input");
// let computerI = document.getElementById("computer-input");
// let winText = document.getElementById("wins");
// let lossesText = document.getElementById("losses");
// let guessesLeft = document.getElementById("guesses-left");
// let guesses = 10;
// let wins = 0;
// let losses = 0;

// if (guesses > 0) {

// document.onkeyup = function (e) {
//   if (computerRps.indexOf(e.key) > -1) {
//     userInput.textContent = e.key;
//     let userGuess = e.key;
//     let computerInput = computerRps[Math.floor(Math.random() * computerRps.length)];
//     if (computerInput === userGuess) {
//       wins++
//     } else {
//       guesses--
//     }

//     userInput.innerHTML = "Current Guess Guess: " + e.key;
//     computerI.innerHTML = "Last Correct Letter: " + computerInput;
//     guessesLeft.innerHTML = "Guesses Remaining: " + guesses;
//     winText.innerHTML = "Wins: " + wins;
//     lossesText.innerHTML = "Losses: " + losses;

//   } else {
//     console.log("nope");
//   }
// }

// }

let currentScore = document.getElementById("current-score");
let currentGuesses = document.getElementById("current-guesses");
let currentLosses = document.getElementById("current-losses");
let computerI = document.getElementById("computer-input");
const userInput = document.getElementById("user-input");
let usedLetters = document.getElementById("used-letters");
let wins = 0;
let losses = 0;
let guesses = 15;
const computerRps = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
let userGuess = [];
let computerGuess = computerRps[Math.floor(Math.random() * computerRps.length)];

function reset(){
  let userGuess = [];
  let guesses = 15;
  let losses = losses++
  console.log(userGuess);
}

document.onkeyup = function (e) {
  if (guesses > 0 ) {
    let userKey = e.key.toLowerCase();
    if (userGuess.includes(userKey)) {
      console.log("already used key");
    } else {
      userGuess.push(userKey);
    }
    if (computerGuess === userKey) {
      wins++;
    } else {
      guesses--;
    }
    usedLetters.innerHTML = "Guesses Remaining: " + guesses;
    currentScore.innerHTML = "Wins: " + wins;
    currentLosses.innerHTML = "Losses: " + losses;
    userGuess.innerHTML = "Used Letters: " + userGuess
    if (guesses === 0) {
      reset();
    }
  }
}

         

// userGuess.forEach(function(element){
//   console.log(element);
// });