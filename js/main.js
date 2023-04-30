	/*----- constants -----*/
const COLORS = {
    '0': 'rgb(179, 248, 248)',
    '1': 'coral',
    '-1': 'teal',
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
playAgainBtn.addEventListener('click', resetGame);
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
    const strArr = clickedElId.split('r');
    const rEl = strArr[1];
    const rowIdx = parseInt(rEl);
    turn *= -1;
    winner = getWinner(colIdx, rowIdx);
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

};

function renderControls() {

};