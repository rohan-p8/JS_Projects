// const form = document.querySelector("#guess-form");
// const guessInput = document.querySelector("#guess-input");
// const submitBtn = document.querySelector("#submit-btn");

// const feedback = document.querySelector("#feedback");
// const attemptsCount = document.querySelector("#attempts-count");
// const history = document.querySelector("#guesses-history");
// const restartBtn = document.querySelector("#restart-btn");

// //State variables

// const MAX_ATTTEMPTS = 10;
// let targetNumber = 0;
// let attemptsLeft = MAX_ATTTEMPTS;
// let guessesHistory = [];

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
// }


// function initGame() {
//     targetNumber = generateRandomNumber();
//     attemptsLeft = MAX_ATTTEMPTS;
//     guessesHistory = [];


//     feedback.textContent = "Make your first guess!";
//     feedback.className = "feedback-msg";
//     attemptsCount.textContent = "0";
//     history.textContent = "None";

//     guessInput.disabled = false;
//     submitBtn.disabled = false;
//     guessInput.value = "";
//     guessInput.focus();

//     restartBtn.classList.add("hidden");
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const userGuess = parseInt(guessInput.value.trim(), 10);

//     // Form validation check
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         setFeedback("Please enter a valid number between 1 and 100!", "error");
//         guessInput.value = "";
//         return;
//     }

//     // Prevent duplicate guesses
//     if (guessesHistory.includes(userGuess)) {
//         setFeedback(`You already tried ${userGuess}!   Try a different number.`, 'error');
//         guessInput.value = "";
//         return;
//     }


//     //Save valid gueses

//     if (userGuess === targetNumber) {
//         endGame(true);
//     } else if (attemptsLeft === 0) {
//         endGame(false);
//     } else if (userGuess < targetNumber) {
//         setFeedback(`Too low! Go higher⬆ (Attempts left: ${attemptsLeft})`, "low");
//     } else {
//         setFeedback(`Too high! Go lower ⬇ (Attempts left: ${attemptsLeft})`, "high");
//     }


//     guessInput.value = "";
//     guessInput.focus();
// });


// function setFeedback(msg, className) {
//     feedback.textContent = msg;
//     feedback.className = `feedback-msg ${className}`;
// }

// function updateStats() {
//     attemptsCount.textContent = MAX_ATTTEMPTS - attemptsLeft;

//     history.textContent = guessesHistory.join(", ");
// }


// function endGame(isWin) {
//     guessInput.disabled = true;
//     submitBtn.disabled = true;
//     restartBtn.classList.remove("hidden");


//     if (isWin) {
//         const attemptsUsed = MAX_ATTTEMPTS - attemptsLeft;

//         setFeedback(`🎉 Correct! The number was ${targetNumber}. Found in ${attemptsUsed} tries!`, "win");
//     } else {
//         setFeedback(`💀 Game Over! You've used all 10 attempts. The number was ${targetNumber}.`, "error");
//     }
// }


// restartBtn.addEventListener("click", initGame);

// initGame();





// 1. Select the exact IDs from the DOM
const form = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const feedback = document.getElementById("feedback");
const attemptsCount = document.getElementById("attempts-count");
const historyDisplay = document.getElementById("guesses-history");
const restartBtn = document.getElementById("restart-btn");

// 2. State
const MAX_ATTEMPTS = 10;
let targetNumber = Math.floor(Math.random() * 100) + 1;
let guessesHistory = [];

// 3. Dedicated function to update UI stats
function updateStats() {
    // Update attempts number
    attemptsCount.textContent = guessesHistory.length;

    // Update history list (e.g., "12, 45, 78")
    if (guessesHistory.length > 0) {
        historyDisplay.textContent = guessesHistory.join(", ");
    } else {
        historyDisplay.textContent = "None";
    }
}

// 4. Form Submit Handler
form.addEventListener("submit", (e) => {
    e.preventDefault(); // STOP page reload (Crucial: without this, state clears immediately!)

    const userGuess = parseInt(guessInput.value.trim(), 10);

    // Validation: Check range and non-numbers
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Enter a valid number between 1 and 100!";
        guessInput.value = "";
        return;
    }

    // Validation: Avoid duplicates
    if (guessesHistory.includes(userGuess)) {
        feedback.textContent = `You already guessed ${userGuess}!`;
        guessInput.value = "";
        return;
    }

    // Push guess to array and sync display immediately
    guessesHistory.push(userGuess);
    updateStats();

    // Win / Loss / Hint checks
    if (userGuess === targetNumber) {
        feedback.textContent = `🎉 Correct! The number was ${targetNumber}!`;
        endGame();
    } else if (guessesHistory.length >= MAX_ATTEMPTS) {
        feedback.textContent = `💀 Out of tries! The number was ${targetNumber}.`;
        endGame();
    } else if (userGuess < targetNumber) {
        feedback.textContent = "Too low! Try higher ⬆";
    } else {
        feedback.textContent = "Too high! Try lower ⬇";
    }

    guessInput.value = "";
    guessInput.focus();
});

function endGame() {
    guessInput.disabled = true;
    document.getElementById("submit-btn").disabled = true;
    restartBtn.classList.remove("hidden");
}

// 5. Restart / Reset Game
restartBtn.addEventListener("click", () => {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    guessesHistory = [];
    updateStats(); // Resets count to 0 and history to "None"

    feedback.textContent = "Make your first guess!";
    guessInput.disabled = false;
    document.getElementById("submit-btn").disabled = false;
    restartBtn.classList.add("hidden");
    guessInput.value = "";
    guessInput.focus();
});