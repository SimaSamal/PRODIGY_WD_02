let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

function startStop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("startStopButton").innerText = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    document.getElementById("startStopButton").innerText = "Stop";
  }
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("display").innerText = formattedTime;
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const centiseconds = Math.floor(date.getUTCMilliseconds() / 10)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}:${centiseconds}`;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStopButton").innerText = "Start";
  document.getElementById("laps").innerText = "";
  lapCount = 0;
}

function lap() {
  if (timerInterval) {
    lapCount++;
    const lapTime = formatTime(elapsedTime);
    const lapDiv = document.createElement("div");
    lapDiv.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapDiv);
  }
}
