let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  const secretTarget = Math.floor(Math.random() * 10);
  return secretTarget;
};

function compareGuesses(currentHumanGuess,computerGuess,secretTarget){
  let human = Math.abs(currentHumanGuess-secretTarget);
  let computer = Math.abs(computerGuess-secretTarget);
  if (currentHumanGuess === computerGuess) 
    return true;
  else if (human <= computer)
    return true;
  else 
    return false;
};

function updateScore(win) {
  //const win = compareGuesses(currentHumanGuess,computerGuess,secretTarget);
  if (win === 'human')
    humanScore += 1;
  else 
    computerScore += 1;
};
function advanceRound() {
  currentRoundNumber += 1;
  generateTarget();
}

