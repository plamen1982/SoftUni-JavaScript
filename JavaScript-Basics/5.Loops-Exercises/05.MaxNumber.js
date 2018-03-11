function maxNumber(args) {

    let n = Number(args[0]);
    let maxNumber = Number.NEGATIVE_INFINITY;
    let currentNumber;
    for(i = 1; i <= n; i++) {
        currentNumber = Number(args[i]);
        if(maxNumber < currentNumber) {
            maxNumber = currentNumber;
        }
    }
    console.log(maxNumber);
}

maxNumber([2, 100, 99]);