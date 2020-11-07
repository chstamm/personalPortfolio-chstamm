document.querySelector("#title").innerText = "Nonsense!";
document.querySelector("#slogan").innerText = "A Story Sim";

function storytime()  {
    const nounArray = document.querySelector('#nouns')
    const adjtvArray = document.querySelector('#adjtvs')
    const verbArray = document.querySelector('#verbs')

    const nouns = nounArray.value.split(/\s+/).map(function (noun) {
        return noun.toLowerCase();
    })
    const adjtvs = adjtvArray.value.split(/\s+/).map(function (adjtvs) {
        return adjtvs.toLowerCase();
    })
    const verbs = verbArray.value.split(/\s+/).map(function (verbs) {
        return verbs.toLowerCase();
    })
    

    const baseStory = `Once upon a time, there was a ${nouns[0]} named Billy. He wanted to ${verbs[0]} some ${nouns[1]}s, but the ${adjtvs[0]} farmer wouldn’t have it. “Get off my ${nouns[2]}!” said the farmer, waving his ${nouns[3]}. The ${adjtvs[1]} Billy didn’t ${verbs[1]}, though. Billy went to ${verbs[2]} three ${nouns[4]}s, eight ${nouns[5]}s, and one ${nouns[6]}. Billy was then on known as ${adjtvs[2]} Billy!`

    

     
    document.querySelector('#story').innerText = baseStory
}