function trainingLabSeats([l, w]) {
    let lengthOfSeat = 1.2;
    let widthOfSeat = 0.7;
    let widthOfCorridor = 1;

    let numberOfSeatsOnLength = Math.floor(l / lengthOfSeat)
    let widthWithoutCorridor = w - widthOfCorridor;
    let numberOfSeathOnWidth = Math.floor(widthWithoutCorridor / widthOfSeat)
    let numberOfSeats = (numberOfSeathOnWidth * numberOfSeatsOnLength) - 3;
    
    console.log(numberOfSeats)
}

trainingLabSeats([15, 8.9])
trainingLabSeats([8.4, 5.2])
