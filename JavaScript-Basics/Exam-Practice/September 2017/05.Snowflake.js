function snowflake(args) {
    let n = Number(args[0])

    let height = (2 * n) + 1
    let width = (2 * n) + 3
    let stars = 1;
    let dots = n 
    let dots2 = n - 2
    if(n >= 3 && n <= 1000) {
        for(let i = 0; i < Math.floor((height - 2) / 2) ; i++) {
            console.log('.'.repeat(i) + '*' + '.'.repeat(dots) + '*' + '.'.repeat(dots) + '*' + '.'.repeat(i))
            dots--
        }
        console.log('.'.repeat(width/2 - 2.5) + '*'.repeat(5) + '.'.repeat(width/2 - 2.5))        
        console.log('*'.repeat(width))        
        console.log('.'.repeat(width/2 - 2.5) + '*'.repeat(5) + '.'.repeat(width/2 - 2.5))
        for(let j = 2; j <= ((height - 1) / 2); j++)  {

            console.log('.'.repeat(dots2) + '*' + '.'.repeat(j) + '*' + '.'.repeat(j) + '*' + '.'.repeat(dots2))
            dots2--
        }
    }
}

// snowflake(["3"])
snowflake(["5"])
// snowflake(["8"])