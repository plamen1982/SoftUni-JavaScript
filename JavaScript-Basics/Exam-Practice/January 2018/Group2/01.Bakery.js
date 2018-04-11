function bakery(args) {
    let initialDough = Number(args[0])
    let weightPerBread = Number(args[1])
    let pricePerBread = Number(args[2])
    let numberSellBreads = Number(args[3])
    let numberSellCandy = Number(args[4])

    let dayIncomesBread = pricePerBread * numberSellBreads
    let doughForBreadRemain = initialDough - weightPerBread * numberSellBreads 
    let doughForBread = numberSellBreads * weightPerBread
    // console.log(doughForBread)
    let pricePerCandy = pricePerBread + pricePerBread * 0.25
    let weightCandy = weightPerBread - weightPerBread * 0.2
    let doughtForCandy = weightCandy * numberSellCandy
    //  console.log(weightCandy)
    let incomesNight = pricePerCandy * numberSellCandy
    let totalDought = initialDough + doughForBread
    let spendMoneyForDought = (totalDought/1000) * 4
    // console.log(spendMoneyForDought)

    let doughForCandyAndBread = doughtForCandy + doughForBread
    let pureIncome = (dayIncomesBread + incomesNight) - spendMoneyForDought
    
    console.log(`Pure income: ${pureIncome.toFixed(2)} lv.`)
    console.log(`Dough used: ${doughForCandyAndBread} g.`)

}

bakery(["10000", "200", "2.5", "40", "45"])
// bakery(["20530", "330", "5.20", "44", "37"])
// bakery(["32000", "250", "3.25", "120", "153"])
