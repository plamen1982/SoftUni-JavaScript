function christmasSock(args) {
    let n = Number(args[0])
    let height = 3 * n + 3
    let minus = n - 1
    let wave = 2
    let mid = Math.ceil((2 * n - 3) / 2)
    let merry = 'MERRY'
    let merryChristmasDots = (((2 * n) + 1) - 5) / 2
    let xmas = 'X-MAS'
    let xmaxRow = Math.floor((n / 2) + 2) 

    console.log('|' + '-'.repeat(2 * n) + '|')
    console.log('|' + '*'.repeat(2 * n) + '|')
    console.log('|' + '-'.repeat(2 * n) + '|')

    for(let i = 1; i <= 2 * n - 3; i++) {
        console.log('|' + '-'.repeat(minus) + '~'.repeat(wave) + '-'.repeat(minus) + '|')

        if(i >= mid) {
            minus++
            wave -= 2
        } else {
            minus--
            wave += 2
        }

    }

    for(let j = 0; j < n + 3; j++) {
        if(j == n + 2) {
            console.log('-'.repeat(j) + '\\' + '_'.repeat(2 * n + 1) + ')')
        } else if(j == Math.floor(n/2)) {
            console.log('-'.repeat(j) + '\\' + '.'.repeat(merryChristmasDots) + merry + '.'.repeat(merryChristmasDots) + '\\')
        } else if(j == xmaxRow ) {
            console.log('-'.repeat(j) + '\\' + '.'.repeat(merryChristmasDots) + xmas + '.'.repeat(merryChristmasDots) + '\\')
        } else {
            console.log('-'.repeat(j) + '\\' + '.'.repeat(2 * n + 1) + '\\')
        }
    }
}

christmasSock(["3"])
// christmasSock(["6"])