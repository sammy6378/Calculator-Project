
const input = document.querySelector('.input-box');
const num = document.querySelectorAll('.container');
const math = document.querySelectorAll('.operator');
const backspace = document.querySelector('.backspace');

let currentInput = ''; // Variable to store the current input value
let currentOperator = ''; // Variable to store the current operator

num.forEach((take) => {
    take.addEventListener('click', () => {
        currentInput += take.textContent;
        input.value = currentInput;
    });
});

math.forEach((calc) => {
    calc.addEventListener('click', () => {
        if (currentInput === '' || isNaN(parseInt(currentInput[currentInput.length - 1]))) {
            // If the last input is an operator or the input is empty, don't add another operator
            return;
        }
        currentOperator = calc.textContent;
        currentInput += ` ${currentOperator} `;
        input.value = currentInput;
    });
});

// Function to perform calculations
function calculate() {
    // Validate input
    if (!isInputValid()) {
        input.value = 'Invalid input';
        return;
    }

    const parts = currentInput.split(' ');
    const firstOperand = parseFloat(parts[0]);
    const secondOperand = parseFloat(parts[2]);

    switch (currentOperator) {
        case '+':
            input.value = firstOperand + secondOperand;
            break;
        case '-':
            input.value = firstOperand - secondOperand;
            break;
        case '*':
            input.value = firstOperand * secondOperand;
            break;
        case '/':
            input.value = firstOperand / secondOperand;
            break;
        case '%':
            input.value = firstOperand % secondOperand;
            break;
        default:
            break;
    }

    // Reset variables for the next calculation
    currentInput = input.value;
    currentOperator = '';
}

// Attach the calculate function to the '=' button
document.querySelector('.equal').addEventListener('click', calculate);

backspace.addEventListener('click', () => {
    currentInput = '';
    currentOperator = '';
    input.value = '';
});

document.querySelector('.delete').addEventListener('click', function() {
    // Get the input element
    var inputBox = document.querySelector('.input-box');

    // Get the current value of the input
    var currentValue = inputBox.value;

    // Remove the last character from the current value
    var newValue = currentValue.slice(0, -1);

    // Update the input box with the new value
    inputBox.value = newValue;

    // Update currentInput
    currentInput = newValue;
});

// Function to check if the input is a valid expression
function isInputValid() {
    const lastChar = currentInput[currentInput.length - 1];
    return !isNaN(parseFloat(lastChar)) || lastChar === '.';
}







   

