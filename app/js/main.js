$(function (){
   
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