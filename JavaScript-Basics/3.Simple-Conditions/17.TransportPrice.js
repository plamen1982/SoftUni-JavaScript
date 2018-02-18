function transportPrice([arg1, arg2]) {
    let km = Number(arg1);
    let shift = arg2;

    let taxi = {
        startTax: 0.7,
        dayShift: 0.79,
        nightShift: 0.9
    }

    let autobusTax = 0.09;
    let trainTax = 0.06;

    if(km < 20) {
        if(shift === 'day') {
            let price = taxi.startTax + taxi.dayShift * km;
            console.log(price.toFixed(2));
        } else if(shift === 'night') {
            let price = taxi.startTax + taxi.nightShift * km;
            console.log(price.toFixed(2));
        }
    } else if(km >= 20 && km < 100) {
        let price = km * autobusTax;
        console.log(price.toFixed(2));
    } else if(km >= 100) {
        let price = km * trainTax;
        console.log(price.toFixed(2));
    }
}

transportPrice([5, 'day']);
transportPrice([7, 'night']);
transportPrice([25, 'day']);
transportPrice([180, 'night']);