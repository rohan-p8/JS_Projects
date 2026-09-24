const menu = [{
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300&auto=format&fit=crop&q=80",
        desc: "Fluffy stack of pancakes topped with whipped farm butter and pure Vermont maple syrup."
    },

    {
        id: 2,
        title: "Diner Double Cheeseburger",
        category: "lunch",
        price: 13.99,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80",
        desc: "Two smash patties with American cheese, pickles, onions, and house burger sauce."
    },

    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=80",
        desc: "Decadent chocolate fudge shake served with brownies, oreos, and whipped cream."
    },

    {
        id: 4,
        title: "Country Bacon Omelet",
        category: "breakfast",
        price: 12.50,
        img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=300&auto=format&fit=crop&q=80",
        desc: "Farm fresh eggs folded with crisp applewood-smoked bacon and melted sharp cheddar."
    },
    {
        id: 5,
        title: "Eggplant Parmesan",
        category: "dinner",
        price: 18.25,
        img: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=300&auto=format&fit=crop&q=80",
        desc: "Breaded cutlets layered with fresh mozzarella, basil marinara, and shaved pecorino."
    },
    {
        id: 6,
        title: "Classic Club Sandwich",
        category: "lunch",
        price: 11.99,
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&auto=format&fit=crop&q=80",
        desc: "Roasted turkey, smoked ham, crisp lettuce, ripe tomatoes, and herb mayo on toasted sourdough."
    }
];


const menuGrid = document.getElementById("menu-grid");
const filterBtns = document.querySelectorAll(".filter-btn");

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `
            <article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="photo" />
                <div class="item-info">
                <header class="item-header">
                    <h4>${item.title}</h4>
                    <span class="price">$${item.price.toFixed(2)}</span>
                </header>
                <p class="item-text">${item.desc}</p>
                </div>
            </article>
        `;
    });

    displayMenu = displayMenu.join("");
    menuGrid.innerHTML = displayMenu;
}


filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.category;

        filterBtns.forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (category === "all") {
            displayMenuItems(menu);
        } else {
            const menuCategory = menu.filter((item) => item.category === category);
        }
    });
});


displayMenuItems(menu);