function asciiCombinations(args) {
    let n = Number(args[0]);
    let groupNumbers = 0
    let symbolNumbers = ''

    let groupSmallLetters = 0 
    let symbolSmallLetters = ''

    let groupCapitalLetters = 0
    let symbolCapitalLetters = ''

    let groupAllOthersSymbols = 0
    let symbolAllOthers = ''

    let outputSymbols = ''

    for(let i = 1; i <= n; i++) {
        if(args[i].charCodeAt() >= 48 && args[i].charCodeAt() <= 57) {
            groupNumbers += args[i].charCodeAt() 
            symbolNumbers += args[i]
        } else if(args[i].charCodeAt() >= 97 && args[i].charCodeAt() <= 122) {
            groupSmallLetters += args[i].charCodeAt() 
            symbolSmallLetters += args[i]
        }else if(args[i].charCodeAt() >= 65 && args[i].charCodeAt() <= 90) {
            groupCapitalLetters += args[i].charCodeAt() 
            symbolCapitalLetters += args[i]
        }else {
            groupAllOthersSymbols += args[i].charCodeAt() 
            symbolAllOthers += args[i]
        }
    }
    let arrayGroup = []
        arrayGroup.push(groupNumbers)
        arrayGroup.push(groupSmallLetters)
        arrayGroup.push(groupCapitalLetters)
        arrayGroup.push(groupAllOthersSymbols)

        let max = Number.NEGATIVE_INFINITY;

        for(let j = 0; j < arrayGroup.length; j++) {
            if(max < arrayGroup[j]) {
                max = arrayGroup[j]
            }
        }
        if(max == groupNumbers) {
            outputSymbols = symbolNumbers
        } else if(max == groupSmallLetters) {
            outputSymbols = symbolSmallLetters
        } else if(max == groupCapitalLetters) {
            outputSymbols = symbolCapitalLetters
        } else if(max == groupAllOthersSymbols) {
            outputSymbols = symbolAllOthers
        }

        console.log(`Biggest ASCII sum is:${max}`)
        console.log(`Combination of characters is:${outputSymbols}`)
}

asciiCombinations(["5", "9", "a", "V", "]", "7"])