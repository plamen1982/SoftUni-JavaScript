function personalTitles([age, gender]) {
    age = Number(age);
    if(gender === 'f') {
        if(age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else if(gender === 'm'){
        if(age >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }
}

personalTitles([12, 'f']);
personalTitles([16, 'm']);