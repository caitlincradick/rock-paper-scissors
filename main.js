var player1 = createPlayer('Human', '🧑', 0 )
var player2 = createPlayer('Computer', '💻', 0)

function createPlayer (name, token, wins){
  var player = {
    name: name,
    token: token,
    wins: wins 
  }
  console.log(player)
  return player
}

function createGame(player1, player2) {
console.log(player1.name)
}

createGame(player1, player2)