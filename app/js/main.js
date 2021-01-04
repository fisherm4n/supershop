$(function (){
  $('.product-page__slider').slick({
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  $('.product-tabs__top-item').on('click',function(e){
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  $(this).addClass('product-tabs__top-item--active');
  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
   $($(this).attr("href")).addClass('product-tabs__content-item--active');
  });
  $('.product-slide__thumb').slick({
    asNavFor:'.product-slide__big',
    focusOnSelect:true,
    slidesToShow:3,
    slidesToScroll:1,
    vertical:true,
    arrows:false,
    draggable:false
  });
  $('.product-slide__big').slick({
    asNavFor:'.product-slide__thumb',
    arrows:false,
    fade:true,
    draggable:false
  });
  $('.shop-content__filter-btn').on('click',function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-grid').on('click', function(){
    $('.products-card').removeClass('products-card--list');
  });
  $('.button-list').on('click', function(){
    $('.products-card').addClass('products-card--list');
  });
  $('.filter-price__input').ionRangeSlider({
    type:"double",
    prefix: "$",
     onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
     },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
        },
  });
  
  
  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
    
  });
  $(".shop-content__stars").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
    
  });
  
  $('.top-slider__inner').slick({
    dots:true,
    arrows:false,
    fade:true
  });
  $('.product-info__input').styler();
  var containerEl1 = document.querySelector('[data-ref="products"]');
  var containerEl2 = document.querySelector('[data-ref="new-design"]');

  var config = {
    controls: {
      scope: "local",
    },
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});