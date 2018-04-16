function autonomy(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }
    let widthFreeSpace = Number(params[0])
    let lengthFreeSpace = Number(params[1])
    let heightFreeSpace = Number(params[2]) 

    let volumeRoom = widthFreeSpace * lengthFreeSpace * heightFreeSpace
    let boxesVolume = 0
    let diff;

    for(let i = 3; i < params.length; i++) {
        if(params[i] === 'Done') {
            break;
        } else {
            boxesVolume += Number(params[i])
        }
    }

    diff = volumeRoom - boxesVolume
    if(diff < 0) {
        console.log(`No more free space! You need ${Math.abs(diff)} Cubic meters more.`)
    } else {
        console.log(`${diff} Cubic meters left.`)
    }
}

autonomy(["10", "10", "2", "20", "20", "20", "20", "122"])
autonomy(["10", "1", "2", "4", "6", "Done"])