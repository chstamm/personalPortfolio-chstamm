// fetch API from https://pokeapi.co/

/* async function getPokemonData(url) {
    const response = await fetch(url)
    return await response.json()
} */


 class Pokemon {
     constructor(id, name) {
         this.id = id;
         this.name = name;
     }
 }

 const random = new Pokemon(900, 'random')

 const button = document.querySelector('#newPokemon')
 button.addEventListener('click', function(){
     let pokeID = prompt("Please enter a number for a new pokemon card!")
     if (pokeID > 0 && pokeID <= 807) {
     getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then(result => {
         populateDOM(result)
     })
} else {
    alert('Sorry! This number will not pull up a Pokemon.')
}
})

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
                    //populateDOM(random)
                })
        }
    })

console.log(theData)

// setting up the DOM

let headerArea = document.querySelector('header')
let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let scene = document.createElement('div')
    let card = document.createElement('div')
    let front = document.createElement('div')
    let frontInfo = document.createElement('div')
    let back = document.createElement('div')
    let backInfo = document.createElement('div')
    /* let name = document.createElement('h1')
    let pic = document.createElement('img') */
    /* let headerPic = document.createElement('img') */


 
    scene.setAttribute('class', 'scene scene--card')
    card.setAttribute('class', 'card')
    front.setAttribute('class', 'charDiv front card__face')
    frontInfo.setAttribute('class', 'front-info')
    back.setAttribute('class', 'back card__face')
    backInfo.setAttribute('class', 'back-info')
    /* headerPic.setAttribute('class', 'header-pic') */

  
    front.appendChild(frontInfo)
    back.appendChild(backInfo)
    scene.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
    mainArea.appendChild(scene)
    /* headerArea.appendChild(headerPic) */

    
    fillFront(frontInfo, single_pokemon)
    fillBack(backInfo, single_pokemon)


    /* headerPic.src = '../images/pokeheader.png' */ 


    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });

}

function fillFront(frontInfo, data ) {
    let pic = document.createElement('img')

    let pokeNum = getPokeNumber(data.id)
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    frontInfo.appendChild(pic)

    pic.setAttribute('class', 'pics')
}

function fillBack(backInfo, data) {
    let name = document.createElement('h1')
    let order = document.createElement('h1')
    //let baseXP = document.createElement('p')
    let HP = document.createElement('p')
    let speed = document.createElement('p')
    let attack = document.createElement('p')
    let defence = document.createElement('p')


    order.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    //baseXP.textContent = `Base XP: ${data.abilities[2]}`
    HP.textContent = `HP: ${data.stats[5].base_stat}`
    speed.textContent = `Speed: ${data.stats[0].base_stat}`
    attack.textContent = `Attack: ${data.stats[4].base_stat}`
    defence.textContent = `Defence: ${data.stats[3].base_stat}`

    backInfo.appendChild(order)
    backInfo.appendChild(name)
    //backInfo.appendChild(baseXP)
    backInfo.appendChild(HP)
    backInfo.appendChild(speed)
    backInfo.appendChild(attack)

    order.setAttribute('id', 'order')
    backInfo.setAttribute('id', 'HP')
    
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
