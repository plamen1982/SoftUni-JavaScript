function cheoregraphy(args) {
    let params = args
    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let numberSteps = Number(params[0])
    let numberDancers = Number(params[1])
    let numberDaysForLearning = Number(params[2])
 



    let stepsPerDayPercentage = Math.ceil(((numberSteps / numberDaysForLearning) / numberSteps) * 100)
    let stepsPerDancer = stepsPerDayPercentage / numberDancers

    if(stepsPerDayPercentage < 13) {
        console.log(`Yes, they will succeed in that goal! ${stepsPerDancer.toFixed(2)}%.`)
    } else {
        console.log(`No, They will not succeed in that goal! Required ${stepsPerDancer.toFixed(2)}% steps to be learned per day.`)
    }
}

cheoregraphy(["10464", "20", "20"])
cheoregraphy(["55555", "30", "7"])