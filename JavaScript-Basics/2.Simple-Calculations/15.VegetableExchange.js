function vegetableExchange([arg1, arg2, arg3, arg4]) {
    const priceKiloVeggie = parseFloat(arg1)
    const priceKiloFruits = parseFloat(arg2)

    const numberOfKilosVeggie = parseInt(arg3)
    const numberOfKilosFruits = parseInt(arg4)

    const BGNtoEUR = 1.94;

    const totalMoneyFromVeggie = priceKiloVeggie * numberOfKilosVeggie;

    const totalMoneyFromFruits = priceKiloFruits * numberOfKilosFruits;

    const totalMoneyBGN = totalMoneyFromVeggie + totalMoneyFromFruits;
    
    const totalMoneyEUR = (totalMoneyBGN / BGNtoEUR).toFixed(2);

    console.log(totalMoneyEUR);
}

vegetableExchange([0.194, 19.4, 10, 10]);
vegetableExchange([1.5, 2.5, 10, 10]);