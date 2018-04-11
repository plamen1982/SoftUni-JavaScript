function courier(args) {
    let weightPackageInKG = Number(args[0])
    let typeService = String(args[1])
    let distaceKilometers = Number(args[2])

    let priceDelivering = 0
    let overchargePerKg;


    if(typeService === "standard") {
        if(weightPackageInKG < 1) {
            priceDelivering = 0.03 * distaceKilometers
        } else if(weightPackageInKG >= 1 && weightPackageInKG < 11) {
            priceDelivering = 0.05 * distaceKilometers   
        } else if(weightPackageInKG >= 11 && weightPackageInKG < 41) {
            priceDelivering = 0.1 * distaceKilometers   
        } else if(weightPackageInKG >= 41 && weightPackageInKG < 91) {
            priceDelivering = 0.15 * distaceKilometers   
        } else if(weightPackageInKG >= 91 && weightPackageInKG <= 150) {
            priceDelivering = 0.20 * distaceKilometers   
        }
    } else if(typeService === "express") {
        if(weightPackageInKG < 1) {

            overchargePerKg = 0.03 * 0.8 * weightPackageInKG 
            priceDelivering = 0.03  * distaceKilometers + overchargePerKg * distaceKilometers

        } else if(weightPackageInKG >= 1 && weightPackageInKG < 11) {

            overchargePerKg = 0.05 * 0.4 * weightPackageInKG 
            priceDelivering = 0.05  * distaceKilometers + overchargePerKg * distaceKilometers 

        } else if(weightPackageInKG >= 11 && weightPackageInKG < 41) {

            overchargePerKg = 0.1 * 0.05 * weightPackageInKG 
            priceDelivering = 0.1 * distaceKilometers + overchargePerKg * distaceKilometers

        } else if(weightPackageInKG >= 41 && weightPackageInKG < 91) {

            overchargePerKg = 0.15 * 0.02 * weightPackageInKG 
            priceDelivering = 0.15  * distaceKilometers + overchargePerKg * distaceKilometers

        } else if(weightPackageInKG >= 91 && weightPackageInKG <= 150) {

            overchargePerKg = 0.2 * 0.01 * weightPackageInKG 
            priceDelivering = 0.20 * distaceKilometers + overchargePerKg * distaceKilometers
            
        }
    }

    console.log(`The delivery of your shipment with weight of ${weightPackageInKG.toFixed(3)} kg. would cost ${priceDelivering.toFixed(2)} lv.`)
    
}

// courier(["1.5", "standard", "100"])
courier(["87", "express", "130"])

