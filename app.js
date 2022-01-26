
// const buttonDot = document.querySelector(".dotDot");
// const buttonPlus = document.querySelector(".plus");
// const buttonMinus = document.querySelector(".minus");
// const buttonMultiply = document.querySelector(".multiplyy");
// const buttonDivide = document.querySelector(".divide");
// const buttonPercentage = document.querySelector(".percentage");
// const buttonBrackets = document.querySelector(".brackets");
// const buttonPlusMinus = document.querySelector(".plusMinus")
// const calcArr = [];

const buttonClear = document.querySelector(".clearAll");
const display = document.querySelector(".display");
let equals = document.querySelector(".equals");
let number = document.querySelectorAll(".num");
let operator = document.querySelectorAll(".operator");
let firstNumber;
let secondNumber;
let symbol;
let result;

number.forEach(item => {
  item.addEventListener("click", event => {
    display.innerHTML += item.innerHTML; 
  })
})

operator.forEach(item => {
  item.addEventListener("click", event => {
    firstNumber = display.innerHTML;
    display.innerHTML="";
    symbol = item.innerHTML;
  })
})

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

buttonClear.addEventListener("click", (event) => {
  display.innerHTML = "";
})


// buttonDot.addEventListener("click", (event) => {
//   head.innerHTML += (".")
// })

// buttonEquals.addEventListener("click", (event) => {
//   head.innerHTML = "";
// })

// buttonPlus.addEventListener("click", (event) => {
//   head.innerHTML = "";
// })

















