let tabs = document.querySelectorAll(".seller_tab .tabs .tab");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

var swiper = new Swiper(".bestSellerTab", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    340: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    840: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".products-tab", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: "",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".seller_tab .products-tab .swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    840: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1300: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".special_product_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: "",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".special_product .products .swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },
});

var swiper = new Swiper(".testimonial_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: "",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".testimonial_slider .swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1300: {
      slidesPerView: 3.5,
      spaceBetween: 28,
    },
  },
});
var swiper = new Swiper(".join_family_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    360: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    840: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".delivery_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

let question_tab = document.querySelectorAll(".faq-question");

question_tab.forEach((tab) => {
  tab.addEventListener("click", () => {
    let answer = tab.parentNode.querySelector(".faq-answer");
    tab.classList.toggle("open");
    answer.classList.toggle("active");
  });
});
