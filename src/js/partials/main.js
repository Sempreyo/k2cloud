document.addEventListener("DOMContentLoaded", () => {
    const HEADER_SCROLL_BG = 50;
    const HEADER_SCROLL_HIDE = 400;
    const selects = $(".js-custom-select");

    if (selects && selects.length > 0) {
        selects.select2({
            minimumResultsForSearch: -1
        });
    }

    const openNav = () => {
        let bodyState = document.body.getAttribute("data-state");

        if (bodyState === "mobile-menu") {
            document.body.dataset.state = "";
        } else {
            document.body.dataset.state = "mobile-menu";
        }
    }

    /* Мобильное меню */
    const burger = document.querySelector(".header__burger");
    const closeButtonMenu = document.querySelector(".header__menu-close");

    burger.addEventListener("click", openNav);
    closeButtonMenu.addEventListener("click", openNav);

    /* Смарт хэдер */
    const header = document.querySelector(".header");
    let previousTop = window.scrollY;
    header.classList.remove("header--hide");

    const setHeaderStyles = () => {
        let currentTop = window.scrollY;

        if (currentTop > HEADER_SCROLL_BG) {
            header.classList.add("header--bg");
        } else {
            header.classList.remove("header--bg");
        }

        if (currentTop > HEADER_SCROLL_HIDE && currentTop > previousTop) {
            header.classList.add("header--hide");
        } else {
            header.classList.remove("header--hide");
        }
        previousTop = currentTop;
    };

    document.addEventListener("scroll", () => {
        setHeaderStyles();
    });

    setHeaderStyles();

    /* Якори */
    const anchors = document.querySelectorAll('.anchor');

    if (anchors && anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                //e.preventDefault();

                if (window.location.hash) {
                    document.querySelector(window.location.hash).scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                if (window.matchMedia("(max-width: 767px)").matches) {
                    openNav();
                }
            });
        });
    }

    const hero = document.querySelector(".hero");
    if (hero) {
        /* Разделить строку на символы */
        const splitText = new SplitType(".hero__title", {
            types: "chars"
        });

        /* Анимация появления символов */
        const heroObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const chars = document.querySelectorAll(".hero__title .char");

                    chars.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.transform = 'translateY(0)';
                        }, 50 * index);
                    });
                }
            });
        });

        heroObserver.observe(hero);
    }
});
