// Initial scores of both players set to 0
let userScore = 0 , computerScore = 0;

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

// Play one round
function playRound(userChoice, computerChoice){
    if (userScore>=5){
        const container = document.querySelector('#container');
        const div = document.createElement('div');
        const header = document.createElement('h3');
        header.textContent = 'User Won!!!'; 
        div.textContent = 'Results: User:' + userScore + ' Computer:' + computerScore;

        div.appendChild(header);
        container.appendChild(div);
        
    } else if (computerScore>=5){
        const container = document.querySelector('#container');

        const div = document.createElement('div');
        const header = document.createElement('h3');
        header.textContent = 'Computer Won!!!'; 
        div.textContent = 'Results: User:' + userScore + ' Computer:' + computerScore;

        div.appendChild(header);
        container.appendChild(div);
    }
    else{
        if ((userChoice == 'rock' && computerChoice == 'scissors')
            || (userChoice == 'paper' && computerChoice == 'rock')
            || (userChoice == 'scissors' && computerChoice == 'paper')){
                const container = document.querySelector('#container');
                if (container.hasChildNodes){
                    container.innerHTML = '';
                }
                const div = document.createElement('div');
                div.textContent = 'User won this round';
                container.appendChild(div); 
                // Increase user score by 1
                userScore++;
        } else if ((computerChoice == 'rock' && userChoice == 'scissors')
            || (computerChoice == 'paper' && userChoice == 'rock')
            || (computerChoice == 'scissors' && userChoice == 'paper')){
                const container = document.querySelector('#container');
                if (container.hasChildNodes){
                    container.innerHTML = '';
                }
                const div = document.createElement('div');
                div.textContent = 'Computer won this round';
                container.appendChild(div); 
                // Increase computer score by 1
                computerScore++;
        } else if (userChoice == computerChoice){
                const container = document.querySelector('#container');
                if (container.hasChildNodes){
                    container.innerHTML = '';
                }
                const div = document.createElement('div');
                div.textContent = 'This round was a draw.';
                container.appendChild(div); 
        } else {
                const container = document.querySelector('#container');
                if (container.hasChildNodes){
                    container.innerHTML = '';
                }
                const div = document.createElement('div');
                div.textContent = 'Invalid Input: Input Rock, Paper or Scissors';
                container.appendChild(div);
        }
    }
};

// Play the game for the given number of rounds
function playGame(event){
    // Get user and computer choice for this round
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();

    // Pass the choices to the round playing function
    playRound(userChoice, computerChoice);
};

function resetScore(){
    userScore = 0;
    computerScore = 0;
    console.log("Results: User:" + userScore + " Computer:" + computerScore);
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach(btn => {
    btn.addEventListener('click', playGame);
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',resetScore);


