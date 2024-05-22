const choices = ["Rock", "Paper", "Scissors"];
const displayResults = document.createElement("div");
const compScore = document.createElement("h2");
const humanityScore = document.createElement("h2");
const displayWinner = document.createElement("p");
const playAgainButton = document.createElement("button");
const displayCompChoice = document.createElement("h2");
const displayHumanChoice = document.createElement("h2");


playAgainButton.textContent = "Play Again";
playAgainButton.addEventListener("click", () => {
    resetGame();
});

humanityScore.style.padding = "4px";
compScore.style.padding = "4px";
humanityScore.style.backgroundColor = "green";
compScore.style.backgroundColor = "black";

displayResults.style.backgroundColor = "red";
displayResults.style.color = "white";
displayResults.style.width = "157px";
displayResults.style.height = "45px";
displayResults.style.textAlign = "center";
displayResults.style.padding = "4px";
displayResults.style.margin = "0 auto";
displayResults.style.height = "250px";
document.body.appendChild(displayResults);

displayWinner.style.textAlign = "center";
displayWinner.style.margin = "3em";
displayWinner.style.fontSize = "20px";
displayWinner.style.padding = "8px";

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    let compChoice = choices[randomIndex];
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = '';
    let userInput = prompt("Enter Rock, Paper, or Scissors:");
    userInput = userInput.toLowerCase();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    switch (userInput) {
        case ("Rock"):
            humanChoice = "Rock";
            break;
        case ("Paper"):
            humanChoice = "Paper";
            break;
        case ("Scissors"):
            humanChoice = "Scissors";
            break;
        default:
            alert("Invalid Choice!");
    }
    return humanChoice;
}

function playRound(humanChoice, compChoice) {
    if (!gameOver) {
        if (compChoice === humanChoice) {
            displayResults.textContent = "Its a tie! " + compChoice + " vs " + humanChoice;
        } else if (humanChoice === "Rock" && compChoice === "Paper") {
            displayResults.textContent = "You lose! Paper beats Rock!";
            computerScore += 1;
        } else if (humanChoice === "Paper" && compChoice === "Scissors") {
            displayResults.textContent = "You lose! Scissors beats Paper!";
            computerScore += 1;
        } else if (humanChoice === "Scissors" && compChoice === "Rock") {
            displayResults.textContent = "You lose! Rock beats Scissor!";
            computerScore += 1;
        } else if (humanChoice === "Paper" && compChoice === "Rock") {
            displayResults.textContent = "You win! Paper beats Rock!";
            humanScore += 1;
        } else if (humanChoice === "Scissors" && compChoice === "Paper") {
            displayResults.textContent = "You win! Scissors beats Paper!";
            humanScore += 1;
        } else if (humanChoice === "Rock" && compChoice === "Scissors") {
            displayResults.textContent = "You win! Rock beats Scissor!";
            humanScore += 1;
        }

        compScore.textContent = `Computer Score ${computerScore}`;
        humanityScore.textContent = `Your Score ${humanScore}`;
        displayResults.appendChild(compScore);
        displayResults.appendChild(humanityScore);
        document.body.appendChild(displayWinner);
        displayCompChoice.textContent = `Computer Pick: ${compChoice}`;
        displayHumanChoice.textContent = `Your Pick: ${humanChoice}`;
        document.body.appendChild(displayCompChoice);
        document.body.appendChild(displayHumanChoice);

        if (computerScore > 4) {
            displayWinner.textContent = "The machine wins.";
            document.body.appendChild(playAgainButton);
            document.body.removeChild(displayCompChoice);
            document.body.removeChild(displayHumanChoice);
            gameOver = true;
        } else if (humanScore > 4) {
            displayWinner.textContent = "Humanity drags on for another day.";
            document.body.appendChild(playAgainButton);
            document.body.removeChild(displayCompChoice);
            document.body.removeChild(displayHumanChoice);
            gameOver = true;
        }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1);
        const compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
    });
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayWinner.textContent = "";
    displayResults.textContent = "";
    compScore.textContent = `Computer Score: ${computerScore}`;
    humanityScore.textContent = `Your Score: ${humanScore}`;
    gameOver = false;
}
