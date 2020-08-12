import Tool from './tools.js';
$(function(){
    $('.preload-page').fadeOut(500);
    const tool = new Tool();
    // random img
    const listimg = [
        "./img/characters/1.png",
        "./img/characters/2.png",
        "./img/characters/3.png",
        "./img/characters/4.png",
        "./img/characters/5.png",
        "./img/characters/6.png",
        "./img/characters/7.png",
        "./img/characters/8.png",
        "./img/characters/9.png",
        "./img/characters/10.png"
    ];
    $(".dwara").append(`<img src="${listimg[tool.random(0,9)]}"/>`);
     

    $(".col-pic svg").on("click",function(){
        if(!$(".col-pic svg").hasClass("close")){
            $(".col-pic svg").addClass("close");
            $(".col-pic svg .red").addClass("close");
            $(".blur").fadeIn(300);
            $(".box-menu").fadeIn(250);
        }
        else{
            $(".col-pic svg").removeClass("close");
            $(".col-pic svg .red").removeClass("close");
            $(".blur").fadeOut(200);
            $(".box-menu").fadeOut(200);
        }
    });
$("img").on("click",function(){
    let select = $(this).attr("src");
     $(".dwara").empty();
     $(".dwara").append(`<img src='${select}'>`);
});

// checker switch
 $(".switch").on("click",()=>{
     $(".switch,.switch div").toggleClass("checked")
 });
    //   pin pass input
      $(".pin-icon").on("click",function(){
      if(!$(".pin-icon ").hasClass("active-icon")){ 
        
        $(".insidpin .PIN").addClass("active-pin").attr("placeholder","PIN");
        $(".pin-icon").addClass("active-icon");
        $(".pin-icon .pin-red").addClass("active-icon");
      }
       else{
        $(".insidpin .PIN").removeClass("active-pin").attr("placeholder","");
        $(".pin-icon").removeClass("active-icon");
        $(".pin-icon .pin-red").removeClass("active-icon");

       }
  });
      $(".pin-icon2").on("click",function(){
    if(!$(".pin-icon2 ").hasClass("active-icon")){ 
      $(".insidpin .pass").addClass("active-pin").attr("placeholder","Pass");
      $(".pin-icon2").addClass("active-icon");
      $(".pin-icon2 .pin-red").addClass("active-icon"); 
    }
     else{
      $(".insidpin .pass").removeClass("active-pin").attr("placeholder","");
      $(".pin-icon2").removeClass("active-icon");
      $(".pin-icon2 .pin-red").removeClass("active-icon");
     }
  });

});