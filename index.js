document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container-companies", { // Теперь инициализируем Swiper на .swiper-container
        loop: true, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        centeredSlides: true, 
        slidesPerView: 5, 
        spaceBetween: 30,
    });
});


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", { // Теперь инициализируем Swiper на .swiper-container
        loop: true, 
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: ".swiper-plag",
            clickable: true, // Делает точки кликабельными
        },
        centeredSlides: true, 
        slidesPerView: 1, 
        spaceBetween: 10,
    });
});