function numbers1toNwithStep3(args){
    let n = Number(args[0]);
    let numberOfLoops = Math.floor(n / 3)

    for(let i = 1; i <= n; i += 3) {
        console.log(i)
    }
}

numbers1toNwithStep3(["10"])
numbers1toNwithStep3(["7"])
numbers1toNwithStep3(["15"])