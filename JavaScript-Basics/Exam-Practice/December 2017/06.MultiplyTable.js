function multipleTable(args) {
    let n = Number(args[0])
    let ones = n % 10;
    let remain = (n - ones) / 10
    let tens = remain % 10
    let hunders = Math.floor(remain / 10)
    let result

    for(let i = 1; i <= ones; i++) {
        for(let j = 1; j <= tens; j++) {
            for(let k = 1; k <= hunders; k++) {
                result = i * j * k
                console.log(`${i} * ${j} * ${k} = ${result};`)
            }
        }
    }
}

// multipleTable(["324"])
multipleTable(["222"])