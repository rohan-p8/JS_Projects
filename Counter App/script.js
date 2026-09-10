let counter = document.querySelector("#value");

let inc = document.querySelector("#inc");

let dec = document.querySelector("#dec");

let reset = document.querySelector("#reset");


let count = 0;

function updateDisplay() {
    counter.textContent = count;

    if (count > 0) {
        counter.style.color = '#00b894'; // Gentle green
    } else if (count < 0) {
        counter.style.color = '#d63031'; // Soft red
    } else {
        counter.style.color = '#2c3e50'; // Default dark
    }
}


inc.addEventListener("click", () => {
    count++;
    updateDisplay();
});

dec.addEventListener("click", () => {
    count--;
    updateDisplay();
});

reset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});