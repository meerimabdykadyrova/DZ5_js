// Counter
let counterValue = 0;
const counterResultElement = document.getElementById('counterResult');

function increment() {
    counterValue++;
    counterResultElement.textContent = counterValue;
}

function decrement() {
    counterValue--;
    counterResultElement.textContent = counterValue;
}

// Calculate
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '=':
            result = num1;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('calcResult').textContent = result;
}

// Show dialog box
const showPromptButton = document.getElementById('showPrompt');
const outputElement = document.getElementById('output');

showPromptButton.addEventListener('click', function() {
    const userInput = prompt('Enter something:');
    outputElement.textContent = userInput;
});
