function numberPyramid(args) {
    let n = Number(args[0])
    let currentNumber = 1;
    let result = ""
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i + 1; j++) {
            result += currentNumber + " "
            currentNumber++

            if(currentNumber > n) {
                break
            }
        }
        console.log(result)
        result = ""
        if(currentNumber > n) {
            break
        }
    }
}

numberPyramid(["7"])
// numberPyramid(["10"])
// numberPyramid(["12"])
// numberPyramid(["15"])