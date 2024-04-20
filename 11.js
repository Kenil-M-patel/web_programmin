// Function to perform addition
function add(num1, num2) {
    let fun = num1 + num2
    console.log("addition " + fun )
}

// Function to perform subtraction
function subtract(num1, num2) {
    let fun = num1 - num2
    console.log("subtract "+ fun)
}

// Function to perform multiplication
function multiply(num1, num2) {
    let fun = num1 * num2
    console.log("multiply "+ fun)
}

// Function to perform division
function divide(num1, num2) {
    if (num2 !== 0) {
        let fun = num1 / num2
        console.log("division "+ fun)
    } else {
        return "Cannot divide by zero!";
    }
}



var number1 = 10;
var number2 = 5;

add(number1, number2);
subtract(number1, number2);
multiply(number1, number2);
divide(number1, number2);

