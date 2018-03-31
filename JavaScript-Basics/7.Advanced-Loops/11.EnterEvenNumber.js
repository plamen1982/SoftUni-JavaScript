function enterEvenNumber(args) {
    let currentNumber;
    for(let i = 0; i < args.length; i++) {
        currentNumber = Number(args[i])
        if(currentNumber % 2 === 0) {
            console.log(`Even number entered: ${currentNumber}`)
            break;
        } else {
            console.log(`The number is not even` )
        }
    }
}

enterEvenNumber(["35", "22", "34", "23", "hello"])