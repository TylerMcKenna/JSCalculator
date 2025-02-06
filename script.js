let screen = document.getElementById("screen");
// lhs rhs = left right hand side
let sign, lhs, rhs, operator;

function initialize() {
    document.getElementById("screen").innerText = "";
    
    sign = "+";
    lhs = "";
    rhs = "";
    operator = "";
}

function numberPressed(numButton) {
    // Prevents entering numbers if = was just pressed
    // and stops the length of the screen at 13 characters
    if (operator !== "=" && screen.innerText.length < 13) {
        numString = numButton.innerText;
        screen.innerText = screen.innerText + numString;
        rhs = rhs + numButton.innerText; 
    }
}

// Still don't prevent nu
function dotPressed() {
    // Prevents entering decimal point if = was just pressed
    // and repeat and multiple decimals
    if (!rhs.includes(".") && operator !== "=") {
        screen.innerText = screen.innerText + ".";
        rhs = rhs + ".";
    }
}

function operatorPressed(operatorButton) {
    // Prevents two operators in a row
    // and stops the length of the screen at 13 character
    // while still allowing =
    if (!["+", "-", "*", "/"].includes(screen.innerText.at(-1)) && 
        (operatorButton.innerText === "=" || screen.innerText.length < 13)
    ) {
        screen.innerText = screen.innerText + operatorButton.innerText
        if (operator === "") {
            lhs = rhs;
        } else if (operator !== "=") {
            lhs = operate(lhs, rhs, operator);
        }
        rhs = "";
        
        operator = operatorButton.innerText;
        if (operator === "=") {
            screen.innerText = lhs;
        }
    }
}

/*
 *              UTILITY FUNCTIONS
 */

// Passed two numbers and and operator, computes.
function operate(leftNum, rightNum, operator) {
    let result;
    leftNum = Number(leftNum);
    rightNum = Number(rightNum);
    switch (operator) {
        case "+":
            result = add(leftNum, rightNum);
            break;
        case "-":
            result = subtract(leftNum, rightNum);
            break;
        case "*":
            result = multiply(leftNum, rightNum);
            break;
        case "/":
            result = divide(leftNum, rightNum);
            break;
        }
    return result
}

// Number cast removes trailing zeros
function add(num1, num2) {
    return Number(parseFloat(num1 + num2).toFixed(4));
}

function subtract(num1, num2) {
    return Number(parseFloat(num1 - num2).toFixed(4));
}

function multiply(num1, num2) {
    return Number(parseFloat(num1 * num2).toFixed(4));
}

function divide(num1, num2) {
    if (num2 == 0) {
        return NaN;
    } else {
        return Number(parseFloat(num1 / num2).toFixed(4));
    }
}