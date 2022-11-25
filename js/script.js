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
const swiperMainNew = new Swiper('.main-new-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        750: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
        1025: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1160: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1540: {
            slidesPerView: 5,
            spaceBetween: 20
          }
      }
    }
);
const swiperMainHit = new Swiper('.main-hit-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        750: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
        1025: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1160: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1540: {
            slidesPerView: 5,
            spaceBetween: 20
          }
      }
    }
);
const swiperMainActions = new Swiper('.main-actions-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        1025: {
          slidesPerView: 4
        }
      }
    }
);
