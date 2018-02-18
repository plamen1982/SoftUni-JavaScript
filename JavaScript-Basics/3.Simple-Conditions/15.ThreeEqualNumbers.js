function threeEqualNumbers([arg1, arg2, arg3]) {
    const num1 = Number(arg1);
    const num2 = Number(arg2);
    const num3 = Number(arg3);

    if(num1 === num2 && num1 === num3 && num2 === num3) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

threeEqualNumbers([1, 1, 2]);
threeEqualNumbers([1, 1, 1]);
threeEqualNumbers([1, 33, 2]);