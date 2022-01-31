"use strict";

// New variables created to store the classes
var buttonClear = document.querySelector(".clearAll");
var display = document.querySelector(".display");
var equals = document.querySelector(".equals");
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator"); // New empty variables

var firstNumber;
var secondNumber;
var symbol;
var result; // ForEach loop created to loop through the numbers & eventlistener added on click event 

number.forEach(function (item) {
  item.addEventListener("click", function (event) {
    display.innerHTML += item.innerHTML;
  });
}); // ForEach loop created to loop through the operators & eventlistener added on click event 

operator.forEach(function (item) {
  item.addEventListener("click", function (event) {
    firstNumber = display.innerHTML;
    display.innerHTML = "";
    symbol = item.innerHTML;
    console.log(symbol);
  });
}); // Eventlisteners added on click event for equals and if statements created to loop over 

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
}); // Eventlistener added on click event

buttonClear.addEventListener("click", function (event) {
  display.innerHTML = "";
});