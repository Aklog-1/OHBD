
const simpleFlipSelector = document.querySelector(".simple");
const hexFlipSelector = document.querySelector(".hex");

const bgColorName = document.querySelector(".bgColorName");
const flippingBtn = document.querySelector("button");


// ====== current flipper, simple or hex? =========
simpleFlipSelector.addEventListener("click", event => {
    simpleFlipSelector.classList.add("currentFlipper");
    hexFlipSelector.classList.remove("currentFlipper");
});

hexFlipSelector.addEventListener("click", event => {
    hexFlipSelector.classList.add("currentFlipper");
    simpleFlipSelector.classList.remove("currentFlipper");
});



// ======= main ==========
flippingBtn.addEventListener("click", event => {
    if (simpleFlipSelector.classList.contains("currentFlipper")) {

        simpleColorFlipper();
    } else if (hexFlipSelector.classList.contains("currentFlipper")) {
        
        hexColorFlipper();
    } 
});






// ======= simple flipper =========
const simpleFlipperArray = ["purple", "salmon", "sandybrown", 
"seagreen", "silver", "steelblue", "thistle", "wheat", "yellowgreen", 
"yellow", "azure", "brown", "coral", "crimson",  "darkolivegreen", "olive", "teal"]

const simpleColorFlipper = () => {
    const randomBgColor = simpleFlipperArray[randomIndex(simpleFlipperArray)];

    document.body.style.backgroundColor = randomBgColor;
    bgColorName.textContent = randomBgColor;
}


// ======== infinite hex flipper ===========
const hexFlipperArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const hexColorFlipper = () => {
    var hexColor = "#";

    for(i=0; i < 6; i++){
        const hexDigit = hexFlipperArray[randomIndex(hexFlipperArray)];
        hexColor += hexDigit;
    }

    document.body.style.backgroundColor = hexColor;
    bgColorName.textContent = hexColor;
}


// ======= random index =======
const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}