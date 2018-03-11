function onTimeForExam([hourForExam, minForExam, hourArriving, minArriving]) {
    hourForExam = Number(hourForExam);
    hourArriving = Number(hourArriving);
    minForExam = Number(minForExam);
    minArriving = Number(minArriving);

    let totalMinutesExam = hourForExam * 60 + minForExam;
    let totalMinutesArriving = hourArriving * 60 + minArriving;
    let diffTotalTime =  totalMinutesArriving - totalMinutesExam;

    //After start of the exam
    
    if(diffTotalTime > 0) {
        console.log('Late');

        if(diffTotalTime % 60 == 0 && diffTotalTime >= 60) {
            console.log(`${convertMinToHoursAndMin(diffTotalTime).hours}:00 hours after the start`);
        } else if(diffTotalTime > 0 && diffTotalTime < 60) {
            console.log(`${diffTotalTime} minutes after the start`);
        } else {
            if(diffTotalTime % 60 >= 1 && diffTotalTime % 60 <= 9 && diffTotalTime > 60) {
            console.log(`${convertMinToHoursAndMin(diffTotalTime).hours}:0${convertMinToHoursAndMin(diffTotalTime).minutes} hours after the start`);
            } else {
                console.log(`${convertMinToHoursAndMin(diffTotalTime).hours}:${convertMinToHoursAndMin(diffTotalTime).minutes} hours after the start`);
            }
        }
    } 
    //Before start of the exam
    if(diffTotalTime <= 0) {
        if(diffTotalTime == 0) {
            console.log('On time');
        } else if(diffTotalTime >= -30 && diffTotalTime < 0) {

            if(diffTotalTime >= -9 && diffTotalTime <= -1) {
                console.log('On time');
                console.log(`${Math.abs(diffTotalTime)} minutes before the start`);
            } else {
                console.log('On time');
                console.log(`${Math.abs(diffTotalTime)} minutes before the start`);
            }

        } else if(diffTotalTime < -30 && diffTotalTime >= -59){
            console.log('Early');
            console.log(`${Math.abs(diffTotalTime)} minutes before the start`);
        } else if(diffTotalTime % 60 == 0 && diffTotalTime <= -60) {
            console.log('Early');
            console.log(`${convertMinToHoursAndMin(diffTotalTime).hours}:00 hours before the start`)
        }  else {
            if(diffTotalTime % 60 >= -9 && diffTotalTime % 60 <= -1 && diffTotalTime <= -60) {
                console.log('Early');
                console.log(`${convertMinToHoursAndMin(diffTotalTime).hours}:0${convertMinToHoursAndMin(diffTotalTime).minutes} hours before the start`)
            } else {
                console.log('Early');
                console.log(`${convertMinToHoursAndMin(diffTotalTime).hours}:${convertMinToHoursAndMin(diffTotalTime).minutes} hours before the start`)
            }  
        }
    }
    function convertMinToHoursAndMin(time){
        time = Math.abs(time);
        let minutes = time % 60;
        let hours = (time - minutes)/60;
    
        return {
            minutes: minutes,
            hours: hours
        }
    }
}

onTimeForExam([9, 30, 9, 21]); 
console.log('------');

onTimeForExam([9, 30, 9, 39]); 
console.log('------');

onTimeForExam([10, 30, 9, 21]); 
console.log('------');

onTimeForExam([9, 30, 10, 39]); 
console.log('------');

onTimeForExam([9, 30, 9, 50]); 
console.log('------');

onTimeForExam([9, 00, 8, 30]);
console.log('------');

onTimeForExam([16, 00, 15, 00]); 
console.log('------');

onTimeForExam([9, 00, 10, 30]); 
console.log('------');

onTimeForExam([14, 00, 13, 55]);
console.log('------');

onTimeForExam([11, 30, 8, 12]);
console.log('------');

onTimeForExam([10, 00, 10, 00]);
console.log('------');

onTimeForExam([11, 30, 10, 55]);
console.log('------');

onTimeForExam([11, 30, 12, 29]);