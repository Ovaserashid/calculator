let number1=[];
let number2=[];
let firstNumber = false;
let secondNumber = false;
let operation = false;
let operator;
let result = false;
const button = document.querySelectorAll('button');
const display = document.querySelector('.display');

function finalResult(num1, num2){
    num1=+num1.join('');
    num2=+num2.join('');
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

function displayResult(value){
    value = value.join('');
    if(result === false){
        display.textContent = value;
    }else if(result === true){
        display.textContent = finalResult(number1, number2);
    }
    
}
button.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(btn.value === '+' || btn.value === '-' || btn.value === '/' || btn.value === '*'){
            firstNumber = true;
            operation = true;
            operator = btn.value;
        }else if(btn.value === '='){
            console.log('yes');
            result = true;
            display.textContent = finalResult(number1, number2);
        }
        if(firstNumber === false && secondNumber === false){
        number1.push(btn.value);
        displayResult(number1);
        }else if(firstNumber === true && secondNumber === false && operation === true){
            operation = false;
        }else if(firstNumber === true && secondNumber === false && operation === false && result === false){
            number2.push(btn.value);
            displayResult(number2);
        }
    });
});