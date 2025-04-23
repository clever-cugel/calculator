let num1 = '';
let num2 = '';
let opFlag = 0;
let operator = '';

//i will need to make the text add to a p tag inside the output so it can flex wrap

function add(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let answer = num1 + num2;
    return answer + '';
}

function subtract(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let answer = num1 - num2;
    return answer + '';
}

function multiply(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let answer = num1 * num2;
    return answer + '';
}

function divide(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let answer = num1 / num2;
    answer = answer.toFixed(2);
    return answer + '';
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    }
}

function clear() {

}

const output = document.querySelector('.output p');
output.textContent = '';

const numButtons = document.querySelectorAll('.digits button');
Array.from(numButtons).map((btn) => {
    if (btn.id === '1') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '1';
            } else {
                num2 += '1';
            }
            output.textContent += '1';
        });
    } else if (btn.id === '2') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '2';
            } else {
                num2 += '2';
            }
            output.textContent += '2';
        });
    } else if (btn.id === '3') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '3';
                
            } else {
                num2 += '3';
            }
            output.textContent += '3';
        });
    } else if (btn.id === '4') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '4';
            } else {
                num2 += '4';
            }
            output.textContent += '4';
        });
    } else if (btn.id === '5') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '5';
            } else {
                num2 += '5';
            }
            output.textContent += '5';
        });
    } else if (btn.id === '6') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '6';
            } else {
                num2 += '6';
            }
            output.textContent += '6';
        });
    } else if (btn.id === '7') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '7';
            } else {
                num2 += '7';
            }
            output.textContent += '7';
        });
    } else if (btn.id === '8') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '8';
            } else {
                num2 += '8';
            }
            output.textContent += '8';
        });
    } else if (btn.id === '9') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '9';
            } else {
                num2 += '9';
            }
            output.textContent += '9';
        });
    } else {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '0';
                output.textContent += '0';
            } else {
                num2 += '0';
            }
        });
    }
});

const operButtons = document.querySelectorAll('.operators button');
Array.from(operButtons).map((btn) => {
    if (btn.id === '/') {
        btn.addEventListener('click', () => {
            operator = '/';
            output.textContent += ' / ';
            opFlag = 1;
        });
    } else if (btn.id === '*') {
        btn.addEventListener('click', () => {
            operator = '*';
            output.textContent += ' * ';
            opFlag = 1;
        });
    } else if (btn.id === '-') {
        btn.addEventListener('click', () => {
            operator = '-';
            output.textContent += ' - ';
            opFlag = 1;
        });
    } else if (btn.id === '+') {
        btn.addEventListener('click', () => {
            operator = '+';
            output.textContent += ' + ';
            opFlag = 1;
        });
    } else if (btn.id === '=') {
        btn.addEventListener('click', () => {
            num1 = operate(num1, num2, operator);
            output.textContent = num1;
            num2 = '';
            operator = '';
            opFlag = 0;
        });
    } else {
        btn.addEventListener('click', () => {
            operator = '';
            output.textContent = '';
            opFlag = 0;
            num1 = '';
            num2 = '';
        });
    }
});

//still need to round long decimals
//still need to be able to do like so: 40 + 939 * 4;
//AND it's going to have to follow PEMDAS