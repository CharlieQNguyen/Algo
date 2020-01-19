const currentBoard = [
                ['x','o','x'],
                ['o','t','x'],
                ['x','o','o']
                ];

function ticTacToe(board){
    let  x = 0;
    let y = 1; 
    let z = 2

    if((board[x][x] == board[y][y] && board[y][y] == board[z][z]) ||
    board[x][z] == board[y][y] && board[y][y] == board[z][x]) {
        return true;
    }

    for(let i = 0; i < board.length; i++) {
        if((board[i][x] == board[i][y] && board[i][y] == board[i][2]) || 
        (board[x][i] == board[y][i] && board[y][i] == board[z][i])) {
            return true;
        } 
    }
    return false;
}

console.log(ticTacToe(currentBoard));