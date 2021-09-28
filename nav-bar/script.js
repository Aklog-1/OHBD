

const menu = document.querySelector(".menu");
const navigationList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
    navigationList.classList.toggle("show-nav-list")
})