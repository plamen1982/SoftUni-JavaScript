function traveling(args) {
    let budget = Number(args[0]);
    let season = String(args[1]);
    let stayInto;
    let destination;
    let moneyForRent;

    if(budget <= 100) {
        destination = 'Bulgaria'
        if(season == 'summer') {
            moneyForRent = (budget * 0.3).toFixed(2);
            stayInto = 'Camp';
        } else {
            moneyForRent = (budget * 0.7).toFixed(2);
            stayInto = 'Hotel';
        }
    } else if(budget <= 1000) {
        destination = 'Balkans'
        if(season == 'summer') {
            moneyForRent = (budget * 0.4).toFixed(2);
            stayInto = 'Camp';
        } else {
            moneyForRent = (budget * 0.8).toFixed(2);
            stayInto = 'Hotel';
        }
    } else if(budget > 1000) {
        destination = 'Europe'
            moneyForRent = (budget * 0.9).toFixed(2);
            stayInto = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${stayInto} - ${moneyForRent}`);
}

traveling([50, 'summer']);
traveling([75, 'winter']);
traveling([312, 'summer']);
traveling([678.53, 'winter']);
traveling([1500, 'summer']);