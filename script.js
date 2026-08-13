console.log("Connected !");
//   ----------------------------------------GLOBAL CONSTANTS DECLARATION--------------------------------------------------------
const choices = ["rock", "paper", "scissors"];
const divPrint = document.getElementById("printResult");
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
let round = 1;

// ---------------------------------------------- get Computer Choice ------------------------------------------------------------

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// -------------------------------------------- a founction to play a round--------------------------------------------------

function playRound(playerSelection) {
  if (round > 5) return;

  const computerChoice = getComputerChoice();
  if (
    (playerSelection === "rock" && computerChoice === "paper") ||
    (playerSelection === "paper" && computerChoice === "scissors") ||
    (playerSelection === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    divPrint.textContent = `Round ${round}/5 : Lost ! The ${computerChoice} beats the ${playerSelection}`;
  } else if (playerSelection === computerChoice) {
    divPrint.textContent = `Round ${round}/5 : Equality !`;
  } else {
    playerScore++;
    divPrint.textContent = `Round ${round}/5 : Won ! The ${playerSelection} beats the ${computerChoice}`;
  }
  round++;

  if (round > 5) {
    announceWinner();
  }
}

// --------------------------------------------announce a winner---------------------------------------------------------------------------
function announceWinner() {
  let finalMsg = `\n--- FIN ! Score : Vous ${playerScore} - ${computerScore} Ordi. `;
  if (playerScore > computerScore) finalMsg += "Final Victory ! 🎉";
  else if (playerScore < computerScore) finalMsg += "Lose ! ❌";
  else finalMsg += "Nul ! 🤝";

  divPrint.textContent += finalMsg;
}

// ---------------------------------------------event on buttons--------------------------------------------------

buttons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.value));
});
// --------------------------------------------------reset--------------------------------------------------------------

const resetBtn = document.getElementById("resetBtn");

// 2. On écoute le clic
resetBtn.addEventListener("click", () => {
  //reset variables
  playerScore = 0;
  computerScore = 0;
  round = 1;

  // reset divPrint
  divPrint.innerHTML = "Nouvelle partie ! Cliquez sur un bouton pour jouer.";
});
