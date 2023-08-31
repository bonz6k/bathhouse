function about_us_slider(){
    var images = new Array();
    var i = 0;
                     
images[0] = 'img/usadba.png';
images[1] = 'img/bear.jpg';
images[2] = 'img/banya.jpg';


document.getElementById("about_us_slider_img").src = images[i];
var right = document.getElementById('about_us_right_arrow');
var left = document.getElementById('about_us_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("about_us_slider_img").src = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("about_us_slider_img").src = images[i];
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







function reviews_slider(){

var images = new Array();
    var i = 0;
                     
images[0] = 'img/boxers.png';
images[1] = 'img/luntik.jpg';
images[2] = 'img/univer.png';

var h = new Array();
    var hh = 0;

h[0] = "Калужская федерация бокса";
h[1] = "Лунтик и друзья";
h[2] = "Актеры сериала «Универ»"

var p = new Array();
    var pp = 0;

p[0] = "Наши боксёры были в восторге. Всем рекомендуем данный банный комплекс для приятного отдыха, не пожалеете.";
p[1] = "Я был на луне, но в Калужском бору реально круче!";
p[2] = "Не, ну, а че, в общаге скучно уже, мы тут затусили."


document.getElementById("reviews_slider_img").src = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("reviews_slider_img").src = images[i];

    if((hh+1)<images.length){hh++}
    else{hh=0}
    document.getElementById("h_reviews").innerHTML = h[hh];

    if((pp+1)<images.length){pp++}
    else{pp=0}
    document.getElementById("p_reviews").innerHTML = p[pp];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("reviews_slider_img").src = images[i];

    if(hh==0){hh=(images.length-1)}
    else{hh--}
    document.getElementById("h_reviews").innerHTML = h[hh];

    if(pp==0){pp=(images.length-1)}
    else{pp--}
    document.getElementById("p_reviews").innerHTML = p[pp];
}

}






function main_menu(){
    var btn = document.getElementById('menu_img');
    var catalog = document.getElementById('catalog_body');
    var menu = document.getElementById('main_menu');
    var i = 0;

    btn.onclick=function(){
        if (i==0) {
            catalog.style.display='block'
            i = 1;
        }
        else{
            catalog.style.display='none'
            i = 0;
        }
    };

    catalog.onclick=function(){
        if(i==1){
            catalog.style.display='none'
            i = 0;
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {catalog.style.display='none'}
    });
}
