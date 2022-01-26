"use strict";

// const buttonPercentage = document.querySelector(".percentage");
// const buttonBrackets = document.querySelector(".brackets");
// const buttonPlusMinus = document.querySelector(".plusMinus")
// const calcArr = [];
var buttonDot = document.querySelector(".dotDot");
var buttonClear = document.querySelector(".clearAll");
var display = document.querySelector(".display");
var equals = document.querySelector(".equals");
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var firstNumber;
var secondNumber;
var symbol;
var result;
number.forEach(function (item) {
  item.addEventListener("click", function (event) {
    display.innerHTML += item.innerHTML;
  });
});
operator.forEach(function (item) {
  item.addEventListener("click", function (event) {
    firstNumber = display.innerHTML;
    display.innerHTML = "";
    symbol = item.innerHTML;
    console.log(symbol);
  });
});
equals.addEventListener("click", function (event) {
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
});
buttonClear.addEventListener("click", function (event) {
  display.innerHTML = "";
});
buttonDot.addEventListener("click", function (event) {
  display.innerHTML += ".";
}); // buttonEquals.addEventListener("click", (event) => {
//   head.innerHTML = "";
// })
// buttonPlus.addEventListener("click", (event) => {
//   head.innerHTML = "";
// })