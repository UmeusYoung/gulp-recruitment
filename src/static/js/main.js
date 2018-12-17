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
    setInterval(function () {
      $('.r-announcement ul')
        .children()
        .first()
        .clone(true)
        .appendTo('.r-announcement ul');
      $('.r-announcement ul>:first')
        .remove();
    }, 3000);
    $('input.autocomplete')
      .autocomplete({
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': 'https://placehold.it/250x250'
        }
      });
    $('textarea#textareaEvaluate').characterCounter();
  });
