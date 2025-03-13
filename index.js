document.addEventListener("DOMContentLoaded", function () {
    const swiperElement = document.querySelector(".swiper-container-companies");

    if (swiperElement) { // Проверяем, есть ли такой элемент на странице
        new Swiper(swiperElement, {
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
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const swiperElement = document.querySelector(".swiper-container");

    if (swiperElement) { // Проверяем, существует ли элемент
        new Swiper(swiperElement, {
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
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const swiperElement = document.querySelector(".technique-cards-cont");

    if (swiperElement) { // Проверяем, существует ли элемент
        new Swiper(swiperElement, {
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
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button-3");
    const cartCenter = document.querySelector(".cart-center");
    const cartBottom = document.querySelector(".cart-bottom");
    const cartBottomMob = document.querySelector(".cart-bottom-mob");

    if (button && cartCenter && cartBottom && cartBottomMob) {
        button.addEventListener("click", () => {
            cartCenter.style.display = cartCenter.style.display === "none" ? "flex" : "none";
            cartBottom.style.display = cartBottom.style.display === "none" ? "block" : "none";
            cartBottomMob.style.display = cartBottomMob.style.display === "none" ? "block" : "none";
        });
    }
});







document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openButtons = document.querySelectorAll(".popup-open");
    const closeButton = document.querySelector(".popup-close");

    if (!popup) return; // Если попапа нет, код не выполняется

    // Открытие попапа
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    // Закрытие попапа (проверка, чтобы не вызвать ошибку)
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    // Закрытие при клике вне окна
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const deleteButton = document.querySelector(".delete-button");
    const popup = document.querySelector(".custom-popup");
    const closeButton = document.querySelector(".close-popup");

    if (deleteButton && popup) {
        deleteButton.addEventListener("click", function () {
            popup.classList.add("active");
        });
    }

    if (closeButton && popup) {
        closeButton.addEventListener("click", function () {
            popup.classList.remove("active");
        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-mob-menu");
    const menuPopup = document.querySelector(".menu-popup");
    const menuClose = document.querySelector(".menu-close");

    if (menuButton && menuPopup) {
        menuButton.addEventListener("click", function () {
            menuPopup.style.display = "flex";
        });
    }

    if (menuClose && menuPopup) {
        menuClose.addEventListener("click", function () {
            menuPopup.style.display = "none";
        });
    }

    if (menuPopup) {
        // Закрытие при клике вне меню
        menuPopup.addEventListener("click", function (event) {
            if (event.target === menuPopup) {
                menuPopup.style.display = "none";
            }
        });
    }
});



const openList = document.querySelector('.open-list');
    const mobGrid = document.querySelector('.mob-grid');
    const arrow = document.querySelector('.arrow23');

    openList.addEventListener('click', function() {
        // Переключаем видимость элемента .mob-grid
        if (mobGrid.style.display === 'none' || mobGrid.style.display === '') {
            mobGrid.style.display = 'grid';
            arrow.classList.add('rotate');  // Добавляем класс для поворота
        } else {
            mobGrid.style.display = 'none';
            arrow.classList.remove('rotate');  // Убираем класс поворота
        }
    });