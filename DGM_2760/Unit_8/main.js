document.querySelector("#title").innerText = "Grant's Tomb";
document.querySelector("#slogan").innerText = "Literal Objects";

const question = {
  stem: "Who is burried in Grant's Tomb?",
  options: ["Greg", "Grant", "George", "Coach Z"],
  correct: 1,
  display: () => {
    document.querySelector("#stem").textContent = question.stem;
    document.querySelectorAll(".answer").forEach((option, index) => {
      option.textContent = question.options[index];
    });
  },
  check: (userChoice) => {
    if (userChoice === question.correct) {
      document.querySelector(".feedback").textContent = "You Are Correct!";
    } else {
      document.querySelector(".feedback").textContent = "You Are Quite Wrong!";
    }
  },
};

question.display();

const answers = document
  .querySelectorAll(".answer")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      question.check(index);
    });
  });
