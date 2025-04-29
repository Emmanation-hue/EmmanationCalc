// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        var display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}



