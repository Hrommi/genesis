$(document).ready(function(){
  $('.scheme').on('mouseenter', function() {
    var schemeParent = $(this).closest('.schemes-list');
    var schemeProgress = schemeParent.find('.schemes-list__progress');
    var countScheme = schemeParent.find('.schemes-list__item').length;
    var numberScheme = $(this).closest('.schemes-list__item').index() + 1;
    var widthProgress = (numberScheme / countScheme * 100) - 10;
    $('.scheme').removeClass('scheme--active');
    $(this).addClass('scheme--active');
    schemeProgress.find('.progress__bar').width(widthProgress + '%')
  });
});
