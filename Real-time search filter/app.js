// const searchInput = document.querySelector("#search-input");
// const listItems = document.querySelectorAll(".user-item");
// const noResults = document.getElementById("no-results");

// searchInput.addEventListener("input", (e) => {
//     const query = e.target.value.toLowerCase().trim();
//     let matchesCount = 0;

//     listItems.forEach((item) => {
//         const itemText = item.textContent.toLowerCase();


//         if (itemText.includes(query)) {
//             item.computedStyleMap.display = "";
//             matchesCount++;

//         } else {
//             item.computedStyleMap.display = "none";
//         }
//     });


//     if (matchesCount === 0) {
//         noResults.classList.remove("hidden");

//     } else {
//         noResults.classList.add("hidden");
//     }

// });

const searchInput = document.getElementById("search-input");
const listItems = document.querySelectorAll(".user-item");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", (e) => {
    // 1. Normalize the search query to lowercase and trim extra spaces
    const query = e.target.value.toLowerCase().trim();
    let matchesCount = 0;

    // 2. Loop through every <li> item on the page
    listItems.forEach((item) => {
        // 3. Normalize the item's text to lowercase for a case-insensitive check
        const itemText = item.textContent.toLowerCase();

        // 4. Check if the string contains the query characters
        if (itemText.includes(query)) {
            item.style.display = ""; // Reset to default display (visible)
            matchesCount++;
        } else {
            item.style.display = "none"; // Hide non-matching element
        }
    });

    // 5. Toggle the "no results" label if no items matched
    if (matchesCount === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
});