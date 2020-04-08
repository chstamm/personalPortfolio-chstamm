document.querySelector('#name').innerText = "Joe's Bed and Breakfast"
document.querySelector('#slogan').innerText = 'The Best Around!'



let custName = prompt("Can you please give me your name?")

let welcomeMessage = `Hello ${custName}, welcome to the Lodge!`

document.querySelector ('#welcome').innerText = welcomeMessage