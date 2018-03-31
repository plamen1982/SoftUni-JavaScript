function generatorPasswords(args) {
    let n = Number(args[0])
    let l = Number(args[1])

    let firstLettersAlphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let text = ''

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            for(let k = 0; k < l; k++) {
                for(let p = 0; p < l; p++) {
                    let maxBetweenTwo = Math.max(i, j) + 1
                    for(let r = maxBetweenTwo; r <= n; r++) {
                        text += i.toString() + j.toString() + firstLettersAlphaBet[k] + firstLettersAlphaBet[p] + r.toString() + " "
                    }
                }
            }
        }
    }
    console.log(text)
}

// generatorPasswords(["2", "4"])
generatorPasswords(["3", "1"]);