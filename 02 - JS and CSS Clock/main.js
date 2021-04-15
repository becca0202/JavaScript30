function setTime() {
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  const time = new Date(Date.now());

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hoursDegrees = (hours / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setTime, 1000);
