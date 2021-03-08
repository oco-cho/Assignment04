// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    let total;
    if (operation === 'add') {
        total = num1 + num2;
    } else if (operation === 'subtract') {
        total = num1 - num2;
    } else if (operation === 'multiply') {
        total = num1 * num2;
    } else if (operation === 'divide') {
        total = num1 / num2;
    }
    return total;
}

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
function add(num1, num2, operation) {
    return calculate(num1, num2, operation);
}

// SUBTRACT FUNCTION
function subtract(num1, num2, operation) {
    return calculate(num1, num2, operation);
}

// MULTIPLY FUNCTION
function multiply(num1, num2, operation) {
    return calculate(num1, num2, operation);
}

// DIVIDE FUNCTION
function divide(num1, num2, operation) {
    return calculate(num1, num2, operation);
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide};

