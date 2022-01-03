$(document).ready(function(){
// variables
$surface = $('.surface');
$car = $('.car');
$img = $('.car img');
let flag = true;
const cars =['"./images/Img_05.png','"./images/Img_06.png']

// keyprees event
$(document).on('keypress',function(e){
    if(e.which == 13){
        $($surface).toggleClass('move');
        $($car).toggleClass('sus');
    }
})

$(document).on('mousemove',function(e){
 if(e.which == 19){
     if(flag){
         flag=false;
         $img.attr('src',cars[0]);
     }
     else{
         flag=true;
         $img.attr('src',cars[1]);
     }
 }
    
})

});