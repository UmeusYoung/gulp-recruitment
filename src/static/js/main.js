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
    $('#cardModal')
      .modal();
    /*关于我们等切换*/
    $('.tabs')
      .tabs();
    /*选择套餐效果*/
    $('body')
      .on('click', '.r-custom .btn-floating', function () {
        $('.r-custom .btn-floating')
          .addClass('green');
        $(this)
          .removeClass('green')
          .addClass('red');
        $('.card')
          .find('.card-content')
          .removeClass('red-text');
        $(this)
          .closest('.card')
          .find('.card-content')
          .addClass('red-text');
      });
    /*点击支付*/
    $('#modalPay')
      .modal();
    // 获取验证码
    var isPhone = 1;

    function getCode(e) {
      var second = 30;
      $('#codeBtn')
        .val(second + '秒后重发');
      $('#codeBtn')
        .prop('disabled', true);
      if (isPhone) {
        resetCode();
      }
    }

    //倒计时
    function resetCode() {
      var second = 30;
      var timer = null;
      $('#codeBtn')
        .val(second + '秒后重发');
      timer = setInterval(function () {
        second -= 1;
        $('#codeBtn')
          .val(second + '秒后重发');
        if (second < 0) {
          clearInterval(timer);
          $('#codeBtn')
            .val('获取验证码');
          $('#codeBtn')
            .prop('disabled', false);
        } else {
          $('#codeBtn')
            .prop('disabled', true);
          $('#codeBtn')
            .val(second + '秒后重发');
        }
      }, 1000);
    }

    $('body')
      .on('click', '#codeBtn', function () {
        getCode();
      });
  });
