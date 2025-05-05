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
  $('.p-voice-slider__slider').slick({
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
          arrows: false,
          dots: true
        }
      }
    ]
  });
});


// $(document).ready(function(){
//     $('.p-voice-slider').slick({
//       slidesToShow: 3,       // 横に3枚表示
//       slidesToScroll: 1,     // 1枚ずつスライド
//       arrows: true,         // デフォルト矢印を非表示
//       infinite: true,        // ループするように
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1   // スマホは1枚表示
//           }
//         }
//       ]
//     });
  
//     // カスタム矢印で操作
//     $('.p-voice-slider__arrow-l').on('click', function() {
//       $('.p-voice-slider__cards').slick('slickPrev');
//     });
  
//     $('.p-voice-slider__arrow-r').on('click', function() {
//       $('.p-voice-slider__cards').slick('slickNext');
//     });
//   });
  
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
  // トップに戻るボタン
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.c-back-btn').addClass('active');
    } else {
      $('.c-back-btn').removeClass('active');
    }
  });
  // お問い合わせボタン
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.c-contact-btn').addClass('active');
    } else {
      $('.c-contact-btn').removeClass('active');
    }
  });
});

