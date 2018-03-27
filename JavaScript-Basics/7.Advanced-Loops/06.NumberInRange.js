function numberInRange(args) {
    let n;
    for(i = 0; i < args.length; i++) {
        n = Number(args[i])
        if(n >= 1 && n <= 100) {
            console.log('Enter a number in the range [1...100]')
            console.log(`The number is ${n}`)
        } else {
            console.log('Invalid number!')
        }
    }
}

numberInRange(["35", "150", "0", "-", "200", "77"])