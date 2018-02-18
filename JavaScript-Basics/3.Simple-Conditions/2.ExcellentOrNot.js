function isExcellentOrNot([arg]) {
    const grade = Number(arg)
    if(grade >= 5.50) {
        console.log('Excellent!')
    } else {
        console.log('Not excellent.')
    }
}

isExcellentOrNot([6]);
isExcellentOrNot([5]);
isExcellentOrNot([5.50]);
isExcellentOrNot([5.49]);