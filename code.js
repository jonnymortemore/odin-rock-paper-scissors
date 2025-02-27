console.log("hello!");


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
        if (["scissors", "rock", "paper"].includes(choice)) {
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