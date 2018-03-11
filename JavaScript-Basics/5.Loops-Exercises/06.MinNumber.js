function minNumber(args) {

    let n = Number(args[0]);
    let minNumber = Number.POSITIVE_INFINITY;
    let currentNumber;
    for(i = 1; i <= n; i++) {
        currentNumber = Number(args[i]);
        if(minNumber > currentNumber) {
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}

minNumber([100, 99])