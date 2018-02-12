function currencyConventor([arg1, arg2, arg3]) {

    let USDtoBGN = 1.79549;
    let EURtoBGN = 1.95583;
    let GBPtoBGN = 2.53405;
    let inputValue = arg1;
    let inputCurrency = arg2;
    let outputCurrency = arg3;

    let inputOutput = inputCurrency + outputCurrency;

    switch(inputOutput) {
        case 'BGNUSD':
            console.log(`${(inputValue / USDtoBGN).toFixed(2)} ${outputCurrency}`) 
            break;
        case 'BGNEUR':
            console.log(`${(inputValue / EURtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'BGNGBP':
            console.log(`${(inputValue / GBPtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'USDBGN':
            console.log(`${(inputValue * USDtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'USDEUR':
            console.log(`${((inputValue * USDtoBGN) / EURtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'USDGBP':
            console.log(`${((inputValue * USDtoBGN) / GBPtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'EURBGN':
            console.log(`${(inputValue * EURtoBGN.toFixed(2))} ${outputCurrency}`)
            break;
        case 'EURUSD':
            console.log(`${((inputValue * EURtoBGN) / USDtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'EURGBP':
            console.log(`${((inputValue * EURtoBGN) / GBPtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'GBPBGN':
            console.log(`${(inputValue * GBPtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
        case 'GBPEUR':
            console.log(`${((inputValue * GBPtoBGN) / EURtoBGN.toFixed(2))} ${outputCurrency}`)
            break;
        case 'GBPUSD':
            console.log(`${((inputValue * GBPtoBGN) / USDtoBGN).toFixed(2)} ${outputCurrency}`)
            break;
    }
}

currencyConventor([20, 'BGN', 'USD']);
currencyConventor([20, 'USD', 'BGN']);
currencyConventor([20, 'BGN', 'EUR']);
currencyConventor([20, 'EUR', 'GBP']);
currencyConventor([20, 'USD', 'EUR']);

function currencyConventor2 ([currencyValue, inputCurrency, outputCurrency]) {
 let currencyRate = { 'USD': 1.79549, 'EUR': 1.95583, 'GBP': 2.53405, 'BGN': 1 }
 let result = (currencyRate[inputCurrency] * currencyValue) / currencyRate[outputCurrency]
 console.log(`${result.toFixed(2)} ${outputCurrency}`)
}

currencyConventor2([20, 'BGN', 'USD']);
currencyConventor2([20, 'USD', 'BGN']);
currencyConventor2([20, 'BGN', 'EUR']);
currencyConventor2([20, 'EUR', 'GBP']);
currencyConventor2([20, 'USD', 'EUR']);