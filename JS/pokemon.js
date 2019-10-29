// fetch API from https://pokeapi.co/

async function getPokemonData(url){
try {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data); 
  } catch (error) {
    console.error(error);
  }
    }

const data = getPokemonData('https://pokeapi.co/api/v2/pokemon/')

let mainArea = document.quierySelector(main)

// setting up the DOM

function populateDOM(pokeArray) {
    pokeArray.forEach((pokemon) => {
        let pokeDiv = document.createElement('div')
        let name = document.createElement('h3')
        let pic = document.createElement('img')
        let pokeNum = getPokeNumber(pokemon.url)

        pokeDiv.setAttribute('class', 'charDivs')
        pic.setAttribute('class', 'picDivs') 
    
        name.textContent = person.name
        gender.textContent = person.gender
        pic.src = `https://starwars-visualguide.com/assets/img/characters/${pokeNum}.jpg`
    
        name.appendChild(name)
        pokeDiv.appendChild(pic)
        mainArea.appendChild(pokeDiv)
    })
} 

function getPokeNumber(pokeURL) {
    let end = pokeURL.lastIndexOf ('/')
    let pokeID = pokeURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}