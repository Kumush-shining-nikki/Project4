document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:7000/products")
    .then(res => res.json())
    .then(products => {
      const wrapper = document.getElementById("slider-wrapper");
      if (!wrapper) {
        console.error("slider-wrapper elementi topilmadi!");
        return;
      }

      products.forEach(product => {
        const firstImage = product.images[0];
        if (firstImage) {
          const slide = document.createElement("div");
          slide.className = "swiper-slide gallery-slide";
          slide.innerHTML = `<img src="${firstImage}" alt="product" />`;
          wrapper.appendChild(slide);
        }
      });

      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: false,
      });
    });
});


setTimeout(() => {
  
new Swiper('.gallery-slider', {
  pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: true
  },
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
  },
  loop: false,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  }
  });
})