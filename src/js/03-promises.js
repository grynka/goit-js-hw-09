import Notiflix from 'notiflix';
const first = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const send = document.querySelector('.form');


send.addEventListener('submit', function (event) {
  event.preventDefault()
 for (let i = 0; i < amount.value; i++) {
      let delays = Number.parseInt(first.value) + i * Number.parseInt(step.value)
      createPromise(i + 1, delays);
    }

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
