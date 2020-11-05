# Pig Dice

#### Creates a game of Pig Dice for Object-Oriented JavaScript, Epicodus Wk4 Practice, 11.4.2020

#### By Danielle Thompson, Shannon Grantski, & Taylor Baker

## Description

_This webpage creates a game of Pig Dice for users to play together. For complete Pig Dice details, visit [Wikipedia's site on Pig](https://en.wikipedia.org/wiki/Pig_%28dice_game%29) for more information on how to play._

## Technologies used

_{CSS}_
_{HTML}_
_{Bootstrap - yes, include libraries too!}_
_{jQuery}_

### Tests
Describe: play()
Test: Shows instructions to play game alongside "play" button to enter game.
Code: {pseudocode:} When you click play, the play button disapears and the game "board" appears. ".hide" and ".show"
Expect: play.expect(startsGame)  

&& 

Test: Clicking play prompts the user to enter "player 1 name".
Expect: play.expect(assignPlayer1)

&&

Test: Clicking play prompts the user to enter "player 2 name". 
Expect: play.expect(assignPlayer2)


Describe: rollDie()
Test: When the "roll" button is clicked, app will randomly choose number between 1 & 6.
Code: Math.floor(Math.random() * 6) + 1
Expect: rollDie().expect(singleNumber:1-6)

(&&)

Test: When the "roll" button is clicked, an image of the dice rolled appears on the UI.
Expect: rollDie(2).expect.show(img(2))

(&&)

Test: When the "roll" button is clicked, the chosen number will be appended to the list of points rolled for this turn.
Code: playerTurnScore.push( [number value determined by Math.floor function above])
Expect: rollDie(2).expect.push(2); playerTurnScore = [(roll 1 value), (roll 2 value), ...]

(if)

Test: If 1 is rolled, the turn score for that player on that turn becomes 0.
Expect: rollDie(1).expect(0)

(&&)

Test: If 1 is rolled, player turn ends. 
Expect: rollDie(1).expect(playerXTurnEnds)

&&

Test: If 1 is rolled, a message appears stating that the turn has ended due to a turn score of zero.
Expect: rollDie(1).expect(playerXTurnEndMessage)

(else)
 
Test: If 2:6 is rolled, player may roll again. 
&& 
Test: If 2:6 is rolled, computer adds number rolled to array scoreAdd([]). 
&&
Test: Number 2:6 added to array gets added together for totalPlayerScore. 

Describe: holdButton()

Test: When the "Hold" button is clicked, the current playerTurnScore will be "locked in" for that turn.
Expect: $("button#hold-button").click(playerXTurnScore = playerXTurnScore)

Test: When the "Hold" button is clicked, the current playerTurnScore will be added to the totalPlayerScore for that player.
Expect: $("button#hold-button").click(playerTotalScore.append(playerxTurnScore))

Test: When the "Hold" button is clicked, the current player's turn will end, passing to the next players turn.
Expect: $("button#hold-button").click(playerXTurnEnd)


Describe: totalPlayerScore()
Test: When any player reaches 100+, that player wins game. 
Expect: playerXScore(100).toEqual(gameWon) 
&& 
Test: When 2nd player is below score of 100, that player loses game. 
Expect: playerYScore(<100).toEqual(gameLost)

Describe: turnEnd()
Test: When a number 1 is rolled or the "hold" button is clicked, the turn ends, passing play to the next player.
Expect: 


Describe: gameEnds()
Test: When game ends, screen branches to player that won & their score with option to play again or exit. 
Expect: playerXWon.show(results && "play again(Y/N)?")

<!-- *Game Play*

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins. !-->

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Program Gathers User Input** | User input: "pants" | Output: "pants" |
| **Program Removes Spaces from User Input**| User Input: "pants pants" | Output: "pantspants" |
| **Program Removes Punctuation from User Input**| Input: "p#an^t@s  /p(ant%s" | Output: "pantspants" |
| **Program Assigns Characters Numeric Values** | Input: "pants" | Output: "3 1 1 1 1" |
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |

## Complete setup instructions

* _For Mac users, find Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._

* _For Windows users, open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Once you have Homebrew &/or Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/independent-project2] and clone this application with the following command:`git clone https://github.com/dani-t-codes/independent-project2`._
* _Open the index.html in your web browser of choice, either by double-clicking the file icon inside the project folder, or by opening File>Open File>"index.html" from the independent-project2 folder that you cloned onto your computer._
* _Read through the index page, and ..._

## (Optional) Known bugs

_No known bugs at this time._

### Legal, or License 

_MIT_ Copyright (c) 2020 **_{List of contributors or company name}_**

_{This software is licensed under the MIT license.}_


## Notes

### Pig Dice Game

#### Goal: 

The goal of this two-day project is to exercise your JavaScript programming skills with constructors, prototypes, objects, properties, methods, jQuery and DOM manipulation and traversal.

#### Pig Dice:

Write a program where two users can play Pig dice against each other. Don't forget to write plain English specifications with example inputs and outputs before you begin coding!

#### Warm Up: 

First, carefully read each project description below, and decide which project to tackle with your partner. Then, group up with other pairs working on this project for a collective, student-led whiteboard session. Discuss the following; map out a basic approach on a whiteboard, collaborate, and get creative!

 * What will happen when a user clicks "Play"?
	- It will prompt the user to enter player names.

 * What objects will you need?
	- Players
	- Dice (number generator)
  - Score (both turn and total)

 * What key-value pairs will each object need to contain in order for the game to work?
	- Players
    1. playerName
    2. playerTurn // expected value: true or false //

	- Dice
    1. randomNumberGenerator (function, most likely)
    2. img of side of die that is landed on (**Extra credit**)

 * What functions?
	- numberGenerator function
	- turn order function
	- score keeping function
  - need to be able to display turn score and total score
  - "hold" function
  - roll of "0" function

 * How will these be triggered throughout the gameplay?
	- 
	- 
	- 

 * How will information be collected from the user? How will it be displayed?
	- 
	- 
	- 

 * When you have a broad overview of how you want to build your game, identify the simplest behavior, and perhaps what behaviors to tackle after that. Remember to start simple and work one step at a time.
	- 
	- 
	- 

#### Further Exploration

 * Add options to play one of the other variations of Pig Dice using two or more dice
 * Add option to play the computer - easy or hard levels:
	- Easy: Computer always stops after second roll.
	- Hard: Computer uses strategy based on current total and rolled dice.


## Pig Dice: Rules

### Gameplay

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

For example, the first player, Gregory, begins a turn with a roll of 5. Gregory could hold and score 5 points, but chooses to roll again. Gregory rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Gregory rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score.