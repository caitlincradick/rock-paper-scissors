
//RETURNS BITTTTCH 
//query select these into variables ?
var classicIcons = ['rock', 'paper', 'scissors']
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoard = [];
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
function createGame(gameBoard) {
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


 
 function takeTurn(humanChoice, classicIcons) {
  var player = createPlayer('Computer', '🫠') 
  console.log(player.name)
    console.log(classicIcons)
   // for the player that means selecting their choice of rock/paper/scissor. For the computer, that means running the method for it’s random choice
  if(player.name === 'Human'){
    player.choice = humanChoice 
    gameBoardChoices.push(player.choice)
    console.log(humanChoice)
  } else if (player.name != 'Human'){
    player.name = 'Computer'
    player.choice = classicIcons[getRandomIndex(classicIcons)]
    gameBoardChoices.push(player.choice)  
    console.log(player.choice)
  }
  return player
  }
  
  takeTurn('rock', classicIcons)


function classicGame(humanChoice, computerIconArray)