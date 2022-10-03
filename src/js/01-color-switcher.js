const START = document.querySelector('button[data-start]');
const STOP = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId;

STOP.disabled = true;

START.addEventListener('click', start);
STOP.addEventListener('click', stop);

function start() {
    START.disabled = true;
    STOP.disabled = false;
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
      }, 1000);

    console.log(timerId);
    //return timerId;
}

function stop() {
    START.disabled = false;
    STOP.disabled = true;
    console.log(timerId);
   const timer = timerId
    clearInterval(timer);
    start.disabled = false;
    stop.disabled = true;

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }