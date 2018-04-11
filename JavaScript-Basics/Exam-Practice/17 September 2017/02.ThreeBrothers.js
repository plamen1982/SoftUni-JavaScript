function threeBrothers(args) {
    let firstBrotherTime = Number(args[0])
    let secondBrotherTime = Number(args[1])
    let thirdBrotherTime = Number(args[2])
    let timeFather = Number(args[3])

    let timeAllBrothers = 1 / (1/firstBrotherTime + 1/secondBrotherTime + 1/thirdBrotherTime)
    
    let timeAllBrothersAndBreaks = timeAllBrothers + timeAllBrothers * 0.15
    let leftTime = timeFather - timeAllBrothersAndBreaks
    if(leftTime > 0) {
        console.log(`Cleaning time: ${timeAllBrothersAndBreaks.toFixed(2)}`)
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(leftTime)} hours.`)
    } else {
        console.log(`Cleaning time: ${timeAllBrothersAndBreaks.toFixed(2)}`)        
        console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(Math.abs(leftTime))} hours.`)
    }
}

// threeBrothers(["3", "4", "5", "3.6"])
threeBrothers(["3.2", "2.5", "1.24", "0.5"])