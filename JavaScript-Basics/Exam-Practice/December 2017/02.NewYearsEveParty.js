function newYearsEveParty(args) {
    let numberOfPeople = Number(args[0])
    let budget = Number(args[1])

    let neddedMoney = numberOfPeople * 20
    let remainMoney = budget - neddedMoney
    
    if(remainMoney > 0) {
        let fireworks = remainMoney * 0.4
        let donation = remainMoney - fireworks 
        console.log(`Yes! ${Math.round(fireworks)} lv are for fireworks and ${Math.round(donation)} lv are for donation.`)
    } else {
        console.log(`They won't have enough money to pay the covert. They will need ${Math.abs(remainMoney)} lv more.`)
    }
}

newYearsEveParty(["20", "1000"])
newYearsEveParty(["10", "150"])