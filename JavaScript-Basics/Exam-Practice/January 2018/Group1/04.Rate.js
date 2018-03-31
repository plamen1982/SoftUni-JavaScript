function rate(args) {
    let money = Number(args[0])
    let months = Number(args[1]) 


    function simpleRate(money, months) {
        let moneySimpleRate = money;
        for(let i = 0; i < months; i++) {
            moneySimpleRate += money * 0.03
        }
        return moneySimpleRate
    }

    function complexRate(money, months) {
        for(let i = 0; i < months; i++) {
            money +=  money * 0.027
        }
        return money
    }

    let moneySimpleRate = (simpleRate(money, months)).toFixed(2)
    let moneyComplexRate = (complexRate(money, months)).toFixed(2)
    let diff = (moneySimpleRate - moneyComplexRate).toFixed(2)

    if(diff > 0) {
        console.log(`Simple interest rate: ${moneySimpleRate} lv.`)
        console.log(`Complex interest rate: ${moneyComplexRate} lv.`)
        console.log(`Choose a simple interest rate. You will win ${diff} lv.`)
    } else {
        console.log(`Simple interest rate: ${moneySimpleRate} lv.`)
        console.log(`Complex interest rate: ${moneyComplexRate} lv.`)
        console.log(`Choose a complex interest rate. You will win ${Math.abs(diff)} lv.`)
    }
    //toFixed(2)

}

// rate(["500", "6"])
rate(["50555.50", "36"])