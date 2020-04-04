// JavaScript File
// let statements
let aLength;
let bLength;
let trapezoidHeight;
let trapezoidArea;
// function that takes inputs and completes the math to obtain the trapezoid area. Next, it outputs a message containing this area.
function mathAlert() {
  // assigns variables to desired values that were typed into textboxes
  aLength = document.getElementById("inputa").value;
  bLength = document.getElementById("inputb").value;
  trapezoidHeight = document.getElementById("inputh").value;
  // math that adds the two base lengths, then divides them by two, then multiplies them by the height. This uses the formula A = (a+b)/2*h
  trapezoidArea = (Number(aLength) + Number(bLength)) /2 * trapezoidHeight;
  // outputs solution to user
  alert("The area of the trapezoid is " + trapezoidArea + "." );
}
// event listener
document.addEventListener("dblclick", mathAlert);