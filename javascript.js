let firstNumber;
let firstNumberEntered = false;
let secondNumber;
let enteredNumber = "";
let operationInp;
let display = document.querySelector(".displayText");

let numButtons = document.querySelectorAll(".number");
let opButtons = document.querySelectorAll(".operations");
let enterButton = document.querySelectorAll(".enter");
let clearButton = document.querySelectorAll(".AC");


numButtons.forEach((number) => number.addEventListener("click", () => {
    let displayContent = event.target.textContent;
    populateNumbers(displayContent);

}));

opButtons.forEach((operation) => operation.addEventListener("click", () => {
    let operatorContent = event.target.textContent;
    populateOperations(operatorContent);
}))





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


function populateNumbers (content) {
    if (enteredNumber.length <= 10) {
        if (firstNumberEntered == true) {
            enteredNumber = "";
            display.textContent = "";
            display.textContent += content;
            firstNumberEntered = false;
            
        }

    
    display.textContent += content;
    enteredNumber += content;
    }


 }

 function populateOperations (operation) {
    firstNumber = enteredNumber;
    enteredNumber = "";
    display.textContent = operation;
    firstNumberEntered = true;
    operationInp = operation;

 }