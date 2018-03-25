function picturesInTheWall(args) {

    let widthHole = Number(args[0])
    let heightHole = Number(args[1])
    let sidePaintings = Number(args[2])
    let numberOfPaingtings = Number(args[3])

    let areaOfHole = widthHole * heightHole
    let areaOfOnePainting = sidePaintings * sidePaintings
    let totalAreaPaintings = areaOfOnePainting * numberOfPaingtings
    let diff = areaOfHole - totalAreaPaintings
    if(diff > 0) {
        console.log(`The pictures fit in the hole. Hole area is ${Math.abs(diff)} bigger than pictures area.`)
    } else {
        console.log(`The pictures don't fit in the hole. Picture area is ${Math.abs(diff)} bigger than hole area.`)
    }
}

picturesInTheWall(["10", "5", "2", "3"])
// picturesInTheWall(["16", "13", "12", "5"])