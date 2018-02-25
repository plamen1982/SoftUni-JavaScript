function cinema([typeProjection, row, col]) {    
    typeProjection = typeProjection.toLowerCase();
    let totalSeats = row * col;
    
    let priceTicket = {
        premiere: 12,
        normal: 7.5,
        discount: 5
    }


    switch(typeProjection) {
        case 'premiere':
            console.log(`${ (priceTicket.premiere * totalSeats).toFixed(2) } leva`);
            break;
        case 'normal':
            console.log(`${ (priceTicket.normal*totalSeats).toFixed(2) } leva`);
            break;
        case 'discount':
            console.log(`${ (priceTicket.discount*totalSeats).toFixed(2) } leva`);
            break;
    }
}

cinema(['Premiere', 10, 12]);
cinema(['Normal', 21, 13]);
cinema(['Premiere', 12, 30]);