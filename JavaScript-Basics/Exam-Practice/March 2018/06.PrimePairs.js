function primePairs (args) {
    let params = args;

    //Check For SoftUni Judge
    // if(args[0].indexOf('\n')>-1) {
    // params = args[0].split('\n');
    // }

    let result = ''

    let initialFirstPair = Number(params[0])
    let initialSecondPair = Number(params[1])
    let diffFirstPair = Number(params[2])
    let diffSecondPair = Number(params[3])

    let firstPair = initialFirstPair + diffFirstPair
    let secondPair = initialSecondPair + diffSecondPair

    let arrFirstPairPrimes = getPrimes(firstPair)
    let arrSecondPairPrimes = getPrimes(secondPair)

    // console.log(arrFirstPairPrimes)
    // console.log(arrSecondPairPrimes)

    for(let i = 0; i < arrFirstPairPrimes.length; i++) {
        for(let j = 0; j < arrSecondPairPrimes.length; j++) {
            if(arrFirstPairPrimes[i] >= initialFirstPair && arrSecondPairPrimes[j] >= initialSecondPair) {
                result = '' + arrFirstPairPrimes[i] + arrSecondPairPrimes[j]
                console.log(result)
            }
        }
    }

    function getPrimes(max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }
}

primePairs(["10", "20", "5", "5"])