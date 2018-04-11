function sheriff(args) {
    let n = Number(args[0])

    let width = 3 * n
    let column = 2 * n + 8
    let x = n
    let dots = (width - 1) / 2 - n;
    console.log('.'.repeat((width - 1) / 2) + 'x' + '.'.repeat((width - 1) / 2))
    console.log('.'.repeat((width - 3) / 2) + '/x\\' + '.'.repeat((width - 3) / 2))
    console.log('.'.repeat((width - 3) / 2) + 'x|x' + '.'.repeat((width - 3) / 2))

    for(let i = 0; i < Math.ceil(n / 2); i++) {
        console.log('.'.repeat(dots) + 'x'.repeat(x) + '|' + 'x'.repeat(x) + '.'.repeat(dots))
        dots--
        x++
    }
    dots++
    x--
    for(let j = 0; j < Math.floor(n / 2); j++) {
        dots++
        x--
        console.log('.'.repeat(dots) + 'x'.repeat(x) + '|' + 'x'.repeat(x) + '.'.repeat(dots))
    } 
    console.log('.'.repeat((width - 3) / 2) + '/x\\' + '.'.repeat((width - 3) / 2))
    console.log('.'.repeat((width - 3) / 2) + '\\x/' + '.'.repeat((width - 3) / 2))

    x = n
    dots = (width - 1) / 2 - n;
    
    for(let i = 0; i < Math.ceil(n / 2); i++) {
        console.log('.'.repeat(dots) + 'x'.repeat(x) + '|' + 'x'.repeat(x) + '.'.repeat(dots))
        dots--
        x++
    }
    dots++
    x--
    for(let j = 0; j < Math.floor(n / 2); j++) {
        dots++
        x--
        console.log('.'.repeat(dots) + 'x'.repeat(x) + '|' + 'x'.repeat(x) + '.'.repeat(dots))
    } 
    console.log('.'.repeat((width - 3) / 2) + 'x|x' + '.'.repeat((width - 3) / 2))    
    console.log('.'.repeat((width - 3) / 2) + '\\x/' + '.'.repeat((width - 3) / 2))    
    console.log('.'.repeat((width - 1) / 2) + 'x' + '.'.repeat((width - 1) / 2))
}

sheriff(["3"])
// sheriff(["5"])