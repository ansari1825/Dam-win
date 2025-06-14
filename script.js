function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
      const result = generateResult();
      document.getElementById("result").textContent = "Result: " + result;
    }
  }, 1000);
}

function generateResult() {
  const colors = ["Red", "Green", "Violet"];
  const numbers = Math.floor(Math.random() * 10);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const bigSmall = numbers >= 5 ? "Big" : "Small";
  return color + " | " + numbers + " | " + bigSmall;
}

window.onload = function () {
  const timerDisplay = document.querySelector('#time');
  if (timerDisplay) startCountdown(30, timerDisplay);
};