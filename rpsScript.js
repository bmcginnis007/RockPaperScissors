function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    console.log(random);
}

