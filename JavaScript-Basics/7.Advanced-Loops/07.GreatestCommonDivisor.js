function greaterCommonDivisor(args) {
    let a = Number(args[0])
    let b = Number(args[1])
    let temp
    while(b != 0) {
        temp = b
        b = a % b
        a = temp
    }
    console.log(a)
}

greaterCommonDivisor(["24", "16"])
// greaterCommonDivisor(["67", "18"])
// greaterCommonDivisor(["15", "9"])