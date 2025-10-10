$(document).ready(function(){
// 關閉廣告
$(".thanks  .x").click(function(){
$(".thanks").hide()
});
// animation
$(function(){
$(".face").click(function(){
$(".face").addClass("animate__animated animate__flip");
 $(".nav").delay(5000).fadeIn();
});

$(".face").on('animationend', function() {
  $(this).removeClass("animate__animated animate__flip");

});});

// nav關閉
$(".body1").mousedown(function(){
$(".nav").hide()
});

$(function(){
$("body").mousemove(function(){
 $(".shoe").fadeOut();
});

$("body").mousemove(function(){
 $(".shoe1").delay(2000).fadeIn();
});


$("body").mousemove(function(){
 $(".shoe2").delay(3000).fadeIn();
});

$("body").mousemove(function(){
 $(".shoe3").delay(4000).fadeIn();
});

$("body").mousemove(function(){
 $(".shoe4").delay(5000).fadeIn();
});
$("body").mousemove(function(){
 $(".shoe5").delay(6000).fadeIn();
});
$("body").mousemove(function(){
 $(".shoe6").delay(7000).fadeIn();
});
$("body").mousemove(function(){
 $(".shoe7").delay(8000).fadeIn();
});
});


$(function(){
$('#mybutton').draggable({
  handle: "#dragHandle"
});

$("#dragHandle").click(function(){
  $(".emailName").show()
});});

 
$(function(){
$(".night").click(function(){
$(".night").hide()
$(".sun").show()
$("body").css("background-color","white").css("color","black")
$(".sd").css("color","black")
$(".clearfix").css("color","black")
});
});

$(".sun").click(function(){
$(".sun").hide()
$(".night").show()

$("body").css("background-color","black").css("color","white")
$(".sd").css("color","white")
$(".clearfix").css("color","white")

});


});

