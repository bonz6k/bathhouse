if(window.innerWidth>1200){
    var backgroundImages = new Array();
var a = 0;  

function MainPageBackgroundImageSlider() {
        
    backgroundImages[0] = "url('img/main_slide_1.jfif')";
    backgroundImages[1] = "url('img/bear.jpg')";
    backgroundImages[2] = "url('img/brevna.jfif')"; 

document.getElementById("main_slide").style.backgroundImage = backgroundImages[a]; 
a++;
if (a == backgroundImages.length) {
    a = 0;}
setTimeout("MainPageBackgroundImageSlider()",5000)}






function about_us_slider(){
    var images = new Array();
    var i = 0;
                     
images[0] = 'img/usadba.png';
images[1] = 'img/au_1.jfif';
images[2] = 'img/au_2.jfif';
images[3] = 'img/au_3.jfif';
images[4] = 'img/au_4.jfif';
images[5] = 'img/au_5.jfif';
images[6] = 'img/au_6.jfif';
images[7] = 'img/au_7.jfif';
images[8] = 'img/au_8.jfif';
images[9] = 'img/au_9.jfif';
images[10] = 'img/au_10.jfif';
images[11] = 'img/au_11.jfif';
images[12] = 'img/au_12.jfif';
images[13] = 'img/au_13.jfif';
images[14] = 'img/au_14.jfif';
images[15] = 'img/au_15.jfif';
images[16] = 'img/au_16.jfif';


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
// images[1] = 'img/luntik.jpg';
// images[2] = 'img/univer.png';

var h = new Array();
    var hh = 0;

h[0] = "Калужская федерация бокса";
// h[1] = "Лунтик и друзья";
// h[2] = "Актеры сериала «Универ»"

var p = new Array();
    var pp = 0;

p[0] = "Наши боксёры были в восторге. Всем рекомендуем данный банный комплекс для приятного отдыха, не пожалеете.";
// p[1] = "Я был на луне, но в Калужском бору реально круче!";
// p[2] = "Не, ну, а че, в общаге скучно уже, мы тут затусили."


document.getElementById("reviews_slider_img").src = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("reviews_slider_img").src = images[i];

    // if((hh+1)<images.length){hh++}
    // else{hh=0}
    // document.getElementById("h_reviews").innerHTML = h[hh];

    // if((pp+1)<images.length){pp++}
    // else{pp=0}
    // document.getElementById("p_reviews").innerHTML = p[pp];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("reviews_slider_img").src = images[i];

    // if(hh==0){hh=(images.length-1)}
    // else{hh--}
    // document.getElementById("h_reviews").innerHTML = h[hh];

    // if(pp==0){pp=(images.length-1)}
    // else{pp--}
    // document.getElementById("p_reviews").innerHTML = p[pp];
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





function SmallBathBackgroundImage(){
    var images = new Array();
    var i = 0;
                     
images[0] = "url('img/smallBath_1.jfif')";
images[1] = "url('img/smallBath_2.jfif')";
images[2] = "url('img/smallBath_3.jfif')";
images[3] = "url('img/veniki.jfif')";


document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("body").style.backgroundImage = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("body").style.backgroundImage = images[i];
}
}






function BigBathBackgroundImage(){
    var images = new Array();
    var i = 0;
                     
images[0] = "url('img/Big_b_1.jfif')";
images[1] = "url('img/Big_b_2.jfif')";
images[2] = "url('img/Big_b_3.jfif')";
images[3] = "url('img/Big_b_4.jfif')";
images[4] = "url('img/Big_b_5.jfif')";
images[5] = "url('img/Big_b_6.jfif')";


document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("body").style.backgroundImage = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("body").style.backgroundImage = images[i];
}
}








function BanquetHallBackgroundImage(){
    var images = new Array();
    var i = 0;
                     
images[0] = "url('img/banqet_1.jfif')";
images[1] = "url('img/banqet_2.jfif')";
images[2] = "url('img/banqet_3.jfif')";
images[3] = "url('img/banqet_4.jfif')";
images[4] = "url('img/banqet_5.jfif')";
images[5] = "url('img/banqet_6.jfif')";


document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("body").style.backgroundImage = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("body").style.backgroundImage = images[i];
}
}







