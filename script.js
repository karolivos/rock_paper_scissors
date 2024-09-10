// Pirma reik gauti getComputerChoice;
//Antra reikia padaryti logika kaip zaidziamas zaidimas;
//Trecia reikia suzaisti round su zaidejo pasirinkimu

const choices = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;
let playedRounds = 0;

const res = document.querySelector(".results");
const reset = document.querySelector("#reset");

function resset() {
    res.innerHTML = "";
    humanScore = 0;
    computerScore = 0;
    playedRounds = 0;
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice].toLowerCase();
}

function evaluateRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "draw";
    } else if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "scissors" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "rock") {
            return "player"
        } else {
            return "computer"
        }
    }

function endGame() {
    console.log("Game over!");

    if (humanScore > computerScore) {
        res.innerHTML += `You won! Final score: ${humanScore} - ${computerScore}`;
    } else if (computerScore > humanScore) {
        res.innerHTML += `You lost! Final score: ${computerScore} - ${humanScore}`;
    } else {
        res.innerHTML += `It's a draw! Final score: ${humanScore} - ${computerScore}`;
    }
}


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = evaluateRound(playerChoice,computerChoice);

    if (result == "draw") {
        res.innerHTML += `It's a tie! Both chosen ${computerChoice}<br>`
    } else if ( result == "player") {
        res.innerHTML += `Player wins by choosing ${playerChoice}<br>`
        humanScore++;
    } else {
        res.innerHTML += `Computer wins by choosing ${computerChoice}<br>`;
        computerScore++;
    }
    playedRounds++;

    if(playedRounds === 5) {
        endGame()
    }
}


function playGame() {

        const btn = document.querySelectorAll("button");

        btn.forEach((button) => {
            button.addEventListener("click", () => {
                if (playedRounds < 5) {
                let playerChoice = button.id.toLowerCase();
                playRound(playerChoice)
            }})
                  })
    
}

playGame();

reset.addEventListener("click", resset);