function tailoring(args) {
    let numberTables = Number(args[0])
    let widthTable = Number(args[1])
    let lengthTable = Number(args[2])

    let usaToBg = 1.85
    let coverPerMeterDollars = 7
    let squarePerMeterDollars = 9

    let widthCoverleTables = widthTable + 0.6
    let lengthCoverTables = lengthTable + 0.6

    let sideCoverSqare = widthTable / 2

    let areaCoverTables = widthCoverleTables * lengthCoverTables
    let areaCoverSquare = sideCoverSqare * sideCoverSqare

    let totalAreaCoverTables = numberTables * areaCoverTables
    let totalAreaCoverSuare = numberTables * areaCoverSquare

    let totalCoverTableInDollars = totalAreaCoverTables * coverPerMeterDollars
    let totalCoverBoxInDollars = totalAreaCoverSuare * squarePerMeterDollars

    let totalInDollars = totalCoverTableInDollars + totalCoverBoxInDollars
    let totalInLevs = totalInDollars * 1.85

    console.log(`${totalInDollars.toFixed(2)} USD`)
    console.log(`${totalInLevs.toFixed(2)} BGN`)
}

tailoring(["50", "1.10", "1.10"])