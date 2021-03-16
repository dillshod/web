$(function(){

    $('.top__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        fade:true,
    });

  /* $('.reviews__slider').slick({
        arrows:false,
        dots:true,
        slidesToshow:4,
        slidestoScroll:1,
        autoplay:true,
        fade:true,
    });*/



  
$('.reviews__slider').slick({
    slidesToShow: 3,
    dots:true,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}); 
