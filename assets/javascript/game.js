//Letter choices available
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var selectedLetter = "";



//Select random letter
var randomLetter = letters[Math.floor(Math.random() * letters.length)];


//Allows the user 9 guesses
var updateGuessesLeft = function() {
  document.querySelector('#guesses-left').innerHTML = guessesLeft;
};

var updateSelectedLetter = function() {
  selectedLetter = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = guessedLetters.join(', ');
  
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateSelectedLetter();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateSelectedLetter();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

       if (guessesLeft > 0){
            if (userGuess == selectedLetter){
                wins++;
                document.querySelector('#wins').innerHTML = wins;
                alert("Congratulations, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = losses;
            alert("Sorry, you're not psychic today.  Try again . . .");
            // Then we'll call the reset. 
            reset();
        }
};

