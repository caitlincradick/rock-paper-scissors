//QUERY SELECTORS
var winsPlayer1 = document.querySelector('.wins-human');
var winsPlayer2 = document.querySelector('.wins-computer');
var gameStatus = document.querySelector('.game-status');
var changeGameBtn = document.querySelector('.change-game');
var homeViewGameType = document.querySelector('.game-type');
var classicBoard = document.querySelector('.classic-board');
var difficultBoard = document.querySelector('.difficult-board')
var selectedIcons = document.querySelector('.selected-icons')
var classicBtn = document.querySelector('.classic-btn');
var difficultBtn = document.querySelector('.difficult-btn');
var iconsView = document.querySelector('.icons');
var allIcons = document.querySelectorAll('.icon');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var lizard = document.querySelector('#lizard');
var alien = document.querySelector('#alien');

//EVENT LISTENERS 
window.addEventListener('load', createGame(gameBoardChoices));

classicBtn.addEventListener('click', function(event) {
  currentGame.gameType = 'classic'
  showClassicGameBoard();
});

difficultBtn.addEventListener('click', function(event) {
  currentGame.gameType = 'difficult'
  showDifficultGameBoard();
});

[rock, paper, scissors, alien, lizard].forEach((iconChoice) => {
iconChoice.addEventListener('click', (event) => {
if(currentGame.gameType === 'classic') {
takeTurnClassic(event.target.id, classicIcons);
} else if (currentGame.gameType === 'difficult') {
  takeTurnDifficult(event.target.id, difficultIcons);
}
  });
});

changeGameBtn.addEventListener('click', function () {
  backtoHomePage();
})

//DOM FUNCTIONS
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showHomePage() {
  if (!homeViewGameType.classList.contains('hidden')) {
    hide(changeGameBtn);
    hide(iconsView);
    show(classicBtn);
    show(difficultBtn);
  } 
}

function showClassicGameBoard(){
  if (!homeViewGameType.classList.contains('hidden')) {
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView)
    show(classicBoard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !';
  }
}

function showDifficultGameBoard(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView);
    show(classicBoard);
    show(difficultBoard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !';
  }
};

function backtoHomePage() {
  show(classicBtn);
  show(difficultBtn);
  hide(changeGameBtn);
  hide(iconsView);
  hide(classicBoard);
  hide(difficultBoard);
};

function displayPlayerChoices() {
  changeGameBtn.disabled = true;
  for (var i = 0; i < allIcons.length; i++) {
    hide(allIcons[i]);
  }
  selectedIcons.innerHTML = `
  <img src="assets/${currentGame.player1.choice}.png" alt="${currentGame.player1.choice}"/>
  <img src="assets/${currentGame.player2.choice}.png" alt=${currentGame.player2.choice}/>
  `
};

function resetGame() {
  changeGameBtn.disabled = false; 
  gameStatus.innerText = 'Choose your fighter !';
  selectedIcons.innerHTML = ''
  show(rock);
  show(paper);
  show(scissors);
  show(lizard);
  show(alien);
};

function displayPlayerData() {
  winsPlayer1.innerText = `${currentGame.player1.wins}`
  winsPlayer2.innerText = `${currentGame.player2.wins}`
  if (currentGame.player1.winner){
    gameStatus.innerText = 'Human 🫠 beats 👾';
  } else if (currentGame.player2.winner) {
    gameStatus.innerText = 'Computer 👾 beats 🫠 ';
  } else {
    gameStatus.innerText = 'It\s a draw, y\'all !';
  }
};