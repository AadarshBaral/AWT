const buttons = document.getElementsByTagName("button");
const expression = document.querySelector(".expression");
const answer = document.querySelector(".answer");
let inputStr = '';

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;
        handleInput(value);
    });
});
function roundResult(value) {
    return parseFloat(Number(value).toFixed(9));
}

function handleInput(value) {
    if (value === "=") {
        try {
            const result = eval(inputStr);
            const rounded = roundResult(result);
            answer.innerText = rounded;
            inputStr = '';
        } catch (err) {
            answer.innerText = "Error";
        }
    } else if (value === "C") {
        inputStr = '';
        expression.innerText = '';
        answer.innerText = '';
    } else {
        inputStr += value;
        answer.innerText = '';
    }

    expression.innerText = inputStr;
}
