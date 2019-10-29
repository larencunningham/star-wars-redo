import { planets } from './assests/planets.js'

let mainArea = document.querySelector('main')

planets.forEach((planet) => {
    let planetDiv = document.createElement('div')
    let planetName = document.createElement('h1')
    let planetPic = document.createElement('img')

planetDiv.setAttribute
    planetPic.setAttribute('class', 'picDivs')
    
    let planetNum = getCharNumber(planet.url)

    planetName.textContent = planet.name
    planetPic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`

    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetPic)

    mainArea.append(planetDiv)
})

function getCharNumber (charURL){
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}