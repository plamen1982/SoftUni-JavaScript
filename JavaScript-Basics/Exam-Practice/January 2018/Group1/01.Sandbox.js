//Math.ceil - materials output - toFixed(2) - money
function sandbox(args) {
    let width = Number(args[0])
    let length = Number(args[1])
    let priceSandPerKg = Number(args[2])
    let priceWood = Number(args[3])

    let areaField = width * length;
    let areaSand = (width - (0.2 + 0.2)) * (length - (0.2 + 0.2))
    let areaCurbs = areaField - areaSand
    let necessarySand = Math.ceil(areaSand * 20)
    let necessaryWood = Math.ceil(areaCurbs / (2.2 * 0.2))

    let priceForSand = necessarySand * priceSandPerKg
    let priceForWood = necessaryWood * priceWood

    let totalPrice = priceForSand + priceForWood
    
    console.log(totalPrice.toFixed(2))
}

// sandbox(["2", "3", "1", "2"])
sandbox(["1.2", "2.5", "1.7", "1.5"])