const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  console.log(seconds);
  console.log(secondDegrees);

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;

  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  let hours = now.getHours();

  const hourDegrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  let status;
  if (hours < 12) {
    status = 'AM';
  } else {
    hours = hours - 12;
    status = 'PM';
  }

  time.innerHTML = `${hours}:${minutes} ${status}`;
}

setInterval(setDate, 1000);
