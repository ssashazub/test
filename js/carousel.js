var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2, 
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    
    480: {
      slidesPerView: 1, 
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
  }
});