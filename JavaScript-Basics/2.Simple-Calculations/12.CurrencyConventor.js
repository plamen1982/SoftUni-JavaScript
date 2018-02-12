function currencyConventor([arg1, arg2, arg3]) {

    let BGNtoUSD = 1.79549;
    let BGNtoEUR = 1.95583;
    let BGNtoGBP = 2.53405;
    let inputValue = arg1;
    let inputCurrency = arg2;
    let outputCurrency = arg3;

    let inputOutput = inputCurrency + outputCurrency;

    switch(inputOutput) {
        case 'BGNUSD':
            console.log(`${(inputValue / BGNtoUSD).toFixed(2)} ${outputCurrency}`) 
            break;
        case 'BGNEUR':
            console.log(`${(inputValue / BGNtoEUR).toFixed(2)} ${outputCurrency}`)
            break;
        case 'BGNGBP':
            console.log(`${(inputValue / BGNtoGBP).toFixed(2)} ${outputCurrency}`)
            break;
        case 'USDBGN':
            console.log(`${(inputValue * BGNtoUSD).toFixed(2)} ${outputCurrency}`)
            break;
        case 'USDEUR':
            console.log(`${((inputValue * BGNtoUSD) / BGNtoEUR).toFixed(2)} ${outputCurrency}`)
            break;
        case 'USDGBP':
            console.log(`${((inputValue * BGNtoUSD) / BGNtoGBP).toFixed(2)} ${outputCurrency}`)
            break;
        case 'EURBGN':
            console.log(`${(inputValue * BGNtoEUR.toFixed(2))} ${outputCurrency}`)
            break;
        case 'EURUSD':
            console.log(`${((inputValue * BGNtoEUR) / BGNtoUSD).toFixed(2)} ${outputCurrency}`)
            break;
        case 'EURGBP':
            console.log(`${((inputValue * BGNtoEUR) / BGNtoGBP).toFixed(2)} ${outputCurrency}`)
            break;
        case 'GBPBGN':
            console.log(`${(inputValue * BGNtoGBP).toFixed(2)} ${outputCurrency}`)
            break;
        case 'GBPEUR':
            console.log(`${((inputValue * BGNtoGBP) / BGNtoEUR.toFixed(2))} ${outputCurrency}`)
            break;
        case 'GBPUSD':
            console.log(`${((inputValue * BGNtoGBP) / BGNtoUSD).toFixed(2)} ${outputCurrency}`)
            break;
    }
}
usdToBgn([20, 'BGN', 'USD']);
usdToBgn([20, 'USD', 'BGN']);
usdToBgn([20, 'BGN', 'EUR']);
usdToBgn([20, 'EUR', 'GBP']);
usdToBgn([20, 'USD', 'EUR']);