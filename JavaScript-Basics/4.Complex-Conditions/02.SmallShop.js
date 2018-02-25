function smallShop([nameItem, city, numberItems]) {
    numberItems = Number(numberItems);
    city = city.toLowerCase();
    nameItem = nameItem.toLowerCase();

    if(city === 'sofia') {
        switch(nameItem) {
            case 'coffee':
                console.log( numberItems * 0.5 );
                break;
            case 'water':
                console.log( numberItems * 0.8 );
                break;
            case 'beer':
                console.log( numberItems * 1.2 );
                break;
            case 'sweets':
                console.log( numberItems * 1.45 );
                break;
            case 'peanuts':
                console.log( numberItems * 1.6 );
                break;
        }
    } else if(city === 'plovdiv') {
        switch(nameItem) {
            case 'coffee':
                console.log( numberItems * 0.4 );
                break;
            case 'water':
                console.log( numberItems * 0.7 );
                break;
            case 'beer':
                console.log( numberItems * 1.15 );
                break;
            case 'sweets':
                console.log( numberItems * 1.3 );
                break;
            case 'peanuts':
                console.log( numberItems * 1.5 );
                break;
        }
    } else if(city === 'varna') {
        switch(nameItem) {
            case 'coffee':
                console.log( numberItems * 0.45 );
                break;
            case 'water':
                console.log( numberItems * 0.7 );
                break;
            case 'beer':
                console.log( numberItems * 1.1 );
                break;
            case 'sweets':
                console.log( numberItems * 1.35 );
                break;
            case 'peanuts':
                console.log( numberItems * 1.55 );
                break;
        }
    }
}

smallShop(['coffee', 'Varna', 2]);
smallShop(['peanuts', 'Plovdiv', 1]);
smallShop(['beer', 'Sofia', 6]);
smallShop(['water', 'Plovdiv', 3]);
smallShop(['sweets', 'Sofia', 2.23]);