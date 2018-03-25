function ilidan(args) {
    let totalPeople = Number(args[0])
    let powerPerPerson = Number(args[1])
    let ilidansBlood = Number(args[2])

    let totalPower = totalPeople * powerPerPerson
    let diff = totalPower - ilidansBlood
    if(diff > 0) {
        console.log(`Illidan has been slain! You defeated him with ${diff} points.`)
    } else {
        console.log(`You are not prepared! You need ${Math.abs(diff)} more points.`)
    }
}

ilidan(["25", "200", "2000"])