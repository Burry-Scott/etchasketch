let div = document.getElementById('container');
let userInput;
let userInputSquared;

function getUserInput() {
    do {    
        userInput = prompt('Pick a number 1-100');
    } while (userInput > 100 || userInput < 1 || isNaN(userInput)); 
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
    square.style.filter = 'brightness(99%)'
}}

function changeSquares() {
    let squares = document.querySelectorAll('div.squareClass');
    squares.forEach(e => e.addEventListener('mouseover', (event) => {
        modifyBrightness(20, event);
}));}

function removeSquares() {
    document.querySelectorAll('div.squareClass').forEach(e => e.remove());
}

function modifyBrightness(value, event) {
    let squareBrightness = event.target.style.filter;
    let newBrightness = squareBrightness.slice(11, 13);
    if (newBrightness > 0) {
        newBrightness -= value;
    }
    event.target.style.filter = 'brightness(' + newBrightness + '%)';
    return event;
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