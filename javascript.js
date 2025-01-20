let currentValue ="";
let previousValue = "";
let equationCompleted = false;
let dec;
let firstNumber;
let firstNumberEntered = false;
let secondNumber;
let enteredNumber = "";
let finalAnswer;
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

enterButton.forEach((enter) => enter.addEventListener("click", () => {{
    enterPressed();
}}));

clearButton.forEach((cleared) => cleared.addEventListener("click", () => {{
    clearDisplay();

}}));
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
 dec = num1 / num2
 console.log(dec);
 return dec.toFixed(5);
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
    if (currentValue.length <= 10) {
        if (firstNumberEntered == true) {
            display.textContent = "";
            display.textContent += content;
            firstNumberEntered = false;
            currentValue += content;
            
        }
 else {display.textContent += content;
    currentValue += content;
 }
    }


 }

 function populateOperations (operation) {
    if (equationCompleted == false) {
    previousValue = currentValue;
    currentValue = "";
    display.textContent = operation;
    firstNumberEntered = true;
    operationInp = operation;
    }
    else {
        currentValue = "";
    display.textContent = operation;
    firstNumberEntered = true;
    operationInp = operation;
    }

 }

 function enterPressed() {
    console.log(previousValue);
    console.log(currentValue);
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operationInp == "+") {
        finalAnswer = add(previousValue,currentValue);
        display.textContent = finalAnswer;
        
    }
    else if (operationInp == "-") {
        finalAnswer = subtract(previousValue,currentValue);
        display.textContent = finalAnswer;
       
    }
    else if (operationInp == "x") {
        finalAnswer =  multiply(previousValue,currentValue);
        display.textContent = finalAnswer;
        
    }
    else if (operationInp == "/") {
        finalAnswer =  divide(previousValue,currentValue);
        display.textContent = finalAnswer;
        
    }
    previousValue = finalAnswer;
    currentValue = "";
    firstNumberEntered = true;
    equationCompleted = true;
    

 }

 function clearDisplay() {
    display.textContent = "";
    previousValue = "";
    currentValue = "";
    equationCompleted = false;
 }