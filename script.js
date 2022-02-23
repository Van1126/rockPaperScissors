function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  let outcome = ["rock", "paper", "scissors"];
  return outcome[randomNumber];
}

function rockPaperScissors(
  playerSelection,
  computerSelection = computerPlay()
) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "draw";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return " you lose";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "you lose";
  } else if (playerSelection === " scissors" && computerSelection === "paper") {
    return "you win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you win";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "you lose";
  } else {
    return "try again";
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    let userSelection = prompt("rock, paper or scissors?");
    console.log(rockPaperScissors(userSelection));
  }
}
