const buttonNumber = document.querySelectorAll('.numbers');
const buttonEqual = document.querySelector('.equal');
const buttonDot = document.querySelectorAll('.dot');
const buttonOperation = document.querySelectorAll('.operation');
const display = document.querySelector('.display');

let numArray1=[];
let numArray2=[];
let firstNumber = false;
let secondNumber = false;
let operation = false;
let operator;
let result;
let number1;
let number2;

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

function displayResult(value){
    display.textContent = value;    
}

// button.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         if(btn.value === '+' || btn.value === '-' || btn.value === '/' || btn.value === '*' ){
//             firstNumber = true
//             operation = true;
//             operator = btn.value;
//         }else if(btn.value === '=' && operation === true){
//             console.log('yes');
//             result = true;
//             display.textContent = finalResult(number1, number2);
//         }
//         if(firstNumber === false && operation === false){
//             number1.push(btn.value);
//             displayResult(number1);
//         // else if(firstNumber === true && secondNumber === false && operation === true){
//         //     operation = false;
//         }else if(firstNumber === true && secondNumber === false && operation === false && result === false){
//             number2.push(btn.value);
//             displayResult(number2);
//         }
//     });
// });
buttonNumber.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(operation === false){
            numArray1.push(btn.value);
            number1= +numArray1.join('');
            displayResult(number1);
            firstNumber = true;
        }else if(firstNumber === true && operation === true){
            numArray2.push(btn.value);
            number2= +numArray2.join('');
            displayResult(number2);
            secondNumber = true;
        }
    });
});
buttonOperation.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(firstNumber === true && secondNumber === false){
            operator = btn.value;
            operation =true;
        }else if(firstNumber === true && secondNumber === true){
            result = finalResult(number1, number2);
            displayResult(result);
            number1 = result;
            secondNumber = false;
            numArray2 = [];
            operator = btn.value;
            operation = true;
        }
    });
});
buttonEqual.addEventListener('click', (btn)=>{
    if(firstNumber === true && secondNumber === true){
        result = finalResult(number1, number2);
        displayResult(result);
        numArray1 = [];
        numArray2 = [];
        firstNumber = false;
        secondNumber = false;
        operation = false;
    }
})