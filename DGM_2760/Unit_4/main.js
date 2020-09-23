document.querySelector("#title").innerText = "Madame Mim's Readings";

document.querySelector("#slogan").innerText = "Let me read your Fortune!";

let randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomMonth = randomInt(1, 12);
let randomDay = randomInt(1, 30);
let fate = randomInt(1, 10);

function getMonthName(randomMonth) {
  let monthName;
  switch (randomMonth) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
    default:
      name = "Not a Month";
      break;
  }
  return monthName;
}

function fortune(fate) {
  let message;
  switch (fate) {
    case 1:
      message = "take your place at Pride Rock.";
      break;
    case 2:
      message = "learn to “let it go.”";
      break;
    case 3:
      message = "find the Genie's Lamp.";
      break;
    case 4:
      message = "receive your Hogwarts letter.";
      break;
    case 5:
      message = "receive the superpowers of Spider Man.";
      break;
    case 6:
      message = "become the dragon warrior.";
      break;
    case 7:
      message = "bring honor to us all.";
      break;
    case 8:
      message = "be poisoned by an apple.";
      break;
    case 9:
      message = "fight a dragon and win.";
      break;
    case 10:
      message = "turn into a frog.";
      break;
    default:
      message = "experience and error, unfortunatey.";
      break;
  }
  return message;
}

let month = getMonthName(randomMonth);
let yourFate = fortune(fate);

const yourFortune = `On ${month} ${randomDay}, you will ${yourFate}`;

const btn = document.querySelector("#fortuneButton");

btn.addEventListener("click", function revealFortune() {
  let month = getMonthName(randomMonth);
  let yourFate = fortune(fate);
  const yourFortune = `On ${month} ${randomDay}, you will ${yourFate}`;
  randomMonth = randomInt(1, 12);
  randomDay = randomInt(1, 30);
  fate = randomInt(1, 10);
  document.querySelector("#fortune").innerText = yourFortune;
});
