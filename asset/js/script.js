/* on load */
$(function(){
  $(window).on('load', function() {
    $('#animation-onLoad').addClass('loaded');
  }).queue(function(){
    $('.fadeDown_onLoad').addClass('fadeDownOnLoad');
  });
});

/* slider of news contents */
$(function() {
  $('.autoplay__fv').slick({
    slidesToShow:  1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    dots:true,
    appendDots: $('.l-header__pagination'),
    dotsClass: 'paginationFv c-flex',
    autoplaySpeed: 10000,
    infinite: true,
    responsive: [
      {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})

/* When scrolling, the reservation button will appear. */
window.addEventListener('scroll', function() {
  let windowHeight = window.innerHeight;
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  let elmElements = document.querySelectorAll('.elm');
  const reserveElement = document.querySelector('.l-header__wrap');
  const linkElement = document.querySelector('.l-footer__pageTop');
  const siteTtl = document.querySelector('.l-header__siteTtl');
  const hdTtl = document.querySelector('.l-header__ttl');
  const reserveBox = document.querySelector('.l-header__reserve');
  const tglMenu = document.querySelector('.l-header__toggle--box');
  const tgl1 = document.querySelector('.l-header__toggle--box span');
  const tgl2 = document.querySelector('.l-header__toggle--box span:nth-child(2)');
  const tgl3 = document.querySelector('.l-header__toggle--box span:nth-child(3)');

  elmElements.forEach(function(elm) {
    let elementOffset = elm.offsetTop;

    if(elementOffset - windowHeight + 200 < scrollPosition) {
      reserveElement.classList.add('is-visible');
      linkElement.classList.add('is-visible');
      hdTtl.classList.add('initial');
      siteTtl.classList.add('openScrolled');
      siteTtl.classList.add('changeFntColor');
      reserveBox.classList.add('is-visible');
      tgl1.classList.add('changeColor');
      tgl2.classList.add('changeColor');
      tgl3.classList.add('changeColor');
      tglMenu.classList.add('changeFntColor');
    } else {
      reserveElement.classList.remove('is-visible');
      linkElement.classList.remove('is-visible');
      siteTtl.classList.remove('changeFntColor');
      siteTtl.classList.remove('openScrolled');
      hdTtl.classList.remove('initial');
      reserveBox.classList.remove('is-visible');
      tgl1.classList.remove('changeColor');
      tgl2.classList.remove('changeColor');
      tgl3.classList.remove('changeColor');
      tglMenu.classList.remove('changeFntColor');
    }
  });
});

/* When you click the toggle button, the menu will open. */
$(function() {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('active');
    $('.l-header__wrap').toggleClass('open');
    $('.l-header__menu').toggleClass('open');
  });
});

/* slider of news contents */
$(function() {
  $('.autoplay__news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:'<a class="prev"><span class="selects--prev">＜</span></a>',
    nextArrow:'<a class="next"><span class="selects--next">＞</span></a>',
    appendArrows: $('.news--selects'),
    pauseOnHover: true,
    arrows: true,
    dots:true,
    appendDots: $('.p-news__selectDots'),
    dotsClass: 'paginationNews',
    autoplaySpeed: 10000,
    infinite: true,
    responsive: [
      {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})


/* slider of tour contents */
$(function() {
  $('.autoplay__tour').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:'<a class="prev"><span class="selects--prev">＜</span></a>',
    nextArrow:'<a class="next"><span class="selects--next">＞</span></a>',
    appendArrows: $('.selects'),
    pauseOnHover: true,
    arrows: true,
    dots: true,
    dotsClass: 'paginationTour c-flex',
    autoplaySpeed: 10000,
    infinite: true,
    responsive: [
      {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
          },
        },
        {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})

/* fade-in */

function fadeAnime(){
  let time = 0.5;
  let value = time;

  $('.fadeUpTrigger').each(function(){
    let parent = this;
    let elemPos = $(this).offset().top - 30;
    let scroll = $(window).scrollTop();
    let itemHeight = $(window).height();
    let child = $(this).children();


    if(scroll >= elemPos - itemHeight && !$(parent).hasClass("play")) {
      $(child).each(function() {
        if(!$(this).hasClass("fadeUp")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;

          let index = $(child).index(this);
          if((child.length - 1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }

    /* single fade-in */
    $('.fadeAllTrigger').each(function(){
      let elemPos = $(this).offset().top-30;
      let scroll = $(window).scrollTop();
      let itemHeight = $(window).height();
      if(scroll >= elemPos - itemHeight) {
        $(this).addClass('fadeUp');
      } else {
        $(this).removeClass('fadeUp');
      }
    });
  });
}

$(window).on('scroll', function(){
  fadeAnime();
});

$(window).on('load', function(){
  fadeAnime();
});

