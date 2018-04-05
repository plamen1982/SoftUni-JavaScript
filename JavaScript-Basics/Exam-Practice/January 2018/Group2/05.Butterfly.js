function butterfly(args) {
    let n = Number(args[0])
    let width = (4 * n)  - 4
    let lessSign = (width - 6) / 2
    let spaces = 4;

    for(let i = 1; i <= n - 2; i++) {
        console.log('*\\'.repeat(i) + ' '.repeat(width - (2 + 2)*i) + '/*'.repeat(i))

    }
    console.log('\\/'.repeat(2*n -2))
    for(let j = 0; j < Math.floor(n/2); j++) {
        console.log('<'.repeat(lessSign) + '*|**|*' + '>'.repeat(lessSign))
    }
    console.log('/\\'.repeat(2*n -2))


    for(let k = (width - 4) / 4; k >= 0; k -=1) {
        console.log('*/'.repeat(k) + ' '.repeat(spaces) + '\\*'.repeat(k))
        spaces += 4

    }
}

// butterfly(["4"])
butterfly(["7"])