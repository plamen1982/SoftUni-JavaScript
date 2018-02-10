function rectangleArea([x1, y1, x2, y2]) {
    let a = Math.abs( parseFloat(x2) - parseFloat(x1) );
    let b = Math.abs( parseFloat(y2) - parseFloat(y1) );
    let area = a * b;
    let perimeter = Math.abs( 2*(a+b) );
    console.log(area);
    console.log(perimeter);
}

rectangleArea([60,20,10,50]);
rectangleArea([30,40,70,-10]);
rectangleArea([600.2, 5, 500.7, 5]);
