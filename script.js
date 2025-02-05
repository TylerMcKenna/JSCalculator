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

function operate(lhs, rhs, operator) {
    switch (operand) {
        case "+":
            add(lhs, rhs);
            break;
        case "-":
            add(lhs, rhs);
            break;
        case "*":
            add(lhs, rhs);
            break;
        case "/":
            add(lhs, rhs);
            break;
    }
}

// left and right hand side side


let lhs = 0;
let rhs = 0;
let operator = "";