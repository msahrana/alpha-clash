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

function removeBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getRandomAlphaBate() {
  const alphaBateString = "abcdefghijklmnopqrstuvwxyz";
  const alphaBates = alphaBateString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphaBate = alphaBates[index];
  return alphaBate;
}
