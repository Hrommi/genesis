$( document ).ready(function() {
  $('.js-accordion__header').on('keyup', function(e) {
    if (e.keyCode === 13) {
      $(this).click();
    }
  });
  $('.js-accordion__header').on('click', function(){
    $(this).closest('.accordion').toggleClass('accordion--active');
    if (!$(this).closest('.accordion').hasClass('accordion--active')) {
      $(this).next('.accordion__content').slideUp();
    } else {
      $(this).next('.accordion__content').slideDown();
    };
  });
});
