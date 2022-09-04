const computerOptions = ["rock","paper","scissors"];
const buttonsToPlay = document.querySelectorAll('button .selections');
const matchResultString =  document.querySelector('.matchResults');
const gameResultString = document.querySelector('.howWins');
const buttonRestart = document.querySelector('.restart');

let cpuPoints=0;
let userPoints=0;
let ties=0;
let whoWinsLastMatch;
let lastMatchResult;

buttonsToPlay.forEach((button) => {
    button.addEventListener('click', play);
});

buttonRestart.addEventListener('click', restart);

function restart(){
    matchResultString.textContent = "";
    gameResultString.textContent = "";
    cpuPoints=0;
    userPoints=0;
    ties=0;
}


function play(e){
    
    console.log(this.id);
    let Userselection = this.id;

    whoWinsLastMatch = playRound(Userselection, getComputerChoice());

    (whoWinsLastMatch == "CPU") ? cpuPoints++ : 
    (whoWinsLastMatch == "Player") ? userPoints++ : 
    (whoWinsLastMatch == "tie") ? ties++:
    console.log("Error");

    matchResultString.textContent = `Player ${userPoints} vs ${cpuPoints} CPU` ;
    lastMatchResult = (whoWinsLastMatch != "tie") ? `${whoWinsLastMatch} win` : "tie" ;
    gameResultString.textContent = `Last Match was a ${lastMatchResult}`;
    //console.log(playRound("ROCK",getComputerChoice()));

}







function getComputerChoice(){
    let randomNumer = Math.floor(Math.random()*3);
    return computerOptions[randomNumer];
}

function playRound(playerSelection, computerSelection ){
    let whoWins = ""; 
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case "rock":
            whoWins = (computerSelection == "rock") ? "tie" :
            (computerSelection == "paper") ? "CPU" :
            (computerSelection == "scissors") ? "Player": "error";
        break;

        case "paper":
        whoWins = (computerSelection == "paper") ? "tie" :
            (computerSelection == "scissors") ? "CPU" :
            (computerSelection == "rock") ? "Player": "error";
        break;

        case "scissors":
            whoWins = (computerSelection == "paper") ? "Player" :
            (computerSelection == "scissors") ? "tie" :
            (computerSelection == "rock") ? "CPU": "error";
        break;
        
        default:
            whoWins = "Wrong Selection";
        break;
    }
    return whoWins;
}

function printRoundWinner(whoWins, playerSelection,  computerSelection){
    (whoWins == "CPU") ? console.log(`You Lose! ${computerSelection} beats ${playerSelection}`) : 
    (whoWins == "Player") ? console.log(`You Win! ${playerSelection} beats ${computerSelection}`) : 
    console.log("tie");
}

function printWinner(playerPoints, computerPoints, ties){
    (playerPoints > computerPoints) ? console.log(`Player Wins! ${playerPoints} - ${computerPoints}. Ties: ${ties}`) : 
    console.log(`Player Lose! ${playerPoints} - ${computerPoints}. Ties: ${ties}`);
}

/*

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let ties = 0;
    let whoWins= "";
    for (i=0; i< 5; i++){
        let playerSelection = prompt("Choose: Paper, Rock, Scissors?");
        let computerSelection = getComputerChoice();
        whoWins = playRound(playerSelection, computerSelection );
        (whoWins == "CPU") ? computerPoints++ : 
        (whoWins == "Player") ? playerPoints++ : 
        (whoWins == "tie") ? ties++:
        console.log("Error");
        printRoundWinner(whoWins, playerSelection,  computerSelection);
    }
    printWinner(playerPoints, computerPoints, ties);

}

game();


*/

/* rock, paper, scissors*/                                                