//QUERY SELECTORS
var winsPlayer1 = document.querySelector('.wins-human');
var winsPlayer2 = document.querySelector('.wins-computer');
var gameStatus = document.querySelector('.game-status');
var changeGameBtn = document.querySelector('.change-game');
var homeViewGameType = document.querySelector('.game-type');
var bothButtonsHomeView = document.querySelector('.buttons')
//needs to be querySelectorAll
var classicBtn = document.querySelector('.classic-btn');
var difficultBtn = document.querySelector('.difficult-btn')
var iconsView = document.querySelector('.icons');
var allIcons = document.querySelectorAll('.icon'),i;
var icon = document.querySelector('.icon')
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var lizard = document.querySelector('#lizard');
var alien = document.querySelector('#alien');

//EVENT LISTENERS 
window.addEventListener('load', createGame(gameBoardChoices));

classicBtn.addEventListener('click', function(event) {
  showClassicGameBoard();
  determineGameType(event);
});

difficultBtn.addEventListener('click', function(event) {
  showDifficultGameBoard();
  determineGameType(event);
  // takeTurnDifficult(event.target.id, difficultIcons);
});

rock.addEventListener('click', function(event) {
  getAllIcons(event)
  determineGameType(event)
  takeTurnClassic(event.target.id, classicIcons);
  console.log('rock clicked')
})

paper.addEventListener('click', function(event) {
  getAllIcons(event)
  determineGameType(event)
  takeTurnClassic(event.target.id, classicIcons);
  console.log('paper clicked')
})

scissors.addEventListener('click', function(event) {
  getAllIcons(event)
  takeTurnClassic(event.target.id, classicIcons);
  console.log('scissors clicked')
})

changeGameBtn.addEventListener('click', function () {
  backtoHomePage();
})

//GLOBAL VARIABLES
var classicIcons = ['rock', 'paper', 'scissors']
var difficultIcons = ['rock', 'paper', 'scissors', 'alien', 'lizard']
var gameBoardChoices = [];
var currentGame;
var humanChoice;
var gameType;


//JS DATA MODEL
function createPlayer (name, token){
  var player = {
    name: name,
    token: token,
    wins: 0 
  }
  return player
}

function createGame(gameBoardChoices){
var player1 = createPlayer('Human', '🫠')
var player2 = createPlayer('Computer', '💻')
  var game = {
    player1:player1, 
    player2:player2, 
    gameType:gameType, 
    gameBoardChoices: gameBoardChoices  
  }
  currentGame = game
  return currentGame
}  
// createGame(gameBoardChoices)

function getRandomIndex(iconArrays){
  return Math.floor(Math.random() * iconArrays.length);
}

function getAllIcons(event){
  for(var i = 0; i < allIcons.length; i++) {
    allIcons[i] = event.target.id 
  }
  return allIcons[i]
}

function determineGameType(event) {
var classicOrDifficult = event.target.className
  if(classicOrDifficult.includes('classic-btn')){
    console.log('hello')
    // currentGame.rules = classicRules
    gameType = 'classic'
    // takeTurnClassic(humanChoice, classicIcons)
  } else if (classicOrDifficult.includes('difficult-btn')){
    console.log('hi')
      // currentGame.rules = difficultRules
      gameType = 'difficult'
      // takeTurnDifficult(humanChoice, difficultIcons)
  }
  return classicOrDifficult
}

function takeTurnClassic(humanChoice, classicIcons) {
gameBoardChoices = []
gameType = 'classic'
if(currentGame.player1.name === 'Human'){
  currentGame.player1.choice = humanChoice 
  gameBoardChoices.push(currentGame.player1.choice)
} 
if (currentGame.player2.name === 'Computer') {
  currentGame.player2.choice= classicIcons[getRandomIndex(classicIcons)]
  gameBoardChoices.push(currentGame.player2.choice)  
}
console.log(gameBoardChoices)
  determineWins()
}

function takeTurnDifficult(humanChoice, difficultIcons) {
  gameBoardChoices = []
  if(currentGame.player1.name === 'Human'){
    currentGame.player1.choice = humanChoice 
    gameBoardChoices.push(currentGame.player1.choice)
  } 
  if (currentGame.player2.name === 'Computer') {
    currentGame.player2.choice = difficultIcons[getRandomIndex(difficultIcons)]
    gameBoardChoices.push(currentGame.player2.choice)  
  }
  // determineWins()
}

function determineRules(){
  if(gameType === 'classic'){
  currentGame.rules = classicRules
} else if (gameType === 'difficult') {
  currentGame.rules = difficultRules
}
return currentGame.rules
}


function determineWins(){
  determineRules()
    if(currentGame.rules[`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      console.log('player1 wins')
      currentGame.player1.wins += 1
    } else if (gameBoardChoices[0] === gameBoardChoices[1]) {
      console.log('it is a draw')
    } else if(!currentGame.rules[`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
      console.log('player2 wins')
      currentGame.player2.wins += 1
    }
  // gameBoardChoices = []
}

//JS DOM
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showHomePage(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(changeGameBtn);
    hide(iconsView);
    show(classicBtn);
    show(difficultBtn);
  } 
}

function showClassicGameBoard(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView);
    show(changeGameBtn);
    hide(alien);
    hide(lizard);
    gameStatus.innerText = 'Choose your fighter !'
  }
}

function showDifficultGameBoard(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView);
    show(alien);
    show(lizard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !'
  }
}

function backtoHomePage(){
  show(classicBtn);
  show(difficultBtn);
  hide(changeGameBtn);
  hide(iconsView);
}



function resetGame(gameBoardChoices){
  gameBoardChoices = []; 
  showHomePage();
  return gameBoardChoices
}
// function displayPlayerData(){
//   <section class="game-board">
//   <h1 class="game-board-heading">It's Rock, Paper, Scissors y'all</h1>
//   <h2 class="game-status">Choose your Game !</h2>
//   <button class = "change-game">Change Game ?</button>
//   <section class="icons hidden">
//     <img class="rock" id="rock" src="assets/black-and-white-rocks.png" alt="drawing of rocks">
//     <img class="scissors" id="scissors" src="assets/black-and-white-scissors.png" alt="drawing of scissors">
//     <img class="paper" id="paper" src="assets/black-and-white-paper.png" alt="drawing of paper">
//     <img class="alien hidden" id="alien" src="assets/black-and-white-alien.png" alt="drawing of alien">
//     <img class="lizard hidden" id="lizard" src="assets/favpng_salamander-lizard-clip-art.png" alt="drawing of lizard">
//   </section>
// }