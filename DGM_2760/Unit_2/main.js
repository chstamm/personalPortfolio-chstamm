document.querySelector('#name').innerText = "Inspector Panda"
document.querySelector('#slogan').innerText = "Keeping Pandamonium to a Minimum"


const watchWindow = () => {
    let windowSize = `My window size is currently ${window.innerWidth} by ${window.innerHeight}.`

    let windowOffset = `My window is offset by ${window.screenX} from the left, and ${window.screenY} from the top.`

    let windowInfo = document.querySelector('#windowInfo').innerText = `${windowSize}
${windowOffset}`
}

watchWindow()

