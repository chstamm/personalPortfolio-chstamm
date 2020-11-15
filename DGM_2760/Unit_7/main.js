document.querySelector("#title").innerText = "Scalliwag's Pizzeria";
document.querySelector("#slogan").innerText = "Aye! Time for Pizza!";

let message

const pizza = {
    crust: 'thin',
    toppings: 'sausage', 
    sizes: 'small',
    buildPizza:  () => {
        message = `Your Pizza has a ${pizza.crust} crust with ${pizza.toppings}, and is a size ${pizza.sizes}. `
        document.querySelector('#userMessage').textContent = message;
    },
    shoppingList: () => {
        let flour = 1;
        let toppingSize = 1;
        if (pizza.crust === 'thick') flour *= 2; 
        if (pizza.sizes === 'large') flour *= 2;
        if (pizza.sizes === 'large') toppingSize *= 2;
        message = `You will need to purchase ${flour} cup(s) of flour, and ${toppingSize} lbs of ${pizza.toppings}.`
        document.querySelector('#userMessage').textContent = message; 
    }
}

document.querySelector('#buildPizza').addEventListener('click', 
pizza.buildPizza)
document.querySelector('#list').addEventListener('click', 
pizza.shoppingList)

document.querySelector('#thin').addEventListener('click', () =>  pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () =>  pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () =>  pizza.toppings = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () =>  pizza.toppings = 'pepperoni')

document.querySelector('#large').addEventListener('click', () =>  pizza.sizes = 'large')
document.querySelector('#small').addEventListener('click', () =>  pizza.sizes = 'small')
