function balls(args) {
    let numberBalls = Number(args[0])
    let pointsRed = 0
    let pointsOrgange = 0
    let pointsYellow = 0
    let pointsWhite = 0
    let pointsBlack = 0
    let numberDiffColors = 0
    let totalPoints = 0

    let balls = []
    
    for(let i = 1; i <= numberBalls; i++) {
        balls.push(args[i])
    }
    for(let i = 0; i < balls.length; i++) {
        switch(balls[i]) {
            case "red": 
                pointsRed++
                totalPoints += 5
                break
            case "orange": 
                pointsOrgange++
                totalPoints += 10
                break
            case "yellow": 
                pointsYellow++
                totalPoints += 15
                break
            case "white": 
                pointsWhite++
                totalPoints += 20                
                break
            case "black": 
                pointsBlack++
                totalPoints = totalPoints / 2;
                break 

            default: numberDiffColors++

        }
    }
    console.log(`Total points: ${Math.floor(totalPoints)}`)
    console.log(`Points from red balls: ${pointsRed}`)
    console.log(`Points from orange balls: ${pointsOrgange}`)
    console.log(`Points from yellow balls: ${pointsYellow}`)
    console.log(`Points from white balls: ${pointsWhite}`)
    console.log(`Other colors picked: ${numberDiffColors}`)
    console.log(`Divides from black balls: ${pointsBlack}`)
}

balls(["3", "white", "black", "pink"])