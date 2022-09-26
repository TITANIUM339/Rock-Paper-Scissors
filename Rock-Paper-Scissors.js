// Create an options array and an outcomes array.
let options = ["rock", "paper", "scissors"];
let outcomes = ["paper", "rock", "scissors"]

// Function getComputerChoice generates a random computer move.
function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}


// Function playRound plays one round of rock-paper-scissors and takes as input playerSelection and computerSelection.
function playRound(playerSelection, computerSelection) {
    // Lower casing playerSelection.
    playerSelection = playerSelection.toLowerCase();

    // Get index of playerSelection and computerSelection in options array.
    let playerIndex = options.indexOf(playerSelection);
    let computerIndex = options.indexOf(computerSelection);

    // Return 0 (Tie) if both indexes are the same.
    if (playerIndex === computerIndex) return 0;

    // Add both indexes and subtract them by 1 to get the winner index in outcomes array.
    let index = computerIndex + playerIndex - 1;

    // Return 1 (Player wins) if winner outcome matches playerSelection.
    if (outcomes[index] === playerSelection) {
        return 1;
    }
    // Return 2 (Computer wins).
    else {
        return 2;
    }
}



// Function game plays 5 rounds of rock-paper-scissors.
function game() {
    // Create 2 variables to keep track of player's score and computer's score.
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Create 2 variables for player's selection and computer's selection.
        let playerSelection = prompt("Make a play! (Rock, Paper, Scissors):").toLowerCase();
        let computerSelection = getComputerChoice();

        // Create variable result and store in it the outcome of one-round.
        let result = playRound(playerSelection, computerSelection);

        // Upper case the first letter of playerSelection and computerSelection.
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        // Update playerScore. 
        if (result === 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        } 
        // Update computerScore.
        else if (result === 2) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        }
        else {
            console.log("Tie!")
        }
    }

    // Player won the game.
    if (playerScore > computerScore) {
        console.log("You Won The Game!");
    }
    // Computer won the game.
    else if (playerScore < computerScore) {
        console.log("You Lost The Game!");
    }
    else {
        console.log("The Game Tied!");
    }
}

// Run the game.
game();