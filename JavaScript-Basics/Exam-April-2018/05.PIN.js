function PIN(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let n = Number(params[0])
    let width = 6 * n + 10
    let columns = 2 * n + 2
    let space = 2 * n
    let space2 = 0
    let letterP = Math.floor(n / 2)
    

    console.log('/`' + 'P'.repeat(2 * n) + ' '.repeat(n)  +'/`I' + ' '.repeat(n) + '/`N' + ' '.repeat(2 * n + 1) + 'N')
    
    for(let count1 = 0; count1 < n - 1; count1++) {
        console.log('| P' + ' '.repeat(2 * n - 2) +  'P' + ' '.repeat(n) + '| I' + ' '.repeat(n) + '| ' + 'N' + ' '.repeat(space2) + 'N' + ' '.repeat(space) + 'N')
        space--
        space2++
    }

    console.log('| ' + 'P'.repeat(2 * n) + ' '.repeat(n) + '| I' + ' '.repeat(n) + '| N' + ' '.repeat(space2) + 'N' + ' '.repeat(space) + 'N')

    let spacesAfterDoubleP = width - 2 * 3 - 2 * 2 - letterP - n

        for(let count2 = 0; count2 < n; count2++) {
            space--
            space2++
            console.log('| ' + 'P'.repeat(letterP) + ' '.repeat(spacesAfterDoubleP - space2 - space) + '| I' + ' '.repeat(n) + '| N' + ' '.repeat(space2) + 'N' + ' '.repeat(space) + 'N')
        }
        space--
        space2++
        console.log('\\_' + 'P'.repeat(letterP) + ' '.repeat(spacesAfterDoubleP - space2 - space) + '\\_I' + ' '.repeat(n) + '\\_N' + ' '.repeat(space2) + 'NN')
    
    
}

// PIN(["2"])
PIN(["5"])