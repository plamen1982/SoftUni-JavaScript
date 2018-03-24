function diamond(arg1) {
    let n = Number(arg1);
    let rowsCount = n;
    let starsCount = 1;
    if (n % 2 == 0) {
        rowsCount = n - 1;
        starsCount = 2;
    }
    let middlePartSize = starsCount;
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        if (i == 0) {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - i));
        }
        else {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*" +
                "-".repeat(middlePartSize + 2 * (i - 1)) +
                "*" +
                "-".repeat((n - starsCount) / 2 - i));
        }
    }
    for (let i = Math.ceil(n / 2) - 2; i >= 0; i--) {
        if (i == 0) {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - i));
        }
        else {
            console.log("-".repeat((n - starsCount) / 2 - i) +
                "*" +
                "-".repeat(middlePartSize + 2 * (i - 1)) +
                "*" +
                "-".repeat((n - starsCount) / 2 - i));
        }
    }
}
// diamond(["5"]);
diamond(["9"]);

//second solution

function diamond2(args) {
    let n = Number(args[0])
    let starsBegging = (n % 2 == 0) ? 2 : 1;
    let row = starsBegging
    let middleDashes = (n % 2 == 0) ? 2 : 1;

    for(let i = 0; i < Math.ceil(n / 2) ; i++) {
        if( i == 0) {
            console.log('-'.repeat(Math.ceil(n/2) - 1) +
                        '*'.repeat(starsBegging) +
                        '-'.repeat(Math.ceil(n/2) - 1)
            )
        } else {
            console.log(
                '-'.repeat(Math.floor(n/2) - row) + 
                '*' +
                '-'.repeat(middleDashes) +
                '*' +
                '-'.repeat(Math.floor(n/2) - row)
            )
    
            row += 1
            middleDashes += 2
        }
    }

    row = row - 1;
    middleDashes = middleDashes -2;
    
    for(let j = 0; j <= Math.ceil(n/2) - 2; j++) {

        if (j == Math.ceil(n/2) - 2 ) {
            console.log(
            '-'.repeat(Math.ceil(n/2) - 1) +
            '*'.repeat(starsBegging) +
            '-'.repeat(Math.ceil(n/2) - 1)
        )
        } else {
            middleDashes = middleDashes - 2;
            row = row - 1;
            console.log(
                '-'.repeat(n/2 - row) +
                '*' +
                '-'.repeat(middleDashes) +
                '*' + 
                '-'.repeat(n/2 - row)
        )
        }
    }
}

diamond2(["7"])
// diamond2(["8"])