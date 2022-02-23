function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  let outcome = ["rock", "paper", "scissors"];
  return outcome[randomNumber];
}
