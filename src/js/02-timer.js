import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const select = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let selectDate;

start.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const date = new Date();
        selectDate = selectedDates[0];
      if (date.getTime() < selectDate.getTime()) {
        start.disabled = false;
      }
        else Notiflix.Notify.failure('"Please choose a date in the future"');
    },
  };

flatpickr(select, options);

start.addEventListener('click',  reverse)

function reverse() {
  timerId = setInterval(() => {
    setTime();
    console.log(selectDate);
  }, 1000);
}

function setTime() {
  const dateN = new Date();
  const selectDateN = selectDate - dateN;
  console.log(selectDateN);
  if (selectDateN > 0) {
    days.textContent = addLeadingZero(convertMs(selectDateN).days);
    hours.textContent = addLeadingZero(convertMs(selectDateN).hours);
    minutes.textContent = addLeadingZero(convertMs(selectDateN).minutes);
    seconds.textContent = addLeadingZero(convertMs(selectDateN).seconds);
    console.log(addLeadingZero(convertMs(selectDateN).seconds));
  } else clearInterval(timerId);
}

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  

function addLeadingZero(value) {
  if (value < 10) {
 return String(value).padStart(2, 0);
  }
 else return value
  }
