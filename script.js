const calculator = document.querySelector("main");

function setup() {

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

setup();