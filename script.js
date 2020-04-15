const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.getElementById('time-left');

let result = 0;

const randomSquare = () => {
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
}