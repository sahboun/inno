const countdown = document.querySelector('.countdown');
const daysEl = document.querySelector('.days .number');
const hoursEl = document.querySelector('.hours .number');
const minutesEl = document.querySelector('.minutes .number');

const targetDate = new Date('2023-07-01T22:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
}

setInterval(updateCountdown, 1000);