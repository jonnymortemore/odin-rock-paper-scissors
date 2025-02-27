const SCISSORS = "scissors"
const ROCK = "rock"
const PAPER = "paper"
let humanScore = 0;
let computerScore = 0;


console.log("Play Rock, Paper, Scissors!")
playGame()

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

function getUserChoice() {
    let choiceMade = false;
    let choice = ""
    while (!choiceMade) {
        choice = window.prompt("Pick rock, paper, scissors!");
        choice.trim();
        choice.toLowerCase();
        if ([ROCK, PAPER, SCISSORS].includes(choice)) {
            choiceMade = true;
        }
        else {
            console.log(
                "Oops, that's not one of the choices!"
            )
        }
    }
    
    return choice;
}

function playerRound(playerMove, computerMove) {
    let winner = true;
    if (playerMove === computerMove) {
        console.log(`Draw! Computer also played ${playerMove}`);
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
        console.log(`You win! ${playerMove} beats ${computerMove}`);
    } else {
        console.log(`You lose! ${computerMove} beats ${playerMove}`);
    }
}

function playGame() {
    const roundTotal = 5;

    for (let round = 1; round <= roundTotal; round++) {
        console.log("Round " + round)
        playerRound(getUserChoice(), getComputerChoice())
        console.log(`You: ${humanScore}`)
        console.log(`Computer: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (humanScore == computerScore) {
        console.log("It's a draw!")
    }
    else {
        console.log("Damn you lost!")
    }
}