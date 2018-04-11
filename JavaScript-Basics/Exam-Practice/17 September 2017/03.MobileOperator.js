function mobileOperator(args) {
    let timeContract = String(args[0])
    let typeContaract = String(args[1]).toLocaleLowerCase()
    let additionalInternet = String(args[2]).toLocaleLowerCase()
    let numberMonthsToPay = Number(args[3])

    let planNoNet
    let totalPricePerMonth
    let totalPriceForSubsc

    if(timeContract === "one") {
        planNoNet = planOneYear(typeContaract)        
        if(additionalInternet === "yes") {
            if(planNoNet <= 10) {
                totalPricePerMonth = planNoNet + 5.50 

            } else if(planNoNet > 10 && planNoNet < 30) {
                totalPricePerMonth = planNoNet + 4.35

            } else if(planNoNet > 30) {
                totalPricePerMonth = planNoNet + 3.85

            }
        } else {
            totalPricePerMonth = planNoNet
        }
    } else if(timeContract === "two") {
        planNoNet = planTwoYears(typeContaract)
        if(additionalInternet === "yes") {
                if(planNoNet <= 10) {
                    totalPricePerMonth = planNoNet + 5.50 
                    totalPricePerMonth -= totalPricePerMonth * 0.0375

                } else if(planNoNet > 10 && planNoNet < 30) {
                    totalPricePerMonth = planNoNet + 4.35
                    totalPricePerMonth -= totalPricePerMonth * 0.0375
                    
                } else if(planNoNet > 30) {
                    totalPricePerMonth = planNoNet + 3.85
                    totalPricePerMonth -= totalPricePerMonth * 0.0375
                    
                }
            } else {
                totalPricePerMonth = planNoNet
                totalPricePerMonth -= totalPricePerMonth * 0.0375
            }
        }
    
    totalPriceForSubsc = totalPricePerMonth * numberMonthsToPay
    console.log(`${totalPriceForSubsc.toFixed(2)} lv.`)

    function planOneYear(plan) {
        switch(plan) {
            case "small" : return 9.98
            case "middle": return 18.99
            case "large" : return 25.98
            case "extralarge": return 35.99
        }
    }

    function planTwoYears(plan) {
        switch(plan) {
            case "small" : return 8.58
            case "middle": return 17.09
            case "large" : return 23.59
            case "extralarge": return 31.79
        }
    }
}

mobileOperator(["one", "Small", "yes", "10"])
// mobileOperator(["two", "Large", "no", "10"])