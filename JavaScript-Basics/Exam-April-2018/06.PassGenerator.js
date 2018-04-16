function passGenerator(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let firstNumber = Number(params[0])
    let capitalLetter = String(params[1]).toUpperCase()
    let smallLetter = String(params[2]).toLocaleLowerCase()
    let secondNumber = Number(params[3])
    let thirdNumber = Number(params[4])
    let fourthNumber = Number(params[5])
    let numberForGenPass = Number(params[6])

    let limitCapitalLetters = returnLimitCapitalLetter(capitalLetter)
    let limitSmallLetters = returnLimitSmallLetter(smallLetter)

    let count = 0
    let result = ''
    let capitalLetterResult = ''
    let smallLetterResult = ''

    // console.log(limitCapitalLetters)
    // console.log(limitSmallLetters)

// passGenerator(["3", "f", "z", "881", "1", "6", "724829"])
//1Fh10815 - expected
//2Am10815 - mine


    for(let count1 = 1; count1 <= firstNumber; count1++) {
        for(let count2 = 1; count2 <= capitalLetter.charCodeAt() - 64; count2++) {
            for(let count3 = 1; count3 <= smallLetter.charCodeAt() - 96; count3++) {
                for(let count4 = 1; count4 <= secondNumber; count4++) {
                    for(let count5 = 1; count5 <= thirdNumber; count5++) {
                        for(let count6 = 1; count6 <= fourthNumber; count6++) {
                            count++
                            if(numberForGenPass === count) {
                                capitalLetterResult = returnCapitalLettersFromNumber(count2)
                                smallLetterResult = returnSmallLettersFromNumber(count3)
                                result = '' + count1 + capitalLetterResult + smallLetterResult + count4 + count5 + count6
                                console.log(result)

                                return
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(`No password on this position`)



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

    function returnSmallLettersFromNumber(number) {
        number = number + 96
        return String.fromCharCode(number)
    }

    function returnCapitalLettersFromNumber(number) {
        number = number + 64
        return String.fromCharCode(number)
    }

}



// passGenerator(["6", "f", "l", "9", "33", "88", "22482"])
passGenerator(["3", "f", "z", "881", "1", "6", "724829"])

// passGenerator(["1", "b", "a", "5", "2", "3", "20000000"])

