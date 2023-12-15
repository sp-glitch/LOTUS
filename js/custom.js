$(function () {
  $(".main_slide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".main_visual_img").slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_visual_img").slick("slickPrev");
  });

  $(".main_visual .arrows .right").on("click", function () {
    $(".main_visual_img").slick("slickNext");
  });

  const tabBtn = $(".tab_btn>ul>li");
  const tabCont = $(".tab_cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function (e) {
    e.preventDefault();
    const index = $(this).index();

    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  });

  $(".btn").on("click", function () {
    $(".right_banner").toggleClass("on");
  });
});
