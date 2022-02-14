$(function(){
  $(".slideimg3").fadeOut(0);
  $(".slideimg2").fadeOut(0);
    start();
    var imgs=2;
    var now=0;
    function start(){ 
      $("#slide img").eq(0).siblings().fadeOut(3000);
      setInterval(function(){slide();},3000);
    };
    function slide(){
      now=now==imgs?0:now+=1;
      $("#slide img").eq(now-1).fadeOut(3000);
      $("#slide img").eq(now).fadeIn(3000);
    };
});