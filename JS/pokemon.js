 var pokeData = []

 function renderAllCardsInDom(pokeData){
     for (const pokemon of pokeData)
     renderAllCardsInDom(pokemon.url)
 }

 const newPokeButton = document.querySelector('#newPokemon')
 newPokeButton.addEventListener('click', function(){
     let pokeID = prompt("Please enter a number for a new pokemon card!")
     if (pokeID > 0 && pokeID <= 807) {
     getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then(result => {
        renderSinglePokemon(result)
     })
} else {
    alert('Sorry! This number will not pull up a Pokemon.')
}
})


let mainHeader = document.querySelector('#header')
    let headerPic = document.createElement('img')
    headerPic.setAttribute('class', 'header-pic')
    mainHeader.appendChild(headerPic) 
    headerPic.src = '../images/pokeheader.png'
 
const poisonButton = document.querySelector('#poison')
poisonButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('poison')
})
const grassButton = document.querySelector('#grass')
grassButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('grass')
})
const fireButton = document.querySelector('#fire')
fireButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('fire')
})
const waterButton = document.querySelector('#water')
waterButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('water')
})
const electricButton = document.querySelector('#electric')
electricButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('electric')
})
const allButton = document.querySelector('#all')
allButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('all')
})

function renderAllPokemonWithFilter(pokeType) {
    if (pokeType === 'all') {
        renderAllPokemon(pokeData)
    } else {
        let matchedPokemon = pokeData.filter(pokemon => {
            for (type of pokemon.types) {
                if (type.type.name === pokeType) {
                    return true
                }
            }
            return false
        });
        renderAllPokemon(matchedPokemon)
    }
}

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }

}

getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(pokemonURLs => {
        let promises = pokemonURLs.results.map(pokemon => getAPIData(pokemon.url))
        Promise.all(promises).then(allData => {
            pokeData = allData
            renderAllPokemon(pokeData)
        })
    })

function renderAllPokemon(pokemon) {
    let mainArea = document.querySelector('main')
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
    for (onePokemon of pokemon) {
        renderSinglePokemon(onePokemon)
    }
    const totalHP = document.querySelector('#totalHP')
    let totalledHP = pokemon.reduce((accumulator, currentPokemon) => accumulator + parseInt(currentPokemon.stats[5].base_stat, 10), 0)
    totalHP.textContent = `Total HP: ${totalledHP}`
}

 
// setting up the DOM

let mainArea = document.querySelector('main')

function renderSinglePokemon(single_pokemon) {
    let scene = document.createElement('div')
    let card = document.createElement('div')
    let front = document.createElement('div')
    let frontInfo = document.createElement('div')
    let back = document.createElement('div')
    let backInfo = document.createElement('div')
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
    let baseXP = document.createElement('p')
    let HP = document.createElement('p')
    let speed = document.createElement('p')
    let attack = document.createElement('p')
    let defence = document.createElement('p')


    order.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    baseXP.textContent = `Base XP: ${data.base_experience}`
    HP.textContent = `HP: ${data.stats[5].base_stat}`
    speed.textContent = `Speed: ${data.stats[0].base_stat}`
    attack.textContent = `Attack: ${data.stats[4].base_stat}`
    defence.textContent = `Defence: ${data.stats[3].base_stat}`

    backInfo.appendChild(order)
    backInfo.appendChild(name)
    backInfo.appendChild(baseXP)
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

