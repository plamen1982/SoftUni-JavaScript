function energyLoss(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let numberDays = Number(params[0])
    let numberDancers = Number(params[1])
    let totalEnergy = numberDancers * numberDays * 100

    let days = 1
    let hoursPerDay = 0
    let energy = 0
    let leftEnergy
    let energyPerPerson

    let oddDayAndOddHours = numberDancers * 30
    for(let i = 2; i < params.length + 2; i++) {
        if(Number(params[i]) % 2 === 0 && days % 2 === 0) {
            energy += numberDancers * 68
        } else if(Number(params[i]) % 2 === 0 && days % 2 === 1) {
            energy += numberDancers * 49
        } else if(Number(params[i]) % 2 === 1 && days % 2 === 0) {
            energy += numberDancers * 65
        } else if(Number(params[i]) % 2 === 1 && days % 2 === 1) {
            energy += numberDancers * 30
        }
        days++
    }

    leftEnergy = totalEnergy - energy
    energyPerPerson = leftEnergy / (numberDays * numberDancers)
    // console.log(energyPerPerson)
    if(energyPerPerson < 50) {
        console.log(`They are wasted! Energy left: ${energyPerPerson.toFixed(2)}`)
    } else if(energyPerPerson >= 50) {
    console.log(`They feel good! Energy left: ${energyPerPerson.toFixed(2)}`)
    }
}

// energyLoss(["4", "10", "5", "8", "2", "3"])
energyLoss(["4", "10", "1", "1", "1", "1"])