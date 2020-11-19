document.querySelector("#title").innerText = "Grant's Tomb";
document.querySelector("#slogan").innerText = "Literal Objects";

const question = {
    stem: "Who is burried in Grant's Tomb?",
    option1: "Greg",
    option2: "Grant",
    option3: "George",
    option4: "Coach Z",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = "You Are Correct!"
        } else {
            document.querySelector('.feedback').textContent = "You Are Quite Wrong!"
        }
    } 
}

question.display()



document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))






