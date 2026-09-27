const searchInput = document.querySelector("#search-input");
const listItems = document.querySelectorAll(".user-item");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    let matchesCount = 0;

    listItems.forEach((item) => {
        const itemText = item.textContent.toLowerCase();


    })
});