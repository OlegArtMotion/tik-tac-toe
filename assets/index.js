/*This an XO Game by Oleg Ukrainski (www.animator.co.il) */

/* A GAME PLAY RULES */
let won = false;
let scoreX = 0;
let scoreO = 0;
let playerTurn = "o";
let endGameArr = [];

let isPlayerOneTurnX = true;

const initBoard = () => {
  const mainBoard = document.getElementById("mainBoard")
  for (let i = 1; i < 10; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.id = "cell" + i
    mainBoard.appendChild(cell)
    const arrId = "#cell" + i
    endGameArr.push(arrId)
  }
}

initBoard()

const allCells = document.querySelectorAll(".cell")

allCells.forEach((cell) => {
  cell.addEventListener("click", function (event) {
    if (!won) {
      let cellUnit = event.target;

      if (cellUnit.classList.contains("cell")) {
        if (isPlayerOneTurnX) {
          cellUnit.innerHTML = '<img src="/assets/img/xPlayer3d.png">';
          cellUnit.classList.add("x");
          console.log("now is the Player2 turn");
        } else {
          cellUnit.innerHTML = '<img src="/assets/img/oPlayer3d.png">';
          cellUnit.classList.add("o");
          console.log("now is the Player1 turn");
        }
        isPlayerOneTurnX = !isPlayerOneTurnX;
        console.log(isPlayerOneTurnX);

        /*THIS IS WHERE THE IF "WIN" STARTS*/

        playerTurn = "o";
        if (!isPlayerOneTurnX) {
          playerTurn = "x";
        }

        //first line
        checkWinIndexes(0, 1, 2);

        //Second line
        checkWinIndexes(3, 4, 5);

        //Third line
        checkWinIndexes(6, 7, 8);

        //first Column
        checkWinIndexes(0, 3, 6);

        //Second Column
        checkWinIndexes(1, 4, 7);

        //Third Column
        checkWinIndexes(2, 5, 8);

        //diagonal 1
        checkWinIndexes(0, 4, 8);

        //diagonal 2
        checkWinIndexes(2, 4, 6);
        //tie
        tie();
        /*THIS IS WHERE THE IF "WIN" ENDS*/
      } else {
        cellUnit.parentElement.classList.add("cellw");
        console.log(cellUnit.classList);
      }
    }
  });
});

/* RULES RESET A GAME */
const startGame = document.querySelector("#start");
const restartGame = document.querySelector("#reset");
const cells = document.querySelectorAll(".cell");

function resetGame() {
  // restart

  won = false;

  cells.forEach((cell) => {
    cell.innerHTML = "";

    cell.classList.remove("cellw");
    cell.classList.remove("x");
    cell.classList.remove("o");
  });

  isPlayerOneTurnX = true;
  document.querySelector("h1").innerHTML = "Tic Tac Toe";
}

function win() {
  won = true;

  if (playerTurn === "x") {
    document.querySelector("h1").innerHTML = "VICTORY PLAYER 1";
    document.querySelector(".x-score").innerHTML = "score: " + ++scoreX;
  } else {
    document.querySelector("h1").innerHTML = "VICTORY PLAYER 2";
    document.querySelector(".o-score").innerHTML = "score: " + ++scoreO;
  }
}

function startGameNow() {
  resetGame();
}

restartGame.addEventListener("click", resetGame);
startGame.addEventListener("click", startGameNow);

//Check win indexes
function checkWinIndexes(num1, num2, num3) {
  if (
    document.querySelector(endGameArr[num1]).classList.contains(playerTurn) &&
    document.querySelector(endGameArr[num2]).classList.contains(playerTurn) &&
    document.querySelector(endGameArr[num3]).classList.contains(playerTurn)
  ) {
    win();
  }
}

//tie situation

function tie() {
  if (!won) {
    let allFull = true;
    for (let i = 0; i < cells.length; i++) {
      let cellUnit = cells[i];
      if (cellUnit.innerHTML === "") {
        allFull = false;
      }
    }

    if (allFull === true) {
      document.querySelector("h1").innerHTML = "TIE!!!";
    }
  }
}
