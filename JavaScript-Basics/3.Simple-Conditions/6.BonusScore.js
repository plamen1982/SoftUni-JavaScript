function bonusScore([arg]) {
    let number = Number(arg);

    function addBonusForEvenOrFive(num) {
        if(num % 2 == 0) {
            return 1
        } else if(num % 10 == 5) {
            return 2
        } else {
            return 0
        }
    }

    if(number <= 100) {
        let bonus = 5 + addBonusForEvenOrFive(number);
        number += bonus;
        console.log(bonus);
        console.log(number);
        
    }  else if(number > 100 && number < 1000) {
        let bonus = number * 0.2 + addBonusForEvenOrFive(number);
        number += bonus;
        console.log(bonus);
        console.log(number);
    } 
    
    else if(number > 1000) {
        let bonus = number * 0.1 + addBonusForEvenOrFive(number);
        number += bonus;
        console.log(bonus);
        console.log(number);
    }
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);



