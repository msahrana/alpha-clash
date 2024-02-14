function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function getRandomAlphaBate() {
  const alphaBateString = "abcdefghijklmnopqrstuvwxyz";
  const alphaBates = alphaBateString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphaBate = alphaBates[index];
  return alphaBate;
}
