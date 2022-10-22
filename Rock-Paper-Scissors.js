document.addEventListener("DOMContentLoaded", () => {
    // Create an options array and an outcomes array.
    const options = ["rock", "paper", "scissors"];
    const outcomes = ["paper", "rock", "scissors"];

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
    
    // Resets buttons color.
    function resetButtons() {
        options.forEach((option) => {
            document.getElementById(`player-${option}`).style.borderColor = "black";
            document.getElementById(`computer-${option}`).style.borderColor = "black";
            return;
        });

        return;
    }

    // Create 2 variables to keep track of player's score and computer's score.
    let playerScore = 0;
    let computerScore = 0;

    // State of the game, true means it's ongoing and false means it's finished.
    let game = true;

    // Reset the game when button is pressed.
    document.querySelector("#button-reset").addEventListener("click", () => {
        resetButtons();

        // Reset score.
        playerScore = 0;
        computerScore = 0;

        // Update score.
        document.querySelector(".playerScore").textContent = playerScore;
        document.querySelector(".computerScore").textContent = computerScore;

        document.querySelector(".result").textContent = "";

        // Continue game.
        game = true;
        
        return;
    });

    // Create event listeners for rock-paper-scissors buttons. 
    options.forEach(option => {
        document.querySelector(`#player-${option}`).addEventListener("click", () => {
            if (game) {
                let computerSelection = getComputerChoice();
                let playerSelection = option;
                
                // Play one round of rock-paper-scissors and store the result of that round in "result".
                const result = playRound(playerSelection, computerSelection);

                // Reset color of buttons.
                resetButtons();

                // Change the border-color of the button that corresponds to playerSelection and computerSelection.
                document.getElementById(`player-${playerSelection}`).style.borderColor = "blue";
                document.getElementById(`computer-${computerSelection}`).style.borderColor = "red";

                // Upper case the first letter of playerSelection and computerSelection.
                computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
                playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

                switch (result) {
                    // Update player score.
                    case 1:
                        document.querySelector(".result").textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        break;
                    
                    // Update computer score.
                    case 2:
                        document.querySelector(".result").textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                        computerScore++;
                        break;
                    
                    default:
                        document.querySelector(".result").textContent = "Tie!";
                        break;
                }

                // Update score.
                document.querySelector(".playerScore").textContent = playerScore;
                document.querySelector(".computerScore").textContent = computerScore;
        
                if (playerScore === 5 || computerScore === 5) {
                    // Player won the game.
                    if (playerScore > computerScore) {
                        document.querySelector(".result").textContent = "You Won The Game!";
                        // Stopping game
                        game = false;
                    }
                    // Computer won the game.
                    else {
                        document.querySelector(".result").textContent = "You Lost The Game!";
                        // Stopping game
                        game = false;
                    }
                }
            }

            return;
        });  
    });
});
