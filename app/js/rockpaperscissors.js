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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move ||  getInput();
}
//Validate the computer's move
function getComputerMove(move) {
    return move || randomPlay();
}
//determine the winner
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == computerMove) {
        return winner == 'tie';
    } else if ((playerMove == "paper" && computerMove == "rock") 
            || (playerMove == "scissors" && computerMove == "paper") 
            || (playerMove == "rock" && computerMove == "scissors")) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
        return winner == 'player';
    } else {
        return winner == 'computer';
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
        if (getWinner (playerMove, computerMove) == 'player') {
            playerWins += 1;
            console.log('You won!');
        if (getWinner (playerMove, computerMove) == 'computer') {
            computerWins += 1;
            console.log('You lost');
        } else {
            console.log('Tie');
        }
    if (playerWins == 5) {
        console.log("You won 5 games!");
    } else if (playerWins == 5) {
        console.log("The computer won 5 games");
    }
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}}
playToFive();