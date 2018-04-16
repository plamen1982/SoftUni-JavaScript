function moon(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }
    let averageSpeed = Number(params[0])
    let litersGas = Number(params[1])

    let distanceToMoon = 384400
    let distanceRounTrip = distanceToMoon * 2
    let timeRoundTrip = Math.ceil(distanceRounTrip / averageSpeed)
    let totalTime = timeRoundTrip + 3

    let gas = (litersGas * distanceRounTrip) / 100

    console.log(totalTime)
    console.log(gas)

}

// moon(["10000", "5"])
// moon(["5000", "7"])
moon(["15000", "4"])