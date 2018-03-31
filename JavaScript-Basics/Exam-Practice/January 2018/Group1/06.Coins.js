function coins(args) {
    let change = Number(args[0])
    let totalCoins = 0

    let levs = Math.floor(change - change % 1)
    let coins = Math.round((change % 1) * 100 )

    let twoLevs = Math.floor(levs / 2) 
    let oneLevs = levs - twoLevs * 2

    let coins50 = Math.floor(coins / 50)
    let coins20 = Math.floor((coins - coins50 * 50) / 20)
    let coins10 = Math.floor((coins - coins50 * 50 - coins20 * 20)/10)
    let coins5 = Math.floor((coins - coins50 * 50 - coins20 * 20 - coins10 * 10)/5)
    let coins2 = Math.floor((coins - coins50 * 50 - coins20 * 20 - coins10 * 10 - coins5 * 5)/2)
    let coins1 = Math.floor(coins - coins50 * 50 - coins20 * 20 - coins10 * 10 - coins5 * 5 - coins2 * 2)

    totalCoins = twoLevs + oneLevs + coins50 + coins20 + coins10 + coins5 + coins2 + coins1
    console.log(totalCoins)
}


coins(["3.73"])
// coins(["2"])
// coins(["0.56"])
// coins(["0.73"])