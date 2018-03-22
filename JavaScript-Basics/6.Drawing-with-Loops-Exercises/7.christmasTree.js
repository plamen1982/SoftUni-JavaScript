function christmasTree(n) {
    n = Number(n)
    for(let i = 0; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(i) + ' | ' + '*'.repeat(i) + ' '.repeat(n - i))
    }
}

christmasTree(2)