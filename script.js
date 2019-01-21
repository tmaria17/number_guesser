function generateNumber() {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumberInRange() {
   min = parseInt(document.getElementById("min").value);
   max = parseInt(document.getElementById("max").value);
   alert("Your range is "+ min +" to "+ max + ".")
   magicNumber = generateNumber();
}

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
  else if (guess < min || guess > max) {
    alert("Your guess must be within the range");
  }
  else if ( guess == magicNumber){
    min -= 10;
    max += 10;
    message.innerHTML = `Your last guess was ${guess}. BOOM! You are leveling up! Your range minimum will decrease by 10 and your range maximum will increase by 10! <br> Your new range is ${min} to ${max}.`;
  }
  else if (guess > magicNumber)
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
function resetRange(){
  document.getElementById("min").value = " ";
  document.getElementById("max").value = " ";
}
function resetGame() {
  document.getElementById("guess-number").value = "";
  generateNumber();
  magicNumber = generateNumber();
  resetRange()
  message.innerHTML = '';
}
