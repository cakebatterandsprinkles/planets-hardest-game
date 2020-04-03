const canvas = document.querySelector('#canvas');
const qmark = document.querySelector('#rules');
const ruleContainer = document.querySelector('.rule-container');
const backdrop = document.querySelector('.rule-backdrop');
const directions = document.querySelector('.directions');

window.addEventListener('resize', handleLayoutChanges);
qmark.addEventListener('click', handleQmarkClick);
window.addEventListener('keyup', handleGameStart)

function handleGameStart(e) {
  if (e.key === "Spacebar" || e.key === " ") {
    directions.classList.add('invisible');
  }
}

function handleLayoutChanges() {
  updateUIVisibility();
  updateCanvasDimensions();
}

function handleQmarkClick() {
  ruleContainer.classList.toggle("show");
  handleBackdrop();
}

function handleBackdrop() {
  backdrop.addEventListener('click', handleQmarkClick);
  backdrop.classList.toggle("invisible");
}

handleLayoutChanges();

function updateCanvasDimensions() {
  if (window.innerWidth >= 1250) {
    canvas.width = 1000;
    canvas.height = 700;
  } else if (window.innerWidth >= 1000) {
    canvas.width = 800;
    canvas.height = 560;
  } else if (window.innerWidth >= 760) {
    canvas.width = 700;
    canvas.height = 490;
  }
}

function updateUIVisibility() {
  const info = document.querySelector('.small-screen');
  const scoreboardContainer = document.querySelector('.scoreboard-container');
  const gameContainer = document.querySelector('.game-container');
  if (window.innerWidth >= 760) {
    info.classList.add('invisible');
    gameContainer.classList.remove('invisible');
    ruleContainer.classList.remove('invisible');
    directions.classList.remove('invisible');
  } else {
    info.classList.remove('invisible');
    gameContainer.classList.add('invisible');
    ruleContainer.classList.add('invisible');
    directions.classList.add('invisible');
  }
}