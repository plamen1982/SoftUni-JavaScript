function nameOfGroup(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }
    let CapitalLetter = String(params[0])
    let smallLetter1 = String(params[1])
    let smallLetter2 = String(params[2])
    let smallLetter3 = String(params[3])
    let number = Number(params[4])
    let numberCombinations = 0

    let limit1 = returnLimitCapitalLetter(CapitalLetter)
    let limit2 = returnLimitSmallLetter(smallLetter1)
    let limit3 = returnLimitSmallLetter(smallLetter2)
    let limit4 = returnLimitSmallLetter(smallLetter3)

    // console.log('a'.charCodeAt())
    // console.log(String.fromCharCode(97))
    for(let count1 = 0; count1 <= limit1; count1++) {
        for(let count2 = 0; count2 <= limit2; count2++) {
            for(let count3 = 0; count3 <= limit3; count3++) {
                for(let count4 = 0; count4 <= limit4; count4++) {
                    for(let count5 = 0; count5 <= number; count5++) {
                        numberCombinations++
                    } 
                }
            }
        }
    }
    numberCombinations--

    console.log(numberCombinations)

    function returnLimitSmallLetter(smallLetter) {
        let a = 'a'.charCodeAt()
        let diff = smallLetter.charCodeAt() - a
        if(diff === 0) {
            return 0
        } else {
            return diff
        }
    }

    function returnLimitCapitalLetter(capitalLetter) {
        let a = 'A'.charCodeAt()
        let diff = capitalLetter.charCodeAt()  - a 
        if(diff === 0) {
            return 0
        } else {
            return diff
        }
    }
}


nameOfGroup(["A", "a", "a", "a", "0"])
// nameOfGroup(["K", "a", "b", "c", "5"])