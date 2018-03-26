function traveling(args) {

    let distanceAtoB = Number(args[0]);
    let truckSpeed = Number(args[1]);
    let carSpeed = Number(args[2]) * 3.6;

    let timeTruck = distanceAtoB / truckSpeed;
    let timeCar = distanceAtoB / carSpeed;

    if (timeTruck == 'Infinity') {
        console.log(`The truck arrived after ${Math.ceil(timeCar)} hours`)
    } else {
        console.log(`The truck arrived after ${Math.ceil(timeTruck)} hours`)        
    }
    if(timeCar == 'Infinity') {
        console.log(`The car arrived after ${Math.ceil(timeTruck)} hours`)        
    } else {
        console.log(`The car arrived after ${Math.ceil(timeCar)} hours`)
    }
}

// traveling(["100", "20", "500"])
// traveling(["312", "155.3", "1117.1"])
traveling(["1000000", "15", "0"])