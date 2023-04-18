var players = createPlayer()
console.log(players)

function createPlayer(){
  //will always be player1s turn first 
  var playerData = [
    {
    name:'Human' , 
    token:'🧑' , 
    wins:0 
    }, 
    {
    name: 'Computer', 
    token:'💻' , 
    wins:0
  }];
  
return playerData
}
createPlayer()

function createGame(players) {
  console.log(players[0].name)
}
createGame(players)


