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