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

var randomNumber = 0;
var pinkNumber = 0;
var purpleNumber = 0;
var blueNumber = 0;
var diamondNumber = 0;
var win = 0;
var lose = 0;
var totalScore = 0;

// random number generator

function randomNumGen() {
    totalScore = 0;
    $("#totalScore").text(totalScore);
    // generage random number
    randomNumber = Math.ceil(Math.random() * 120) + 19

    // generate random gem numbers, but keep hidden
    pinkNumber = Math.ceil(Math.random() * 12);
    purpleNumber = Math.ceil(Math.random() * 12);
    blueNumber = Math.ceil(Math.random() * 12);
    diamondNumber = Math.ceil(Math.random() * 12);
    console.log(pinkNumber, purpleNumber, blueNumber, diamondNumber);

    // display random number

    $(".random-number").text(randomNumber);
}

randomNumGen();

// START GAME

// if total-score === first random number, then you win
// add one point to win and reset the game

if (totalScore === randomNumber) {
    win++
    $("#wins").text(win);
    randomNumGen();
}

// if total-score > random number, then you lose
// add one point to lose and reset the game

if (totalScore > randomNumber) {
    lose++
    $("#losses").text(lose);
    randomNumGen();
}

// if total-score > random number, then you lose
// add one point to lose and reset the game

else {
    $(".pink").on("click", function () {
        totalScore = totalScore + pinkNumber;
        $("#total-score").text(totalScore);
    });
    $(".purple").on("click", function () {
        totalScore = totalScore + purpleNumber;
        $("#total-score").text(totalScore);
    });
    $(".blue").on("click", function () {
        totalScore = totalScore + blueNumber;
        $("#total-score").text(totalScore);
    });
    $(".diamond").on("click", function () {
        totalScore = totalScore + diamondNumber;
        $("#total-score").text(totalScore);
    });
}

