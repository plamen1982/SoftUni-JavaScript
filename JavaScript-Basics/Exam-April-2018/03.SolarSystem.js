function solarSystem(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }
    //226 days / week
    let namePlanet = String(params[0]).toLocaleLowerCase()
    let numberDaysToStay = Number(params[1])

    //toFixed(2)


    let distanceAndDays = returnDaysByPlanet(namePlanet)
    if (distanceAndDays) {
        let totalDistance = distanceAndDays.distance * 2
        let totalDays = totalDistance * 226 + numberDaysToStay

        if(distanceAndDays.days < numberDaysToStay) {
            console.log(`Invalid number of days!`)
        } else {
            console.log(`Distance: ${totalDistance.toFixed(2)}`)
            console.log(`Total number of days: ${totalDays.toFixed(2)}`)
        }
    } else {
        console.log(`Invalid planet name!`)   
    }


    // console.log(totalDays)
    // console.log(totalDistance)

    

    function returnDaysByPlanet(planet) {
        switch(planet) {
            case 'mercury':
                return {'distance':0.61, 'days': 7}
            case 'venus':
                return {'distance': 0.28,'days': 14}
            case 'mars':
                return {'distance': 0.52,'days': 20}
            case 'jupiter':
                return {'distance': 4.2,'days': 5}
            case 'saturn':
                return {'distance': 8.52,'days': 3}
            case 'uranus':
                return {'distance': 18.21,'days': 3}
            case 'neptune':
                return {'distance': 29.09,'days': 2}
            default: 
                return undefined
        }
    }
}

solarSystem(['Mercury', 5])
// solarSystem(["Mars", 21])