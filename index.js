let gameArr = ["rock", "paper", "scissors"];
let playerWon = 0;
let computerWon = 0;

function computerPlay(){
    let computerAnswer = [""];
    let randomComputerNumber = Math.floor(Math.random()*3);
    return computerAnswer[""] = gameArr[randomComputerNumber];
}

document.getElementById('rock').addEventListener('click', function(){
    let playerAnswer = 'rock';
    function game(){
        computerAnswer = computerPlay();
        playRound(playerAnswer, computerAnswer);    
    };
    game();
});
document.getElementById('paper').addEventListener('click', function(){
    let playerAnswer = 'paper';
    function game(){
        computerAnswer = computerPlay();
        playRound(playerAnswer, computerAnswer);    
    };
    game(); 
});
document.getElementById('scissors').addEventListener('click', function(){
    let playerAnswer = 'scissors';
    function game(){
        computerAnswer = computerPlay();
        playRound(playerAnswer, computerAnswer);    
    };
    game(); 
});

function playRound(playerAnswer, computerAnswer){
    if (playerAnswer === "rock" && computerAnswer === "paper"){ 
        document.querySelector('h1').innerHTML = "Paper beats rock! Computer wins!";
        computerWon = computerWon + 1; 
        document.querySelector('#computerWon').innerHTML = `Rounds won by computer: ${computerWon}`;
    } else if (playerAnswer === "rock" && computerAnswer === "scissors"){
        document.querySelector('h1').innerHTML = "Rock beats scissors! Player wins!";
        playerWon = playerWon + 1;
        document.querySelector('#playerWon').innerHTML = `Rounds won by player: ${playerWon}`;
    } else if (playerAnswer === "paper" && computerAnswer === "rock"){
        document.querySelector('h1').innerHTML = "Paper beats rock! Player wins!";
        playerWon = playerWon + 1;
        document.querySelector('#playerWon').innerHTML = `Rounds won by player: ${playerWon}`;
    } else if (playerAnswer === "paper" && computerAnswer === "scissors"){
        document.querySelector('h1').innerHTML = "Scissors beats paper! Computer wins!";
        computerWon = computerWon + 1; 
        document.querySelector('#computerWon').innerHTML = `Rounds won by computer: ${computerWon}`;
    } else if (playerAnswer === "scissors" && computerAnswer === "paper"){ 
        document.querySelector('h1').innerHTML = "Scissors beats paper! Player wins!";
        playerWon = playerWon + 1;
        document.querySelector('#playerWon').innerHTML = `Rounds won by player: ${playerWon}`;
    } else if (playerAnswer === "scissors" && computerAnswer === "rock"){
        document.querySelector('h1').innerHTML = "Rock beats scissors! Computer wins!";
        computerWon = computerWon + 1; 
        document.querySelector('#computerWon').innerHTML = `Rounds won by computer: ${computerWon}`;
    } else if (playerAnswer === computerAnswer){
        document.querySelector('h1').innerHTML = "Tie!";
    };
};