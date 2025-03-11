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
       
        slidesPerView: 5, 
        spaceBetween: 30,
        breakpoints: {
            1200: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            990: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 3,
                spaceBetween: 10,   
            }
        },
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


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".technique-cards-cont", { // Теперь инициализируем Swiper на .swiper-container
        loop: false, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
       
        slidesPerView: 4, 
        spaceBetween: 30,
        breakpoints: {
            1379: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1006: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            687: {
                slidesPerView: 2,
                spaceBetween: 10,   
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 10,   
            }
        },
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button-3");
    const cartCenter = document.querySelector(".cart-center");
    const cartBottom = document.querySelector(".cart-bottom");
    const cartBottomMob = document.querySelector(".cart-bottom-mob");

    button.addEventListener("click", () => {
        cartCenter.style.display = cartCenter.style.display === "none" ? "flex" : "none";
        cartBottom.style.display = cartBottom.style.display === "none" ? "block" : "none";
        cartBottomMob.style.display = cartBottomMob.style.display === "none" ? "block" : "none";
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openButtons = document.querySelectorAll(".popup-open");
    const closeButton = document.querySelector(".popup-close");

    // Открытие попапа
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    // Закрытие попапа
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Закрытие при клике вне окна
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});



document.querySelector(".delete-button").addEventListener("click", function () {
    document.querySelector(".custom-popup").classList.add("active");
});

document.querySelector(".close-popup").addEventListener("click", function () {
    document.querySelector(".custom-popup").classList.remove("active");
});