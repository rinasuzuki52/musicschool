'use strict';

// // ハンバーガーメニュー

$(function() {

    $('.c-hamburger').click(function() {
        $(this).toggleClass('active');
        $('.l-header__nav').toggleClass('active');
    });

});


// スライダー
$(document).ready(function(){
    $('.p-slider__items').slick({
      slidesToShow: 3,       // 横に3枚表示
      slidesToScroll: 1,     // 1枚ずつスライド
      arrows: false,         // デフォルト矢印を非表示
      infinite: true,        // ループするように
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1   // スマホは1枚表示
          }
        }
      ]
    });
  
    // カスタム矢印で操作
    $('.p-slider__arrow-l').on('click', function() {
      $('.p-slider__items').slick('slickPrev');
    });
  
    $('.p-slider__arrow-r').on('click', function() {
      $('.p-slider__items').slick('slickNext');
    });
  });
  
