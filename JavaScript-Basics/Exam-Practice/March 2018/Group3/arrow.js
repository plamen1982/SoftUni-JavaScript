function arrow(args) {
    let params = args;

    //Check For SoftUni Judge
    // if(args[0].indexOf('\n')>-1) {
    // params = args[0].split('\n');
    // }
    let n = Number(params[0])

    let width = n + 5
    let underScore = (width - 1) / 2
    let dots;
   console.log('_'.repeat(underScore) + '^'  + '_'.repeat(underScore))
   console.log('_'.repeat(underScore - 1) + '/|\\'  + '_'.repeat(underScore - 1))
    underScore--
   for(let count = 0; count < n / 2; count++) {
       underScore--
       console.log('_'.repeat(underScore) +  '/' +  '.'.repeat(count) +  '|||' +  '.'.repeat(count)  + '\\'  + '_'.repeat(underScore))
   }
   if(n === 4) {
       console.log('/..|||..\\')
       console.log('_/.|||.\\_')
   } else {
       underScore = (width - 9) / 2
       dots = 2
    for(let count2 = 0; count2 < 2; count2++) {
        console.log('_'.repeat(underScore) + '/' + '.'.repeat(dots) + '|||' + '.'.repeat(dots) + '\\' + '_'.repeat(underScore))
        underScore++
        dots--
    }
   }
   underScore = (width - 3) / 2 
   for(let count3 = 0; count3 < n; count3++) {
       console.log('_'.repeat(underScore) + '|||' + '_'.repeat(underScore))
   }

   console.log('_'.repeat(underScore) + '~~~' + '_'.repeat(underScore))
   underScore = (width - 5) / 2
   for(let count4 = 0; count4 < n /2; count4++) {
       console.log('_'.repeat(underScore) + '//' + '.'.repeat(count4) + '!' + '.'.repeat(count4) + '\\\\' + '_'.repeat(underScore))
       underScore--

   }
}

// arrow(["4"])
// arrow(["6"])
arrow(["8"])
// arrow(["10"])