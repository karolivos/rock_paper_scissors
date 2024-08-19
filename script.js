const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
function computerChoice () {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice].toLocaleLowerCase();
}


function humanChoice () {
    let choice = prompt("Please select Rock, Paper or Scissors!", "Rock");
    let userChoice = choice.toLowerCase();
        if (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" )) {
            console.log("Please select Rock, Paper or Scissors. Your selection was invalid!")
        } else {
            return userChoice;
        }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        console.log(`You have won! Rock beats Scissors. Your score is ${humanScore}`)
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log(`You have won! Paper beats Rock. Your score is ${humanScore}`)
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1;
        console.log(`Computer have won! Rock beats Scissors. Your score is ${computerScore}`)
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1;
        console.log(`Computer have won! Paper beats Rock. Your score is ${computerScore}`)
    }
}

function playGame() {
    playRound(humanChoice(),computerChoice());
    playRound(humanChoice(),computerChoice());
    playRound(humanChoice(),computerChoice());
    playRound(humanChoice(),computerChoice());
    playRound(humanChoice(),computerChoice());

    if (humanScore === computerScore) {
        console.log(`It's a tie!!`)

      
    } else if (humanScore > computerScore) {
        console.log(`Human has won with ${humanScore} score!`)
    } else {
        console.log(`Computer has won with ${computerScore} score!`)

    }
}

playGame()