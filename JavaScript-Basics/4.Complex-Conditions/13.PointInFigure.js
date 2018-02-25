function pointInFigure([h, x, y]) {
    h = Number(h);
    x = Number(x);
    y = Number(y);

    let insideHorFigureWithBorder = ( x >= 0 && x <= 3 * h && y >= 0 && y <= h );
    let insideVertFigureWithBorder = ( x >= h && x <= 2 * h && y >= h && y <= 4 * h );
    let insideHorFigure = (x > 0 && x < 3 * h && y > 0 && y < h); 
    let insideVertFigure = (x > h && x < 2 * h && y > h && y < 4 * h)
    let commonSide = (x > h && x < 2 * h && y === h );

    if(insideHorFigureWithBorder || insideVertFigureWithBorder) {
        if(insideHorFigure || insideVertFigure || commonSide) {
             console.log('inside');
        } else {
             console.log('border');
        }
    } else {
        console.log('outside');
    }
}

pointInFigure([2, 3, 10]);
pointInFigure([2, 3, 1]);
pointInFigure([2, 2, 2]);
pointInFigure([2, 6, 0]);
pointInFigure([2, 0, 6]);
pointInFigure([15, 13, 55]);
pointInFigure([15, 29, 37]);
pointInFigure([15, 37, 18]);
pointInFigure([15, -4, 7]);
pointInFigure([15, 30, 0]);