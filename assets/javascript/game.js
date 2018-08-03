
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var lettersguessed = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function(event)  {
    
var userGuess = event.key;

var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];



if (lettersguessed.indexOf(userGuess) < 0) {  
    
    if (userGuess === computerGuess) {
        wins++;
        guessesleft = 9;
        lettersguessed = [];
    }

    if (userGuess != computerGuess) {
        guessesleft --;
        lettersguessed.push(userGuess);
    }

        if (guessesleft === 0) {    
            guessesleft = 9;
            losses ++;
            lettersguessed = [];

        }   
}
// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
var html =
  "<p>Wins: " + wins + "</p>" +
  "<p>Losses: " + losses + "</p>" +
  "<p>Remaining Guesses: " + guessesleft + "</p>" +
  "<p>Well, these definitely didn't work: " + lettersguessed + "</p>";
  
// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
}
