function airplane(args) {
    let hours = Number(args[0])
    let minutes = Number(args[1])
    let timeForFlight = Number(args[2])

    let totalMinutes = minutes + timeForFlight
    let minutesForTheTime = totalMinutes % 60
    let hoursForTheTime = (totalMinutes - minutesForTheTime) / 60
    // console.log(minutesForTheTime)
    // console.log(hoursForTheTime)
    let timeHours = hours + hoursForTheTime
    if(timeHours > 23) {
        let hoursAfterMidnight = timeHours % 24
        return (`${hoursAfterMidnight}h ${minutesForTheTime}m`)
    } else {
        return (`${timeForFlight}h ${minutesForTheTime}m`)        
    }
    // console.log(typeof(timeHours))
    // console.log(typeof(minutesForTheTime))
}
// airplane(["6", "50", "90"])
airplane(["23", "50", "75"])