
//RETURNS BITTTTCH 
//query select these into variables ?
var classicIcons = ['rock', 'paper', 'scissors']
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoard = [];
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
function createGame(gameData) {
var player1 = createPlayer('Human', '🫠')
var player2 = createPlayer('Computer', '💻')
var gameType= [{name:'classic', winConditions:[]},    
    {name:'difficult', winConditions:[]}];
  var game = {
    player1:player1, 
    player2:player2, 
    gameType:gameType, 
    gameBoard: gameBoard
  }
  console.log(game)
  return game 
}
  
 createGame(gameData)



 //computer getting random icon
 function getRandomIndex(iconArray){
  return Math.floor(Math.random() * iconArray.length);
 }