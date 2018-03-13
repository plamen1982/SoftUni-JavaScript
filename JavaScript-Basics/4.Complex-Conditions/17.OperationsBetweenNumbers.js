function operationsBetweenNumbers(args) {
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);
    let sign = String(args[2]);
    let result;
    let evenOrOdd;

    if(sign == '+') {
        result = num1 + num2;
        if(result % 2 == 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }

        console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
    } 

    if(sign == '-') {
        result = num1 - num2;
        if(result % 2 == 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }

        console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);   
    }

    if(sign == '*') {
        result = num1 * num2;
        if(result % 2 == 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);      
    }
    if(sign == '/') {
        if(num1 == 0 || num2 == 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);  
        }
    }
    if(sign == '%') {
        if(num1 == 0 || num2 == 0) {
            console.log(`Cannot divide ${num1} by zero`)
        } else {
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);   
        }
    }
}

operationsBetweenNumbers([10, 12, '+']);
operationsBetweenNumbers([10, 1, '-']);
operationsBetweenNumbers([7, 3, '*']);
