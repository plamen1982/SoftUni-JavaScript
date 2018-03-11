function leftAndRightSum(args) {
    let n = Number(args[0]);
    let sumLeft = 0;
    let sumRight = 0;
    let diff;

    for(let i = 1; i <= n; i++) {
        sumLeft +=  Number(args[i]);
    }
    for(let i = n + 1; i <= 2*n; i++) {
        sumRight += Number(args[i])
    }
    diff = sumLeft - sumRight;
    if(diff == 0) {
        console.log(`Yes, sum = ${sumLeft}`);
    } else {
        console.log(`No, diff = ${Math.abs(diff)}`);
    }
}

leftAndRightSum([2, 90, 10, 50, 50]);
leftAndRightSum([2, 90, 9, 50, 50]);