function arenaTournament(args) {
    let nikisPoints = Number(args[0])
    let nameArena = String(args[1])
    let dayOfWeek = String(args[2])
    let conditionItem = String(args[3])
    let priceOfItem = 0;
    let discount = 0;

    switch(conditionItem) {
        case 'Legendary': priceOfItem = 21000;
        break;
        case 'Normal': priceOfItem = 14000;
        break;
        case 'Poor': priceOfItem = 7000;
        break;
    }
    // console.log(dayOfWeek)
    // console.log(priceOfItem)
    if(nameArena == 'Nargand' && dayOfWeek == "Monday" || nameArena == 'Nargand' && dayOfWeek == "Wednesday"){
        discount = 0.05;
    } else if(nameArena == 'Gurubashi' && dayOfWeek == "Tuesday" || nameArena == 'Gurubashi' && dayOfWeek == "Thursday") {
        discount = 0.1;
    } else if(nameArena == 'Dire Maul' && dayOfWeek == "Friday" || nameArena == 'Dire Maul' && dayOfWeek == "Saturday") {
        discount = 0.07;
    } 

    let priceAfterDiscoutn = priceOfItem - priceOfItem * discount
    let priceforSingleItem = priceAfterDiscoutn / 5;
    let countItems = 0;
    // console.log(priceforSingleItem)
    while(nikisPoints >= priceforSingleItem) {
        nikisPoints = nikisPoints - priceforSingleItem
        // console.log(priceAfterDiscoutn)
        countItems++
        if (countItems == 5) {
            break
        }
    }
    // console.log(countItems)
    // console.log(nikisPoints)

    if(countItems >= 5) {
        console.log(`Items bought: ${countItems}`)
        console.log(`Arena points left: ${nikisPoints}`)
        console.log(`Success!`)
    } else {
        console.log(`Items bought: ${countItems}`)
        console.log(`Arena points left: ${nikisPoints}`)
        console.log(`Failure!`)
    }
}


arenaTournament(["20000", "Dire Maul", "Friday", "Legendary"])
arenaTournament(["10000", "Nargand", "Monday", "Legendary"])

arenaTournament(["15000", "Gurubashi", "Thursday", "Poor"])