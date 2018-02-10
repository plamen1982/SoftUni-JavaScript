function circleAreaAndPerimeter(radiusInput) {
    let radius = parseFloat(radiusInput);
    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius; 
    console.log(`Area = ${area} Perimeter = ${perimeter}`)
}

circleAreaAndPerimeter(4.5)