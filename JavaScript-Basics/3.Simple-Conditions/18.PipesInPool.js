function checkHowFullIsPool([arg1, arg2, arg3, arg4]) {

    const poolInLiters = Number(arg1);
    const flowRatePipe1 = Number(arg2);
    const flowRatePipe2 = Number(arg3);
    const hours = Number(arg4);

    let litersFromPipe1 = flowRatePipe1 * hours;
    let litersFromPipe2 = flowRatePipe2 * hours;
    let totalLitersFromPipes = litersFromPipe1 + litersFromPipe2;

    let difference = poolInLiters - totalLitersFromPipes;
    
    if(difference < 0) {
        difference = Math.abs(difference);
        console.log(`For ${hours} hours the pool overflows with ${difference.toFixed(1)} liters.`)
    } else if(difference >= 0) {
        
        let percantage = (totalLitersFromPipes/ poolInLiters) * 100;
        let percantagePipe1 = (litersFromPipe1 / totalLitersFromPipes) * 100;
        let percantagePipe2 = (litersFromPipe2 / totalLitersFromPipes) * 100;

        console.log(`The pool is ${Math.floor(percantage)}% full. Pipe 1: ${Math.floor(percantagePipe1)}%. Pipe 2: ${Math.floor(percantagePipe2)}%.`);

    }
}

checkHowFullIsPool([1000, 100, 120, 3]);
checkHowFullIsPool([100, 100, 100, 2.5]);