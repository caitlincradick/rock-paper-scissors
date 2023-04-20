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

 
 console.log([`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`])

 function determineClassicWins(){
   console.log(classicRules[0]['rock > scissors'])
   for(var i = 0; i < classicRules.length; i++){
     console.log(classicRules[i][`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`])
   }
 }
 
 determineClassicWins()