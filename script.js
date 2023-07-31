const choices = ["rock","paper","scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const choice = document.querySelector(".compcard");
const choiceImg = document.createElement('img');
const result = document.querySelector(".result");
const resultReset = document.querySelector(".result").innerHTML;

let printResult = document.querySelector("#printResult");
let playerPointSpan = document.querySelector(".playerPointSpan");
let compPointSpan = document.querySelector(".computerPointSpan");

let playerPoints = 0;
let compPoints = 0;
let gameover = false;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function showComputerChoice(compchoice) {
    choiceImg.setAttribute('src', `images/${compchoice}.png`);
    // choice.textContent = compchoice;
    choice.appendChild(choiceImg);
}

function showResult(gameResult) {
    printResult.textContent = gameResult;
    playerPointSpan.textContent = playerPoints;
    compPointSpan.textContent = compPoints;

}

rock.addEventListener('click', () => {

    if(!gameover) {
        let computerChoice = getComputerChoice();
        let gameResult = playRound("rock", computerChoice);
        showComputerChoice(computerChoice);
        showResult(gameResult);      
        checkVictory();
    };
});

paper.addEventListener('click', () => {
    if(!gameover) {
        let computerChoice = getComputerChoice();
        let gameResult = playRound("paper", computerChoice);
        showComputerChoice(computerChoice);
        showResult(gameResult); 
        checkVictory();
    }
});

scissors.addEventListener('click', () => {
    if(!gameover) {
        let computerChoice = getComputerChoice();
        let gameResult = playRound("scissors", computerChoice);
        showComputerChoice(computerChoice);
        showResult(gameResult);
        checkVictory();
    }
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

function checkVictory() {
    if (playerPoints == 5) {
        gameover=true;
        gameEnd("You won! Play again?");
    }
    else if (compPoints == 5) {
        gameover=true;
        gameEnd("You lost! Play again?")
    }
}

function gameEnd(victor){
    result.innerHTML = `<div class="gameEnd">${victor}</div><button id="reset" onclick = "reset()">Play again</button>`;
}

function reset(){
    playerPoints = 0;
    compPoints = 0;
    result.innerHTML = resultReset;
    printResult = document.querySelector("#printResult");
    playerPointSpan = document.querySelector(".playerPointSpan");
    compPointSpan = document.querySelector(".computerPointSpan");
    gameover=false;
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

// function selectValid() {
//     valid = false;
//     let playerSelection;
//     while (!valid) {
//         playerSelection = prompt().toLowerCase();

//         switch(playerSelection){
//             case "rock":
//             case "paper":
//             case "scissors":
//                 valid = true;
//                 break;
//             default:
//                 console.log("please type rock paper or scissors");
//         }
//     }
//     return playerSelection;

// }