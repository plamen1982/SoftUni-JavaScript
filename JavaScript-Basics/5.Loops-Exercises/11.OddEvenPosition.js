function oddEvenPostion(args) {
    let n = Number(args[0]);
    let oddMin = Number.POSITIVE_INFINITY;
    let evenMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;
    let oddSum = 0;
    let evenSum = 0;
    let currentNumber;
    for(let i = 1; i <= n; i++) {
        currentNumber = Number(args[i]);
        if(i % 2 == 0) {
            if(evenMin > currentNumber ) {
                evenMin = currentNumber;
            }
            if(evenMax < currentNumber) {
                evenMax = currentNumber;
            }

            evenSum += currentNumber;
        } else {
            if(oddMin > currentNumber ) {
                oddMin = currentNumber;
            } 
            if(oddMax < currentNumber) {
                oddMax = currentNumber;
            }

            oddSum += currentNumber
        }
    }

    console.log(`OddSum=${oddSum},`);
    if(oddMin == Number.POSITIVE_INFINITY) {
        console.log(`OddMin=No,`)
    } else {
        console.log(`OddMin=${oddMin},`)
    }
    if(oddMax == Number.NEGATIVE_INFINITY) {
        console.log(`OddMax=No,`)
    } else {
        console.log(`OddMax=${oddMax},`)
    }
    console.log(`EvenSum=${evenSum},`);
    if(evenMin == Number.POSITIVE_INFINITY) {
        console.log(`EvenMin=No,`)
    } else {
        console.log(`EvenMin=${evenMin},`)
    }
    if(evenMax == Number.NEGATIVE_INFINITY) {
        console.log(`EvenMax=No,`)
    } else {
        console.log(`EvenMax=${evenMax}`)
    }
}

oddEvenPostion([6, 2, 3, 5, 4, 2, 1])
oddEvenPostion([1, 1])