// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playSection = document.getElementById("play-ground");
//   playSection.classList.remove("hidden");
// }

function continueGame() {
  const alphaBate = getRandomAlphaBate();
  const currentAlphaBate = document.getElementById("current-alphaBate");
  currentAlphaBate.innerText = alphaBate;
  setBgColor(alphaBate);
}

function play() {
  hideElement("home-screen");
  showElement("play-ground");
  continueGame();
}
