//GLOBAL VARIABLES
var classicIcons = ['rock', 'paper', 'scissors']
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoardChoices = [];
var currentGame;
var humanChoice;
var gameType = null;


//JS DATA MODEL
function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0 
  }
  return player
}

//will only call once on page load 
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
  // createGame(gameBoardChoices)
  var players = [createPlayer('Human', '🫠'), createPlayer('Computer', '💻')]
  if(players[0].name === 'Human'){
    players[0].choice = humanChoice 
    gameBoardChoices.push(players[0].choice)
  } 
  if (players[1].name === 'Computer') {
    players[1].choice = classicIcons[getRandomIndex(classicIcons)]
    gameBoardChoices.push(players[1].choice)  
  }
  return players 
}

function takeTurnDifficult(humanChoice, difficultIcons) {
  // createGame(gameBoardChoices)
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
  gameBoardChoices = []
  createPlayer('Human', '🫠')
  createPlayer('Computer', '💻')
}

function determineDifficultWins(difficultRules){
  for(var i = 0; i < difficultRules.length; i++){
    if(difficultRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      console.log('player1 wins')
      currentGame.player1.wins += 1
    } else if (difficultRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`] === difficultRules[i][`${gameBoardChoices[1]} > ${gameBoardChoices[0]}`]) {
      console.log('it is a draw')
    } else if(!difficultRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      console.log('player2 wins')
      currentGame.player2.wins += 1
    }
  }
  gameBoardChoices = []
  createPlayer('Human', '🫠')
  createPlayer('Computer', '💻')
}

function determineGameType(gameType, classicIcons, difficultIcons){
  var currentGameType = gameType
    if(gameType === 'classic') {
      console.log('classic conditional')
      takeTurnClassic('rock', classicIcons)
      determineClassicWins(classicRules)
      gameBoardChoices = [];
    } else if (gameType === 'difficult') {
      takeTurnDifficult('lizard', difficultIcons)
      determineDifficultWins(difficultRules)
      gameBoardChoices = [];
    }
  return currentGameType
  }
