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
        document.getElementById("td1").innerHTML = "X";
        document.getElementById("td2").innerHTML = "";
        document.getElementById("td3").innerHTML = "";
       
        if (computerSelection == "Scissors"){
            document.getElementById("td3b").innerHTML = "X";
            document.getElementById("td2b").innerHTML = "";
            document.getElementById("td1b").innerHTML = "";
        }
        if (computerSelection == "Rock"){
            document.getElementById("td1b").innerHTML = "X";
            document.getElementById("td2b").innerHTML = "";
            document.getElementById("td3b").innerHTML = "";
        }
        if (computerSelection == "Paper"){
            document.getElementById("td2b").innerHTML = "X";
            document.getElementById("td1b").innerHTML = "";
            document.getElementById("td3b").innerHTML = "";
        }

        scoreboard();

        console.log(`${playerSelection}`);
        console.log(`${computerSelection}`);
        
    });
        
    document.getElementById("paper").addEventListener("click", function(){
         playerSelection = "Paper";
         computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        document.getElementById("td2").innerHTML = "X";
        document.getElementById("td1").innerHTML = "";
        document.getElementById("td3").innerHTML = "";
        
        if (computerSelection == "Scissors"){
            document.getElementById("td3b").innerHTML = "X";
            document.getElementById("td2b").innerHTML = "";
            document.getElementById("td1b").innerHTML = "";
        }
        if (computerSelection == "Rock"){
            document.getElementById("td1b").innerHTML = "X";
            document.getElementById("td2b").innerHTML = "";
            document.getElementById("td3b").innerHTML = "";
        }
        if (computerSelection == "Paper"){
            document.getElementById("td2b").innerHTML = "X";
            document.getElementById("td1b").innerHTML = "";
            document.getElementById("td3b").innerHTML = "";
        }

        scoreboard();

        console.log(`${playerSelection}`);
        console.log(`${computerSelection}`);
    });
    document.getElementById("scissors").addEventListener("click", function(){
         playerSelection = "Scissors";
         computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        document.getElementById("td3").innerHTML = "X";
        document.getElementById("td1").innerHTML = "";
        document.getElementById("td2").innerHTML = "";
        if (computerSelection == "Scissors"){
            document.getElementById("td3b").innerHTML = "X";
            document.getElementById("td2b").innerHTML = "";
            document.getElementById("td1b").innerHTML = "";
        }
        if (computerSelection == "Rock"){
            document.getElementById("td1b").innerHTML = "X";
            document.getElementById("td2b").innerHTML = "";
            document.getElementById("td3b").innerHTML = "";
        }
        if (computerSelection == "Paper"){
            document.getElementById("td2b").innerHTML = "X";
            document.getElementById("td1b").innerHTML = "";
            document.getElementById("td3b").innerHTML = "";
        }

        scoreboard();

        console.log(`${playerSelection}`);
        console.log(`${computerSelection}`);
        
    });
    }

    let compScore = 0;
    let playerScore = 0;

let playerSelection = options();
let computerSelection = computerPlay();

function playRound(computerSelection, playerSelection){
    
    if(computerSelection == "Rock" && playerSelection == "Paper"){
        ++playerScore
        document.getElementById("td2").style.backgroundColor = "green";
        document.getElementById("td1b").style.backgroundColor = "red";
    }

    else if(computerSelection == "Rock" && playerSelection == "Scissors"){
        ++compScore
       
    }
    else if(computerSelection == "Paper" && playerSelection == "Scissors"){
        ++playerScore
     
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock"){
        ++compScore
  
    }
    else if(computerSelection == "Scissors" && playerSelection == "Rock"){
        ++playerScore
       
    }
   else if(computerSelection == "Scissors" && playerSelection == "Paper"){
        ++compScore
      
    }
}

function scoreboard(){
    if(playerScore == 1){
        document.getElementById("td4").innerHTML = "1";
    } 

    if(playerScore == 2){
        document.getElementById("td4").innerHTML = "2";
    }

    if(playerScore == 3){
        document.getElementById("td4").innerHTML = "3";
    } 

    if(playerScore == 4){
        document.getElementById("td4").innerHTML = "4";
    } 

    if(playerScore == 5){
        document.getElementById("td4").innerHTML = "5";
        document.getElementById("td4").style.backgroundColor = "green";
    } 

    if(compScore == 1){
        document.getElementById("td4b").innerHTML = "1";
    }
    
    if(compScore == 2){
        document.getElementById("td4b").innerHTML = "2";
    } 

    if(compScore == 3){
        document.getElementById("td4b").innerHTML = "3";
    } 

    if(compScore == 4){
        document.getElementById("td4b").innerHTML = "4";
    } 

    if(compScore == 5){
        document.getElementById("td4b").innerHTML = "5";
        document.getElementById("td4b").style.backgroundColor = "green";
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




