const wrapper = document.querySelector("main");
const calculator = wrapper;//wrapper.querySelector("main");
function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
}
calculator.addEventListener("mousedown", ()=>{
    calculator.classList.add("active");
    calculator.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
    calculator.classList.remove("active");
    calculator.removeEventListener("mousemove", onDrag);
});