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
        selectDate = selectedDates[0];
      if (Date.now() < selectDate.getTime()) {
        start.disabled = false;
      }
        else Notiflix.Notify.failure('"Please choose a date in the future"');
    },
  };

flatpickr(select, options);

start.addEventListener('click',  reverse)

function reverse() {
  start.disabled = true;
  // selectDate = ;
 const timerId = setInterval(() => {
  if (selectDate - Date.now() > 0) {
  setTime(selectDate - Date.now());
    }

  return
    }, 1000); 
};
  

function setTime(date) {
    days.textContent = addLeadingZero(convertMs(date).days);
    hours.textContent = addLeadingZero(convertMs(date).hours);
    minutes.textContent = addLeadingZero(convertMs(date).minutes);
    seconds.textContent = addLeadingZero(convertMs(date).seconds);
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
 return String(value).padStart(2, 0);
  }
