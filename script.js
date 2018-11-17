var randomNumber = Math.floor(Math.random() * 5 ) + 1;

$('.user-submit').on('click', function () {
  var guessNumber = $('.user-number').val();

  if (parseInt(guessNumber) === randomNumber) {
    $('.message').text('BOOM!');
  } else if (parseInt(guessNumber) < randomNumber){
    $('.message').text('That is too low');
  } else if (parseInt(guessNumber) > randomNumber){
    $('.message').text('That is too high');
  }
});
