document.addEventListener("click", () => {
        if (event.target.tagName.toLowerCase() !== "button" ||
       // event.target.classList.contains("AC") ||
        event.target.classList.contains("enter") ||
        overflowStatus == true || 
        event.target.classList.contains("operations"))
        {
        return;
    }
    else if(event.target.classList.contains("AC")) {
        display.textContent = "";
        overflowStatus = false;
        displayString = "";
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
let operationChosen = false;
let displayString = "";
let overflowStatus = false;


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
 
 
 if (displayString.length > 10) {
    display.textContent = "";
    display.textContent = "You broke me!";
    overflowStatus = true;
    displayString = ""; 
 }
 else {
 display.textContent += content;
 displayString += content;
 console.log(displayString);
 }

}