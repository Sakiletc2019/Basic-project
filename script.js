let displayValue = ""; // To keep track of the display content

// Function to clear the display
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

// Function to append a number to the display
function appendNumber(number) {
    displayValue += number.toString();
    updateDisplay();
}

// Function to append an operator
function appendOperator(operator) {
    // Prevent adding operator if display is empty or last character is an operator
    if (displayValue === "" || isNaN(displayValue.slice(-1))) return;
    displayValue += operator;
    updateDisplay();
}

// Function to append a decimal point
function appendDecimal() {
    if (!displayValue.includes(".")) {
        displayValue += ".";
        updateDisplay();
    }
}

// Function to handle backspace
function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the expression
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

// Function to update the display content
function updateDisplay() {
    document.getElementById("display").innerText = displayValue || "0";
}

// Adding keyboard input functionality
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (key >= "0" && key <= "9") {
        appendNumber(key); // If the key is a number
    } else if (key === "+") {
        appendOperator("+");
    } else if (key === "-") {
        appendOperator("-");
    } else if (key === "*") {
        appendOperator("*");
    } else if (key === "/") {
        appendOperator("/");
    } else if (key === "Enter") {
        calculate(); // "Enter" key to calculate
    } else if (key === "Backspace") {
        backspace(); // "Backspace" key to delete the last entry
    } else if (key === "Escape") {
        clearDisplay(); // "Escape" key to clear the display
    } else if (key === ".") {
        appendDecimal(); // "." key for decimal point
    }
});


// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// Event listener for theme toggle button (if you add a button for it)
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);