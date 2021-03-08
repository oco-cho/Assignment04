// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
function dataCollection() {
    alert('Let\'s calculate!')
    let num1 = Number(prompt('Enter the first number.'));
    let num2 = Number(prompt('Enter the second number'));
    let operation = prompt('What operation would you like to perform? (Enter "add", "subtract", "multiply", or "divide")');

    // CHECK TO SEE WHAT OPERATION THEY'RE USING
    switch (operation) {
        case "add":
            alert(add(num1, num2, 'add'));
            tryAgain();
            break;
        case "subtract":
            alert(subtract(num1, num2, 'subtract'));
            tryAgain();
            break;
        case "multiply":
            alert(multiply(num1, num2, 'multiply'));
            tryAgain();
            break;
        case "divide":
            alert(divide(num1, num2, 'divide'));
            tryAgain();
            break;
        default:
            alert('Sorry, your entry was invalid. Valid entries are: "add", "subtract", "multiply", "divide". Please write out the operation. Do not use symbols.');
            dataCollection();
            break;
    }
}

// WOULD YOU LIKE TO CONTINUE
function tryAgain() {
    let tryAgainValue;
    tryAgainValue = prompt('Would you like to continue (y/n)', 'y');
    if (tryAgainValue === 'y') {
        dataCollection();
    } else {
        alert('Thank you for using the Basic Calculator.');
    }

}

// CALL THE APPROPRIATE FUNCTION
dataCollection();









