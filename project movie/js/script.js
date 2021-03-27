$(".f").click(function () {
    $(".input").fadeToggle(1000)
})






$('.second').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
    arrows:false,
    autoplay: 100,
});






$('.trendslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});