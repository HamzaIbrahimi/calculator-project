const numberButtons = document.querySelectorAll('.number')
const allButtons = document.querySelectorAll('button');
const screen_area = document.querySelector('.screen_area');
const clearButton = document.querySelector('#clear');
const grey_buttons = document.querySelector('.grey_numbers')
const equal = document.querySelector('#equal');
const operatorButtons = document.querySelector('.orange_operators');
let num1;
let num2;
let operator = '';
let stringNumber = '';
let result;


function displayNumber() { //Function that displays number and saves it variable one
  grey_buttons.addEventListener("click", (e) => {
    if (e.target && e.target.className == "number") {
      stringNumber += e.target.textContent;
      screen_area.textContent = stringNumber;
      console.log(stringNumber);
    }
  });
}


function saveOperator() {
  operatorButtons.addEventListener("click", (e) => {
    if (e.target && e.target.className == "operator") {
        if(stringNumber !== '') {
          num1 = parseInt(stringNumber);
          stringNumber = '';
        }
        operator = e.target.textContent;
    }
    if (screen_area.textContent == result) {
      num1 = parseInt(result);
    }
  });
}


//Mathematical Formulas for the Calculator
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//Write a function that takes 2 numbers and operator and 
//spits a solution based on operator 

function useMath (num1 , operator, num2) {
    if (operator == '+') return add(num1,num2);
    else if (operator == '-') return subtract(num1,num2); 
    else if (operator == 'x') return multiply(num1,num2);
    else if(operator == '÷') return divide(num1,num2);
}


function calculate () {
  num2 = parseInt(stringNumber);
  result = useMath(num1, operator, num2);
  screen_area.textContent = result;
 
}



displayNumber();
saveOperator();
equal.addEventListener('click', calculate);



//function to clear screen
function clearScreen () {
    screen_area.textContent = '';
    stringNumber = '';

}

clearButton.addEventListener('click', clearScreen);




//add grey background on hover remove on mouse out
allButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.style.background = '#D3D3D3';
    })
    button.addEventListener('mouseout', () => {
        button.style.background = '';
      })
    
}) 


// Reduce screen text on more than 10 clicks
// counter++; overflow reduction
//  if (counter > 10) {
//       let newSize = 50 - ((counter-10));
//      screen_area.style.fontSize = `${newSize}px`
//  }


