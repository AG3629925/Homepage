$(document).ready(function() {
  $(".thumb").click(function() {
    let newSrc = $(this).attr("src");
    let newAlt = $(this).attr("alt");
    $("#lgPic").attr("src", newSrc).attr("alt", newAlt);
    $("#imageCaption").text(newAlt);
  });

  $("#lgPic").click(function() {
    let src = $(this).attr("src");
    window.open(src, '_blank');
  });
});
