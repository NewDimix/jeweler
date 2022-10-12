$(window).on('load', function () {
  // START preloader
  $preloader = $('.js-loader'),
  $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
  // END preloader



  // START header height
  function header() {
    var headerMinHeight = $('.js-header-row').height() + 180 + $('.js-header-content').outerHeight(true);
    $('.js-header').css('min-height', headerMinHeight + 'px');
  };
  header();
  $(window).resize(function() {
    header();
  });
  // END header height



  // START collections height
  function collections() {
    if ($(window).outerWidth(true) > '992') {
      $('.collections__gold-content-wrap').addClass('js-collections-content');
    } else {
      $('.collections__gold-content-wrap').removeClass('js-collections-content');
      $('.collections__gold-content-wrap').css('height', '100%');
    }
    $('.js-collections-content').css('height', 'auto');

    if ($(window).outerWidth(true) > '992') {
      var collectionsContent = document.querySelectorAll('.js-collections-content');
      var heightContent = 0;
      for (var i=0; i<collectionsContent.length; i++) {
        if (heightContent < collectionsContent[i].offsetHeight) {
          heightContent = collectionsContent[i].offsetHeight;
        }
      }
      $('.js-collections-content').css('height', heightContent + 'px');
    }
  }
  collections();
  $(window).resize(function() {
    collections();
  });
  // START collections height



  // START card
  $(".js-card-btn").click(function () {
    $('html, body').animate({scrollTop: 0},500);
    $(".js-card-content").slideUp();
    $(".js-card-form").slideDown();
  });

  $(".js-card-btn-back").click(function () {
    $('html, body').animate({scrollTop: 0},500);
    $(".js-card-content").slideDown();
    $(".js-card-form").slideUp();
  });
  // START card



    function Menu() {
        this.body = $('body');
        this.body.append('<div class="menu__bg js-menu-bg"></div>');
        this.body.append('<div class="menu__border js-menu-border"></div>');

        this.headerMenu = $('.js-header-menu');
        this.menu = $('.js-menu');
        this.item = $('.js-menu-item');
        this.btn = $('.js-menu-btn');
        this.content = $('.js-menu-content');
        this.bg = $('.js-menu-bg');
        this.border = $('.js-menu-border');
        this.page = $('.js-page');

        var menu = this;

        this.toggle = function() {
            menu.btn.toggleClass('open');
            menu.content.toggleClass('open');
            menu.page.toggleClass('page_menu-open');
            menu.bg.fadeToggle(300);
            if ($(window).outerWidth(true) < '600') {
                menu.border.toggleClass('menu__border_open');
                menu.body.toggleClass('menu-open');
            }
        }

        this.moveBlock = function() {
            if ($(window).outerWidth(true) < '600') {
                if ($(menu.body).children(menu.menu).length == 0) {
                    return;
                } else {
                    menu.body.append(menu.menu);
                }
            } else {
                if ($(menu.headerMenu).children(menu.menu).length == 0) {
                    return;
                } else {
                    menu.headerMenu.append(menu.menu);
                }

                if (menu.body.hasClass("menu-open")) {
                    menu.body.removeClass('menu-open');
                }
            }
        }

        menu.moveBlock();

        menu.btn.click(function (event) {
            menu.toggle();
        });

        menu.item.click(function (event) {
            menu.toggle();
        });

        menu.bg.click(function (event) {
            menu.toggle();
        });

        $(window).resize(function() {
            menu.moveBlock();

            if ($(window).outerWidth(true) > '600') {
                menu.border.removeClass('menu__border_open');
                menu.btn.removeClass('open');
                menu.content.removeClass('open');
                menu.page.removeClass('page_menu-open');
                menu.bg.fadeOut(300);
            }
        });
    }

    var menu = new Menu();



  // START smooth scrolling
  $(".js-menu").on("click",".js-menu-scroll", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });
  // END smooth scrolling



function initMap() {
    var coordinates = {lat: 47.212325, lng: 38.933663},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
}


  // START slick
  $('.js-header-slider').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 700,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: false
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0px'
  });
  // END slick



  // START youtube-load
  $(function() {
    $(".js-youtube").each(function() {
//      $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
      $(this).css('background-image', 'url(img/video-bg.jpg)');
      $(this).append($('<div/>', {'class': 'about__play'}));

      $(document).delegate('#'+this.id, 'click', function() {
        $('.about__border').hide();
        var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&enablejsapi=1";
        if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
        var iframe = $('<iframe/>', {'id': this.id, 'class': 'youtube', 'frameborder': '0', 'allowfullscreen': 'allowfullscreen', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
        $(this).replaceWith(iframe);
      });
    });
  });

  window.addEventListener("resize", function() {
    var height = $('.js-youtube-wrap').height();
    var width = $('.js-youtube-wrap').width();
    $('iframe').css('height', height);
    $('iframe').css('width', width);
  }, false);
  // END youtube-load



  // START stop youtube video
//  $('.js-youtube-wrap').click(function() {
//    if ($(".js-youtube-wrap iframe").is(".youtube")) {
//      var id = $('.js-youtube-wrap iframe').attr('id');
//      var bgi = 'background-image: url(http://i.ytimg.com/vi/' + id + '/sddefault.jpg';
//      var div = $('<div></div', {'id': id, 'class': 'slider-videos__youtube js-youtube', 'style': bgi});
//      $('.js-youtube-wrap iframe').after(div);
//      var divplay = $('<div></div', {'class': 'slider-videos__play'});
//      $('.js-youtube').append(divplay);
//      $(".js-youtube-wrap iframe").remove();
//    };
//  });
//
//  $(document).on('click', '.js-youtube-stop', function(){
//    jQuery("iframe").each(function() {
//      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
//    });
//  });
//
//  $('.js-videos-slider').on('swipe', function(event, slick, direction){
//    jQuery("iframe").each(function() {
//      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
//    });
//  });
  // END stop youtube video



  // START mCustomScrollbar
  $(".collections__text").mCustomScrollbar({
    documentTouchScroll: true,
    theme: 'dark'
  });
  // END mCustomScrollbar



  // START form styler
  (function($) {
    $(function() {
      $('select').styler();
    });
  })(jQuery);
  // END form styler



  // START mCustomScrollbar
//  new WOW().init();
  // END mCustomScrollbar

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: +$('.slider-range-min').html(),
      max: +$('.slider-range-max').html(),
      values: [ +$('.slider-range-min').html(), +$('.slider-range-max').html() ],
      slide: function( event, ui ) {
        $( ".slider-range-input" ).val( "от $" + ui.values[ 0 ] + " - до $" + ui.values[ 1 ] );
      },
      change: function(event, ui) {
        alert('конец события');
      }
    });
    $( ".slider-range-input" ).val( "от $" + $( "#slider-range" ).slider( "values", 0 ) +
      " - до $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
});

jQuery(document).ready(function( $ ) {
  // START dotdotdot
  $(".product__title h3").dotdotdot({});
  $(".article__text p").dotdotdot({});
  $(".article__title h2").dotdotdot({});
  // END dotdotdot
});
