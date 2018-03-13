function hotelRoom(args) {
    let month = String(args[0]);
    let daysToStay = Number(args[1]);
    let priceApartment;
    let priceStudio;
    let discountStudio;
    let discountApartment;

    if(month == 'May'  || month == 'October') {
        if(daysToStay > 7 && daysToStay <= 14) {
            let discountStudio = 0.05;            
            priceStudio = daysToStay * 50 - (daysToStay * 50) * discountStudio;
            priceApartment = daysToStay * 65;
        } else if(daysToStay > 14) {
            discountStudio = 0.3;
            discountApartment = 0.1; 
            priceStudio = daysToStay * 50 - (daysToStay * 50) * discountStudio;
            priceApartment = daysToStay * 65 - (daysToStay * 65) * discountApartment;
        } else if(daysToStay <= 7) {
            priceStudio = daysToStay * 50;
            priceApartment = daysToStay * 65;
        }
    } 
    if(month == 'June'  || month == 'September') {
        if(daysToStay > 14) {
            discountStudio = 0.2;
            discountApartment = 0.1; 
            priceStudio = daysToStay * 75.20 - (daysToStay * 75.20) * discountStudio;
            priceApartment = daysToStay * 68.7 - (daysToStay * 68.7) * discountApartment;
        } else  {
            priceStudio = daysToStay * 75.20;
            priceApartment = daysToStay * 68.7;
        }
    } 
    if(month == 'July'  || month == 'August') {
        if(daysToStay > 14) {
            discountApartment = 0.1; 
            priceStudio = daysToStay * 76;
            priceApartment = daysToStay * 77 - (daysToStay * 77) * discountApartment;
        } else  {
            priceStudio = daysToStay * 76;
            priceApartment = daysToStay * 77;
        }
    } 
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
    
}

hotelRoom(['May', 15]);
hotelRoom(['June', 14]);