const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {

    const header = e.target.closest("header");

    if (!header)
        return;

    const item = header.parentElement;
    const body = header.nextElementSibling;

    const isActive = item.classList.contains("active");


    const allItem = accordian.querySelectorAll(".item");

    allItem.forEach((otherItem) => {

        otherItem.classList.remove("active");

        const otherBody = otherItem.querySelector(".body");
        otherBody.computedStyleMap.maxHeight = null;
    });


    if (!isActive) {
        item.classList.add("active");

        body.style.maxHeight = body.scrollHeight + "px";
    }

});