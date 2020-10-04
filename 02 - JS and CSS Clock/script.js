const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function drawClockHands() {
  const time = new Date(Date.now());
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourHand.style.transform = `rotate(${90 + 30 * hours}deg)`;
  minuteHand.style.transform = `rotate(${90 + minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`;
}

window.setInterval(drawClockHands, 1000);