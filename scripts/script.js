const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice()
{
   
    const randomIndex = Math.floor(Math.random() * choices.length);
    let compChoice = randomIndex === 0 ? choices[0] : (randomIndex === 1 ? choices[1] : choices[2]);
    return compChoice;
}

function getHumanChoice()
{
    let humanChoice = '';
    let userInput = prompt("Enter Rock, Paper, or Scissors:");
    userInput = userInput.toLowerCase();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    switch (userInput)
    {
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







function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
        function playRound(humanChoice, compChoice)
        {
        
            if (compChoice === humanChoice)
            {
                console.log("Its a tie! ", compChoice + " vs " + humanChoice);
            }
            else if (humanChoice === "Rock" && compChoice === "Paper")
            {
                console.log("You lose! Paper beats Rock!");
                computerScore +=1;
            }
            else if (humanChoice === "Paper" && compChoice === "Scissors")
            {
                console.log("You lose! Scissors beats Paper!");
                computerScore +=1;
            }
            else if (humanChoice === "Scissors" && compChoice === "Rock")
            {
                console.log("You lose! Rock beats Scissor!");
                computerScore +=1;
            }
            else if (humanChoice === "Paper" && compChoice === "Rock")
            {
                console.log("You win! Paper beats Rock!");
                humanScore +=1;
            }
            else if (humanChoice === "Scissors" && compChoice === "Paper")
            {
                console.log("You win! Scissors beats Paper!");
                humanScore +=1;
            }
            else if (humanChoice === "Rock" && compChoice === "Scissors")
            {
                console.log("You win! Rock beats Scissor!");
                humanScore +=1;
            }   
            
        }

        for (let i = 0; i < 5; i++)
        {
            const humanChoice = getHumanChoice();
            const compChoice = getComputerChoice();
            playRound(humanChoice, compChoice);
        }

        if ((computerScore > 0 && humanScore > 0) && (computerScore === humanScore))
        {
            console.log("The game is a tie!");
        }
        else if (computerScore > humanScore)
        {
            console.log("The machine wins.");
        }
        else
        {
            console.log("Humanity wins.");
        }

}

playGame();

