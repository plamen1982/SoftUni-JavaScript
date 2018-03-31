function sumDigits(args) {

    let n = args[0]
    let digit = Number(n)
    let sum = 0

    for(let i = 0; i <= n.length; i++) {
        let lastDigit = digit % 10;
        sum += lastDigit    
        digit = Math.floor(digit / 10)
    }
    console.log(sum)
}

sumDigits(["5634"])