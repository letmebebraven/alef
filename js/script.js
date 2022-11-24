const swiperStories = new Swiper('.stories-slider', {
    slidesPerView: 'auto',
});
const swiperMainCategories = new Swiper('.main-cat-slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.main-cat-slider .swiper-button-next',
        prevEl: '.main-cat-slider .swiper-button-prev',
      },
    breakpoints: {
        1025: {
          slidesPerView: 2
        }
      }
});