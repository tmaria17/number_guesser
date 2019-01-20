function generateNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
var magicNumber = generateNumber();

function checkGuess() {
  var guess = document.getElementById("guess-number").value;
  var message = document.getElementById("message");
  document.getElementById("reset-button").disabled = false;
  document.getElementById("reset-game-button").disabled = false;
  document.getElementById("reset-button").classList.remove("disabled");
  document.getElementById("reset-game-button").classList.remove("disabled");
  if(isNaN(guess)) {
    alert("Please input a number");
  }
  else if (guess < 1 || guess > 10) {
    alert("Your guess must be within the 1-10 range");
  }
  else if ( guess == magicNumber){
    message.innerHTML = `Your last guess was ${guess}. BOOM!`;
  } else if (guess > magicNumber)
  {
    message.innerHTML = `Your last guess was ${guess}. That is tooooo high!`;
  }
  else
  {
    message.innerHTML = `Your last guess was ${guess}. That is too low!`;
  }
}

function clearForm(){
  document.getElementById("guess-number").value = "";
}

function resetGame() {
  document.getElementById("guess-number").value = "";
  generateNumber();
  magicNumber = generateNumber();
  message.innerHTML = '';
}
