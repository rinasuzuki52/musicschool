'use strict';

// // ハンバーガーメニュー

$(function() {

    $('.c-hamburger').click(function() {
        $(this).toggleClass('active');
        $('.l-header-nav__lists').toggleClass('active');
    });

});


// スライダー
$(document).ready(function(){
  $('.p-voice-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<img src="images/top/arrow-l.svg" class="slick-prev" alt="前へ">',
    nextArrow: '<img src="images/top/arrow-r.svg" class="slick-next" alt="次へ">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  });
});


  
//TOPアコーディオン
$(function() {
  $('.p-qa-list__a').hide(); // 最初は答えを非表示に

  $('.p-qa-list__q').on('click', function() {
    var $answer = $(this).next('.p-qa-list__a');

    if ($answer.is(':visible')) {
      $answer.slideUp();
      $(this).removeClass('active');
    } else {
      $answer.slideDown();
      $(this).addClass('active');
    }
  });
});


// スクロールボタン
$(function() {
$(document).ready(function () {
  var btn = $('.c-contact-btn');
  var topArrow = $('.c-back-btn');
  var footer = $('.l-footer');

  $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      var windowHeight = $(window).height();
      var footerTop = footer.offset().top;
      var btnHeight = btn.length ? btn.outerHeight() : 0; // btnが存在する場合のみ高さを取得
      var bottomSpace = 30; // topArrowをフッターの上30pxに設定

      // ボタンをゆっくり表示/非表示
      if (scrollTop > 100) {
          btn.fadeIn(500); // 表示速度を600ミリ秒に設定
          topArrow.fadeIn(500); // 表示速度を600ミリ秒に設定
      } else {
          btn.fadeOut(500); // 非表示速度を600ミリ秒に設定
          topArrow.fadeOut(500); // 非表示速度を600ミリ秒に設定
      }

      // フッター手前で位置を変える
      if (scrollTop + windowHeight > footerTop - (window.innerWidth <= 767 ? 20 : 30)) {
        var bottomSpace = (window.innerWidth <= 767) ? 20 : 30;
    
        if (btn.length) { // btnが存在する場合
            btn.css({
                position: 'absolute',
                bottom: windowHeight - footerTop + 'px', // フッターに0pxで配置
            });
            topArrow.css({
                position: 'absolute',
                bottom: windowHeight - footerTop + btnHeight + bottomSpace + 'px', // btnの上に配置
            });
        } else { // btnが存在しない場合
            topArrow.css({
                position: 'absolute',
                bottom: windowHeight - footerTop + bottomSpace + 'px', // フッターの上に配置
            });
        }
    } else {
        if (btn.length) { // btnが存在する場合
            btn.css({
                position: 'fixed',
                bottom: '0px', // 固定位置を0pxに設定
            });
            topArrow.css({
                position: 'fixed',
                bottom: (window.innerWidth <= 767 ? (19 + 50) : (31 + 50)) + 'px',
            });
        } else { // btnが存在しない場合
            topArrow.css({
                position: 'fixed',
                bottom: (window.innerWidth <= 767 ? 20 : 30) + 'px', // 固定位置を条件で設定
            });
        }
    }
  });

// $(function() {
// $(document).ready(function () {
//   var btn = $('.c-contact-btn');
//   var topArrow = $('.c-back-btn');
//   var footer = $('.l-footer');

//   $(window).on('scroll', function () {
//       var scrollTop = $(this).scrollTop();
//       var windowHeight = $(window).height();
//       var footerTop = footer.offset().top;
//       var btnHeight = btn.length ? btn.outerHeight() : 0; // btnが存在する場合のみ高さを取得
//       var bottomSpace = 30; // topArrowをフッターの上30pxに設定

//       // ボタンをゆっくり表示/非表示
//       if (scrollTop > 100) {
//           btn.fadeIn(500); // 表示速度を600ミリ秒に設定
//           topArrow.fadeIn(500); // 表示速度を600ミリ秒に設定
//       } else {
//           btn.fadeOut(500); // 非表示速度を600ミリ秒に設定
//           topArrow.fadeOut(500); // 非表示速度を600ミリ秒に設定
//       }

//       // フッター手前で位置を変える
//       if (scrollTop + windowHeight > footerTop - bottomSpace) {
//           if (btn.length) { // btnが存在する場合
//               btn.css({
//                   position: 'absolute',
//                   bottom: windowHeight - footerTop + 'px', // フッターに0pxで配置
//               });
//               topArrow.css({
//                   position: 'absolute',
//                   bottom: windowHeight - footerTop + btnHeight + bottomSpace + 'px', // btnの上に配置
//               });
//           } else { // btnが存在しない場合
//               topArrow.css({
//                   position: 'absolute',
//                   bottom: windowHeight - footerTop + bottomSpace + 'px', // フッターの上30pxに配置
//               });
//           }
//       } else {
//           if (btn.length) { // btnが存在する場合
//               btn.css({
//                   position: 'fixed',
//                   bottom: '0px', // 固定位置を0pxに設定
//               });
//               topArrow.css({
//                   position: 'fixed',
//                   bottom: (31 + 50) + 'px',
//               });
//           } else { // btnが存在しない場合
//               topArrow.css({
//                   position: 'fixed',
//                   bottom: '30px', // 固定位置を30pxに設定
//               });
//           }
//       }
//   });


// トップへ戻る
  $('.c-back-btn').click(function (event) {
      event.preventDefault(); // デフォルトのアンカー動作を防ぐ
      $('html, body').animate({ scrollTop: 0 }, 300, 'swing');
  });
});
});

