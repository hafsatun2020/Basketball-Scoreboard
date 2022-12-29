let countH = 0
let homeCount = document.getElementById("home-el")
let sumEl = document.getElementById("home-c")

let countG = 0
let GuestCount = document.getElementById("guest-el")
let sumElg = document.getElementById("guest-c")


function homeScore1() {
     countH = countH + 1
    sumEl.textContent = countH
}



function homeScore2() {
     countH = countH + 2
    sumEl.textContent = countH
}



function homeScore3() {
     countH = countH + 3
    sumEl.textContent = countH
}


//guest count

function guestScore1() {
     countG = countG + 1
    sumElg.textContent = countG
}



function  guestScore2() {
      countG = countG + 2
    sumElg.textContent = countG
}



function  guestScore3() {
    countG = countG + 3
    sumElg.textContent = countG
}