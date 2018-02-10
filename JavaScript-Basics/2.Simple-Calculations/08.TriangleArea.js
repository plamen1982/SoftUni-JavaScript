function triangleArea([arg1, arg2]) {
    let a = parseFloat(arg1);
    let h = parseFloat(arg2);
    let triangleArea = (a * h / 2).toFixed(2);
    console.log(`Triangle area = ${triangleArea}`); 
}

triangleArea([20, 30]);
triangleArea([15, 35]);
triangleArea([7.75, 8.45]);
triangleArea([1.23456, 4.56789]);