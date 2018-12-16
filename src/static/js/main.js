$(document)
  .ready(function () {
    $('select')
      .formSelect();
    $('.sidenav')
      .sidenav();
    $('.carousel.carousel-slider.r-carousel')
      .carousel({
        duration: 500,
        fullWidth: true,
        indicators: true
      });
    setInterval(function () {
      $('.carousel')
        .carousel('next', 1);
    }, 3000);
    setInterval(function() {
      $('.r-announcement ul').children().first().clone(true).appendTo('.r-announcement ul');
      $('.r-announcement ul>:first').remove();
    }, 3000);
  });
