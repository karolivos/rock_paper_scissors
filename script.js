
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let x = Math.floor(Math.random() *3) +1;
if (x === 1) {
    return "rock"
} else if (x === 2) {
    return "paper"
} else {
    return "scissors"
}
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Between Rock, Paper or Scissors!").toLowerCase();
        if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
            alert("You've entered the wrong value");
        } else {
            return humanChoice;
        }
    

}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!")
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer Wins! Rock beats Scissors")
            computerScore++;
        } else {
            console.log("Human won!")
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("Computer won! Scissors Beat Paper!")
            computerScore++;
        } else {
            console.log("Human won!")
            humanScore++;
        }
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer Won!")
            computerScore++;
        } else {
            console.log("Human Won!")
            humanScore++;
        }
    }
  console.log(`Human score is ${humanScore}`);
  console.log(`Computer score is ${computerScore}`);
}
function playGame() {
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection)
}

playGame();
playGame();

playGame();

playGame();

playGame();



