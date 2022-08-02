function getComputerChoice() {
  function computerChoice() {
    return Math.floor(Math.random()*3)+1
  }
  if(computerChoice() === 1) {
    return "rock";
  }else if(computerChoice() === 2) {
    return "paper"
  }else {
    return "scissors"
  }
}

// function playRound(playerSelection,computerSelection) {
//   if((playerSelection === "rock")&&(computerSelection === "scissors")) {
//     return "You win! Rock beats Scissors";
//   } else if((playerSelection === "paper")&&(computerSelection === "rock")) {
//     return "You win! Paper beats Rock";
//   } else if((playerSelection === "scissors")&&(computerSelection === "paper")) {
//     return "You win! scissors beats paper"
//   } else if(playerSelection === computerSelection){
//     return "Its a draw"
//   } else {
//     return "You lose"
//   }
// }

const playerSelection =  "rock"//prompt("enter your choice");
const computerSelection = getComputerChoice();


//console.log(playRound(playerSelection, computerSelection));

function game() {

  for (let i = 0; i < 5; i++) {
    function playRound(playerSelection,computerSelection) {
      if((playerSelection === "rock")&&(computerSelection === "scissors")) {
        return "You win! Rock beats Scissors";
      } else if((playerSelection === "paper")&&(computerSelection === "rock")) {
        return "You win! Paper beats Rock";
      } else if((playerSelection === "scissors")&&(computerSelection === "paper")) {
        return "You win! scissors beats paper"
      } else if(playerSelection === computerSelection){
        return "Its a draw"
      } else {
        return "You lose"
      }
    } 
    console.log(playRound(playerSelection, computerSelection))
  }
  

}
