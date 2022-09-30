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
let day;
let hour;
let minute;
let seconde;


start.disabled = true;

//console.log(Date.now.toString);


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
        return selectDate = selectDate - date;
    },
  };

  flatpickr(select, options);

start.addEventListener('click',  reverse)

function reverse() {
  timerId = setInterval(() => {
    selectDate -= 1000;
    setTime();
 return selectDate
    
}, 1000);
}

function setTime() {
  days.textContent = convertMs(selectDate).days;
  hours.textContent = convertMs(selectDate).hours;
  minutes.textContent = convertMs(selectDate).minutes;
  seconds.textContent = convertMs((selectDate)).seconds;
  
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
padStart();
  }


