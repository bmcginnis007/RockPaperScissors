function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

alert("Welcome to Rock Paper Scissors");
alert("We will play 5 rounds in a game. Best of 5 wins. Good luck!");

let compScore = 0;
let playerScore = 0;


let info = window.prompt("Choose Rock, Paper, or Scissors");
playerSelection = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
computerSelection = computerPlay();
function playRound(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return alert("It's a tie!");
    }
    if(computerSelection == "Rock" && playerSelection == "Paper"){
        ++playerScore
        return alert("I chose Rock. You chose Paper. Paper covers Rock. You have " + `${playerScore}` + " point."); 
    }
    if(computerSelection == "Rock" && playerSelection == "Scissors"){
        ++compScore
        return alert("I chose Rock. You chose Scissors. Rock breaks Scissors. I have " + `${compScore}` + " point.");
    }
    if(computerSelection == "Paper" && playerSelection == "Scissors"){
        ++playerScore
        return alert("I chose Paper. You chose Scissors. Scissors cut Paper. You have " + `${playerScore}` + " point.");
    }
    if(computerSelection == "Paper" && playerSelection == "Rock"){
        ++compScore
        return alert("I chose Paper. You chose Rock. Paper covers Rock. I have " +`${compScore}` + " point.");
    }
    if(computerSelection == "Scissors" && playerSelection == "Rock"){
        ++playerScore
        return alert("I chose Scissors. You chose Rock. Rock breaks Scissors. You have " +`${playerScore}` + " point.");
    }
    if(computerSelection == "Scissors" && playerSelection == "Paper"){
        ++compScore
        return alert("I chose Scissors. You chose Paper. Scissors cut Paper. I have " +`${compScore}` + " point.");
    }
}




console.log(`You chose ${playerSelection}`);
console.log(`I chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i < 5; i++) {
        if (i < 4) {
            let info = window.prompt("Choose Rock, Paper, or Scissors");
            playerSelection = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        }
        else if (i > 5) {
            break;
        }

        
    }

    if(compScore == playerScore){
        alert("We both scored a total of " + `${compScore}` + " points. It's a tie!");
    }
    if(compScore < playerScore){
        alert("I scored " + `${compScore}` + " points and you scored " + `${playerScore}` + " points. You win!");
    }
    if(compScore > playerScore){
        alert("I scored " + `${compScore}` + " points and you scored " + `${playerScore}` + " points. I win!");
    }
}
game()
alert("Want to play again?");
window.location.reload();

