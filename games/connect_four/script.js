const board = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');

const rows = 6;
const columns = 7;
const player1 = 'player-1';
const player2 = 'player-2';

let currentPlayer = player1;
let isGameOver = false;

function createGameBoard() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.column = col;
            board.appendChild(cell);
        }
    }
}

createGameBoard();

function checkForWin() {
    // Add your win-checking logic here
    return false;
}

function handleClick(event) {
    if (isGameOver) return;

    const cell = event.target;
    const col = cell.dataset.column;

    for (let row = rows - 1; row >= 0; row--) {
        const targetCell = board.querySelector(`[data-row="${row}"][data-column="${col}"]`);
        if (!targetCell.classList.contains(player1) && !targetCell.classList.contains(player2)) {
            targetCell.classList.add(currentPlayer);
            if (checkForWin()) {
                alert(`Player ${currentPlayer === player1 ? 1 : 2} wins!`);
                isGameOver = true;
            } else {
                currentPlayer = currentPlayer === player1 ? player2 : player1;
            }
            break;
        }
    }
}

function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.className = 'cell');
    currentPlayer = player1;
    isGameOver = false;
}

board.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);
