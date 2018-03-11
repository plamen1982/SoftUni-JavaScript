function draw() {

    let canvas = document.getElementById('a');
    let context = canvas.getContext('2d');
    
    let rectX1 = Number(document.getElementById('rect-x1').value) * 10;
    let rectY1 = Number(document.getElementById('rect-y1').value) * 10;
    let rectX2 = Number(document.getElementById('rect-x2').value) * 10;
    let rectY2 = Number(document.getElementById('rect-y2').value) * 10;
    let pointX = Number(document.getElementById('point-x').value) * 10;
    let pointY = Number(document.getElementById('point-y').value) * 10;
    
    let rectWidth = Math.abs(rectX1 - rectX2);
    let rectHeight = Math.abs(rectY1 - rectY2);
    
    //Set style for context
    context.strokeStyle = '#ff0000';
    context.lineWidth = 3;
    
    context.strokeRect(rectX1, rectY1, rectWidth, rectHeight);
    
    //Set point style and draw point
    context.beginPath();
    context.fillStyle = "#ffcc00";
    context.arc(pointX, pointY, 4, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    
    let result = document.getElementById("status");
    let output = document.getElementById("result");
    
    //Check point position
    if (pointX >= rectX1 && pointX <= rectX2) {
        if (pointY >= rectY1 && pointY <= rectY2 ) {
            if(pointX === rectX1 || pointX === rectX2 || pointY === rectY1 || pointY === rectY2) {
                result.innerHTML = "Border";
                output.style.backgroundColor = "gold";
            } else {
                result.innerHTML = "Inside";
                output.style.backgroundColor = "palegreen";
            }
        }  else {
            result.innerHTML = "Outside";
            output.style.backgroundColor = "lightsalmon";
        }  
    } else {
        result.innerHTML = "Outside";
        output.style.backgroundColor = "lightsalmon";
    }
}


function reset () {
    
    let formObj = document.getElementById('form');
    formObj.reset();    
}




