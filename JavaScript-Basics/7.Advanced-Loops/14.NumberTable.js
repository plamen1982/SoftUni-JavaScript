function numberTable(args) {
    let n = Number(args[0])
    let digit;
    for(let i = 1; i <= n; i++) {
        let result = ''
        for(j = i; j < n + i; j++) {
            if(j <= n) {
                digit = j
            } else {
                digit--
            }
        result += digit + " "
            
        }
        console.log(result)
    }

}

// numberTable(["2"])
// numberTable(["3"])
// numberTable(["4"])
numberTable(["5"])