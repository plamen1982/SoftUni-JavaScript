function cake(args) {

    let width = Number(args[0])
    let length = Number(args[1])

    let takenPieces = 0
    let numberPieces = width * length


    for(let i = 2; i < args.length + 2; i++) {
        if(args[i] == 'STOP') {
            console.log(`${numberPieces} pieces are left.`)
            break;
        } else {
            takenPieces += Number(args[i])
            numberPieces -= Number(args[i])
            if(numberPieces < 0) {
                console.log(`No more cake left! You need ${Math.abs(numberPieces)} pieces more.`)
                break;
            } 
        }
    }
}

// cake(["10", "10", 20, 20, 20, 20, 21])
cake([10, 2, 2, 4, 6, "STOP"])