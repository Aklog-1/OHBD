

const QandA = document.querySelectorAll(".QandA");
const answers = document.querySelectorAll(".answers");
const toggleButtons = document.querySelectorAll("button");
console.log(toggleButtons)

function showAnswer() {

    QandA.forEach((question, index) => {
        let button = toggleButtons[index];
        console.log(button.textContent)
        button.addEventListener("click", () => {
            question.classList.toggle("showAnswer");

            switch (button.textContent) {
                case "+":
                    button.textContent = "-";
                    break;
                default:
                    button.textContent = "+"
            }
        })
    })
    
}
showAnswer();
