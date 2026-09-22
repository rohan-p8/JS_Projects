const reviews = [{
        id: 1,
        name: "Suhaniii",
        job: "Web Developer",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
    },

    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen."
    },

    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        text: "Sriracha tumblr polaroid synth butcher heirloom. Subway tile poke farm-to-table green juice butcher cold-pressed."
    },

    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");


let curItem = 0;


function showPerson(index) {
    const item = reviews[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}



window.addEventListener("DOMContentLoaded", () => {
    showPerson(curItem);
});


next.addEventListener("click", () => {
    curItem = (curItem + 1) % reviews.length;
    showPerson(curItem);
});


prev.addEventListener("click", () => {
    curItem = (curItem - 1 + reviews.length) % reviews.length;
    showPerson(curItem);
});



randomBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    if (randomIndex === curItem) {
        randomIndex = (randomIndex + 1) % reviews.length;
    }

    curItem = randomIndex;
    showPerson(curItem);
});