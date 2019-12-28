// generate a random number between 19-120
// display random number on .random-number
// generate random number for each crystal, but keep hidden
// on-click show first crystal number on #total-score
// after first click, on-click add each crystal number to #total-score
// if total-score === first random number, then you win
// add one point to win and reset the game
// if total-score > random number, then you lose
// add one point to lose and reset the game
// variables I think I need
    // random-number
    // pink number
    // blue number
    // purple number
    // diamond number
    // win
    // lose
    // total-score


 // CODE BEGINS
 
 // set global variables

//  var randomNumber = function randomInteger(min, max) {
//      return Math.random() * (120 - 19) + 19;
//  }

var randomNumber = Math.floor(Math.random() * 120) +1;
var pinkNumber = Math.floor(Math.random() * 12) +1;
var purpleNumber = Math.floor(Math.random() * 12) +1;
var blueNumber = Math.floor(Math.random() * 12) +1;
var diamondNumber = Math.floor(Math.random() * 12) +1;
var win = 0;
var lose = 0;
var totalScore = 0;

// set game start function

function gameStart () {
    randomNumber()
    
}

