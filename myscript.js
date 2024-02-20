div = document.getElementById('container');

userInput = prompt('Pick a number');

userInputSquared = userInput * userInput;

for (let i = 0; i < userInputSquared; i++) {
    square = document.createElement('div');
    div.appendChild(square);
    square.style.flex = '1 1 20%';
    square.className = 'squareClass';
    square.style.backgroundColor = 'blue';

}