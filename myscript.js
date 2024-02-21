div = document.getElementById('container');

let userInput = prompt('Pick a number');

let userInputSquared = userInput * userInput;
let squareSize = 100 / userInput;

console.log(squareSize);
for (let i = 0; i < userInputSquared; i++) {
    let square = document.createElement('div');
    div.appendChild(square);
    square.style.flex = '1 1 ' + squareSize + '%';
    square.className = 'squareClass';
    square.style.backgroundColor = 'grey';
}

const squares = document.querySelectorAll('div.squareClass');

squares.forEach(e => e.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue';
}));
