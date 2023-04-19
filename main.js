var icons = ['assets/black-and-white-rocks.png', 'assets/black-and-white-scissors.png', 'assets/black-and-white-paper.png', 'assets/black-and-white-alien.png', 'assets/favpng_salamander-lizard-clip-art.png'];
var gameData = [];

function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0 
  }
  // console.log(player)
  return player
}

createPlayer('Human', '🫠')
createPlayer('Computer', '💻')

function createGame(gameData) {
var player1 = createPlayer('Human', '🫠')
var player2 = createPlayer('Computer', '💻')
var gameType= [{name:'classic',icons: 3, winConditions:[]},    
    {name:'classic',icons: 5, winConditions:[]}];
  var game = {
    player1:player1, 
    player2:player2, 
    gameType:gameType, 
    data: gameData
  }
  console.log(game)
}
  
 createGame(gameData)

