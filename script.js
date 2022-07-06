let displayText = "0";
const display = document.querySelector(".display");
//current operation to be performed
//0 -> None, awaiting operation
//1 -> Subtraction
//2 -> Addition
//3 -> Division
//4 -> Multiplication
let currOperation = 0;

const calculator = document.querySelector("main");

function setup() {
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
        changeOperation(3);
    });

    //Multiply button
    const mltBtn = document.querySelector(".multiply");
    mltBtn.addEventListener("click", (e) => {
        changeOperation(4);
    });

    //Subtract button
    const subBtn = document.querySelector(".subtract");
    subBtn.addEventListener("click", (e) => {
        changeOperation(1);
    });

    //Add button
    const addBtn = document.querySelector(".add");
    addBtn.addEventListener("click", (e) => {
        changeOperation(2);
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

function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(calculator);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    calculator.style.left = `${leftVal + movementX}px`;
    calculator.style.top = `${topVal + movementY}px`;
}

function updateDisplay(num) {
    if (displayText.length > 9){
        return;
    }
    displayText = Number(displayText);
    displayText *= 10;
    displayText += num;
    displayText = String(displayText);
    display.textContent = displayText;
}

function changeOperation(operation) {
    console.log(operation);
}

function operate() {}

setup();
