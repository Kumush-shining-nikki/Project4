const carousel = document.querySelector('.carousel');
const texts = document.querySelectorAll('.carousel p');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let index = 0;

function updateCarousel() {
  const offset = -index * texts[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

rightArrow.addEventListener('click', () => {
  if (index < texts.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});
leftArrow.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = texts.length - 1;
  }
  updateCarousel();
});

setInterval(() => {
  if (index < texts.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
}, 5000);