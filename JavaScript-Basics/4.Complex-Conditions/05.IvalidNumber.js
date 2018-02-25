function invalidNumber([number]) {
    number = Number(number);
    if(number <= 200 && number >= 100) {
        console.log('');
    } else if(number === 0) {
        console.log('');
    } else {
        console.log('invalid');
    }
}

invalidNumber([75]);
invalidNumber([150]);
invalidNumber([220]);
invalidNumber([199]);
invalidNumber([-1]);
invalidNumber([100]);
invalidNumber([200]);
invalidNumber([0]);