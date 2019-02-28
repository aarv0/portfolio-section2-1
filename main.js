import { films } from './films.js'
import { planets } from './planets.js'

films.sort((a, b) => (a.episode_id > b.episode_id ? 1 : -1))

const intro = document.querySelector('.intro')

let board = document.createElement('div')
board.className = 'board'

let content = document.createElement('div')
content.className = 'content'
let titleElement = document.createElement('p')
titleElement.className = 'mytitle'
let subTitleElement = document.createElement('br')
subTitleElement.className = 'mysubtitle'
let crawlElement = document.createElement('p')

titleElement.textContent = films[0].title
subTitleElement.textContent = ' '
crawlElement.textContent = films[0].opening_crawl

board.appendChild(content)
content.appendChild(titleElement)
content.appendChild(subTitleElement)
content.appendChild(crawlElement)
intro.appendChild(board)

const changeText = (film) => {
  titleElement.textContent = film.title
  crawlElement.textContent = film.opening_crawl
}

films.forEach((film) => {
  let filmButton = document.createElement('button')
  filmButton.className = 'button is-link'
  filmButton.textContent = film.title
  filmButton.addEventListener('click', changeText.bind(this, film))
  intro.appendChild(filmButton)
})

const numStars = 100

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement('div')
  star.className = 'star'
  var xy = getRandomPosition()
  star.style.top = xy[0] + 'px'
  star.style.left = xy[1] + 'px'
  document.body.append(star)
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth
  var x = window.innerHeight
  var randomX = Math.floor(Math.random() * x)
  var randomY = Math.floor(Math.random() * y)
  return [randomX, randomY]
}
