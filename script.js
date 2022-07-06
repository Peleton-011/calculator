let displayText = "0";
let miniDisplayText = "";
let opDisplayText = "";
const display = document.querySelector(".display");
const miniDisplay = document.querySelector(".tiny-display");
const operationDisplay = document.querySelector(".operation-display");
//current operation to be performed
//0 -> None, awaiting operation
//1 -> Subtraction
//2 -> Addition
//3 -> Division
//4 -> Multiplication
let currOperation = 0;

const calculator = document.querySelector("main");

function setup() {
    //Clear button
    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", e => {
        displayText = "0";
        currOperation = "0";
        updateDisplay();
    })

    //Backspace button
    const backspaceBtn = document.querySelector(".backspace");
    backspaceBtn.addEventListener("click", e => {
        let len = displayText.length
        if (len == 1) {
            displayText = "0";
        } else {
            displayText = displayText.slice(0, len - 1);
        }
        updateDisplay();
    })

    //All number buttons
    const numBtns = document.querySelectorAll(".num");
    numBtns.forEach((numBtn) => {
        numBtn.addEventListener("click", (e) => {
            updateDisplay(Number(numBtn.textContent));
        });
    });

    //Equals button
    const eqlBtn = document.querySelector(".equals");
    eqlBtn.addEventListener("click", (e) => {
        operate();
    });

    //Divide button
    const divBtn = document.querySelector(".divide");
    divBtn.addEventListener("click", (e) => {
        addOperation(3);
    });

    //Multiply button
    const mltBtn = document.querySelector(".multiply");
    mltBtn.addEventListener("click", (e) => {
        addOperation(4);
    });

    //Subtract button
    const subBtn = document.querySelector(".subtract");
    subBtn.addEventListener("click", (e) => {
        addOperation(1);
    });

    //Add button
    const addBtn = document.querySelector(".add");
    addBtn.addEventListener("click", (e) => {
        addOperation(2);
    });

    //Mouse tracking and dragging of the calculator
    calculator.addEventListener("mousedown", () => {
        calculator.classList.add("active");
        calculator.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", () => {
        calculator.classList.remove("active");
        calculator.removeEventListener("mousemove", onDrag);
    });
}

//Set the position of the calculator when dragging
function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(calculator);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    calculator.style.left = `${leftVal + movementX}px`;
    calculator.style.top = `${topVal + movementY}px`;
}

//Refresh display, if a number is passed, add it to the displayed number
function updateDisplay(num) {
    miniDisplay.textContent = miniDisplayText;
    operationDisplay.textContent = opDisplayText;

    if (num == null) {
        display.textContent = displayText;
        return;
    }
    if (displayText.length > 9){
        return;
    }

    displayText = Number(displayText);
    displayText *= 10;
    displayText += num;
    displayText = String(displayText);

    display.textContent = displayText;
}

//Change the current operation to the one passed
function addOperation(operation) {
    if (miniDisplayText) {
        operate();
    }
    currOperation = operation;
    miniDisplayText = displayText;
    displayText = "0";
    changeOperation()
    updateDisplay();
    updateDisplay();
}

//Execute the operation
function operate() {
    if (!currOperation){
        return;
    }
    let a = toNumber(miniDisplayText);
    let b = toNumber(displayText);
    switch (currOperation) {
        case 1:
            displayText = subtract(a, b);
            break;
    
        case 2:
            displayText = add(a, b);
            break;
    
        case 3:
            displayText = divide(a, b);
            break;
    
        case 4:
            displayText = multiply(a, b);
            break;            
                        
        default:
            break;
    }
    miniDisplayText = "";
    opDisplayText = "";
    currOperation = 0;
    updateDisplay();
}

//Changes current operation in display
function changeOperation() {
    switch (currOperation) {
        case 1:
            opDisplayText = "-";
            break;
    
        case 2:
            opDisplayText = "+";
            break;
    
        case 3:
            opDisplayText = "/";
            break;
    
        case 4:
            opDisplayText = "·";
            break;            
                        
        default:
            opDisplayText = "";
            break;
    }
}

//Add function
function add(a, b){
    return a + b;
}

//Subtract function
function subtract(a, b) {
    return a - b;
}

//Multiply function
function multiply(a, b) {
    return a * b;
}

//Divide function
function divide (a, b) {
    if(b == 0) {
        return "Cant divide by your iq";
    }
    return a / b;
}

//Turns to number
function toNumber(str) {
    return Number(str);
}

setup();
