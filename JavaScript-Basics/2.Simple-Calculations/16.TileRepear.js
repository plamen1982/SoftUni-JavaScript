function tileRepear([N, W, L, M, O]) {

    const sideOfField = parseInt(N);

    const widthTile = parseFloat(W);
    const lengthTile = parseFloat(L);

    const widthBench = parseInt(M);
    const lengthBench = parseInt(O);
    
    const fieldArea = sideOfField * sideOfField;

    const areaOfTile = widthTile * lengthTile;

    const areaOfBench = widthBench * lengthBench;

    const neededTiles = ((fieldArea - areaOfBench) / areaOfTile).toFixed(2);

    const timeForTiles = (neededTiles * 0.2).toFixed(2);

    console.log(neededTiles);
    console.log(timeForTiles);

}

tileRepear([20, 5, 4, 1, 2]);
tileRepear([40, 0.8, 0.6, 3, 5]);
