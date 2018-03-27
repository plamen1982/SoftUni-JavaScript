function mask(args) {
    let n = Number(args[0])
    let width = (2 * n) + 2
    let heightHat = n - 1;
    let spaceHat = 2
    let spaceFace = 2
    let spaceBeforeEyes = (width - 4 - (n + 1)) / 2

    if(n >= 5 && n <= 59) {
        for(let i = 0; i < heightHat; i++) {
            console.log(' '.repeat(n - spaceHat) + '/' + ' '.repeat(i) + '|' + '  ' + '|' + ' '.repeat(i) + '\\')
            spaceHat++
        }
        console.log('-'.repeat(width))

        console.log('|' + ' '.repeat(spaceBeforeEyes) + '_' + ' '.repeat(n + 1) + '_' + ' '.repeat(spaceBeforeEyes) + '|')
        console.log('|' + ' '.repeat(spaceBeforeEyes) + '@' + ' '.repeat(n + 1) + '@' + ' '.repeat(spaceBeforeEyes) + '|')

       for(let j = 0; j < Math.floor(n/2); j++ ) {
        console.log('|' + ' '.repeat(width - 2) + '|')
       }
       console.log('|' + ' '.repeat(n - 1) + 'OO' + ' '.repeat(n - 1) + '|')
       console.log('|' + ' '.repeat(n - 2) + '/ ' + ' \\' + ' '.repeat(n - 2) + '|')
       console.log('|' + ' '.repeat(n - 2) + '||||' + ' '.repeat(n - 2) + '|')

       for(let k = 0; k < n + 1; k++) {
        console.log('\\'.repeat(k + 1) + '`'.repeat(width - spaceFace) + '/'.repeat(k + 1))
        spaceFace += 2
       }
    }
}

// mask(["5"])
// mask(["7"])
// mask(["9"])
mask(["11"])