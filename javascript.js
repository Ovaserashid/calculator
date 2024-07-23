let number=[];
let result;
const button = document.querySelectorAll('button');
const display = document.querySelector('.display');

function displayResult(value){
    value = value.join('');
    display.textContent = value;
}
button.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        number.push(btn.value);
        displayResult(number);
    });
});