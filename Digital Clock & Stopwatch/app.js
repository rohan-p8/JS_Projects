const clockDisplay = document.getElementById("clock-display");

const dateDisplay = document.getElementById("date-display");

function updateClock() {
    const now = new Date();

    clockDisplay.textContent = now.toLocaleTimeString();

    dateDisplay.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

setInterval(updateClock, 1000);
updateClock();

// Stopwatch Logic

const stopwatchDisplay = document.getElementById("stopwatch-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const splitBtn = document.getElementById("split-btn");
const resetBtn = document.getElementById("reset-btn");
const lapsList = document.getElementById("laps-list");

let stopwatchInterval = null;
let startTime = 0;
let elapsedTime = 0;
let lapCounter = 1;

function formatStopwatchTime(msTotal) {
    const totalSeconds = Math.floor(msTotal / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const hundredths = String(Math.floor((msTotal % 1000) / 10)).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}.${hundredths}`;
}

function updateStopwatch() {
    const currentTime = Date.now();
    const timeDifference = (currentTime - startTime) + elapsedTime;

    const { hours, minutes, seconds, hundredths } = formatStopwatchTime(timeDifference);

    stopwatchDisplay.innerHTML = `${hours}:${minutes}:${seconds}<span class="ms">${hundredths}</span>`;

}