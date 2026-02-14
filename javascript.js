//selecting divs

const scoreP = document.querySelector(".scoreP");
const result = document.querySelector(".results");
const resultP =document.querySelector(".resultP");
const buttonR = document.querySelector(".rock");
const buttonP = document.querySelector(".paper");
const buttonS = document.querySelector(".scissors");

let score = 0;
let game = true;

function getComputerChoice(){
    let cChoice = Math.floor(Math.random() * 3);
    if (cChoice == 0){
        return "rock";
    }
    else if (cChoice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function checkWin(){
    if (score === 5){
        resultP.textContent = "You Win The Game";
        game = false;
    }
}


function playRound(human, computer, game) {
    if (game){
        if (human=="rock" && computer=="scissors" ||
            human=="scissors" && computer=="paper" ||
            human=="paper" && computer=="rock"){
            resultP.textContent = "You Won!";
            score++;
            scoreP.textContent = score;
            result.style.backgroundColor = "green";
        }
        else if (computer=="rock" && human=="scissors" ||
            computer=="scissors" && human=="paper" ||
            computer=="paper" && human=="rock"){
            resultP.textContent = "You Lost!";
            result.style.backgroundColor = "red";
        }
        else{
            resultP.textContent = "It was a tie!";
            result.style.backgroundColor = "white";
        }
    }
    checkWin();
}

/*
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});
*/

buttonR.onclick = () => playRound("rock", getComputerChoice(), game);
buttonP.onclick = () => playRound("paper", getComputerChoice(), game);
buttonS.onclick = () => playRound("scissors", getComputerChoice(), game);