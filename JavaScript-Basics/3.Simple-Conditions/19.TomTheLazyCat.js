function lazyCatTom([vacationDays]) {
    
    vacationDays = Number(vacationDays);
    let vacationMinutes = vacationDays * 127;
    let workingMinutes = (365 - vacationDays) * 63;
    let totalMinutesForPlay = vacationMinutes + workingMinutes;
    let minutesNeededForTom = 30000;
    let differenceMinutes = totalMinutesForPlay - minutesNeededForTom;
    let minutes = differenceMinutes % 60;
    let hours = (differenceMinutes - minutes) / 60;

    if(totalMinutesForPlay < 30000) {
        console.log(`Tom sleeps well \n${Math.abs(hours)} hours and ${Math.abs(minutes)} minutes less for play`)
    } else {
        console.log(`Tom will run away \n${hours} hours and ${minutes} minutes more for play`)
    }
}

lazyCatTom([20]);
lazyCatTom([113]);