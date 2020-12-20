const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
 
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');


function bodyColor() {
    startButton.disabled = true;
    intervalID = setInterval(() => {
        let index = randomIntegerFromInterval(0, colors.length);
        body.style.backgroundColor = colors[index];
    }, 1000);
};

function stopChange() {
    clearInterval(intervalID);
    startButton.disabled = false;
};

startButton.addEventListener('click', bodyColor);
stopButton.addEventListener('click', stopChange);

