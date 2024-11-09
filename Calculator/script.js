let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (displayValue === '0' || displayValue === '') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function chooseOperation(operation) {
    if (displayValue === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (currentOperation) {
        secondOperand = parseFloat(displayValue);
        displayValue = performCalculation(currentOperation, firstOperand, secondOperand).toString();
        firstOperand = parseFloat(displayValue);
    }
    currentOperation = operation;
    displayValue = '';
    updateDisplay();
}

function performCalculation(operation, a, b) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? 'Error' : a / b;
        default: return b;
    }
}

function calculateResult() {
    if (currentOperation && firstOperand !== null) {
        secondOperand = parseFloat(displayValue);
        displayValue = performCalculation(currentOperation, firstOperand, secondOperand).toString();
        firstOperand = null;
        currentOperation = null;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayValue || '0';
}
