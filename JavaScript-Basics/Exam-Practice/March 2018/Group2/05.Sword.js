function sword(args) {
  let params = args;

  //Check For SoftUni Judge
  // if(args[0].indexOf('\n')>-1) {
  // params = args[0].split('\n');
  // }

  let n = Number(params[0])
  let soft = 'SOFT'
  let uni = 'UNI'
  let width = (2 * n) + 1
  let dashes = (width - 3) / 2
  console.log('#'.repeat(dashes) + '/^\\' + '#'.repeat(dashes))
  for(let i = 0; i < Math.floor(n / 2); i++) {
    dashes--    
    console.log('#'.repeat(dashes) + '.' + " ".repeat(width - (2 * dashes) - 2) + '.' + '#'.repeat(dashes))
  }

  let spaces = (width - 3 - (2 * dashes)) / 2
  for(let j = 0; j < soft.length; j++) {
    console.log('#'.repeat(dashes) + '|' + ' '.repeat(spaces) + soft[j] + ' '.repeat(spaces) + '|' + '#'.repeat(dashes))
  }

  if(n < 5) {
    console.log('#'.repeat(dashes) + '|' + ' '.repeat(2*spaces + 1) + '|' + '#'.repeat(dashes))
  }

  for(let k = 0; k < n - 4; k++) {
    console.log('#'.repeat(dashes) + '|' + ' '.repeat(2*spaces + 1) + '|' + '#'.repeat(dashes))
  }
  
  for(let l = 0; l < uni.length; l++) {
    console.log('#'.repeat(dashes) + '|' + ' '.repeat(spaces) + uni[l] + ' '.repeat(spaces) + '|' + '#'.repeat(dashes))
  }

  console.log('@' + '='.repeat(width - 2) + '@')

  for(let m = 0; m < Math.floor(n / 2); m++) {
    console.log('#'.repeat(dashes + 2) + '|' + ' '.repeat(width - (2 * dashes) - 6) + '|' + '#'.repeat(dashes + 2))
  }
  
  console.log('#'.repeat(dashes + 2) + '\\' + '.'.repeat(width - 6 - 2 * (dashes)) + '/' + '#'.repeat(dashes + 2))

}


// sword([4])
// sword([5])
sword([6])
// sword([7])