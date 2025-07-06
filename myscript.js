// Generate computer choice
function getComputerChoice(){
    // Get floor value from the float
    // Value is between 0 and 2
    const randomVal = Math.floor(Math.random()*3);
    
    // Each numerical value corresponds to one of the three choices
    if (randomVal == 0) {
        return "rock";
    }else if (randomVal == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

// Get user choice
function getUserInput(){
    let choice = prompt("Rock, Paper or Scissors?");

    // For case insensitivity
    return choice.toLowerCase();
};

// Play one round
function playRound(userChoice, computerChoice){
    if ((userChoice == 'rock' && computerChoice == 'scissors')
        || (userChoice == 'paper' && computerChoice == 'rock')
        || (userChoice == 'scissors' && computerChoice == 'paper')){
            console.log('User won this round.');
            // Increase user score by 1
            userScore++;
    } else if ((computerChoice == 'rock' && userChoice == 'scissors')
        || (computerChoice == 'paper' && userChoice == 'rock')
        || (computerChoice == 'scissors' && userChoice == 'paper')){
            console.log('Computer won this round.');
            // Increase computer score by 1
            computerScore++;
    } else if (userChoice == computerChoice){
            console.log('This round was a draw.');
    } else {
        console.log("Invalid Input: Input Rock, Paper or Scissors");
    }
};

// Play the game for the given number of rounds
function playGame(rounds){
    for (let i=0; i<rounds; i++){
        // Get user and computer choice for this round
        const userChoice = getUserInput();
        const computerChoice = getComputerChoice();

        // Pass the choices to the round playing function
        playRound(userChoice, computerChoice);
    }
};

function getTotalRounds(){
    let rounds = parseInt(prompt('How many rounds do you want to play?'));
    return rounds;
};

// Initial scores of both players set to 0
let userScore = 0 , computerScore = 0;

// Get total rounds from the User
const rounds = getTotalRounds();

// Pass the given number of rounds to the game playing function
playGame(rounds);

console.log("Results: User:" + userScore + " Computer:" + computerScore);
if (userScore > computerScore){
    console.log('The winner is User');
} else if (userScore < computerScore){
    console.log('The winner is Computer');
} else {
    console.log('The game is a draw');
}

