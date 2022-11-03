// ----------***SWIPER-JS----------

var swiper = new Swiper(".card-container", {
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    630: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
