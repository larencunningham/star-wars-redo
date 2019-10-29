import { starships} from './assests/starships.js'

let mainArea = document.querySelector('main')

starships.forEach((ship) => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h1')
    let shipModel = document.createElement('p')
    let shipPic = document.createElement('img')

shipDiv.setAttribute
    shipPic.setAttribute('class', 'picDivs')

    let shipNum = getCharNUmber(ship.url)
 
    shipName.textContent = ship.name
    shipModel.textContent = ship.model
    shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`


shipDiv.appendChild(shipName)
shipDiv.appendChild(shipModel)
shipDiv.appendChild(shipPic)

mainArea.append(shipDiv)
})

function getCharNUmber (charURL){
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}