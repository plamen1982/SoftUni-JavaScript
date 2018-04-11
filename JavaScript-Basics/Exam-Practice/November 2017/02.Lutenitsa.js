function lutenitsa(args) {
    let kilogramsTomatos = Number(args[0])
    let numberBoxesInTruck = Number(args[1])
    let numberJarsInBox = Number(args[2])

    let totalLutenitsa = kilogramsTomatos / 5
    let jarsLutenitsa = totalLutenitsa / 0.535
    let boxesWithJars = jarsLutenitsa / numberJarsInBox

    // console.log(totalLutenitsa)
    // console.log(jarsLutenitsa)
    // console.log(boxesWithJars)

    let diffBoxes = boxesWithJars - numberBoxesInTruck
    let diffJars = jarsLutenitsa - numberJarsInBox * numberBoxesInTruck
    console.log(`Total lutenica: ${Math.floor(totalLutenitsa)} kilograms.`)

    if(diffBoxes >= 0) {

        console.log(`${Math.floor(diffBoxes)} boxes left.`)
        console.log(`${Math.floor(diffJars)} jars left.`)

    } else {
        diffBoxes =  Math.abs(diffBoxes)
        diffJars =  Math.abs(diffJars)
        console.log(`${Math.floor(diffBoxes)} more boxes needed.`)
        console.log(`${Math.floor(diffJars)} more jars needed.`)

    }
}

lutenitsa(["82000", "400", "20"])
lutenitsa(["12345.67", "520", "36"])