function specialCombinations(args) {
    let hundreds = Number(args[0])
    let tens = Number(args[1])
    let ones = Number(args[2])
    let primeNumbers = [2, 3, 5, 7]
    let result  = ''
 

    for(let s = 2; s <= hundreds; s++) {

        for(let j = 2; j <= tens; j++ ) {
            
            for(let i = 2; i <= ones; i++) {
                
                let isPrime = true;

                for(let q = 2; q <= Math.sqrt(j); q++ ) {
                    if(j % q == 0) {
                        isPrime = false;
                    }
                }
                if(i % 2 == 0 && s % 2 == 0 && isPrime == true) {
                    console.log(`${s} ${j} ${i}`)
                }
            }
        }
    }
}

// specialCombinations(["3", "5", "5"])
specialCombinations(["8", "2", "8"])