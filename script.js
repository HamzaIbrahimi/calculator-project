const numberButtons = document.querySelectorAll(".number");
const allButtons = document.querySelectorAll("button");
const screen_area = document.querySelector(".screen_area");
const clearButton = document.querySelector("#clear");
const grey_buttons = document.querySelector(".grey_numbers");
const equal = document.querySelector("#equal");
const operatorButtons = document.querySelector(".orange_operators");
const percentage = document.querySelector("#percentage");
const plusminus = document.querySelector("#plusminus");
let num1;
let num2;
let operator = "";
let stringNumber = "";
let result;
screen_area.textContent = "0";

function displayNumber() {
  //Function that displays number and saves it variable one
  grey_buttons.addEventListener("click", (e) => {
    if (e.target && e.target.className == "number") {
      stringNumber += e.target.textContent;
      screen_area.textContent = stringNumber;
    }
  });
}

function saveOperator() {
  //function that saves the operator and saves the value clicked in the calculator
  operatorButtons.addEventListener("click", (e) => {
    if (e.target && e.target.className == "operator") {
      if (stringNumber !== "") {
        num1 = parseInt(stringNumber);
        stringNumber = "";
      }
      operator = e.target.textContent;
    }
    if (screen_area.textContent == result) {
      num1 = parseInt(result);
    }
  });
}

//Mathematical Formulas for the Calculator
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  let text = "Nice Try Kid!";
  if (b == 0) {
    return (screen_area.textContent = text);
  }
  return a / b;
};

//Write a function that takes 2 numbers and operator and
//spits a solution based on operator

function useMath(num1, operator, num2) {
  if (operator == "+") return add(num1, num2);
  else if (operator == "-") return subtract(num1, num2);
  else if (operator == "x") return multiply(num1, num2);
  else if (operator == "÷") return divide(num1, num2);
}

function calculate() {
  num2 = parseInt(stringNumber);
  result = useMath(num1, operator, num2);
  screen_area.textContent = result;
  num2 = "";
}

displayNumber();
saveOperator();
equal.addEventListener("click", calculate);

//function to turn number into percentage
function notFunctional() {
  alert("maybe another time!");
  clearScreen();
}

percentage.addEventListener("click", notFunctional);
plusminus.addEventListener("click", notFunctional);

//function to clear screen
function clearScreen() {
  screen_area.textContent = "";
  stringNumber = "";
}

clearButton.addEventListener("click", clearScreen);

//add grey background on hover remove on mouse out
allButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.background = "#D3D3D3";
  });
  button.addEventListener("mouseout", () => {
    button.style.background = "";
  });
});

function savingScreenArea() {
  let counter = 0;

  grey_buttons.addEventListener("click", (e) => {
    if (e.target && e.target.className == "number") {
      if (screen_area.textContent.length > 10) {
        alert("too many numbers");
        clearScreen();
      }
    }
  });
}

savingScreenArea();
