const gameArray = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

let column1 = document.querySelector("#col0")
let column2 = document.querySelector("#col1")
let column3 = document.querySelector("#col2")
let column4 = document.querySelector("#col3")
let column5 = document.querySelector("#col4")
let column6 = document.querySelector("#col5")
let column7 = document.querySelector("#col6")

let disc;
let selectTower;
let currentPlayer = 1

// function player1() {
//     prompt("Enter your name. You will be Player 1")
// }
// player1()


function startGame(event) {
    disc = document.createElement("div")
    if (currentPlayer === 1) {
        disc.className = "redDisc"
        currentPlayer = 2
    } else {
        //player2()
        disc.className = "blackDisc"
        currentPlayer = 1
    }
    //changeColor()
    selectTower = event.currentTarget
    if (selectTower.childElementCount < 6) {
        selectTower.appendChild(disc)
    }
    tieGame()
}





function tieGame() {
    if ((column1.childElementCount === 6) &&
        (column2.childElementCount === 6) &&
        (column3.childElementCount === 6) &&
        (column4.childElementCount === 6) &&
        (column5.childElementCount === 6) &&
        (column6.childElementCount === 6) &&
        (column7.childElementCount === 6)
    ) {
        setTimeout(function () {
            alert("It's a tie! Play again.")
        }, 200)
    }
}

column1.addEventListener("click", startGame)
column2.addEventListener("click", startGame)
column3.addEventListener("click", startGame)
column4.addEventListener("click", startGame)
column5.addEventListener("click", startGame)
column6.addEventListener("click", startGame)
column7.addEventListener("click", startGame)