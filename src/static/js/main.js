$(document)
  .ready(function () {
    /*下拉选择*/
    $('select')
      .formSelect();
    /*侧边导航栏*/
    $('.sidenav')
      .sidenav();
    /*轮播图*/
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
    /*公告*/
    setInterval(function () {
      $('.r-announcement ul')
        .children()
        .first()
        .clone(true)
        .appendTo('.r-announcement ul');
      $('.r-announcement ul>:first')
        .remove();
    }, 3000);
    /*输入框自动补充*/
    $('input.autocomplete')
      .autocomplete({
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': 'https://placehold.it/250x250'
        }
      });
    /*文本域计数*/
    $('textarea#textareaEvaluate')
      .characterCounter();
    $('textarea#areaValuate')
      .characterCounter();
    $('textarea#replyText')
      .characterCounter();
    /*悬浮二级导航*/
    $('.fixed-action-btn')
      .floatingActionButton({
        direction: 'top',
        hoverEnabled: false
      });
    $('#cardModal').modal();
    $('.tabs').tabs();
  });
