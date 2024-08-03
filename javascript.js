const buttonNumber = document.querySelectorAll('.numbers');
const buttonEqual = document.querySelector('.equal');
const buttonDot = document.querySelector('.dot');
const buttonOperation = document.querySelectorAll('.operation');
const display = document.querySelector('.display');
const pmButton = document.querySelector('.pm');
const backspace = document.querySelector('.backspace');
const reset = document.querySelector('.reset');
const percent = document.querySelector('.percent');

let numArray1=[];
let numArray2=[];
let firstNumber = false;
let secondNumber = false;
let operation = false;
let operator;
let result;
let number1;
let number2;
let dot = false;
let equalPressed = false;

//Add keyboard support
document.addEventListener('keydown', (boardKey)=>{
    let keyValue = boardKey.key;
    if(document.getElementById(keyValue) != null){
        keyPressed = document.getElementById(keyValue);
        keyPressed.click();
    }else if(keyValue === 'Enter'){
        keyPressed = document.getElementById('=');
        keyPressed.click();
    }    
});

//This function performs addition, subtraction, division and multiplication of two numbers
function finalResult(num1, num2){
    if(operator === '+'){
        return num1+num2;
    }else if(operator === '-'){
        return num1-num2;
    }else if(operator === '/'){
        return num1/num2;
    }else if(operator === '*'){
        return num1*num2;
    }
}

//This function limits the number of digits to 14.
function limitDigits(num){
    if(num <= 99999999999999 && num >= -99999999999999) //This checks if the number is within the range of calculator
        {
        let limitedNum = num.toString().split('');
        if(limitedNum.length > 14) //If the number is within the range but still has digits greater than 14 it means the number is decimal
            {
            let index = limitedNum.indexOf('.'); //Get the position of '.' in the number
            limitedNum = +limitedNum.join('');
            limitedNum = parseFloat(limitedNum.toFixed(14 - index)); //This rounds the number so that the overall number is 14 digits
            return limitedNum;
        }else {
            return num; 
        }
    }else {
        return num; 
    }
    
}

function displayResult(value){
    if(value <= 99999999999999 && value >= -99999999999999) //Check if the number is within the range
        {
        display.textContent = value;
    }else {
        display.textContent = "Out of Limit"; //If the number is not within the range display out of limit error
    }   
}

reset.addEventListener('click', (btn)=>{
    location.reload(); //Refreshes the page hence resets everything
});

//The following checks when numbers 0-9 are pressed depending on when they are pressed they are stored in first or second variable
buttonNumber.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(operation === false){ //Initial state so if number is pressed it will get stored in number1
            if(numArray1.length < 14){
                numArray1.push(btn.value);
                number1= numArray1.join('');
                displayResult(number1);
                firstNumber = true;
            }
        }else if(firstNumber === true && operation === true){ //This is a state when first number is added and operator has been pressed so the number should now get stored in number2
            if(numArray2.length < 14){
                numArray2.push(btn.value);
                number2= numArray2.join('');
                displayResult(number2);
                secondNumber = true;
            }
        }
    });
});

//The following checks the conditions in which an operator is pressed and then behaves accordingly
buttonOperation.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(firstNumber === true && secondNumber === false){ // This is the normal case when operator is pressed after first number
            operator = btn.value;
            operation =true;
            dot = false;
        }else if(firstNumber === true && secondNumber === true){ //This is the case when operator is pressed after second number hence result should be displayed and operation should continue
            result = finalResult(+number1, +number2);
            result = parseFloat(result.toFixed(9)); // Rounds all the values to 9 decimal places
            result = limitDigits(result); //limit all numbers to 14 digits
            displayResult(result);
            number1 = result;
            secondNumber = false;
            numArray2 = [];
            operator = btn.value;
            operation = true;
            dot = false;
        }else if(firstNumber === false && equalPressed === true){ //This is the case when operator is pressed after equal button is pressed
            number1 = result;
            firstNumber = true;
            operation = true;
            operator = btn.value;
            equalPressed = false;
        }
    });
});

//The following restricts equal button to work only when first and second number and operation has been entered
buttonEqual.addEventListener('click', (btn)=>{
    if(firstNumber === true && secondNumber === true){
        result = finalResult(+number1, +number2);        
        result = parseFloat(result.toFixed(9));        
        result = limitDigits(result);        
        displayResult(result);
        numArray1 = [];
        numArray2 = [];
        firstNumber = false;
        secondNumber = false;
        operation = false;
        dot = false;
        equalPressed = true;
    }
});

//The following restricts the dot button to be pressed once per number
buttonDot.addEventListener('click', (btn)=>{
    if(!dot){
        if(operation === false && firstNumber === true){ //State when first number is being entered
            numArray1.push('.');
            number1 = numArray1.join('');
            dot = true;
            displayResult(number1);
        }else if(operation === true && secondNumber === true){ //State when second number is being entered
            numArray2.push('.');
            number2 = numArray2.join('');
            dot = true;
            displayResult(number2);
        }else if(firstNumber === false){ //Initial state if dot is pressed directly without entering a number it means '0.'
            numArray1.push('0','.');
            number1 = numArray1.join('');
            dot = true;
            displayResult(number1);
        }else if(operation === true && secondNumber === false){ //This is state just before entering second number if dot is pressed directly it means '0.'
            numArray2.push('0','.');
            number2 = numArray2.join('');
            dot = true;
            displayResult(number2);
        }
    }
});

//The following adds '-' sign to a positive number and removes '-' sign from a negative number if pressed.
pmButton.addEventListener('click', (btn)=>{
    if(operation === false && firstNumber === true){
        if(number1 < 0){
            numArray1.splice(0,1);
            number1=numArray1.join('');
            displayResult(number1);
        }else if(number1 > 0){
            numArray1.splice(0,0,'-');
            number1= +numArray1.join('');
            displayResult(number1);
        }
    }else if(operation === true && secondNumber === true){
        if(number2 < 0){
            numArray2.splice(0,1);
            number2=numArray2.join('');
            displayResult(number2);
        }else if(number2 > 0){
            numArray2.splice(0,0,'-');
            number2= +numArray2.join('');
            displayResult(number2);
        }
    }
});

//The following removes the last number entered depending on which number is being entered
backspace.addEventListener('click', (btn)=>{
    if(operation === false && firstNumber === true){
        if(numArray1[numArray1.length -1]=== '.'){
            dot = false;
        }
        numArray1.splice(-1,1);
        number1 = numArray1.join('');
        displayResult(number1);
    }else if(operation === true && secondNumber === true){
        if(numArray2[numArray2.length -1]=== '.'){
            dot = false;
        }
        numArray2.splice(-1,1);
        number2 = numArray2.join('');
        displayResult(number2);
    }
});

//The following calculates the percent value of a number by dividing the number being entered by 100
percent.addEventListener('click', (btn)=>{
    if(firstNumber === true && secondNumber === false){
        number1= numArray1.join('');
        number1 = number1/100;
        number1 = limitDigits(number1);
        displayResult(number1);
    }else if(secondNumber === true){
        number2 = numArray2.join('');
        number2 = number2/100;
        result = finalResult(+number1, +number2);
        result = parseFloat(result.toFixed(9));
        result = limitDigits(result);
        displayResult(result);
        numArray1 = [];
        numArray2 = [];
        firstNumber = false;
        secondNumber = false;
        operation = false;
        dot = false;
        equalPressed = true;
    }
});