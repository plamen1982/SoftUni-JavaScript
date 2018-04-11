function birthday(args) {
    let length = Number(args[0])
    let width = Number(args[1])
    let height = Number(args[2])
    let percantage = Number(args[3]) / 100

    let volume = length * width * height
    volume = volume * 0.001

    volume = volume * (1 - percantage)
    console.log(volume.toFixed(3))
}

birthday(["85", "75", "47", "17"])