//QUERY SELECTORS
var winsPlayer1 = document.querySelector('.wins-human');
var winsPlayer2 = document.querySelector('.wins-computer');
var gameStatus = document.querySelector('.game-status');
var changeGameBtn = document.querySelector('.change-game');
var homeViewGameType = document.querySelector('.game-type');
var classicBoard = document.querySelector('.classic-board');
var difficultBoard = document.querySelector('.difficult-board')
var bothButtonsHomeView = document.querySelector('.buttons');
var selectedIcons = document.querySelector('.selected-icons')
var choiceHuman = document.getElementById('choiceHuman');
var choiceComputer = document.getElementById('choiceComputer');
var classicBtn = document.querySelector('.classic-btn');
var difficultBtn = document.querySelector('.difficult-btn');
var iconsView = document.querySelector('.icons');
var allIcons = document.querySelectorAll('.icon');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var lizard = document.querySelector('.lizard');
var alien = document.querySelector('.alien');
var trashTalkSection = document.querySelector('.trash-talk')

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


[rock, paper, scissors, alien, lizard].forEach((iconChoice)=>{
  iconChoice.addEventListener('click', (event)=> {
console.log('for each')
if(currentGame.gameType === 'classic'){
takeTurnClassic(event.target.id, classicIcons);
} else if (currentGame.gameType === 'difficult') {
  takeTurnDifficult(event.target.id, difficultIcons)
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

function showHomePage(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(changeGameBtn);
    hide(iconsView);
    show(classicBtn);
    show(difficultBtn);
  } 
}

function showClassicGameBoard(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView)
    show(classicBoard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !'
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
    gameStatus.innerText = 'Choose your fighter !'
  }
}

function backtoHomePage(){
  show(classicBtn);
  show(difficultBtn);
  hide(changeGameBtn);
  hide(iconsView);
  hide(classicBoard);
  hide(difficultBoard)
}

function displayPlayerChoices(){
  changeGameBtn.disabled = true;
  for (var i = 0; i < allIcons.length; i++) {
    hide(allIcons[i]);
  }
  console.log(currentGame.player1.choice)
  console.log(currentGame.player2.choice)
  selectedIcons.innerHTML = `
  <img src="assets/${currentGame.player1.choice}.png" alt="drawing of rocks"/>
  <img src="assets/${currentGame.player2.choice}.png"/>
  `;
}

function resetGame(){
  changeGameBtn.disabled = false 
  gameStatus.innerText = 'Choose your fighter !'
  selectedIcons.innerHTML = ''
  show(rock);
  show(paper)
  show(scissors)
  show(lizard)
  show(alien)
}

function displayWins(){
  winsPlayer1.innerText = `${currentGame.player1.wins}`
  winsPlayer2.innerText = `${currentGame.player2.wins}`
  if(currentGame.player1.winner && !currentGame.player2.winner){
    gameStatus.innerText = 'Player 1 Wins 🫠'
  } else if(!currentGame.player1.winner && !currentGame.player2.winner){
    gameStatus.innerText = 'It\s a draw !'
  } else if (currentGame.player2.winner && !currentGame.player1.winner) {
    gameStatus.innerText = 'Player 2 Wins 💻'
  }
}