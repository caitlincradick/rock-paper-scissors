//DATA MODEL

//GLOBAL VARIABLES
var classicIcons = ['rock', 'paper', 'scissors'];
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoardChoices = [];
var currentGame;


function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    winner: false,
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
    gameBoardChoices: gameBoardChoices  
  }
  currentGame = game
  return currentGame
}  

function getRandomIndex(iconArrays){
  return Math.floor(Math.random() * iconArrays.length);
}

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
  displayWins()
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
  displayWins()
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
   currentGame.player1.winner = true
  } else if (gameBoardChoices[0] === gameBoardChoices[1]) {
    console.log('it is a draw')
    currentGame.player1.winner = false;
    currentGame.player2.winner = false;
  } else if(!currentGame.rules[`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
    console.log('player2 wins')
    currentGame.player2.wins += 1
    currentGame.player2.winner = true
  }
}

