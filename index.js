//Home
let homeCount = 0;
let homeScore = document.getElementById("home-score-display");

function addOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function addTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function addThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

//Guest 
let guestCount = 0;
let guestScore = document.getElementById("guest-score-display");

function addOneGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function addTwoGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function addThreeGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

//SAVE

let saveBtn = document.getElementById("save");
let homeFinal = document.getElementById("home-final")
let guestFinal = document.getElementById("guest-final")


function save() {
    homeFinal.textContent = Number(homeFinal.textContent) + Number(homeScore.textContent);
    guestFinal.textContent = Number(guestFinal.textContent) + Number(guestScore.textContent);

    homeScore.textContent = 0;
    homeCount = 0;

    guestScore.textContent = 0;
    guestCount = 0;
}

