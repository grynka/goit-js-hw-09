const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stop.disabled = true;

console.log(body)

start.addEventListener('click', startF);

function startF() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      start.disabled = true;
      stop.disabled = false;
}

stop.addEventListener('click', stopF);

function stopF() {
    clearInterval(timerId)
    start.disabled = false;
    stop.disabled = true;

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }