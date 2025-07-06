// Generate computer choice
function getComputerChoice(){
    // Get floor value from the float
    // Value is between 0 and 2
    const randomVal = Math.floor(Math.random()*3);
    
    if (randomVal == 0) {
        return "rock";
    }else if (randomVal == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

// Get user input
function getUserInput(){
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
};

// // Play
// function playRound(userChoice, computerChoice){

// }

const userChoice = getUserInput();
const computerChoice = getComputerChoice();
console.log(userChoice);
let userScore, computerScore = 0;

// playRound(userChoice, computerChoice);