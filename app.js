let bars = document.querySelector("#bars");
let close = document.querySelector("#close");
let navbar = document.querySelector("#navbar");
if (bars) {
    bars.addEventListener("click", () => {
        navbar.classList.add("show");
    });
}
if (close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("show");
    });
}
function load() {
    document.querySelector(".loaderMain").style.display = "none";
}
