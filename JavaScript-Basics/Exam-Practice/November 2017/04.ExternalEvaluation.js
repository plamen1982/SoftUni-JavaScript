function externalEvaluation(args) {
    let n = Number(args[0])

    let poorMarks = 0
    let satisfactoryMarks = 0
    let goodMarks = 0
    let veryGoodMarks = 0
    let exellentMarks = 0

    for(let i = 1; i <= args.length; i++) {
        if(Number(args[i]) <= 22.5) {
            poorMarks++
        } else if(Number(args[i]) <= 40.5) {
            satisfactoryMarks++
        } else if(Number(args[i]) <= 58.5) {
            goodMarks++
        } else if(Number(args[i]) <= 76.5) {
            veryGoodMarks++
        } else if(Number(args[i]) <= 100) {
            exellentMarks++
        }
    }

    console.log(`${((poorMarks/n)*100).toFixed(2)}% poor marks`)
    console.log(`${((satisfactoryMarks/n)*100).toFixed(2)}% satisfactory marks`)
    console.log(`${((goodMarks/n)*100).toFixed(2)}% good marks`)
    console.log(`${((veryGoodMarks/n)*100).toFixed(2)}% very good marks`)
    console.log(`${((exellentMarks/n)*100).toFixed(2)}% excellent marks`)

}

externalEvaluation(["10", "18.5", "30", "40", 60, 65, 80.57, 84.25, 85.38, 89, 100])