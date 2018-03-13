function divisionWithoutRemaining(args){
    let n = Number(args[0]);
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let currentNumber;
    for(let i = 1; i <= n; i++) {
        currentNumber = Number(args[i]);
        if(currentNumber % 2 == 0) {
            countP1 += 1;
        }
        if(currentNumber % 3 == 0) {
            countP2 += 1;
        }
        if(currentNumber % 4 == 0) {
            countP3 += 1;
        }
    }

    console.log(`${convertToPercentage(countP1, n)}%`);
    console.log(`${convertToPercentage(countP2, n)}%`);
    console.log(`${convertToPercentage(countP3, n)}%`);

    function convertToPercentage(elements, totalElements) {
        return ((elements/totalElements) * 100).toFixed(2)
    }
}

divisionWithoutRemaining([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
divisionWithoutRemaining([3, 3, 6, 9]);

