/* A slideshow where photos automatically switch at regular intervals. */
const slideImages = [
  '../../asset/img/l-header__slide--img1.jpg',
  '../../asset/img/l-header__slide--img2.jpg',
  '../../asset/img/l-header__slide--img3.jpg'
]

let num = -1;
function slideTime() {
  if(num === 2) {
    num = 0;
  } else {
    num ++;
  }
  document.getElementById('slide--img').src = slideImages[num];
}

setInterval(slideTime, 20000);


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
