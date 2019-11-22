// fetch API from https://pokeapi.co/

/* async function getPokemonData(url) {
    const response = await fetch(url)
    return await response.json()
} */


async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }

}


const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokedata => {
                    populateDOM(pokedata)
                })
        }
    })

console.log(theData)

// setting up the DOM

let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let scene = document.createElement('div')
    let card = document.createElement('div')
    let front = document.createElement('div')
    let frontInfo = document.createElement('div')
    let back = document.createElement('div')
    let backInfo = document.createElement('div')
    let name = document.createElement('h1')
    let pic = document.createElement('img')

    /* fillBack(back, single_pokemon) */
 
    scene.setAttribute('class', 'scene scene--card')
    card.setAttribute('class', 'card')
    front.setAttribute('class', 'charDiv front card__face')
    frontInfo.setAttribute('class', 'front-info')
    back.setAttribute('class', 'back card__face')
    backInfo.setAttribute('class', 'back-info')
    pic.setAttribute('class', 'pics')

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = single_pokemon.name

    /* pic.src = `../images/${pokeNuffm}.png` */
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    frontInfo.appendChild(name)
    frontInfo.appendChild(pic)
    front.appendChild(frontInfo)
    back.appendChild(backInfo)
    scene.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
    mainArea.appendChild(scene)

    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });

}

function fillBack(back, data) {
    let order = createElement('p')
    order.textContent = data.order
    back.appendChild(order)

}

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

/* function nameUpper(name) {
   return name.charAt(0).toUpperCase() + name.slice(1); 
   
} */

 //how do I do this while being in the promise?






