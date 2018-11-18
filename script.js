var randomNumber = Math.floor(Math.random() * 100) + 1;
var min = 1;
var max = 100;

$('.user-submit').on('click', function () {
  var guessNumber = Number(userNumber.value);

  if (parseInt(guessNumber) === randomNumber) {
    $('.last-guess').text('');
    $('.message').text('BOOM!');
    $('.hi-low').text('');
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
  else if (parseInt(guessNumber) > max || parseInt(guessNumber) < min) {
    alert(guessNumber + " is outside of the range, choose a number between " + min + " and " + max);
    userNumber.value = '';
    return;
  }
  else if (isNaN(guessNumber)){
    alert("Not a valid number");
    userNumber.value = '';
    return;
  }
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
  var resetParas = document.querySelectorAll('.resultParas p');

  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  userNumber.value = '';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
