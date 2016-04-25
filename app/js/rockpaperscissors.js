////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
//Validate the player's move
function getPlayerMove(move) {
    return move ||  getInput();
}

//Validate the computer's move
function getComputerMove(move) {
    return move || randomPlay();
}

//determine the winner
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
      winner = 'tie';
    } else if ((playerMove === 'rock' && computerMove === 'scissors') 
        || (playerMove === 'scissors' && computerMove === 'paper') 
        || (playerMove === 'paper' && computerMove === 'rock')) {
      winner = 'player';
    } else {
      winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove + ".")
      if (getWinner(playerMove,computerMove) === 'player') {
        playerWins += 1;
        console.log("You won!");
      } else if (getWinner(playerMove,computerMove) === 'computer') {
        computerWins += 1;
        console.log("You lost.");
      } else {
        console.log("It's a tie.");
      }
    }
    if (computerWins === 5) {
        console.log("The computer beat you.")
    } else if (playerWins === 5) {
        console.log("You beat the computer!")
    }
    
    return [playerWins, computerWins];
}
playToFive();