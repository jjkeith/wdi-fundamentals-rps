////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit  
        (I edited it a little.) */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.’").toLowerCase();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
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
    } else if (playerMove === 'gun') {
            winner = 'end';
    } else {
      winner = 'computer';
    }
    return winner;
}

//provides a description of the move.
function defineMove(playerMove,computerMove) {
    var announceMove;
    if ((playerMove === 'scissors' || computerMove === 'scissors') && (playerMove === 'paper' || computerMove === 'paper')) {
        announceMove = 'Scissors cut paper.';
    } else if ((playerMove === 'scissors' || computerMove === 'scissors') && (playerMove === 'rock' || computerMove === 'rock')) {
         announceMove = 'Rock crushes scissors.';
    } else if ((playerMove === 'rock' || computerMove === 'rock') && (playerMove === 'paper' || computerMove === 'paper')) {
        announceMove = 'Paper covers rock.';
    } else if (playerMove === 'gun') {
        announceMove = "Gun? That's not fair. Computer quits.";
    } else {
        announceMove = 'No, ' + playerMove + ' is not an option.' 
}return announceMove;       
}

//player and computer play until one wins five times.
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
            if (getWinner(playerMove,computerMove) === 'player') {
                playerWins += 1;
                console.log(defineMove(playerMove,computerMove) + ' ' + 'You win!');
            } else if (getWinner(playerMove,computerMove) === 'computer') {
                computerWins += 1;
                console.log(defineMove(playerMove,computerMove)+ ' ' + 'You lose.');
            } else if (getWinner(playerMove,computerMove) === 'end') {
                playerWins = 5;
                console.log(defineMove(playerMove,computerMove));
            } else {
                console.log('You and computer both chose ' + playerMove + '. A tie.');
      }
    }
    if (computerWins === 5) {
        console.log('The computer beat you.');
    } else if (playerWins >= 5) {
        console.log('You beat the computer!');
    }
    
    console.log('[You: ' + playerWins + ', Computer: ' + computerWins + ']');
}
playToFive();