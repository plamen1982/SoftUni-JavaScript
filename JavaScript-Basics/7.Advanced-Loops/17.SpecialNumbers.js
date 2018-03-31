function specialNumbers(args) {
    let n = Number(args[0])
    let result = ''
    for(let i = 1111; i <= 9999; i++) {
        let fourth = i % 10;
        let remainFourth = Math.floor(i / 10)
        let third = remainFourth % 10;
        let remainThird = Math.floor(remainFourth / 10)
        let second = remainThird % 10;
        let remainSecond = Math.floor(remainThird / 10)
        let first = remainSecond % 10;

        // console.log(`1: ${first} 2: ${second} 3: ${third} 4: ${fourth}`)
        let specialNumber = ''
        if(n % first == 0 && n % second == 0 && n % third == 0 && n % fourth == 0) {
            specialNumber = '' +  first + second + third + fourth + ' '
        }
        result += specialNumber
    }
    console.log(result)
}

specialNumbers(["16"])