//display all number
function showNumber(num) {
    let display = document.getElementById('display');
    if (display.value == '0') {
        display.value = '';
        display.value += num;
    }
    else {
        display.value += num;
    }
};
// function showNumberFromKeyboard(event) {
//     if (event.keyCode == 13) {
//         event.preventDefault();
//         console.log('paichi')
//         let display = document.getElementById('display');
//         if (display.value == '0') {
//             display.value = '';
//             display.value += num;
//         }
//         else {
//             display.value += num;
//         }
//     }
// }

//dode as a number
function functionForDode(dode) {
    let display = document.getElementById('display');
    if (display.value.indexOf('.') != -1) {

    }
    else {
        display.value += dode;
    }
};


//display operator
function operator(sign) {
    let display = document.getElementById('display');
    let displayValue = display.value;
    let history = document.getElementById('history');
    historyValue = display.value;

    if (displayValue == 0) {

    }
    else if (displayValue.slice(-1) == '+' || displayValue.slice(-1) == '-' || displayValue.slice(-1) == '*' || displayValue.slice(-1) == '/') {
        let replaceSign = display.value.slice(-1);
        replaceSign = sign;
        display.value = display.value.slice(0, -1) + replaceSign;
    }
    else {
        history.value = displayValue + sign;
        display.value += sign;
    }
    // let sliced = historyValue.slice(-1);
    // if (historyValue != '' && sliced != '-' && sliced != '*' && sliced != '/' && sliced != '+') {
    //     console.log('history')
    // }
    // else {
    //     let result = eval(history.value);
    //     history.value = result;
    // }
};

//do math
function doMath() {
    let display = document.getElementById('display');
    let history = document.getElementById('history');
    history.value = display.value;
    let result = eval(display.value);
    display.value = result;
}

//all clear value
function clearAll() {
    let display = document.getElementById('display');
    let history = document.getElementById('history');
    display.value = '0';
    history.value = '';
}

//clear display value
function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '0';
}

// backspace 
function backspace() {
    let display = document.getElementById('display');
    const inputValue = display.value;
    if (inputValue.length != 1) {
        display.value = inputValue.substr(0, inputValue.length - 1);
    }
    else {
        display.value = '0';
    }
}
