import { starships } from '/data/starships.js'

const ships = starships.filter(ship => {
    let speedStr = ship.max_atmosphering_speed
    let speedIndex = speedStr.indexOf('km')
    if(speedIndex !== -1) {
        ship.max_atmosphering_speed = speedStr.slice(0,4)
    }
    return ((ship.max_atmosphering_speed !== 'n/a') && (ship.max_atmosphering_speed !== 'unknown'))
})

console.log(ships)

const sortedShips = ships.sort((a, b) => {
    return a.max_atmosphering_speed - b.max_atmosphering_speed
})

console.log(sortedShips)

let mainContainer = document.querySelector('.container')
sortedShips.forEach(ship => {
    let newShip = document.createElement('div')
    newShip.textContent = ship.max_atmosphering_speed
    mainContainer.appendChild(newShip)
})

// const fastShips = ships.reduce((acc, ship) => {
//     return (acc.max_atmosphering_speed || 0) > ship.max_atmosphering_speed ? acc : ship
// }, {})

// console.log(fastShips)

// const mostExpPilot = pilots.reduce((oldest, pilot) => {  
//     return (oldest.years || 0) > pilot.years ? oldest : pilot
//   }, {})

const getLastNumber = url => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

