function sequence2kPlus1(args) {
    let n = Number(args[0])
    let num = 1;
    for(let i = 1; i <= n; i = (2 * i) + 1) {
        console.log(i)
    }
}

sequence2kPlus1(["4"])