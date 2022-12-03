let gameArr = ["rock", "paper", "scissors"];
let playerWon = 0;
let computerWon = 0;

function computerPlay() {
    let computerAnswer = [""];
    let randomComputerNumber = Math.floor(Math.random()*3);
    return computerAnswer[""] = gameArr[randomComputerNumber];
}

function playRound(playerAnswer, computerAnswer) {
    if (playerAnswer === "rock" && computerAnswer === "paper"){ 
        console.log("Paper beats rock! Computer wins!");
        computerWon = computerWon + 1; 
    } else if (playerAnswer === "rock" && computerAnswer === "scissors"){
        console.log("Rock beats scissors! Player wins!");
        playerWon = playerWon + 1;
    } else if (playerAnswer === "paper" && computerAnswer === "rock"){
        console.log("Paper beats rock! Player wins!");
        playerWon = playerWon + 1;
    } else if (playerAnswer === "paper" && computerAnswer === "scissors"){
        console.log("Scissors beats paper! Computer wins!");
        computerWon = computerWon + 1; 
    } else if (playerAnswer === "scissors" && computerAnswer === "paper"){ 
        console.log("Scissors beats paper! Player wins!");
        playerWon = playerWon + 1;
    } else if (playerAnswer === "scissors" && computerAnswer === "rock"){
        console.log("Rock beats scissors! Computer wins!");
        computerWon = computerWon + 1; 
    } else if (playerAnswer === computerAnswer){
        console.log("Tie!");
    } else {
        alert("Invalid answer. Try again.");
    }
}

function game(){
    for (let i = 1; i <= 5; i++){
        computerAnswer = computerPlay();
        let answerPrompt = prompt("Rock, paper or scissors?");
        let playerAnswer = answerPrompt.toLowerCase();
        playRound(playerAnswer, computerAnswer);
        if (playerWon === 3){
            console.log("You won 3 out of 5 games! Game over.");
            break;
        } else if (computerWon === 3){
            console.log("Computer won 3 out of 5 games! Game over.");
            break;
        }
    }
    if (playerWon > computerWon){
        alert("You won!");
    } else if (playerWon < computerWon){
        alert("Computer won!");
    } else if (playerWon === computerWon){
        alert("It's a tie!");
    }
}

game();
