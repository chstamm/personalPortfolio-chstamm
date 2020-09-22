//num between 0-16

document.querySelector("#title").innerText = "Madame Mim's Readings";

document.querySelector("#slogan").innerText =
  "Let me read your Fortune!";

let randNum = Math.floor(Math.random() * (1 - 16) + 16);

console.log(randNum);

let guessed = false;
let totalGuesses = 0;
let userGuess = 0;

function guessEval() {
  totalGuesses++;
  userGuess = document.querySelector("#guess").value;
  document.querySelector("#tries").innerText = totalGuesses;
  let feedback = document.querySelector("#feedback");
  let rewardImg = document.querySelector("#rewardImg");

  while (rewardImg.firstChild) {
    rewardImg.removeChild(rewardImg.firstChild);
  }

  if (userGuess == randNum) {
    feedback.innerText = "Correctomundo!";
    award();
  } else if (userGuess > randNum && userGuess < 16) {
    feedback.innerText = "Too High!";
  } else if (userGuess < randNum && userGuess > 0) {
    feedback.innerText = "Too Low!";
  } else {
    feedback.innerText = "Please Read Instructions";
    totalGuesses -= 1;
  }
}

function displayImg(url) {
  let rewardImg = document.querySelector("#rewardImg");
  let ribbon = document.createElement("img");
  ribbon.src = url;
  rewardImg.appendChild(ribbon);
}

function award() {
  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
      displayImg("./Images/blue_ribbon.png");
      break;
    case 4:
    case 5:
    case 6:
      displayImg("./Images/red_ribbon.png");
      break;
    default:
      displayImg("./Images/yellow_ribbon.png");
  }
}
