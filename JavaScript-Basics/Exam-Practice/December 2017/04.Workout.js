function workout(args) {
    let NDays = Number(args[0])
    let MKilometers = Number(args[1])
    let totalKm = Number(args[1])
    let runningKm
    let diff

    for(let i = 2; i < args.length; i++) {
        MKilometers += MKilometers * (Number(args[i]))/ 100
        totalKm += MKilometers 
    }

    diff = 1000 - totalKm
    if(diff <= 0) {
        console.log(`You've done a great job running ${Math.ceil(Math.abs(diff))} more kilometers! `)
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`)
    }
}

workout(["5", "30", "10", "15", "20", "5", "12"])
workout(["4", "100", "30", "50", "60", "80"])