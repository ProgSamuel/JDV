// Iniciar minhas variáveis
let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ['o', 'x'];
let gamerOver = false;


function handleMove(position) {
    if (gamerOver) {
      return;
    }
  
    if (board[position] === '') {
      board[position] = symbols[playerTime];
      updateSquares();
  
  
      gamerOver = isWin();

      if (gamerOver) {
        setTimeout(() => {
          alert("O Jogo Acabou - O Vencedor foi " + symbols[playerTime].toUpperCase());
        }, 10);
        return;
      }
  
      playerTime = playerTime === 0 ? 1 : 0;
    }
  }
  

function isWin() {

    let winStates =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]

    for ( let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && board[pos1] !=''){

                return true;
            } 

    }

    return false;
}
