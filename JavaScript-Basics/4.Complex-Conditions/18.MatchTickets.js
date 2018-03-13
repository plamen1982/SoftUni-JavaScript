function matchTickets(args) {
    let budget = Number(args[0]);
    let typeTicket = String(args[1]);
    let numberPeople = Number(args[2]);
    let vipTicket = 499.99;
    let normalTicket = 249.99;
    let diff;
    let moneyForTransport;

    if(numberPeople >= 1 && numberPeople <= 4) {
        moneyForTransport = budget * 0.75;
        budget = budget - moneyForTransport;
        if(typeTicket == 'VIP') {
            diff = budget - numberPeople * vipTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
        if(typeTicket == 'Normal') {
            diff = budget - numberPeople * normalTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
    } else if(numberPeople <= 9) {
        moneyForTransport = budget * 0.60;
        budget = budget - moneyForTransport;
        if(typeTicket == 'VIP') {
            diff = budget - numberPeople * vipTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
        if(typeTicket == 'Normal') {
            diff = budget - numberPeople * normalTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 

    } else if(numberPeople <= 24) {
        moneyForTransport = budget * 0.50;
        budget = budget - moneyForTransport;
        if(typeTicket == 'VIP') {
            diff = budget - numberPeople * vipTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
        if(typeTicket == 'Normal') {
            diff = budget - numberPeople * normalTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
    } else if(numberPeople <= 49) {
        moneyForTransport = budget * 0.40;
        budget = budget - moneyForTransport;
        if(typeTicket == 'VIP') {
            diff = budget - numberPeople * vipTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
        if(typeTicket == 'Normal') {
            diff = budget - numberPeople * normalTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
    } else if(numberPeople >= 50) {
        moneyForTransport = budget * 0.25;
        budget = budget - moneyForTransport;
        if(typeTicket == 'VIP') {
            diff = budget - numberPeople * vipTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
        if(typeTicket == 'Normal') {
            diff = budget - numberPeople * normalTicket;
            if(diff >= 0) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
            }
        } 
    }
}

matchTickets([1000, 'Normal', 1]);
matchTickets([30000, 'VIP', 49]);