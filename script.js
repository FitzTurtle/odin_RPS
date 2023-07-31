const choices = ["rock","paper","scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector("#printResult");
const choice = document.querySelector(".compcard");
const choiceImg = document.createElement('img');

let playerPoints;
let compPoints;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function showComputerChoice(compchoice) {
    choiceImg.setAttribute('src', `../images/${compchoice}.png`);
    // choice.textContent = compchoice;
    choice.appendChild(choiceImg);
}

function showResult(gameResult) {
    result.textContent = gameResult;
}

rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let gameResult = playRound("rock", computerChoice);
    showComputerChoice(computerChoice);
    showResult(gameResult);      
});

paper.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let gameResult = playRound("paper", computerChoice);
    showComputerChoice(computerChoice);
    showResult(gameResult); 
});

scissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let gameResult = playRound("scissors", computerChoice);
    showComputerChoice(computerChoice);
    showResult(gameResult);
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

// function game() {
//     playerPoints = 0;
//     compPoints = 0;

//     while(playerPoints + compPoints < 5){
//         console.log(playRound(selectValid(),getComputerChoice()));
//     }

//     if(playerPoints > compPoints){
//         console.log("Congrats! you won with "+playerPoints+" total games won out of 5");
//     } else {
//         console.log("You lose! The computer won " + compPoints + " out of 5 games");
//     }
// }

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