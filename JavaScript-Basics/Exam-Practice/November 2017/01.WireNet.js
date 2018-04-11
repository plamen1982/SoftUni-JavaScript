function wireNet(args) {
    let lengthField = Number(args[0])
    let widthFiled = Number(args[1])
    let heightNet = Number(args[2])
    let priceNetPerMeter = Number(args[3])
    let weightNetSqMeter = Number(args[4]) 

    let metersNet = lengthField * 2 + widthFiled * 2
    let priceNet = metersNet * priceNetPerMeter
    let weightNet = metersNet * heightNet * weightNetSqMeter

    console.log(metersNet)
    console.log(priceNet.toFixed(2))
    console.log(weightNet.toFixed(3))
}

wireNet(["10", "50", "1.5", "2.1", "0.95"])

