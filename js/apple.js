var apple = document.getElementsByClassName("appleImg")[0];
var search = document.getElementsByClassName("searchImg")[0];
var bag = document.getElementsByClassName("bagImg")[0];
var close = document.getElementsByClassName("close")[0];
var apple1 = document.getElementsByClassName("appleImg")[1];
var bag1 = document.getElementsByClassName("bagImg")[1];
apple.onmouseover = function(){
    apple.style.cursor = "pointer";
    apple.style.opacity = "0.6";
}
apple.onmouseout = function(){
    apple.style.opacity = "1";
}
apple.onclick = function(){
    location.href="#";
}
apple1.onmouseover = function(){
    apple1.style.cursor = "pointer";
    apple1.style.opacity = "0.6";
}
apple1.onmouseout = function(){
    apple1.style.opacity = "1";
}
apple1.onclick = function(){
    location.href="#";
}
search.onmouseover = function(){
    search.style.cursor = "pointer";
    search.style.opacity = "0.6";
}
search.onmouseout = function(){
    search.style.opacity = "1";
}
$(document).ready(function(){
    $(".searchImg").click(function(){
    $(".menu li:nth-child(2)").fadeOut();
    $(".menu li:nth-child(3)").fadeOut("slow");
    $(".menu li:nth-child(4)").fadeOut("slow");
    $(".menu li:nth-child(5)").fadeOut("slow");
    $(".menu li:nth-child(6)").fadeOut("slow");
    $(".menu li:nth-child(7)").fadeOut("slow");
    $(".menu li:nth-child(8)").fadeOut("slow");
    $(".menu li:nth-child(9)").fadeOut("slow");
    $(".searchModal").fadeIn("slow");
    $(".search").animate({left:"20px"},"slow");
    $(".search input").focus();
    $(".modal").css("display","block");
    });
});
$(document).ready(function(){
    $(".close").click(function(){
    $(".searchModal").fadeOut("fast");
    $(".search").animate({left:"100px"},"slow");
    $(".menu li:nth-child(2)").fadeIn();
    $(".menu li:nth-child(3)").fadeIn("slow");
    $(".menu li:nth-child(4)").fadeIn("slow");
    $(".menu li:nth-child(5)").fadeIn("slow");
    $(".menu li:nth-child(6)").fadeIn("slow");
    $(".menu li:nth-child(7)").fadeIn("slow");
    $(".menu li:nth-child(8)").fadeIn("slow");
    $(".menu li:nth-child(9)").fadeIn("slow");
    $(".modal").css("display","none");
    });
    $(".bagImg").click(function(){
        if($(".shopBag").css("display")=="none"){
        $(".shopBag").show();
        }else{
        $(".shopBag").hide();
        }
    });
    $(document).on("click",function(e){
        if(!$(".bagImg,.shopBag>li,.shopBag>li>a").is(e.target)){
            $(".shopBag").hide();
        }
    });
});
close.onmouseover = function(){
    close.style.cursor = "pointer";
}
bag.onmouseover = function(){
    bag.style.cursor = "pointer";
    bag.style.opacity = "0.6";
}
bag.onmouseout = function(){
    bag.style.opacity = "1";
}
bag1.onmouseover = function(){
    bag1.style.cursor = "pointer";
    bag1.style.opacity = "0.6";
}
bag1.onmouseout = function(){
    bag1.style.opacity = "1";
}
$(document).ready(function(){
  $(".mbNav div:first-child").click(function(){
      if($(this).html() == "="){
          $(this).html("&times");
          $(".mbMenu").slideDown(1000);
          $(".bagImg").css("display","none");
      }else{
          $(this).html("&#61");
          $(".mbMenu").slideUp(1000);
          $(".bagImg").css("display","block");
      }
});
    $(".footShop").click(function(){
        $(".subShop").slideToggle(1000);
    });
    $(".footStore").click(function(){
       $(".subStore").slideToggle(1000); 
    });
    $(".footEdu").click(function(){
       $(".subEdu").slideToggle(1000); 
    });
    $(".footBiz").click(function(){
       $(".subBiz").slideToggle(1000); 
    });
    $(".footAcc").click(function(){
       $(".subAcc").slideToggle(1000); 
    });
    $(".footVal").click(function(){
       $(".subVal").slideToggle(1000); 
    });
    $(".footInfo").click(function(){
       $(".subInfo").slideToggle(1000); 
    });
});
