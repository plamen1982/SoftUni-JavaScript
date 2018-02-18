function number0to100ToText([arg1]) {
    
    const number = Number(arg1);
    const remainder = number % 10;
    const tens = (number - remainder) / 10;

    const arrayNumbers0to19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arrayNumberOfTens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];

    if(number < 20 && number >= 0) {
        console.log(arrayNumbers0to19[number])
    } else if(number >= 20 && number < 100) {

        if(remainder === 0) {
            console.log(`${arrayNumberOfTens[tens - 1]}`)
        } else {
            console.log(`${arrayNumberOfTens[tens - 1]} ${arrayNumbers0to19[remainder]}`)
        }
    } else if(number === 100) {
        console.log(arrayNumberOfTens[9])
    } else {
        console.log('invalid number')
    }
}

number0to100ToText(["0"])