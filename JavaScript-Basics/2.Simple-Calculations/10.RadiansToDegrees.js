function radiansToDegrees(radiansInput) {
    let radians = parseFloat(radiansInput);
    let degrees = Math.round((radiansInput * 180)/Math.PI, 1);
    console.log(degrees);
}

radiansToDegrees(3.1416);
radiansToDegrees(6.2832);
radiansToDegrees(0.7854);
radiansToDegrees(0.5236);