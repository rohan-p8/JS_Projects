let mode = document.querySelector("#mode");

let change = document.querySelector("#switch");

let para = document.querySelector("#para");

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

change.addEventListener("click", () => {

    para.innerText = "Text Changed";

});