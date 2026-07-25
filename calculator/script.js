const buttons = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const utility = document.querySelector(".utility-row");

const display = document.getElementById("display");
const equals = document.getElementById("equals");

let firstNumber = null;
let operator = null;
let currentInput = "";
let resultDisplayed = false;



function updateDisplay(value) {
    display.value = value || "0";
}



buttons.addEventListener("click", (e) => {

    if (!e.target.matches("button")) return;

    let value = e.target.value;

   
    if (resultDisplayed) {
        currentInput = "";
        resultDisplayed = false;
    }

   
    if (value === "." && currentInput.includes(".")) return;

    currentInput += value;
    updateDisplay(currentInput);
});


operators.addEventListener("click", (e) => {

    if (!e.target.matches("button")) return;

    
    if (currentInput === "" && firstNumber === null) return;

    if (firstNumber !== null && currentInput !== "") {
        calculate();
    }

    firstNumber = Number(currentInput || firstNumber);
    operator = e.target.id;
    currentInput = "";
});



utility.addEventListener("click", (e) => {

    switch (e.target.id) {

        case "Clear":
            firstNumber = null;
            operator = null;
            currentInput = "";
            resultDisplayed = false;
            updateDisplay("0");
            break;

        case "Back":
            if (resultDisplayed) return;
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
            break;

        case "Percent":

            if (currentInput !== "") {
                currentInput = String(Number(currentInput) / 100);
                updateDisplay(currentInput);
            }

            break;
    }

});



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b === 0) {
        return "Error";
    }

    return a / b;
}

function modulus(a, b) {
    return a % b;
}


function calculate() {

    if (firstNumber === null || operator === null || currentInput === "")
        return;

    let secondNumber = Number(currentInput);

    let answer;

    switch (operator) {

        case "+":
            answer = add(firstNumber, secondNumber);
            break;

        case "-":
            answer = subtract(firstNumber, secondNumber);
            break;

        case "*":
            answer = multiply(firstNumber, secondNumber);
            break;

        case "/":
            answer = divide(firstNumber, secondNumber);
            break;

        case "%":
            answer = modulus(firstNumber, secondNumber);
            break;
    }

    updateDisplay(answer);

    firstNumber = answer;
    currentInput = String(answer);

    operator = null;
    resultDisplayed = true;
}

equals.addEventListener("click", calculate);