function equalPairs(args) {
    
    let n = Number(args[0]);
    let arrayOfPairs = [];
    let currentSumPair = 0; 
    let currentNumber = 0;
    let currentDiff = Number.NEGATIVE_INFINITY;;
    let maxDiff = Number.NEGATIVE_INFINITY;

    //create sum of pairs in array
    for(let i = 1; i <= 2*n; i++) {
        currentNumber = Number(args[i]); 
        currentSumPair += currentNumber;
        if(i % 2 == 0) {
            arrayOfPairs.push(currentSumPair);
            currentSumPair = 0;
        } 
    }
    //check the max diff
    for(let j = 0; j < arrayOfPairs.length - 1; j++) {
        if(arrayOfPairs[j] != arrayOfPairs[j+1]) {
            currentDiff = Math.abs(arrayOfPairs[j] - arrayOfPairs[j+1]);
        }
        if(maxDiff < currentDiff) {
            maxDiff = currentDiff
        }
    }

    //print the result
    if(maxDiff == Number.NEGATIVE_INFINITY) {
        console.log(`Yes, value=${arrayOfPairs[0]}`)
    } else {
        console.log(`No, maxdiff=${maxDiff}`)
    }
}

// equalPairs([3, 1, 2, 0, 3, 4, -1]);
// equalPairs([2, 1, 2, 2, 2]);
// equalPairs([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);

//second solution

// function equalPairs2(args) {
//     let n = Number(args[0]);
//     let maxDiff = 0;
//     let diff = 0;
//     let firstSum = 0;
//     let nextSum = 0;

//    for(let i = 1; i <= 2*n - 2; i += 2) {

//     firstSum = Number(args[i]) + Number(args[i+1]);
//     nextSum = Number(args[i+2]) + Number(args[i+3]);
//     diff = Math.abs(firstSum - nextSum);
//     if(maxDiff < diff) {
//         maxDiff = diff;
//     }
//    }
//     if(maxDiff == 0 || n == 1) {
//         console.log(`Yes, value=${Number(args[1]) + Number(args[2])}`)
//     } else {
//         console.log(`No, maxdiff=${maxDiff}`)
//     }
// }

// equalPairs2([3, 1, 2, 0, 3, 4, -1]);
// equalPairs2([2, 1, 2, 2, 2]);
equalPairs2([1, 5, 5]);
equalPairs2([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);