import { people } from './assests/people.js'

let mainArea = document.querySelector('main')

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let species = document.createElement('p')
    let pic = document.createElement('img')

personDiv.setAttribute
    pic.setAttribute('class', 'picDivs')

    let charNUm = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = `Gender: ${person.gender}`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNUm}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(species)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
});

function getCharNumber (charURL){
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}
