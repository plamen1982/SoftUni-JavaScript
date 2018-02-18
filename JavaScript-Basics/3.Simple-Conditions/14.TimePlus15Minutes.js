function timePlus15Minutes([arg1, arg2]) {
    let hours = Number(arg1);
    let minutes = Number(arg2) + 15;

    function leadZero(minutes) {
        if (minutes < 10) {
            return `0${minutes}`
        } else {
            return minutes
        }
    }

    function afterMidnight(hour) {
        if(hour == 24) {
            return 0;
        } else {
            return hour;
        }
    }

    if(minutes > 59) {
        hours = hours + 1;
        minutes = minutes % 60;
        
        console.log(`${afterMidnight(hours)}:${leadZero(minutes)}`);        
    } else {
        console.log(`${afterMidnight(hours)}:${leadZero(minutes)}`);                
    }
};

timePlus15Minutes([1, 46]);
timePlus15Minutes([0, 01]);
timePlus15Minutes([23, 59]);
timePlus15Minutes([11, 08]);
timePlus15Minutes([12, 49]);