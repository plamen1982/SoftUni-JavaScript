function magicNumbers(args) {
    let n = Number(args[0])
    let result = ""

    for(let l1 = 0; l1 <= 9; l1++) {
        for(let l2 = 0; l2 <= 9; l2++) {
            for(let l3 = 0; l3 <= 9; l3++) {
                for(let l4 = 0; l4 <= 9; l4++) {
                    for(let l5 = 0; l5 <= 9; l5++) {
                        for(let l6 = 0; l6 <= 9; l6++) {
                            if(l1 * l2 * l3 * l4 * l5 * l6 == n) {
                                result += "" + l1 + l2 + l3 + l4 + l5 + l6 + " " 
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result)
}

// magicNumbers(["2"])
// magicNumbers(["8"])
magicNumbers(["531441"])