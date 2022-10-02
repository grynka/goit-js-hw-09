import Notiflix from 'notiflix';
const first = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const send = document.querySelector('.form');
let i;

send.addEventListener('submit', function (event) {
  event.preventDefault()
  i = amount.value
  timerId = setInterval(() => {
    if (i > 0) {
      i -= 1
      console.log(i + 1);
      createPromise(i + 1, first.value);
    }
    return
    }, step.value);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}
