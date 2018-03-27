function powersOfTwo(args) {
    let n = Number(args[0]);
    let number = 1;
    for(let i = 0; i <= n; i++) {
        console.log(number)
        number *= 2
    }
}

// powersOfTwo(["3"])
// powersOfTwo(["4"])
powersOfTwo(["5"])