function danceHall(args) {
    let params = args

    if(args[0].indexOf('\n') > -1) {
        params = args[0].split('\n')
    }

    let length = Number(params[0])
    let width = Number(params[1])
    let sideChest = Number(params[2])

    let areaHall = (length * 100) * (width * 100)
    let areaChest = (sideChest * 100) * (sideChest * 100)
    let spearSpace = areaHall - areaChest - (areaHall / 10) 
    let numberDancers = Math.floor(spearSpace / (40 + 7000))

    console.log(numberDancers)
}

// danceHall(["50", "25", "2"])
danceHall(["70", "20", "4"])