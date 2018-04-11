function airplane(args) {
    let params = args
    
    //For SoftUni

    // let params = args;
    // if(args[0].indexOf('\n')>-1) {
    // params = args[0].split('\n');
    // }
    let hours = Number(params[0])
    let minutes = Number(params[1])
    let minutesForFlight = Number(params[2])

    let totalMinutes = minutes + minutesForFlight

    let minutesForTheTime = totalMinutes % 60
    let hoursForTheTime = (totalMinutes - minutesForTheTime) / 60
    
    // console.log(minutesForTheTime)
    // console.log(hoursForTheTime)
    let timeHours = hours + hoursForTheTime
    if(timeHours > 23) {
        let hoursAfterMidnight = timeHours % 24
        console.log(`${hoursAfterMidnight}h ${minutesForTheTime}m`)
    } else {
        console.log(`${timeHours}h ${minutesForTheTime}m`)        
    }
    // console.log(typeof(timeHours))
    // console.log(typeof(minutesForTheTime))
}
airplane(["6", "50", "90"])
// airplane('6\n50\n90')
// airplane(["23", "50", "75"])