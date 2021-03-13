
const nodeVersion = document.getElementById('nodeVersion')
const chromeVersion = document.getElementById('chromeVersion')
const electronVersion = document.getElementById('electronVersion')
const myButton = document.getElementById('myButton')

nodeVersion.innerText = window.electron.processVersionsNode
chromeVersion.innerText = window.electron.processVersionsChrome
electronVersion.innerText = window.electron.processVersionsElectron

window.electron.registerMainCallback(() => {
    console.log("RENDERED PROC: received a callback from main proc")
})

myButton.addEventListener('click', (ev) => {
    window.electron.buttonClicked()
})
