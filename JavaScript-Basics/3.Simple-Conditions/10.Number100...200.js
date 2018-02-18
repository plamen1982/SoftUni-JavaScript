function numberBetween100and200([arg1]) {
    const number = Number(arg1);

    if(number < 100) {
        console.log('Less than 100');
    } else if(number >= 100 && number <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

numberBetween100and200([95]);
numberBetween100and200([100]);
numberBetween100and200([210]);