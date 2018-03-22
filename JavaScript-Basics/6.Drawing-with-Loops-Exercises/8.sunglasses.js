function sunglasses(n) {
    n = Number(n)

    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n))

    for(let i = 1; i <= n - 2; i++) {
        if(i == Math.floor((n - 1)/2)) {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' + '|'.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*' )
        } else {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' + ' '.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*' )
        }
    }

    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n))
}

sunglasses(6)