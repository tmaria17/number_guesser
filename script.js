let submitButton = document.getElementById(".guess-button");

function generateNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
let magicNumber = generateNumber()
function checkGuess() {
  var guess = document.getElementById("guess-number").value;
  var message = document.getElementById("message");
  if ( guess == magicNumber){
    message.innerHTML = 'BOOM!';
  } else if (guess > magicNumber)
  {
    message.innerHTML = 'That is tooooo high!';
  }
  else
  {
    message.innerHTML = 'That is too low!';
  }
};
