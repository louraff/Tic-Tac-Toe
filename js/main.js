	/*----- constants -----*/
const COLORS = {
    '0': 'rgb(179, 248, 248)',
    '1': 'coral',
    '-1': 'teal',
}
const PLAYER = {
    '0': 'rgb(179, 248, 248)',
    '1': 'O',
    '-1': 'X',
}

	/*----- state variables -----*/
let board;
let turn;
let winner;

	/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const boardEl = [...document.querySelectorAll('#board > div')];

	/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);
document.getElementById('board').addEventListener('click', cellClick);

	/*----- functions -----*/

    init();
    
function init() {
    board = [ //nested array
        [0,0,0], // col 0
        [0,0,0], // col 1 
        [0,0,0], // col 2
    ]
    turn = 1;
    winner = null;
    render();
}

function render() {
    renderBoard();
    renderMessage();
    renderControls();
};

function cellClick(evt) {
    const clickedEl = evt.target;
    const clickedElId = clickedEl.getAttribute('id');
    const strRowArr = clickedElId.split('r');
    const rEl = strRowArr[1];
    const rowIdx = parseInt(rEl);

    const strColArr = clickedElId.split('c');
    const cEl = strColArr[1];
    const colIdx = parseInt(cEl);

    if (board[colIdx][rowIdx] !== 0) return;
    const colArr = board[colIdx];
    
    colArr[rowIdx] = turn;
    turn *= -1;
    winner = getWinner(colIdx, rowIdx);
    render();
};

function resetGame(evt) {

};

function getWinner(colIdx, rowIdx) {
    let verticalWin = checkVerticalWin(colIdx, rowIdx);
    let horizontalWin = checkHorizontalWin(colIdx, rowIdx);
    let diagonalWinNESW = checkDiagonalWinNESW(colIdx, rowIdx);
    let diagonalWinNWSE = checkDiagonalWinNWSE(colIdx, rowIdx);
    
    if (verticalWin || horizontalWin || diagonalWinNESW || diagonalWinNWSE) {
        return winner;
    } else {
        checkTie(colIdx, rowIdx);
        if (true) {
            winner = 'T'
        } else {
            winner = null;
        }
    };
};

function checkTie(colIdx, rowIdx) {
    if (!winner) {
        for(colArr of board) {
            for(rowArr of colArr) {
                if (board[colIdx][rowIdx] === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        } 
    } else {
        winner = null;
    };
};

function checkDiagonalWinNWSE(colIdx, rowIdx) { // colIdx, rowIdx are where the last move was made
	const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
	const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
	return (adjCountNW + adjCountSE) >= 2 ? board[colIdx][rowIdx] : null;
};

function checkDiagonalWinNESW(colIdx, rowIdx) { 
	const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
	const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
	return (adjCountNE + adjCountSW) >= 2 ? board[colIdx][rowIdx] : null;
};


function checkHorizontalWin(colIdx, rowIdx) { 
	const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
	const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
	return (adjCountLeft + adjCountRight) >= 2 ? board[colIdx][rowIdx] : null;
};

function checkVerticalWin(colIdx, rowIdx) { 
	return countAdjacent(colIdx, rowIdx, 0, -1) === 2 ? board[colIdx][rowIdx] : null;
};

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    //Shortcut variable to the player value
        const player = board[colIdx][rowIdx];
    //track count of adjacent cells with the same player value
        let count = 0;
    //initialise the new coordinates
        colIdx += colOffset;
        rowIdx += rowOffset;
        while (
    // Ensure the colIdx is within bounds of the board array
        board[colIdx] !== undefined && 
        board[colIdx][rowIdx] !== undefined &&
        board[colIdx][rowIdx] === player
    ) {
        count++;
        colIdx += colOffset;
        rowIdx += rowOffset;
        }
        return count;
    };

function renderBoard () {
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.color = COLORS[cellVal];
            cellEl.innerText = `${PLAYER[cellVal]}`;
        })
    })
};

function renderMessage () {
    if (winner === 'T') {
        messageEl.innerText = "It's a tie!"
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${PLAYER[winner].toUpperCase()}</span> wins!`
    } else {
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${PLAYER[turn].toUpperCase()}</span>'s turn`
    };
};

function renderControls() {

};