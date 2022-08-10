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

function game (){
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("enter your choice","").toLowerCase();
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
        return "Its a draw"
      } else {
        computerScore++
        return "You lose"
      }
    }
    console.log(playRound(playerSelection,computerSelection))

  }
  function showWinner() {
    if(playerScore > computerScore) {
      return "Player wins this set"
    }else {
      return "Computer wins this set"
    }
  }
  console.log(`playerScore is ${playerScore}`);
  console.log(`computerScore is ${computerScore}`);
  console.log(showWinner());
  
}




