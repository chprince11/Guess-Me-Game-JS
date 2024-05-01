'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Created these function so that to follow the DRY ( Do Not Repeat Yourself ) principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === randomNumber) {
    displayMessage('Correct Number! 👍');

    document.querySelector('.number').textContent = randomNumber;

    bgColor('#60b347');

    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is different ( ex: higher or lower )
  } else if (guess !== randomNumber) {
    // Ternary operator used
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'Too high!⬆️' : 'Too low!⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When user click on again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  bgColor('#222');
  numberWidth('15rem');
});
