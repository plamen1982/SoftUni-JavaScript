function andProcess(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }
    let numberProcessorsNeeded = Number(params[0])
    let numberEmployees = Number(params[1])
    let workingDays = Number(params[2])
    //#processors floor
    let priceProcessor = 110.10
    let totalWorkingHours = numberEmployees * workingDays * 8
    let manufactoredProcessors = Math.floor(totalWorkingHours / 3)

    let diff = numberProcessorsNeeded - manufactoredProcessors
    let money = Math.abs(diff * priceProcessor)


    if(diff > 0) {
        console.log(`Losses: -> ${money.toFixed(2)} BGN`)
    } else {

        console.log(`Profit: -> ${money.toFixed(2)} BGN`)
    }

}

// andProcess(["500", "8", "20"])
andProcess(["150", "7", "18"])