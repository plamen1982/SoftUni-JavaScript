function histogram(args) {
    let n = Number(args[0]);
    let currentNumber;
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;
    let totalElements = args.length - 1;

    for(let i = 1; i <= n; i++) {
        currentNumber = Number(args[i]);
        if(currentNumber < 200) {
            countP1 += 1;
        } else if(currentNumber < 400) {
            countP2 += 1;
        } else if(currentNumber < 600) {
            countP3 += 1;
        } else if(currentNumber < 800) {
            countP4 += 1;
        } else if(currentNumber >= 800) {
            countP5 += 1;
        }
    }

    console.log(`${convertToPercentage(countP1, totalElements)}%`);
    console.log(`${convertToPercentage(countP2, totalElements)}%`);
    console.log(`${convertToPercentage(countP3, totalElements)}%`);
    console.log(`${convertToPercentage(countP4, totalElements)}%`);
    console.log(`${convertToPercentage(countP5, totalElements)}%`);

    function convertToPercentage(elements, totalElements) {
        return ((elements/totalElements) * 100).toFixed(2)
    }

}

histogram([120, 532, 7, 556, 380, 12, 7, 450, 2, 699, 46, 828, 65])