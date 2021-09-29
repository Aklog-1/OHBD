
const mealList = document.querySelectorAll(".meal")
const breakfastBtn = document.querySelector(".breakfast");
const lunchBtn = document.querySelector(".lunch");
const shakeBtn = document.querySelector(".shakes");
const allBtn = document.querySelector(".all");

const breakfastMeals = document.querySelectorAll(".breakfast-meal");
const lunchMeals = document.querySelectorAll(".lunch-meal");
const shakeMeals = document.querySelectorAll(".shake-meals");

breakfastBtn.addEventListener("click", () => {
    breakfastMeals.forEach(meal => {
        meal.classList.remove("display");
    })
    lunchMeals.forEach(meal => {
        meal.classList.add("display");
    });
    shakeMeals.forEach(meal => {
        meal.classList.add("display");
    })
});
shakeBtn.addEventListener("click", () => {
    shakeMeals.forEach(meal => {
        meal.classList.remove("display");
    })
    lunchMeals.forEach(meal => {
        meal.classList.add("display");
    });
    breakfastMeals.forEach(meal => {
        meal.classList.add("display");
    })
});
lunchBtn.addEventListener("click", () => {
    lunchMeals.forEach(meal => {
        meal.classList.remove("display");
    })
    breakfastMeals.forEach(meal => {
        meal.classList.add("display");
    });
    shakeMeals.forEach(meal => {
        meal.classList.add("display");
    })
});
allBtn.addEventListener("click", () => {
    mealList.forEach(meal => {
        meal.classList.remove("display")
    })
})