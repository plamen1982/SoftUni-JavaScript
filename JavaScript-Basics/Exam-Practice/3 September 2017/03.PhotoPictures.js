function photoPictures(args) {
    let numberOfPic = Number(args[0])
    let sizePic = String(args[1])
    let wayOfOrdering = String(args[2])
    let totalPrice

        if(wayOfOrdering === 'online') {
            if(sizePic == '9X13') {
                if(numberOfPic >= 50) {
                    totalPrice = numberOfPic * 0.16
                    totalPrice -= totalPrice * 0.02
                    totalPrice -= totalPrice * 0.05                
                } else {
                    totalPrice = numberOfPic * 0.16
                    totalPrice -= totalPrice * 0.02
                }
            }  else if(sizePic == '10X15') {
                if(numberOfPic >= 80) {
                    totalPrice = numberOfPic * 0.16
                    totalPrice -= totalPrice * 0.02
                    totalPrice -= totalPrice * 0.03                
                } else {
                    totalPrice = numberOfPic * 0.16
                    totalPrice -= totalPrice * 0.02
                }
        } else if(sizePic == '13X18 ') {
            if(numberOfPic >= 50 && numberOfPic <= 100) {
                totalPrice = numberOfPic * 0.38
                totalPrice -= totalPrice * 0.02
                totalPrice -= totalPrice * 0.03                
            } else {
                totalPrice = numberOfPic * 0.38
                totalPrice -= totalPrice * 0.02
            }
        } else if(sizePic == '13X18') {
            if(numberOfPic >= 100) {
                totalPrice = numberOfPic * 0.38
                totalPrice -= totalPrice * 0.02
                totalPrice -= totalPrice * 0.05               
            } else {
                totalPrice = numberOfPic * 0.38
                totalPrice -= totalPrice * 0.02
            }
        } else if(sizePic == '20X30') {
            if(numberOfPic >= 50) {
                totalPrice = numberOfPic * 2.90
                totalPrice -= totalPrice * 0.02
                totalPrice -= totalPrice * 0.09               
            } else if(numberOfPic >= 10 && numberOfPic <= 50){
                totalPrice = numberOfPic * 2.90
                totalPrice -= totalPrice * 0.02
                totalPrice -= totalPrice * 0.07   
            } else {
                totalPrice = numberOfPic * 0.290
                totalPrice -= totalPrice * 0.02
            }
        } 
    } else {
        if(sizePic == '9X13') {
            if(numberOfPic >= 50) {
                totalPrice = numberOfPic * 0.16
                totalPrice -= totalPrice * 0.05                
            } else {
                totalPrice = numberOfPic * 0.16
            }
        }  else if(sizePic == '10X15') {
            if(numberOfPic >= 80) {
                totalPrice = numberOfPic * 0.16
                totalPrice -= totalPrice * 0.03                
            } else {
                totalPrice = numberOfPic * 0.16
            }
    } else if(sizePic == '13X18 ') {
        if(numberOfPic >= 50 && numberOfPic <= 100) {
            totalPrice = numberOfPic * 0.38
            totalPrice -= totalPrice * 0.03                
        } else {
            totalPrice = numberOfPic * 0.38
        }
    } else if(sizePic == '13X18') {
        if(numberOfPic >= 100) {
            totalPrice = numberOfPic * 0.38
            totalPrice -= totalPrice * 0.05               
        } else if(numberOfPic >= 10 && numberOfPic <= 50){
            totalPrice = numberOfPic * 0.38
            totalPrice -= totalPrice * 0.03    
        } else {
            totalPrice = numberOfPic * 0.38
        }
    } else if(sizePic == '20X30') {
        if(numberOfPic >= 50) {
            totalPrice = numberOfPic * 2.90
            totalPrice -= totalPrice * 0.09               
        } else if(numberOfPic >= 10 && numberOfPic <= 50){
            totalPrice = numberOfPic * 2.90
            totalPrice -= totalPrice * 0.07    
        } else {
            totalPrice = numberOfPic * 0.290

        }
    } 
    }
    console.log(`${totalPrice.toFixed(2)}BGN`)
}
// photoPictures(["5", "9X13", "online"])
photoPictures(["25", "20X30", "online"])
