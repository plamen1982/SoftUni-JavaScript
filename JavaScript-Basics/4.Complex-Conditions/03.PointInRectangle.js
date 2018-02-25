function pointInRectangle([x1, y1, x2, y2, x, y]) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    if(x <= x2 && x >= x1 ) {
        if( y <= y2 && y >= y1) {
            console.log('Inside');
        } else {
            console.log('Outside');
        }
    } else {
        console.log('Outside');
    }
}

pointInRectangle([2, -3, 12, 3, 8, -1]);
pointInRectangle([2, -3, 12, 3, 11, -3.5]);
pointInRectangle([-1, -3, 4, 1, 0.5, 1]);
pointInRectangle([-1, -3, 4, 1, -1.2, -1.4]);