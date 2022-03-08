function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

let info = window.prompt("Choose Rock, Paper, or Scissors");
playerSelection = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
computerSelection = computerPlay();
function playRound(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return "It's a tie!";
    }
    if(computerSelection == "Rock" && playerSelection == "Paper"){
        return alert("I chose Rock. You chose Paper. Paper covers Rock. You win!");
    }
    if(computerSelection == "Rock" && playerSelection == "Scissors"){
        return "Rock breaks Scissors. I win!"
    }
    if(computerSelection == "Paper" && playerSelection == "Scissors"){
        return "Scissors cut Paper. You win!";
    }
    if(computerSelection == "Paper" && playerSelection == "Rock"){
        return "Paper covers Rock. I win!";
    }
    if(computerSelection == "Scissors" && playerSelection == "Rock"){
        return "Rock breaks Scissors. You win!";
    }
    if(computerSelection == "Scissors" && playerSelection == "Paper"){
        return "Scissors cut Paper. I win!";
    }
}


console.log(`You chose ${playerSelection}`);
console.log(`I chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

function game(){
  
}