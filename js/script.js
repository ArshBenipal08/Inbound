$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".nn").css("background", "#C97AEF");
      $(".nn a").css("color", "white");
    } else {
      $(".nn").css("background", "none");
      $(".nn a").css("color", "#0E0E0E");
    }
  });

  var c = true;
  $(".navbar-toggler").click(function () {
    if (c) {
      $(".navbar-toggler").html('<i class="fa-solid fa-xmark"></i>');
      $(".navbar").css({ backgroundColor: "#F4F4F4" });
      $(".navbar-brand").html('<img src="media/icons/logo_pruple.svg" alt="">');
      c = false;
    } else {
      $(".navbar-toggler").html('<img src="media/icons/menu.svg" alt="">');
      $(".navbar").css({ backgroundColor: "transparent" });
      $(".navbar-brand").html('<img src="media/icons/logo.svg" alt="">');

      c = true;
    }
  });
});
