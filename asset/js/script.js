/* A slideshow where photos automatically switch at regular intervals. */
const slideImages = [
  '../../asset/img/l-header__slide--img1.jpg',
  '../../asset/img/l-header__slide--img2.jpg',
  '../../asset/img/l-header__slide--img3.jpg',
  '../../asset/img/l-header__slide--img4.jpg'
];

let nowCnt = -1;
let flg = 0;

function changeImg() {
  nowCnt = (nowCnt < slideImages.length - 1) ? nowCnt + 1 : 0;
  flg = (flg === 0) ? 1 : 0;

  const slideImg1 = document.getElementById('slide--img1');
  const slideImg2 = document.getElementById('slide--img2');
  const paginationCircles = document.querySelectorAll('.l-header__pagination--circle');

  if (flg === 0) {
    slideImg1.src = slideImages[nowCnt];
    slideImg1.classList.add('fade-in');
    slideImg1.classList.remove('fade-out');
    slideImg2.classList.add('fade-out');
    slideImg2.classList.remove('fade-in');
  } else {
    slideImg2.src = slideImages[nowCnt];
    slideImg2.classList.add('fade-in');
    slideImg2.classList.remove('fade-out');
    slideImg1.classList.add('fade-out');
    slideImg1.classList.remove('fade-in');
  }

  /* Updating of pagination */
  paginationCircles.forEach((circle, index) => {
    circle.classList.toggle('target', index === nowCnt);
  });
}

setInterval(changeImg, 10000);

/* When scrolling, the reservation button will appear. */
window.addEventListener('scroll', function() {
  let windowHeight = window.innerHeight;
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  let elmElements = document.querySelectorAll('.elm');
  let reserveElement = document.querySelector('.l-header__siteTtl');

  elmElements.forEach(function(elm) {
    let elementOffset = elm.offsetTop;

    if(elementOffset - windowHeight + 200 < scrollPosition) {
      reserveElement.classList.add('is-visible');
    } else {
      reserveElement.classList.remove('is-visible');
    }
  });
});

/* When you click the toggle button, the menu will open. */
$(function() {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('active');
    $('.l-header__menu').toggleClass('open');
  });
});


/* slider of tour contents */

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  arrows: false,
  autoplaySpeed: 10000,
  infinite: true,
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});


/*
$(function(){
  let slideWidth = $('.p-tour__slide').outerWidth(true);
  let slideLength = $('p-tour__slide').length;
  let slideArea = slideWidth * slideLength;
  $('p-tour__slides').css('width', slideArea);

  let slideCurrent = 0;
  let slideLast = $('p-tour__slide').length - 1;

  function changeSlide(){
    $('.p-tour__slides').stop().animate({
      left: slideCurrent * -slideWidth
    });

    let pagiNation = slideCurrent + 1;
    $('.p-tour__pagination--circle').removeClass('target');
    $('.p-tour__pagination--circle:nth-of-type(' + pagiNation + ')').addClass('target');
  };

  let Timer;

  function startTimer(){
    Timer = setInterval(function(){
      if(slideCurrent === slideLast) {
        slideCurrent = 0;
        changeSlide();
      } else {
        slideCurrent++;
        changeSlide();
      };
    }, 10000);
  }

  function stopTimer(){
    clearInterval(Timer);
  }
  startTimer();

  $('.prev').on('click', function(){
    stopTimer();
    startTimer();
    if(slideCurrent === 0){
      slideCurrent = slideLast;
      changeSlide();
    } else {
      slideCurrent--;
      changeSlide();
    };
  });

  $('.next').on('click', function(){
    stopTimer();
    startTimer();
    if(slideCurrent === slideLast){
      slideCurrent = 0;
      changeSlide();
    } else {
      slideCurrent ++;
      changeSlide();
    };
  });
})
*/