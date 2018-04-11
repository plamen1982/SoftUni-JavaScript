function luckyNumbers(args) {
    let n = Number(args[0])
    let result = ''
    let left = 0;
    let rigth = 0;
    for(let count1 = 1; count1 <= 9; count1++) {
        for(let count2 = 1; count2 <= 9; count2++) {
            for(let count3 = 1; count3 <= 9; count3++) {
                for(let count4 = 1; count4 <= 9; count4++) {
                    left = count1 + count2
                    rigth = count3 + count4

                    if(left === rigth  && n % left === 0) {
                        result += '' + count1 + count2 + count3 + count4 + ' '
                        
                    }
                }
            }
        }
    }
    console.log(result)
}

// luckyNumbers(["3"])
// luckyNumbers(["7"])
luckyNumbers(["24"])