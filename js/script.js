//variables
const header = document.querySelector(".header");

//all swiper inits
function allSwipers() {
  //hero-mainpage
  const swiperHero = new Swiper(".hero-banner.swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });

  //stories mainpage
  const swiperStories = new Swiper(".stories-slider", {
    slidesPerView: "auto",
  });

  //categories mainpage
  const swiperMainCategories = new Swiper(".main-cat-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".main-cat-slider .swiper-button-next",
      prevEl: ".main-cat-slider .swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });

  //slider new goods mainpage
  const swiperMainNew = new Swiper(".main-new-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      750: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1540: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  //slider hits mainpage
  const swiperMainHit = new Swiper(".main-hit-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      750: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1540: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  //slider actions mainpage
  const swiperMainActions = new Swiper(".main-actions-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
    },
  });

  //photo slider catalog item
  const catalogItemSlider = document.querySelectorAll(".catalog-item-photo");
  for (i = 0; i < catalogItemSlider.length; i++) {
    catalogItemSlider[i].classList.add("catalog-item-photo-" + i);

    var slider = new Swiper(".catalog-item-photo-" + i, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".catalog-item-photo-" + i + " .swiper-button-next",
        prevEl: ".catalog-item-photo-" + i + " .swiper-button-prev",
      },
      pagination: {
        el: ".catalog-item-photo-" + i + " .swiper-pagination",
        type: "bullets",
      },
    });
  }
}
//cookies [for notification]
function getCookie(name) {
  let cookie_arr = document.cookie.split("; ");
  let cookie_obj = {};

  for (let i = 0; i < cookie_arr.length; i++) {
    let nv = cookie_arr[i].split("=");
    cookie_obj[nv[0]] = nv[1];
  }

  return cookie_obj[name];
}
if (getCookie("hide_popup") != "yes") {
  header.classList.remove("header-notification-hidden");
}

//jquery
$(function () {
  // jquery menu
  $(".js-menu-trigger").on("click", function () {
    $(".header").toggleClass("menu-active");
    $(".js-menu").toggleClass("menu-active");
    $(".page").toggleClass("no-scroll");
    $(".header").addClass("header-notification-hidden");

    $(".js-submenu-active").removeClass("js-submenu-active");
    $(".hide-siblings").removeClass("hide-siblings");
    $(".submenu-parent").removeClass("submenu-parent");
    $(".js-menu").removeClass("submenu-active");
    $(".on-top").removeClass("on-top");

    return false;
  });
  $(".menu-active .js-submenu-trigger").on("click", function () {
    if ($(".js-menu").is(".menu-active")) {
      $(this).siblings(".js-submenu").addClass("js-submenu-active");
      $(".header-navigation").addClass("on-top");
      $(".js-menu").addClass("submenu-active");

      $(this).closest(".header-categories-item").addClass("hide-siblings");
      $(this).closest(".js-submenu-active").addClass("submenu-parent");
      $(this).closest(".js-submenu-active div").addClass("hide-siblings");
    }

    return false;
  });
  $(".js-back-trigger").on("click", function () {
    $(this).closest(".js-submenu").removeClass("js-submenu-active");
    $(this).closest(".hide-siblings").removeClass("hide-siblings");
    $(this).closest(".submenu-parent").removeClass("submenu-parent");

    if ($(this).closest(".js-submenu").is(".dropdown-1")) {
      $(".header-navigation").removeClass("on-top");
      $(".js-menu").removeClass("submenu-active");
      $(".header-categories-item").removeClass("hide-siblings");
    }
    return false;
  });
  // jquery search front
  $(".header-search-trigger").on("click", function () {
    $(".header-search").addClass("header-search-open");
    $(".header-cart-popup-active").removeClass("header-cart-popup-active");
    $(".page").toggleClass("no-scroll");
    return false;
  });

  $(".header-search-back").on("click", function () {
    $(".header-search-open").removeClass("header-search-open");
    $(".page").toggleClass("no-scroll");
    $(".header-search-prev").hide();
    $(".header-search-result").removeClass("header-search-result-open");
    $(".header-search-input").val("");
    $(".header-search-reset").removeClass("header-search-reset-active");
    return false;
  });

  $(".header-search-input").focus(function () {
    if (
      !$(".header-search-input").val() &&
      $(".header-search-prev").is(":hidden") &&
      $(".header-search-prev-item").length
    ) {
      $(".header-search-prev").show();
    }
  });

  $(".header-search-reset").on("click", function () {
    $(".header-search-input").val("");
    if ($(".header-search-prev-item").length) {
      $(".header-search-prev").show();
    }
    $(".header-search-result").removeClass("header-search-result-open");
    $(".header-search-reset").removeClass("header-search-reset-active");
    return false;
  });

  $(".header-search-prev-reset").on("click", function () {
    $(this).closest(".header-search-prev-item").remove();
    if (!$(".header-search-prev-item").length) {
      $(".header-search-prev").hide();
    }
    return false;
  });

  $(".header-search-input").on("input", function () {
    if ($(this).val()) {
      $(".header-search-result").addClass("header-search-result-open");
      $(".header-search-prev").hide();
      $(".header-search-reset").addClass("header-search-reset-active");
    } else {
      if ($(".header-search-prev-item").length) {
        $(".header-search-result").removeClass("header-search-result-open");
        $(".header-search-prev").show();
      }
      $(".header-search-reset").removeClass("header-search-reset-active");
    }
  });
  $(".header-search-open").on("click", function () {
    window.location.href = $(this).attr("href");
  });
  // header cart popup
  $(".header-cart-trigger").on("click", function () {
    if ($(window).width() > 1024) {
      $(".header-cart-popup").toggleClass("header-cart-popup-active");
    } else {
      window.location.href = $(".header-icons-cart a").attr("href");
    }
    return false;
  });

  $(".header-cart-popup a").on("click", function () {
    window.location.href = $(this).attr("href");
  });

  $(window).on("resize", function () {
    if ($(window).width() <= 1024) {
      $(".header-cart-popup-active").removeClass("header-cart-popup-active");
    }
  });
  //favorite btn
  $(".catalog-item-favorite button").on("click", function () {
    $(this)
      .closest(".catalog-item-favorite")
      .toggleClass("catalog-item-favorite-active");
    return false;
  });
  //color change products
  $(".catalog-item-colors button").on("click", function () {
    $(this).siblings(".color-active").removeClass("color-active");
    $(this).addClass("color-active");
    return false;
  });
});

document
  .querySelector(".header-notification-close")
  .addEventListener("click", function () {
    let date = new Date(new Date().getTime() + 60 * 1000);
    document.cookie = "hide_popup=yes; path=/; expires=" + date.toUTCString();
    header.classList.add("header-notification-hidden");
  });

allSwipers();

document.addEventListener("click", (e) => {
  const cartPopup = document.querySelector(".header-cart-popup");
  const isClosestCart = e.target.closest(".header-cart-popup");
  if (!isClosestCart && cartPopup.classList.contains("header-cart-popup-active")) {
    cartPopup.classList.remove("header-cart-popup-active");
  }

  const searchPopup = document.querySelector(".header-search");
  const isClosestSearch = e.target.closest(".header-search");
  const pageEl = document.querySelector(".page");
  if (!isClosestSearch && searchPopup.classList.contains("header-search-open")) {
    searchPopup.classList.remove("header-search-open");
    pageEl.classList.remove("no-scroll");
  }
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);