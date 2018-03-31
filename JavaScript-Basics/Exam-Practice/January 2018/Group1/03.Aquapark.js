function aquapark(args) {
    let month = String(args[0]).toLowerCase()
    let hours = Number(args[1])
    let numberPeople = Number(args[2])
    let timeOfTheDay = String(args[3].toLowerCase())
    
    function priceByMonthAndDayTime(month, timeOfday) {
        if(month === 'january' || month === 'february' || month === 'march' || month === 'april' ||
        month === 'may' || month === 'september' || month === 'october' || month === 'november' || month === 'december'
    ) {
            if(timeOfday === 'day') {
                return 10.50
            } else {
                return 8.40
            }
        } else if(month === 'june' || month === 'july' || month === 'august') {
            if(timeOfday === 'day') {
                return 12.60
            } else {
                return 10.20
            }
        } else {
            return 0
        }
    } 

    let pricePerPerson = priceByMonthAndDayTime(month, timeOfTheDay)


        if(numberPeople >= 4) {
            pricePerPerson *= 0.9
            if(hours >= 5) {
                pricePerPerson *= 0.5
            } 
        } 
        let totalCostForVisti = pricePerPerson * numberPeople * hours

        console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`)
        console.log(`Total cost of the visit: ${totalCostForVisti.toFixed(2)}`)
}

aquapark(["March", "3", "3", "day"])
aquapark(["july", "5", "5", "NIght"])