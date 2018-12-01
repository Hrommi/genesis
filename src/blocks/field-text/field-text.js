$(document).ready(function(){
  $('.field-text__input').on('focus blur', function (e) {
    $(this).parents('.field-text').toggleClass('field-text--focused', (e.type === 'focus' || this.value.length > 0));
  }).trigger('blur');
  autosize($('.field-text textarea'));
  $('.field-text--phone .field-text__input').inputmask('+7 (999) 999-99-99', {
    'showMaskOnHover': false,
    'oncomplete': function(){
      inputComplite($(this));
    },
    'onincomplete': function(){
      inputInComplite($(this));
    }
  });
  $('.field-text--validation .field-text__input').on('input', function(){
    if ($(this).val().length >= $(this).attr('data-validation-length')) {
      inputComplite($(this));
    } else {
      inputInComplite($(this));
    }
  })
});

function inputComplite($this) {
  $this.closest('.field-text').addClass('field-text--complite');
}

function inputInComplite($this) {
  $this.closest('.field-text').removeClass('field-text--complite');
}
