
const swiperPartners = new Swiper('.partners_box', {
    loop: true,
    breakpoints: {
        350: {
            slidesPerView: 5,
            spaceBetween: 20,
        },

        568: {
            slidesPerView: 7,
            spaceBetween: 20,
        },

        1200: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
    },

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    speed: 3000,
    cssMode: false
})

// Swiper Pricing
let swiperCategories = new Swiper('.pricing_box', {
    // centeredSlides: true,
    on: {
        reachEnd: function () {
            document.querySelector('.pricing_btn-next').style.display = 'none';
        },
        reachBeginning: function () {
            document.querySelector('.pricing_btn-prev').style.display = 'none';
        },
        fromEdge: function () {
            document.querySelector('.pricing_btn-next').style.display = 'flex';
            document.querySelector('.pricing_btn-prev').style.display = 'flex';
        }
    },

    navigation: {
        nextEl: '.pricing_btn-next',
        prevEl: '.pricing_btn-prev',
    },

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true,
    // },

    breakpoints: {
        350: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        380: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 2.1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3.8,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 5.5,
            spaceBetween: 20,
        },
    }
});

const swiperEvent = new Swiper('.event_box', {
    loop: false,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 1.1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 1.1,
            spaceBetween: 20,
        }
    },

    on: {
        reachEnd: function () {
            document.querySelector('.events_btn-next').style.display = 'none';

            document.querySelector('.events_btn-prev').style.display = 'flex';
        },
        reachBeginning: function () {
            document.querySelector('.events_btn-prev').style.display = 'none';

            document.querySelector('.events_btn-next').style.display = 'flex';
        }
    },

    navigation: {
        nextEl: '.events_btn-next',
        prevEl: '.events_btn-prev',
    },

    pagination: {
        el: '.events-pagination',
        dynamicBullets: true,
        clickable: true,
    },
})

const swiperFames = new Swiper('.fame_card-box', {
    loop: false,

    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        350: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.4,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 2.7,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.fame-pagination',
        dynamicBullets: true,
        clickable: true,
    },
})

const swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: false,
    navigation: {
        nextEl: '.testimonial_btn-next',
        prevEl: '.testimonial_btn-prev',
    },

    pagination: {
        el: '.testimonial-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        350: {
            slidesPerView: 1.1,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 2.8,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3.4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        }
    },
});
