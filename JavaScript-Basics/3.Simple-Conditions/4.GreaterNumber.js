function findGreaterNumber([arg1, arg2]) {
    const number1 = parseInt(arg1);
    const number2 = parseInt(arg2);

    if(number1 > number2) {
        console.log(number1)
    } else if(number1 < number2) {
        console.log(number2)
    } else {
        console.log(number1)
    }
}

findGreaterNumber([5, 3]);
findGreaterNumber([3, 5]);
findGreaterNumber([10, 10]);
findGreaterNumber([-5, 5]);