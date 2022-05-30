function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}




function options(){
    
    document.getElementById("rock").addEventListener("click", function(){
         playerSelection = "Rock";
         computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        console.log(`${playerSelection}`);
        console.log(`${computerSelection}`);
        
    });
        
    document.getElementById("paper").addEventListener("click", function(){
         playerSelection = "Paper";
         computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        document.getElementById("td1").innerHTML = "X";
        console.log(`${playerSelection}`);
        console.log(`${computerSelection}`);
    });
    document.getElementById("scissors").addEventListener("click", function(){
         playerSelection = "Scissors";
         computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        console.log(`${playerSelection}`);
        console.log(`${computerSelection}`);
        
    });
    }

    let compScore = 0;
    let playerScore = 0;

let playerSelection = options();
let computerSelection = computerPlay();

function playRound(computerSelection, playerSelection){
    
    if(computerSelection == playerSelection){
        return alert("It's a tie!");
    }
    else if(computerSelection == "Rock" && playerSelection == "Paper"){
        ++playerScore
        return alert("I chose Rock. You chose Paper. Paper covers Rock. You have " + `${playerScore}` + " point."); 
    }
    else if(computerSelection == "Rock" && playerSelection == "Scissors"){
        ++compScore
        return alert("I chose Rock. You chose Scissors. Rock breaks Scissors. I have " + `${compScore}` + " point.");
    }
    else if(computerSelection == "Paper" && playerSelection == "Scissors"){
        ++playerScore
        return alert("I chose Paper. You chose Scissors. Scissors cut Paper. You have " + `${playerScore}` + " point.");
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock"){
        ++compScore
        return alert("I chose Paper. You chose Rock. Paper covers Rock. I have " +`${compScore}` + " point.");
    }
    else if(computerSelection == "Scissors" && playerSelection == "Rock"){
        ++playerScore
        return alert("I chose Scissors. You chose Rock. Rock breaks Scissors. You have " +`${playerScore}` + " point.");
    }
   else if(computerSelection == "Scissors" && playerSelection == "Paper"){
        ++compScore
        return alert("I chose Scissors. You chose Paper. Scissors cut Paper. I have " +`${compScore}` + " point.");
    }
}






function game(){
    for (let i = 0; i < 5; i++) {
        if (i < 4) {
            let info = window.prompt("Choose Rock, Paper, or Scissors");
            playerSelection = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
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




