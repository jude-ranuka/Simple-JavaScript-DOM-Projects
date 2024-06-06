'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'You win';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 70;
// document.querySelector('.score').textContent = 7;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// *************************************************************

// function displayMessage(message) {
//   messageDisplay.textContent = message;
// }

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(guessInput.value);
//   console.log(guess);

//   if (!guess && score >= 1) {
//     displayMessage('No number !!!');
//   } else if (guess === secretNum) {
//     displayMessage('Correct Number');
//   } else if (guess !== secretNum && score >= 1) {
//     displayMessage(guess > secretNum ? 'Too high' : 'Too low');
//     score--;
//   }

//   if (score < 1) {
//     displayMessage('😂 You Lost the Game');
//   }

//   scoreDisplay.textContent = score;
// });

let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);

let score = 20;

let highScore = 0;
// document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//what to do with the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  const numGuess = Number(guess);
  //when there is no input
  if (!guess) {
    displayMessage('No Number');
    //when guess is not equal
  } else if (numGuess !== secretNum) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'You are loose!!';
    } else {
      displayMessage(numGuess > secretNum ? 'Too High' : 'Too Law');
      score--;
      displayScore(score);
    }
  }
  // else if (numGuess > secretNum) {
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'You are loose!!';
  //   } else {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   //guess is too low
  // } else if (numGuess < secretNum) {
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'You are loose!!';
  //   } else {
  //     document.querySelector('.message').textContent = 'Too Law';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //when player wins
  // }
  else if (numGuess === secretNum) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '250px';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
//what to do with the again the button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  console.log(secretNum);

  displayScore(score);

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  displayMessage('Strat guessing ...');

  //reset the styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
