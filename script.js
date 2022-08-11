function getComputerChoice() {
    let randomNum =Math.floor(Math.random()*3)+1
  if(randomNum === 1) {
    return "rock";
  }else if(randomNum === 2) {
    return "paper"
  }else {
    return "scissors"
  }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
  button.addEventListener("click", game);
});

  




function game (e){
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    function playRound(playerSelection,computerSelection) {
      if((playerSelection === "rock")&&(computerSelection === "scissors")) {
        playerScore++
        return "You win! Rock beats Scissors";
      } else if((playerSelection === "paper")&&(computerSelection === "rock")) {
        playerScore++
        return "You win! Paper beats Rock";
      } else if((playerSelection === "scissors")&&(computerSelection === "paper")) {
        playerScore++
        return "You win! scissors beats paper"
      } else if(playerSelection === computerSelection){
        return `It's a draw, you chose ${playerSelection} and computer chose ${computerSelection}`
      } else {
        computerScore++
        return `You lose, ${computerSelection} beats ${playerSelection}`
      }
    }


    let winnerh2 = document.getElementById("winner");
  winnerh2.textContent = playRound(playerSelection,computerSelection);

  let playerh2 = document.getElementById("player");
  playerh2.textContent = `Player score is: ${playerScore}`;

  let computerh2 = document.getElementById("computer");
  computerh2.textContent = `Computer score: is ${computerScore}`;

  let winner5 = document.getElementById("winner5");
  winner5.textContent = firstToFive();



  }

    function firstToFive() {
      if(computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return "Computer wins this round by reaching a score of 5 first"
      } else if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        return "Player wins this round by reaching a score of 5 first"
      } else return; 
    }

 

    
 
  
  




  /**
   * how to reset game after score reaches 5
   */


