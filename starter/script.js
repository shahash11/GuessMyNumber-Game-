'use strict';

// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent="Correct Number"

// document.querySelector(".number").textContent= 13;
// document.querySelector(".score").textContent= 10;

// // from the input field it's different---> we use "value" instead of textContent

// document.querySelector(".guess").value= 23
// console.log(document.querySelector(".guess").value) ;

// generating random number for the game between 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message1 => {
  document.querySelector('.message').textContent = message1;
};

console.log((document.querySelector('.number').textContent = secretNumber));


// DOM MANIPULATION ON EVENT HANDLER
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  //   when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 🤣';
    displayMessage('No Number 🤣');
  }
  //   using ternary operator
  //   {!guess? document.querySelector(".message").textContent="No Number 🤣":""};



  //   when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent ='Congrats! You Won the Game 👏';
    displayMessage('Congrats! You Won the Game 👏');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //   when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess>secretNumber?'TOO HIGH':"TOO LOW";
      displayMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW');
      score--;
      document.querySelector('.score').textContent = score;
    } 
    else {
      // document.querySelector('.message').textContent = 'You Lost 😁';
      displayMessage('You Lost 😁');
      document.querySelector('.score').textContent = 0;
    }
  }

  // //   when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'TOO HIGH';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost 😁';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  // //   when guess is too low
  //   else if (guess < secretNumber) {
  //     if (score >1) {
  //       document.querySelector('.message').textContent = 'TOO LOW';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost 😁';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
