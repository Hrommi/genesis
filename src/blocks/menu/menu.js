$(document).ready(function(){
  $('.js-menu-open').on('click', function() {
    $('body').toggleClass('menu-opened');
    if ($(this).hasClass('burger')) {
      $(this).toggleClass('burger--active');
    }
  });
  // $('.main-nav__link').on('click', function() {
  //   console.log('obj');
  //   if ($('body').hasClass('menu-opened')) {
  //     menuClose();
  //   }
  // });
});

function menuOpen() {
  $('body').addClass('menu-opened');
  if ($('.js-menu-open').hasClass('burger')) {
    $('.js-menu-open').addClass('burger--active');
  }
}

function menuClose() {
  $('body').removeClass('menu-opened');
  if ($('.js-menu-open').hasClass('burger')) {
    $('.js-menu-open').removeClass('burger--active');
  }
}
