$(document).ready(function() {
  $('.botanic').hide();
  $('.imgdiv').hide();

  $('h1, h2').mouseover(function() {
    $(this).css('color', 'red');
  }).mouseout(function() {
    $(this).css('color', '');
  });

  $('.flower').click(function() {
    $('.botanic').hide();
    $(this).childern('.botanic').show()
  });

  $('.pic').hover(function(evt) {
    var imgId = '#' + $(this).attr('title');
    var x = evt.pageX + 150;
    var y = evt.pageY;
    $(imgId).css({top: y, left: x}).show();
  }, fuction() {
    var imgId = '#' + $(this).attr('title');
    $(imgId).hide();
  });

  $(document).keypress(fuction(evt) {
    var keyPressed = evt.key.toLowerCase();
    window.location = '#' + keyPressed;
  });
});
