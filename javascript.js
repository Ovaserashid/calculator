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

function limitDigits(num){
    if(num <= 99999999999999 && num >= -99999999999999){
        let limitedNum = num.toString().split('');
        if(limitedNum.length > 14){
            let index = limitedNum.indexOf('.');
            let lengthOfArray = limitedNum.length;
            limitedNum = +limitedNum.join('');
            limitedNum = parseFloat(limitedNum.toFixed(14 - index));
            return limitedNum;
        }else {
            return num; 
        }
    }else {
        return num; 
    }
    
}

function displayResult(value){
    if(value <= 99999999999999 && value >= -99999999999999){
        display.textContent = value;
    }else {
        display.textContent = "Out of Limit"; 
    }   
}

reset.addEventListener('click', (btn)=>{
    location.reload();
});

buttonNumber.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(operation === false){
            if(numArray1.length < 14){
                numArray1.push(btn.value);
                number1= numArray1.join('');
                displayResult(number1);
                firstNumber = true;
            }
        }else if(firstNumber === true && operation === true){
            if(numArray2.length < 14){
                numArray2.push(btn.value);
                number2= numArray2.join('');
                displayResult(number2);
                secondNumber = true;
            }
        }
    });
});

buttonOperation.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(firstNumber === true && secondNumber === false){
            operator = btn.value;
            operation =true;
            dot = false;
        }else if(firstNumber === true && secondNumber === true){
            result = finalResult(+number1, +number2);
            result = parseFloat(result.toFixed(9));
            result = limitDigits(result);
            displayResult(result);
            number1 = result;
            secondNumber = false;
            numArray2 = [];
            operator = btn.value;
            operation = true;
            dot = false;
        }else if(firstNumber === false && equalPressed === true){
            number1 = result;
            firstNumber = true;
            operation = true;
            operator = btn.value;
            equalPressed = false;
        }
    });
});

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

buttonDot.addEventListener('click', (btn)=>{
    if(!dot){
        if(operation === false && firstNumber === true){
            numArray1.push('.');
            number1 = numArray1.join('');
            dot = true;
            displayResult(number1);
        }else if(operation === true && secondNumber === true){
            numArray2.push('.');
            number2 = numArray2.join('');
            dot = true;
            displayResult(number2);
        }else if(firstNumber === false){
            numArray1.push('0','.');
            number1 = numArray1.join('');
            dot = true;
            displayResult(number1);
        }else if(operation === true && secondNumber === false){
            numArray2.push('0','.');
            number2 = numArray2.join('');
            dot = true;
            displayResult(number2);
        }
    }
});

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

percent.addEventListener('click', (btn)=>{
    if(firstNumber === true && secondNumber === false){
        number1= numArray1.join('');
        number1 = number1/100;
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