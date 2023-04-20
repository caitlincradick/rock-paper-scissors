
//RETURNS BITTTTCH 
//query select these into variables ?
var classicIcons = ['rock', 'paper', 'scissors']
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoardChoices = [];
currentGame;
//push in different selections, an array of the two fighters selected by user and 
//computer to assign later when a user makes a selection for a fighter and have other functionlity of the fighters based on the conditions of the win type selected 
//seperate function that determines which index position of the array beats the other 
//temporary-will clear out 
//win conditions can see like rules -- will also need losing conditions 

function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0 
  }
  return player
}

createPlayer('Human', '🫠')
createPlayer('Computer', '💻')

//will only call once on page load
function createGame(gameBoardChoices) {
var player1 = createPlayer('Human', '🫠')
var player2 = createPlayer('Computer', '💻')
var gameType= [{name:'classic', winConditions:[]},    
    {name:'difficult', winConditions:[]}];
  var game = {
    player1:player1, 
    player2:player2, 
    gameType:gameType, 
    gameBoardChoices: gameBoardChoices
  }
  console.log(game)
  currentGame = game
  return currentGame
}
  
 createGame(gameBoardChoices)



 //computer getting random icon
function getRandomIndex(iconArrays){
  return Math.floor(Math.random() * iconArrays.length);
 }

function takeTurn(humanChoice, classicIcons) {
var players = [createPlayer('Human', '🫠'), createPlayer('Computer', '💻')]
 // for the player that means selecting their choice of rock/paper/scissor. For the computer, that means running the method for it’s random choice
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
takeTurn('rock', classicIcons)



// function classicGame(humanChoice, computerIconArray)