let num1 = '';
let num2 = '';
let opFlag = 0;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
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

const output = document.querySelector('.output');
output.textContent = '0';

const numButtons = document.querySelectorAll('.digits button');
Array.from(numButtons).map((btn) => {
    if (btn.id === '1') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '1';
                output.textContent = num1;
                //will also need to set opflag to 1
            } else {
                num2 += '1';
            }
        });
    } else if (btn.id === '2') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '2';
                output.textContent = num1;
            } else {
                num2 += '2';
            }
        });
    } else if (btn.id === '3') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '3';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '3';
            }
        });
    } else if (btn.id === '4') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '4';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '4';
            }
        });
    } else if (btn.id === '5') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '5';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '5';
            }
        });
    } else if (btn.id === '6') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '6';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '6';
            }
        });
    } else if (btn.id === '7') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '7';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '7';
            }
        });
    } else if (btn.id === '8') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '8';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '8';
            }
        });
    } else if (btn.id === '9') {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '9';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '9';
            }
        });
    } else {
        btn.addEventListener('click', () => {
            if (opFlag === 0) {
                num1 += '0';
                output.textContent = num1;
                //will have to update the text on screen too
            } else {
                num2 += '0';
            }
        });
    }
});