$(document).ready(function () {
  var itemCount = 0;
  var removeButton  = '<span class="del">Remove</span>';

  function createStarRating(container) {
    for (var i = 0; i < 5; i++) {
      $(container).append('<img src="staroff.gif" class="star" alt="star">');
    }
  }

  $('.rating').each(function () {
    createStarRating(this);
  });

  $('.add').click(function () {
    itemCount++;
    $('#empty').hide();

    var itemName = $(this).siblings('.name').text();
    var itemID = $(this).siblings('.name').attr('id');

    var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " " + removeButton + "</li>";
    $('#cart').append(cartLink);

    $(this).hide();
  });

  $('#cart').on('click', '.del', function () {
    $(this).parent().remove();
    itemCount--;
    if (itemCount === 0) {
      $('#empty').show();
    }
    var itemID = $(this).parent().attr('name');
    $('#' + itemID).siblings('.add').show();
  });

  $('.rating').on('click', '.star', function () {
    var $this = $(this);
    $this.siblings().attr('src', 'staroff.gif');
    $this.attr('src', 'staron.gif').prevAll().attr('src', 'staron.gif');
  });
});
