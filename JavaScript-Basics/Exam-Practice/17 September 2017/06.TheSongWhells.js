function theSongWheels(args) {
    let n = Number(args[0])
    let count = 0
    let password
    let result = ''

    for(let i1 = 1; i1 <= 9; i1++) {
        for(let i2 = 1; i2 <= 9; i2++) {
            for(let i3 = 1; i3 <= 9; i3++) {
                for(let i4 = 1; i4 <= 9; i4++) {
                    if(i1 < i2 && i3 > i4) {
                        if(i1 * i2 + i3 * i4 == n) {
                            result += '' + i1 + i2 + i3 + i4 + ' '
                            count++
                            if(count == 4) {
                                password = '' + i1 + i2 + i3 + i4
                            }
                        }
                    }
                }
            }
        }
    }
    if(password&&result) {
        console.log(result)
        console.log(`Password: ${password}`)
    } else if(result){
        console.log(result)
        console.log('No!')        
    } else {
        console.log('No!')
    }

}

// theSongWheels([11])
// theSongWheels([139])
// theSongWheels([110])
theSongWheels([55])