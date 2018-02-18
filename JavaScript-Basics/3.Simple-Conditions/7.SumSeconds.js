function sumSeconds([arg1, arg2, arg3]) {

    let firstTime = Number(arg1);
    let secondTime = Number(arg2);
    let thirdTime = Number(arg3);

    function leadZero(arg) {
        if(arg < 10) {
            return `0${arg}`
        } else {
            return arg
        }
    }

    let sumTime = firstTime + secondTime + thirdTime;

    if(sumTime < 60 && sumTime >= 10) {
        console.log(`0:${sumTime}`)
    } else if(sumTime < 10) {
        console.log(`0:0${sumTime}`)
    } else {
        let seconds = sumTime % 60
        let minutes = (sumTime - seconds) / 60;
        console.log(`${minutes}:${leadZero(seconds)}`)
    }
}



sumSeconds([35, 45, 44]);
sumSeconds([22, 7, 34]);
sumSeconds([50, 50, 49]);
sumSeconds([14, 12, 10]);