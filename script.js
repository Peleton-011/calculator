let display = "0";
//current operation to be performed
//0 -> None, awaiting operation
//1 -> Subtraction
//2 -> Addition
//3 -> Division
//4 -> Multiplication
let currOperation = 0;

const calculator = document.querySelector("main");

function setup() {

    //Equals button
    const eqlBtn = document.querySelector(".equals");
    eqlBtn.addEventListener("click", e => {
        operate();
    });

    //Divide button
    const divBtn = document.querySelector(".divide");
    divBtn.addEventListener("click", e => {
        changeOperation(3);
    });

    //Multiply button
    const mltBtn = document.querySelector(".multiply");
    mltBtn.addEventListener("click", e => {
        changeOperation(4);
    });

    //Subtract button
    const subBtn = document.querySelector(".subtract");
    subBtn.addEventListener("click", e => {
        changeOperation(1);
    });

    //Add button
    const addBtn = document.querySelector(".add");
    addBtn.addEventListener("click", e => {
        changeOperation(2);
    });

    //Mouse tracking and dragging of the calculator
    calculator.addEventListener("mousedown", ()=>{
        calculator.classList.add("active");
        calculator.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", ()=>{
        calculator.classList.remove("active");
        calculator.removeEventListener("mousemove", onDrag);
    });
}

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(calculator);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    calculator.style.left = `${leftVal + movementX}px`;
    calculator.style.top = `${topVal + movementY}px`;
}

function updateDisplay(num) {
    if (display == "0") {
        display = num;
        return;
    }
    display += num;
    return;
}

function changeOperation(operation) {
    console.log(operation);
}

function operate() {

}

setup();