function JapanBarellBackgroundImage(){
    var images = new Array();
    var i = 0;
                     
images[0] = "url('img/banya.jpg')";
images[1] = "url('img/banya_2.jfif')";
images[2] = "url('img/banya_3.jfif')";
images[3] = "url('img/banya_4.jfif')";


document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("body").style.backgroundImage = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("body").style.backgroundImage = images[i];
}
}







function hotel(){
    var images = new Array();
    var i = 0;
                     
images[0] = "url('img/hotel_1.jfif')";
images[1] = "url('img/hotel_2.jfif')";
images[2] = "url('img/hotel_3.jfif')";
images[3] = "url('img/hotel_4.jfif')";


document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){
        i++;
    document.getElementById("body").style.backgroundImage = images[i];
    document.getElementById("h1").style.margin = "7% 0 0 80%";
    document.getElementById("p").style.margin = "16px 0 0 85%";
    document.getElementById("reserve_btn").style.margin = "0 0 0 104%";
    }
    else{
        i=0;
    document.getElementById("body").style.backgroundImage = images[i];
    document.getElementById("h1").style.margin = "35% 0 0 32px";
    document.getElementById("p").style.margin = "16px 0 0 68.5px";
    document.getElementById("reserve_btn").style.margin = "0 0 0 199.5px";
    }
}

left.onclick=function(){
    if(i==0){
    i = (images.length-1);
    document.getElementById("body").style.backgroundImage = images[i];
    document.getElementById("h1").style.margin = "7% 0 0 80%";
    document.getElementById("p").style.margin = "16px 0 0 85%";
    document.getElementById("reserve_btn").style.margin = "0 0 0 104%";
    }

    else if((i!=1)&&(i!=0)){
        i--;
    document.getElementById("body").style.backgroundImage = images[i];
    document.getElementById("h1").style.margin = "7% 0 0 80%";
    document.getElementById("p").style.margin = "16px 0 0 85%";
    document.getElementById("reserve_btn").style.margin = "0 0 0 104%";
    }

    else if(i==1){
        i--;
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("h1").style.margin = "35% 0 0 32px";
        document.getElementById("p").style.margin = "16px 0 0 68.5px";
        document.getElementById("reserve_btn").style.margin = "0 0 0 199.5px";
    }
}
}








function PavilionBackgroundImage(){
    var images = new Array();
    var i = 0;
                     
images[0] = "url('img/pavilion_1.jfif')";
images[1] = "url('img/pavilion_2.jfif')";
images[2] = "url('img/pavilion_3.jfif')";


document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("body").style.backgroundImage = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("body").style.backgroundImage = images[i];
}
}









function activeLeisureBackgroundImage(){
    var images = new Array();
    var i = 0;

    var h = new Array();

    var p = new Array();
                     
images[0] = "url('img/velik.jfif')";
images[1] = "url('img/lyzhi.jfif')";

h[0] = "Прокат велосипедов";
h[1] = "Прокат лыжной экипировки";

document.getElementById("body").style.backgroundImage = images[i];
var right = document.getElementById('reviews_right_arrow');
var left = document.getElementById('reviews_left_arrow');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("body").style.backgroundImage = images[i];
    document.getElementById("p").innerHTML = h[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("body").style.backgroundImage = images[i];
    document.getElementById("p").innerHTML = h[i];
}
}
}
























