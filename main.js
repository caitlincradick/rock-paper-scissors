//QUERY SELECTORS
var winsPlayer1 = document.querySelector('.wins-human');
var winsPlayer2 = document.querySelector('.wins-computer');
var gameStatus = document.querySelector('.game-status');
var changeGameBtn = document.querySelector('.change-game');
var homeViewGameType = document.querySelector('.game-type');
var bothButtonsHomeView = document.querySelector('.buttons')
//needs to be querySelectorAll
var classicBtn = document.querySelector('.classic-btn');
var difficultBtn = document.querySelector('.difficult-btn')
var iconsView = document.querySelector('.icons');
var rock = document.querySelector('#rock');
var scissors = document.querySelector('#scissors');
var paper = document.querySelector('#paper');
var alien = document.querySelector('#alien');
var lizard = document.querySelector('#lizard');

//EVENT LISTENERS 
window.addEventListener('load', createGame(gameBoardChoices));

classicBtn.addEventListener('click', function() {
  showClassicGameBoard()
});

difficultBtn.addEventListener('click', function() {
  showDifficultGameBoard()
});

changeGameBtn.addEventListener('click',showHomePage() )

//GLOBAL VARIABLES
var classicIcons = ['rock', 'paper', 'scissors']
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoardChoices = [];
var currentGame;
var humanChoice;
var gameType = 'classic';


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
var gameType= [{name:'classic'},    
              {name:'difficult'}];
  var game = {
    player1:player1, 
    player2:player2, 
    gameType:gameType, 
    gameBoardChoices: gameBoardChoices
  }
  currentGame = game
  return currentGame
}  
createGame(gameBoardChoices)

function getRandomIndex(iconArrays){
  return Math.floor(Math.random() * iconArrays.length);
}

function takeTurnClassic(humanChoice, classicIcons) {
gameBoardChoices = []
console.log(gameBoardChoices)
  var players = [createPlayer('Human', '🫠'), createPlayer('Computer', '💻')]
  if(players[0].name === 'Human'){
    players[0].choice = humanChoice 
    gameBoardChoices.push(players[0].choice)
  } 
  if (players[1].name === 'Computer') {
    players[1].choice = classicIcons[getRandomIndex(classicIcons)]
    gameBoardChoices.push(players[1].choice)  
  }
  determineClassicWins(classicRules)
  return players
}

function takeTurnDifficult(humanChoice, difficultIcons) {
  var players = [createPlayer('Human', '🫠'), createPlayer('Computer', '💻')]
  if(players[0].name === 'Human'){
    players[0].choice = humanChoice 
    gameBoardChoices.push(players[0].choice)
  } 
  if (players[1].name === 'Computer') {
    players[1].choice = difficultIcons[getRandomIndex(difficultIcons)]
    gameBoardChoices.push(players[1].choice)  
  }
  return players 
}

function determineClassicWins(classicRules){
  for(var i = 0; i < classicRules.length; i++){
    if(classicRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      console.log('player1 wins')
      currentGame.player1.wins += 1
    } else if (classicRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`] === classicRules[i][`${gameBoardChoices[1]} > ${gameBoardChoices[0]}`]) {
      console.log('it is a draw')
    } else if(!classicRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      console.log('player2 wins')
      currentGame.player2.wins += 1
    }
  }
  // gameBoardChoices = []
  createPlayer('Human', '🫠')
  createPlayer('Computer', '💻')
}

function determineDifficultWins(difficultRules){
  for(var i = 0; i < difficultRules.length; i++){
    if(difficultRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      currentGame.player1.wins += 1
      console.log('player1 wins')
    } else if (difficultRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`] === difficultRules[i][`${gameBoardChoices[1]} > ${gameBoardChoices[0]}`]) {
      console.log('it is a draw')
    } else if(!difficultRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      currentGame.player2.wins += 1
      console.log('player2 wins')
    }
  }
  // gameBoardChoices = []
  createPlayer('Human', '🫠')
  createPlayer('Computer', '💻')
}

function determineGameType(gameType, classicIcons, difficultIcons){
    if(gameType === 'classic') {
      console.log('classic conditional')
      takeTurnClassic('rock', classicIcons)
      // determineClassicWins(classicRules)
      // gameBoardChoices = [];
    } else if (gameType === 'difficult') {
      takeTurnDifficult('lizard', difficultIcons)
      // determineDifficultWins(difficultRules)
      // gameBoardChoices = [];
    }
  return currentGame
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
    show(iconsView);
    show(changeGameBtn)
    gameStatus.innerText = 'Choose your fighter !'
  }
}

function showDifficultGameBoard(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView);
    show(alien);
    show(lizard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !'
  }
}

 function resetGame(gameBoardChoices){
  gameBoardChoices = []; 
  showHomePage();
  return gameBoardChoices
}