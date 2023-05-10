$(function() {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('active');
    $('.l-header__menu').toggleClass('open');
  });
});