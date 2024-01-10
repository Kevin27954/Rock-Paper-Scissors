
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function getWinner(btn) {
    const computerChoice = getComputerChoice();
    const playerChoice = btn.innerText.toLowerCase();

    console.log(playerChoice + " : " + computerChoice);

    if(playerChoice === computerChoice) {
        document.getElementById('result').innerText = 'Draw';
    } else if(playerChoice === 'rock' && computerChoice === 'scissor') {
        document.getElementById('result').innerText = 'Win';
        playerScore++;
    } else if(playerChoice === 'scissor' && computerChoice === 'paper') {
        document.getElementById('result').innerText = 'Win';
        playerScore++;
    } else if(playerChoice === 'paper' && computerChoice === 'rock') {
        document.getElementById('result').innerText = 'Win';
        playerScore++;
    } else {
        document.getElementById('result').innerText = 'Lose';
        computerScore++;
    }

    updateGameInfo();

    if(playerScore == 5) {
        endGame('You Win!')
    } else if(computerScore == 5) {
        endGame('You Lose!')
    }
}

function updateGameInfo() {
    let playerScoreElement = document.getElementById('player-score');
    let computerScoreElement = document.getElementById('computer-score');

    playerScoreElement.innerText = playerScore;
    computerScoreElement.innerText = computerScore;
}

function endGame(message) {
    gameEndMessage.innerText = message;

    modal.className = modal.className.replace('not-active','active');
    overlay.className = overlay.className.replace('not-active','active');
}

function resetGame() {
    gameEndMessage.innerText = "";

    playerScore = 0;
    computerScore = 0;

    modal.className = modal.className.replace('active', 'not-active');
    overlay.className = overlay.className.replace('active', 'not-active');
    updateGameInfo();
}

const rockBtn = document.getElementById('rock');
const scissorBtn = document.getElementById('scissor');
const paperBtn = document.getElementById('paper');
const playAgainBtn = document.getElementById('play-again');

const gameEndMessage = document.getElementById('game-end-message');

const modal = document.getElementsByClassName('modal')[0];
const overlay = document.getElementsByClassName('overlay')[0];

rockBtn.addEventListener('click', () => getWinner(rockBtn));
scissorBtn.addEventListener('click', () => getWinner(scissorBtn));
paperBtn.addEventListener('click', () => getWinner(paperBtn));
playAgainBtn.addEventListener('click', () => resetGame())