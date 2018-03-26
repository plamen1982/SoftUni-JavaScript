function csgo(args) {
    let n = Number(args[0])
    let budget = Number(args[1])
    let spendMoney = 0;
    let countItems = 0;

    if(n > 7) {
        console.log('Sorry, you can\'t carry so many things!')
    } else {
        for(let i = 2; i < n + 2; i++) {
            switch(args[i]) {
                case 'ak47' : 
                     countItems++
                     spendMoney += 2700
                     break
                 case 'awp' : 
                     countItems++
                     spendMoney += 4750
                     break
                 case 'sg553' : 
                     countItems++
                     spendMoney += 3500
                     break
                 case 'grenade' : 
                     countItems++
                     spendMoney += 300
                     break
                case 'flash' : 
                     countItems++
                     spendMoney += 250
                     break
                 case 'glock' : 
                     countItems++
                     spendMoney += 500
                     break
                 case 'bazooka' : 
                     countItems++
                     spendMoney += 5600
                     break
            }
         }
         let diff = budget - spendMoney

         if(diff > 0) {
             console.log(`You bought all ${countItems} items! Get to work and defeat the bomb!`)
         } else {
             console.log(`Not enough money! You need ${Math.abs(diff)} more money.`)
         }
    }
}

// csgo(["5", 10000, "awp", "glock", "grenade", "flash", "flash"])
csgo(["3", 4150, "sg553", "glock", "grenade"])
// csgo(["8", 6300])