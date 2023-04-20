//WIN CONDITIONS:
var classicRules = [ {
  'rock > scissors':true,
  'scissors > rock':false, 
  'paper > rock':true, 
  'rock > paper':false,
  'scissors > paper':true,
  'paper > scissors':false  
 }];

 var diffificultRules = [{
  'rock > scissors':true,
  'scissors > rock':false, 
  'paper > rock':true, 
  'rock > paper':false,
  'scissors > paper':true,
  'paper > scissors':false, 
  'rock > lizard': true, 
  'lizard > rock': false, 
  'paper > alien': true, 
  'alien > paper': false, 
  'scissors > lizard': true, 
  'lizard > scissors':false, 
  'lizard > paper': true, 
  'paper > lizard': false, 
  'lizard > alien': true, 
  'alien > lizard': false, 
  'alien > scissors': true, 
  'scissors > alien': false, 
  'alien > rock': true, 
  'rock > alien' : false 
 }];


// console.log([`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`])

function determineClassicWins(){
  // console.log(classicRules[0]['rock > scissors'])
  console.log(gameBoardChoices)
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
  // createGame(gameBoardChoices)
}

determineClassicWins()