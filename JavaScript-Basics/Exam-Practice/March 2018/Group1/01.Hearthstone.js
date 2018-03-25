function hearthstone(args) {
    let timeForRelax = parseInt(args[0]);
    let priceForCards = parseFloat(args[1]);
    let priceForGame = parseFloat(args[2]);
    let priceForCoffy = parseFloat(args[3]);
    let totalSpendMoney = 0;
    let remainTime = 0;

    totalSpendMoney = priceForCoffy + 3 * priceForCards + 2 * priceForGame;
    remainTime = timeForRelax - 5 - 3 * 2 - 2 * 2;
    console.log(totalSpendMoney.toFixed(2))
    console.log(remainTime)
    
}

// hearthstone(["20", "2", "4", "3"])
// hearthstone(["35", "2.5", "1.2", "6.3"])
// hearthstone(["40", "16.66", "35", "4.20"])