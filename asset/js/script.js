$(function() {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('active');
    $('.l-header__menu').toggleClass('open');
  });
});

$(window).scroll(function(){
  let windowHeight = $(Window).height();
  let scrollPosition = $(window).scrollTop();

  $('.elm').each(function(){
    let elementOffset = $(this).offset().top;

    if (elementOffset - windowHeight + 200 < scrollPosition) {
      $('.l-header__reserve').addClass('is-visible');
    }
  });
});