const products = [{
        id: 1,
        name: "GeForce RTX 4080",
        category: "GPU",
        brand: "NVIDIA",
        price: 999
    },

    { id: 2, name: "GeForce RTX 4060", category: "GPU", brand: "NVIDIA", price: 299 },
    { id: 3, name: "Radeon RX 7900 XTX", category: "GPU", brand: "AMD", price: 899 },
    { id: 4, name: "Radeon RX 7600", category: "GPU", brand: "AMD", price: 269 },
    { id: 5, name: "Core i9-14900K", category: "CPU", brand: "Intel", price: 549 },
    { id: 6, name: "Core i5-14600K", category: "CPU", brand: "Intel", price: 319 },
    { id: 7, name: "Ryzen 9 7950X", category: "CPU", brand: "AMD", price: 599 },
    { id: 8, name: "Ryzen 5 7600X", category: "CPU", brand: "AMD", price: 229 },
    { id: 9, name: "Vengeance DDR5 32GB", category: "RAM", brand: "Corsair", price: 119 },
    { id: 10, name: "Dominator Titanium 64GB", category: "RAM", brand: "Corsair", price: 289 }

];

const grid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const matchCount = document.getElementById("match-count");
const priceSlider = document.getElementById("price-range");
const priceDisplay = document.getElementById("price-display");
const resetBtn = document.getElementById("reset-filter");
const categoryBoxes = document.querySelectorAll('input[name="category"]');
const brandBoxes = document.querySelectorAll('input[name="brand"]');