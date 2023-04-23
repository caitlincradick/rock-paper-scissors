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

//GLOBAL VARIABLES
var classicIcons = ['rock', 'paper', 'scissors'];
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoardChoices = [];
var currentGame;


//JS DATA MODEL
function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0 
  }
  return player
}

function createGame(gameBoardChoices){
var player1 = createPlayer('Human', '🫠')
var player2 = createPlayer('Computer', '💻')
  var game = {
    player1:player1, 
    player2:player2, 
    // gameType:gameType, 
    gameBoardChoices: gameBoardChoices  
  }
  currentGame = game
  return currentGame
}  

function getRandomIndex(iconArrays){
  return Math.floor(Math.random() * iconArrays.length);
}

// function getAllIcons(event){
//   for(var i = 0; i < allIcons.length; i++) {
//     allIcons[i] = event.target.id 
//     allIcons[i].addEventListener('click', function(event){
//       takeTurnClassic(event.target.id, classicIcons);
//       takeTurnDifficult(event.target.id, difficultIcons)
//     })
//   }
//   return allIcons[i]
// }

function takeTurnClassic(humanChoice, classicIcons) {
gameBoardChoices = []
  if(currentGame.player1.name === 'Human'){
    currentGame.player1.choice = humanChoice 
    gameBoardChoices.push(currentGame.player1.choice)
  } 
  if (currentGame.player2.name === 'Computer') {
    currentGame.player2.choice= classicIcons[getRandomIndex(classicIcons)]
    gameBoardChoices.push(currentGame.player2.choice)  
  }
console.log(gameBoardChoices)
  displayPlayerChoices()
  determineWins()
  setTimeout(resetGame, 3000)
  }

function takeTurnDifficult(humanChoice, difficultIcons) {
gameBoardChoices = []
  if(currentGame.player1.name === 'Human'){
    currentGame.player1.choice = humanChoice 
    gameBoardChoices.push(currentGame.player1.choice)
  } 
  if (currentGame.player2.name === 'Computer') {
    currentGame.player2.choice = difficultIcons[getRandomIndex(difficultIcons)]
    gameBoardChoices.push(currentGame.player2.choice)  
  }
  displayPlayerChoices()
  determineWins()
  setTimeout(resetGame, 3000)
  
}

function determineRules(){
  if(currentGame.gameType === 'classic'){
    currentGame.rules = classicRules
  } else if (currentGame.gameType === 'difficult') {
    currentGame.rules = difficultRules
  }
  return currentGame.rules
}

function determineWins(){
  determineRules()
  if(currentGame.rules[`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
    console.log('player1 wins')
    currentGame.player1.wins += 1
    gameStatus.innerText = 'Player 1 Wins 🫠'
    winsPlayer1.innerText = `${currentGame.player1.wins}`
  } else if (gameBoardChoices[0] === gameBoardChoices[1]) {
    console.log('it is a draw')
    gameStatus.innerText = 'It\s a draw !'
  } else if(!currentGame.rules[`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
    console.log('player2 wins')
    currentGame.player2.wins += 1
    gameStatus.innerText = 'Player 2 Wins 💻'
    winsPlayer2.innerText = `${currentGame.player2.wins}`
  }
}

//JS DOM
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
}

function hideIcons(){
  hide(rock);
  hide(paper);
  hide(scissors);
  hide(alien);
  hide(lizard);
}

function displayPlayerChoices(){
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
  gameStatus.innerText = 'Choose your fighter !'
  selectedIcons.innerHTML = ''
  show(rock);
  show(paper)
  show(scissors)
// hide(lizard)
//  hide(alien)
  console.log('classic reset')
 if(currentGame.gameType === 'difficult'){
    console.log('difficult resest')
    show(rock);
    show(paper)
    show(scissors)
  show(lizard)
  show(alien)
}
}

