let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (human,computer,target) =>{
    const humanGuess = Math.abs(human - target) ;
    const computerGuess = Math.abs(computer - target) ;
    if (humanGuess < computerGuess || humanGuess === computerGuess){
        return true;
    } else { return false; }
};

const updateScore = winner =>{
    if (winner === 'human'){
        humanScore ++;
    } else {
        computerScore ++;
    }
};

const advanceRound = () =>{
    currentRoundNumber ++;
};