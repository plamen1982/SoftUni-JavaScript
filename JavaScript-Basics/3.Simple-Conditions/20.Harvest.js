function harvest([squareMetersVineyard, kiloGrapePerSquareMeter, needeLitersWine, numberOfWorkers]) {

    squareMetersVineyard = Number(squareMetersVineyard);
    kiloGrapePerSquareMeter = Number(kiloGrapePerSquareMeter);
    neededLitersWine = Number(needeLitersWine);
    numberOfWorkers = Number(numberOfWorkers);

    let totalGrape = squareMetersVineyard * kiloGrapePerSquareMeter;
    let totalWine = (totalGrape* 0.4)/2.5;
     
    if(totalWine >= neededLitersWine) {
        let remainderWine = totalWine - needeLitersWine;
        let winePerPerson = remainderWine / numberOfWorkers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
        console.log(`${Math.ceil(remainderWine)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`)
    } else {
        let notEnoughWine = Math.abs(totalWine - needeLitersWine);
        console.log(`It will be a tough winter! More ${Math.floor(notEnoughWine)} liters wine needed.`)
    }
}

harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);
harvest([950, 3, 125, 7]);
