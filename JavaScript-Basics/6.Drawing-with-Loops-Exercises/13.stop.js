function stop(args) {
    let n = Number(args);
    let height = 2 * n + 2;
    let dots = n;
    let dashes = 2 * n - 1 ;
    let dashesStop = 2 * n - 3;
    let dashesBottom = 4 * n - 3;

    if(n >= 3 && n <= 1000) {
        console.log('.'.repeat(n + 1) + '_'.repeat(2 * n + 1) + '.'.repeat(n + 1))
        for(let i = 0; i < n; i++) {

                console.log('.'.repeat(n - i) + '//' + '_'.repeat(dashes) + '\\\\' + '.'.repeat(dots) )
                dots -= 1
                dashes += 2 
            }

            console.log('//' + '_'.repeat(dashesStop) + 'STOP!'+ '_'.repeat(dashesStop) + '\\\\')
            console.log('\\'.repeat(2) + '_'.repeat(4 * n - 1) + '//')
            
        
        for(let j = n - 1; j > 0; j--) {
            console.log('.'.repeat(n - j) + '\\\\' + '_'.repeat(dashesBottom) + '//' + '.'.repeat(n - j))
            dashesBottom -= 2;
        }
    }
}

// stop("3")
// stop("6")
stop("6")