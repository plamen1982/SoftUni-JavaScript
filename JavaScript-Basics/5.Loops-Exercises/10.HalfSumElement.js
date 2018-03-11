function halfSumElement(args) {
    let n = Number(args[0]);
    let biggestElement = Number.NEGATIVE_INFINITY;
    let currentElement;
    let positionBiggest;
    let sum = 0;
    let diff;
    for(let i = 1; i <= n; i++) {
        currentElement = Number(args[i])
        if(biggestElement < currentElement) {
            biggestElement = currentElement; 
            positionBiggest = i;
        }
    }

    for(let j = 1; j <= n; j++) {
        if(j != positionBiggest) {
            currentElement = Number(args[j])
            sum += currentElement;
        }
    }
    diff = Math.abs(biggestElement - sum)
    if(diff == 0) {
        console.log(`Yes Sum = ${sum}`)
    } else {
        console.log(`No, Diff = ${diff}`)
    }
}

halfSumElement(['7', '3', '4', '1', '1', '2', '12', '1']);