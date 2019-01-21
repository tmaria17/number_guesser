//This fuction generates a random number
function generateNumber() {
  return Math.floor(Math.random() * (max - min)) + min;
}
// This function calls the above function to generate the magic number with the range the user chooses
//this function also will alert the user of thier range.
function generateNumberInRange() {
   min = parseInt(document.getElementById("min").value);
   max = parseInt(document.getElementById("max").value);
   alert("Your range is "+ min +" to "+ max + ".")
   magicNumber = generateNumber();
}

function checkGuess() {
  //Gets the user's guess from the form
  var guess = document.getElementById("guess-number").value;
  //Gets the message from the index.html
  var message = document.getElementById("message");
  //Enables the reset buttons once the user submits their first guess and removes the disabled class to change the styling
  document.getElementById("reset-button").disabled = false;
  document.getElementById("reset-game-button").disabled = false;
  document.getElementById("reset-button").classList.remove("disabled");
  document.getElementById("reset-game-button").classList.remove("disabled");
//Checks to make sure guess is a number and alerts the user.
  if(isNaN(guess)) {
    alert("Please input a number");
  }
  //Checks to make sure guess is in range and alerts the user
  else if (guess < min || guess > max) {
    alert("Your guess must be within the range");
  }
  //Win conditions if the user guesses the magic number the users min descreases and the max increases sets the message to let user know
  else if ( guess == magicNumber){
    min -= 10;
    max += 10;
    message.innerHTML = `Your last guess was ${guess}. BOOM! You are leveling up! Your range minimum will decrease by 10 and your range maximum will increase by 10! <br> Your new range is ${min} to ${max}.`;
  }
  //Sets message to let user know their last guess was too high
  else if (guess > magicNumber)
  {
    message.innerHTML = `Your last guess was ${guess}. That is tooooo high!`;
  }
  else
  //sets message to let user know their last guess was too low.
  {
    message.innerHTML = `Your last guess was ${guess}. That is too low!`;
  }
}
//this function clears the form by making the input box empty.
function clearForm(){
  document.getElementById("guess-number").value = "";
}
//this function empties the range input boxes.
function resetRange(){
  document.getElementById("min").value = " ";
  document.getElementById("max").value = " ";
}
//this function resets the game by clearing the guess and generating a new number as well as resetting the range, it also clears the message.
function resetGame() {
  document.getElementById("guess-number").value = "";
  generateNumber();
  magicNumber = generateNumber();
  resetRange()
  message.innerHTML = '';
}
