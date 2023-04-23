//QUERY SELECTORS
var winsPlayer1 = document.querySelector('.wins-human');
var winsPlayer2 = document.querySelector('.wins-computer');
var gameStatus = document.querySelector('.game-status');
var changeGameBtn = document.querySelector('.change-game');
var homeViewGameType = document.querySelector('.game-type');
var classicBoard = document.querySelector('.classic-board');
var difficultBoard = document.querySelector('.difficult-board')
var bothButtonsHomeView = document.querySelector('.buttons');
var selectedIcons = document.querySelector('.selected-icons')
var choiceHuman = document.getElementById('choiceHuman');
var choiceComputer = document.getElementById('choiceComputer');
var classicBtn = document.querySelector('.classic-btn');
var difficultBtn = document.querySelector('.difficult-btn');
var iconsView = document.querySelector('.icons');
var allIcons = document.querySelectorAll('img');
var icon = document.querySelector('.icon')
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var lizard = document.querySelector('#lizard');
var alien = document.querySelector('#alien');

//EVENT LISTENERS 
window.addEventListener('load', createGame(gameBoardChoices));

classicBtn.addEventListener('click', function(event) {
  determineGameType(event);
  showClassicGameBoard();
  // getAllIcons(event)
  
});

difficultBtn.addEventListener('click', function(event) {
  showDifficultGameBoard();
  determineGameType(event);
  // takeTurnDifficult(event.target.id, difficultIcons);
});

rock.addEventListener('click', function(event) {
  console.log('rock clicked')
  getAllIcons(event)
  determineGameType(event)
  takeTurnClassic(event.target.id, classicIcons);
  displayPlayerChoices()
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
// var humanChoice;
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
  } else if (classicOrDifficult.includes('difficult-btn')){
    console.log('hi')
      // currentGame.rules = difficultRules
      gameType = 'difficult'
  }
  return gameType
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
displayPlayerChoices()
  determineWins()
  setTimeout(resetGame, 2000)
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
  displayPlayerChoices()
  determineWins()
  setTimeout(resetGame, 2000)
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
    gameStatus.innerText = 'Player 1 Wins 🫠'
    winsPlayer1.innerText = `${currentGame.player1.wins}`
  } else if (gameBoardChoices[0] === gameBoardChoices[1]) {
    console.log('it is a draw')
    gameStatus.innerText = 'It\s a draw !'
  } else if(!currentGame.rules[`${gameBoardChoices[0]} > ${gameBoardChoices[1]}`]){
    console.log('player2 wins')
    currentGame.player2.wins += 1
    gameStatus.innerText = 'Player 2 Wins 💻'
    winsPlayer2.innerText = `${currentGame.player2.wins}`
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
    show(iconsView)
    show(classicBoard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !'
  }
}

function showDifficultGameBoard(){
  if(!homeViewGameType.classList.contains('hidden')){
    hide(classicBtn);
    hide(difficultBtn);
    show(iconsView);
    show(difficultBoard);
    show(changeGameBtn);
    gameStatus.innerText = 'Choose your fighter !'
  }
}

function backtoHomePage(){
  show(classicBtn);
  show(difficultBtn);
  hide(changeGameBtn);
  hide(iconsView);
  hide(classicBoard);
}

function hideIcons(){
  hide(rock);
  hide(paper);
  hide(scissors);
  hide(alien);
  hide(lizard);
}



function displayPlayerChoices(){
  for (var i = 0; i < allIcons.length; i++) {
    hide(allIcons[i]);
  }
  console.log(currentGame.player1.choice)
  console.log(currentGame.player2.choice)
  selectedIcons.innerHTML = `
  <img src="assets/${currentGame.player1.choice}.png" alt="drawing of rocks"/>
  <img src="assets/${currentGame.player2.choice}.png"/>
  `;
}


function resetGame(){
  selectedIcons.innerHTML = ''
  show(rock);
  show(paper)
  show(scissors)

  if(gameType === 'difficult')
  show(lizard)
  show(alien)
}
// function resetGame(){
//  currentGame.player1.choice = ''
//  currentGame.player2.choice = ''
//   selectedIcons.innerHTML = ''
//   gameStatus.innerText = 'Choose your fighter !'
//   if(gameType === 'classic'){
//     classicBoard.innerHTML =
//     `<section class ="classic-board">
//     <img class="rock icon" id="rock" src="assets/rock.png" alt="drawing of rocks">
//     <img class="scissors icon" id="scissors" src="assets/scissors.png" alt="drawing of scissors">
//     <img class="paper icon" id="paper" src="assets/paper.png" alt="drawing of paper">
//   </section>`
//   } else {
//     difficultBoard.innerHTML =
//     `<section class = "difficult-board">
//           <img class="rock icon" id="rock" src="assets/rock.png" alt="drawing of rocks">
//           <img class="scissors icon" id="scissors" src="assets/scissors.png" alt="drawing of scissors">
//           <img class="paper icon" id="paper" src="assets/paper.png" alt="drawing of paper">
//           <img class="alien icon" id="alien" src="assets/alien.png" alt="drawing of alien">
//           <img class="lizard icon" id="lizard" src="assets/lizard.png" alt="drawing of lizard"></img>`
//   }
  // iconsView.innerHTML = `
  // <img class="rock icon " id="rock" src="assets/rock.png" alt="drawing of rocks">
  // <img class="scissors icon " id="scissors" src="assets/scissors.png" alt="drawing of scissors">
  // <img class="paper icon " id="paper" src="assets/paper.png" alt="drawing of paper">
  // <img class="alien icon hidden" id="alien" src="assets/alien.png" alt="drawing of alien">
  // <img class="lizard icon hidden" id="lizard" src="assets/lizard.png" alt="drawing of lizard">`
