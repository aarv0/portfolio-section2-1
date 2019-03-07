import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const men = people.filter(person => person.gender === 'male')
const women = people.filter(person => person.gender === 'female')
const other = people.filter(
  person =>
    person.gender === 'n/a' ||
    person.gender === 'hermaphrodite' ||
    person.gender === 'none',
)

const getLastNumber = url => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

//https://starwars-visualguide.com/assets/img/characters/1.jpg

const allHomeWorlds = people.map(person => {
  let foundWorld = planets.find(element => {
    return element.url === person.homeworld
  })
  let imageURL = getLastNumber(person.url)
  
  return {
    name: person.name,
    eye_color: person.eye_color,
    home: foundWorld.name,
    imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
  }
})

console.log(allHomeWorlds)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach(person => {
  let personElement = document.createElement('div')
  let planetElement = document.createElement('p')
  let imageElement = document.createElement('img')

  personElement.className = 'card'
  personElement.textContent = person.name
  planetElement.textContent = person.home
  planetElement.style.backgroundColor = person.eye_color
  imageElement.src = person.imagePath

  personElement.appendChild(planetElement)
  personElement.appendChild(imageElement)
  mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)
