/*This an XO Game by Oleg Ukrainski (www.animator.co.il) */


/* A GAME PLAY RULES */

let isPlayerOneTurnX = true;

document
.querySelectorAll('.cell').forEach(cell => {

    cell.addEventListener('click', function(event) {

        let cellUnit = event.target
    
        if (cellUnit.classList[0] === "cell")  {
    
            if (isPlayerOneTurnX) {
                cellUnit.innerHTML = '<img src="/assets/img/xPlayer3d.png"class="x">'
                console.log('now is the Player2 turn');
            } else {
                cellUnit.innerHTML = '<img src="/assets/img/oPlayer3d.png" class="o">'
                console.log('now is the Player1 turn');
            }
            isPlayerOneTurnX = !isPlayerOneTurnX;
            console.log(isPlayerOneTurnX);


            
/*THIS IS WHERE THE IF "WIN" STARTS*/
            let endGameArr = [
                '#cell1',
                '#cell2',
                '#cell3',
                '#cell4',
                '#cell5',
                '#cell6',
                '#cell7',
                '#cell8',
                '#cell9', 
            ]
    let playerTurn = 'o'
    if(!isPlayerOneTurnX) {
        playerTurn = 'x'
}


    if(document.querySelector(endGameArr[0]).querySelector('img').classList[0] === playerTurn
    && document.querySelector(endGameArr[1]).querySelector('img').classList[0] === playerTurn
    && document.querySelector(endGameArr[2]).querySelector('img').classList[0] === playerTurn
    )
    

    {
        document.querySelector('h1').innerHTML = "YOU WIN!!!";
        document.querySelector('.x-score').innerHTML = "score: 1";
    }

    
    /*THIS IS WHERE THE IF "WIN" ENDS*/
        
        }
        else {
            cellUnit.parentElement.classList.add('cellw');
            console.log(cellUnit.classList)
        }
    
    }); 
    
})



/* RULES RESET A GAME */
const startGame = document.querySelector('#start')
const restartGame = document.querySelector('#reset')
const cells = document.querySelectorAll('.cell');


function resetGame() {
    // restart 
    cells.forEach(cell => {
    cell.innerHTML = '';

    cell.classList.remove('cellw');    
    });

    isPlayerOneTurnX = true
    document.querySelector('h1').innerHTML = "Tic Tac Toe";
}


function startGameNow() {
    resetGame()
}

restartGame.addEventListener('click', resetGame)
startGame.addEventListener('click', startGameNow)