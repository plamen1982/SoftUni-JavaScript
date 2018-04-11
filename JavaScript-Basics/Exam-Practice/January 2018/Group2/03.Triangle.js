function triangle(args) {
    let params = args

    // let params = args;
    // if(args[0].indexOf('\n')>-1) {
    // params = args[0].split('\n');
    // }

    let a = Number(params[0])
    let b = Number(params[1])
    let c = Number(params[2])
    if(a < (b + c) && b < (a + c) && c <(a + b)) {
        if(a == b && a == c) {
            console.log(`Triangle with sides ${a}, ${b} and ${c} is equilateral.`)
        } else if(a == b || a == c || b == c) {
            console.log(`Triangle with sides ${a}, ${b} and ${c} is isosceles.`)
        } else {
            console.log(`Triangle with sides ${a}, ${b} and ${c} is scalene.`)
        }
    } else {
        console.log(`There is no triangle with sides ${a}, ${b} and ${c}.`)
    }
}

triangle(["3" , "4", "5"])
// triangle(["1" , "5", "1"])
// triangle(["13" , "13", "3"])
// triangle(["5" , "5", "5"])
// triangle(["38.3" , "42.5", "75"])