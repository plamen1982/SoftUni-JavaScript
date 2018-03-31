function friendlyTrip(args) {
//friends = 5, distamce in km, 
let distance = Number(args[0])
let literPerKm = Number(args[1])
let pricePerLiter = Number(args[2])
let budget = Number(args[3])

let litersGas = (distance / 100) * literPerKm 
let moneyForTrip = litersGas * pricePerLiter
let diff = budget - moneyForTrip
    if(diff >= 0) {
        console.log(`You can take a trip. ${diff.toFixed(2)} money left.`)
    } else {
        console.log(`Sorry, you cannot take a trip. Each will receive ${(budget/5).toFixed(2)} money.`)
    }
}

// friendlyTrip(["100", "5", "1.2", "6"])
friendlyTrip(["120", "5", "1.2", "4"])
// friendlyTrip(["100", "5", "1.2", "6"])