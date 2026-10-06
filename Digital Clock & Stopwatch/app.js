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