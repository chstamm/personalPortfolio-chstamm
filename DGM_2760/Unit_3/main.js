//num between 0-16

document.querySelector("#title").innerText = "Low Guessing Game";

document.querySelector("#slogan").innerText =
  "Betcha Can't Guess the Number I'm Thinking of!";

let randNum = Math.floor(Math.random() * (1 - 16) + 16);

console.log(randNum);

//let randNum = Math.floor(Math.random() * 16)

let guessed = false;
let totalGuesses = 0;
let userGuess = 0;

function guessEval() {
  totalGuesses++;
  userGuess = document.querySelector("#guess").value;
  document.querySelector("#tries").innerText = totalGuesses;
  

  let feedback = document.querySelector("#feedback");

  if (userGuess == randNum) {
    feedback.innerText = "Correctomundo!";
  } else if (userGuess > randNum && userGuess < 16) {
    feedback.innerText = "Too High!";
  } else if (userGuess < randNum && userGuess > 0) {
    feedback.innerText = "Too Low!";
  } else {
    feedback.innerText = "Please Read Instructions";
    totalGuesses -= 1;
  }
}

/* function award () {
   case 1: 
   case 2:
   case 3: 
} */