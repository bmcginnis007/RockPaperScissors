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

    if(computerSelection == "Rock" && playerSelection == "Rock"){
        document.getElementById("td1").style.backgroundColor = "#797b7d";
        document.getElementById("td1b").style.backgroundColor = "#797b7d";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
    }

    if(computerSelection == "Paper" && playerSelection == "Paper"){
        document.getElementById("td2").style.backgroundColor = "#797b7d";
        document.getElementById("td2b").style.backgroundColor = "#797b7d";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td1b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
    }

    if(computerSelection == "Scissors" && playerSelection == "Scissors"){
        document.getElementById("td3").style.backgroundColor = "#797b7d";
        document.getElementById("td3b").style.backgroundColor = "#797b7d";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td1b").style.backgroundColor = "black";
    }
    
    if(computerSelection == "Rock" && playerSelection == "Paper"){
        ++playerScore
        document.getElementById("td2").style.backgroundColor = "green";
        document.getElementById("td1b").style.backgroundColor = "red";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
    }

    if(computerSelection == "Rock" && playerSelection == "Scissors"){
        ++compScore
        document.getElementById("td1b").style.backgroundColor = "green";
        document.getElementById("td3").style.backgroundColor = "red";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
    }
    if(computerSelection == "Paper" && playerSelection == "Scissors"){
        ++playerScore
        document.getElementById("td2b").style.backgroundColor = "red";
        document.getElementById("td3").style.backgroundColor = "green";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td1b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
     
    }
    if (computerSelection == "Paper" && playerSelection == "Rock"){
        ++compScore
        document.getElementById("td2b").style.backgroundColor = "green";
        document.getElementById("td1").style.backgroundColor = "red";
        document.getElementById("td2").style.backgroundColor = "black"
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td1b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
  
    }
    if(computerSelection == "Scissors" && playerSelection == "Rock"){
        ++playerScore
        document.getElementById("td1").style.backgroundColor = "green";
        document.getElementById("td3b").style.backgroundColor = "red";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td1b").style.backgroundColor = "black";
       
    }
   if(computerSelection == "Scissors" && playerSelection == "Paper"){
        ++compScore
        document.getElementById("td3b").style.backgroundColor = "green";
        document.getElementById("td2").style.backgroundColor = "red";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td1b").style.backgroundColor = "black";
      
    }
}


function scoreboard(){
    if(playerScore == 1){
        document.getElementById("td4").innerHTML = "1";
    } 

    if(compScore == 1){
        document.getElementById("td4b").innerHTML = "1";
    }

    if(playerScore == 2){
        document.getElementById("td4").innerHTML = "2";
    }

    if(compScore == 2){
        document.getElementById("td4b").innerHTML = "2";
    } 

    if(playerScore == 3){
        document.getElementById("td4").innerHTML = "3";
    } 

    if(compScore == 3){
        document.getElementById("td4b").innerHTML = "3";
    } 

    if(playerScore == 4){
        document.getElementById("td4").innerHTML = "4";
    } 

    if(compScore == 4){
        document.getElementById("td4b").innerHTML = "4";
    } 

    if(playerScore > 5){
        --playerScore
    }

    if(compScore > 5){
        --compScore
    }

   if(playerScore == 5 && compScore < playerScore){
        document.getElementById("td4").innerHTML = "5 points to you. You win!";
        document.getElementById("td4").style.backgroundColor = "green";
        document.getElementById("td4b").style.backgroundColor = "red";
        document.getElementById("td4b").innerHTML = "I'll be back";
        document.getElementById("td1").innerHTML = "";
        document.getElementById("td2").innerHTML = "";
        document.getElementById("td3").innerHTML = "";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td1b").innerHTML = "";
        document.getElementById("td2b").innerHTML = "";
        document.getElementById("td3b").innerHTML = "";
        document.getElementById("td1b").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
   }

    if(playerScore < compScore && compScore == 5){
        document.getElementById("td4b").innerHTML = "Computer wins this time!";
        document.getElementById("td4b").style.backgroundColor = "green";
        document.getElementById("td4").style.backgroundColor = "red";
        document.getElementById("td4").innerHTML = "You lose this time :(";
        document.getElementById("td1").innerHTML = "";
        document.getElementById("td2").innerHTML = "";
        document.getElementById("td3").innerHTML = "";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td1b").innerHTML = "";
        document.getElementById("td2b").innerHTML = "";
        document.getElementById("td3b").innerHTML = "";
        document.getElementById("td1b").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
    }

    if(playerScore == 5 && compScore == 5){
       document.getElementById("td4").innerHTML = "Rock Paper Scissors";
       document.getElementById("td4").style.backgroundColor = "black";
       document.getElementById("td4b").style.backgroundColor = "black";
       document.getElementById("td4b").innerHTML = "to play again";
       document.getElementById("td1").innerHTML = "Thanks";
       document.getElementById("td2").innerHTML = "for";
       document.getElementById("td3").innerHTML = "playing";
       document.getElementById("td1").style.backgroundColor = "black";
       document.getElementById("td2").style.backgroundColor = "black";
       document.getElementById("td3").style.backgroundColor = "black";
       document.getElementById("td1b").innerHTML = "Please";
       document.getElementById("td2b").innerHTML = "click";
       document.getElementById("td3b").innerHTML = "reset";
       document.getElementById("td1b").style.backgroundColor = "black";
       document.getElementById("td2b").style.backgroundColor = "black";
       document.getElementById("td3b").style.backgroundColor = "black";
    }

    if(compScore == 5 && playerScore == 5){
        document.getElementById("td4b").innerHTML = "to play again";
        document.getElementById("td4b").style.backgroundColor = "black";
        document.getElementById("td4").style.backgroundColor = "black";
        document.getElementById("td4").innerHTML = "Rock Paper Scissors";
        document.getElementById("td1").innerHTML = "Thanks";
        document.getElementById("td2").innerHTML = "for";
        document.getElementById("td3").innerHTML = "playing";
        document.getElementById("td1").style.backgroundColor = "black";
        document.getElementById("td2").style.backgroundColor = "black";
        document.getElementById("td3").style.backgroundColor = "black";
        document.getElementById("td1b").innerHTML = "Please";
        document.getElementById("td2b").innerHTML = "click";
        document.getElementById("td3b").innerHTML = "reset";
        document.getElementById("td1b").style.backgroundColor = "black";
        document.getElementById("td2b").style.backgroundColor = "black";
        document.getElementById("td3b").style.backgroundColor = "black";
    }
console.log(`${playerScore}`);
console.log(`${compScore}`);
}

document.getElementById("resetButton").addEventListener("click", function(){
    window.location.reload();
    return false;
}

)

