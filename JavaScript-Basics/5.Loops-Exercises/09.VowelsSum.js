function vowelsSum(args){
    let wordToSplit = String(args)
    let arrayOfChars = wordToSplit.split("");
    let vowelToValue = [ 'a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    for(i = 0; i < arrayOfChars.length; i++) {
        for(j = 0; j < vowelToValue.length; j++) {
            if(arrayOfChars[i] == vowelToValue[j]) {
                sum += Number(j + 1);
            }
        }
    }
    console.log(sum);
}
vowelsSum('hello');
vowelsSum('hi');
vowelsSum('bamboo');
vowelsSum('beer');

//second solution

function vowelsSum2(args) {
 let wordToSplit = String(args);
 let arrayOfChars = wordToSplit.split("");
 let sum = 0;

 for(let i = 0; i < arrayOfChars.length; i++) {
     switch(arrayOfChars[i]) {
         case 'a': sum += 1; 
            break;
         case 'e': sum += 2;
            break;
         case 'i': sum += 3;
            break;
         case 'o': sum += 4;
            break;
         case 'u': sum += 5;
            break;
        }
    }
}


vowelsSum2('hello');
vowelsSum2('hi');
vowelsSum2('bamboo');
vowelsSum2('beer');