$(function (){

  $('.top-slider__inner').slick({
    dots:true,
    arrows:false,
    fade:true
  });
  
  var mixer = mixitup(products__items, {
    selectors: {
        target: '.products__item'
    },
    animation: {
        duration: 300
    }
});
});