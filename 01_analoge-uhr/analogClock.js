const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
 
// Updates hand positions based on current time.

function setClockHands() {
  const now = new Date();
  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours() % 12;

  secondHand.style.transform = `rotate(${(s / 60) * 360}deg)`;
  minuteHand.style.transform = `rotate(${(m / 60) * 360 + (s / 60) * 6}deg)`;
  hourHand.style.transform = `rotate(${(h / 12) * 360 + (m / 60) * 30}deg)`;
}
// Updating every second
setInterval(setClockHands, 1000);
setClockHands();