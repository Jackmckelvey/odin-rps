console.log("This website will play 5 rounds of rock paper scissors, then announce a winner.");

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

function getHumanChoice(){
    let hChoice = prompt("Please pick one").toLowerCase();
    return hChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(human, computer) {
        console.log(human);
        console.log(computer);
        if (human=="rock" && computer=="scissors" ||
             human=="scissors" && computer=="paper" ||
             human=="paper" && computer=="rock"){
            console.log("You Won!");
            humanScore++;
        }
        else if (computer=="rock" && human=="scissors" ||
            computer=="scissors" && human=="paper" ||
            computer=="paper" && human=="rock"){
            console.log("You Lost!");
            computerScore++;
        }
        else{
            console.log("It was a tie!");
        }
    }
    for (let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    
    let scoreString = "The Score was " + humanScore + " to " + computerScore;
    console.log(scoreString);
}

console.log(playGame());