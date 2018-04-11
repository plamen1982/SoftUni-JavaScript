function java(args) {
    let n = Number(args[0])
    let width = 3 * n + 6
    let height = 3 * n + 1
    let java = 'JAVA'

    for(let i = 0; i < n; i++) {

        console.log(' '.repeat(n) + '~ ~ ~')

    }
    console.log('='.repeat(width - 1))

    let cupUpper = (n - 3) / 2
    for(let j = 0; j < cupUpper; j++) {
        console.log('|' + '~'.repeat(2 * n + 4) + '|' + ' '.repeat(n - 1) + '|')
    }

    console.log('|' + '~'.repeat(n) + java + '~'.repeat(n) + '|' + ' '.repeat(n - 1) + '|')

    let cupLower = (n - 3) / 2
    for(let k = 0; k < Math.floor(cupLower); k++) {
        console.log('|' + '~'.repeat(2 * n + 4) + '|' + ' '.repeat(n - 1) + '|')
    }

    console.log('='.repeat(width - 1))

    let at = 2 * n + 4
    for(let l = 0; l < n; l++) {
        console.log(' '.repeat(l) + '\\' + '@'.repeat(at) + '/')
        at -= 2
    }
    console.log('='.repeat(2 * n + 6))
    
}


java(["3"])
// java(["5"])
// java(["8"])