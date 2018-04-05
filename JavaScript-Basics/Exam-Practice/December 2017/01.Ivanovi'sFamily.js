function ivanovisFamily(args) {
    
    let budget = Number(args[0])
    let pricePresecnt1 = Number(args[1])
    let pricePresecnt2 = Number(args[2])
    let pricePresecnt3 = Number(args[3])
    
    let remainBudget = budget - pricePresecnt1 - pricePresecnt2 - pricePresecnt3
    let donation = remainBudget - remainBudget * 0.1

    console.log(donation.toFixed(2))
}

ivanovisFamily(["50", "10", "12", "13"])