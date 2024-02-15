// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playSection = document.getElementById("play-ground");
//   playSection.classList.remove("hidden");
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  if (playerPressed === "Escape") {
    gameOver();
  }
  const currentAlphaBateElement = document.getElementById("current-alphaBate");
  const currentAlphaBate = currentAlphaBateElement.innerText;
  const expectedAlphaBate = currentAlphaBate.toLowerCase();
  if (playerPressed === expectedAlphaBate) {
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
    removeBgColor(expectedAlphaBate);
    continueGame();
  } else {
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const updateLife = currentLife - 1;
    currentLifeElement.innerText = updateLife;
    if (updateLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphaBate = getRandomAlphaBate();
  const currentAlphaBateElement = document.getElementById("current-alphaBate");
  currentAlphaBateElement.innerText = alphaBate;
  setBgColor(alphaBate);
}

function play() {
  hideElement("home-screen");
  hideElement("final-score");
  showElement("play-ground");
  setElementValueById("current-life", 10);
  setElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElement("play-ground");
  showElement("final-score");
  const lastScore = getElementValueById("current-score");
  setElementValueById("last-score", lastScore);
  const currentAlphaBate = getElementTextById("current-alphaBate");
  removeBgColor(currentAlphaBate);
}
