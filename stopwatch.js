let intervalId;
let counter = 0;
let isRunning = false;
const displayText = document.querySelector('.js-display');


displayText.innerHTML = `${counter}`;


function startStop() {
  if (!isRunning) {
    intervalId = setInterval(() => {
      displayText.innerHTML = counter;
      counter++;
    }, 1000);
    isRunning = true;
  } else {
    clearInterval(intervalId);
    isRunning = false;
  }
}

document.querySelector('.js-start-button')
  .addEventListener('click', startStop);

function reset() {
  clearInterval(intervalId);
  counter = 0;
  displayText.innerHTML = counter;
  isRunning = false;
}

document.querySelector('.js-reset-button')
  .addEventListener('click', reset);