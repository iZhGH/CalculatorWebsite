document.addEventListener("click", () => {
        if (event.target.tagName.toLowerCase() !== "button" ||
        event.target.classList.contains("AC") ||
        event.target.classList.contains("enter") || 
        event.target.classList.contains("operations"))
        {
        return;
    }
    else {
        let displayContent = event.target.textContent;
        populateDisplay(displayContent);
    }
})

let updateDisplay;
let firstNumber;
let secondNumber;
let operation;
let display = document.querySelector(".displayText");

// OPERATIONS
function add (num1,num2) {
return  num1 + num2
}


function subtract (num1,num2) {
return num1 - num2
}

function multiply (num1,num2) {
return num1 * num2
}

function divide (num1,num2) {
return num1 / num2
}

console.log(add(3,3));
console.log(subtract(3,3));
console.log(multiply(3,3));
console.log(divide(3,3));


function operate(operation, firstNumber, secondNumber) {
    if (operation == "add") {
        add(firstNumber,secondNumber);
    }
    else if (operation == "subtract") {
        subtract(firstNumber,secondNumber);
    }
    else if (operation == "multiply") {
        multiply(firstNumber,secondNumber);
    }
    else if (operate == "divide") {
        divide(firstNumber,secondNumber);
    }
    else {
        console.log("Error occured on operate();")
    }
}


function populateDisplay (content) {
const escapedClass = CSS.escape(content);
 updateDisplay = document.querySelector(`.${escapedClass}`)
 display.textContent = content;
}