function finalCompletion(args) {
    let params = args
    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let numberDancers = Number(params[0])
    let numberPoints = Number(params[1])
    let season = String(params[2]).toLocaleLowerCase()
    let place = String(params[3]).toLocaleLowerCase()

    let totalMoney = numberDancers * numberPoints


    if(place === 'abroad') {
        
        totalMoney += totalMoney * 0.5

        if(season === 'summer') {

            totalMoney -= totalMoney * 0.10

        } else if(season === 'winter') {

            totalMoney -= totalMoney * 0.15      

        }

    } else if(place === 'bulgaria') {

        if(season === 'summer') {

            totalMoney -= totalMoney * 0.05

        } else if(season === 'winter') {

            totalMoney -= totalMoney * 0.08      

        }
    }
    //charity toFixed(2)
    //moneyPerPerson toFixed(2)

    let charity = totalMoney * 0.75
    let leftMoney = totalMoney - charity
    let moneyPerPerson = leftMoney / numberDancers

    console.log(`Charity - ${charity.toFixed(2)}`)
    console.log(`Money per dancer - ${moneyPerPerson.toFixed(2)}`)
}

// finalCompletion(["1", "89.5", "summer", "Abroad"])
finalCompletion(["25", "98", "winter", "Bulgaria"])