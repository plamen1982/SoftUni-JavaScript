function voleyball([year, numberHolidaysInAYear, weekendsToHome ]) {
    
    weekendsToHome = Number(weekendsToHome);
    let totalWeekednsToPlay =  48 - weekendsToHome;
    year = year.toLowerCase();

    weekendsInSofia = totalWeekednsToPlay * 3/4;
    let actualPlay = weekendsInSofia + weekendsToHome + (numberHolidaysInAYear * 2/3);

    if(year === 'leap') {
        actualPlay = actualPlay + actualPlay * 0.15;
        console.log(Math.floor(actualPlay));
    } else {
        console.log(Math.floor(actualPlay));
    }
}

voleyball(['normal', 3, 2]);
voleyball(['leap', 2, 3]);
voleyball(['normal', 11, 6]);
voleyball(['leap', 0, 1]);
voleyball(['normal', 6, 13]);