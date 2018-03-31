function ladybird(args) {
    let n = Number(args[0])
    let width = 2 * n + 1 
    let spacesBody = n - 1
    let spacesBeggin = Math.floor((width - 5) / 4)
    let spacesMid = Math.ceil((width - 5) / 4)
    let spacesTail = n - 1
    console.log(' '.repeat((width - 5) / 2) + '@' + ' '.repeat(3) + '@')
    console.log(' '.repeat(n - 1) + '\\' + '_' + '/' + ' '.repeat(n - 1))
    console.log(' '.repeat(n - 1) + '/' + ' ' + '\\' + ' '.repeat(n - 1))
    console.log(' '.repeat(n - 1) + '|' + '_' + '|' + ' '.repeat(n - 1))
    
    for(let i = 0; i < n; i++) {
        console.log(' '.repeat(spacesBody) + '/' +' '.repeat(i) + '|' + ' '.repeat(i) + '\\' )
        spacesBody--
    }
    for(let j = 0; j < Math.floor(n/2); j++) {
        console.log('|' + ' '.repeat(spacesBeggin) + '@' + ' '.repeat(spacesMid) + '|' + ' '.repeat(spacesMid) + '@' + ' '.repeat(spacesBeggin) + '|')
    }

    for(let k = 0; k < Math.floor(n/2); k++) {
        
        console.log(' '.repeat(k) + '\\' + ' '.repeat(spacesTail) + '|' + ' '.repeat(spacesTail) + '/')
        spacesTail--
    }

    console.log(' '.repeat(Math.ceil(n/2)) + '^'.repeat(Math.floor(n/2)) + '|' + '^'.repeat(Math.floor(n/2)) )

}
// ladybird(["3"])

ladybird(["7"])