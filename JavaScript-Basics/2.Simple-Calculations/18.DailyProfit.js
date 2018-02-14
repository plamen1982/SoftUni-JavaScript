function dailyProfit([arg1, arg2, arg3]) {

    const workingDays = parseInt(arg1);
    const usdPerDay = parseFloat(arg2);
    const USDtoBGN = parseFloat(arg3);

    const monthlySalary = workingDays * usdPerDay;
    const bonuses = monthlySalary * 2.5;
    const yearlySalary = monthlySalary * 12 + bonuses;

    const taxes = yearlySalary * 0.25;

    const yearlySalaryAfterTaxes = yearlySalary - taxes;
    const yearlySalaryInBGN = yearlySalaryAfterTaxes * USDtoBGN;

    const averageProfitPerDay = (yearlySalaryInBGN / 365).toFixed(2);

    console.log(averageProfitPerDay);
}

dailyProfit([21, 75.00, 1.59]);
dailyProfit([15, 105.00, 1.71]);