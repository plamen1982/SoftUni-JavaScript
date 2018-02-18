function checkIfEqualWords([arg1, arg2]) {
    let word1 = String(arg1);
    let word2 = String(arg2);

    let word1Lower = word1.toLowerCase();
    let word2Lower = word2.toLowerCase();

    if(word1Lower === word2Lower) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

checkIfEqualWords(["Hello", "Hello"]);
checkIfEqualWords(["SoftUni", "softuni"]);
checkIfEqualWords(["Soft", "Uni"]);
checkIfEqualWords(["beer", "vodka"]);
checkIfEqualWords(["HeLlo", "hELLo"]);