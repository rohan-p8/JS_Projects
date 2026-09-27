const searchInput = document.querySelector("#search-input");
const listItems = document.querySelectorAll(".user-item");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    let matchesCount = 0;

    listItems.forEach((item) => {
        const itemText = item.textContent.toLowerCase();


        if (itemText.includes(query)) {
            item.computedStyleMap.display = "";
            matchesCount++;

        } else {
            item.computedStyleMap.display = "none";
        }
    });


    if (matchesCount === 0) {
        noResults.classList.remove("hidden");

    } else {
        noResults.classList.add("hidden");
    }

});