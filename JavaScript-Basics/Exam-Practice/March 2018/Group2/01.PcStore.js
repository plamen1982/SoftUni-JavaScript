function pcStore(args) {

    let dollarToLev = 1.57;
    let priceProcessor = Number(args[0])
    let videoCard = Number(args[1])
    let ram = Number(args[2])
    let numberRams = Number(args[3])
    let discount = Number(args[4])

    let levProcessor = priceProcessor * 1.57
    levProcessor = levProcessor - levProcessor * discount;

    let levVideoCard = videoCard * 1.57;
    levVideoCard = levVideoCard - levVideoCard * discount;

    let ramInLevs = ram * 1.57;

    let totalRams = ramInLevs * numberRams;

    let totalPrice = levProcessor + levVideoCard + totalRams;
    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`)
    
}

pcStore(["500", "200", "80", "2", "0.05"])
pcStore(["1200", "850", "120", "4", "0.1"])

