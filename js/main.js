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
    winner = getWinner(board, turn);
    render();
};

function resetGame(evt) {

};

function renderBoard () {
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
console.log(cellEl);
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