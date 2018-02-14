function moneyConventor([BitCoin, Jana, CommisionRate]) {
    const BITCOINTtoBGN = 1168;
    const USDtoBGN = 1.76;
    const EURtoBGN = 1.95;
    const JANAtoUSD = 0.15;

    const USD = Jana * JANAtoUSD;

    totalBGN = BitCoin * BITCOINTtoBGN + USD * USDtoBGN;
    totalEUR = totalBGN / EURtoBGN;

    commision = totalEUR * (CommisionRate / 100);

    totalEURWithoutCommision = (totalEUR - commision).toFixed(2);

    console.log(totalEURWithoutCommision)

}

moneyConventor([1, 5, 5]);
moneyConventor([20, 5678, 2.4]);
moneyConventor([7, 50200.12, 3]);