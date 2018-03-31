function factorial(args) {
    let n = Number(args[0])
    let fact = 1;
    for(i = n; i > 0; i--) {
        fact *= i
    }
    console.log(fact)
}

// factorial(["5"])
factorial(["6"])
// factorial(["10"])