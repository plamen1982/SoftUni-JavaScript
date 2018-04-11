function profit(args) {
    let coin1 = Number(args[0])
    let coin2 = Number(args[1])
    let levs5 = Number(args[2])

    let sum = Number(args[3])
    let remain;
    let i = 0
    let j = 0
    let k = 0
    for(let i = 0; i <= coin1; i++) {
        
        for(let j = 0; j <= coin2; j++) {             
            
            for(let k = 0; k <= levs5; k++) {

               if(i * 1 + j * 2 + k * 5 === sum) {
                console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
               }
            }
        }
    }
}

profit(["3", "2", "3", "10"])