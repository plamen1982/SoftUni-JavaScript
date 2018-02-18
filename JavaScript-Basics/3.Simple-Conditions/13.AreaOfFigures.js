function areaOfFigures([arg1, arg2, arg3]) {
    const figure = String(arg1);
    const number1 = Number(arg2);
    const number2 = Number(arg3);

    if(figure === 'circle') {
        let area = Math.PI * Math.pow(number1, 2)
        console.log(area);
    } else if(figure === 'rectangle') {
        let area = number1 * number2;
        console.log(area);
    } else if(figure === 'square') {
        let area = Math.pow(number1, 2);
        console.log(area);        
    } else if (figure === 'triangle') {
        let area = (number1 * number2) / 2;
        console.log(area);
    }
}

areaOfFigures(['square', 5]);
areaOfFigures(['rectangle', 7, 2.5]);
areaOfFigures(['circle', 6]);
areaOfFigures(['triangle', 4.5, 20]);