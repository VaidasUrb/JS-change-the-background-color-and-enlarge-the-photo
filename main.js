let btn = document.querySelector("button"); //paspaudus mygtuka sugeneruoja atsitiktine spalva ir pakeicia background
btn.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) +
        "," + Math.round(Math.random() * 255) +
        "," + Math.round(Math.random() * 255) + ")";

})


let image = document.querySelector("img");
image.addEventListener("mouseenter", function () {
    image.style.width = "400px";
})
image.addEventListener("mouseleave", function () {
    image.style.width = "50px";
})

let pabaiga = document.querySelector("h1");
pabaiga.addEventListener("mousedown", function () {
    pabaiga.style.color = "rgb(" + Math.round(Math.random() * 255) +
        "," + Math.round(Math.random() * 255) +
        "," + Math.round(Math.random() * 255) + ")";
})

pabaiga.addEventListener("mouseup", function () {
    pabaiga.style.color = "black";
})