else if(window.innerWidth<450){
    var backgroundImages = new Array();
    var a = 0;  
    
    function MainPageBackgroundImageSlider() {
            
        backgroundImages[0] = "url('img/Main_slide_1_Mob.png')";
        // backgroundImages[1] = "url('img/bear.jpg')";
        backgroundImages[1] = "url('img/brevna_Mob.jfif')"; 
    
    document.getElementById("main_slide").style.backgroundImage = backgroundImages[a]; 
    a++;
    if (a == backgroundImages.length) {
        a = 0;}
    setTimeout("MainPageBackgroundImageSlider()",5000)}
    
    
    
    
    
    
    function about_us_slider(){
        var images = new Array();
        var i = 0;
                         
    images[0] = 'img/usadba.png';
    images[1] = 'img/au_1.jfif';
    images[2] = 'img/au_2.jfif';
    images[3] = 'img/au_3.jfif';
    images[4] = 'img/au_4.jfif';
    images[5] = 'img/au_5.jfif';
    images[6] = 'img/au_6.jfif';
    images[7] = 'img/au_7.jfif';
    images[8] = 'img/au_8.jfif';
    images[9] = 'img/au_9.jfif';
    images[10] = 'img/au_10.jfif';
    images[11] = 'img/au_11.jfif';
    images[12] = 'img/au_12.jfif';
    images[13] = 'img/au_13.jfif';
    images[14] = 'img/au_14.jfif';
    images[15] = 'img/au_15.jfif';
    images[16] = 'img/au_16.jfif';
    
    
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
    // images[1] = 'img/luntik.jpg';
    // images[2] = 'img/univer.png';
    
    var h = new Array();
        var hh = 0;
    
    h[0] = "Калужская федерация бокса";
    // h[1] = "Лунтик и друзья";
    // h[2] = "Актеры сериала «Универ»"
    
    var p = new Array();
        var pp = 0;
    
    p[0] = "Наши боксёры были в восторге. Всем рекомендуем данный банный комплекс для приятного отдыха, не пожалеете.";
    // p[1] = "Я был на луне, но в Калужском бору реально круче!";
    // p[2] = "Не, ну, а че, в общаге скучно уже, мы тут затусили."
    
    
    document.getElementById("reviews_slider_img").src = images[i];
    var right = document.getElementById('reviews_right_arrow');
    var left = document.getElementById('reviews_left_arrow');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("reviews_slider_img").src = images[i];
    
        // if((hh+1)<images.length){hh++}
        // else{hh=0}
        // document.getElementById("h_reviews").innerHTML = h[hh];
    
        // if((pp+1)<images.length){pp++}
        // else{pp=0}
        // document.getElementById("p_reviews").innerHTML = p[pp];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("reviews_slider_img").src = images[i];
    
        // if(hh==0){hh=(images.length-1)}
        // else{hh--}
        // document.getElementById("h_reviews").innerHTML = h[hh];
    
        // if(pp==0){pp=(images.length-1)}
        // else{pp--}
        // document.getElementById("p_reviews").innerHTML = p[pp];
    }
    
    }
    
    
    
    
    
    
    function main_menu(){
        var btn = document.getElementById('menu_img');
        var close = document.getElementById('close');
        var catalog = document.getElementById('catalog_body');
    
        btn.onclick=function(){
                catalog.style.display='grid'
        };
    
        close.onclick=function(){
                catalog.style.display='none'
        }
    }
    
    
    
    
    
    function SmallBathBackgroundImage(){
        var images = new Array();
        var i = 0;
                         
    images[0] = "url('img/SBM_1.jfif')";
    images[1] = "url('img/SBM_2.jfif')";
    images[2] = "url('img/SBM_3.jfif')";
    images[3] = "url('img/SBM_4.jfif')";
    
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    }
    
    
    
    
    
    
    function BigBathBackgroundImage(){
        var images = new Array();
        var i = 0;
                         
    images[0] = "url('img/BBM_1.jfif')";
    images[1] = "url('img/BBM_2.jfif')";
    images[2] = "url('img/BBM_3.jfif')";
    images[3] = "url('img/BBM_4.jfif')";
    images[4] = "url('img/BBM_5.jfif')";
    images[5] = "url('img/BBM_6.jfif')";
    images[6] = "url('img/BBM_7.jfif')";
    images[7] = "url('img/BBM_8.jfif')";
    images[8] = "url('img/BBM_9.jfif')";
    
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    }











    function Mobile2Menu(){
        var btn = document.getElementById('menu2');
        var close = document.getElementById('close');
        var catalog = document.getElementById('right');
    
        btn.onclick=function(){
                catalog.style.display='grid'
        };
    
        close.onclick=function(){
                catalog.style.display='none'
        }
    }





    
    
    
    
    
    
    
    
    function BanquetHallBackgroundImage(){
        var images = new Array();
        var i = 0;
                         
    images[0] = "url('img/BHM_1.jfif')";
    images[1] = "url('img/BHM_2.jfif')";
    images[2] = "url('img/BHM_3.jfif')";
    images[3] = "url('img/BHM_4.jfif')";
    images[4] = "url('img/BHM_5.jfif')";
    images[5] = "url('img/BHM_6.jfif')";
    
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    }
    
    
    
    
    
    
    
    function JapanBarellBackgroundImage(){
        var images = new Array();
        var i = 0;
                         
    // images[0] = "url('img/banya.jpg')";
    // images[1] = "url('img/banya_2.jfif')";
    // images[2] = "url('img/banya_3.jfif')";
    // images[3] = "url('img/banya_4.jfif')";
    
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    }
    
    
    
    
    
    
    
    function hotel(){
        var images = new Array();
        var i = 0;
                         
    images[0] = "url('img/Hotel_Mobile_1.jfif')";
    images[1] = "url('img/Hotel_Mobile_2.jfif')";
    
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){
            i++;
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("h1").style.margin = "7% 0 0 80%";
        document.getElementById("p").style.margin = "16px 0 0 85%";
        document.getElementById("reserve_btn").style.margin = "0 0 0 104%";
        }
        else{
            i=0;
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("h1").style.margin = "35% 0 0 32px";
        document.getElementById("p").style.margin = "16px 0 0 68.5px";
        document.getElementById("reserve_btn").style.margin = "0 0 0 199.5px";
        }
    }
    
    left.onclick=function(){
        if(i==0){
        i = (images.length-1);
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("h1").style.margin = "7% 0 0 80%";
        document.getElementById("p").style.margin = "16px 0 0 85%";
        document.getElementById("reserve_btn").style.margin = "0 0 0 104%";
        }
    
        else if((i!=1)&&(i!=0)){
            i--;
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("h1").style.margin = "7% 0 0 80%";
        document.getElementById("p").style.margin = "16px 0 0 85%";
        document.getElementById("reserve_btn").style.margin = "0 0 0 104%";
        }
    
        else if(i==1){
            i--;
            document.getElementById("body").style.backgroundImage = images[i];
            document.getElementById("h1").style.margin = "35% 0 0 32px";
            document.getElementById("p").style.margin = "16px 0 0 68.5px";
            document.getElementById("reserve_btn").style.margin = "0 0 0 199.5px";
        }
    }
    }
    
    
    
    
    
    
    
    
    function PavilionBackgroundImage(){
        var images = new Array();
        var i = 0;
                         
    images[0] = "url('img/BesedkiMobile_1.jfif')";
    images[1] = "url('img/BesedkiMobile_2.jfif')";
    
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("body").style.backgroundImage = images[i];
    }
    }
    
    
    
    
    
    
    

    function activeLeisureBackgroundImage(){
        var images = new Array();
        var i = 0;
    
        var h = new Array();
    
        var p = new Array();
                         
    images[0] = "url('img/velik_Mobile.jfif')";
    images[1] = "url('img/lyzhi_Mobile.jfif')";
    
    h[0] = "Прокат велосипедов";
    h[1] = "Прокат лыжной экипировки";
    
    document.getElementById("body").style.backgroundImage = images[i];
    var right = document.getElementById('reviews_right_arrow_Mobile');
    var left = document.getElementById('reviews_left_arrow_Mobile');
    
    right.onclick=function(){
        if((i+1)<images.length){i++}
        else{i=0}
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("first").innerHTML = h[i];
    }
    
    left.onclick=function(){
        if(i==0){i=(images.length-1)}
        else{i--}
        document.getElementById("body").style.backgroundImage = images[i];
        document.getElementById("first").innerHTML = h[i];
    }
    }
}









