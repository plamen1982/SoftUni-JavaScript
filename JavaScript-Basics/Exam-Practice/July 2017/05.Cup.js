function cup(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let n = Number(params[0])
    let width = 5 * n
    let dance = 'D^A^N^C^E^'
    let dots = n
    let dashes = 3 * n

    for(let count1 = 0; count1 < n / 2; count1++) {
        console.log('.'.repeat(dots) + '#'.repeat(dashes) + '.'.repeat(dots))
        dots++
        dashes -= 2
    }
    let insideDots = width - 2 - (2 * dots)
    for(let count2 = 0; count2 < (n / 2) + 1; count2++) {
        console.log('.'.repeat(dots) + '#' + '.'.repeat(insideDots) + '#' + '.'.repeat(dots))
        dots++
        insideDots -= 2
    }
    dots--
    dashes = width - (2 * dots)
    console.log('.'.repeat(dots) + '#'.repeat(dashes) + '.'.repeat(dots))

    dots = 2 * n - 2
    dashes = width - (2 * dots)

    for(let count3 = 0; count3 < n / 2; count3++) {
        console.log('.'.repeat(dots) + '#'.repeat(dashes) + '.'.repeat(dots))
    }
    let dotsForDance = (width - 10) / 2
    console.log('.'.repeat(dotsForDance) + dance + '.'.repeat(dotsForDance))
    for(let count3 = 0; count3 < (n / 2) + 1; count3++) {
        console.log('.'.repeat(dots) + '#'.repeat(dashes) + '.'.repeat(dots))
    }
}

// cup(["6"])
cup(["8"])