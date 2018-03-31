function checkPrime(args) {
    let n = Number(args[0])
        let result = ''

        if(n <= 1) {
            result = 'Not Prime'
        } else if(n == 2) {
            result = 'Prime'
        } else {
            for(let i = 2; i < n; i++) {
                if(n % i == 0) {
                    result = 'Not Prime'
                    break;
                }  else {
                    result = 'Prime'
                }
            } 
        }
    console.log(result)
}

// checkPrime(["2"])
// checkPrime(["3"])
// checkPrime(["5"])
checkPrime(["-1"])
// checkPrime(["11"])
// checkPrime(["13"])
// checkPrime(["17"])