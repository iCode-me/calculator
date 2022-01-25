"use strict";

// const buttonZero = document.querySelector(".zeroZero");
// const buttonOne = document.querySelector(".one");
// const buttonTwo = document.querySelector(".two");
// const buttonThree = document.querySelector(".three");
// const buttonFour = document.querySelector(".four");
// const buttonFive = document.querySelector(".five");
// const buttonSix = document.querySelector(".six");
// const buttonSeven = document.querySelector(".seven");
// const buttonEight= document.querySelector(".eight");
// const buttonNine = document.querySelector(".nine");
// const buttonDot = document.querySelector(".dotDot");
// const buttonPlus = document.querySelector(".plus");
// const buttonMinus = document.querySelector(".minus");
// const buttonMultiply = document.querySelector(".multiplyy");
// const buttonDivide = document.querySelector(".devide");
// const buttonPercentage = document.querySelector(".percentage");
// const buttonBrackets = document.querySelector(".brackets");
var buttonClear = document.querySelector(".clearAll"); // const buttonPlusMinus = document.querySelector(".plusMinus")

var calcArr = [];
var head = document.querySelector(".head");
var equals = document.querySelector(".equals");
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var firstNum;
var secondNum;
number.forEach(function (item) {
  item.addEventListener("click", function (event) {
    head.innerHTML += item.innerHTML;
  });
});
operator.forEach(function (item) {
  firstNum = head.innerHTML;
  item.addEventListener("click", function (event) {
    head.innerHTML += item.innerHTML;
  });
});
equals.addEventListener("click", function (event) {
  secondNum = head.innerHTML;

  if (operator == "+") {
    var result = number(firstNum) + number(secondNum);
    head.innerHTML = "";
    head.innerHTML = result;
  }
}); // buttonZero.addEventListener("click", (event) => {
//   head.innerHTML += (0)
//   calcArr.push(0)
// })
// buttonOne.addEventListener("click", (event) => {
//   head.innerHTML += (1)
// })
// buttonTwo.addEventListener("click", (event) => {
//   head.innerHTML += (2)
// })
// buttonThree.addEventListener("click", (event) => {
//   head.innerHTML += (3)
// })
// buttonFour.addEventListener("click", (event) => {
//   head.innerHTML += (4)
// })
// buttonFive.addEventListener("click", (event) => {
//   head.innerHTML += (5)
// })
// buttonSix.addEventListener("click", (event) => {
//   head.innerHTML += (6)
// })
// buttonSeven.addEventListener("click", (event) => {
//   head.innerHTML += (7)
// })
// buttonEight.addEventListener("click", (event) => {
//   head.innerHTML += (8)
// })
// buttonNine.addEventListener("click", (event) => {
//   head.innerHTML += (9)
// })
// buttonDot.addEventListener("click", (event) => {
//   head.innerHTML += (".")
// })
// buttonEquals.addEventListener("click", (event) => {
//   head.innerHTML = "";
// })
// buttonPlus.addEventListener("click", (event) => {
//   head.innerHTML = "";
// })

buttonClear.addEventListener("click", function (event) {
  head.innerHTML = "";
});