

//DOM FUNCTIONS
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
    show(classicBoard);
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
  hide(difficultBoard)
}

function displayPlayerChoices(){
  changeGameBtn.disabled = true;
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
  changeGameBtn.disabled = false 
  gameStatus.innerText = 'Choose your fighter !'
  selectedIcons.innerHTML = ''
  show(rock);
  show(paper)
  show(scissors)
  show(lizard)
  show(alien)
}

function displayWins(){
  winsPlayer1.innerText = `${currentGame.player1.wins}`
  winsPlayer2.innerText = `${currentGame.player2.wins}`
  if(currentGame.player1.winner && !currentGame.player2.winner){
    gameStatus.innerText = 'Player 1 Wins 🫠'
  } else if(!currentGame.player1.winner && !currentGame.player2.winner){
    gameStatus.innerText = 'It\s a draw !'
  } else if (currentGame.player2.winner && !currentGame.player1.winner) {
    gameStatus.innerText = 'Player 2 Wins 💻'
  }
}