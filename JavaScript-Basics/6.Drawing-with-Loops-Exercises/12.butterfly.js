function butterfly(arg) {
    let n = Number(arg);
    let width = 2 * n - 1;
    let height = 2 * (n - 2) + 1;
    let wing = n - 2;

    if(n >= 3 && n <= 1000) {
       for(let i = 0; i < Math.floor(height / 2); i++) {
           if(i % 2 == 0) {
            console.log('*'.repeat(wing) + '\\ ' + '/' + '*'.repeat(wing))
           } else {
            console.log('-'.repeat(wing) + '\\ ' + '/' + '-'.repeat(wing))
           }
       }
       console.log(' '.repeat(wing +1) + '@' + ' '.repeat(wing + 1))
       for(let j = 0; j < Math.floor(height / 2); j++) {
        if(j % 2 == 0) {
            console.log('*'.repeat(wing) + '/ ' + '\\' + '*'.repeat(wing))
           } else {
            console.log('-'.repeat(wing) + '/ ' + '\\' + '-'.repeat(wing))
           }
       }
    }
} 

// butterfly("3")
butterfly("5")
// butterfly("7")