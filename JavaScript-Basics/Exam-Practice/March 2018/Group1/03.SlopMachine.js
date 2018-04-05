function slotMachine(args) {
 let symbolN = String(args[0])
 let NumberN1 = Number(args[1])
 let symbolM = String(args[2])
 let NumberM1 = Number(args[3])
 let symbolK = String(args[4])
 let NumberK1 = Number(args[5])

//  console.log(String.fromCharCode(97))
// console.log('a'.charCodeAt())

let resultN = String.fromCharCode(symbolN.charCodeAt() + NumberN1);
let resultM = String.fromCharCode(symbolM.charCodeAt() + NumberM1);
let resultK = String.fromCharCode(symbolK.charCodeAt() + NumberK1);
let endResult = resultN + resultM + resultK
 
    if(resultN == '@' && resultM == '@' && resultK == '@') {
        console.log(endResult)
        console.log('!!! YOU LOSE EVERYTHING !!!')
    } else if(resultN == '7' && resultM == '7' && resultK == '7') {
        console.log(endResult)
        console.log('*** JACKPOT ***')
    } else {
        console.log(endResult)
    }
}

slotMachine(["a", "2", "a", "3", "a", "4"])
// slotMachine(["?","1","=","3", "9", "7"])
// slotMachine(["/", "8", "5", "2", "5", "2"])