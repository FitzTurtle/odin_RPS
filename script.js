const choices = ["Rock","Paper","Scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const choice = document.querySelector(".compcard");
let playerPoints;
let compPoints;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function showComputerChoice(compchoice) {
    choice.textContent = compchoice;
}

rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);
    console.log(playRound("rock", computerChoice));
    
});

paper.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);
    console.log(playRound("paper", getComputerChoice()));
});

scissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);
    console.log(playRound("scissors", getComputerChoice()));
});




function playRound(playerSelection, computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase();
    let lowerComp = computerSelection.toLowerCase();
    let playerVictory = "You won! " + playerSelection + " beats " + computerSelection;
    let compVictory =  "You lost! " + computerSelection + " beats " + playerSelection;

    if(lowerPlayer == lowerComp) {
        return "You tied! "+ playerSelection + " ties with " + computerSelection; 
    }
    else if(lowerPlayer == "rock" && lowerComp == "paper") {
        compPoints++;
        return compVictory;
    } else if(lowerPlayer == "paper" && lowerComp == "scissors"){
        compPoints++;
        return compVictory;
    }
    else if(lowerPlayer == "scissors" && lowerComp == "rock") {
        compPoints++;
        return compVictory;
    } else {
        playerPoints++;
        return playerVictory;
    }
}

function game() {
    playerPoints = 0;
    compPoints = 0;

    while(playerPoints + compPoints < 5){
        console.log(playRound(selectValid(),getComputerChoice()));
    }

    if(playerPoints > compPoints){
        console.log("Congrats! you won with "+playerPoints+" total games won out of 5");
    } else {
        console.log("You lose! The computer won " + compPoints + " out of 5 games");
    }
}

function selectValid() {
    valid = false;
    let playerSelection;
    while (!valid) {
        playerSelection = prompt().toLowerCase();

        switch(playerSelection){
            case "rock":
            case "paper":
            case "scissors":
                valid = true;
                break;
            default:
                console.log("please type rock paper or scissors");
        }
    }
    return playerSelection;

}