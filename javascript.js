//slecting divs

const scoreP = document.querySelector(".scoreP");
const result = document.querySelector(".results");
const resultP =document.querySelector(".resultP");
const buttonR = document.querySelector(".rock");
const buttonP = document.querySelector(".paper");
const buttonS = document.querySelector(".scissors");

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


function playRound(human, computer) {
    if (human=="rock" && computer=="scissors" ||
        human=="scissors" && computer=="paper" ||
        human=="paper" && computer=="rock"){
        resultP.textContent = "You Won!";
        score++;
        scoreP.textContent = score;
        result.style.backgroundcolor = "Green";
    }
    else if (computer=="rock" && human=="scissors" ||
        computer=="scissors" && human=="paper" ||
        computer=="paper" && human=="rock"){
        resultP.textContent = "You Lost!";
        result.style.backgroundcolor = "Red";
    }
    else{
        resultP.textContent = "It was a tie!";
    }
}

/*
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});
*/

buttonR.onclick = playRound("rock", getComputerChoice());
buttonP.onclick = playRound("paper", getComputerChoice());
buttonS.onclick = playRound("scissors", getComputerChoice());