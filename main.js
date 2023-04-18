var player1 = createPlayer('Human', '🧑')
var player2 = createPlayer('Computer', '💻')
var gameType= [{name:'classic',icons: 3, winConditions:[]},{name:'classic',icons: 5, winConditions:[]}];

function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0 
  }
  console.log(player)
  return player
}

function createGame(player1, player2, gameType) {
  var game = {
    player1: player1, 
    player2: player2, 
    gameType:gameType, 
    data: []  
  }
   console.log(game)
   return game 
 }
 
 createGame(player1, player2, gameType)