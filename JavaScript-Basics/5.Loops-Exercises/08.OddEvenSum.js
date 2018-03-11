function oddEvenSum(args){
    let n = Number(args[0]);
    let sumOdd = 0;
    let sumEven = 0;
    let diff;

    for(let i = 1; i <= n; i += 2) {
        sumOdd += Number(args[i]);
    }

    for(let i = 2; i <= n; i += 2) {
        sumEven += Number(args[i]);
    }

    diff = Math.abs(sumOdd - sumEven);

    if(diff == 0) {
        console.log(`Yes Sum = ${sumOdd}`)
    } else {
        console.log(`No Diff = ${diff}`)
    }

}

oddEvenSum([4, 10, 50, 60, 20]);
oddEvenSum([4, 3, 5, 1, -2]);