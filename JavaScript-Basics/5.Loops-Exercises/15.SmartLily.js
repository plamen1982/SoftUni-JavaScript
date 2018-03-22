function smartLily(args) {
    let LilysYears = Number(args[0]);
    let priceForWashingMachine = Number(args[1]);
    let priceForToy = Number(args[2]);

    let savedMoney = 0;
    let numberOfToys = 0;
    let multiply = 0;
    let diff;
    

    for(let i = 1; i <= LilysYears; i++) {
        if(i % 2 == 0) {
            multiply += 1
            savedMoney += 10 * multiply;
            savedMoney -= 1;
        } else {
            numberOfToys += 1;
        }
    }

    savedMoney = savedMoney + numberOfToys * priceForToy;

    diff = savedMoney - priceForWashingMachine;

    if(diff >= 0) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(diff).toFixed(2)}`);
    }
}

smartLily([10, 170, 6]);
smartLily([21, 1570.98, 3]);