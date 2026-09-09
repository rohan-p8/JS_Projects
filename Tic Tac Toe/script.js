let cells = document.querySelectorAll(".cell");

let resetBtn = document.querySelector("#reset");

let winnerText = document.querySelector("#msg");

let newGameBtn = document.querySelector("#newGame");

let turnO = true;

//2d array to represent the winning patterns
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableAllCells();
    msg.classList.add("hide");
}




cells.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;


        checkWinner();

    });
});


const disableAllCells = () => {
    for (let box of cells) {
        box.disabled = true;
    }
}

const enableAllCells = () => {
    for (let box of cells) {
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner) => {
    msg.innerText = "Congratulations! Winner is " + winner;
    msg.classList.remove("hide");
    disableAllCells();
}


const checkWinner = () => {

    for (let pattern of winningPatterns) {

        let pos1Val = cells[pattern[0]].innerText;
        let pos2Val = cells[pattern[1]].innerText;
        let pos3Val = cells[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {

                showWinner(pos1Val);

            }
        }
    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);