let flipColor = document.querySelector("#btn1");

btn1.addEventListener("click", function() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = color;
})