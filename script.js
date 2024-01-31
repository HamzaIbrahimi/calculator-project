const buttons = document.querySelectorAll('button')
const screen_area = document.querySelector('.screen_area')
const clearButton = document.querySelector('#clear')
const nine = document.querySelector('#nine');
const add = document.querySelector('#add');


function displayNumbersOnScreen () {//Function to display numbers in text area
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          return  screen_area.textContent += e.currentTarget.textContent;
          
        })
    }) 
}

function addition (e) {
    let number1 = parseInt(e.currentTarget.textContent);
    screen_area.textContent = number1;

}

add.addEventListener('click',addition )



function fullCalculator () {
    displayNumbersOnScreen();
    

}
fullCalculator();






//function to clear screen
function clearScreen () {
    screen_area.textContent = '';
}
clearButton.addEventListener('click', clearScreen);







