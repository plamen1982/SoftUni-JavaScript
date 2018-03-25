function shopping(args) {
    let budget = Number(args[0])
    let numberChocolades = Number(args[1])
    let milk = Number(args[2])
    let numberMandarines = Math.floor(numberChocolades - numberChocolades * 0.35)
    let totalMoneyNedded = numberChocolades * 0.65 + milk * 2.7 + numberMandarines * 0.20

    let diff = budget - totalMoneyNedded

    if(diff >= 0) {
        console.log(`You got this, ${diff.toFixed(2)} money left!`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} more!`)
    }
}

shopping(["10", "5", "1.5"])