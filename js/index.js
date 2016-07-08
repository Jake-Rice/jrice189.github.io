$(".project1").hover(function(){on(1)}, function(){off(1)});
$(".project2").hover(function(){on(2)}, function(){off(2)});
$(".project3").hover(function(){on(3)}, function(){off(3)});
$(".project4").hover(function(){on(4)}, function(){off(4)});
$(".project5").hover(function(){on(5)}, function(){off(5)});
$(".project6").hover(function(){on(6)}, function(){off(6)});
$(".project7").hover(function(){on(7)}, function(){off(7)});
$(".project8").hover(function(){on(8)}, function(){off(8)});

function on(a) {
  $(".ele"+a).css("color","#ff7422");
  $(".ele"+a).css("border-color","#ff7422");
}
function off(a) {
  $(".ele"+a).css("color","");
  $(".ele"+a).css("border-color","");
}