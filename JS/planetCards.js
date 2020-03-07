import { planets } from '/JS/assets/planets.js'
import { species } from '/JS/assets/species.js'

let mainArea = document.querySelector('main')

/* This is a loop function */
planets.forEach(planet => {
    let planetDiv = document.createElement('div')
    let name = document.createElement('h1')
    let climate = document.createElement('p')
    let terrain = document.createElement('p')
    let pic = document.createElement('img')
    let planetNum = getPlanetNumber(planet.url)

    planetDiv.setAttribute('class', 'planetDivs')
    pic.setAttribute('class', 'picDivs') 
    
    name.textContent = planet.name
    climate.textContent = `Climate: ${planet.climate}`
    terrain.textContent = `Terrain: ${planet.terrain}`

    pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = '../images/placeholder.jpg'
    })

    planetDiv.appendChild(name)
    planetDiv.appendChild(climate)
    planetDiv.appendChild(terrain)
    planetDiv.appendChild(pic)
    mainArea.appendChild(planetDiv)
});

function getPlanetNumber(planetURL) {
    let end = planetURL.lastIndexOf ('/')
    let planetID = planetURL.substring(end -2, end)
    if(planetID.indexOf('/') !== -1) {
        return planetID.slice(1,2)
    } else {
        return planetID 
    }
} 

const allDivs = Array.from(document.querySelectorAll('div'))
const mainHeader = document.querySelector('header')
let tempButton = document.createElement('button')
tempButton.textContent = 'Temperate Climate'
let tropButton = document.createElement('button')
tropButton.textContent = 'Tropical Climate'
let allButton = document.createElement('button')
allButton.textContent = 'All Climates'
mainHeader.appendChild(tempButton)
mainHeader.appendChild(tropButton)
mainHeader.appendChild(allButton)



tempButton.addEventListener('click', () => {
    allDivs.forEach(thisDiv => {
        if(!thisDiv.childNodes[1].childNodes[0].textContent.includes("temperate")){
            thisDiv.setAttribute("style", "display: none;");
        }
    });
})

tropButton.addEventListener('click', () => {
    allDivs.forEach(thisDiv => {
        if(!thisDiv.childNodes[1].childNodes[0].textContent.includes("tropical")){
            thisDiv.setAttribute("style", "display: none;");
        }
    });
}) 

/* tropButton.addEventListener('click', () => {
    allDivs.forEach(thisDiv => {
        if(!thisDiv.childNodes[1].childNodes[0].textContent.includes("tropical")){
            thisDiv.setAttribute("style", "display: none;");
        }
    });
})  */

const tempPlanet = planets.filter(planet => planet.climate === 'temperate')
const tropPlanet = planets.filter(planet => planet.climate === 'tropical')






