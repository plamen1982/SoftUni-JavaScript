function drawFort(args) {
    let n = Number(args[0]);
    let width = 2 * n;
    let height = n;
    let colWidth = Math.floor(n / 2);
    let insideWidth = width - ( 2 * colWidth + 4)
    let middleDashes = 0;
    if(n >= 5) {
        middleDashes = Math.floor(n/2);
    }

    if(n >= 3 && n <= 1000) {
        //roof
        console.log('/' +  '^'.repeat(colWidth) + '\\' + '_'.repeat(insideWidth) + '/' +  '^'.repeat(colWidth) + '\\')
        //walls
        for(let i = 0; i < height - 3; i++) {
        console.log('|' + ' '.repeat(width - 2) + '|')
            
        }

        //base
        console.log('|' + ' '.repeat(colWidth + 1)  + '_'.repeat(insideWidth)  + ' '.repeat(colWidth + 1) + '|')
        console.log('\\' +  '_'.repeat(colWidth) + '/' + ' '.repeat(insideWidth) + '\\' +  '_'.repeat(colWidth) + '/')

    }
}

// drawFort(["3"])
// drawFort(["4"])
// drawFort(["5"])
// drawFort(["6"])
// drawFort(["7"])
// drawFort(["8"])

// function drawFort(arg1) {
//     let n = parseInt(arg1);
//     let width = 2 * n;
//     let height = n;
//     let column = Math.floor(n / 2);
//     if (n > 2 && n <= 1000) {
//         console.log("/" + "^".repeat(Math.floor(n / 2)) + "\\" +
//             "_".repeat(width - (2 * column + 4)) +
//             "/" + "^".repeat(n / 2) + "\\");
//         for (let i = 1; i <= height - 3; i++) {
//             console.log("|" + " ".repeat(width - 2) + "|");
//         }
//         console.log("|" + " ".repeat(Math.floor(n / 2) + 1) +
//             "_".repeat(width - (2 * column + 4)) +
//             " ".repeat(n / 2 + 1) + "|");
//         console.log("\\" + "_".repeat(Math.floor(n / 2)) + "/" +
//             " ".repeat(width - (2 * column + 4)) +
//             "\\" + "_".repeat(n / 2) + "/");
//     }
// }

drawFort(["8"]);
// drawFort(["4"]);
// drawFort(["5"]);
// drawFort(["8"]);