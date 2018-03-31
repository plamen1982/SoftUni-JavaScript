function fibonacci(args) {
    let n = Number(args[0])
    let firstMember = 0;
    let nextMember = 1;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = firstMember + nextMember;
        firstMember = nextMember;
        nextMember = sum;
    }
    console.log(nextMember)
}
fibonacci(["0"])
fibonacci(["1"])
fibonacci(["2"])
fibonacci(["5"])
fibonacci(["10"])