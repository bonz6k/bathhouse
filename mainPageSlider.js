var images = new Array();
var i = 0;
                    
images[0] = "url('img/main_slide_1.png')";
images[1] = "url('img/bear.jpg')";
images[2] = "url('img/brevna.jfif')";        
                          
function viewImages() {
document.getElementById("main_slide").style.backgroundImage = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",5000)}