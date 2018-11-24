// declare variable randomNumber that generates a random number between 1 to 100
var randomNumber = Math.floor(Math.random() * 100) + 1;
// declare variable resetButton and clearButton that find the first and corresponding html id
var resetButton = document.querySelector('#resetButton');
var clearButton = document.querySelector('#clearButton');
// declare variable min and max set to default values
var min = 1;
var max = 100;
// declare variable win set to false
var win = false

// uses event listener to perform defineRange function if a click happens on variable rangeButton
rangeButton.addEventListener('click', defineRange);

// declare variable minimum and maximum, it looks for the first element in html matching an id of minimumForm and maximumForm
var minimumForm = document.querySelector('#minimumForm');
var maximumForm = document.querySelector('#maximumForm');

// declare function defineRange that resets the value of min and max based on the user's input
function defineRange() {
  min = Number(minimumForm.value)
  max = Number(maximumForm.value)
  // create randomNumber based on new range
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  // display alert to user in order to communicate new range value to user
  alert("The range is between " + min + " and " + max + ".");
}

// jQuery part. Waiting for a click on a class userSubmit in order to perform a function
$('.userSubmit').on('click', function () {
  // declare variable guessNumber that is equal to what the user type and submit
  var guessNumber = Number(userNumber.value);
  // user can now click on clearButton
  document.getElementById('clearButton').disabled = false;
  // set logic for game / check if guessNumber is equal to randomNumber and display according message. Require to use parseInt because the user input is a string and not a number
  if (parseInt(guessNumber) === randomNumber) {
    $('.last-guess').text('');
    $('.message').text('BOOM!');
    $('.hi-low').text('');
    gameOver();
  }
  else if (parseInt(guessNumber) > max || parseInt(guessNumber) < min) {
    alert(guessNumber + " is outside of the range, choose a number between " + min + " and " + max);
    userNumber.value = '';
    return;
  }
  else if (parseInt(guessNumber) < randomNumber){
    $('.last-guess').text('Your last guess was');
    $('.message').text(guessNumber);
    $('.hi-low').text('That is too low');
  }
  else if (parseInt(guessNumber) > randomNumber){
    $('.last-guess').text('Your last guess was');
    $('.message').text(guessNumber);
    $('.hi-low').text('That is too high');
  }
  else if (isNaN(guessNumber)){
    alert("Not a valid number");
    userNumber.value = '';
    return;
  }
  // user can now click on resetButton
  document.querySelector('#resetButton').disabled = false;
});

// perform fucntion resetGame if user click on an element that is equal to the variable resetButton
resetButton.addEventListener('click', resetGame);

// declare function resetGame
function resetGame() {
  var resetParas = document.querySelectorAll('.resultParas p');

  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  userNumber.value = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // increases max and decreases min range if user won the game so if variable win is equal to true
  if (win === true) {
    min = min - 10;
    max = max + 10;
    minimumForm.value = min;
    maximumForm.value = max;
    defineRange();
    win = false;
  }
}
// perform function allDisable when click happens on variable resetButton
resetButton.addEventListener('click', allDisable);

// declare function allDisable that disables buttons reset and clear
function allDisable() {
  resetButton.disabled = true;
  clearButton.disabled = true;
}

// declares function gameOver that is perform when the user guesses the randomNumber. It changes the value of the button reset and disable the clear Button and set the variable win to true.
function gameOver() {
  clearButton.disabled = true;

  resetButton.value = 'New Game - New Range';
  win = true;
}
