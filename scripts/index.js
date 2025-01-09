// Logic for Rock-Paper-Scissors game goes here

/*
    All logic will be written in playGame function.
    We will declare a round number variable which will increment every time the round completes.
    First, We will print the round number. Then, the player will be asked to pick Rock/Paper/Scissors where they can give the number regarding what they want to pick. We will store it as 0/1/2
    For computer choice, We run Math.random, multiply it by 3, and then apply Math.floor to get its output.

    0 is for Rock, 1 is for Paper, 2 is for Scissors

    Calculate humanPick - computerPick. If result is 1 or -2, then human wins. If result is -1 or 2, then computer wins. If result is 0, its a draw.
    Run a for loop to go till 5 rounds and then print final results.
*/

// playGame();

// function playGame() {
//     alert("Welcome to the Rock Paper Scissors game.");

//     let humanScore = 0;
//     let computerScore = 0;
//     let humanChoice = 0;
//     let computerChoice = 0;
//     let i = 0;
//     while (i < 5) {
//         alert(`Lets start Round No. ${i+1}`);
//         humanChoice = getHumanChoice();

//         if (humanChoice == null) {
//             console.log("Exited the game as no choice provided.");
//             return;
//         }

//         computerChoice = getComputerChoice();

//         try {
//             alert(`Human picked: ${convertChoice(humanChoice)}\nComputer picked: ${convertChoice(computerChoice)}`);
//         } catch(err) {
//             console.error(err.message);
//             return;
//         }

//         result = humanChoice - computerChoice;

//         if (result == 1 || result == -2) {
//             ++humanScore;
//             alert(`Congratulations, You won this round.\nScores are:\nYou: ${humanScore}\nComputer: ${computerScore}`);
//         }
//         else if (result == -1 || result == 2) {
//             ++computerScore;
//             alert(`Oh man, Computer won this round.\nBetter luck next time!\nScores are:\nYou: ${humanScore}\nComputer: ${computerScore}`);
//         }
//         else {
//             alert(`Its a draw.\nScores are:\nYou: ${humanScore}\nComputer: ${computerScore}`);
//         }

//         i++;
//     }

//     alert("All rounds are now completed!");

//     if (humanScore > computerScore) {
//         alert(`Congratulations, Seems like you have good luck. You won this battle. Final scores were:\nYou: ${humanScore}\nComputer: ${computerScore}`);
//     }
//     else if (computerScore > humanScore) {
//         alert(`It seems the god of fortune did not favor you this time. You lost this battle. Final scores were:\nYou: ${humanScore}\nComputer: ${computerScore}`);
//     }
//     else {
//         alert(`Well Played, This battle of lucks was even. Maybe you will get an upper hand in the next one. Final scores were:\nYou: ${humanScore}\nComputer: ${computerScore}\n\n\n Type "playGame()" in console and press enter to play again.`);
//     }
// }

// function getHumanChoice() {
//     let choice = 0;

//     while (true) {
//         choice = prompt("Input 1 for Rock.\nInput 2 for Paper.\nInput 3 for Scissors.\nPress Cancel to exit immediately.");
//         console.log(choice);

//         if (choice == null) {
//             return choice;
//         }

//         choice = parseInt(choice);
//         if (choice !== 1 && choice !== 2 && choice !== 3) {
//             alert("Please only provide the numbers 1 or 2 or 3 as your input as stated. Lets try again.");
//             continue;
//         }

//         break;
//     }

//     return choice;
// }

// function getComputerChoice() {
//     return Math.ceil(Math.random() * 3);
// }

// function convertChoice(choice) {
//     if (choice == 1) {
//         return "ROCK"
//     }

//     if (choice == 2) {
//         return "Paper"
//     }

//     if (choice == 3) {
//         return "Scissors"
//     }

//     throw new Error("Invalid Choice. Cannot be converted. Closing game.");
// }