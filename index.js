let homeScore = 2
let guestScore = 12

document.getElementById("homescore").textContent = homeScore
document.getElementById("guestscore").textContent = guestScore

// home part

function plusOnePointHome(){
    let homeAddOnePoint = + 1
    homeScore += homeAddOnePoint
    document.getElementById("homescore").textContent = homeScore
}

function plusTwoPointHome(){
    let homeAddTwoPoint = + 2
    homeScore += homeAddTwoPoint
    document.getElementById("homescore").textContent = homeScore
}

function plusThreePointHome(){
    let homeAddThreePoint = + 3
    homeScore += homeAddThreePoint
    document.getElementById("homescore").textContent = homeScore
}

// guest part

function plusOnePointGuest(){
    let guestAddOnePoint = + 1
    guestScore += guestAddOnePoint
    document.getElementById("guestscore").textContent = guestScore
}

function plusTwoPointGuest(){
    let guestAddTwoPoint = + 2
    guestScore += guestAddTwoPoint
    document.getElementById("guestscore").textContent = guestScore
}

function plusThreePointGuest(){
    let guestAddThreePoint = + 3
    guestScore += guestAddThreePoint
    document.getElementById("guestscore").textContent = guestScore
}

// new game

function reset(){
    let newGameScore = 0
    homeScore = newGameScore
    guestScore = newGameScore
    document.getElementById("homescore").textContent = newGameScore
    document.getElementById("guestscore").textContent = newGameScore
}