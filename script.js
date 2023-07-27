const choices = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}


function playRound(playerSelection, computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase();
    let lowerComp = computerSelection.toLowerCase();
    let playerVictory = "You won! " + playerSelection + " beats " + computerSelection;
    let compVictory =  "You lost! " + computerSelection + " beats " + playerSelection;

    if(lowerPlayer == lowerComp) {
        return "You tied! "+ playerSelection + " ties with " + computerSelection; 
    }
    else if(lowerPlayer == "rock" && lowerComp == "paper") {
        return compVictory;
    } else if(lowerPlayer == "paper" && lowerComp == "scissors"){
        return compVictory;
    }
    else if(lowerPlayer == "scissors" && lowerComp == "rock") {
        return compVictory;
    } else {
        return playerVictory;
    }


}