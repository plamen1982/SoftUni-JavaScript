function sword(args) {
    let n = Number(args[0])
    let width = (2 * n) + 1
    let upperPartDashes = 2;
    let upperPartSpaces = 2;
    let dashesSoftUni = ((width - 3) / 2) - Math.floor(n/2)  
    if(n >= 4 && n <= 50) {
        console.log('#'.repeat(n - 1) + '/' + '^' + '\\' + '#'.repeat(n - 1))
        for(let i = 1; i <= Math.floor(n / 2); i++) {
            console.log('#'.repeat(n - upperPartDashes) + '.' + ' '.repeat(upperPartSpaces + 1) + '.' + '#'.repeat(n - upperPartDashes))
            upperPartDashes += 1
            upperPartSpaces += 2
        }
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'S' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'O' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'F' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'T' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        for(let j = 1; j < Math.round(n/2); j++) {
            console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + ' ' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        }
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'U' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'N' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        console.log('#'.repeat(dashesSoftUni) + '|' +' '.repeat(Math.floor(n/2)) + 'I' + ' '.repeat(Math.floor(n/2)) + '|' + '#'.repeat(dashesSoftUni))   
        console.log('@' + '='.repeat(width -2) + '@')
        for(let k = 0; k < Math.floor(n/2); k++) {
            if(n % 2 == 0) {
                let dots = width - (Math.floor(width / 3) + Math.floor(width / 3) + 2 )
                console.log('#'.repeat(Math.floor(width/3)) + '|' + ' '.repeat(dots) + '|' + '#'.repeat(Math.floor(width/3)))

                // width/ 3
            } else {
                let dotsOdd = width - (Math.ceil(width / 3) + Math.ceil(width / 3) + 2) 
                console.log('#'.repeat(Math.ceil(width / 3)) + '|' + ' '.repeat(dotsOdd) + '|' + '#'.repeat(Math.ceil(width/3)))
                //Math.ceil(width/3)
            }
        }
        if(n % 2 == 0) {
            let dots = width - (Math.floor(width / 3) + Math.floor(width / 3) + 2 )
            console.log('#'.repeat(Math.floor(width/3)) + '\\' + '.'.repeat(dots) + '/' + '#'.repeat(Math.floor(width/3)))

            // width/ 3
        } else {
            let dotsOdd = width - (Math.ceil(width / 3) + Math.ceil(width / 3) + 2) 
            console.log('#'.repeat(Math.ceil(width/3)) + '\\' + '.'.repeat(dotsOdd) + '/' + '#'.repeat(Math.ceil(width/3)))
            //Math.ceil(width/3)
        }
    }
}

function sword1([n]) {
    n= Number(n);
    let width = (2*n)+1;
    let soft = "SOFT";
    let uni = "UNI";
    let hashes = 0;
    let spaces = 0;
    console.log('#'.repeat((width-3)/2)+'/^\\'+'#'.repeat((width-3)/2));
    for(i=0;i<Math.floor(n/2);i++){
        hashes = n-(2+i);
        spaces = width-((hashes+1)*2);
        console.log('#'.repeat(hashes)+'.'+' '.repeat(spaces)+'.'+'#'.repeat(hashes));
    }
    for(i=0;i<soft.length;i++){
        spaces = n - (hashes+1);
        console.log('#'.repeat(hashes) +'|'+' '.repeat(spaces)+soft[i]+' '.repeat(spaces)+'|'+'#'.repeat(hashes));
    }
    if(n<5) console.log('#'.repeat(hashes) +'|'+' '.repeat((spaces*2)+1)+'|'+'#'.repeat(hashes));
    for(i=0;i<(n-4);i++){
        console.log('#'.repeat(hashes) +'|'+' '.repeat((spaces*2)+1)+'|'+'#'.repeat(hashes));
    }
    for(i=0;i<uni.length;i++){
        console.log('#'.repeat(hashes) +'|'+' '.repeat(spaces)+uni[i]+' '.repeat(spaces)+'|'+'#'.repeat(hashes));
    }    
    console.log(`@${'='.repeat(width-2)}@`);
    hashes = Math.ceil(n/2)+1;
    spaces = width - ((hashes+1)*2)
    for(i=0;i<Math.floor(n/2);i++){
        console.log('#'.repeat(hashes)+'|'+' '.repeat(spaces)+'|'+'#'.repeat(hashes));
    }    
    console.log('#'.repeat(hashes)+'\\'+'.'.repeat(spaces)+'/'+'#'.repeat(hashes));
}

function Sword([n]){
    n = Number(n)
    let width = 2 * n + 1
    console.log(`${"#".repeat(n-1)}/^\\${"#".repeat(n-1)}`)
    let hash = n-2
    if(n % 2 == 0){
      for(let i = 1; i <= n / 2; i++){
        console.log(`${"#".repeat(hash)}.${" ".repeat(width - 2 - (2 * hash))}.${"#".repeat(hash)}`)
        hash--
      }
    }else {
      for(let i = 1; i <= Math.floor(n / 2); i++){
        console.log(`${"#".repeat(hash)}.${" ".repeat(width - 2 - (2 * hash))}.${"#".repeat(hash)}`)
        hash--
      }
    }
    hash++
    if(n == 4){
      for(let i = 0; i < n + 4; i++){
        if(i == 0){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}S${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == 1){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}O${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == 2){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}F${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == 3){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}T${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == n+1){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}U${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == n+2){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}N${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == n+3){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}I${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else {
          console.log(`${"#".repeat(hash)}|${" ".repeat(width - (2*hash)-2)}|${"#".repeat(hash)}`)
        }
      }
    }else {
      for(let i = 0; i < n + 3; i++){
        if(i == 0){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}S${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == 1){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}O${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == 2){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}F${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == 3){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}T${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == n){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}U${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == n+1){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}N${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else if(i == n+2){
          console.log(`${"#".repeat(hash)}|${" ".repeat((width - 3 -(2*hash))/2)}I${" ".repeat((width - 3 -(2*hash))/2)}|${"#".repeat(hash)}`)
        }else {
          console.log(`${"#".repeat(hash)}|${" ".repeat(width - (2*hash)-2)}|${"#".repeat(hash)}`)
        }
       
      }
    }
    console.log(`@${"=".repeat(width-2)}@`)
   
    hash+=2
    if(n % 2 == 0){
      for(let i = 0; i < n/2; i++){
        console.log(`${"#".repeat(hash)}|${" ".repeat(width - 2 - (2*hash))}|${"#".repeat(hash)}`)
      }
    }else {
      for(let i = 0; i < Math.floor(n/2); i++){
        console.log(`${"#".repeat(hash)}|${" ".repeat(width - 2 - (2*hash))}|${"#".repeat(hash)}`)
      }
    }
    console.log(`${"#".repeat(hash)}\\${".".repeat(width - 2 - (2*hash))}/${"#".repeat(hash)}`)
  }