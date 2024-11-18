$(document).ready(function() {
  $('#newsSignup').hide();

  $('#signuplink').click(function(event) {
    event.preventDefault();
    $('#newsSignup').slideToggle();
    let openCloseSymbol = $('#openclose');
    if (openCloseSymbol.text() === '+') {
      openCloseSymbol.text('-');
    } else {
      openCloseSymbol.text('+');
    }
  });

  $('#slogan').hover(
    function() {
      $(this).fadeOut('normal', 'linear', function() {
        $(this).text('Hand Picked Just For You').fadeIn('slow', 'swing');
      });
    },
    function() {
      $(this).fadeOut('fast', 'swing', function() {
        $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
      });
    }
  );

  $('#rose').animate({ right: '100px', opacity: 1 }, 'slow', 'swing');

  $('#newsSignup').submit(function(event) {
    event.preventDefault();
    alert('Thank you for registering');
    $(this).hide();
    $('#signuplink').fadeTo('slow', 0.3);
  });
});
