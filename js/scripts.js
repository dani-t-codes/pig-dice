//Intro Page UI
clickPlay()

//Game Page UI
players = [];
  playerName || playerX
  playerTurn --> return boolean 
  
scoreBoard
  turnRolls 
  turnScore("<li>" + "playerScore" + "</li>")
  add(playerTotal)
  winner(playerTotal.toEqual(100))
  //extra cred: give other player one more roll 
  //  logsScore

  // --- Code for generating a number between 1 & 6 (inclusive): --- 
// Math.floor(Math.random() * 6) + 1  
// How this works: Math.random() generates a fraction between 0 and 1 (so like 0.5, 0.3353, 0.999, etc)
// Adding * 6 would increase that so that each of those fractions is bigger (0.5 becomes 3, .33 becomes like 1.98, .999 becomes 5.994, etc)
// The + 1 at the end ensures we have a base value of 1 in the number... since Math.random() can generate 0, and we don't have a 0-side on the die, we want the smallest possible value to come out to be 1.0
// Math.floor "" returns the largest integer less than or equal to a given number. "", so it rounds it down to the nearest whole number.
// So for example... 
// Math.floor(Math.random() * 6) + 1 
// if your "Math.random()" value rolls the highest possible value, 0.99999 (for infinity)
// becomes Math.floor(0.999 * 6) + 1
// 0.99999 * 6 = 5.999(...), then +1 gets you 6.9999999999
// the Math.floor says "6.99999 isn't a whole number. just cut everything off after that decimal point."
// returns value of 6.



//Game Page Business Logic
dieRollButton()
  numberGenerator
  branching --> pictureGenerator(dieSide)

changeTurn()

playerHoldButton()

playerRollsOne()
  turnForfeit = turnScores(0) && changeTurn()
  


//Score Variable Ideas//

Score: 

playerTotalScore = add (playerTurnScore/turn)

playerTurnScore = add (playerTurnRolls);

playerTurnRolls = []; e