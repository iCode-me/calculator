// New variables created to store the classes
const buttonClear = document.querySelector(".clearAll");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
let number = document.querySelectorAll(".num");
let operator = document.querySelectorAll(".operator");

// New empty variables
let firstNumber;
let secondNumber;
let symbol;
let result;

// ForEach loop created to loop through the numbers & eventlistener added on click event 
number.forEach(item => {
  item.addEventListener("click", event => {
    display.innerHTML += item.innerHTML; 
  })
})

// ForEach loop created to loop through the operators & eventlistener added on click event 
operator.forEach(item => {
  item.addEventListener("click", event => {
    firstNumber = display.innerHTML;
    display.innerHTML="";
    symbol = item.innerHTML;
    console.log(symbol);
  })
})

// Eventlisteners added on click event for equals and if statements created to loop over 
equals.addEventListener("click", event => {
  secondNumber = display.innerHTML;

  if (symbol === "+") {
    result = Number(firstNumber) + Number(secondNumber);
    display.innerHTML = result;
  } else if (symbol === "−") {
    result = Number(firstNumber) - Number(secondNumber);
    display.innerHTML = result;
  } else if (symbol === "×") {
    result = Number(firstNumber) * Number(secondNumber);
    display.innerHTML = result;
  } else if (symbol === "÷") {
    result = Number(firstNumber) / Number(secondNumber);
    display.innerHTML = result;
  } 
})

// Eventlistener added on click event
buttonClear.addEventListener("click", (event) => {
  display.innerHTML = "";
})

















