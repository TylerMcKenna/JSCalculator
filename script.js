let screen = document.getElementById("screen");
let sign, lhs, rhs, operator;

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

    /* Let left hand side be result and 
    everything except sign be base vals */
}

function changeSign() {
    if (sign === "+") {
        sign = "-"
        screen.innerText = sign + screen.innerText;
    } else {
        sign = "+"
        screen.innerText = screen.innerText.substring(1);
    }
}

function initialize() {
    document.getElementById("screen").innerText = "0";
    console.log(`Current text is: ${document.getElementById("screen").innerText}`);
    
    sign = "+";
    lhs = 0;
    rhs = 0;
    operator = "";
}

// left and right hand side side