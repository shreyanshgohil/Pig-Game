"use strict"
// selecting element

const diceEl = document.querySelector(".img-dice")
const btnNewGame = document.querySelector(".btn-new-game")
const btnRoleDice = document.querySelector(".btn-role-dice")
const btnHoldDice = document.querySelector(".btn-hold-dice")
const player1current = document.getElementById('player-1-current')
const player2current = document.getElementById('player-2-current')
const player1total = document.getElementById('player-1-total')
const player2total = document.getElementById('player-2-total')
// ///////////////////////////

diceEl.classList.add("hidden")
let currentScore = 0;
let activePlayer = 1;
const scores = [0, 0];


const activePlayerHandler = () => {

    currentScore = 0;
    document.getElementById(`player-${activePlayer}-current`).textContent = currentScore;
    if (activePlayer === 1) {
        activePlayer = 2;
    }
    else {
        activePlayer = 1;
    }
    document.querySelector(".col1").classList.toggle("color-turn")
    document.querySelector(".col2").classList.toggle("color-turn")
}

// // //Roleing dice funcnality
btnRoleDice.addEventListener('click', () => {
    if (scores[0] < 20 && scores[1] < 20) {
        // // create rendom dice number 1-6
        let dice = Math.trunc(Math.random() * 6) + 1;

        // // Displaying that dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`

        if (dice !== 1) {
            // Adding dice to current score
            currentScore += dice;
            document.getElementById(`player-${activePlayer}-current`).textContent = currentScore;
        }
        else {
            activePlayerHandler()
        }
    }
    else {
        diceEl.classList.add("hidden")
    }
})

document.querySelector(".btn-hold-dice").addEventListener('click', () => {
    if (scores[0] < 20 && scores[1] < 20) {
        if (scores[activePlayer - 1] < 20) {
            scores[activePlayer - 1] += currentScore
            console.log(scores)
            document.querySelector(`#player-${activePlayer}-total`).textContent = scores[activePlayer - 1]
        }
        if (scores[activePlayer - 1] > 20) {
            console.log(document.querySelector(`.col${activePlayer}`).classList.add('victory'))
        }

        activePlayerHandler()
    }
    else {
        diceEl.classList.add("hidden")
    }
})


document.querySelector(".btn-new-game").addEventListener('click', () => {
    currentScore = 0;
    player1current.textContent = 0
    player2current.textContent = 0
    player1total.textContent = 0
    player2total.textContent = 0
    activePlayer = 1;
    diceEl.classList.add("hidden")
    document.querySelector(".col1").classList.add("color-turn")
    document.querySelector(".col2").classList.remove("color-turn")

    for (let i = 0; i < scores.length; i++) {
        scores[i] = 0
    }

    const removeVictory = document.querySelectorAll(".col")
    for (let i = 0; i < removeVictory.length; i++) {
        removeVictory[i].classList.remove("victory")
    }
})