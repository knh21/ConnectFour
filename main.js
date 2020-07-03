const board = [
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
    selectTower = event.currentTarget
    disc = document.createElement("div")
    if (currentPlayer === 1) {
        disc.className = "redDisc"
        if (selectTower.childElementCount < 6) {
            selectTower.appendChild(disc)
            // winnerHorizontal(board, currentPlayer)
            currentPlayer = 2
        } else {
            alert("column is full, please choose another")
            currentPlayer = 1
        }
    } else {
        //player2()
        disc.className = "blackDisc"
        if (selectTower.childElementCount < 6) {
            selectTower.appendChild(disc)
            // winnerVertical(board, currentPlayer)
            // winnerHorizontal(board, currentPlayer)
            currentPlayer = 1
        } else {
            alert("column is full, please choose another")
            currentPlayer = 2
        }
    }
    tieGame()
    let col = parseInt(selectTower.id.slice(-1))
    function updateBoard() {
        for (let row = board.length - 1; row >= 0; row--) {
            if (board[row][col] === 0) {
                board[row][col] = currentPlayer
                break;
            }
        }
        console.log(board)
    }
    updateBoard()
      winnerVertical(board, currentPlayer)
       winnerHorizontal(board, currentPlayer)
       winnerDiagonalDown(board, currentPlayer)
       winnerDiagonalUp(board, currentPlayer)
  }
  const winnerVertical = function (model, player) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum] &&
                model[rowNum][colNum] !== 0) {
                    setTimeout(function () {
                        alert(` Player ${player} wins`);
                    }, 200)
                    setTimeout(function () { location.reload(); }, 250);
            }
        }
    }
    // return false
  }
  const winnerHorizontal = function (model, player) {
    for (let rowNum = 0; rowNum < 6; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum][colNum + 1] &&
                model[rowNum][colNum] === model[rowNum][colNum + 2] &&
                model[rowNum][colNum] === model[rowNum][colNum + 3] &&
                model[rowNum][colNum] !== 0) {
                    setTimeout(function () {
                        alert(` Player ${player} wins`);
                    }, 200)
                    setTimeout(function () { location.reload(); }, 250);
            }
        }
    }
    // return false
  }
  const winnerDiagonalDown = function (model,player) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum + 1 ] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum + 2 ] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum + 3] &&
                model[rowNum][colNum] !== 0) {
                    setTimeout(function () {
                        alert(` Player ${player} wins`);
                    }, 200)
                    setTimeout(function () { location.reload(); }, 250);
            }
        }
    }
    // return false
  }
  const winnerDiagonalUp = function (model, player) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum - 1 ] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum - 2 ] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum - 3] &&
                model[rowNum][colNum] !== 0) {
                    setTimeout(function () {
                        alert(` Player ${player} wins`);
                    }, 200)
                    setTimeout(function () { location.reload(); }, 250);
            }
        }
    }
    // return false
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