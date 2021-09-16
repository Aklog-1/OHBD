
const number = document.querySelector(".number");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");


decrease.addEventListener("click", event => {
    number.textContent--;

    numColor(number);
});

reset.addEventListener("click", event => {
    number.textContent = 0;

    number.style.color = "black";
});

increase.addEventListener("click", event => {
    number.textContent++;

    numColor(number);
});



const numColor = (number) => {
    if (number.textContent > 0) {
        number.style.color = "teal";
    } else if (number.textContent < 0) {
         number.style.color = "tomato";
    } else {
        number.style.color = "black";
    }
}