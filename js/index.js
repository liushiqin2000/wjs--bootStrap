
//轮播图部分
$(function () {
  //轮播图适应屏幕功能。
  var $carousel=$("#wjs_carousel");
  var imgs=$carousel.find("img");
  $(window).on("resize",function () {
    var screenWidth=$(window).width();

      if(screenWidth>=680){
        imgs.each(function () {
          $(this).attr("src",$(this).data("psrc"));
        })

      }else{
        imgs.each(function () {
          $(this).attr("src",$(this).data("msrc"));
        })
      }
    }).resize();
//给轮播图添加滑动功能。
  var startX=0;
  $carousel.on("touchstart",function (e) {
    startX= e.originalEvent.touches[0].clientX;

  })

  $carousel.on("touchend",function (e) {
    var distance=e.originalEvent.changedTouches[0].clientX-startX;
    if(distance>=50){
      $carousel.carousel("prev");
    }
    if(distance<=-50){

      $carousel.carousel("next");
    }
  })





});

//商品滚动区域。
$(function () {
  var $ul=$(".wjs_product .nav-tabs");
  var $li=$ul.find("li");
  var total=0;
  $li.each(function () {
    total+=$(this).width();
  });
  $ul.width(total);

new IScroll(".nav-tabs-wapper",{
  scrollY:false,
  scrollX:true
})



});