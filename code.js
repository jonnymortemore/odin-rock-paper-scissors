const SCISSORS = "scissors";
const ROCK = "rock";
const PAPER = "paper";
const FINALSCORE = 5;
let round = 1;
let humanScore = 0;
let computerScore = 0;


console.log("Play Rock, Paper, Scissors!")

const buttons = document.querySelectorAll("button")
const outcome = document.querySelector('#outcome')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id)})
})

function getComputerChoice() {
    let value = Math.random();
    let choice = "";
    if (value <= 0.333) {
        choice = "rock";
    }
    else if (value > 0.333 && value <=  0.666) {
        choice = "scissors";
    }
    else {
        choice = "paper";
    }
    return choice
}

function playerRound(playerMove, computerMove) {
    let winner = true;
    round += 1;
    if (playerMove === computerMove) {
        outcome.innerText = `Draw! Computer also played ${playerMove}`;
        return
    }
    else if (playerMove === ROCK) {
        if (computerMove === SCISSORS) {
            humanScore++;
            winner = true;
        }
        else {
            computerScore++;
            winner = false;
            
        }
    }
    else if (playerMove === PAPER) {
        if (computerMove === ROCK) {
            humanScore++;
            winner = true;
        }
        else {
            computerScore++
            winner = false;
        }
    }
    else if (playerMove === SCISSORS) {
        if (computerMove === PAPER) {
            humanScore++;
            winner = true;
        }
        else {
            computerScore++;
            winner = false;
        }
    }

    if (winner) {
        outcome.innerText = `You win! ${playerMove} beats ${computerMove}`;
    } else {
        outcome.innerText = `You lose! ${computerMove} beats ${playerMove}`;
    }
}

function playGame(playerChoice) {
    const roundTracker = document.querySelector('#round-tracker');
    const pcScore = document.querySelector("#pc-score");
    const yourScore = document.querySelector("#your-score");
    roundTracker.innerText = "Round: " + round;
    playerRound(playerChoice, getComputerChoice());
    yourScore.innerText = `You: ${humanScore}`;
    pcScore.innerText = `Computer: ${computerScore}`;

    if (humanScore == FINALSCORE) {
        outcome.innerText = "You win!";
    }
    else if (computerScore == FINALSCORE) {
        outcome.innerText = "The Computer wins!";
    }
}