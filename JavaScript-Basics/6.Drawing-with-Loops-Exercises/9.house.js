function house(arg) {
    let n = Number(arg[0])
    
    let roof = Math.ceil(n / 2)    
    let base = Math.floor(n / 2)
    
    let starsRoof = (n % 2) == 0 ? 2 : 1;

    for(let i = 0; i < roof; i++) {
        console.log('-'.repeat((n - starsRoof)/2) + '*'.repeat(starsRoof) + '-'.repeat((n - starsRoof)/2))
        starsRoof += 2;
    }

    for(let j = 0; j < base; j++) {
        console.log(`|${ "*".repeat(n - 2) }|`)
    }
}


house([5])
house([6])