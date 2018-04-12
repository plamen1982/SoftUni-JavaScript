function juiceDiet(args) {
    let params = args
    
    //For SoftUni

    // if(args[0].indexOf('\n') > -1) {
    // params = args[0].split('\n');
    // }

    let raspberry = Number(params[0]) // 4.5ml
    let strawberry = Number(params[1]) // 7.5ml
    let cherry = Number(params[2]) // 15ml
    let maxJuice = Number(params[3])

    let currentJuice = 0;
    let maxCobination = Number.NEGATIVE_INFINITY;
    let result = ''

    for(let count1 = 0; count1 <= raspberry; count1++) {
        for(let count2 = 0; count2 <= strawberry; count2++) {
            for(let count3 = 0; count3 <= cherry; count3++) {
                currentJuice = count1 * 4.5 + count2 * 7.5 + count3 * 15

                if(currentJuice > maxCobination && currentJuice <= maxJuice) {
                    maxCobination = currentJuice 
                    result = `${count1} Raspberries, ${count2} Strawberries, ${count3} Cherries. Juice: ${maxCobination} ml.`
                }
            }
        }
    }
    console.log(result)
}

// juiceDiet(["7", "4", "8", "70"])
// juiceDiet(["12", "10", "6", "150"])
juiceDiet(["7", "6", "5", "130"])
