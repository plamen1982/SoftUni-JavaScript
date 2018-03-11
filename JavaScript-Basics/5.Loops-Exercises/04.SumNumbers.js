function sumNumbers(args){
    let numbersToSum = Number(args[0]);
    let sum = 0;
    for(let i = 1; i <= numbersToSum; i++) {
        sum += Number(args[i]);
    }
    console.log(sum)
}

sumNumbers([3, 3, 4, 5]);