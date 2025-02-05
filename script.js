let screen = document.getElementById("screen");
// lhs rhs = left right hand side
let sign, lhs, rhs, operator;

function initialize() {
    document.getElementById("screen").innerText = "";
    console.log(`Current text is: ${document.getElementById("screen").innerText}`);
    
    sign = "+";
    lhs = "";
    rhs = "";
    operator = "";
}

// ???????????? Maybe change to each number not whole expression
// function changeSign() {
//     if (sign === "+") {
//         sign = "-"
//         screen.innerText = sign + screen.innerText;
//     } else {
//         sign = "+"
//         screen.innerText = screen.innerText.substring(1);
//     }
// }

function numberPressed(numButton) {
    numString = numButton.innerText;
        screen.innerText = screen.innerText + numString;
        rhs = rhs + numButton.innerText; 

}

function operatorPressed(operatorButton) {
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

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}