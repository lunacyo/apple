
$(document).ready(function(){
    $(".slideWrap").slick({
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow:$(".slideLeft"),
        nextArrow:$(".slideRight"),
        dots:true,
        pauseOnHover:false,
        customPaging: function(slider, i) {
                    return $('<span><i class="fa fa-circle"></i></span>').css("color","lightgray").css("margin","10px")
                    .css("cursor","pointer")
                },
    });
    $(".slideAllwrap").mouseover(function(){
        $(".slideLeft").css("visibility","visible");
        $(".slideRight").css("visibility","visible");
    });
    $(".slideAllwrap").mouseout(function(){
        $(".slideLeft").css("visibility","hidden");
        $(".slideRight").css("visibility","hidden"); 
    });
});
