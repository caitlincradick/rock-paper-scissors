function createPlayer(){
  //will always be player1s turn
  var players = [
    {
    name:'Human' , 
    token:'🧑' , 
    wins:0 
    }, 
    {
    name: 'Computer', 
    token:'💻' , 
    wins:0
  }]
return players 
}

function createGame(players) {
console.log(players[0].name)
}