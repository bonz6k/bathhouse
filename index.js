function slider_main_page(){
    var images = new Array();
    var i = 0;
                     
images[0] = 'img/usadba.png';
images[1] = 'img/bear.jpg';
images[2] = 'img/banya.jpg';


document.getElementById("slider_img").src = images[i];
var right = document.getElementById('right_arrow');
var left = document.getElementById('left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("slider_img").src = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("slider_img").src = images[i];
}

}





function video_play(){
    var play = document.getElementById("circle_play");
    var video = document.getElementById("video");
    play.onclick = function(){
        video.play();
        play.style.display = 'none';
    }
    video.onclick = function(){
        if(video.played){
            video.pause();
            video.load();
            play.style.display = 'block';
        }
    }
}