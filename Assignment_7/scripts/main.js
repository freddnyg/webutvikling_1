$('img').css('opacity', '.5');
$('img').mouseenter(function() {
  $(this).animate({
    opacity: '1'
  });
}).mouseleave(function() {
  $(this).animate({
    opacity: '.5'
  });
})