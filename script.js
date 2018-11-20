var randomNumber = Math.floor(Math.random() * 10) + 1;
var resetButton = document.querySelector('#resetButton');
var clearButton = document.querySelector('#clearButton');
var min = 0;
var max = 10;

rangeButton.addEventListener('click', defineRange);

var minimumForm = document.querySelector('#minimumForm');
var maximumForm = document.querySelector('#maximumForm');

function defineRange() {
  console.log('set')
  min = Number(minimumForm.value)
  max = Number(maximumForm.value)

  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

$('.user-submit').on('click', function () {
  var guessNumber = Number(userNumber.value);
  document.getElementById('clearButton').disabled = false;

  if (parseInt(guessNumber) === randomNumber) {
    $('.last-guess').text('');
    $('.message').text('BOOM!');
    $('.hi-low').text('');
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
  document.querySelector('#resetButton').disabled = false;
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
  var resetParas = document.querySelectorAll('.resultParas p');

  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  userNumber.value = '';
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

resetButton.addEventListener('click', allDisable);

function allDisable() {
    resetButton.disabled = true;
    clearButton.disabled = true;
}
