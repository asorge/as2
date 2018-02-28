    function drawDiamond(context, x, y, width, height){
context.save();
        context.beginPath();
        context.moveTo(x, y);
        
        // top left edge
        context.lineTo(x - width / 2, y + height / 2);
        
        // bottom left edge
        context.lineTo(x, y + height);
        
        // bottom right edge
        context.lineTo(x + width / 2, y + height / 2);
        
        // closing the path automatically creates
        // the top right edge
        context.closePath();
        
        context.fillStyle = "red";
        context.fill();
context.restore();
    }