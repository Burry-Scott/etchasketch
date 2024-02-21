let div = document.getElementById('container');
let userInput;
let userInputSquared;

function getUserInput() {
    do {    
        userInput = prompt('Pick a number 1-100');
    } while (userInput.isNaN || userInput > 100 || userInput < 0); 
    userInputSquared = userInput * userInput;
    return userInputSquared
}

function createGrid(userInputSquared) { for (let i = 0; i < userInputSquared; i++) {
    let square = document.createElement('div');
    div.appendChild(square);
    let squareSize = 100 / userInput;
    square.style.flex = '1 1 ' + squareSize + '%';
    square.className = 'squareClass';
    square.style.backgroundColor = 'grey';
}}

function changeSquares() {
let squares = document.querySelectorAll('div.squareClass');
squares.forEach(e => e.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue';
}));}

function removeSquares() {
    document.querySelectorAll('div.squareClass').forEach(e => e.remove());
}

getUserInput();
createGrid(userInputSquared);
changeSquares();

document.addEventListener('click', (event) => {
    if (event.target.className == 'button') {
        removeSquares();
        getUserInput();
        createGrid(userInputSquared);
        changeSquares();
        return;
    }
})