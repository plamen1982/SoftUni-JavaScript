function squareOfStars([arg]) {
    let stars = Number(arg);
    function printBase(arg) {
        for(let i = stars; i <= stars; i++) {
            console.log('*'.repeat(i))
        }
    }
    function printSides(arg) {
        for(let j = 1; j <= stars - 2; j++) {
        console.log('*' + ' '.repeat(stars - 2) + '*')
        }
    }

    printBase(arg)
    printSides(arg)
    printBase(arg)
}

squareOfStars(["3"])
squareOfStars(["4"])