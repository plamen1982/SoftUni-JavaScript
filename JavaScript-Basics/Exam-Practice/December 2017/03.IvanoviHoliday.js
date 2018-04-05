function ivanovisHoliday(args) {
    let days = Number(args[0])
    let destination = String(args[1])
    let transportation = String(args[2])
    let hotelPrice;
    let hotelPricePerNight;
    let hotelPriceAndDog
    let transportPrice;
    let totalPrice

    if(destination === 'Miami') {
        if(days >= 1 && days <= 10) {
             hotelPricePerNight = 14.99 * 3 + 24.99 * 2
             hotelPrice = hotelPricePerNight * days
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        } else if(days >= 11 && days <= 15) {
             hotelPricePerNight = 11.99 * 3 + 22.99 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        } else if(days > 15) {
             hotelPricePerNight = 10.00 * 3 + 20.00 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        }
    } else if(destination === 'Canary Islands') {
        if(days >= 1 && days <= 10) {
             hotelPricePerNight = 28.50 * 3 + 32.50 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        } else if(days >= 11 && days <= 15) {
             hotelPricePerNight = 25.60 * 3 + 30.50 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        } else if(days > 15) {
             hotelPricePerNight = 22.00 * 3 + 28.00 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        }
    } else if(destination === "Philippines") {
        if(days >= 1 && days <= 10) {
             hotelPricePerNight = 39.99 * 3 + 42.99 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        } else if(days >= 11 && days <= 15) {
             hotelPricePerNight = 36.00 * 3 + 41.00 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        } else if(days > 15) {
             hotelPricePerNight = 32.40 * 3 + 38.50 * 2
             hotelPrice = hotelPricePerNight * days             
             hotelPriceAndDog = hotelPrice + hotelPrice * 0.25
        }
    }

    if(transportation === 'train') {
        transportPrice = 12.50 * 3 + 22.30 * 2   
    } else if(transportation === 'bus') {
        transportPrice = 37.00 * 3 + 45.00 * 2
    } else if(transportation === 'airplane') {
        transportPrice = 68.50 * 3 + 90.00 * 2 
    }
    totalPrice = hotelPriceAndDog + transportPrice
    console.log(totalPrice.toFixed(3))
}

ivanovisHoliday(["10", "Miami", "airplane"])