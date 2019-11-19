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
    let pokeDiv = document.createElement('div')
    let pokeInfo = document.createElement('h1')
    let pic = document.createElement('img')

    pokeDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.id)

    pokeInfo.textContent = `${single_pokemon.name} height: ${single_pokemon.height}`

    pic.src = `../images/${pokeNum}.png`

    pokeDiv.appendChild(pokeInfo)
    pokeDiv.appendChild(pic)
    mainArea.appendChild(pokeDiv)
}

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}
