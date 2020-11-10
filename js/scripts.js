/*export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  return "I can't answer that yet!";
}
*/

// //Intro Page UI
// clickPlay()

// //Game Page UI
// players = [];
//   playerName || playerX
//   if (playerTurn(X)) {
//     return Boolean}; 
  
// scoreBoard
//   turnRolls 
//   turnScore("<li>" + "playerScore" + "</li>")
//   add(playerTotal)
//   winner(playerTotal.toEqual(100))
//   //extra cred: give other player one more roll 
//   //  logsScore

//   // --- Code for generating a number between 1 & 6 (inclusive): --- 
// // Math.floor(Math.random() * 6) + 1  
// // How this works: Math.random() generates a fraction between 0 and 1 (so like 0.5, 0.3353, 0.999, etc)
// // Adding * 6 would increase that so that each of those fractions is bigger (0.5 becomes 3, .33 becomes like 1.98, .999 becomes 5.994, etc)
// // The + 1 at the end ensures we have a base value of 1 in the number... since Math.random() can generate 0, and we don't have a 0-side on the die, we want the smallest possible value to come out to be 1.0
// // Math.floor "" returns the largest integer less than or equal to a given number. "", so it rounds it down to the nearest whole number.
// // So for example... 
// // Math.floor(Math.random() * 6) + 1 
// // if your "Math.random()" value rolls the highest possible value, 0.99999 (for infinity)
// // becomes Math.floor(0.999 * 6) + 1
// // 0.99999 * 6 = 5.999(...), then +1 gets you 6.9999999999
// // the Math.floor says "6.99999 isn't a whole number. just cut everything off after that decimal point."
// // returns value of 6.



// //Game Page Business Logic
// dieRollButton()
//   numberGenerator
//   branching --> pictureGenerator(dieSide)

// changeTurn()

// playerHoldButton()

// playerRollsOne()
//   turnForfeit = turnScores(0) && changeTurn()
  


// //Score Variable Ideas//

// Score: 

// playerTotalScore = add (playerTurnScore/turn)

// playerTurnScore = add (playerTurnRolls);

// playerTurnRolls = []; 

////////////////////////
// This stuff will be moved and declared in the event page load handler so they aren't ""global"" variables
/*let turnRoll = [];
let turnSum = 0;
let totalScore = 0;
let player1turn = true;
let player2turn = false;
let player1TotalScore = 0;
let player2TotalScore = 0; 
*/
//let input = Math.floor((Math.random() * 6) +1);

export function rollButtonPressed(input) {
// for (let i = 0; i < input.length; i +=1) {
  if (input === 1) {
    return 1; 
  } 
  else {
    return false;
  }
}


/*function holdButtonPressed(input) {
  turnSum = turnRoll.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(turnSum);
  if (player1turn === true) {
    player1TotalScore += turnSum;
  } else {
    player2TotalScore += turnSum;
  }
  player1turn = !player1turn;
  player2turn = !player2turn;
  turnRoll = [0];
  turnSum = 0;
}
*/

export function addition(x,y) {
  return x+y;
} 

export function subtraction(x,y) {
  return x-y; 
}

export function multiplication(x,y) {
  return x*y; 
}