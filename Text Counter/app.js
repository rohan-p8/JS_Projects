// let input = document.querySelector("input");

// let label = document.querySelector("label");

// let counter = 0;

// input.addEventListener('keypress', () => {
//     counter += 1
//     label.innerText = counter;
// });

const textarea = document.getElementById("input");
const counter = document.getElementById("counter");

const MAX_CHARS = 100;

textarea.addEventListener("input", () => {
    const curLength = textarea.value.length;
    const remain = MAX_CHARS - curLength;

    counter.textContent = `${curLength} / ${MAX_CHARS}`;

    if (remain < 10) {
        counter.classList.add("warning");
    } else {
        counter.classList.remove("warning");
    }
});