'use strict';

const guessInput = document.querySelector('.guess');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const high = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const setMessage = function (messageText) {
  const message = document.querySelector('.message');
  message.textContent = messageText;
};
const setScores = function (number) {
  const scores = document.querySelector('.score');
  scores.textContent = number;
};
const setNumber = function (value = '?') {
  number.textContent = value;
};
const setGuessInput = function () {};

let secretNumber = getRandomNumber();
let highScore = 0;
let totalScores = 20;
setScores(totalScores);

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    setMessage('⛔ No number!');
    return;
  }
  if (guess === secretNumber) {
    setNumber(secretNumber);
    setMessage('🥇 Correct Number');
    number.style.width = '30rem';
    body.style.backgroundColor = '#60b347';
    if (totalScores > highScore) {
      highScore = totalScores;
      high.textContent = highScore;
    }
  }
  if (guess !== secretNumber) {
    if (totalScores > 1) {
      setMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
      totalScores--;
      setScores(totalScores);
      return;
    }
    setScores(0);
    setMessage('😭 You lose!');
  }
});
againBtn.addEventListener('click', function () {
  totalScores = 20;
  secretNumber = getRandomNumber();
  guessInput.value = '';
  setNumber();
  setMessage('Start guessing...');
  setScores(totalScores);
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
