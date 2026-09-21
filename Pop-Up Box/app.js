const openBtn = document.querySelector("#open-modal-btn");

const closeBtn = document.getElementById("close-modal-btn");
const cancelBtn = document.getElementById("cancel-btn");
const overlay = document.getElementById("modal-overlay");


function openModal() {
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
}


openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
        closeModal();
    }
});