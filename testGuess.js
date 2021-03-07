'use strict';

//Generating Secert Number
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

//Displaying All function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const closeMessage = function (guessNumber) {
  let soClose = guessNumber + Math.trunc(Math.random() * 3) + 1;
  let lowerClose = guessNumber - Math.trunc(Math.random() * 3) + 1;
  if (soClose == secertNumber || lowerClose == secertNumber) {
    displayMessage('😒 So Close');
  } else {
    displayMessage('😂 Try again');
  }
};
//For Debug Show secretNumber
//displayNumber(secertNumber);

//Check Button Listener
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  //Game Mechanism, Check The secertNumber with guessNumber
  if (!guessNumber) {
    displayMessage('❌ NO Number !!');
  } else if (guessNumber == secertNumber) {
    displayMessage('🎉Congratulation You Win🎉');
    displayNumber(secertNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (score != 0) {
    if (guessNumber >= 1 && guessNumber <= 20) {
      if (guessNumber != secertNumber) {
        closeMessage(guessNumber);
        // let soClose =
        //   guessNumber + 3 == secertNumber ||
        //   guessNumber - 3 == secertNumber ||
        //   guessNumber + 2 == secertNumber ||
        //   guessNumber - 2 == secertNumber ||
        //   guessNumber + 1 == secertNumber ||
        //   guessNumber - 1 == secertNumber ||
        //   guessNumber + 4 == secertNumber ||
        //   guessNumber - 4 == secertNumber
        //     ? 'So Close'
        //     : 'Try again';

        // displayMessage(soClose);
        // displayMessage(guessNumber < secertNumber ? 'Too Low' : 'Too High');
        score--;
        displayScore(score);
      }
    } else if (guessNumber < 1 || guessNumber > 20) {
      displayMessage('Guess Number is Out of Range');
      score--;
      displayScore(score);
    }
  }

  if (score < 1) {
    displayMessage('You Lost The Game');
    displayScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#0c0c0ce5';
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
